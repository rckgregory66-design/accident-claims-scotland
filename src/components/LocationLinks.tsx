import Link from "next/link";
import { LOCATIONS } from "@/data/siteConfig";

interface Props {
  claimType?: string;
}

export default function LocationLinks({ claimType = "accident claims" }: Props) {
  return (
    <div className="not-prose my-8 p-5 bg-blue-50 border border-blue-100 rounded-xl">
      <p className="text-sm font-semibold text-[#0f2044] mb-3">
        Find local context for {claimType} across Scotland:
      </p>
      <div className="flex flex-wrap gap-2">
        {LOCATIONS.map((loc) => (
          <Link
            key={loc.href}
            href={loc.href}
            className="text-sm bg-white border border-blue-200 hover:border-red-300 hover:text-red-700 text-blue-800 font-medium px-3 py-1.5 rounded-lg transition-colors"
          >
            {loc.label}
          </Link>
        ))}
        <span className="text-sm text-blue-600 px-3 py-1.5">and all of Scotland</span>
      </div>
    </div>
  );
}
