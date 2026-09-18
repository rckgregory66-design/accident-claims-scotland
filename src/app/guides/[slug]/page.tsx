import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClaimForm from "@/components/ClaimForm";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import GuidePathways from "@/components/GuidePathways";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { publishedGuides } from "@/data/guides";
import { SITE } from "@/data/siteConfig";
import { getGuideContent } from "@/data/guideContent";
import { getGuideFaqs } from "@/data/guideFaqs";
import FAQ from "@/components/FAQ";

export async function generateStaticParams() {
  return publishedGuides.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = publishedGuides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      type: "article",
      url: `/guides/${slug}`,
      title: guide.title,
      description: guide.description,
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = publishedGuides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const content = getGuideContent(slug);
  const faqs = getGuideFaqs(slug);
  const related = publishedGuides.filter((g) => g.category === guide.category && g.slug !== slug).slice(0, 4);

  const crumbs = [
    { name: "Home", url: SITE.url },
    { name: "Guides", url: `${SITE.url}/guides` },
    { name: guide.title, url: `${SITE.url}/guides/${slug}` },
  ];

  return (
    <>
      <JsonLd data={[
        articleSchema({ title: guide.title, description: guide.description, url: `/guides/${slug}`, datePublished: guide.datePublished, dateModified: guide.dateModified, speakableSelectors: ["h1", "article"] }),
        breadcrumbSchema(crumbs, `/guides/${slug}`),
        ...(faqs.length > 0 ? [faqSchema(faqs)] : []),
      ]} />
      <Breadcrumbs crumbs={[{ label: "Guides", href: "/guides" }, { label: guide.title }]} />

      <section className="bg-[#0f2044] py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded">
              {guide.category}
            </span>
            <span className="text-gray-400 text-xs">{guide.readTime}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            {guide.title}
          </h1>
          <p className="text-gray-300">{guide.description}</p>
          <p className="text-gray-500 text-xs mt-3">
            Last updated: {new Date(guide.dateModified).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            {content}
            <GuidePathways category={guide.category} />
            <p className="text-xs text-gray-500 mt-8 border-t border-gray-200 pt-4 not-prose">
              General information only — not advice on an individual case. Reviewed for Scottish scope and official-source alignment. Last updated{" "}
              {new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${guide.dateModified}T12:00:00Z`))}.{" "}
              <Link href="/editorial-methodology" className="font-semibold underline">Read our publishing standards</Link>.
            </p>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <ClaimForm />
              <div className="card border-l-4 border-l-amber-500">
                <h3 className="font-bold text-[#0f2044] mb-2 text-sm">Time limits apply</h3>
                <p className="text-xs text-gray-600 mb-2">Most claims must be started within three years. Do not delay.</p>
                <Link href="/personal-injury-claim-time-limits-scotland" className="text-xs text-red-700 font-medium underline">
                  Check your time limit →
                </Link>
              </div>
              {related.length > 0 && (
                <div className="card">
                  <h3 className="font-bold text-[#0f2044] mb-3 text-sm">Related Guides</h3>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={`/guides/${r.slug}`} className="text-sm text-red-700 hover:underline leading-snug block">
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {faqs.length > 0 && <FAQ faqs={faqs} />}
      <CtaSection />
    </>
  );
}
