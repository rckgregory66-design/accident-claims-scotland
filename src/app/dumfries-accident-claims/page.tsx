import type { Metadata } from "next";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Dumfries Accident Claims | Personal Injury Claim Information for Dumfries",
  description: "Information on personal injury, workplace and medical negligence claims in Dumfries and Galloway: courts, time limits and next steps. General information, not legal advice.",
  alternates: { canonical: "/dumfries-accident-claims" },
  robots: { index: false, follow: true },
};

const faqs = [
  {
    question: "Can I make a personal injury claim for an accident in Dumfries and Galloway?",
    answer:
      "Yes. If you were injured in an accident in Dumfries or the wider Galloway region that was not your fault, you may be entitled to claim compensation. Claims include road traffic accidents, workplace injuries in agriculture and construction, and accidents in public places. The general time limit is three years from the date of the accident or date of knowledge.",
  },
  {
    question: "Which court handles personal injury claims from Dumfries?",
    answer:
      "Personal injury claims from the Dumfries area are generally heard at Dumfries Sheriff Court. Higher-value or complex cases may be heard at the Court of Session in Edinburgh. Your solicitor will advise on the most appropriate forum for your claim.",
  },
  {
    question: "Can I claim against NHS Dumfries and Galloway for medical negligence?",
    answer:
      "Yes. If you received negligent medical care from NHS Dumfries and Galloway — including Dumfries and Galloway Royal Infirmary — you may have a valid claim. Medical negligence claims against NHS Dumfries and Galloway are defended by the Central Legal Office.",
  },
];

export default function DumfriesPage() {
  return (
    <LocationPageTemplate
      city="Dumfries"
      slug="dumfries-accident-claims"
      intro="If you have been injured in Dumfries or the wider Galloway area and the accident was not your fault, you may be entitled to claim compensation. This page explains personal injury, workplace accident, medical negligence and industrial disease claims relevant to Dumfries and Galloway residents."
      localContext="Dumfries and Galloway is a large region in south-west Scotland covering Dumfries, Stranraer, Castle Douglas, Annan, Lockerbie and the surrounding rural areas. The local economy includes agriculture, food production, tourism, construction and public services. Road traffic accidents on the A75, A76 and other major routes are common. Dumfries and Galloway Royal Infirmary is the main acute hospital for the region, operated by NHS Dumfries and Galloway. Dumfries Sheriff Court handles civil and personal injury cases for the sheriffdom."
      faqs={faqs}
    />
  );
}
