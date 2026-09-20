import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Use | Accident Claims Scotland",
  description: "Terms of use for the Accident Claims Scotland website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Terms of Use", url: `${SITE.url}/terms` }], "/terms"),
        servicePageSchema({ name: "Terms of Use", url: "/terms", description: "Terms of use for the Accident Claims Scotland website.", dateModified: "2026-09-20" }),
      ]} />
      <Breadcrumbs crumbs={[{ label: "Terms of Use" }]} />
      <section className="bg-[#0f2044] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Terms of Use</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 prose-legal">
        <h2>About This Website</h2>
        <p>
          {SITE.name} currently publishes general information. Verified operator details must be added before
          this website collects enquiries. By using this website, you agree to these terms of use.
        </p>

        <h2>General Information Only</h2>
        <p>
          The content on this website is provided for general information purposes only. It does not
          constitute legal advice and should not be relied upon as such. The information on this website
          relates to Scots law and is not intended to apply to other jurisdictions.
        </p>
        <p>
          Each personal injury claim depends on its own specific facts, evidence, liability, causation
          and applicable time limits. You should always seek specific legal advice from a qualified
          solicitor before making decisions about your claim.
        </p>

        <h2>No Guarantee of Outcome</h2>
        <p>
          Nothing on this website constitutes a guarantee or promise of any particular outcome or level
          of compensation. The value of any claim depends on its own circumstances and cannot be
          predicted in advance.
        </p>

        <h2>Links to Third-Party Sites</h2>
        <p>
          This website may contain links to third-party websites. We are not responsible for the
          content of those websites and our inclusion of a link does not imply endorsement.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          The content of this website — including text, graphics, logos and design — is the property
          of {SITE.name} or its content suppliers and is protected by copyright. You may not
          reproduce, republish or redistribute content from this website without our written permission.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms of use are governed by the law of Scotland. Any dispute arising from the use of
          this website shall be subject to the jurisdiction of the Scottish courts.
        </p>

        <h2>Contact</h2>
        <p>
          Contact details for questions about these terms will be added when the website operator details are confirmed.
        </p>
      </div>
    </>
  );
}
