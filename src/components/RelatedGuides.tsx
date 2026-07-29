import Link from "next/link";
import { publishedGuides } from "@/data/guides";

interface Props {
  category: string;
  slugs?: string[];
  title?: string;
}

export default function RelatedGuides({ category, slugs, title = "Related Guides" }: Props) {
  const items = slugs
    ? publishedGuides.filter((g) => slugs.includes(g.slug))
    : publishedGuides.filter((g) => g.category === category).slice(0, 4);

  if (items.length === 0) return null;

  return (
    <div className="not-prose my-10 p-5 bg-white border border-gray-200 rounded-xl">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">{title}</p>
      <ul className="space-y-3">
        {items.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/guides/${g.slug}`}
              className="group flex items-start gap-3"
            >
              <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">→</span>
              <div>
                <span className="text-sm font-semibold text-[#0f2044] group-hover:text-red-700 transition-colors block leading-snug">
                  {g.title}
                </span>
                <span className="text-xs text-gray-500">{g.readTime}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/guides"
        className="mt-4 inline-block text-sm text-red-700 font-medium hover:underline"
      >
        View all guides →
      </Link>
    </div>
  );
}
