import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Complaints Procedure | Accident Claims Scotland",
  description: "How to raise a concern about information published on Accident Claims Scotland.",
  alternates: { canonical: "/complaints" },
};

export default function ComplaintsPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Complaints", url: `${SITE.url}/complaints` }], "/complaints"),
        servicePageSchema({ name: "Complaints", url: "/complaints", description: "How to raise a complaint about the Accident Claims Scotland website.", dateModified: "2026-09-20" }),
      ]} />
      <Breadcrumbs crumbs={[{ label: "Complaints" }]} />
      <section className="bg-[#0f2044] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Complaints Procedure</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 prose-legal">
        <h2>Raise a Concern About This Website</h2>
        <p>
          Accident Claims Scotland currently publishes general information and does not identify itself as a
          regulated legal practice. If you believe that content is inaccurate, inaccessible or misleading,
          use the contact details published on the contact page once verified details are available.
        </p>

        <h2>What to Include</h2>
        <p>
          Identify the page, explain the concern and describe any correction or accessibility support requested.
          Do not include unnecessary medical or other sensitive personal information.
        </p>

        <h2>Complaints About a Legal Provider</h2>
        <p>
          If you have instructed a solicitor or another legal provider, use that provider&apos;s own complaints
          procedure. Its engagement letter should identify the regulated entity and explain any right to refer
          an unresolved complaint to the appropriate independent body.
        </p>
      </div>
    </>
  );
}
