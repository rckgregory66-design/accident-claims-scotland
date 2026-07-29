import Link from "next/link";
import type { Metadata } from "next";
import { CLAIM_TYPES } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
      <h1 className="text-5xl font-bold text-[#0f2044] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        The page you are looking for does not exist. It may have been moved or the URL may be incorrect.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Link href="/" className="btn-navy">Return to Home</Link>
        <Link href="/contact" className="bg-red-700 hover:bg-red-800 text-white font-semibold px-7 py-3.5 rounded-lg">
          Start Claim Enquiry
        </Link>
      </div>
      <div className="text-left max-w-xl mx-auto">
        <h3 className="font-bold text-[#0f2044] mb-3">Claim types you may be looking for:</h3>
        <div className="grid grid-cols-2 gap-2">
          {CLAIM_TYPES.map((ct) => (
            <Link key={ct.href} href={ct.href} className="text-red-700 hover:underline text-sm">
              {ct.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
