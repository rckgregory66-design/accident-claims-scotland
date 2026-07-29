import { TRUST_BADGES } from "@/data/siteConfig";

export default function TrustBar() {
  return (
    <div className="bg-[#0f2044] border-t border-white/10 py-5 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {TRUST_BADGES.map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-sm text-gray-200">
              <span className="text-yellow-400 font-bold">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
