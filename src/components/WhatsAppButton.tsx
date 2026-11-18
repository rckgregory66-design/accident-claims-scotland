import { WHATSAPP_HREF, WHATSAPP_NUMBER } from "@/data/siteConfig";

/**
 * WhatsApp / chat control. Remains a non-linking, disabled button until
 * WHATSAPP_NUMBER is set in src/data/siteConfig.ts.
 */
export default function WhatsAppButton({ className = "" }: { className?: string }) {
  const enabled = Boolean(WHATSAPP_HREF && WHATSAPP_NUMBER);
  const label = "WhatsApp";
  if (!enabled) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        title="A WhatsApp number has not been published for this website yet."
        className={`cursor-not-allowed opacity-50 ${className}`.trim()}
      >
        {label}
      </button>
    );
  }
  return (
    <a
      href={WHATSAPP_HREF}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
    >
      {label}
    </a>
  );
}
