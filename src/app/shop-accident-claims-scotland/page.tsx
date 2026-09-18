import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Shop Accident Claims Scotland — Retail Premises Injury Compensation",
  description:
    "Injured in a shop or retail premises in Scotland? Information on occupiers' liability, slips, falling goods, cluttered aisles and retail accident claims. Free enquiry, no win no fee.",
  alternates: { canonical: "/shop-accident-claims-scotland" },
  openGraph: {
    title: "Shop Accident Claims Scotland — Retail Premises Injury Compensation",
    description: "Shop or retail accident claim in Scotland? Occupiers' liability — free enquiry.",
    url: "/shop-accident-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim compensation for an accident in a shop in Scotland?",
    answer:
      "Yes. Retailers and shop owners owe visitors a duty of care under the Occupiers' Liability (Scotland) Act 1960. If you were injured in a shop because of a hazard the retailer knew or ought to have known about — such as a wet floor, a falling item, a cluttered aisle or a broken fixture — and they failed to take reasonable steps to prevent the hazard, you may have a valid claim.",
  },
  {
    question: "What kinds of shop accident can I claim for?",
    answer:
      "Common shop accident claims include: slipping on a wet floor following a spillage or cleaning; tripping on a raised floor tile, mat or threshold; being struck by falling goods from a shelf or display; tripping over stock or equipment left in an aisle; injuries caused by broken or dangerous fixtures; and injuries in fitting rooms or car parks associated with retail premises.",
  },
  {
    question: "How important is CCTV evidence in a shop accident claim?",
    answer:
      "CCTV evidence can be crucial — it may show the hazard, how long it existed before the accident, and whether staff were aware of it. Retailers retain CCTV for a limited period (often 30–90 days) before it is overwritten. You should ask for CCTV to be preserved immediately after the accident, and a solicitor can write to the retailer to formally request its preservation as a priority.",
  },
  {
    question: "What should I do immediately after a shop accident?",
    answer:
      "After a shop accident in Scotland you should: report the accident to the store manager and ensure an incident report is completed; ask for a copy of the incident report; take photographs of the hazard and your injuries if possible; obtain contact details of any witnesses; seek medical attention; and contact a solicitor as soon as possible. Early action preserves evidence and strengthens your claim.",
  },
  {
    question: "What if there were warning cones or signs at the hazard?",
    answer:
      "The presence of warning cones or wet floor signs does not automatically defeat your claim. If the hazard had persisted for an unreasonable period before signs were placed, or if the signs were inadequately positioned, or if the underlying hazard was not adequately addressed, you may still have a valid claim. Each case depends on its own facts.",
  },
  {
    question: "What is the time limit for a shop accident claim in Scotland?",
    answer:
      "The general time limit is three years from the date of the accident. Children have until their 19th birthday in most cases. Do not delay — CCTV is overwritten, incident records may be lost, and witnesses' memories fade.",
  },
];

export default function ShopAccidentPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/shop-accident-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Public Place Accident Claims Scotland", href: "/public-place-accident-claims-scotland" },
        { label: "Shop Accident Claims Scotland" },
      ]}
      h1="Shop Accident Claims Scotland"
      intro="Retailers and shop owners owe customers a legal duty of care under the Occupiers' Liability (Scotland) Act 1960. If you have been injured in a shop, supermarket or retail premises in Scotland because of a hazard the retailer failed to prevent or address, you may be entitled to claim compensation."
      tldr={[
        "Retailers owe visitors a duty of care under the Occupiers' Liability (Scotland) Act 1960.",
        "Common claims: wet floors, falling goods, cluttered aisles, broken fixtures.",
        "CCTV evidence is critical — request preservation immediately after the accident.",
        "Warning cones do not automatically defeat a claim if the hazard was inadequately managed.",
        "Time limit: three years from the date of the accident.",
      ]}
      answerBox="In Scotland, shop and retail accidents give rise to a claim under the Occupiers' Liability (Scotland) Act 1960 where the occupier failed to take reasonable care to prevent a foreseeable hazard. The time limit is three years. Request CCTV preservation immediately — footage can be overwritten within days. A free enquiry will assess your claim."
      sections={[
        {
          heading: "Occupiers' Liability in Scottish Retail Premises",
          content:
            "The Occupiers' Liability (Scotland) Act 1960 requires occupiers of premises — including shops, supermarkets, department stores, retail parks and shopping centres — to take reasonable care to prevent injury to those entering their premises. The duty is not absolute: the retailer must take steps that a reasonable occupier would take given the foreseeability and severity of the risk. Systematic inspection and cleaning regimes, staff training and prompt hazard response are all relevant to this assessment.",
        },
        {
          heading: "Common Retail Accident Scenarios",
          content: "Shop accident claims in Scotland commonly arise from:",
          list: [
            "Slipping on wet or contaminated floors — including from spillages, cleaning operations or tracked-in rainwater",
            "Tripping on raised or damaged floor coverings — including lifted tiles, poorly secured mats or thresholds",
            "Being struck by falling goods from shelving or display units",
            "Tripping over stock, boxes or equipment left in customer aisles during restocking",
            "Injuries caused by broken or defective store fixtures, trolleys or displays",
            "Injuries in changing rooms, toilets, car parks or other areas associated with the retail premises",
          ],
        },
        {
          heading: "The Importance of CCTV Evidence",
          content:
            "CCTV footage from retail premises can show: the hazard itself; how long it was present before the accident; whether staff walked past without action; whether the hazard was reasonably foreseeable; and the accident itself. Retailers typically retain CCTV for 30 to 90 days before automatic overwriting. Your solicitor will write to the retailer to formally request preservation immediately — this letter creates a duty to preserve the footage.",
        },
        {
          heading: "Inspection and Cleaning Records",
          content:
            "Supermarkets and large retailers maintain inspection and cleaning logs — records of when areas were checked and cleaned. If the floor had not been inspected within a reasonable period before the accident, or if the inspection record shows that a hazard was known but not addressed, this is important evidence of negligence. Your solicitor will obtain these records through the litigation process if they are not voluntarily disclosed.",
        },
        {
          heading: "Wet Floor Signs and Warning Cones",
          content:
            "Retailers frequently argue that warning signs discharge their duty. The law in Scotland is clear that a warning sign does not automatically excuse the occupier — the question is whether the sign adequately warned of the hazard and whether a reasonable occupier should have done more. If the hazard had persisted for an excessive period, or if the sign was inadequately placed or visible, the defence may fail.",
        },
        {
          heading: "Compensation for Shop Accidents",
          content: "A successful shop accident claim in Scotland can cover:",
          list: [
            "Solatium — pain, suffering and loss of amenity",
            "Lost earnings if you were unable to work",
            "Medical treatment, physiotherapy and rehabilitation costs",
            "Care and assistance provided by family members",
            "Other out-of-pocket financial losses",
          ],
        },
      ]}
      guideSlugs={[
        "slip-trip-fall-claims-scotland",
        "supermarket-accident-claims-scotland",
        "evidence-for-personal-injury-claim-scotland",
      ]}
      locationClaimType="shop and retail accident claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Occupiers' Liability (Scotland) Act 1960 — the governing statute", url: "https://www.legislation.gov.uk/ukpga/1960/30/contents" },
        { label: "Prescription and Limitation (Scotland) Act 1973 — time limits", url: "https://www.legislation.gov.uk/ukpga/1973/52/contents" },
        { label: "HSE — Slips and trips in the retail sector", url: "https://www.hse.gov.uk/slips/retail.htm" },
      ]}
      related={[
        { label: "Public Place Accident Claims Scotland", href: "/public-place-accident-claims-scotland" },
        { label: "Supermarket Accident Claims", href: "/supermarket-accident-claims-scotland" },
        { label: "Hotel Accident Claims Scotland", href: "/hotel-accident-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
