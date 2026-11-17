import type { ReactNode } from "react";

/** Native <details> so closed copy stays in the server HTML for crawlers. */
export function MoreDetail({
  summary,
  children,
}: {
  summary: string;
  children: ReactNode;
}) {
  return (
    <details className="more-detail group my-4 rounded-xl border border-gray-200 bg-gray-50">
      <summary className="cursor-pointer list-none px-5 py-3 font-semibold text-[#0f2044] hover:bg-gray-100 rounded-xl">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="text-red-700 group-open:rotate-90 transition-transform">▸</span>
          {summary}
        </span>
      </summary>
      <div className="more-detail-body px-5 pb-5 pt-1 text-gray-700 leading-relaxed">{children}</div>
    </details>
  );
}

export function KeyFacts({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{item.label}</p>
          <p className="mt-1 text-lg font-bold text-[#0f2044] leading-snug">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function FigureCard({
  figure,
  label,
  children,
}: {
  figure: string;
  label: string;
  children?: ReactNode;
}) {
  return (
    <div className="not-prose my-4 flex gap-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
      <div className="flex-shrink-0 text-center min-w-[5.5rem]">
        <p className="text-3xl sm:text-4xl font-bold text-[#0f2044] leading-none">{figure}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-amber-800">{label}</p>
      </div>
      {children ? <div className="text-sm text-amber-900 leading-relaxed">{children}</div> : null}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="not-prose my-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-gray-700 leading-relaxed">
          <span aria-hidden="true" className="text-red-700 font-bold mt-0.5">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
