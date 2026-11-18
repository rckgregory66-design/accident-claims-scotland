import type { ReactNode } from "react";
import Link from "next/link";
import ClaimForm from "./ClaimForm";
import CtaSection from "./CtaSection";
import FAQ from "./FAQ";
import Breadcrumbs from "./Breadcrumbs";
import JsonLd from "./JsonLd";
import { breadcrumbSchema, faqSchema, locationPageSchema } from "@/lib/schema";
import RagAnswerCapsule from "./RagAnswerCapsule";
import PageMetaBar from "./PageMetaBar";
import TrustBlock from "./TrustBlock";
import { SITE, CLAIM_TYPES } from "@/data/siteConfig";

interface Props {
  city: string;
  slug: string;
  intro: string;
  localContext: string;
  claimTypes?: string[];
  faqs: { question: string; answer: string }[];
  localContent?: ReactNode;
  sources?: { label: string; url: string }[];
  dateModified?: string;
}

export default function LocationPageTemplate({
  city,
  slug,
  intro,
  localContext,
  faqs,
  localContent,
  sources,
  dateModified = "2026-10-29",
}: Props) {
  const fundingFaq = {
    question: `Can I find a no win, no fee solicitor for an accident claim in ${city}?`,
    answer: `Many personal injury claims from ${city} and the surrounding area can be taken on a no win, no fee basis, which means you should not have to pay your solicitor's fees if the claim is unsuccessful. Terms differ between arrangements, so ask for them in writing before you agree: what, if anything, is deducted from your compensation if you win, whether after-the-event insurance is involved, and which costs you could still be responsible for. Other funding options include legal expenses insurance on a home, car or travel policy, trade union legal assistance and, for some people, Scottish Legal Aid Board funding.`,
  };
  const allFaqs = [...faqs, fundingFaq];
  const crumbs = [
    { name: "Home", url: SITE.url },
    { name: `${city} Accident Claims`, url: `${SITE.url}/${slug}` },
  ];

  return (
    <>
      <JsonLd data={[
        breadcrumbSchema(crumbs, `/${slug}`),
        faqSchema(allFaqs),
        locationPageSchema(city, slug),
      ]} />
      <Breadcrumbs crumbs={[{ label: `${city} Accident Claims` }]} />

      <section className="bg-[#0f2044] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-4xl">
            Accident Claims in {city}: Personal Injury Claim Information
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">{intro}</p>
          <div className="flex flex-wrap gap-4 mt-7">
            <Link href="/contact" className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Send an enquiry
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 prose-legal">
            <div className="answer-box">
              <p className="text-blue-800">
                If you have been injured in {city} or the surrounding area and the accident was not your fault,
                you may be able to seek compensation. This page explains personal injury, medical negligence,
                industrial disease and workplace accident claims that may be relevant to people in {city}.
              </p>
            </div>
            <div className="space-y-4 not-prose mb-8">
              {allFaqs.slice(0, 3).map((faq) => (
                <RagAnswerCapsule key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
              <PageMetaBar dateModified={dateModified} />
              <TrustBlock />
            </div>

            <h2>Personal Injury Claims in {city}</h2>
            <p>{localContext}</p>
            {localContent}

            <h2>Claim Types Covered in {city}</h2>
            <p>People in {city} may seek advice about a range of personal injury and accident compensation claims:</p>
            <ul>
              {CLAIM_TYPES.map((ct) => (
                <li key={ct.href}>
                  <Link href={ct.href} className="text-red-700 hover:underline">{ct.label}</Link> — {ct.desc}
                </li>
              ))}
            </ul>

            <h2>Time Limits for {city} Claims</h2>
            <p>
              In Scotland, most personal injury claims must be started within three years of the accident
              or date of knowledge. If you were injured in {city} or the surrounding area, do not delay in
              seeking advice. Early enquiries also allow evidence to be preserved before it is lost.
            </p>
            <p>
              <Link href="/personal-injury-claim-time-limits-scotland" className="text-red-700 hover:underline">
                Learn more about time limits for personal injury claims in Scotland →
              </Link>
            </p>

            <h2>No Win, No Fee Solicitors for {city} Claims: How Funding Works</h2>
            <p>
              Many personal injury claims for {city} residents can be funded on a no win, no fee basis.
              This means that if your claim is unsuccessful, you will not be required to pay your solicitor&apos;s fees.
              All funding terms will be explained clearly before you agree to proceed.
            </p>
            <ul>
              <li>
                <Link href="/no-win-no-fee-solicitors-scotland" className="text-red-700 hover:underline">
                  Understand no win, no fee terms and possible deductions
                </Link>
              </li>
              <li>
                <Link href="/how-to-claim-compensation-scotland" className="text-red-700 hover:underline">
                  Follow the Scottish personal injury claims process
                </Link>
              </li>
              <li>
                <Link href="/personal-injury-compensation-scotland" className="text-red-700 hover:underline">
                  Learn what personal injury compensation may include
                </Link>
              </li>
            </ul>

            {sources && sources.length > 0 && (
              <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="font-bold text-[#0f2044] mb-3 text-sm">Sources used on this page</h3>
                <ul className="space-y-1.5">
                  {sources.map((source) => (
                    <li key={source.url} className="text-sm">
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">{source.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg not-prose text-sm text-blue-800">
              <p>
                This page provides general information for people in {city} and is not individual legal advice.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <ClaimForm />
              <div className="card border-l-4 border-l-amber-500">
                <h3 className="font-bold text-[#0f2044] mb-2 text-base">Time limits apply</h3>
                <p className="text-sm text-gray-600 mb-3">Most claims must be started within three years. Do not delay.</p>
                <Link href="/personal-injury-claim-time-limits-scotland" className="text-sm text-red-700 font-medium underline">Check your time limit →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQ faqs={allFaqs} title={`Frequently Asked Questions — ${city} Accident Claims`} />
      <CtaSection title={`Ready to Start Your ${city} Claim?`} />
    </>
  );
}
