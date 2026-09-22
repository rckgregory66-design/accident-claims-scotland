import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Dog Bite Claims Scotland — Keeper Liability Explained",
  description:
    "Information on dog bite and animal injury claims in Scotland: keeper liability under the Animals (Scotland) Act 1987, evidence, time limits and criminal injury routes.",
  alternates: { canonical: "/dog-bite-claims-scotland" },
  openGraph: {
    title: "Dog Bite Claims Scotland — Keeper Liability Explained",
    description: "How dog bite and animal injury claims work in Scotland under the Animals (Scotland) Act 1987.",
    url: "/dog-bite-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim compensation if a dog bites me in Scotland?",
    answer:
      "Possibly. Under section 1 of the Animals (Scotland) Act 1987, the keeper of an animal of a species likely to injure severely or kill, unless controlled or restrained, can be liable for injury caused by those characteristics. Whether the Act applies to a particular dog, and who counts as the keeper, depends on the facts.",
  },
  {
    question: "Do I have to prove the owner was careless?",
    answer:
      "Liability under section 1 of the 1987 Act does not depend on proving carelessness by the keeper. It depends on the statutory conditions being met. A claim can alternatively be based on negligence, for example where a keeper failed to take reasonable care to control a dog. A solicitor can advise which basis fits your facts.",
  },
  {
    question: "Who is the keeper of the dog?",
    answer:
      "The keeper is not always the registered owner. The Act uses the concept of keeper, which is a factual and legal question. Note the name and address of the person in charge of the dog at the time, and any witnesses, as soon as it is safe to do so.",
  },
  {
    question: "Can my own behaviour reduce my compensation?",
    answer:
      "Yes. Under the Law Reform (Contributory Negligence) Act 1945, which the 1987 Act preserves, compensation can be reduced if the injured person was partly at fault. It does not necessarily defeat the claim.",
  },
  {
    question: "What if the owner cannot be traced or is uninsured?",
    answer:
      "Many household policies cover pet liability, but not all do. If the keeper cannot be identified or cannot pay, other routes may exist, such as a Criminal Injuries Compensation Authority application if the injury resulted from a violent crime, which has its own strict rules and a short time limit. Seek advice promptly.",
  },
  {
    question: "What is the time limit for a dog bite claim in Scotland?",
    answer:
      "The general three-year limitation period for personal injury under section 17 of the Prescription and Limitation (Scotland) Act 1973 usually applies, with different rules for children. Raising court proceedings is what stops the clock, so do not delay.",
  },
];

export default function DogBitePage() {
  return (
    <ClaimPageTemplate
      metaUrl="/dog-bite-claims-scotland"
      dateModified="2026-09-20"
      breadcrumbs={[
        { label: "Public Place Accident Claims Scotland", href: "/public-place-accident-claims-scotland" },
        { label: "Dog Bite Claims Scotland" },
      ]}
      h1="Dog Bite Claims Scotland"
      intro="If you were bitten or knocked down by a dog in Scotland, you may be able to claim compensation from the person who kept it. This page explains the legal test, the evidence that matters and the time limits. It is general information, not legal advice."
      tldr={[
        "Section 1 of the Animals (Scotland) Act 1987 can make the keeper of a dangerous-type animal liable for injury.",
        "A claim can also be based on negligence in controlling the dog.",
        "Note the keeper's details, photograph injuries and get medical treatment straight away.",
        "Your own fault can reduce, but does not automatically remove, compensation.",
        "The general limitation period is three years; children are treated differently.",
      ]}
      answerBox="In Scotland, the keeper of an animal can be liable for injury it causes under section 1 of the Animals (Scotland) Act 1987 if the animal belongs to a species likely, unless controlled or restrained, to injure severely or kill. Claims can also be brought in negligence. Evidence of the incident, the keeper's identity and your injuries matters, and the general time limit is three years."
      sections={[
        {
          heading: "The legal test in Scotland",
          content:
            "The Animals (Scotland) Act 1987 replaced older rules about wild and tame animals. Section 1 provides that a keeper is liable for injury or damage caused by an animal if it belongs to a species whose members are likely, unless controlled or restrained, to injure severely or kill persons or animals, or damage property to a material extent, and the injury results from those characteristics. The Act excludes some situations, including injury caused merely by an animal's presence on a road. Whether a particular dog falls within the section can itself be argued, so the facts and expert or veterinary evidence may matter.",
        },
        {
          heading: "Negligence as an alternative route",
          content:
            "Separately from the 1987 Act, a claim can be made in negligence where a person failed to take reasonable care, for example by letting a dog off the lead near a road, failing to repair a fence or ignoring known aggression. Occupiers of premises may also owe duties to visitors under the Occupiers' Liability (Scotland) Act 1960, which can be relevant to attacks in workplaces, shops or gardens.",
        },
        {
          heading: "Evidence to gather",
          content: "The following can make a real difference to a dog bite claim:",
          list: [
            "The keeper's name, address and contact details, and the dog's description",
            "Photographs of injuries as they develop, torn clothing and the scene",
            "Witness names and contact details",
            "Medical records, including treatment for wounds, infection and any psychological effects",
            "Police or local authority incident references, if the incident was reported",
            "Records of time off work and out-of-pocket costs",
          ],
        },
        {
          heading: "Criminal injury and dog control",
          content:
            "Where a dog is used as a weapon or the injury resulted from a violent crime, the Criminal Injuries Compensation Authority scheme may be relevant, subject to its own eligibility rules and a two-year application period in most cases. Reporting the incident to Police Scotland also creates an official record that can support a civil claim.",
        },
        {
          heading: "Children and psychological injury",
          content:
            "Children are the most frequent victims of serious dog bites, often to the face. Facial scarring and fear of animals can be significant heads of loss. For children the limitation position differs from adults, with the three-year period generally not running until age 16. See the time limits page for the general rules.",
        },
        {
          heading: "What compensation can cover",
          content: "Compensation in a successful claim can include:",
          list: [
            "Solatium for pain, suffering and loss of amenity, including scarring",
            "Past and future loss of earnings",
            "Medical, surgical and psychological treatment costs",
            "Care and assistance provided by family members",
            "Reasonable expenses caused by the injury",
          ],
        },
      ]}
      guideSlugs={[
        "evidence-for-personal-injury-claim-scotland",
        "can-i-claim-if-partly-at-fault-scotland",
        "what-is-my-accident-claim-worth-scotland",
      ]}
      locationClaimType="dog bite claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Animals (Scotland) Act 1987, section 1", url: "https://www.legislation.gov.uk/ukpga/1987/9/section/1" },
        { label: "Occupiers' Liability (Scotland) Act 1960", url: "https://www.legislation.gov.uk/ukpga/1960/30/contents" },
        { label: "Prescription and Limitation (Scotland) Act 1973 — time limits", url: "https://www.legislation.gov.uk/ukpga/1973/52/contents" },
      ]}
      related={[
        { label: "Public Place Accident Claims Scotland", href: "/public-place-accident-claims-scotland" },
        { label: "Criminal Injury Compensation Scotland", href: "/criminal-injury-compensation-scotland" },
        { label: "School Accident Claims Scotland", href: "/school-accident-claims-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
        { label: "Compensation Guide", href: "/personal-injury-compensation-scotland" },
      ]}
    />
  );
}
