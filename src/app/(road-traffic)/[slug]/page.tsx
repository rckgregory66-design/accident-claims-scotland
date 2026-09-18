import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClaimForm from "@/components/ClaimForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, servicePageSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import { roadTrafficPages } from "@/data/roadTrafficPages";
import { SITE } from "@/data/siteConfig";

export const dynamicParams = false;

export function generateStaticParams() {
  return roadTrafficPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = roadTrafficPages.find((item) => item.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: page.title, description: page.description, url: `/${page.slug}` },
  };
}

export default async function RoadTrafficDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = roadTrafficPages.find((item) => item.slug === slug);
  if (!page) notFound();
  const url = `/${page.slug}`;
  const crumbs = [
    { name: "Home", url: SITE.url },
    { name: "Road Traffic Accident Claims", url: `${SITE.url}/road-traffic-accident-claims-scotland` },
    { name: page.title, url: `${SITE.url}${url}` },
  ];

  return (
    <>
      <JsonLd data={[
        servicePageSchema({ name: page.title, url, description: page.description, dateModified: "2026-07-29", speakableSelectors: ["#quick-answer", "h1"] }),
        breadcrumbSchema(crumbs, url),
        faqSchema(page.faqs),
      ]} />
      <Breadcrumbs crumbs={[{ label: "Road Traffic Accident Claims", href: "/road-traffic-accident-claims-scotland" }, { label: page.title }]} />
      <section className="bg-[#0f2044] py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-yellow-300 font-semibold mb-3">{page.category}</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5">{page.title}</h1>
          <p className="text-gray-200 text-lg max-w-3xl">{page.description}</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <div id="quick-answer" className="answer-box">
              <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
              <p className="text-blue-900 mb-0">{page.answer}</p>
            </div>
            <div id="tldr" className="bg-[#0f2044] rounded-xl p-6 mb-8 not-prose">
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm mb-3">Key points</p>
              <ul className="space-y-2 list-none p-0 m-0">
                {page.keyPoints.map((point) => <li key={point} className="flex gap-3 text-white"><span className="text-yellow-400">✓</span><span className="text-white">{point}</span></li>)}
              </ul>
            </div>
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              </section>
            ))}
            <h2>Authoritative sources</h2>
            <ul>
              {page.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-red-700 font-medium hover:underline">{source.label}</a>
                  {" — "}{source.note}
                </li>
              ))}
            </ul>
          </article>
          <aside><div className="sticky top-24"><ClaimForm /></div></aside>
        </div>
      </div>
      <FAQ faqs={page.faqs} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-legal">
            <nav aria-label="Related road accident guidance" className="not-prose mt-10 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-[#0f2044] mb-4">Related road accident guidance</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {page.related.map((item) => <Link key={item.href} href={item.href} className="card font-semibold text-[#0f2044] hover:text-red-700">{item.label} →</Link>)}
              </div>
            </nav>
          </article>
        </div>
      </div>
    </>
  );
}
