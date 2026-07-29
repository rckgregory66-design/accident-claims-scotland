"use client";

import Link from "next/link";
import { useState } from "react";

const CLAIM_TYPES = [
  "Road traffic accident",
  "Accident at work",
  "Medical negligence",
  "Industrial disease",
  "Serious injury",
  "Public place accident",
  "Criminal injury",
  "Fatal accident",
  "Not sure",
];

interface Props {
  variant?: "hero" | "inline" | "page";
  title?: string;
}

export default function ClaimForm({ variant = "inline", title }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const isHero = variant === "hero";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null);

    if (!response?.ok) {
      const data = response ? await response.json().catch(() => null) : null;
      setError(data?.error ?? "Your enquiry could not be sent. Please try again later.");
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div role="status" tabIndex={-1} className="bg-green-50 border border-green-300 rounded-xl p-8 text-center">
        <div aria-hidden="true" className="text-4xl mb-3">✓</div>
        <h2 className="text-xl font-bold text-green-900 mb-2">Enquiry sent</h2>
        <p className="text-green-900">
          Your enquiry has been accepted for delivery. Keep a copy of any deadline information and seek
          urgent independent advice if a time limit may be approaching.
        </p>
      </div>
    );
  }

  return (
    <div className={isHero ? "" : "bg-white rounded-xl shadow-md border border-gray-100 p-6 sm:p-8"}>
      {title ? (
        <h2 className="text-2xl font-bold text-[#0f2044] mb-2">{title}</h2>
      ) : (
        <h3 className="text-xl font-bold text-[#0f2044] mb-1">Start Your Free Claim Check</h3>
      )}
      <p className="text-sm text-gray-600 mb-5">
        General enquiry form. No obligation. Submitting it does not create a solicitor-client relationship
        or stop a legal time limit.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="cf-name">Full name *</label>
            <input id="cf-name" name="name" type="text" required maxLength={100} autoComplete="name" className="form-input" />
          </div>
          <div>
            <label className="form-label" htmlFor="cf-phone">Phone number *</label>
            <input id="cf-phone" name="phone" type="tel" required maxLength={30} autoComplete="tel" className="form-input" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="cf-email">Email address *</label>
            <input id="cf-email" name="email" type="email" required maxLength={150} autoComplete="email" className="form-input" />
          </div>
          <div>
            <label className="form-label" htmlFor="cf-postcode">Postcode</label>
            <input id="cf-postcode" name="postcode" type="text" maxLength={12} autoComplete="postal-code" className="form-input" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="cf-type">Type of claim *</label>
            <select id="cf-type" name="claimType" required className="form-input">
              <option value="">Select claim type</option>
              {CLAIM_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
          <div>
            <label className="form-label" htmlFor="cf-date">Accident or knowledge date</label>
            <input id="cf-date" name="incidentDate" type="date" className="form-input" />
          </div>
        </div>
        <div>
          <label className="form-label" htmlFor="cf-desc">Briefly, what happened? *</label>
          <textarea id="cf-desc" name="description" required maxLength={3000} rows={5} className="form-input resize-y" />
          <p className="text-xs text-gray-500 mt-1">Do not include medical records, ID documents or highly sensitive information.</p>
        </div>
        <div>
          <label className="form-label" htmlFor="cf-solicitor">Have you instructed a solicitor?</label>
          <select id="cf-solicitor" name="hasSolicitor" className="form-input">
            <option value="">Please select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="Not sure">Not sure</option>
          </select>
        </div>
        <div className="flex items-start gap-3">
          <input id="cf-consent" name="consent" value="yes" type="checkbox" required className="mt-1 h-4 w-4" />
          <label htmlFor="cf-consent" className="text-sm text-gray-700">
            I consent to this information being emailed for the purpose of responding to my enquiry, in
            accordance with the <Link href="/privacy-policy" className="text-red-700 underline">Privacy Policy</Link>.
          </label>
        </div>
        {status === "error" && <p role="alert" className="rounded-lg bg-red-50 border border-red-300 p-3 text-sm text-red-900">{error}</p>}
        <button type="submit" disabled={status === "sending"} className="w-full bg-red-700 hover:bg-red-800 disabled:opacity-60 text-white font-bold py-4 rounded-lg text-lg">
          {status === "sending" ? "Sending securely…" : "Send My Enquiry →"}
        </button>
        <p className="text-xs text-gray-500 text-center">
          Time limits apply. A response is not guaranteed before any deadline.
        </p>
      </form>
    </div>
  );
}
