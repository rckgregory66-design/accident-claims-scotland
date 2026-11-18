import type { Metadata } from "next";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import { LOCATION_EXTRAS } from "@/data/locationLocalContent";

export const metadata: Metadata = {
  title: "Inverness Accident Claims | Personal Injury Claim Information",
  description: "Information on personal injury, workplace accident and medical negligence claims in Inverness: courts, time limits and next steps. General information, not legal advice.",
  alternates: { canonical: "/inverness-accident-claims" },
  robots: { index: false, follow: true },
};

const faqs = [
  { question: "What personal injury claims can I make in Inverness?", answer: "You can make a claim for any personal injury that was caused by another party's negligence while you were in Inverness or the surrounding area. Common claim types include road traffic accident claims, workplace accident claims, medical negligence claims and public place accident claims. The general time limit is three years from the accident or date of knowledge." },
  { question: "Can I claim if my accident happened near Inverness?", answer: "Potentially. The accident does not need to have happened in Inverness city centre; eligibility depends on fault, causation, loss and the applicable time limit." },
  { question: "How long does a claim take in Inverness?", answer: "The timescale depends on the complexity of your claim and whether liability is disputed. Straightforward claims may settle in a few months; more complex cases can take two to three years or more. Your solicitor will advise on the expected timescale for your specific circumstances." },
];

export default function InvernessPage() {
  return (
    <LocationPageTemplate
      city="Inverness"
      slug="inverness-accident-claims"
      intro="If you have been injured in Inverness or the surrounding area and the accident was not your fault, you may be entitled to claim compensation. This page explains personal injury, medical negligence, workplace accident and industrial disease claims relevant to Inverness residents."
      localContext="Inverness is the Highland city from which many claims in the surrounding area are organised, and it is where Inverness Justice Centre and Raigmore Hospital are located. Claims from the city and the wider Highland area often involve collisions on trunk roads including the A9, the A82 and the A96, workplace and outdoor-work accidents, alleged negligent treatment in NHS Highland services including Raigmore Hospital, and public-place accidents. The Scottish Courts and Tribunals Service lists Inverness Justice Centre as the court building in the city. Because Transport Scotland publishes road casualty statistics for the Highland local authority as a whole, figures quoted on this page are not Inverness-only totals."
      faqs={faqs}
      localContent={LOCATION_EXTRAS["inverness-accident-claims"].localContent}
      sources={LOCATION_EXTRAS["inverness-accident-claims"].sources}
      dateModified={LOCATION_EXTRAS["inverness-accident-claims"].dateModified}
    />
  );
}
