import Link from "next/link";
import { resolveInternalHref } from "@/lib/internalLinks";

interface SubpageLink {
  label: string;
  href: string;
  desc?: string;
}

interface Props {
  title: string;
  pages: SubpageLink[];
}

export default function SubpageGrid({ title, pages }: Props) {
  return (
    <div className="not-prose my-10">
      <h2 className="text-2xl font-bold text-[#0f2044] mb-5">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {pages.map((p) => {
          const resolvedHref = resolveInternalHref(p.href);
          const content = (
            <>
              <span className={resolvedHref ? "text-red-600 font-bold mt-0.5 flex-shrink-0" : "text-gray-400 mt-0.5 flex-shrink-0"}>
                {resolvedHref ? "→" : "•"}
              </span>
              <div>
                <span className={`font-semibold text-sm block transition-colors ${resolvedHref ? "text-[#0f2044] group-hover:text-red-700" : "text-gray-700"}`}>
                  {p.label}
                </span>
                {p.desc && <span className="text-gray-500 text-xs mt-0.5 block">{p.desc}</span>}
              </div>
            </>
          );

          return resolvedHref ? (
            <Link
              key={p.href}
              href={resolvedHref}
              className="group flex items-start gap-3 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-lg px-4 py-3 transition-colors"
            >
              {content}
            </Link>
          ) : (
            <div key={p.href} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
