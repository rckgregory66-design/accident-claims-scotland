import type { Metadata } from "next";
import Link from "next/link";
import ClaimForm from "@/components/ClaimForm";
import FAQ from "@/components/FAQ";
import TrustBar from "@/components/TrustBar";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { CLAIM_TYPES, LOCATIONS, SITE } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Accident Claims Scotland | Personal Injury Claim Information",
  description:
    "How personal injury claims work in Scotland: the three-year time limit, evidence, no win no fee funding and compensation. Plain-English guidance on Scots law. Not a law firm.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    question: "How long do I have to make a personal injury claim in Scotland?",
    answer:
      "In Scotland, the general time limit for personal injury claims is three years from the date of the accident or from the date you became aware that your injury was caused by someone else's negligence (the 'date of knowledge'). Different rules may apply for children, adults lacking legal capacity, fatal accident claims and certain industrial disease claims. It is important to seek advice as early as possible.",
  },
  {
    question: "What is no win no fee and what does it mean for me?",
    answer:
      "A no win no fee arrangement means that if your claim is unsuccessful, you will not be required to pay your solicitor's fees. A solicitor should explain the exact terms of any funding arrangement before you proceed. Deductions or success fees may apply, so ask for them in writing.",
  },
  {
    question: "Can I claim if I was partly to blame for my accident?",
    answer:
      "Yes. In Scotland, contributory negligence may reduce the amount of compensation you receive, but it does not necessarily prevent you from claiming altogether. A solicitor can assess the circumstances and advise on the likely impact on your claim.",
  },
  {
    question: "How much compensation will I receive?",
    answer:
      "Compensation depends on the nature and severity of your injuries, the impact on your life, your financial losses and other factors. No outcome can be guaranteed. A solicitor can give you an assessment of your claim based on the facts and evidence.",
  },
  {
    question: "Do I need to go to court?",
    answer:
      "Most personal injury claims in Scotland are settled out of court through negotiation between solicitors. A small number of claims proceed to litigation if liability is disputed or a fair settlement cannot be reached. A solicitor can guide you through each step.",
  },
  {
    question: "What evidence do I need to support my claim?",
    answer:
      "Useful evidence includes medical records, photographs of the scene and your injuries, witness details, accident report forms, payslips for wage loss calculations, and any correspondence with insurers. A solicitor can help you gather and present the evidence needed.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[
        faqSchema(faqs),
        breadcrumbSchema([{ name: "Home", url: SITE.url }], "/"),
        servicePageSchema({
          name: "Accident Claims Scotland",
          url: "/",
          description: SITE.description,
          dateModified: "2026-10-29",
          speakableSelectors: ["h1", ".answer-box"],
        }),
      ]} />

      {/* HERO */}
      <section className="bg-[#0f2044] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1630] to-[#1a3366] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: copy */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-medium px-3 py-1.5 rounded-full mb-5">
                Scotland-focused claims information
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Accident Claims in Scotland: How Personal Injury Compensation Works
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                If you have been injured in an accident in Scotland that was not your fault, you may be
                able to seek compensation. This website provides general information about personal injury,
                medical negligence, industrial disease and workplace accident claims across Scotland.
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Accident Claims Scotland is an information website run by Ola Consultants Ltd. It is not a
                law firm and does not give legal advice. If you send an enquiry, your details are emailed to
                the website operator; sending one does not create a solicitor-client relationship or stop a
                time limit.
              </p>
            </div>
            {/* Right: form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              <ClaimForm variant="hero" title="Send an enquiry" />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* QUICK ANSWER BOX */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="answer-box max-w-3xl">
            <p className="font-semibold text-blue-900 mb-1">Can I claim compensation in Scotland?</p>
            <p className="text-blue-800">
              Usually, yes, if someone else&apos;s negligence caused your injury and you act within three
              years. Under Scots law that period runs from the accident or, if later, the date you knew the
              injury was serious enough to claim and was caused by someone else. Time under 16 does not count.
              You must prove fault and that it caused your injury.
            </p>
          </div>
        </div>
      </section>

      {/* CLAIM TYPES GRID */}
      <section className="section-pad bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2044] mb-3">Types of Claim Explained</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              This site explains a wide range of personal injury and compensation claims across Scotland.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CLAIM_TYPES.map((ct) => (
              <Link
                key={ct.href}
                href={ct.href}
                className="card border-t-4 border-t-red-700 hover:border-red-200 hover:shadow-red-100 group"
              >
                <h3 className="font-bold text-[#0f2044] text-base mb-2 group-hover:text-red-700 transition-colors">
                  {ct.label}
                </h3>
                <p className="text-sm text-gray-600">{ct.desc}</p>
                <div className="mt-3 text-red-700 text-sm font-medium group-hover:underline">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THE PROCESS WORKS */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0f2044] mb-4">
                How the Scottish Claims Process Works
              </h2>
              <p className="text-gray-600 mb-6">
                A personal injury claim in Scotland usually follows the stages below once you have instructed a
                solicitor. The order and detail vary with the claim.
              </p>
              <ol className="space-y-4">
                {[
                  ["Initial contact", "You speak to a Scottish solicitor about your circumstances. Check how they fund the claim before you agree."],
                  ["Claim assessment", "The solicitor reviews the facts, evidence, liability and time limits."],
                  ["Evidence gathering", "The solicitor gathers medical records, witness statements and other evidence."],
                  ["Letter of claim", "A formal letter is sent to the other side setting out your claim."],
                  ["Medical evidence", "Independent medical evidence is obtained to support your claim."],
                  ["Negotiation", "The solicitor negotiates with the other party's insurers to try to reach a settlement."],
                  ["Settlement or court", "Many claims settle without going to court. If not, the solicitor can raise court proceedings on your behalf."],
                  ["Compensation payment", "Once agreed, your compensation is paid to you."],
                ].map(([step, desc], i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f2044] text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0f2044]">{step}</p>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-5">
              <div className="card border-l-4 border-l-red-600">
                <h3 className="font-bold text-[#0f2044] mb-2">What can compensation cover?</h3>
                <ul className="text-sm text-gray-700 space-y-1.5">
                  {[
                    "Pain, suffering and loss of amenity (solatium)",
                    "Loss of earnings — past and future",
                    "Medical treatment and rehabilitation costs",
                    "Care and assistance provided by family or professionals",
                    "Travel expenses related to your injury",
                    "Home adaptations or specialist equipment",
                    "Future care needs",
                    "Pension loss in serious cases",
                    "Provisional damages where conditions may deteriorate",
                  ].map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-red-600 mt-0.5">✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="warning-box">
                <p className="font-semibold text-amber-800 mb-1">Time limits apply</p>
                <p className="text-amber-700 text-sm">
                  In Scotland, most personal injury claims must be made within three years of the accident
                  or the date of knowledge. Do not delay: take advice from a Scottish solicitor as early as you can.
                </p>
                <Link href="/personal-injury-claim-time-limits-scotland" className="text-amber-800 font-medium text-sm underline mt-2 inline-block">
                  Learn about time limits →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad bg-[#0f2044]">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">What This Website Offers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              General information about accident and personal injury claims in Scotland, with sources.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Scottish claims information",
                desc: "Learn what information a Scottish personal injury solicitor may need when assessing a claim.",
              },
              {
                title: "Funding explained",
                desc: "A plain-English guide to no win, no fee agreements, deductions and expenses risk, so you know what to ask a solicitor.",
              },
              {
                title: "Scotland-wide coverage",
                desc: "Guidance for injured people from Glasgow and Edinburgh to Aberdeen, Inverness and everywhere in between.",
              },
              {
                title: "Enquiry, no obligation",
                desc: "Sending the enquiry form is free and commits you to nothing. It is not legal advice and does not stop a time limit.",
              },
              {
                title: "Sourced guidance",
                desc: "Personal injury, medical negligence, industrial disease and serious injury guides that cite legislation and official sources.",
              },
              {
                title: "Scots law, not England and Wales",
                desc: "Pages flag where Scots law and Scottish procedure differ from the rules in the rest of the UK.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOTLAND LOCATIONS */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-[#0f2044] mb-3">
            Accident Claim Information Across Scotland
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            This guidance is for people in every part of Scotland. Whether you are in Glasgow,
            Edinburgh, Aberdeen, Dundee, Inverness or anywhere else in Scotland, the same Scottish claims rules apply.
          </p>
          <div className="flex flex-wrap gap-3">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-700 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                {loc.label}
              </Link>
            ))}
            <span className="bg-gray-50 border border-gray-200 text-gray-500 font-medium px-5 py-2.5 rounded-lg text-sm">
              + all of Scotland
            </span>
          </div>
        </div>
      </section>

      {/* NO WIN NO FEE EXPLAINER */}
      <section className="section-pad bg-gray-50">
        <div className="container-max">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#0f2044] mb-4">No Win, No Fee Claims in Scotland</h2>
            <p className="text-gray-700 mb-4">
              Many personal injury and accident claims in Scotland can be funded on a no win, no fee basis.
              This means that if your claim is unsuccessful, you will not be required to pay your solicitor&apos;s fees.
            </p>
            <p className="text-gray-700 mb-4">
              A solicitor should explain the funding options clearly before you agree to proceed. Any
              deductions or success fees that apply should be set out in your written agreement, so ask
              for them in writing.
            </p>
            <p className="text-gray-700 mb-6">
              Eligibility for no win, no fee funding depends on the strength and merits of your claim.
              A solicitor can advise on the merits of your claim.
            </p>
            <Link
              href="/no-win-no-fee-solicitors-scotland"
              className="btn-navy"
            >
              Learn more about no win, no fee →
            </Link>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <CtaSection />
    </>
  );
}
