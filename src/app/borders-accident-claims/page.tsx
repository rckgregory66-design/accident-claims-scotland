import type { Metadata } from "next";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Borders Accident Claims | Personal Injury Claim Information for Scottish Borders",
  description: "Information on personal injury, workplace and medical negligence claims in the Scottish Borders: courts, time limits and next steps. General information, not legal advice.",
  alternates: { canonical: "/borders-accident-claims" },
  robots: { index: false, follow: true },
};

const faqs = [
  {
    question: "Can I make a personal injury claim if my accident happened in the Scottish Borders?",
    answer:
      "Yes. If you were injured in an accident in the Scottish Borders that was not your fault, you may be entitled to claim compensation. Common claim types include road traffic accidents on rural A-roads, workplace accidents in agriculture and manufacturing, and public place accidents. The general time limit is three years from the date of the accident or date of knowledge.",
  },
  {
    question: "Which court handles personal injury claims from the Scottish Borders?",
    answer:
      "Personal injury claims from the Scottish Borders area are generally heard at Jedburgh Sheriff Court. Higher-value or more complex cases may be raised in the Court of Session in Edinburgh. Your solicitor will advise on the appropriate court for your claim.",
  },
  {
    question: "Can I claim against NHS Borders for medical negligence?",
    answer:
      "Yes. If you received negligent medical care from NHS Borders — including the Borders General Hospital near Melrose — you may have a valid medical negligence claim. Claims against NHS Borders are defended by the Central Legal Office.",
  },
];

export default function BordersPage() {
  return (
    <LocationPageTemplate
      city="The Borders"
      slug="borders-accident-claims"
      intro="If you have been injured in the Scottish Borders and the accident was not your fault, you may be entitled to claim compensation. This page explains personal injury, workplace accident, medical negligence and industrial disease claims relevant to Scottish Borders residents."
      localContext="The Scottish Borders is a predominantly rural area covering towns including Hawick, Galashiels, Jedburgh, Kelso, Peebles and Selkirk. The local economy includes agriculture, manufacturing, textiles, tourism and public services. Road traffic accidents on the A68, A7 and other rural routes are a common source of personal injury claims. The Borders General Hospital, operated by NHS Borders, is the main acute hospital for the region. Jedburgh Sheriff Court serves the Borders area for civil and personal injury cases."
      faqs={faqs}
    />
  );
}
