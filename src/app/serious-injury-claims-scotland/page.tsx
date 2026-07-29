import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Serious Injury Claims Scotland | Catastrophic Injury Solicitors Scotland",
  description:
    "Specialist serious and catastrophic injury solicitors in Scotland. Brain injury, spinal injury, amputation and fatal accident claims. Sensitive, expert support throughout.",
  alternates: { canonical: "/serious-injury-claims-scotland" },
  openGraph: {
    title: "Serious Injury Claims Scotland | Catastrophic Injury Solicitors Scotland",
    description: "Specialist serious injury solicitors in Scotland. Brain injury, spinal injury, amputation, fatal accident claims.",
    url: "/serious-injury-claims-scotland",
  },
};

const faqs = [
  {
    question: "What counts as a serious or catastrophic injury?",
    answer:
      "Serious or catastrophic injuries are those that have a significant, life-changing impact on the injured person — including brain injury, spinal cord injury, amputation, severe burns, complex regional pain syndrome, and severe multiple injuries. These cases typically involve long-term disability, ongoing care needs and substantial financial losses.",
  },
  {
    question: "How is a serious injury claim different from other personal injury claims?",
    answer:
      "Serious injury claims are more complex, involve larger amounts of compensation, and require specialist experts across multiple disciplines — neurological, orthopaedic, care, employment, and financial — to assess the full lifetime impact of the injury. They demand solicitors experienced in high-value claims under Scots law.",
  },
  {
    question: "Can I get interim payments while my claim is being resolved?",
    answer:
      "In cases where liability is admitted or not seriously disputed, it may be possible to obtain interim payments to fund medical treatment, rehabilitation and care before the claim is finally settled. Your solicitor can advise on availability.",
  },
  {
    question: "What happens if a family member has died as a result of an accident?",
    answer:
      "A fatal accident claim can be brought under the Damages (Scotland) Act 2011 by the deceased's immediate family. This may include loss of society awards for close relatives, financial dependency claims, and a claim for the deceased's own losses before death.",
  },
  {
    question: "How long does a serious injury claim take?",
    answer:
      "Serious injury claims can take two to five years or more because the full extent of long-term disability, future care needs and lifetime losses must be established before settlement. Interim payments can be arranged to meet immediate financial needs during the process.",
  },
];

export default function SeriousInjuryPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/serious-injury-claims-scotland"
      dateModified="2026-06-16"
      breadcrumbs={[{ label: "Serious Injury Claims Scotland" }]}
      h1="Serious Injury Claims Scotland"
      intro="Serious and catastrophic injuries require specialist legal support. This page provides general information about complex personal injury claims involving brain injury, spinal injury, amputation or other life-changing conditions — and claims that may arise after a death caused by negligence."
      tldr={[
        "Serious injury claims involve multiple expert disciplines and substantial lifetime compensation.",
        "Interim payments can fund treatment and care while the claim is ongoing.",
        "Fatal accident claims for Scottish families are governed by the Damages (Scotland) Act 2011.",
        "These claims typically take two to five years due to the complexity of lifetime loss assessment.",
        "Early specialist legal advice is essential for the best rehabilitation and compensation outcome.",
      ]}
      answerBox="In Scotland, serious injury claims are brought under Scots law and typically involve complex medical, care and financial evidence across multiple expert disciplines. If you or a family member has suffered a catastrophic injury, early specialist legal advice is essential. Our enquiry is free and carries no obligation."
      sections={[
        {
          heading: "Types of Serious Injury Claims We Handle in Scotland",
          content: "We have experience handling:",
          linkedList: [
            { text: "Brain injury claims — mild, moderate and severe traumatic brain injury (TBI)", href: "/brain-injury-claims-scotland" },
            { text: "Spinal injury claims — spinal cord injuries and paralysis", href: "/spinal-injury-claims-scotland" },
            { text: "Amputation claims — above and below knee, and upper limb amputation", href: "/amputation-claims-scotland" },
            { text: "Complex regional pain syndrome (CRPS) claims", href: "/complex-regional-pain-syndrome-claims-scotland" },
            { text: "Serious burn injury claims", href: "/serious-burn-injury-claims-scotland" },
            { text: "Fatal accident claims under the Damages (Scotland) Act 2011", href: "/fatal-accident-claims-scotland" },
          ],
        },
        {
          heading: "Brain Injury Claims in Scotland",
          content:
            "Brain injuries range from mild concussion to severe traumatic brain injury (TBI) causing profound physical and cognitive disability. A brain injury claim requires neurological and neuropsychological expert evidence, evidence of impact on daily life and employment, and detailed assessment of long-term care needs. Cases arise from road traffic accidents, workplace accidents, assaults and medical negligence.",
        },
        {
          heading: "Spinal Injury Claims in Scotland",
          content:
            "Spinal cord injuries can result in partial or complete paralysis and lifelong disability. These are among the highest-value claims in Scots law, requiring orthopaedic, neurological and rehabilitation experts, a detailed care needs assessment, and consideration of specialist accommodation, adaptations, equipment and ongoing care.",
        },
        {
          heading: "Fatal Accident Claims in Scotland",
          content:
            "Under the Damages (Scotland) Act 2011, the immediate family of someone killed through another's negligence may claim. Relatives who may be entitled to claim include the deceased's spouse or civil partner, children, and parents. Claims can cover solatium for the deceased's own losses, loss of society awards for relatives, and financial dependency claims. We handle these cases with the sensitivity they demand.",
        },
        {
          heading: "Rehabilitation and Case Management",
          content:
            "In serious injury cases, early rehabilitation can make a significant difference to long-term outcomes. Interim payments can be arranged to fund treatment and rehabilitation while the claim proceeds. A specialist case manager may coordinate medical and support services. We work closely with rehabilitation experts to ensure clients receive the support needed from the earliest possible point.",
        },
        {
          heading: "What Compensation Can Be Claimed for Serious Injury?",
          content: "Serious injury compensation in Scotland can include:",
          list: [
            "Solatium — pain, suffering and loss of amenity",
            "Loss of earnings — past and future, including pension loss",
            "Cost of care and case management — now and in the future",
            "Medical treatment and specialist rehabilitation",
            "Adapted accommodation and home modifications",
            "Specialist equipment — wheelchairs, prosthetics, assistive technology",
            "Travel and transport costs",
            "Provisional damages where the condition may deteriorate",
          ],
        },
      ]}
      subpages={{
        title: "Specialist Serious Injury Claim Types",
        pages: [
          { label: "Brain Injury Claims", href: "/brain-injury-claims-scotland", desc: "TBI, cognitive and physical disability" },
          { label: "Spinal Injury Claims", href: "/spinal-injury-claims-scotland", desc: "Paralysis, spinal cord damage" },
          { label: "Amputation Claims", href: "/amputation-claims-scotland", desc: "Limb loss and prosthetic needs" },
          { label: "Fatal Accident Claims", href: "/fatal-accident-claims-scotland", desc: "Damages (Scotland) Act 2011 claims" },
          { label: "CRPS Claims", href: "/complex-regional-pain-syndrome-claims-scotland", desc: "Complex regional pain syndrome" },
          { label: "Burn Injury Claims", href: "/serious-burn-injury-claims-scotland", desc: "Severe burns and scarring" },
        ],
      }}
      guideCategory="Serious Injury"
      guideSlugs={[
        "serious-injury-rehabilitation-scotland",
        "fatal-accident-compensation-scotland",
        "what-is-my-accident-claim-worth-scotland",
      ]}
      locationClaimType="serious injury claims"
      faqs={faqs}
      related={[
        { label: "Road Traffic Accident Claims", href: "/road-traffic-accident-claims-scotland" },
        { label: "Medical Negligence Claims", href: "/medical-negligence-claims-scotland" },
        { label: "Compensation Guide", href: "/personal-injury-compensation-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
      ]}
    />
  );
}
