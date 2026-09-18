import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us | Accident Claims Scotland",
  description:
    "About Accident Claims Scotland and the general claims information published on this website.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[
        organizationSchema(),
        breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "About Us", url: `${SITE.url}/about` }], "/about"),
        servicePageSchema({ name: "About Accident Claims Scotland", url: "/about", description: "About the Accident Claims Scotland information website, operated by Ola Consultants Ltd, covering personal injury and accident claims in Scotland.", dateModified: "2026-08-11" }),
      ]} />
      <Breadcrumbs crumbs={[{ label: "About Us" }]} />

      <section className="bg-[#0f2044] py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Accident Claims Scotland</h1>
          <p className="text-gray-300 text-lg">
            General information about personal injury and accident claims in Scotland.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 prose-legal">
        <div className="answer-box">
          <p className="text-blue-800">
            {SITE.name} publishes general information about accident and personal injury claims in Scotland.
            The website does not provide individual legal advice and does not identify itself as a regulated law firm.
          </p>
        </div>

        <h2>Who We Are</h2>
        <p>
          {SITE.name} is an information website covering personal injury, medical negligence, industrial
          disease and workplace accident claims in Scotland.
        </p>
        <p>
          The website is operated by Ola Consultants Ltd. It is being prepared as a marketing and information
          resource for Scottish solicitors, but is not currently presented as a regulated law firm. Firm,
          solicitor and regulatory details will be added only when they can be verified.
        </p>
        <p>
          The content explains general Scots-law concepts and common claims processes. Individual cases require
          advice from a suitably qualified Scottish solicitor.
        </p>

        <h2>How the content is prepared</h2>
        <p>
          Pages are written for a Scottish audience, separated by claim type and checked against primary or
          official sources where available. These include legislation.gov.uk, the Scottish Courts and Tribunals
          Service, GOV.UK, CICA, HSE, NHS inform, the Motor Insurers&apos; Bureau, the ICO and the Scottish Legal
          Complaints Commission. Source links appear on substantive pages so readers can check the underlying material.
        </p>
        <p>
          We distinguish general information from advice on an individual case, avoid publishing generic settlement
          promises, and state important qualifications where rules or outcomes depend on evidence. Content is reviewed
          when official guidance changes and material corrections are made as soon as they are identified.
        </p>

        <h2>Our publishing standards</h2>
        <ul>
          <li><strong>Honesty:</strong> We provide clear, realistic information and avoid inflated promises.</li>
          <li><strong>Transparency:</strong> We explain funding arrangements, processes and material qualifications in plain English.</li>
          <li><strong>Clarity:</strong> We explain general claims terminology and processes in plain English.</li>
          <li><strong>Accessibility:</strong> We aim to make general information accessible to people from all backgrounds.</li>
          <li><strong>Care:</strong> We recognise that injury can affect every aspect of a person&apos;s life and use respectful, sensitive language.</li>
        </ul>

        <h2>Corrections and feedback</h2>
        <p>
          If you believe a page is inaccurate, out of date or unclear, use the <Link href="/contact">contact page</Link>
          and identify the page and passage concerned. Website and privacy concerns can also be raised through the
          routes described in our <Link href="/complaints">complaints information</Link> and <Link href="/privacy-policy">privacy policy</Link>.
        </p>
        <p>
          Our dedicated <Link href="/editorial-methodology">editorial methodology</Link> explains the source hierarchy,
          review process and standards used for legal and numerical claims.
        </p>

        <h2>Important status information</h2>
        <p>
          This website currently provides general information only. It should not be described or relied upon
          as a regulated legal practice. Before instructing any legal provider, verify its identity and current
          regulatory status independently.
        </p>

        <h2>Scotland-Wide Coverage</h2>
        <p>
          The website contains information relevant to people across Scotland, including Glasgow, Edinburgh,
          Aberdeen, Dundee, Inverness, Stirling, Perth, Paisley, Ayr and Falkirk.
        </p>

        <h2>Explore the core Scottish claims resources</h2>
        <p>
          Start with the <Link href="/personal-injury-claims-scotland">personal injury claims hub</Link>, the detailed
          <Link href="/road-traffic-accident-claims-scotland"> road traffic accident resource</Link>, the
          <Link href="/no-win-no-fee-solicitors-scotland"> no win, no fee explanation</Link> or the cautious
          <Link href="/compensation-calculator-scotland"> compensation planning tool</Link>.
        </p>

        <h2>Contact Us</h2>
        <p>
          For general website contact information, visit the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </section>

      <CtaSection />
    </>
  );
}
