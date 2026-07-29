import Link from "next/link";

export default function MobileStickyCta() {
  return (
    <div className="mobile-sticky flex border-t border-gray-200 shadow-lg">
      <Link
        href="/contact"
        className="w-full bg-red-700 text-white text-center py-3.5 font-semibold text-sm flex items-center justify-center gap-2"
      >
        Free Claim Check
      </Link>
    </div>
  );
}
