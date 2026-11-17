"use client";

import { useState } from "react";
import Link from "next/link";
import { ENQUIRY_WORKER_URL, OPERATOR, PHONE } from "@/data/siteConfig";
import { trackEvent } from "@/lib/events";

/**
 * Injury-type guide for the compensation planner.
 *
 * Official Judicial College Guidelines (17th edition, 2024) figures are copyright
 * of the Judicial College / Oxford University Press and are not reproduced here.
 * This list uses only the published chapter headings, as a guide to the types of
 * injury the Guidelines cover. It is not a valuation of any claim.
 */
const CATEGORIES = [
  "Injuries resulting in death",
  "Injuries involving paralysis",
  "Brain and head injury",
  "Psychiatric and psychological damage",
  "Injuries affecting the senses",
  "Injuries to internal organs",
  "Orthopaedic injuries — neck",
  "Orthopaedic injuries — back",
  "Orthopaedic injuries — shoulder",
  "Orthopaedic injuries — pelvis and hips",
  "Orthopaedic injuries — arm, elbow, wrist and hand",
  "Orthopaedic injuries — leg, knee, ankle and foot",
  "Chronic pain",
  "Facial injuries and scarring",
  "Minor injuries",
];

export default function CompensationGuide() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [injuryType, setInjuryType] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (typeof fetch === "undefined") return;
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    const response = await fetch(ENQUIRY_WORKER_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null);
    if (!response?.ok) {
      const payload = response ? await response.json().catch(() => null) : null;
      setError(payload?.error ?? "Your details could not be sent. Please try again later.");
      setStatus("error");
      trackEvent("form_submit_error", { variant: "estimator", reason: !response ? "network" : response.status >= 500 ? "server" : "rejected" });
      return;
    }
    form.reset();
    setStatus("sent");
    trackEvent("estimator_complete", { location: "compensation_calculator" });
    trackEvent("form_submit_success", { variant: "estimator" });
  }

  return (
    <div id="injury-guide" className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm not-prose">
      <h2 className="text-2xl font-bold text-[#0f2044]">Injury-type guide (not a valuation)</h2>
      <p className="mt-3 text-slate-700">
        Scottish courts and solicitors often use the Judicial College Guidelines for the Assessment of General Damages in Personal Injury Cases (17th edition, 2024) as a reference when considering solatium — pain, suffering and loss of amenity. The Guidelines are not a Scottish tariff, they are not binding, and they do not decide what any individual claim is worth. Financial losses such as earnings, care and treatment are assessed separately from these categories, on the evidence.
      </p>
      <p className="mt-3 text-slate-700">
        The official Guidelines set numerical brackets for each category. Those figures are published by the Judicial College and Oxford University Press and are not copied on this website. This list is a guide only to the types of injury the 17th edition covers. It cannot tell you what your claim is worth.
      </p>
      <p className="mt-3 text-slate-700">
        The fixed whiplash tariff introduced for England and Wales by the Civil Liability Act 2018 does not apply in Scotland. Soft-tissue injury claims here are assessed on medical evidence and comparable awards, not that tariff.
      </p>

      <label htmlFor="injury-type" className="mt-6 block font-bold text-[#0f2044]">Choose an injury category if you want to read it in the list</label>
      <select
        id="injury-type"
        name="injuryType"
        form="estimator-capture"
        value={injuryType}
        onChange={(event) => {
          setInjuryType(event.target.value);
          if (event.target.value) trackEvent("estimator_complete", { location: "injury_guide_select" });
        }}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 sm:max-w-md"
      >
        <option value="">Select a category (optional)</option>
        {CATEGORIES.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>

      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {CATEGORIES.map((item) => (
          <li
            key={item}
            className={`rounded-lg border px-4 py-3 text-sm ${injuryType === item ? "border-red-700 bg-red-50 font-semibold text-[#0f2044]" : "border-slate-200 text-slate-700"}`}
          >
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-slate-600">
        Source: Judicial College, <em>Guidelines for the Assessment of General Damages in Personal Injury Cases</em>, 17th edition (2024). See also the{" "}
        <a href="https://www.judiciary.uk/publications/?s=judicial+college+guidelines" className="text-red-700 underline" target="_blank" rel="noopener noreferrer">Judiciary publications search</a>
        {" "}and this site&apos;s <Link href="/personal-injury-compensation-scotland" className="text-red-700 underline">compensation guide</Link>.
      </p>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <h3 className="text-xl font-bold text-[#0f2044]">Optional: ask us to call you about a claim</h3>
        <p className="mt-2 text-sm text-slate-600">
          If you would like someone to call you, leave your name and phone number. This does not start a claim, is not a valuation and does not stop a time limit. Or call{" "}
          <a href={PHONE.href} data-track="estimator" className="font-semibold text-red-700 underline">{PHONE.display}</a>.
        </p>
        {status === "sent" ? (
          <p role="status" className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-900">
            Your details were accepted for delivery to the website operator. A reply is not guaranteed, and no solicitor has been instructed.
          </p>
        ) : (
          <form id="estimator-capture" method="POST" action={ENQUIRY_WORKER_URL} onSubmit={handleSubmit} className="mt-4 grid gap-3 sm:grid-cols-2">
            <input type="hidden" name="formType" value="estimator" />
            <input type="hidden" name="returnTo" value="/compensation-calculator-scotland" />
            <div className="hidden" aria-hidden="true">
              <label htmlFor="estimator-company">Company</label>
              <input id="estimator-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div>
              <label htmlFor="estimator-name" className="block text-sm font-medium text-slate-800">Name</label>
              <input id="estimator-name" name="name" type="text" required autoComplete="name" maxLength={100} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
            </div>
            <div>
              <label htmlFor="estimator-phone" className="block text-sm font-medium text-slate-800">Phone</label>
              <input id="estimator-phone" name="phone" type="tel" required autoComplete="tel" maxLength={30} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
            </div>
            <div className="sm:col-span-2 flex items-start gap-2">
              <input id="estimator-consent" name="consent" value="yes" type="checkbox" required className="mt-1 h-4 w-4" />
              <label htmlFor="estimator-consent" className="text-sm text-slate-700">
                I consent to {OPERATOR.legalName} contacting me about this enquiry, and I understand that my details may be passed to Thompsons Scotland LLP, a firm regulated by the Law Society of Scotland.
              </label>
            </div>
            {status === "error" && <p role="alert" className="sm:col-span-2 rounded-lg bg-red-50 border border-red-200 p-2 text-sm text-red-900">{error}</p>}
            <div className="sm:col-span-2">
              <button type="submit" disabled={status === "sending"} className="rounded-lg bg-red-700 px-5 py-3 font-semibold text-white hover:bg-red-800 disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send my details"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
