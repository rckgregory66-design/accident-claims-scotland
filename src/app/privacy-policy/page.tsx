import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Accident Claims Scotland",
  description: "Privacy policy for Accident Claims Scotland — how we collect, use and protect your personal data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Privacy Policy", url: `${SITE.url}/privacy-policy` }], "/privacy-policy"),
        servicePageSchema({ name: "Privacy Policy", url: "/privacy-policy", description: "How Accident Claims Scotland handles personal data.", dateModified: "2026-09-20" }),
      ]} />
      <Breadcrumbs crumbs={[{ label: "Privacy Policy" }]} />
      <section className="bg-[#0f2044] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 prose-legal">
        <h2>Who We Are</h2>
        <p>
          This privacy notice applies to {SITE.name}. The website is operated by Ola Consultants Ltd,
          which is the data controller for information submitted through this website. Data-protection
          enquiries can be sent to rckgregory66@gmail.com.
        </p>
        <p>
          Ola Consultants Ltd is not presented on this website as a firm of solicitors. Submitting an
          enquiry does not create a solicitor-client relationship.
        </p>

        <h2>What Data We Collect</h2>
        <p>When you submit an enquiry through our website, we collect:</p>
        <ul>
          <li>Your name</li>
          <li>Contact details — phone number, email address</li>
          <li>Your postcode</li>
          <li>Details of your accident or injury</li>
          <li>Any other information you choose to provide</li>
        </ul>
        <p>
          Our infrastructure providers may also process limited technical information, including IP
          address, browser information and security logs, when an enquiry is submitted.
        </p>

        <h2>How We Use Your Data</h2>
        <p>We use your personal data to:</p>
        <ul>
          <li>Respond to your enquiry and make an initial assessment of the information supplied</li>
          <li>Contact you about the enquiry and, where appropriate, discuss its onward handling</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do not sell your personal data to third parties. We do not share your data with marketing
          companies.
        </p>

        <h2>Enquiry Delivery Providers</h2>
        <p>
          Enquiries are processed through Cloudflare, which hosts and protects the website, and Resend,
          which delivers the enquiry by email to Ola Consultants Ltd. These providers act as data
          processors for this delivery. Their processing may involve infrastructure outside the United
          Kingdom, subject to the contractual safeguards made available by those providers.
        </p>
        <p>
          Do not upload or include medical records, identity documents or other highly sensitive
          documents in the initial enquiry form.
        </p>

        <h2>Legal Basis for Processing</h2>
        <p>We process your data on the basis of:</p>
        <ul>
          <li>Your consent — for initial enquiries</li>
          <li>Steps requested before entering a contract, where applicable</li>
          <li>Legal obligation — where required by law or regulatory requirements</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We retain personal data for as long as is necessary for the purpose for which it was collected,
          including responding to the enquiry, maintaining appropriate records and meeting applicable
          legal obligations. Information that is not required will be deleted or anonymised.
        </p>

        <h2>Your Rights</h2>
        <p>Under UK GDPR, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data (subject to legal obligations)</li>
          <li>Object to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise these rights, contact Ola Consultants Ltd at rckgregory66@gmail.com.
        </p>

        <h2>Complaints</h2>
        <p>
          If you are unhappy with how we have handled your personal data, you have the right to
          complain to the Information Commissioner&apos;s Office (ICO) at ico.org.uk.
        </p>

        <h2>Contact</h2>
        <p>
          Data controller: Ola Consultants Ltd<br />
          Email: rckgregory66@gmail.com
        </p>
      </div>
    </>
  );
}
