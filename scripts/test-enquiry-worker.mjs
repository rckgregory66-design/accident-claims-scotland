// Regression test for workers/enquiry.js with a mocked email provider (no real email is sent).
import assert from "node:assert/strict";
import worker from "../workers/enquiry.js";

const URL_ = "https://accident-claims-scotland-enquiries.rckgregory66.workers.dev";
const ORIGIN = "https://accident-claims-scotland.com";
const valid = {
  name: "Test Person", phone: "01234 567890", email: "test@example.com", claimType: "Road traffic accident",
  description: "Test description", consent: "yes",
};
let sent = 0;
let providerStatus = 200;
globalThis.fetch = async () => {
  sent++;
  return new Response(JSON.stringify({ id: "mock" }), { status: providerStatus });
};
const env = { RESEND_API_KEY: "mock", ENQUIRY_FROM: "mock@example.com" };
const post = (body, headers = { origin: ORIGIN }) =>
  worker.fetch(new Request(URL_, { method: "POST", headers, body: typeof body === "string" ? body : JSON.stringify(body) }), env);

assert.equal((await post(valid)).status, 200);
assert.equal(sent, 1);
assert.equal((await post({ ...valid, company: "spam" })).status, 200);
assert.equal(sent, 1, "honeypot must not send");
assert.equal((await post({ ...valid, email: "bad" })).status, 400);
assert.equal((await post({ ...valid, consent: "" })).status, 400);
assert.equal((await post("not json")).status, 400);
assert.equal((await post("[]")).status, 400);
assert.equal((await post("x".repeat(20000))).status, 413);
assert.equal((await post(valid, { origin: "https://evil.example" })).status, 403);
assert.equal((await post(valid, { origin: "not a url" })).status, 403);
assert.equal((await post(valid, {})).status, 403);
providerStatus = 500;
assert.equal((await post(valid)).status, 503, "provider failure must not report success");

// Callback and estimator forms, including no-JS urlencoded POST + 303 redirect.
const callback = { formType: "callback", name: "Test Person", phone: "01234 567890", bestTime: "Morning", consent: "yes" };
sent = 0;
providerStatus = 200;
const callbackJson = await post(callback);
assert.equal(callbackJson.status, 200);
assert.equal(sent, 1);

const formPost = (fields, headers = { origin: ORIGIN, "content-type": "application/x-www-form-urlencoded" }) =>
  worker.fetch(new Request(URL_, {
    method: "POST",
    headers,
    body: new URLSearchParams(fields).toString(),
    redirect: "manual",
  }), env);

sent = 1;
const formOk = await formPost({ ...callback, returnTo: "/compensation-calculator-scotland" });
assert.equal(formOk.status, 303);
assert.equal(formOk.headers.get("location"), "https://accident-claims-scotland.com/compensation-calculator-scotland?sent=callback");
assert.equal(sent, 2);

const formRefererOnly = await formPost(
  { ...callback, returnTo: "/" },
  { referer: `${ORIGIN}/contact`, "content-type": "application/x-www-form-urlencoded" },
);
assert.equal(formRefererOnly.status, 303, "form POST may use Referer when Origin is absent");

const badReturn = await formPost({ ...callback, returnTo: "https://evil.example/" });
assert.equal(badReturn.status, 303);
assert.equal(badReturn.headers.get("location"), "https://accident-claims-scotland.com/contact?sent=callback");

const missingTime = await post({ ...callback, bestTime: "" });
assert.equal(missingTime.status, 400);

const estimator = {
  formType: "estimator", name: "Test Person", phone: "01234 567890", consent: "yes", injuryType: "Neck injuries",
};
sent = 2;
assert.equal((await post(estimator)).status, 200);
assert.equal(sent, 3);

console.log("enquiry worker tests passed");

