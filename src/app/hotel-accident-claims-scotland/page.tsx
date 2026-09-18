import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Hotel Accident Claims Scotland — Guest Injury Compensation",
  description:
    "Injured in a hotel in Scotland? Information on occupiers' liability, slips, falls, pool accidents and hotel accident compensation. Free enquiry, no win no fee available.",
  alternates: { canonical: "/hotel-accident-claims-scotland" },
  openGraph: {
    title: "Hotel Accident Claims Scotland — Guest Injury Compensation",
    description: "Hotel accident claim in Scotland — slips, falls, pool injuries. Occupiers' liability. Free enquiry.",
    url: "/hotel-accident-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim compensation for an accident in a hotel in Scotland?",
    answer:
      "Yes. Hotels owe guests a duty of care under the Occupiers' Liability (Scotland) Act 1960. If you were injured because of a hazard in the hotel — such as a wet floor, defective furniture, an unsafe staircase, inadequate lighting or a dangerous pool area — and the hotel failed to take reasonable steps to prevent the hazard, you may have a valid claim.",
  },
  {
    question: "What types of hotel accident give rise to a claim?",
    answer:
      "Common hotel accident claims include: slipping on a wet floor in reception, corridors or the pool area; tripping on uneven flooring, loose carpeting or poorly lit stairways; injuries from defective furniture or fixtures in guest rooms; swimming pool injuries due to inadequate supervision, signage or maintenance; injuries in the gym, spa or other hotel facilities; and accidents in hotel car parks.",
  },
  {
    question: "What if my hotel accident happened in Scotland but I live elsewhere?",
    answer:
      "If the accident happened in Scotland, Scots law and Scottish courts apply — regardless of where you live. Scottish personal injury law imposes the same duty of care on occupiers as for any premises in Scotland. Claims can be managed by Scottish solicitors on your behalf without you needing to attend Scotland for most procedural steps.",
  },
  {
    question: "What evidence should I gather after a hotel accident?",
    answer:
      "After a hotel accident you should: report the incident to hotel management and ask for a written accident report; request a copy of the accident book entry; photograph the hazard, the scene and your injuries; obtain the names and contact details of any witnesses; seek medical attention promptly and keep records; retain any receipts for expenses arising from the injury; and contact a solicitor as soon as possible.",
  },
  {
    question: "Can I claim for a swimming pool accident in a hotel?",
    answer:
      "Yes. Hotel swimming pool accidents can give rise to claims where: there was inadequate or absent poolside supervision; warning signs were absent or inadequate; the poolside surface was slippery; the pool depth was not clearly marked; pool equipment or fittings were defective; or chemical imbalances in the pool caused injury. Hotels must comply with HSE guidance on safe management of pools.",
  },
  {
    question: "What is the time limit for a hotel accident claim in Scotland?",
    answer:
      "The general time limit is three years from the date of the accident. Children have until their 19th birthday. Do not delay — CCTV, accident reports and staff witness evidence may not be available indefinitely.",
  },
];

export default function HotelAccidentPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/hotel-accident-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Public Place Accident Claims Scotland", href: "/public-place-accident-claims-scotland" },
        { label: "Hotel Accident Claims Scotland" },
      ]}
      h1="Hotel Accident Claims Scotland"
      intro="Hotels have a legal duty to ensure the safety of guests on their premises under the Occupiers' Liability (Scotland) Act 1960. If you were injured in a hotel in Scotland — whether in a guest room, corridors, pool area or other facility — and the accident was caused by the hotel's failure to take reasonable precautions, you may be entitled to claim compensation."
      tldr={[
        "Hotels owe guests a duty of care under the Occupiers' Liability (Scotland) Act 1960.",
        "Slips, trips, defective furniture, pool accidents and gym injuries are all claimable.",
        "Scottish law applies regardless of where you live.",
        "Report the accident and request an accident report before leaving the hotel.",
        "Time limit: three years from the date of the accident.",
      ]}
      answerBox="In Scotland, hotels owe guests a legal duty of care as occupiers. If you were injured because the hotel failed to keep its premises reasonably safe — through a slippery floor, defective furnishings, unsafe pool or any other hazard — you may claim compensation. The time limit is three years. A free enquiry will assess your claim."
      sections={[
        {
          heading: "Hotels and Occupiers' Liability in Scotland",
          content:
            "Under the Occupiers' Liability (Scotland) Act 1960, hotels — as occupiers of their premises — are required to take reasonable care to prevent injury to guests and other visitors. The duty extends to all areas of the hotel that guests can reasonably access, including guest rooms, corridors, stairways, lifts, restaurant and bar areas, swimming pools, gyms, spas, and car parks. A failure to maintain safe conditions in any of these areas can give rise to a claim.",
        },
        {
          heading: "Common Hotel Accident Claims in Scotland",
          content: "Hotel accident claims in Scotland commonly involve:",
          list: [
            "Slipping on wet or contaminated floors — pool areas, hotel lobbies, restaurant areas",
            "Tripping on loose, raised or damaged flooring — carpets, tiles, thresholds",
            "Falling on unsafe stairways — worn carpet, inadequate handrails, poor lighting",
            "Injuries from defective furniture — broken chairs, collapsing beds, faulty fixtures",
            "Swimming pool accidents — slippery poolside, inadequate supervision or depth marking",
            "Gym and spa injuries — defective equipment, inadequate safety protocols",
            "Hotel car park accidents — potholes, inadequate lighting, unmarked hazards",
          ],
        },
        {
          heading: "Swimming Pool Safety and Hotel Claims",
          content:
            "Hotel swimming pools carry specific risks. The HSE publishes guidance on the safe management of swimming pools (Managing Health and Safety in Swimming Pools). Hotels must: provide adequate lifeguard supervision appropriate to the pool size and bather load; maintain safe poolside surfaces; ensure pool depth is clearly marked; display appropriate notices; and maintain pool water chemistry within safe parameters. Failure to comply with any of these measures can establish liability where a guest is injured.",
        },
        {
          heading: "Evidence in Hotel Accident Claims",
          content:
            "Evidence is central to a hotel accident claim. Key steps to take:",
          list: [
            "Report the accident to hotel management and ensure an accident book entry is made",
            "Request a copy of the accident report before you leave",
            "Photograph the hazard, the scene and any visible injuries",
            "Note the names and contact details of any witnesses — including hotel staff",
            "Ask that CCTV be preserved — this may be overwritten within days",
            "Seek medical attention and retain all records",
            "Keep receipts for any additional expenses caused by the injury",
          ],
        },
        {
          heading: "Non-Scottish Residents — Claiming in Scotland",
          content:
            "If you were injured in a hotel in Scotland but live in England, Wales, or elsewhere, Scots law and Scottish courts apply to the claim. Scottish solicitors can manage the claim on your behalf and instruct medical experts. You will not typically need to attend Scotland for most procedural steps, though you may need to give evidence at a proof (trial) if the claim is contested.",
        },
        {
          heading: "What Compensation Can I Claim?",
          content: "Hotel accident compensation in Scotland can cover:",
          list: [
            "Solatium — pain, suffering and loss of amenity",
            "Lost earnings if the injury caused absence from work",
            "Medical treatment and rehabilitation costs",
            "Travel costs to appointments",
            "Out-of-pocket expenses arising from the injury",
            "Care and assistance from family members",
          ],
        },
      ]}
      guideSlugs={[
        "slip-trip-fall-claims-scotland",
        "evidence-for-personal-injury-claim-scotland",
        "what-is-my-accident-claim-worth-scotland",
      ]}
      locationClaimType="hotel accident claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Occupiers' Liability (Scotland) Act 1960 — hotel and premises duty", url: "https://www.legislation.gov.uk/ukpga/1960/30/contents" },
        { label: "HSE — Managing Health and Safety in Swimming Pools", url: "https://www.hse.gov.uk/pubns/priced/hsg179.pdf" },
        { label: "Prescription and Limitation (Scotland) Act 1973 — time limits", url: "https://www.legislation.gov.uk/ukpga/1973/52/contents" },
      ]}
      related={[
        { label: "Public Place Accident Claims Scotland", href: "/public-place-accident-claims-scotland" },
        { label: "Shop Accident Claims Scotland", href: "/shop-accident-claims-scotland" },
        { label: "Supermarket Accident Claims", href: "/supermarket-accident-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
