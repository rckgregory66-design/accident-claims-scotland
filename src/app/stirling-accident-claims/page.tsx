import type { Metadata } from "next";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Stirling Accident Claims | Personal Injury Solicitors Stirling",
  description: "Accident claims solicitors serving Stirling. Personal injury, workplace accident and medical negligence claims for Stirling residents. Free enquiry, no win no fee.",
  alternates: { canonical: "/stirling-accident-claims" },
};

const faqs = [
  { question: "What personal injury claims can I make in Stirling?", answer: "You can make a claim for any personal injury that was caused by another party's negligence while you were in Stirling or the surrounding area. Common claim types include road traffic accident claims, workplace accident claims, medical negligence claims and public place accident claims. The general time limit is three years from the accident or date of knowledge." },
  { question: "Can I claim if my accident happened near Stirling?", answer: "Yes. We handle claims for people across the wider Stirling area and the surrounding region. The accident does not need to have happened in Stirling city centre — claims can arise from accidents anywhere in the area." },
  { question: "How long does a claim take in Stirling?", answer: "The timescale depends on the complexity of your claim and whether liability is disputed. Straightforward claims may settle in a few months; more complex cases can take two to three years or more. Your solicitor will advise on the expected timescale for your specific circumstances." },
];

export default function StirlingPage() {
  return (
    <LocationPageTemplate
      city="Stirling"
      slug="stirling-accident-claims"
      intro="If you have been injured in Stirling or the surrounding area and the accident was not your fault, you may be entitled to claim compensation. Our Scottish solicitors handle personal injury, medical negligence, workplace accident and industrial disease claims for Stirling residents — with no win, no fee options available."
      localContext="This page provides general information about personal injury and accident compensation claims relevant to people in Stirling and the wider area, including accidents on local roads, in workplaces, in public places or during medical treatment."
      faqs={faqs}
    />
  );
}
