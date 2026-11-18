"use client";

import { useSyncExternalStore } from "react";

const messages: Record<string, { title: string; body: string; ok: boolean }> = {
  callback: {
    title: "Callback request sent",
    body: "Your request was accepted for delivery to the website operator. A reply is not guaranteed, and no solicitor has been instructed.",
    ok: true,
  },
  estimator: {
    title: "Your details were sent",
    body: "Your message was accepted for delivery to the website operator. Any compensation information on this site is a guide only and is not an assessment of your claim.",
    ok: true,
  },
  error: {
    title: "Your request could not be sent",
    body: "Please try again in a moment, or call the number on this page.",
    ok: false,
  },
};

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getSent() {
  const sent = new URLSearchParams(window.location.search).get("sent");
  return sent && messages[sent] ? sent : null;
}

/** Shows a success or error notice after a no-JS form POST redirects back with ?sent=. */
export default function EnquiryStatusBanner() {
  const sent = useSyncExternalStore(subscribe, getSent, () => null);
  const notice = sent ? messages[sent] : null;
  if (!notice) return null;
  return (
    <div
      role="status"
      className={`border-b px-4 py-3 text-sm ${notice.ok ? "border-green-200 bg-green-50 text-green-900" : "border-red-200 bg-red-50 text-red-900"}`}
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold">{notice.title}</p>
        <p className="mt-0.5">{notice.body}</p>
      </div>
    </div>
  );
}
