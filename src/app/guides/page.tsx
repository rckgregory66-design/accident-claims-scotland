import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import { publishedGuides } from "@/data/guides";
import { CATEGORY_HUBS } from "@/data/topicHubs";

export const metadata: Metadata = {
  title: "Personal Injury Guides Scotland | Accident Claims Guides & Advice",
  description:
    "Free guides and articles on personal injury claims in Scotland — time limits, evidence, compensation, no win no fee, medical negligence and more.",
  alternates: { canonical: "/guides" },
  openGraph: {
    type: "website",
    url: "/guides",
    title: "Personal Injury Guides Scotland",
    description:
      "Plain-English guides to Scottish personal injury claims, evidence, compensation, funding and time limits.",
  },
};

const categories = Array.from(new Set(publishedGuides.map((g) => g.category)));

export default function GuidesPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Guides & Articles" }]} />

      <section className="bg-[#0f2044] py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Personal Injury Guides & Articles for Scotland
          </h1>
          <p className="text-gray-300 text-lg">
            Free, plain-English guides on personal injury, medical negligence and accident claims in
            Scotland — written to help you understand your rights before you speak to a solicitor.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <div className="flex flex-wrap items-end justify-between gap-3 mb-5 pb-2 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#0f2044]">{cat}</h2>
              {CATEGORY_HUBS[cat] && (
                <Link href={CATEGORY_HUBS[cat].href} className="text-sm font-semibold text-red-700 hover:underline">
                  {CATEGORY_HUBS[cat].label} →
                </Link>
              )}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {publishedGuides
                .filter((g) => g.category === cat)
                .map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="card hover:border-red-200 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-red-700 bg-red-50 px-2 py-0.5 rounded">
                        {guide.category}
                      </span>
                      <span className="text-xs text-gray-400">{guide.readTime}</span>
                    </div>
                    <h3 className="font-bold text-[#0f2044] text-base leading-snug mb-2 group-hover:text-red-700 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {guide.description}
                    </p>
                    <div className="mt-3 text-red-700 text-sm font-medium group-hover:underline">
                      Read guide →
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>

      <CtaSection />
    </>
  );
}
