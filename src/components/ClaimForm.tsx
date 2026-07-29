"use client";
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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real API call
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Enquiry Received</h3>
        <p className="text-green-700">
          Thank you for getting in touch. A member of our team will review your
          enquiry and contact you shortly.
        </p>
      </div>
    );
  }

  const isHero = variant === "hero";

  return (
    <div className={isHero ? "" : "bg-white rounded-xl shadow-md border border-gray-100 p-6 sm:p-8"}>
      {title && (
        <h2 className="text-2xl font-bold text-[#0f2044] mb-2">{title}</h2>
      )}
      {!title && !isHero && (
        <h3 className="text-xl font-bold text-[#0f2044] mb-1">Start Your Free Claim Check</h3>
      )}
      {!isHero && (
        <p className="text-sm text-gray-500 mb-5">
          General enquiry form. No obligation.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="cf-name">Full name *</label>
            <input id="cf-name" type="text" required className="form-input" placeholder="Your full name" />
          </div>
          <div>
            <label className="form-label" htmlFor="cf-phone">Phone number *</label>
            <input id="cf-phone" type="tel" required className="form-input" placeholder="Best number to call" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="cf-email">Email address *</label>
            <input id="cf-email" type="email" required className="form-input" placeholder="your@email.com" />
          </div>
          <div>
            <label className="form-label" htmlFor="cf-postcode">Postcode</label>
            <input id="cf-postcode" type="text" className="form-input" placeholder="e.g. G1 1AA" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="cf-type">Type of claim *</label>
            <select id="cf-type" required className="form-input">
              <option value="">Select claim type</option>
              {CLAIM_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="form-label" htmlFor="cf-date">Date of accident / date of knowledge</label>
            <input id="cf-date" type="date" className="form-input" />
          </div>
        </div>

        <div>
          <label className="form-label" htmlFor="cf-desc">What happened? *</label>
          <textarea
            id="cf-desc"
            required
            rows={4}
            className="form-input resize-none"
            placeholder="Please give a brief description of what happened and any injuries you suffered."
          />
        </div>

        <div>
          <label className="form-label" htmlFor="cf-solicitor">Have you already instructed a solicitor?</label>
          <select id="cf-solicitor" className="form-input">
            <option value="">Please select</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
            <option value="unsure">Not sure</option>
          </select>
        </div>

        <div className="flex items-start gap-3 pt-1">
          <input
            id="cf-consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
          />
          <label htmlFor="cf-consent" className="text-sm text-gray-600">
            I consent to my personal data being used to process this enquiry in
            accordance with the{" "}
            <a href="/privacy-policy" className="text-red-700 underline">Privacy Policy</a>.
            I understand this is a no-obligation enquiry and I will not be pressured to proceed.
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-700 hover:bg-red-800 disabled:opacity-60 text-white font-bold py-4 rounded-lg text-lg transition-colors shadow-sm"
        >
          {loading ? "Sending…" : "Start My Free Claim Check →"}
        </button>

        <p className="text-xs text-gray-400 text-center">
          Your enquiry is free and no obligation. Time limits apply to personal injury claims — do not delay.
        </p>
      </form>
    </div>
  );
}
