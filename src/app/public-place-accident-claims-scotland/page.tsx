import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Public Place Accident Claims Scotland — Slips, Trips & Falls",
  description:
    "Injured in a public place in Scotland? Information on claims for slips, trips and falls in supermarkets, pavements, shops and public buildings. Free enquiry, no win no fee available.",
  alternates: { canonical: "/public-place-accident-claims-scotland" },
  openGraph: {
    title: "Public Place Accident Claims Scotland — Slips, Trips & Falls",
    description: "Injured in a public place in Scotland? Free enquiry, no win no fee available.",
    url: "/public-place-accident-claims-scotland",
  },
};

const faqs = [
  {
    question: "Who is responsible if I slip or trip in a public place in Scotland?",
    answer:
      "Under the Occupiers' Liability (Scotland) Act 1960, occupiers of premises (including supermarkets, shops, local authorities, landlords and private owners) have a duty of care to take reasonable steps to prevent injury to visitors. If they fail in this duty and you are injured as a result, they may be liable. Each case depends on its own facts and the evidence available.",
  },
  {
    question: "Can I claim against the council for a pavement trip in Scotland?",
    answer:
      "Yes. Local authorities in Scotland have a statutory duty to maintain roads and pavements in a reasonably safe condition. If a pavement is in a dangerous state of disrepair and the council was aware (or ought to have been aware) of the hazard but failed to repair it, you may have a valid claim. Evidence of the defect and the council's knowledge is important.",
  },
  {
    question: "What if the accident happened in a supermarket or shop?",
    answer:
      "Retailers and supermarkets have a duty to keep their premises safe. If you slipped on a wet floor, tripped on a raised floor tile or were injured by a falling object, and the retailer failed to take reasonable steps to prevent the hazard, you may be able to claim. CCTV footage and incident reports are important evidence in these cases — ask for them to be preserved immediately.",
  },
  {
    question: "How long do I have to claim for a public place accident in Scotland?",
    answer:
      "In Scotland, the general time limit for public place accident claims is three years from the date of the accident. Do not delay — evidence can be lost and witnesses' memories fade. Seek advice as soon as possible after your accident.",
  },
  {
    question: "Can I claim if my child was injured in a public place?",
    answer:
      "Yes. If a child is injured in a public place, a claim can be made on their behalf by a parent or guardian. In Scotland, the time limit for children's claims does not generally run until they reach the age of 16, meaning they have until their 19th birthday in most cases. However, it is advisable to gather evidence and seek advice as early as possible.",
  },
];

export default function PublicPlaceAccidentPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/public-place-accident-claims-scotland"
      dateModified="2026-06-16"
      breadcrumbs={[{ label: "Public Place Accident Claims Scotland" }]}
      h1="Public Place Accident Claims Scotland"
      intro="If you have been injured in an accident in a public place in Scotland — including a supermarket, shop, pavement, park, restaurant or public building — and the accident was caused by an occupier's negligence, you may be entitled to claim compensation. This page explains the evidence and legal issues in slip, trip and fall claims."
      tldr={[
        "Occupiers of premises owe a duty of care under the Occupiers' Liability (Scotland) Act 1960.",
        "Councils can be held liable for pavement and road defects under the Roads (Scotland) Act 1984.",
        "Ask for CCTV and incident reports to be preserved immediately — footage can be overwritten quickly.",
        "The time limit is three years from the accident date; children have until age 19.",
        "Evidence — photographs, incident reports, medical records — is essential to success.",
      ]}
      answerBox="In Scotland, occupiers of premises owe a duty of care to visitors under the Occupiers' Liability (Scotland) Act 1960. If you were injured on someone else's premises because of a foreseeable and preventable hazard, you may have a valid claim. The general time limit is three years from the accident date. A free enquiry will assess your circumstances — no obligation."
      sections={[
        {
          heading: "Occupiers' Liability in Scotland",
          content:
            "The Occupiers' Liability (Scotland) Act 1960 imposes a duty of care on occupiers of premises — including shops, supermarkets, restaurants, local authorities, schools and private landowners — to take reasonable steps to prevent injury to those using their premises. If an occupier fails in this duty and you are injured as a result, they may be liable to pay you compensation. The duty applies to slippery floors, uneven surfaces, poor lighting, trailing cables, falling objects and other foreseeable hazards.",
        },
        {
          heading: "Types of Public Place Accident Claims in Scotland",
          content: "We handle the following types of public place accident claims:",
          linkedList: [
            { text: "Supermarket slip and trip claims — wet floors, spillages, loose mats, raised tiles", href: "/supermarket-accident-claims-scotland" },
            { text: "Pavement trip claims — uneven, cracked or broken pavements maintained by local authorities", href: "/guides/council-pavement-trip-claims-scotland" },
            { text: "Council accident claims — parks, car parks, public buildings, roads", href: "/council-accident-claims-scotland" },
            { text: "Shop and retail accident claims — falling goods, poor lighting, cluttered aisles", href: "/shop-accident-claims-scotland" },
            { text: "Restaurant and café accident claims — wet floors, spilled food or drink", href: "/restaurant-accident-claims-scotland" },
            { text: "School accident claims — injuries to children in schools and leisure facilities", href: "/school-accident-claims-scotland" },
            { text: "Sports and leisure facility claims — gyms, swimming pools, sports centres", href: "/sports-injury-claims-scotland" },
          ],
        },
        {
          heading: "What Evidence Do You Need?",
          content: "Evidence is crucial in public place accident claims. Steps to take after an accident in a public place:",
          list: [
            "Report the accident to the manager or responsible person and ask for an incident report",
            "Ask for CCTV footage to be preserved — this may be overwritten quickly",
            "Take photographs of the hazard, the scene and your injuries",
            "Obtain contact details for any witnesses",
            "Seek medical attention promptly and keep medical records",
            "Keep a note of your expenses and losses",
            "Contact a solicitor as early as possible",
          ],
        },
        {
          heading: "Council Pavement Trip Claims in Scotland",
          content:
            "Scottish local authorities have a duty to maintain roads and footpaths under the Roads (Scotland) Act 1984. If a pavement is in a dangerously defective state and the council failed to repair it within a reasonable time, you may be able to claim compensation. Councils will often investigate whether the defect was reported or should have been identified on routine inspections. Evidence of the size and nature of the defect is important.",
        },
        {
          heading: "Supermarket and Retail Accident Claims in Scotland",
          content:
            "Large retailers and supermarkets have significant resources to investigate and defend claims. They will often have CCTV footage, inspection records and cleaning logs that can support or undermine a claim. Early preservation of evidence — particularly CCTV — is essential. Your solicitor will write to the retailer to preserve evidence as a priority.",
        },
        {
          heading: "What Compensation Can You Claim?",
          content: "Public place accident compensation can cover:",
          list: [
            "Pain, suffering and loss of amenity (solatium)",
            "Loss of earnings if you were unable to work",
            "Medical treatment costs and rehabilitation",
            "Care and assistance from family members",
            "Travel costs to medical appointments",
            "Other out-of-pocket expenses arising from your injury",
          ],
        },
      ]}
      subpages={{
        title: "Specialist Public Place Accident Claim Types",
        pages: [
          { label: "Supermarket Accidents", href: "/supermarket-accident-claims-scotland", desc: "Wet floors, spillages, falling goods" },
          { label: "Pavement Trip Claims", href: "/guides/council-pavement-trip-claims-scotland", desc: "Cracked and uneven pavements" },
          { label: "Council Accident Claims", href: "/council-accident-claims-scotland", desc: "Parks, car parks, public roads" },
          { label: "Shop Accident Claims", href: "/shop-accident-claims-scotland", desc: "Retail premises injuries" },
          { label: "Restaurant Accident Claims", href: "/restaurant-accident-claims-scotland", desc: "Cafés and food venues" },
          { label: "School Accident Claims", href: "/school-accident-claims-scotland", desc: "Children injured on school premises" },
          { label: "Sports Injury Claims", href: "/sports-injury-claims-scotland", desc: "Gyms, pools, leisure centres" },
        ],
      }}
      guideCategory="Public Places"
      guideSlugs={[
        "slip-trip-fall-claims-scotland",
        "supermarket-accident-claims-scotland",
        "council-pavement-trip-claims-scotland",
        "evidence-for-personal-injury-claim-scotland",
      ]}
      locationClaimType="public place accident claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Occupiers' Liability (Scotland) Act 1960 — the governing statute for premises duty", url: "https://www.legislation.gov.uk/ukpga/1960/30/contents" },
        { label: "Roads (Scotland) Act 1984 — local authority road maintenance duties", url: "https://www.legislation.gov.uk/ukpga/1984/54/contents" },
        { label: "Prescription and Limitation (Scotland) Act 1973 — time limits", url: "https://www.legislation.gov.uk/ukpga/1973/52/contents" },
      ]}
      related={[
        { label: "Personal Injury Claims Scotland", href: "/personal-injury-claims-scotland" },
        { label: "Accident at Work Claims", href: "/accident-at-work-claims-scotland" },
        { label: "Compensation Guide", href: "/personal-injury-compensation-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
