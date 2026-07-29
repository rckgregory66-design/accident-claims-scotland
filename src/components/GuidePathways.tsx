import Link from "next/link";
import { CATEGORY_HUBS, CORE_CLAIM_LINKS } from "@/data/topicHubs";

export default function GuidePathways({ category }: { category: string }) {
  const hub = CATEGORY_HUBS[category] ?? CORE_CLAIM_LINKS[0];
  const essentials = CORE_CLAIM_LINKS.filter((item) => item.href !== hub.href).slice(0, 3);

  return (
    <nav aria-label="Related claims information" className="not-prose mt-10 border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-bold text-[#0f2044] mb-3">Continue with the relevant claims guidance</h2>
      <p className="text-gray-600 mb-5">
        This article covers one part of the subject. Use the main topic page and essential guides below
        to understand the wider Scottish claims context.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link href={hub.href} className="card border-l-4 border-l-red-700">
          <span className="text-xs font-bold uppercase tracking-wide text-red-700">Main topic</span>
          <span className="block font-bold text-[#0f2044] mt-1">{hub.label}</span>
          <span className="block text-sm text-gray-600 mt-1">{hub.description}</span>
        </Link>
        {essentials.map((item) => (
          <Link key={item.href} href={item.href} className="card">
            <span className="block font-bold text-[#0f2044]">{item.label}</span>
            <span className="block text-sm text-gray-600 mt-1">{item.description}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
