"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/events";
import { PHONE } from "@/data/siteConfig";

export default function MobileStickyCta() {
  const onContact = usePathname()?.replace(/\/$/, "") === "/contact";
  return (
    <div className={`mobile-sticky grid border-t border-gray-200 shadow-lg ${onContact ? "grid-cols-1" : "grid-cols-3"}`}>
      <a
        href={PHONE.href}
        onClick={() => trackEvent("cta_click", { location: "mobile_sticky_call" })}
        className="bg-red-700 text-white text-center py-3.5 font-semibold text-sm flex items-center justify-center gap-2"
        aria-label={`Call ${PHONE.display}`}
      >
        Call {PHONE.display}
      </a>
      {onContact ? null : (
        <>
          <Link
            href="/#claim-checker"
            onClick={() => trackEvent("cta_click", { location: "mobile_sticky_checker" })}
            className="bg-white text-[#0f2044] text-center py-3.5 font-semibold text-sm flex items-center justify-center gap-2 border-x border-gray-200"
            aria-label="Could I make a claim? — open the short checker"
          >
            Could I make a claim?
          </Link>
          <Link
            href="/contact"
            onClick={() => trackEvent("cta_click", { location: "mobile_sticky" })}
            className="bg-[#0f2044] text-white text-center py-3.5 font-semibold text-sm flex items-center justify-center gap-2"
            aria-label="Send an enquiry — go to enquiry form"
          >
            Send an enquiry
          </Link>
        </>
      )}
    </div>
  );
}
