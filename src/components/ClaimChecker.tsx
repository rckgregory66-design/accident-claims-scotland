"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { trackEvent } from "@/lib/events";

const STORAGE_KEY = "acs-claim-checker";

const INCIDENT_TYPES = [
  "Road traffic accident",
  "Accident at work",
  "Medical negligence",
  "Industrial disease",
  "Serious injury",
  "Public place accident",
  "Criminal injury",
  "Fatal accident",
  "Not sure",
] as const;

const WHEN_OPTIONS = [
  { value: "within-3-years", label: "In the last three years" },
  { value: "over-3-years", label: "More than three years ago" },
  { value: "under-16", label: "I was under 16 at the time" },
  { value: "prefer-not", label: "I'd rather not say" },
] as const;

const FAULT_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "partly", label: "Partly" },
  { value: "not-sure", label: "Not sure" },
  { value: "no", label: "No" },
] as const;

export type CheckerPrefill = {
  claimType: string;
  when: string;
  fault: string;
};

export function readCheckerPrefill(): CheckerPrefill | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CheckerPrefill) : null;
  } catch {
    return null;
  }
}

function savePrefill(prefill: CheckerPrefill) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(prefill));
  } catch {
    // ignore quota / private mode
  }
}

function timeLimitNote(when: string): string {
  // Wording stays within what the site already says. Never tell someone they are out of time.
  if (when === "under-16") {
    return "For most personal injury claims in Scotland, time under 16 does not count towards the usual three-year period. Different rules can apply in some cases. Please do not assume you cannot claim — a Scottish solicitor can advise on your circumstances.";
  }
  if (when === "over-3-years") {
    return "In Scotland the general time limit is three years from the date of the accident or, if later, the date of knowledge, under the Prescription and Limitation (Scotland) Act 1973. Different rules may apply for children, adults who lack legal capacity, fatal accident claims and some industrial disease claims. Please do not assume you are out of time — a Scottish solicitor can advise.";
  }
  return "In Scotland the general time limit is three years from the date of the accident or, if later, the date of knowledge, under the Prescription and Limitation (Scotland) Act 1973. Time under 16 does not usually count. Do not delay, because waiting can still affect the evidence and the deadline.";
}

function faultNote(fault: string): string {
  if (fault === "partly") {
    return "In Scotland, contributory negligence may reduce the amount of compensation, but it does not necessarily prevent a claim altogether.";
  }
  if (fault === "no") {
    return "Most compensation claims depend on showing that someone else was at fault, or that a scheme such as CICA applies. Liability can be hard to judge without the facts, so it is still worth asking a Scottish solicitor rather than assuming you cannot claim.";
  }
  if (fault === "not-sure") {
    return "You do not need to have decided who was at fault before you ask a solicitor. They can look at the facts, the evidence and any relevant scheme or time limit.";
  }
  return "If someone else's negligence caused the injury, you may be able to seek compensation. A solicitor will still need to consider the facts, evidence and time limits.";
}

export default function ClaimChecker() {
  const [step, setStep] = useState<1 | 2 | 3 | "result">(1);
  const [claimType, setClaimType] = useState("");
  const [when, setWhen] = useState("");
  const [fault, setFault] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const onHome = (pathname ?? "/") === "/" || pathname === "";

  function finish(nextFault: string) {
    const prefill: CheckerPrefill = { claimType, when, fault: nextFault };
    savePrefill(prefill);
    setFault(nextFault);
    setStep("result");
    trackEvent("cta_click", { location: "claim_checker_complete" });
  }

  function goToForm() {
    const params = new URLSearchParams();
    if (claimType) params.set("claimType", claimType);
    const qs = params.toString();
    if (onHome) {
      const el = document.getElementById("enquiry-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    router.push(`/contact${qs ? `?${qs}` : ""}#enquiry-form`);
  }

  return (
    <section id="claim-checker" className="section-pad bg-white scroll-mt-24">
      <div className="container-max">
        <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2044] mb-2">Could I make a claim?</h2>
          <p className="text-gray-600 mb-6">
            Three short questions. This is general information about Scots law, not a decision on your case and not legal advice. It does not start a claim or stop a time limit.
          </p>

          {step === 1 && (
            <fieldset>
              <legend className="font-semibold text-[#0f2044] mb-3">What kind of incident was it?</legend>
              <div className="grid sm:grid-cols-2 gap-2">
                {INCIDENT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className="text-left bg-white border border-gray-200 hover:border-red-300 hover:text-red-700 rounded-lg px-4 py-3 text-sm font-medium text-[#0f2044]"
                    onClick={() => {
                      setClaimType(type);
                      setStep(2);
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset>
              <legend className="font-semibold text-[#0f2044] mb-3">
                Roughly when did it happen, or when did you first realise the injury was caused by someone else?
              </legend>
              <div className="grid gap-2">
                {WHEN_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className="text-left bg-white border border-gray-200 hover:border-red-300 hover:text-red-700 rounded-lg px-4 py-3 text-sm font-medium text-[#0f2044]"
                    onClick={() => {
                      setWhen(opt.value);
                      setStep(3);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <button type="button" className="mt-4 text-sm text-red-700 underline" onClick={() => setStep(1)}>
                Back
              </button>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset>
              <legend className="font-semibold text-[#0f2044] mb-3">Do you think someone else was at fault?</legend>
              <div className="grid sm:grid-cols-2 gap-2">
                {FAULT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className="text-left bg-white border border-gray-200 hover:border-red-300 hover:text-red-700 rounded-lg px-4 py-3 text-sm font-medium text-[#0f2044]"
                    onClick={() => finish(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <button type="button" className="mt-4 text-sm text-red-700 underline" onClick={() => setStep(2)}>
                Back
              </button>
            </fieldset>
          )}

          {step === "result" && (
            <div>
              <p className="font-semibold text-[#0f2044] mb-3">What this information means</p>
              <p className="text-gray-700 mb-3">{faultNote(fault)}</p>
              <div className="answer-box my-4">
                <p className="font-semibold text-blue-900 mb-1">About time limits</p>
                <p className="text-blue-800">{timeLimitNote(when)}</p>
              </div>
              <p className="text-sm text-gray-600 mb-5">
                Sending an enquiry is free and carries no obligation. This website is not a law firm. The operator may forward your enquiry to Thompsons Scotland LLP, a separate firm regulated by the Law Society of Scotland. Submitting it does not create a solicitor-client relationship or stop a time limit.
              </p>
              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={goToForm} className="btn-primary">
                  Continue to the enquiry form
                </button>
                <Link href="/personal-injury-claim-time-limits-scotland" className="btn-navy">
                  Read about time limits
                </Link>
              </div>
              <button
                type="button"
                className="mt-4 text-sm text-red-700 underline"
                onClick={() => {
                  setStep(1);
                  setClaimType("");
                  setWhen("");
                  setFault("");
                }}
              >
                Start again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
