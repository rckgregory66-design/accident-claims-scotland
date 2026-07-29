import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Accident Claims Scotland",
  description: "Privacy policy for Accident Claims Scotland — how we collect, use and protect your personal data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Privacy Policy" }]} />
      <section className="bg-[#0f2044] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 prose-legal">
        <h2>Who We Are</h2>
        <p>
          This privacy notice applies to {SITE.name}. The verified identity and contact details of the website
          operator must be published here before personal data is collected. We are committed to complying with the UK General Data Protection
          Regulation (UK GDPR) and the Data Protection Act 2018.
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
        <p>We also collect basic technical data (IP address, browser type, pages visited) through cookies.</p>

        <h2>How We Use Your Data</h2>
        <p>We use your personal data to:</p>
        <ul>
          <li>Respond to your enquiry and assess whether we can assist with your claim</li>
          <li>Provide legal services if you instruct us</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do not sell your personal data to third parties. We do not share your data with marketing
          companies. Data shared with third parties is limited to what is necessary for us to provide
          legal services — for example, medical agencies for expert evidence.
        </p>

        <h2>Legal Basis for Processing</h2>
        <p>We process your data on the basis of:</p>
        <ul>
          <li>Your consent — for initial enquiries</li>
          <li>Performance of a contract — if you instruct us as your solicitor</li>
          <li>Legal obligation — where required by law or regulatory requirements</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We retain personal data for as long as is necessary for the purpose for which it was collected,
          and in compliance with applicable legal and operational requirements. A specific retention schedule
          will be published when the website operator and enquiry-handling arrangements are confirmed.
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
        <p>Verified contact details for exercising these rights must be published before personal data is collected.</p>

        <h2>Complaints</h2>
        <p>
          If you are unhappy with how we have handled your personal data, you have the right to
          complain to the Information Commissioner&apos;s Office (ICO) at ico.org.uk.
        </p>

        <h2>Contact</h2>
        <p>
          Verified data-protection contact details will be published when the website operator is confirmed.
        </p>
      </div>
    </>
  );
}
