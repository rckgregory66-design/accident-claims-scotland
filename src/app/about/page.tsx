import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
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
          The content explains general Scots-law concepts and common claims processes. Individual cases require
          advice from a suitably qualified Scottish solicitor.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Honesty:</strong> We give clear, realistic advice about your claim — never inflated promises.</li>
          <li><strong>Transparency:</strong> We explain funding arrangements, processes and prospects honestly and in plain English.</li>
          <li><strong>Clarity:</strong> We explain general claims terminology and processes in plain English.</li>
          <li><strong>Accessibility:</strong> We aim to make general information accessible to people from all backgrounds.</li>
          <li><strong>Compassion:</strong> We understand that an injury can affect every aspect of your life and treat every client with respect and sensitivity.</li>
        </ul>

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
