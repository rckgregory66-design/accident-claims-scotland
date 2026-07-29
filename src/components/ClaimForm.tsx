import Link from "next/link";

interface Props {
  variant?: "hero" | "inline" | "page";
  title?: string;
}

export default function ClaimForm({ variant = "inline", title }: Props) {
  const isHero = variant === "hero";

  return (
    <aside
      aria-label="Online enquiry status"
      className={isHero ? "rounded-xl border border-blue-200 bg-blue-50 p-6" : "bg-white rounded-xl shadow-md border border-gray-100 p-6 sm:p-8"}
    >
      {title ? (
        <h2 className="text-2xl font-bold text-[#0f2044] mb-3">{title}</h2>
      ) : (
        <h3 className="text-xl font-bold text-[#0f2044] mb-3">Before making an enquiry</h3>
      )}
      <p className="text-gray-700 mb-4">
        Online claim submissions are not currently accepted while the legal provider and secure delivery
        process are being finalised. No information entered on this website is sent to a solicitor.
      </p>
      <p className="text-sm text-gray-600 mb-5">
        If a deadline may be approaching, contact a regulated Scottish solicitor directly. Reading this
        website or preparing an enquiry does not stop a legal time limit.
      </p>
      <Link href="/guides" className="btn-navy w-full">
        Read the Scottish claims guides
      </Link>
    </aside>
  );
}
