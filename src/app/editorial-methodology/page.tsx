import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Editorial Methodology | Accident Claims Scotland",
  description: "How Accident Claims Scotland researches, sources, reviews, updates and corrects its general Scottish claims information.",
  alternates: { canonical: "/editorial-methodology" },
};

export default function EditorialMethodologyPage() {
  const url = "/editorial-methodology";
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Editorial methodology", url: `${SITE.url}${url}` }], url),
        articleSchema({
          title: "Editorial Methodology",
          description: "How Accident Claims Scotland researches, sources, reviews, updates and corrects its general Scottish claims information.",
          url,
          datePublished: "2026-08-11",
          dateModified: "2026-08-11",
          speakableSelectors: ["#methodology-answer", "h1"],
        }),
      ]} />
      <Breadcrumbs crumbs={[{ label: "Editorial Methodology" }]} />
      <section className="bg-[#0f2044] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Editorial Methodology</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">How this website researches, qualifies, updates and corrects general information about accident claims in Scotland.</p>
        </div>
      </section>
      <main className="prose-legal mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div id="methodology-answer" className="answer-box">
          <p className="text-blue-900">Accident Claims Scotland prioritises Scottish primary legislation and official public bodies, states important qualifications, links readers to the underlying source and separates general information from advice on an individual case. Content is updated when material law or official guidance changes and corrections are invited.</p>
        </div>

        <h2>Scope and responsibility</h2>
        <p>The website is operated by Ola Consultants Ltd as a Scottish accident-claims marketing and information resource. It is not currently presented as a regulated law firm. Published material is general information and does not establish a solicitor-client relationship.</p>

        <h2>Source hierarchy</h2>
        <p>We prefer sources in the following order:</p>
        <ol>
          <li>Scottish and UK primary legislation on legislation.gov.uk.</li>
          <li>Scottish Courts and Tribunals Service rules, forms and court information.</li>
          <li>Official bodies including CICA, GOV.UK, HSE, NHS inform, the Motor Insurers&apos; Bureau, ICO and Scottish Legal Complaints Commission.</li>
          <li>Official statistics and public-sector publications with a stated reporting period.</li>
          <li>Secondary commentary only where it adds necessary context and can be checked against stronger sources.</li>
        </ol>

        <h2>How pages are structured</h2>
        <p>Substantive pages begin with a concise answer and key qualifications, then explain eligibility, evidence, procedure, time limits, losses and closely related routes. Scottish rules are distinguished from rules applying in England and Wales where that difference could change a reader&apos;s understanding.</p>

        <h2>Legal and numerical claims</h2>
        <p>We avoid guaranteeing eligibility, liability, funding, settlement or timescale. Statistics identify the publishing body and reporting period. The compensation planner does not generate a cash estimate because individual valuation depends on medical, factual and financial evidence.</p>

        <h2>Review and update process</h2>
        <p>Priority pages display a last-reviewed date. Material changes to legislation, court procedure or official schemes trigger review of the affected page and its related summaries. A review date records a substantive check; it is not changed merely to make a page appear recent.</p>

        <h2>Corrections</h2>
        <p>Readers can report an inaccurate, outdated or unclear passage through the <Link href="/contact">contact page</Link>. Please provide the page URL, the passage concerned and, where possible, the authoritative source. Material errors are corrected promptly and connected pages are checked for the same issue.</p>

        <h2>Commercial and regulatory status</h2>
        <p>Marketing wording does not replace verification of a legal provider. Firm identities, solicitor biographies, memberships, reviews and regulatory claims will only be published when genuine details can be checked. Read the current <Link href="/about">status information</Link>, <Link href="/terms">terms of use</Link> and <Link href="/privacy-policy">privacy policy</Link>.</p>
      </main>
    </>
  );
}
