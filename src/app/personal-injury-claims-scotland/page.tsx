import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Personal Injury Claims Scotland | Scottish Personal Injury Solicitors",
  description:
    "Make a personal injury claim in Scotland. Specialist Scottish solicitors for road accidents, work injuries, medical negligence and more. Free enquiry, no win no fee available.",
  alternates: { canonical: "/personal-injury-claims-scotland" },
  openGraph: {
    title: "Personal Injury Claims Scotland | Scottish Personal Injury Solicitors",
    description: "Make a personal injury claim in Scotland. Free enquiry, no win no fee available.",
    url: "/personal-injury-claims-scotland",
  },
};

const faqs = [
  {
    question: "What is a personal injury claim in Scotland?",
    answer:
      "A personal injury claim in Scotland is a legal action that allows an injured person to seek financial compensation from the party responsible for their injury. Claims are governed by Scots delict law and are pursued through the Sheriff Court or Court of Session depending on the value and complexity of the case.",
  },
  {
    question: "What types of injury can I claim for in Scotland?",
    answer:
      "You can claim for any physical or psychological injury caused by another party's negligence — including fractures, whiplash, soft tissue injuries, brain injuries, spinal injuries, psychiatric injury and industrial disease. The injury must have been caused by someone else's fault.",
  },
  {
    question: "How long does a personal injury claim take in Scotland?",
    answer:
      "Straightforward claims where liability is admitted may settle in months. Complex claims involving serious injury, disputed liability or medical negligence can take one to three years or more. Your solicitor will advise on the expected timescale.",
  },
  {
    question: "Will my claim go to court?",
    answer:
      "Most personal injury claims in Scotland are resolved through negotiation and settle without a court hearing. A small number proceed to litigation — usually where liability is disputed or a fair settlement cannot be reached.",
  },
  {
    question: "Is there a time limit for personal injury claims in Scotland?",
    answer:
      "Yes. In Scotland the general time limit is three years from the date of the accident or from the date of knowledge. Different rules apply for children and adults lacking capacity. Seek advice early — missing the deadline can extinguish your right to claim.",
  },
];

export default function PersonalInjuryPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/personal-injury-claims-scotland"
      dateModified="2026-08-11"
      breadcrumbs={[{ label: "Personal Injury Claims Scotland" }]}
      h1="Personal Injury Claims Scotland"
      intro="If you have suffered a personal injury in Scotland that was caused by someone else's negligence, you may have the right to claim compensation. Our specialist solicitors handle personal injury claims across Scotland under Scots law, with no win, no fee options available."
      tldr={[
        "You can claim if your injury was caused by another party's negligence within the last three years.",
        "Claims are governed by Scots law and handled in the Scottish courts.",
        "Compensation covers pain and suffering (solatium), loss of earnings, medical costs and future losses.",
        "No win, no fee funding is available for qualifying claims.",
        "Time limits are strict — seek advice without delay.",
      ]}
      answerBox="In Scotland, you can make a personal injury claim if you were injured within the last three years and the injury was caused by another person or organisation's negligence. Claims are governed by Scots law. A free initial enquiry will help establish whether you have a viable claim — there is no obligation to proceed."
      sections={[
        {
          heading: "What is a Personal Injury Claim?",
          content:
            "A personal injury claim is a legal action that allows an injured person to seek financial compensation from the party whose negligence caused or contributed to their injury. In Scotland, personal injury law is part of Scots delict law — distinct from the law of England and Wales. Claims are typically pursued through the Court of Session or the Sheriff Court depending on the value and complexity of the case.",
        },
        {
          heading: "Who Can Make a Personal Injury Claim in Scotland?",
          content: "You may be able to claim if:",
          list: [
            "You were injured in the last three years (or within three years of discovering your injury was caused by negligence)",
            "Your injury was caused by another person's or organisation's negligence",
            "You suffered harm as a result — physical injury, psychological injury or both",
            "There is evidence to support your claim",
          ],
        },
        {
          heading: "Types of Personal Injury Claim We Handle in Scotland",
          content: "Personal injury claims in Scotland can include:",
          linkedList: [
            { text: "Road traffic accident claims — car, motorcycle, cycling, pedestrian and passenger accidents", href: "/road-traffic-accident-claims-scotland" },
            { text: "Accident at work claims — employer negligence, unsafe workplaces, manual handling injuries", href: "/accident-at-work-claims-scotland" },
            { text: "Medical negligence claims — NHS negligence, misdiagnosis, surgical errors, birth injuries", href: "/medical-negligence-claims-scotland" },
            { text: "Industrial disease claims — asbestos, noise-induced hearing loss, vibration injuries", href: "/industrial-disease-claims-scotland" },
            { text: "Serious injury claims — brain injury, spinal injury, amputation", href: "/serious-injury-claims-scotland" },
            { text: "Public place accident claims — slips, trips and falls in shops and on pavements", href: "/public-place-accident-claims-scotland" },
            { text: "Criminal injury compensation — assault and violent crime claims through the CICA", href: "/criminal-injury-compensation-scotland" },
          ],
        },
        {
          heading: "What Evidence Do You Need for a Personal Injury Claim in Scotland?",
          content: "Evidence that can support your claim includes:",
          list: [
            "Medical records and GP or hospital notes relating to your injury",
            "Photographs of the accident scene and your injuries",
            "Witness details and statements",
            "Accident report forms — from your employer, the local authority or police",
            "Payslips and employment records to calculate wage loss",
            "Receipts and invoices for treatment, travel and other expenses",
          ],
        },
        {
          heading: "What Compensation Can You Claim in Scotland?",
          content: "Compensation in Scottish personal injury cases typically covers:",
          linkedList: [
            { text: "Solatium — pain, suffering and loss of amenity", href: "/personal-injury-compensation-scotland" },
            { text: "Past and future loss of earnings", href: "/personal-injury-compensation-scotland#earnings" },
            { text: "Medical treatment and rehabilitation costs", href: "/personal-injury-compensation-scotland" },
            { text: "Care and assistance from family members or paid carers", href: "/personal-injury-compensation-scotland" },
            { text: "Provisional damages where your condition may deteriorate", href: "/personal-injury-compensation-scotland" },
            { text: "Use the compensation planner to identify evidence and potential heads of loss", href: "/compensation-calculator-scotland" },
          ],
        },
        {
          heading: "Time Limits for Personal Injury Claims in Scotland",
          content:
            "In Scotland, the general time limit for personal injury claims is three years from the date of the accident, or three years from the date of knowledge — when you became aware your injury was caused by negligence. Different rules apply to children, adults lacking capacity and industrial disease cases. Missing the deadline can permanently bar your claim.",
        },
        {
          heading: "No Win, No Fee Personal Injury Claims in Scotland",
          content:
            "Many personal injury claims in Scotland can be funded on a no win, no fee basis. This means that if your claim is unsuccessful, you will not be required to pay your solicitor's fees. The exact terms — including any deductions or success fees — will be clearly explained in writing before you proceed.",
        },
      ]}
      subpages={{
        title: "Specialist Personal Injury Claim Types",
        pages: [
          { label: "Road Traffic Accident Claims", href: "/road-traffic-accident-claims-scotland", desc: "Car, motorcycle, cycling, pedestrian, whiplash" },
          { label: "Accident at Work Claims", href: "/accident-at-work-claims-scotland", desc: "Employer negligence, manual handling, falls" },
          { label: "Medical Negligence Claims", href: "/medical-negligence-claims-scotland", desc: "NHS, misdiagnosis, surgical errors, birth injuries" },
          { label: "Industrial Disease Claims", href: "/industrial-disease-claims-scotland", desc: "Asbestos, deafness, vibration, lung disease" },
          { label: "Serious Injury Claims", href: "/serious-injury-claims-scotland", desc: "Brain injury, spinal injury, amputation" },
          { label: "Public Place Accident Claims", href: "/public-place-accident-claims-scotland", desc: "Slips, trips, supermarkets, pavements" },
          { label: "Criminal Injury Compensation", href: "/criminal-injury-compensation-scotland", desc: "CICA claims, assault, violent crime" },
          { label: "No Win No Fee Scotland", href: "/no-win-no-fee-solicitors-scotland", desc: "How funding works" },
        ],
      }}
      guideCategory="General Advice"
      guideSlugs={[
        "personal-injury-claim-time-limit-scotland",
        "evidence-for-personal-injury-claim-scotland",
        "what-is-my-accident-claim-worth-scotland",
        "can-i-claim-if-partly-at-fault-scotland",
      ]}
      locationClaimType="personal injury claims"
      faqs={faqs}
      related={[
        { label: "Compensation Guide", href: "/personal-injury-compensation-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
        { label: "How to Claim", href: "/how-to-claim-compensation-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
        { label: "Compensation Planner", href: "/compensation-calculator-scotland" },
      ]}
    />
  );
}
