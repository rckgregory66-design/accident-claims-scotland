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
  title: "Accident Claims Scotland | Personal Injury & Medical Negligence Claim Information",
  description:
    "Plain-English information on personal injury, medical negligence, industrial disease and workplace accident claims in Scotland: time limits, evidence, funding and next steps. Not a law firm.",
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
      "A no win no fee arrangement means that if your claim is unsuccessful, you will not be required to pay your solicitor's fees. The exact terms of any funding arrangement will be explained to you clearly before you proceed. Some deductions or success fees may apply; these will be set out transparently in your agreement.",
  },
  {
    question: "Can I claim if I was partly to blame for my accident?",
    answer:
      "Yes. In Scotland, contributory negligence may reduce the amount of compensation you receive, but it does not necessarily prevent you from claiming altogether. Your solicitor will assess the circumstances and advise on the likely impact on your claim.",
  },
  {
    question: "How much compensation will I receive?",
    answer:
      "Compensation depends on the nature and severity of your injuries, the impact on your life, your financial losses and other factors. We cannot guarantee any particular outcome. Your solicitor will give you an honest assessment of your claim based on the facts and evidence.",
  },
  {
    question: "Do I need to go to court?",
    answer:
      "Most personal injury claims in Scotland are settled out of court through negotiation between solicitors. A small number of claims proceed to litigation if liability is disputed or a fair settlement cannot be reached. Your solicitor will guide you through every step.",
  },
  {
    question: "What evidence do I need to support my claim?",
    answer:
      "Useful evidence includes medical records, photographs of the scene and your injuries, witness details, accident report forms, payslips for wage loss calculations, and any correspondence with insurers. Your solicitor will help you gather and present the evidence needed.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[
        faqSchema(faqs),
        breadcrumbSchema([{ name: "Home", url: SITE.url }]),
        servicePageSchema({
          name: "Accident Claims Scotland",
          url: "/",
          description: SITE.description,
          dateModified: "2026-08-11",
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
                <span>✓</span> Scotland-focused claims information
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Accident Claims Scotland: Personal Injury Solicitors Helping People Claim Compensation
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                If you have been injured in an accident in Scotland that was not your fault, you may be
                able to seek compensation. This website provides general information about personal injury,
                medical negligence, industrial disease and workplace accident claims across Scotland.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Free initial enquiry",
                  "No win, no fee available",
                  "Clear claims information",
                  "Scotland-focused guidance",
                  "No obligation assessment",
                  "Scotland-wide coverage",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-gray-200">
                    <span className="text-yellow-400 font-bold">✓</span> {t}
                  </div>
                ))}
              </div>
            </div>
            {/* Right: form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-[#0f2044] mb-1">Start Your Free Claim Check</h2>
              <p className="text-sm text-gray-500 mb-5">General enquiry form. No obligation.</p>
              <ClaimForm variant="hero" />
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
              In Scotland, you may be able to claim compensation if you were injured because of someone else&apos;s
              negligence and the accident occurred within the last three years (or within three years of
              discovering your injury was caused by negligence). Claims are handled under Scots law.
              Eligibility depends on the facts of your case, the evidence available, liability and causation.
              A free enquiry will give you a clear initial assessment with no obligation to proceed.
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
                className="card hover:border-red-200 hover:shadow-red-100 group"
              >
                <div className="text-3xl mb-3">{ct.icon}</div>
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
                Making a personal injury claim in Scotland follows a structured process. Here is what to
                expect when you instruct a solicitor.
              </p>
              <ol className="space-y-4">
                {[
                  ["Free enquiry", "Contact us for a no-obligation discussion about your circumstances."],
                  ["Claim assessment", "Your solicitor reviews the facts, evidence, liability and time limits."],
                  ["Evidence gathering", "We help gather medical records, witness statements and other evidence."],
                  ["Letter of claim", "A formal letter is sent to the other side setting out your claim."],
                  ["Medical evidence", "Independent medical evidence is obtained to support your claim."],
                  ["Negotiation", "We negotiate with the other party's insurers to reach a fair settlement."],
                  ["Settlement or court", "Most claims settle without going to court. If needed, we litigate on your behalf."],
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
                  or the date of knowledge. Do not delay — contact us as early as possible.
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
            <h2 className="text-3xl font-bold text-white mb-3">Why Choose Accident Claims Scotland?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We provide general information about accident and personal injury claims in Scotland.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⚖️",
                title: "Scottish claims information",
                desc: "Learn what information a Scottish personal injury solicitor may need when assessing a claim.",
              },
              {
                icon: "£",
                title: "No win, no fee options",
                desc: "Funding options are available so you can pursue your claim without upfront financial risk. All terms explained clearly before you proceed.",
              },
              {
                icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
                title: "Scotland-wide coverage",
                desc: "Guidance for injured people from Glasgow and Edinburgh to Aberdeen, Inverness and everywhere in between.",
              },
              {
                icon: "🤝",
                title: "No obligation enquiry",
                desc: "Your initial enquiry is free and carries no obligation. We will give you an honest assessment of your claim.",
              },
              {
                icon: "📋",
                title: "Expert guidance",
                desc: "Personal injury, medical negligence, industrial disease and serious injury claims handled with specialist knowledge of Scots law.",
              },
              {
                icon: "🔒",
                title: "Scotland-focused",
                desc: "Our guidance highlights where Scots law and Scottish claims procedures may differ.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-xl p-6 border border-white/10">
                <div className="text-3xl mb-3">{item.icon}</div>
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
            Accident Claim Solicitors Across Scotland
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
              We will explain the funding options available to you clearly and transparently before you
              agree to proceed. Any deductions or success fees that may apply will be set out in your
              written agreement so you know exactly where you stand.
            </p>
            <p className="text-gray-700 mb-6">
              Eligibility for no win, no fee funding depends on the strength and merits of your claim.
              Your solicitor will give you an honest assessment.
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
