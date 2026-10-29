// Vendor-neutral, privacy-safe event dispatcher.
// No analytics tool is installed. When one is connected later it can listen for "acs:event" on window.
// Only the allow-listed names and parameter keys below can be sent; never pass names, phone numbers,
// emails, postcodes, dates, free text or checklist selections.
export type AcsEventName = "cta_click" | "form_start" | "form_submit_success" | "form_submit_error";
type Params = { location?: string; variant?: string; reason?: "network" | "rejected" | "server" };

export function trackEvent(name: AcsEventName, params: Params = {}) {
  if (typeof window === "undefined") return;
  const safe: Params = {};
  if (params.location) safe.location = params.location.slice(0, 40);
  if (params.variant) safe.variant = params.variant.slice(0, 20);
  if (params.reason) safe.reason = params.reason;
  window.dispatchEvent(new CustomEvent("acs:event", { detail: { name, ...safe, path: window.location.pathname } }));
}
