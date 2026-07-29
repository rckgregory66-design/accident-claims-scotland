import type { Metadata } from "next";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Edinburgh Accident Claims | Personal Injury Solicitors Edinburgh",
  description:
    "Accident claims solicitors serving Edinburgh. Personal injury, workplace accident and medical negligence claims for Edinburgh residents. Free enquiry, no win no fee.",
  alternates: { canonical: "/edinburgh-accident-claims" },
};

const faqs = [
  {
    question: "Can I claim for an accident on Edinburgh's roads?",
    answer:
      "Yes. Edinburgh's roads — including the City Bypass, A1, A702 and city centre routes — are the scene of many road traffic accidents each year. If you were injured in a road accident in Edinburgh that was not your fault, you may be able to claim compensation from the at-fault driver's insurer.",
  },
  {
    question: "Can I claim against NHS Lothian for medical negligence in Edinburgh?",
    answer:
      "Yes. Claims against NHS Lothian — including the Royal Infirmary of Edinburgh, the Western General Hospital and other NHS Lothian sites — are defended by the Central Legal Office. If you received substandard care at an NHS Lothian facility that caused you avoidable harm, you may have a valid clinical negligence claim.",
  },
  {
    question: "Are personal injury claims from Edinburgh handled in Edinburgh?",
    answer:
      "Edinburgh Sheriff Court at Chambers Street handles personal injury claims for the Edinburgh Sheriffdom. The Court of Session, also based in Edinburgh, handles higher-value and more complex cases. Your solicitor will advise on the appropriate court.",
  },
  {
    question: "Can I claim for an accident caused by an Edinburgh pavement defect?",
    answer:
      "Yes. The City of Edinburgh Council has a duty to maintain roads and pavements in a safe condition. If you tripped on a defective or broken pavement in Edinburgh and the council was responsible, you may be able to claim against the council.",
  },
];

export default function EdinburghPage() {
  return (
    <LocationPageTemplate
      city="Edinburgh"
      slug="edinburgh-accident-claims"
      intro="If you have been injured in Edinburgh or the Lothians and the accident was not your fault, you may be entitled to claim compensation. Our Scottish solicitors handle personal injury, medical negligence, workplace accident and industrial disease claims for Edinburgh residents."
      localContext="Edinburgh is Scotland's capital city and a major centre for finance, tourism, public services and healthcare. Accidents in Edinburgh range from road traffic incidents on the City Bypass and inner city routes to workplace accidents in the construction, hospitality and financial services sectors. NHS Lothian, one of Scotland's largest health boards, operates major facilities including the Royal Infirmary of Edinburgh and Western General Hospital. The Court of Session — Scotland's highest civil court — is based in Edinburgh, making it the centre of Scots personal injury law at the highest level."
      faqs={faqs}
    />
  );
}
