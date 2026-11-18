"use client";

import { useEffect, useRef, useState } from "react";
import { CALLBACK_TIMES, ENQUIRY_WORKER_URL, OPERATOR, PHONE } from "@/data/siteConfig";
import { trackEvent } from "@/lib/events";

interface Props {
  id?: string;
  compact?: boolean;
  location?: string;
}

/**
 * Request-a-callback form. The markup is a plain HTML POST so it works without JavaScript.
 * When JavaScript is available the submit is sent as JSON and the user stays on the page.
 */
export default function CallbackForm({ id = "request-callback", compact = false, location = "header" }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const returnToRef = useRef<HTMLInputElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (returnToRef.current) {
      returnToRef.current.value = `${window.location.pathname}${window.location.search}` || "/";
    }
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (typeof fetch === "undefined") return;
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("form_start", { variant: "callback", location });
    }
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch(ENQUIRY_WORKER_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => null);

    if (!response?.ok) {
      const payload = response ? await response.json().catch(() => null) : null;
      setError(payload?.error ?? "Your request could not be sent. Please try again later, or call the number on this page.");
      setStatus("error");
      trackEvent("form_submit_error", { variant: "callback", reason: !response ? "network" : response.status >= 500 ? "server" : "rejected" });
      return;
    }
    form.reset();
    if (returnToRef.current) returnToRef.current.value = window.location.pathname || "/";
    setStatus("sent");
    trackEvent("callback_submit_success", { location });
    trackEvent("form_submit_success", { variant: "callback", location });
  }

  const fields = (
    <form
      method="POST"
      action={ENQUIRY_WORKER_URL}
      onSubmit={handleSubmit}
      className="space-y-3"
      onChange={() => {
        if (!startedRef.current) {
          startedRef.current = true;
          trackEvent("form_start", { variant: "callback", location });
        }
      }}
    >
      <input type="hidden" name="formType" value="callback" />
      <input type="hidden" name="returnTo" ref={returnToRef} defaultValue="/contact" />
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor={`${id}-name`} className="block text-sm font-medium text-slate-800">Name</label>
        <input id={`${id}-name`} name="name" type="text" required autoComplete="name" maxLength={100} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900" />
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className="block text-sm font-medium text-slate-800">Phone</label>
        <input id={`${id}-phone`} name="phone" type="tel" required autoComplete="tel" maxLength={30} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900" />
      </div>
      <div>
        <label htmlFor={`${id}-time`} className="block text-sm font-medium text-slate-800">Best time to call</label>
        <select id={`${id}-time`} name="bestTime" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900">
          <option value="">Please choose</option>
          {CALLBACK_TIMES.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div className="flex items-start gap-2">
        <input id={`${id}-consent`} name="consent" value="yes" type="checkbox" required className="mt-1 h-4 w-4" />
        <label htmlFor={`${id}-consent`} className="text-sm text-slate-700">
          I consent to {OPERATOR.legalName} calling me back about my enquiry, and I understand that this website may pass my details to Thompsons Scotland LLP, a firm regulated by the Law Society of Scotland. A reply is not guaranteed.
        </label>
      </div>
      {status === "error" && <p role="alert" className="rounded-lg bg-red-50 border border-red-200 p-2 text-sm text-red-900">{error}</p>}
      <button type="submit" disabled={status === "sending"} className="w-full rounded-lg bg-red-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-800 disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Request a callback"}
      </button>
      <p className="text-xs text-slate-500">
        Or call{" "}
        <a href={PHONE.href} data-track={`callback_${location}`} className="font-semibold text-red-700 underline">{PHONE.display}</a>
        . This is not legal advice and does not stop a time limit.
      </p>
    </form>
  );

  if (status === "sent") {
    return (
      <div id={id} role="status" className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
        <p className="font-semibold">Callback request sent</p>
        <p className="mt-1">Your request was accepted for delivery to the website operator. A reply is not guaranteed, and no solicitor has been instructed.</p>
      </div>
    );
  }

  if (compact) {
    // A hash link, not a <details> element: the site-wide form lives in the layout
    // and is revealed with :target so it works without JavaScript. <details> in the
    // header would be counted as an extra FAQ by the pillar-page check.
    return (
      <a href="#request-callback" className="text-sm font-semibold text-white underline-offset-2 hover:underline">
        Request a callback
      </a>
    );
  }

  return (
    <div id={id} className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-bold text-[#0f2044]">Request a callback</h2>
      <p className="mt-1 mb-4 text-sm text-slate-600">Leave your name, phone number and a convenient time. You can also call {PHONE.display}.</p>
      {fields}
    </div>
  );
}
