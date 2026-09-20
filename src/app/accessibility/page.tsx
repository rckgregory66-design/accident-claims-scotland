import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Accessibility Statement | Accident Claims Scotland",
  description: "Accessibility statement for accident-claims-scotland.com — our commitment to digital accessibility.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Accessibility", url: `${SITE.url}/accessibility` }], "/accessibility"),
        servicePageSchema({ name: "Accessibility", url: "/accessibility", description: "Accessibility statement for the Accident Claims Scotland website.", dateModified: "2026-09-20" }),
      ]} />
      <Breadcrumbs crumbs={[{ label: "Accessibility" }]} />
      <section className="bg-[#0f2044] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Accessibility Statement</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 prose-legal">
        <h2>Our Commitment to Accessibility</h2>
        <p>
          {SITE.name} is committed to making this website accessible to as many people as possible.
          We aim to conform to Level AA of the Web Content Accessibility Guidelines (WCAG) 2.1.
        </p>

        <h2>What We Are Doing</h2>
        <ul>
          <li>Using clear, plain English throughout the site</li>
          <li>Providing sufficient colour contrast between text and backgrounds</li>
          <li>Ensuring form fields have clear labels</li>
          <li>Making all images accessible with descriptive alt text</li>
          <li>Structuring pages with clear, logical headings</li>
          <li>Ensuring the site works with keyboard navigation</li>
          <li>Making the site usable on screen readers</li>
        </ul>

        <h2>Known Limitations</h2>
        <p>
          We are continually working to improve the accessibility of this website. If you encounter
          any accessibility barriers, please let us know.
        </p>

        <h2>Contact Us About Accessibility</h2>
        <p>
          If you have difficulty accessing any part of this website or would like content in a different
          format, use the website contact page. Direct contact details will be added when confirmed.
        </p>

        <h2>Reporting Problems</h2>
        <p>
          If you find any accessibility problems, please use the website contact page. We will
          aim to respond within [X] working days.
        </p>
      </div>
    </>
  );
}
