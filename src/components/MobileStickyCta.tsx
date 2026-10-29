"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/events";

export default function MobileStickyCta() {
  // The enquiry form is the page on /contact, so the bar would only cover it.
  if (usePathname()?.replace(/\/$/, "") === "/contact") return null;
  return (
    <div className="mobile-sticky flex border-t border-gray-200 shadow-lg">
      <Link
        href="/contact"
        onClick={() => trackEvent("cta_click", { location: "mobile_sticky" })}
        className="w-full bg-red-700 text-white text-center py-3.5 font-semibold text-sm flex items-center justify-center gap-2"
        aria-label="Send an enquiry — go to enquiry form"
      >
        Send an enquiry
      </Link>
    </div>
  );
}
