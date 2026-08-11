import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CompensationPlanner from "@/components/CompensationPlanner";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, servicePageSchema } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Compensation Calculator Scotland | Personal Injury Claim Planner",
  description: "Use this Scottish personal injury compensation planning tool to identify potential heads of loss, evidence gaps and the factors that affect claim value.",
  alternates: { canonical: "/compensation-calculator-scotland" },
  openGraph: { title: "Scottish Personal Injury Compensation Planner", description: "A cautious evidence and loss-planning tool for accident claims in Scotland.", url: "/compensation-calculator-scotland" },
};

const faqs = [
  { question: "Can an online calculator tell me what my Scottish injury claim is worth?", answer: "Not reliably. Claim value depends on medical evidence, prognosis, responsibility, previous health, financial records and future needs. A generic number can omit important losses or create false expectations." },
  { question: "What is included in personal injury compensation in Scotland?", answer: "A claim may include solatium for pain and loss of amenity, plus supported past and future financial losses such as earnings, care, treatment, travel, equipment and accommodation." },
  { question: "Why does this tool not give a cash figure?", answer: "Published brackets cannot safely value an individual claim without facts and evidence. This tool identifies the components that may need investigation so that nothing material is overlooked." },
  { question: "Does using this tool start a claim?", answer: "No. It stores and sends no information, does not provide legal advice and does not start court proceedings or protect a time limit." },
];

export default function CompensationCalculatorPage() {
  const url = "/compensation-calculator-scotland";
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Compensation calculator", url: `${SITE.url}${url}` }], url),
        faqSchema(faqs),
        servicePageSchema({ name: "Personal Injury Compensation Calculator Scotland", url, description: "A cautious planning tool for identifying the evidence and heads of loss relevant to a Scottish personal injury claim.", dateModified: "2026-08-11", speakableSelectors: ["#direct-answer", "h1"] }),
      ]} />
      <Breadcrumbs crumbs={[{ label: "Compensation Calculator Scotland" }]} />
      <section className="bg-[#0f2044] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold uppercase tracking-wide text-amber-300">Scottish claim planning tool</p>
          <h1 className="mt-2 max-w-4xl text-3xl font-bold text-white sm:text-5xl">Personal Injury Compensation Calculator Scotland</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">Map the parts of a potential claim and the evidence you may need. The tool deliberately avoids invented settlement estimates.</p>
        </div>
      </section>
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div id="direct-answer" className="answer-box mb-8"><p className="text-blue-900">A Scottish personal injury claim is valued from evidence, not a single tariff. Injury severity and duration matter, but earnings, care, treatment and future needs can be equally important. Use this planner to identify possible gaps before reading the detailed compensation guide.</p></div>
        <CompensationPlanner />
        <div className="prose-legal mt-12">
          <h2>How Scottish personal injury compensation is assessed</h2>
          <p>Solatium compensates pain, suffering and loss of amenity. Separate patrimonial losses may cover the financial effect of the injury. The final assessment depends on proof, causation and the extent to which another party is legally responsible.</p>
          <h2>Why prognosis comes before valuation</h2>
          <p>An early figure may be unsafe if symptoms are developing, treatment is incomplete or future work and care needs are uncertain. Medical opinion helps distinguish temporary symptoms from lasting impairment and links the condition to the accident or negligence alleged.</p>
          <h2>Authoritative starting points</h2>
          <p><a href="https://www.scotcourts.gov.uk/courts-and-tribunals/sheriff-and-justice-of-the-peace-courts/national-personal-injury-court/" target="_blank" rel="noopener noreferrer">Scottish Courts and Tribunals Service</a> explains the specialist personal injury court. The <a href="https://www.legislation.gov.uk/ukpga/1973/52/contents" target="_blank" rel="noopener noreferrer">Prescription and Limitation (Scotland) Act 1973</a> contains the core limitation framework.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Link className="card font-semibold text-red-700" href="/personal-injury-compensation-scotland">Read the compensation guide →</Link>
          <Link className="card font-semibold text-red-700" href="/personal-injury-claim-time-limits-scotland">Check Scottish time limits →</Link>
          <Link className="card font-semibold text-red-700" href="/contact">Make a free enquiry →</Link>
        </div>
      </main>
      <FAQ faqs={faqs} />
    </>
  );
}
