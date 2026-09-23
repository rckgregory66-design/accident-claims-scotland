import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import { SITE } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Scotland Personal Injury Statistics — Official Data & Figures | Accident Claims Scotland",
  description:
    "Key statistics on workplace injuries, road casualties, clinical negligence, criminal injuries and industrial disease in Scotland. All figures drawn from official government and public-body sources.",
  alternates: { canonical: `${SITE.url}/scotland-personal-injury-statistics` },
  openGraph: {
    title: "Scotland Personal Injury Statistics — Official Data & Figures",
    description:
      "Official statistics on personal injury in Scotland: HSE workplace figures, Transport Scotland road casualties, CICA criminal injury data, and NHS CLO clinical negligence payments.",
    url: `${SITE.url}/scotland-personal-injury-statistics`,
    type: "article",
  },
};

const DATE_MODIFIED = "2026-09-18";

export default function ScotlandPersonalInjuryStatisticsPage() {
  const statsFaqs = [
    { question: "How many people are injured at work in Scotland each year?", answer: "Scotland accounts for approximately 9% of the Great Britain workforce. Across GB, the HSE recorded around 604,000 non-fatal workplace injuries in 2023/24 according to the Labour Force Survey, suggesting roughly 54,000 in Scotland. HSE publishes Scotland-specific RIDDOR figures separately." },
    { question: "How many people are killed on Scottish roads each year?", answer: "Transport Scotland recorded 155 road deaths in Scotland in 2023, with 1,706 people seriously injured and 7,160 slightly injured — a total of 9,021 casualties of all severities." },
    { question: "How much does NHS Scotland pay out in clinical negligence claims?", answer: "The NHS Central Legal Office paid £50 million in damages and costs in 2022/23, of which £42.6 million was compensation to claimants. In the same year, 1,175 new claims were received." },
    { question: "How much compensation does the CICA pay each year?", answer: "The Criminal Injuries Compensation Authority paid £154.2 million across England, Scotland and Wales in 2023/24. The mean award across resolved applications was approximately £9,600." },
    { question: "Why does Scotland have such high rates of mesothelioma?", answer: "Scotland has historically high mesothelioma rates — around 300 deaths per year — due to its industrial heritage in Clydeside shipbuilding, heavy manufacturing and construction, where asbestos was used extensively until it was banned in 1999." },
    { question: "What is the time limit for making a personal injury claim in Scotland?", answer: "The general time limit in Scotland is three years from the date of the accident or the date of knowledge. Industrial disease claims run from diagnosis or date of knowledge of the work connection. Do not delay — seek advice as soon as possible." },
  ];

  const schemaData = [
    breadcrumbSchema(
      [
        { name: "Home", url: SITE.url },
        { name: "Scotland Personal Injury Statistics", url: `${SITE.url}/scotland-personal-injury-statistics` },
      ],
      "/scotland-personal-injury-statistics",
    ),
    articleSchema({
      title: "Scotland Personal Injury Statistics — Official Data & Figures",
      description:
        "Key statistics on personal injury in Scotland, drawn from HSE, Transport Scotland, CICA, and NHS CLO official sources.",
      url: "/scotland-personal-injury-statistics",
      datePublished: "2026-09-18",
      dateModified: DATE_MODIFIED,
      speakableSelectors: ["h1", "article"],
    }),
    faqSchema(statsFaqs),
  ];

  return (
    <>
      <JsonLd data={schemaData} />
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Scotland Personal Injury Statistics" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#0f2044] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-4xl">
            Scotland Personal Injury Statistics
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Official figures on workplace injuries, road casualties, criminal injuries, clinical negligence, and
            industrial disease in Scotland. All data sourced from UK and Scottish government bodies.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 prose-legal">

        <div className="answer-box not-prose mb-8">
          <p className="text-blue-800 text-sm font-semibold mb-1">About this page</p>
          <p className="text-blue-800">
            This reference page collates official statistics relevant to personal injury claims in Scotland. Figures
            are updated as official sources publish new data. Where Scotland-specific breakdowns are unavailable, Great
            Britain or UK-wide figures are noted as such. This page is general information, not advice on an individual
            case.
          </p>
        </div>

        {/* Workplace injuries */}
        <section id="workplace-injuries" className="mb-12">
          <h2>Workplace Injuries and Ill Health — HSE</h2>
          <p>
            The Health and Safety Executive (HSE) publishes annual <em>Health and Safety at Work</em> statistics for
            Great Britain, with some Scotland-specific breakdowns. The most recent figures (2023/24) show:
          </p>
          <ul>
            <li>
              <strong>138 workers killed</strong> at work across Great Britain in 2023/24 — a rate of 0.43 per
              100,000 workers.
            </li>
            <li>
              <strong>604,000 workers sustained a non-fatal workplace injury</strong> (Labour Force Survey estimate)
              in 2023/24.
            </li>
            <li>
              <strong>61,663 non-fatal injuries to employees</strong> were reported by employers under RIDDOR in
              2023/24.
            </li>
            <li>
              <strong>1.7 million workers</strong> suffered from work-related ill health (new or long-standing) in
              2023/24.
            </li>
            <li>
              <strong>33.7 million working days lost</strong> due to work-related illness and workplace injury in
              2023/24.
            </li>
          </ul>
          <p>
            The most common causes of fatal injuries to workers are falls from height, being struck by a moving
            vehicle, and being struck by a moving or flying object. The most frequently reported non-fatal injuries
            are handling, lifting or carrying injuries, slips, trips and falls, and being struck by an object.
          </p>
          <p className="text-sm text-gray-600">
            Source:{" "}
            <a
              href="https://www.hse.gov.uk/statistics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 underline"
            >
              HSE — Health and Safety Statistics (2023/24)
            </a>
            . Figures are for Great Britain unless stated. Scotland accounts for approximately 9% of the GB workforce.
          </p>
        </section>

        {/* Road casualties */}
        <section id="road-casualties" className="mb-12">
          <h2>Road Casualties in Scotland — Transport Scotland</h2>
          <p>
            Transport Scotland publishes annual <em>Scottish Road Safety Statistics</em>. The most recent full-year
            data (2023) shows:
          </p>
          <ul>
            <li>
              <strong>155 people killed</strong> in road accidents in Scotland in 2023.
            </li>
            <li>
              <strong>1,706 people seriously injured</strong> on Scottish roads in 2023.
            </li>
            <li>
              <strong>7,160 people slightly injured</strong> in reported road accidents in Scotland in 2023.
            </li>
            <li>
              <strong>9,021 total casualties</strong> of all severities in Scotland in 2023.
            </li>
          </ul>
          <p>
            Vulnerable road users — pedestrians, cyclists and motorcyclists — account for a disproportionate share
            of serious and fatal casualties. Rural roads in Scotland carry elevated risk per vehicle kilometre
            travelled compared with urban roads.
          </p>
          <p className="text-sm text-gray-600">
            Source:{" "}
            <a
              href="https://www.transport.gov.scot/publication/reported-road-casualties-scotland-2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 underline"
            >
              Transport Scotland — Reported Road Casualties Scotland 2023
            </a>
            .
          </p>
        </section>

        {/* Criminal injuries */}
        <section id="criminal-injuries" className="mb-12">
          <h2>Criminal Injury Compensation — CICA</h2>
          <p>
            The Criminal Injuries Compensation Authority (CICA) administers the Criminal Injuries Compensation
            Scheme across England, Scotland and Wales. Annual figures from the CICA Annual Report 2023/24:
          </p>
          <ul>
            <li>
              <strong>29,958 applications received</strong> by the CICA in 2023/24.
            </li>
            <li>
              <strong>27,218 decisions made</strong> by the CICA in 2023/24.
            </li>
            <li>
              <strong>£154.2 million paid in compensation</strong> during 2023/24.
            </li>
            <li>
              <strong>£9,600 average award</strong> (mean) across resolved applications in 2023/24.
            </li>
          </ul>
          <p>
            Awards under the Criminal Injuries Compensation Scheme are made according to a fixed tariff. The minimum
            award (Band 1) is £1,000; the maximum for a single injury is £250,000. Applicants may be refused or have
            awards reduced if they have relevant unspent criminal convictions or contributed to their injuries.
          </p>
          <p className="text-sm text-gray-600">
            Source:{" "}
            <a
              href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 underline"
            >
              CICA Annual Report and Accounts 2023/24
            </a>
            . Figures cover England, Scotland and Wales.
          </p>
        </section>

        {/* Clinical negligence */}
        <section id="clinical-negligence" className="mb-12">
          <h2>Clinical Negligence in Scotland — NHS CLO</h2>
          <p>
            NHS Scotland clinical negligence claims are handled by the Central Legal Office (CLO) on behalf of NHS
            boards. Published CLO data for 2022/23:
          </p>
          <ul>
            <li>
              <strong>1,175 new claims received</strong> by the CLO in 2022/23.
            </li>
            <li>
              <strong>£50.0 million paid in damages and costs</strong> in 2022/23.
            </li>
            <li>
              <strong>£42.6 million</strong> of that total was damages payments to claimants.
            </li>
            <li>
              The remaining £7.4 million was paid in legal costs and other expenses.
            </li>
          </ul>
          <p>
            Clinical negligence claims in Scotland are governed by Scots law. The limitation period is generally
            three years from the date of the negligent act or from the date of knowledge. Fatal claims under the
            Damages (Scotland) Act 2011 have different relatives who may claim compared with England and Wales.
          </p>
          <p className="text-sm text-gray-600">
            Source:{" "}
            <a
              href="https://www.clo.scot.nhs.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 underline"
            >
              NHS Central Legal Office — Annual Reports
            </a>
            . Figures are Scotland-specific.
          </p>
        </section>

        {/* Industrial disease */}
        <section id="industrial-disease" className="mb-12">
          <h2>Industrial Disease — Mesothelioma and Asbestos</h2>
          <p>
            Scotland has a historically high rate of asbestos-related disease due to past industrial activity in
            shipbuilding, construction and heavy manufacturing. HSE mesothelioma figures for Scotland:
          </p>
          <ul>
            <li>
              <strong>Around 300 mesothelioma deaths per year</strong> in Scotland in recent years.
            </li>
            <li>
              Scotland has one of the <strong>highest mesothelioma rates per capita</strong> in the world, reflecting
              Scotland&rsquo;s industrial heritage — particularly Clydeside shipbuilding.
            </li>
            <li>
              The <strong>average latency period</strong> between asbestos exposure and mesothelioma diagnosis is
              typically 30 to 50 years.
            </li>
            <li>
              <strong>Vibration white finger (HAVS)</strong> and <strong>noise-induced hearing loss</strong> remain
              common industrial disease claims across Scotland&rsquo;s manufacturing, construction and oil sectors.
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            Source:{" "}
            <a
              href="https://www.hse.gov.uk/statistics/causdis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 underline"
            >
              HSE — Work-related disease statistics (including mesothelioma)
            </a>
            .
          </p>
        </section>

        {/* Limitation periods */}
        <section id="limitation-periods" className="mb-12">
          <h2>Key Time Limits for Claims in Scotland</h2>
          <p>
            Understanding time limits is essential. In Scotland, time limits are governed by the Prescription and
            Limitation (Scotland) Act 1973 and subsequent amendments.
          </p>
          <ul>
            <li>
              <strong>Personal injury (general):</strong> three years from the date of accident or date of knowledge.
            </li>
            <li>
              <strong>Medical negligence:</strong> three years from the date of negligence or date of knowledge —
              whichever is later.
            </li>
            <li>
              <strong>Industrial disease:</strong> three years from diagnosis or date of knowledge of the connection
              between the disease and past employment.
            </li>
            <li>
              <strong>Fatal accident claims (relatives):</strong> three years from death or date of knowledge —
              under the Damages (Scotland) Act 2011.
            </li>
            <li>
              <strong>Criminal injuries (CICA):</strong> two years from the incident in most cases, subject to
              discretion for late applications.
            </li>
            <li>
              <strong>Children:</strong> the three-year period does not begin until the child&rsquo;s sixteenth birthday,
              meaning claims may generally be brought up to their nineteenth birthday.
            </li>
          </ul>
          <p>
            The courts retain a discretion to allow late claims in certain circumstances, but this should not be
            relied upon. If a time limit is approaching, seek independent legal advice without delay.
          </p>
          <p>
            <Link href="/personal-injury-claim-time-limits-scotland" className="text-red-700 underline font-medium">
              Read our full guide to personal injury time limits in Scotland →
            </Link>
          </p>
        </section>

        {/* Editorial note */}
        <div className="not-prose mt-10 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800">
          <p className="font-semibold mb-1">Editorial note</p>
          <p>
            All statistics on this page are drawn from official government, public-body or regulatory sources as cited.
            We update figures when official sources publish revised data. Where only Great Britain or UK-wide figures
            are available, that scope is noted. This page is general information and is not advice on an individual
            claim.
          </p>
          <p className="mt-2">
            Last updated{" "}
            {new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(
              new Date(`${DATE_MODIFIED}T12:00:00Z`),
            )}
            .{" "}
            <Link href="/editorial-methodology" className="font-semibold underline">
              Read our publishing standards
            </Link>
            .
          </p>
        </div>
      </article>

      <FAQ faqs={statsFaqs} />
    </>
  );
}
