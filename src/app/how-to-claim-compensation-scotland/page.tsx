import type { Metadata } from "next";
import Link from "next/link";
import ClaimForm from "@/components/ClaimForm";
import CtaSection from "@/components/CtaSection";
import FAQ from "@/components/FAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, howToSchema } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "How to Claim Compensation Scotland | Personal Injury Claim Process",
  description:
    "Step-by-step guide to making a personal injury compensation claim in Scotland. How accident claims work, what to expect and how to get started.",
  alternates: { canonical: "/how-to-claim-compensation-scotland" },
};

const faqs = [
  {
    question: "How do I start a personal injury claim in Scotland?",
    answer:
      "The first step is to get in touch with a Scottish personal injury solicitor for a free initial assessment. You do not need to have gathered all your evidence before contacting a solicitor — they will help you identify and gather what is needed. Your solicitor will explain whether you have a viable claim and what the process will involve.",
  },
  {
    question: "Do I need a solicitor to make a personal injury claim in Scotland?",
    answer:
      "It is not a legal requirement to use a solicitor. However, personal injury claims — particularly those involving serious injury, medical negligence or disputed liability — can be complex. A solicitor experienced in Scots personal injury law will be best placed to assess the strength of your claim, gather evidence, negotiate with insurers and, if necessary, litigate on your behalf.",
  },
  {
    question: "How long will my claim take?",
    answer:
      "The time taken depends on the complexity of your claim, whether liability is admitted, and the nature of your injuries. Straightforward claims where liability is not disputed may settle in a few months. Complex claims involving serious injury, disputed liability or medical negligence can take two to five years or more.",
  },
  {
    question: "What if the other side denies liability?",
    answer:
      "If the other side denies liability, your solicitor will gather further evidence, obtain expert reports and — if necessary — raise court proceedings. Many disputed claims ultimately settle before a court hearing. Your solicitor will advise you on the prospects of success and guide you through any litigation.",
  },
];

const steps = [
  {
    n: 1,
    title: "Free initial enquiry",
    detail: "Contact us by phone, email or online form. Tell us what happened, when, and what injuries you suffered. This is completely free and carries no obligation. Your solicitor will listen to your account and ask some initial questions to assess whether you may have a viable claim.",
  },
  {
    n: 2,
    title: "Claim assessment",
    detail: "Your solicitor will carry out a detailed assessment of your claim. They will consider the circumstances of the accident, who was at fault, the nature of your injuries, the evidence available and the applicable time limits. They will advise you honestly on the prospects of success and the funding options available to you.",
  },
  {
    n: 3,
    title: "Evidence gathering",
    detail: "Your solicitor will help you gather and preserve the evidence needed to support your claim. This may include medical records, photographs, witness statements, accident reports, employment records and expert reports. Acting quickly preserves evidence before it is lost.",
  },
  {
    n: 4,
    title: "Letter of claim",
    detail: "Your solicitor will write a formal letter of claim to the party responsible for your accident (or their insurer). This letter sets out the circumstances of the accident, the legal basis for your claim and an outline of your losses. The other side then has a period of time to investigate and respond.",
  },
  {
    n: 5,
    title: "Medical evidence",
    detail: "Independent medical evidence is essential in personal injury claims. Your solicitor will instruct a medical expert — or experts in different specialties for complex claims — to assess your injuries, provide a prognosis and quantify your future care and treatment needs. This evidence underpins the value of your claim.",
  },
  {
    n: 6,
    title: "Negotiation",
    detail: "Once the medical evidence is available and your losses are quantified, your solicitor will negotiate with the other side's insurers to reach a fair settlement. In many cases, personal injury claims settle at this stage. Your solicitor will keep you informed throughout and will not recommend you accept any offer they do not consider fair.",
  },
  {
    n: 7,
    title: "Settlement or court action",
    detail: "If a fair settlement is reached, your claim concludes and your compensation is paid. If the other side refuses to settle fairly, your solicitor may advise raising court proceedings. Most cases still settle during the litigation process. A small proportion proceed to a court hearing where a judge decides the outcome.",
  },
  {
    n: 8,
    title: "Compensation payment",
    detail: "Once your claim is settled or judgment is obtained, your compensation is paid. The amount you receive after any deductions under your funding arrangement will be explained to you clearly. Your solicitor will ensure the settlement is properly structured, particularly in cases involving children or ongoing future losses.",
  },
];

export default function HowToClaimPage() {
  const crumbs = [{ name: "Home", url: SITE.url }, { name: "How to Claim Compensation Scotland", url: `${SITE.url}/how-to-claim-compensation-scotland` }];
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema(crumbs),
        faqSchema(faqs),
        howToSchema(
          steps.map((s) => ({ name: `Step ${s.n}: ${s.title}`, text: s.detail })),
          "How to Claim Personal Injury Compensation in Scotland"
        ),
      ]} />
      <Breadcrumbs crumbs={[{ label: "How to Claim Compensation Scotland" }]} />

      <section className="bg-[#0f2044] py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How to Claim Compensation in Scotland
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            A step-by-step guide to the personal injury claims process in Scotland — from your first
            enquiry through to receiving your compensation.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="answer-box">
          <p className="font-semibold text-blue-900 mb-1">How do accident claims work in Scotland?</p>
          <p className="text-blue-800">
            In Scotland, a personal injury claim follows a structured process beginning with a free initial
            enquiry. Most claims are resolved through negotiation between solicitors and insurers —
            without the need for a court hearing. Your solicitor handles the process on your behalf, keeping
            you informed at every stage. The process typically takes several months to several years
            depending on the complexity of your claim.
          </p>
        </div>

        <div className="space-y-8 mt-10">
          {steps.map((step) => (
            <div key={step.n} className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#0f2044] text-white flex items-center justify-center font-bold text-lg">
                  {step.n}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0f2044] mb-2">
                  Step {step.n}: {step.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="card border-l-4 border-l-amber-500">
            <h3 className="font-bold text-[#0f2044] mb-2">Time limits are critical</h3>
            <p className="text-sm text-gray-600 mb-3">
              In Scotland, most personal injury claims must be started within three years of the accident
              or date of knowledge. Do not delay.
            </p>
            <Link href="/personal-injury-claim-time-limits-scotland" className="text-sm text-red-700 font-medium underline">
              Check your time limit →
            </Link>
          </div>
          <div className="card border-l-4 border-l-[#0f2044]">
            <h3 className="font-bold text-[#0f2044] mb-2">Understanding no win, no fee</h3>
            <p className="text-sm text-gray-600 mb-3">
              Many claims in Scotland can be funded on a no win, no fee basis. Your solicitor will explain
              all funding options clearly before you proceed.
            </p>
            <Link href="/no-win-no-fee-solicitors-scotland" className="text-sm text-red-700 font-medium underline">
              How no win, no fee works →
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#0f2044] mb-6">Start Your Claim Enquiry</h2>
          <ClaimForm title="Free claim assessment — no obligation" />
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CtaSection />
    </>
  );
}
