import type { Metadata } from "next";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Aberdeen Accident Claims | Personal Injury Claim Information for Aberdeen",
  description: "Information on personal injury, offshore accident, workplace and medical negligence claims in Aberdeen: courts, time limits and next steps. General information, not legal advice.",
  alternates: { canonical: "/aberdeen-accident-claims" },
  robots: { index: false, follow: true },
};

const faqs = [
  { question: "Can I claim for an offshore accident from Aberdeen?", answer: "Yes. Many offshore oil and gas workers are based in or around Aberdeen. If you were injured in an offshore accident — on an oil platform, a supply vessel or during helicopter transport — you may be able to claim compensation. Offshore claims involve specialist regulations including RIDDOR and may involve the Health and Safety Executive." },
  { question: "Can I claim against NHS Grampian?", answer: "Yes. If you received negligent medical care from NHS Grampian — including Aberdeen Royal Infirmary — you may have a valid medical negligence claim. Claims against NHS Grampian are defended by the Central Legal Office." },
  { question: "What industries give rise to workplace accident claims in Aberdeen?", answer: "Aberdeen is the centre of Scotland's oil and gas industry, and also has significant construction, engineering, healthcare, fishing and logistics sectors. Workplace accident claims in Aberdeen often involve offshore incidents, construction sites, heavy machinery and manual handling injuries." },
];

export default function AberdeenPage() {
  return (
    <LocationPageTemplate
      city="Aberdeen"
      slug="aberdeen-accident-claims"
      intro="If you have been injured in Aberdeen or Aberdeenshire and the accident was not your fault, you may be entitled to claim compensation. This page explains offshore accident, road traffic, workplace, medical negligence and industrial disease claims relevant to Aberdeen residents."
      localContext="Aberdeen is Scotland's third-largest city and the centre of the UK's North Sea oil and gas industry. Many personal injury claims arising in the Aberdeen area relate to offshore accidents, industrial injuries, road accidents on the A90, A96 and other major routes, and medical negligence claims against NHS Grampian facilities including Aberdeen Royal Infirmary. Aberdeen Sheriff Court handles civil claims for the Sheriffdom of Grampian, Highland and Islands."
      faqs={faqs}
    />
  );
}
