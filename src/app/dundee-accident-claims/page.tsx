import type { Metadata } from "next";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Dundee Accident Claims | Personal Injury Solicitors Dundee",
  description: "Accident claims solicitors serving Dundee. Personal injury, workplace accident and medical negligence claims for Dundee residents. Free enquiry, no win no fee.",
  alternates: { canonical: "/dundee-accident-claims" },
  robots: { index: false, follow: true },
};

const faqs = [
  { question: "What personal injury claims can I make in Dundee?", answer: "You can make a claim for any personal injury that was caused by another party's negligence while you were in Dundee or the surrounding area. Common claim types include road traffic accident claims, workplace accident claims, medical negligence claims and public place accident claims. The general time limit is three years from the accident or date of knowledge." },
  { question: "Can I claim if my accident happened near Dundee?", answer: "Potentially. The accident does not need to have happened in Dundee city centre; eligibility depends on fault, causation, loss and the applicable time limit." },
  { question: "How long does a claim take in Dundee?", answer: "The timescale depends on the complexity of your claim and whether liability is disputed. Straightforward claims may settle in a few months; more complex cases can take two to three years or more. Your solicitor will advise on the expected timescale for your specific circumstances." },
];

export default function DundeePage() {
  return (
    <LocationPageTemplate
      city="Dundee"
      slug="dundee-accident-claims"
      intro="If you have been injured in Dundee or the surrounding area and the accident was not your fault, you may be entitled to claim compensation. This page explains personal injury, medical negligence, workplace accident and industrial disease claims relevant to Dundee residents."
      localContext="This page provides general information about personal injury and accident compensation claims relevant to people in Dundee and the wider area, including accidents on local roads, in workplaces, in public places or during medical treatment."
      faqs={faqs}
    />
  );
}
