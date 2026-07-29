const JSON_HEADERS = { "content-type": "application/json; charset=utf-8" };
const ALLOWED_HOSTS = new Set(["www.accident-claims-scotland.com", "accident-claims-scotland.com"]);
const CLAIM_TYPES = new Set([
  "Road traffic accident", "Accident at work", "Medical negligence", "Industrial disease",
  "Serious injury", "Public place accident", "Criminal injury", "Fatal accident", "Not sure",
]);

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function onRequestPost({ request, env }) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");
  if (!ALLOWED_HOSTS.has(requestUrl.hostname) || (origin && !ALLOWED_HOSTS.has(new URL(origin).hostname))) {
    return Response.json({ error: "Request origin was not accepted." }, { status: 403, headers: JSON_HEADERS });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 10_000) {
    return Response.json({ error: "The enquiry is too large." }, { status: 413, headers: JSON_HEADERS });
  }

  const body = await request.json().catch(() => null);
  if (!body || clean(body.company, 100)) {
    return Response.json({ ok: true }, { headers: JSON_HEADERS });
  }

  const enquiry = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 30),
    email: clean(body.email, 150),
    postcode: clean(body.postcode, 12),
    claimType: clean(body.claimType, 50),
    incidentDate: clean(body.incidentDate, 10),
    description: clean(body.description, 3000),
    hasSolicitor: clean(body.hasSolicitor, 20),
    consent: clean(body.consent, 10),
  };

  if (
    !enquiry.name || !enquiry.phone || !enquiry.description || enquiry.consent !== "yes" ||
    !CLAIM_TYPES.has(enquiry.claimType) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)
  ) {
    return Response.json({ error: "Please complete all required fields correctly." }, { status: 400, headers: JSON_HEADERS });
  }

  try {
    const result = await env.ENQUIRY_EMAIL.send({
      to: "rckgregory66@gmail.com",
      from: "enquiries@accident-claims-scotland.com",
      replyTo: enquiry.email,
      subject: `New ${enquiry.claimType} enquiry — ${enquiry.name}`,
      text: [
        `Name: ${enquiry.name}`,
        `Phone: ${enquiry.phone}`,
        `Email: ${enquiry.email}`,
        `Postcode: ${enquiry.postcode || "Not provided"}`,
        `Claim type: ${enquiry.claimType}`,
        `Incident/date of knowledge: ${enquiry.incidentDate || "Not provided"}`,
        `Already instructed: ${enquiry.hasSolicitor || "Not provided"}`,
        "",
        "Description:",
        enquiry.description,
      ].join("\n"),
    });
    return Response.json({ ok: true, reference: result.messageId }, { headers: JSON_HEADERS });
  } catch (error) {
    console.error("Enquiry email delivery failed", error);
    return Response.json({ error: "Delivery failed. Please try again later." }, { status: 503, headers: JSON_HEADERS });
  }
}

export function onRequest() {
  return Response.json({ error: "Method not allowed." }, { status: 405, headers: JSON_HEADERS });
}
