import Link from "next/link";
import type { ReactNode } from "react";
import ClaimForm from "./ClaimForm";
import FAQ from "./FAQ";
import CtaSection from "./CtaSection";
import Breadcrumbs from "./Breadcrumbs";
import JsonLd from "./JsonLd";
import TldrBox from "./TldrBox";
import LocationLinks from "./LocationLinks";
import RelatedGuides from "./RelatedGuides";
import SubpageGrid from "./SubpageGrid";
import { breadcrumbSchema, faqSchema, servicePageSchema } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";
import { resolveInternalHref } from "@/lib/internalLinks";

export interface RelatedLink { label: string; href: string; }
export interface FAQItem { question: string; answer: string; }
export interface SubpageLink { label: string; href: string; desc?: string; }

export interface Section {
  heading: string;
  content: string | ReactNode;
  /** Plain string list — each item rendered as <li> */
  list?: string[];
  /** Linked list — each item is {text, href} */
  linkedList?: { text: string; href: string }[];
}

interface Props {
  breadcrumbs: { label: string; href?: string }[];
  h1: string;
  intro: string;
  tldr?: string[];
  answerBox?: string;
  sections: Section[];
  faqs: FAQItem[];
  related?: RelatedLink[];
  subpages?: { title: string; pages: SubpageLink[] };
  metaUrl: string;
  dateModified?: string;
  guideCategory?: string;
  guideSlugs?: string[];
  locationClaimType?: string;
}

export default function ClaimPageTemplate({
  breadcrumbs,
  h1,
  intro,
  tldr,
  answerBox,
  sections,
  faqs,
  related,
  subpages,
  metaUrl,
  dateModified = "2026-06-16",
  guideCategory,
  guideSlugs,
  locationClaimType,
}: Props) {
  const crumbsForSchema = [
    { name: "Home", url: SITE.url },
    ...breadcrumbs
      .filter((c) => c.href)
      .map((c) => ({ name: c.label, url: `${SITE.url}${c.href}` })),
    { name: breadcrumbs[breadcrumbs.length - 1].label, url: `${SITE.url}${metaUrl}` },
  ];

  const schemaData = [
    breadcrumbSchema(crumbsForSchema, metaUrl),
    faqSchema(faqs),
    servicePageSchema({
      name: h1,
      url: metaUrl,
      description: intro,
      dateModified,
      speakableSelectors: ["#answer-box", "#tldr", "h1"],
    }),
  ];

  return (
    <>
      <JsonLd data={schemaData} />
      <Breadcrumbs crumbs={breadcrumbs} />

      {/* Hero */}
      <section className="bg-[#0f2044] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-4xl">
            {h1}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">{intro}</p>
          <div className="flex flex-wrap gap-4 mt-7">
            <Link
              href="/contact"
              className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Start Free Claim Check
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-x-8 gap-y-2">
          {[
            "No win, no fee available",
            "Free enquiry",
            "No obligation",
            "Scotland-focused claims guidance",
          ].map((t) => (
            <span key={t} className="text-sm text-gray-600 flex items-center gap-1.5">
              <span className="text-red-600 font-bold">✓</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* Main content + sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Main column */}
          <div className="lg:col-span-2 prose-legal">

            {/* TL;DR */}
            {tldr && tldr.length > 0 && <TldrBox points={tldr} />}

            {/* Direct answer box */}
            {answerBox && (
              <div id="answer-box" className="answer-box">
                <p className="text-blue-800">{answerBox}</p>
              </div>
            )}

            {/* Sections */}
            {sections.map((sec, i) => (
              <div key={i}>
                <h2>{sec.heading}</h2>
                {typeof sec.content === "string" ? (
                  <p>{sec.content}</p>
                ) : (
                  sec.content
                )}
                {sec.list && (
                  <ul>
                    {sec.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {sec.linkedList && (
                  <ul>
                    {sec.linkedList.map((item) => {
                      const resolvedHref = resolveInternalHref(item.href);
                      return (
                        <li key={item.href}>
                          {resolvedHref ? (
                            <Link href={resolvedHref} className="text-red-700 hover:underline font-medium">
                              {item.text}
                            </Link>
                          ) : (
                            item.text
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}

            {/* Location cross-links */}
            <LocationLinks claimType={locationClaimType} />

            {/* Subpage grid */}
            {subpages && (
              <SubpageGrid title={subpages.title} pages={subpages.pages} />
            )}

            {/* Related guides */}
            {(guideCategory || guideSlugs) && (
              <RelatedGuides
                category={guideCategory ?? ""}
                slugs={guideSlugs}
                title="Related Guides for Scotland"
              />
            )}

            {/* Related claim types pill row */}
            {related && related.length > 0 && (
              <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="font-bold text-[#0f2044] mb-3 text-sm">Related Claim Types</h3>
                <div className="flex flex-wrap gap-2">
                  {related.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="text-sm bg-white border border-gray-200 hover:border-red-300 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg not-prose text-sm text-blue-800">
              <p>
                This page provides general information and is not individual legal advice.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <ClaimForm />

              <div className="card border-l-4 border-l-amber-500">
                <h3 className="font-bold text-[#0f2044] mb-2 text-base">⏱ Time limits apply</h3>
                <p className="text-sm text-gray-600 mb-3">
                  In Scotland, most personal injury claims must be started within three years of the accident
                  or date of knowledge. Do not delay.
                </p>
                <Link
                  href="/personal-injury-claim-time-limits-scotland"
                  className="text-sm text-red-700 font-medium underline"
                >
                  Check your time limit →
                </Link>
              </div>

              <div className="card border-l-4 border-l-[#0f2044]">
                <h3 className="font-bold text-[#0f2044] mb-2 text-base">£ No win, no fee</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Funding options may be available so you can pursue your claim without upfront financial risk.
                </p>
                <Link
                  href="/no-win-no-fee-solicitors-scotland"
                  className="text-sm text-red-700 font-medium underline"
                >
                  How no win, no fee works →
                </Link>
              </div>

              <div className="card border-l-4 border-l-green-500">
                <h3 className="font-bold text-[#0f2044] mb-2 text-base">📋 Claim process</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Not sure how the claims process works? Our step-by-step guide explains what to expect.
                </p>
                <Link
                  href="/how-to-claim-compensation-scotland"
                  className="text-sm text-red-700 font-medium underline"
                >
                  How claims work in Scotland →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQ faqs={faqs} />
      <CtaSection />
    </>
  );
}
