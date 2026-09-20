import type { Metadata } from "next";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Falkirk Accident Claims | Personal Injury Claim Information for Falkirk",
  description: "Information on personal injury, workplace accident and medical negligence claims in Falkirk: courts, time limits and next steps. General information, not legal advice.",
  alternates: { canonical: "/falkirk-accident-claims" },
  robots: { index: false, follow: true },
};

const faqs = [
  { question: "What personal injury claims can I make in Falkirk?", answer: "You can make a claim for any personal injury that was caused by another party's negligence while you were in Falkirk or the surrounding area. Common claim types include road traffic accident claims, workplace accident claims, medical negligence claims and public place accident claims. The general time limit is three years from the accident or date of knowledge." },
  { question: "Can I claim if my accident happened near Falkirk?", answer: "Potentially. The accident does not need to have happened in Falkirk town centre; eligibility depends on fault, causation, loss and the applicable time limit." },
  { question: "How long does a claim take in Falkirk?", answer: "The timescale depends on the complexity of your claim and whether liability is disputed. Straightforward claims may settle in a few months; more complex cases can take two to three years or more. Your solicitor will advise on the expected timescale for your specific circumstances." },
];

export default function FalkirkPage() {
  return (
    <LocationPageTemplate
      city="Falkirk"
      slug="falkirk-accident-claims"
      intro="If you have been injured in Falkirk or the surrounding area and the accident was not your fault, you may be entitled to claim compensation. This page explains personal injury, medical negligence, workplace accident and industrial disease claims relevant to Falkirk residents."
      localContext="This page provides general information about personal injury and accident compensation claims relevant to people in Falkirk and the wider area, including accidents on local roads, in workplaces, in public places or during medical treatment."
      faqs={faqs}
    />
  );
}
