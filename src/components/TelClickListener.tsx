"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/events";

/** Listens for clicks on tel: links anywhere on the page and fires a privacy-safe event. */
export default function TelClickListener() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href^='tel:']");
      if (!link) return;
      const location = link.getAttribute("data-track") || "tel_link";
      trackEvent("tel_click", { location });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
