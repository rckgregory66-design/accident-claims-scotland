import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Personal Injury Claim Time Limits Scotland | Three Year Limitation Period",
  description:
    "Understand the time limits for personal injury and medical negligence claims in Scotland. The three year rule, date of knowledge, exceptions for children and fatal claims.",
  alternates: { canonical: "/personal-injury-claim-time-limits-scotland" },
  openGraph: {
    title: "Personal Injury Claim Time Limits Scotland | Three Year Limitation Period",
    description: "Time limits for personal injury claims in Scotland. Three year rule, date of knowledge, children and fatal claims.",
    url: "/personal-injury-claim-time-limits-scotland",
  },
};

const faqs = [
  {
    question: "How long do I have to make a personal injury claim in Scotland?",
    answer:
      "In Scotland, the general time limit for personal injury claims is three years from the date of the accident or the date of knowledge — whichever is later. The date of knowledge is the date you became aware (or ought reasonably to have become aware) that you had a significant injury attributable to another party's negligence.",
  },
  {
    question: "What is the date of knowledge?",
    answer:
      "The date of knowledge is the date when you first knew, or ought reasonably to have known: (1) that your injury was significant; (2) that it was attributable to an act or omission of a specific person or organisation; and (3) the identity of that person or organisation. In industrial disease cases, this is often the date of diagnosis rather than the date of exposure.",
  },
  {
    question: "What is the time limit for children's claims in Scotland?",
    answer:
      "In Scotland, children under the age of 16 are treated differently. The three-year period does not start running until the child reaches the age of 16, giving them until their 19th birthday to bring a claim. However, seeking advice early is recommended to preserve evidence.",
  },
  {
    question: "What happens if I miss the time limit?",
    answer:
      "In Scotland, if you do not bring your claim within the limitation period, the right to sue may be extinguished — this is called negative prescription. Once the prescriptive period has expired, it is generally not possible to pursue a claim, even if it would otherwise have succeeded. This is why it is vital to seek advice promptly.",
  },
  {
    question: "Is there a different time limit for medical negligence claims in Scotland?",
    answer:
      "The same three-year rule applies to medical negligence claims in Scotland, running from the date of the negligent treatment or the date of knowledge. However, identifying the date of knowledge in clinical negligence cases can be complex — you may not have known for some time that your harm was caused by negligence rather than an unavoidable complication. Seek advice early.",
  },
  {
    question: "What is the time limit for fatal accident claims in Scotland?",
    answer:
      "In Scotland, the family of someone who has died due to negligence can bring a claim under the Damages (Scotland) Act 2011. The time limit is generally three years from the date of death or, if later, three years from the date the relatives became aware that the death was caused by negligence.",
  },
];

export default function TimeLimitsPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/personal-injury-claim-time-limits-scotland"
      dateModified="2026-06-16"
      breadcrumbs={[{ label: "Personal Injury Claim Time Limits Scotland" }]}
      h1="Personal Injury Claim Time Limits Scotland"
      intro="Time limits are one of the most important aspects of any personal injury claim in Scotland. If you do not act within the relevant time limit, you may lose your right to claim compensation altogether. This page explains the rules clearly."
      tldr={[
        "The general time limit is three years from the accident or date of knowledge — whichever is later.",
        "In industrial disease cases the clock starts from diagnosis, not from the date of exposure.",
        "Children injured before age 16 have until their 19th birthday to claim.",
        "The CICA time limit for criminal injury claims is only two years — shorter than standard PI.",
        "Missing the time limit in Scotland can permanently extinguish your right to claim.",
      ]}
      answerBox="In Scotland, the general time limit for personal injury claims is three years from the date of the accident or the date of knowledge — whichever is later. The law governing time limits in Scotland is different from England and Wales. Missing the time limit can mean losing your right to claim. Seek legal advice as soon as possible."
      sections={[
        {
          heading: "The Three-Year Rule in Scotland",
          content:
            "In Scotland, personal injury claims are subject to a five-year prescriptive period, but the courts apply a 'long stop' under the Prescription and Limitation (Scotland) Act 1973. In practice, the relevant limitation period for personal injury claims in Scotland is three years from the date of the accident or from the date of knowledge. This three-year period is known as the triennium. If you do not raise court proceedings within this period, your claim will generally be extinguished by negative prescription.",
        },
        {
          heading: "What is the Date of Knowledge?",
          content: "The date of knowledge is the date when you first knew — or ought reasonably to have known — all of the following:",
          list: [
            "That the injury or condition was significant",
            "That it was attributable to the act or omission of a particular person or organisation",
            "The identity of that person or organisation",
          ],
        },
        {
          heading: "Industrial Disease: When Does the Clock Start?",
          content:
            "In industrial disease claims, the date of knowledge is particularly important. Workers exposed to asbestos, excessive noise or vibrating tools many years ago may only develop symptoms decades later. In these cases, the three-year period runs from the date of diagnosis or the date the worker became aware that their condition was caused by their work — not from the date of exposure. This allows claims to be made many years after the original workplace exposure.",
        },
        {
          heading: "Medical Negligence: Date of Knowledge",
          content:
            "In clinical negligence cases, patients may not immediately know that their injury was caused by negligence rather than an unavoidable complication of treatment. The date of knowledge in medical negligence cases is the date when the patient knew, or ought reasonably to have known, that their harm was caused by a breach of duty by a healthcare professional. This can extend the period in which a claim can be made.",
        },
        {
          heading: "Time Limits for Children in Scotland",
          content:
            "A child under the age of 16 in Scotland cannot generally bring legal proceedings in their own name. The three-year period does not begin to run until the child reaches 16. This means that a child who was injured before age 16 has until their 19th birthday to bring a claim. A parent or guardian can, however, bring a claim on behalf of the child during their childhood. It is advisable to seek legal advice and preserve evidence early, regardless of the time remaining.",
        },
        {
          heading: "Adults Lacking Legal Capacity",
          content:
            "Different rules apply to adults who lack legal capacity due to mental incapacity. The prescriptive period is suspended while the individual lacks capacity. Seek advice if a family member or person you care for has suffered a personal injury and their legal capacity is in question.",
        },
        {
          heading: "Fatal Accident Claims: Time Limits in Scotland",
          content:
            "Under the Damages (Scotland) Act 2011, the immediate family of someone who has died as a result of negligence may bring a fatal accident claim. The time limit is generally three years from the date of death, or — if later — three years from the date the relatives discovered that the death was caused by another party's negligence.",
        },
        {
          heading: "Criminal Injury Compensation: CICA Time Limits",
          content:
            "Claims through the Criminal Injuries Compensation Authority (CICA) must generally be made within two years of the violent crime. This is a shorter period than the standard personal injury limitation. There are limited exceptions. Contact a solicitor urgently if you have been a victim of a crime and wish to make a CICA claim.",
        },
        {
          heading: "Why You Must Not Delay",
          content:
            "Missing the time limit in Scotland can permanently extinguish your right to claim compensation, regardless of how strong your case is. Beyond legal time limits, delay can also cause evidence to be lost, witnesses to become unavailable, CCTV footage to be overwritten and memories to fade. Even if you have several years remaining, it is always in your interests to seek advice as early as possible after an accident or diagnosis.",
        },
        {
          heading: "What Happens if You Miss the Time Limit?",
          content:
            "In Scotland, unlike in some other jurisdictions, the courts have very limited discretion to allow claims outside the three-year period. Once the prescriptive period has expired, the right to sue is generally extinguished by operation of law (negative prescription). For this reason, it is essential to act within the time limit. If you believe your claim may be time-barred, seek legal advice immediately — there may be grounds to argue for an alternative date of knowledge.",
        },
      ]}
      guideSlugs={[
        "personal-injury-time-limits-scotland",
        "industrial-disease-delayed-symptoms-scotland",
        "medical-negligence-what-to-prove-scotland",
        "fatal-accident-compensation-scotland",
      ]}
      locationClaimType="personal injury claims"
      faqs={faqs}
      related={[
        { label: "Personal Injury Claims Scotland", href: "/personal-injury-claims-scotland" },
        { label: "Medical Negligence Claims", href: "/medical-negligence-claims-scotland" },
        { label: "Industrial Disease Claims", href: "/industrial-disease-claims-scotland" },
        { label: "Fatal Accident Claims", href: "/serious-injury-claims-scotland#fatal" },
        { label: "Criminal Injury Claims", href: "/criminal-injury-compensation-scotland" },
        { label: "How to Claim", href: "/how-to-claim-compensation-scotland" },
      ]}
    />
  );
}
