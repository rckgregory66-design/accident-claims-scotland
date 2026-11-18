const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "access-control-allow-methods": "POST, OPTIONS",
  "access-control-allow-headers": "content-type",
  "vary": "Origin",
};
const SITE_ORIGIN = "https://accident-claims-scotland.com";
const ALLOWED_HOSTS = new Set(["www.accident-claims-scotland.com", "accident-claims-scotland.com"]);
const ENDPOINT_HOSTS = new Set([...ALLOWED_HOSTS, "accident-claims-scotland-enquiries.rckgregory66.workers.dev"]);
const CLAIM_TYPES = new Set([
  "Road traffic accident", "Accident at work", "Medical negligence", "Industrial disease",
  "Serious injury", "Public place accident", "Criminal injury", "Fatal accident", "Not sure",
  "Callback request",
]);
const CALLBACK_TIMES = new Set(["Morning", "Afternoon", "Evening", "Anytime"]);
const FORM_TYPES = new Set(["enquiry", "callback", "estimator"]);

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function originHost(value) {
  try {
    return value ? new URL(value).hostname : null;
  } catch {
    return null;
  }
}

function responseHeaders(origin) {
  return {
    ...JSON_HEADERS,
    ...(ALLOWED_HOSTS.has(originHost(origin)) ? { "access-control-allow-origin": origin } : {}),
  };
}

function json(body, status = 200, origin = null) {
  return new Response(JSON.stringify(body), { status, headers: responseHeaders(origin) });
}

function isFormRequest(request) {
  const contentType = request.headers.get("content-type") || "";
  return contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data");
}

function isAllowedSource(request) {
  const origin = request.headers.get("origin");
  if (ALLOWED_HOSTS.has(originHost(origin))) return true;
  // Navigational form POSTs may omit Origin; accept a same-site Referer in that case only.
  if (!isFormRequest(request)) return false;
  return ALLOWED_HOSTS.has(originHost(request.headers.get("referer")));
}

function safeReturnPath(value) {
  const path = clean(value, 200);
  if (/^\/(?!\/)[A-Za-z0-9\-._~/?=&%]*$/.test(path)) return path.split("#")[0];
  return "/contact";
}

function redirectToSite(returnTo, sent) {
  const url = new URL(safeReturnPath(returnTo), SITE_ORIGIN);
  url.searchParams.set("sent", sent);
  return Response.redirect(url.toString(), 303);
}

function respond(request, body, payload, status, sent) {
  if (isFormRequest(request)) {
    return redirectToSite(body.returnTo, status >= 200 && status < 300 ? sent : "error");
  }
  return json(payload, status, request.headers.get("origin"));
}

async function readBody(request) {
  if (isFormRequest(request)) {
    const formData = await request.formData().catch(() => null);
    if (!formData) return null;
    const body = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") body[key] = value;
    }
    return body;
  }
  const rawBody = await request.text().catch(() => "");
  if (rawBody.length > 10_000) return { _tooLarge: true };
  try {
    const body = JSON.parse(rawBody);
    if (!body || typeof body !== "object" || Array.isArray(body)) return null;
    return body;
  } catch {
    return null;
  }
}

function buildEnquiry(body) {
  const formType = clean(body.formType, 20) || "enquiry";
  const bestTime = clean(body.bestTime, 20);
  const injuryType = clean(body.injuryType, 80);
  let description = clean(body.description, 3000);
  let claimType = clean(body.claimType, 50);

  if (formType === "callback") {
    claimType = "Callback request";
    description = `Callback request. Best time: ${bestTime || "not specified"}.`;
  } else if (formType === "estimator") {
    if (!claimType) claimType = "Not sure";
    description = description || `Compensation estimator follow-up.${injuryType ? ` Injury type selected: ${injuryType}.` : ""}`;
  }

  return {
    formType,
    name: clean(body.name, 100),
    phone: clean(body.phone, 30),
    email: clean(body.email, 150),
    postcode: clean(body.postcode, 12),
    claimType,
    incidentDate: clean(body.incidentDate, 10),
    description,
    hasSolicitor: clean(body.hasSolicitor, 20),
    consent: clean(body.consent, 10),
    bestTime,
    company: clean(body.company, 100),
  };
}

function isValidEnquiry(enquiry) {
  if (!enquiry.name || !enquiry.phone || enquiry.consent !== "yes") return false;
  if (!FORM_TYPES.has(enquiry.formType)) return false;
  if (enquiry.formType === "callback") {
    return CALLBACK_TIMES.has(enquiry.bestTime);
  }
  if (enquiry.formType === "estimator") {
    return CLAIM_TYPES.has(enquiry.claimType) && enquiry.description.length > 0;
  }
  return (
    Boolean(enquiry.description) &&
    CLAIM_TYPES.has(enquiry.claimType) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)
  );
}

const worker = {
  async fetch(request, env) {
    const requestUrl = new URL(request.url);
    const origin = request.headers.get("origin");
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: responseHeaders(origin) });
    if (request.method !== "POST") return json({ error: "Method not allowed." }, 405, origin);

    if (!ENDPOINT_HOSTS.has(requestUrl.hostname) || !isAllowedSource(request)) {
      return json({ error: "Request origin was not accepted." }, 403, origin);
    }

    if (Number(request.headers.get("content-length") || 0) > 10_000) {
      return json({ error: "The enquiry is too large." }, 413, origin);
    }

    const body = await readBody(request);
    if (body?._tooLarge) return json({ error: "The enquiry is too large." }, 413, origin);
    if (!body) return respond(request, {}, { error: "Please complete all required fields correctly." }, 400, "error");

    const enquiry = buildEnquiry(body);
    if (enquiry.company) return respond(request, body, { ok: true }, 200, enquiry.formType === "callback" ? "callback" : enquiry.formType === "estimator" ? "estimator" : "enquiry");

    if (!isValidEnquiry(enquiry)) {
      return respond(request, body, { error: "Please complete all required fields correctly." }, 400, "error");
    }

    try {
      const subject = `New ${enquiry.claimType} enquiry — ${enquiry.name}`.replace(/[\r\n]+/g, " ");
      const messageText = [
        `Form: ${enquiry.formType}`,
        `Name: ${enquiry.name}`,
        `Phone: ${enquiry.phone}`,
        `Email: ${enquiry.email || "Not provided"}`,
        `Postcode: ${enquiry.postcode || "Not provided"}`,
        `Claim type: ${enquiry.claimType}`,
        `Incident/date of knowledge: ${enquiry.incidentDate || "Not provided"}`,
        `Already instructed: ${enquiry.hasSolicitor || "Not provided"}`,
        enquiry.bestTime ? `Best time to call: ${enquiry.bestTime}` : "",
        "",
        "Description:",
        enquiry.description,
      ].filter((line, index, all) => line !== "" || all[index - 1] !== "").join("\n");

      const email = {
        from: env.ENQUIRY_FROM,
        to: ["rckgregory66@gmail.com"],
        subject,
        text: messageText,
      };
      if (enquiry.email) email.reply_to = enquiry.email;

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${env.RESEND_API_KEY}`,
          "content-type": "application/json",
          "idempotency-key": crypto.randomUUID(),
        },
        body: JSON.stringify(email),
      });

      if (!resendResponse.ok) {
        const resendError = await resendResponse.text();
        console.error("Resend delivery failed", resendResponse.status, resendError);
        return respond(request, body, { error: "Delivery failed. Please try again later." }, 503, "error");
      }

      const delivery = await resendResponse.json();
      const sent = enquiry.formType === "callback" ? "callback" : enquiry.formType === "estimator" ? "estimator" : "enquiry";
      return respond(request, body, { ok: true, id: delivery.id }, 200, sent);
    } catch (error) {
      console.error("Enquiry email delivery failed", error);
      return respond(request, body, { error: "Delivery failed. Please try again later." }, 503, "error");
    }
  },
};

export default worker;
