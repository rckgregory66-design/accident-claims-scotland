const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "access-control-allow-methods": "POST, OPTIONS",
  "access-control-allow-headers": "content-type",
  "vary": "Origin",
};
const ALLOWED_HOSTS = new Set(["www.accident-claims-scotland.com", "accident-claims-scotland.com"]);
const ENDPOINT_HOSTS = new Set([...ALLOWED_HOSTS, "accident-claims-scotland-enquiries.rckgregory66.workers.dev"]);
const CLAIM_TYPES = new Set([
  "Road traffic accident", "Accident at work", "Medical negligence", "Industrial disease",
  "Serious injury", "Public place accident", "Criminal injury", "Fatal accident", "Not sure",
]);

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function responseHeaders(origin) {
  return {
    ...JSON_HEADERS,
    ...(origin && ALLOWED_HOSTS.has(new URL(origin).hostname) ? { "access-control-allow-origin": origin } : {}),
  };
}

function json(body, status = 200, origin = null) {
  return new Response(JSON.stringify(body), { status, headers: responseHeaders(origin) });
}

const worker = {
  async fetch(request, env) {
    const requestUrl = new URL(request.url);
    const origin = request.headers.get("origin");
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: responseHeaders(origin) });
    if (request.method !== "POST") return json({ error: "Method not allowed." }, 405, origin);

    if (!origin || !ENDPOINT_HOSTS.has(requestUrl.hostname) || !ALLOWED_HOSTS.has(new URL(origin).hostname)) {
      return json({ error: "Request origin was not accepted." }, 403, origin);
    }

    if (Number(request.headers.get("content-length") || 0) > 10_000) {
      return json({ error: "The enquiry is too large." }, 413, origin);
    }

    const body = await request.json().catch(() => null);
    if (!body || clean(body.company, 100)) return json({ ok: true }, 200, origin);

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
      return json({ error: "Please complete all required fields correctly." }, 400, origin);
    }

    try {
      const subject = `New ${enquiry.claimType} enquiry — ${enquiry.name}`.replace(/[\r\n]+/g, " ");
      const messageText = [
          `Name: ${enquiry.name}`, `Phone: ${enquiry.phone}`, `Email: ${enquiry.email}`,
          `Postcode: ${enquiry.postcode || "Not provided"}`, `Claim type: ${enquiry.claimType}`,
          `Incident/date of knowledge: ${enquiry.incidentDate || "Not provided"}`,
          `Already instructed: ${enquiry.hasSolicitor || "Not provided"}`, "", "Description:", enquiry.description,
        ].join("\n");
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${env.RESEND_API_KEY}`,
          "content-type": "application/json",
          "idempotency-key": crypto.randomUUID(),
        },
        body: JSON.stringify({
          from: env.ENQUIRY_FROM,
          to: ["rckgregory66@gmail.com"],
          reply_to: enquiry.email,
          subject,
          text: messageText,
        }),
      });

      if (!resendResponse.ok) {
        const resendError = await resendResponse.text();
        console.error("Resend delivery failed", resendResponse.status, resendError);
        return json({ error: "Delivery failed. Please try again later." }, 503, origin);
      }

      const delivery = await resendResponse.json();
      return json({ ok: true, id: delivery.id }, 200, origin);
    } catch (error) {
      console.error("Enquiry email delivery failed", error);
      return json({ error: "Delivery failed. Please try again later." }, 503, origin);
    }
  },
};

export default worker;
