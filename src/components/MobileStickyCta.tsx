"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/events";

export default function MobileStickyCta() {
  // The enquiry form is the page on /contact, so the bar would only cover it.
  if (usePathname()?.replace(/\/$/, "") === "/contact") return null;
  return (
    <div className="mobile-sticky grid grid-cols-2 border-t border-gray-200 shadow-lg">
      <Link
        href="/#claim-checker"
        onClick={() => trackEvent("cta_click", { location: "mobile_sticky_checker" })}
        className="bg-white text-[#0f2044] text-center py-3.5 font-semibold text-sm flex items-center justify-center gap-2 border-r border-gray-200"
        aria-label="Could I make a claim? — open the short checker"
      >
        Could I make a claim?
      </Link>
      <Link
        href="/contact"
        onClick={() => trackEvent("cta_click", { location: "mobile_sticky" })}
        className="bg-red-700 text-white text-center py-3.5 font-semibold text-sm flex items-center justify-center gap-2"
        aria-label="Send an enquiry — go to enquiry form"
      >
        Send an enquiry
      </Link>
    </div>
  );
}
