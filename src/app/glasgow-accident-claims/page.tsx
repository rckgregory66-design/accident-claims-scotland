import type { Metadata } from "next";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Glasgow Accident Claims | Personal Injury Claim Information for Glasgow",
  description: "Information on personal injury, workplace accident and medical negligence claims in Glasgow: courts, time limits and next steps. General information, not legal advice.",
  alternates: { canonical: "/glasgow-accident-claims" },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "Can I claim for an accident at a Glasgow workplace?",
    answer:
      "Yes. If you were injured at work in Glasgow or the surrounding area due to your employer's negligence, you may have a valid claim. Glasgow is home to significant construction, healthcare, retail, logistics and services industries — all of which give rise to workplace accident claims. The time limit is generally three years from the accident date.",
  },
  {
    question: "Which courts handle Glasgow personal injury claims?",
    answer:
      "Personal injury claims in the Glasgow area are handled by Glasgow Sheriff Court for lower-value claims and the Court of Session in Edinburgh for higher-value or more complex cases. Your solicitor will advise on the appropriate forum for your claim.",
  },
  {
    question: "Can I claim for an accident on Glasgow public transport?",
    answer:
      "Yes. Accidents on Glasgow's Subway, buses, taxis or other public transport can give rise to personal injury claims against the transport operator if their negligence caused your injury. Claims involving ScotRail or Glasgow Subway follow specific procedures.",
  },
  {
    question: "What if my accident happened in the Greater Glasgow area?",
    answer:
      "Claims can arise for residents of Glasgow and surrounding areas including Paisley, Motherwell, Hamilton, East Kilbride, Rutherglen, Bearsden, Milngavie, Clydebank and the wider Strathclyde area.",
  },
];

export default function GlasgowPage() {
  return (
    <LocationPageTemplate
      city="Glasgow"
      slug="glasgow-accident-claims"
      intro="If you have been injured in an accident in Glasgow or the Greater Glasgow area that was not your fault, you may be entitled to claim compensation. This page explains personal injury, workplace accident, medical negligence and industrial disease claims relevant to Glasgow residents."
      localContext="Glasgow is Scotland's largest city and a major centre for commerce, industry, healthcare and transport. Personal injury claims arising in Glasgow cover a wide range of circumstances — from road traffic accidents on the M8, M77 and city centre streets, to workplace accidents in the construction, manufacturing, healthcare and logistics sectors. Glasgow's major hospitals, including the Queen Elizabeth University Hospital, NHS Greater Glasgow and Clyde sites, and Stobhill Hospital, are among the facilities where medical negligence claims can arise. Glasgow Sheriff Court at Carlton Place handles personal injury claims for the Glasgow Sheriffdom."
      faqs={faqs}
    />
  );
}
