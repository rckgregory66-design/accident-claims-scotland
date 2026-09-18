import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Needlestick Injury Claims Scotland — Healthcare Worker Claims",
  description:
    "Needlestick injury at work in Scotland? Information on employer duties, sharps regulations, blood-borne virus risk and compensation for healthcare and other workers. Free enquiry.",
  alternates: { canonical: "/needlestick-injury-claims-scotland" },
  openGraph: {
    title: "Needlestick Injury Claims Scotland — Healthcare Worker Claims",
    description: "Needlestick injury claim in Scotland. Healthcare worker compensation — free enquiry.",
    url: "/needlestick-injury-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim compensation for a needlestick injury at work in Scotland?",
    answer:
      "Yes. If you suffered a needlestick or sharps injury at work because your employer failed to comply with health and safety regulations — including the Health and Safety (Sharp Instruments in Healthcare) Regulations 2013 — you may have a valid claim. Needlestick injuries carry a risk of blood-borne virus transmission including hepatitis B, hepatitis C and HIV, and the psychological impact can be significant even where no infection results.",
  },
  {
    question: "What regulations protect healthcare workers from needlestick injuries?",
    answer:
      "The Health and Safety (Sharp Instruments in Healthcare) Regulations 2013 require healthcare employers to: use safer sharps where reasonably practicable; avoid the recapping of needles; establish safe use and disposal procedures; and provide training and information to workers. These sit alongside broader duties under the Control of Substances Hazardous to Health Regulations 2002 (COSHH) and the Health and Safety at Work etc. Act 1974.",
  },
  {
    question: "I was not infected — can I still claim?",
    answer:
      "Yes. Even if post-exposure prophylaxis (PEP) treatment prevented infection, or the source patient proved to be uninfected, you may still claim for: the anxiety and psychological distress during the monitoring period; the side effects of PEP medication; any lost earnings during treatment; and the impact of the incident on your health and wellbeing.",
  },
  {
    question: "What is the time limit for a needlestick injury claim in Scotland?",
    answer:
      "The general time limit is three years from the date of the injury or date of knowledge. Seek advice promptly — evidence and incident reports must be preserved.",
  },
  {
    question: "What compensation can I receive for a needlestick injury?",
    answer:
      "Compensation can include: solatium for pain, suffering and the anxiety of the monitoring period; the cost of any medical treatment including PEP; lost earnings if you were unable to work; and in the rare case where infection results, compensation for the full impact of any resulting illness.",
  },
  {
    question: "Do needlestick injury claims apply outside the healthcare sector?",
    answer:
      "Yes. While the 2013 Regulations specifically apply to healthcare, needlestick and sharps injuries in other settings — waste workers, prison officers, police, tattooing and body piercing — can also give rise to claims under general health and safety law if the employer failed to take adequate precautions.",
  },
];

export default function NeedlestickPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/needlestick-injury-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Accident at Work Claims Scotland", href: "/accident-at-work-claims-scotland" },
        { label: "Needlestick Injury Claims Scotland" },
      ]}
      h1="Needlestick Injury Claims Scotland"
      intro="Needlestick and sharps injuries in healthcare and other settings carry a risk of blood-borne virus exposure and significant psychological distress. If your employer failed to comply with their legal duties to prevent sharps injuries, you may be entitled to compensation — whether or not infection resulted."
      tldr={[
        "The Health and Safety (Sharp Instruments in Healthcare) Regulations 2013 impose specific duties.",
        "You can claim even if no infection resulted — psychological distress and PEP side effects are compensable.",
        "Claims apply in healthcare and in other sectors where sharps are encountered.",
        "Time limit: three years from the date of injury or date of knowledge.",
        "Free enquiry — no win no fee available for eligible claims.",
      ]}
      answerBox="In Scotland, healthcare workers and others injured by needlestick or sharps accidents can claim compensation where the employer breached their legal duties. Claims can cover the anxiety and distress of the post-exposure monitoring period, even where no infection occurs. The time limit is generally three years. A free enquiry will assess your claim."
      sections={[
        {
          heading: "What Is a Needlestick Injury Claim?",
          content:
            "A needlestick injury claim arises when a worker is accidentally punctured by a needle, lancet, scalpel or other sharp instrument in circumstances where the employer failed to take legally required precautions. In healthcare settings, such injuries carry a risk of transmission of blood-borne viruses — including hepatitis B, hepatitis C, and HIV — and the monitoring period following the injury can cause severe anxiety regardless of the final outcome.",
        },
        {
          heading: "Employer Duties — Sharps Regulations 2013",
          content:
            "The Health and Safety (Sharp Instruments in Healthcare) Regulations 2013 require healthcare employers to:",
          list: [
            "Use safer sharps (devices with built-in protection mechanisms) where it is reasonably practicable",
            "Prohibit the recapping of needles by hand",
            "Establish safe procedures for the use and disposal of sharps",
            "Provide workers with information, instruction and training on the risks and precautions",
            "Investigate and record all sharps incidents",
            "Take action following any incident to prevent recurrence",
          ],
        },
        {
          heading: "Claims Where No Infection Resulted",
          content:
            "A significant proportion of needlestick injury claims are brought by workers who were not infected — either because the source patient proved negative for blood-borne viruses, or because post-exposure prophylaxis (PEP) was effective. Such claims can still recover compensation for:",
          list: [
            "Psychiatric injury — anxiety, sleep disturbance, PTSD and depression during the monitoring period",
            "Side effects of PEP medication during the treatment course",
            "Lost earnings if you were absent from work",
            "Impact on relationships and quality of life during the monitoring period",
          ],
        },
        {
          heading: "Beyond Healthcare — Other Needlestick Claims",
          content:
            "Sharps and needlestick injuries occur outside healthcare too. Workers in the following roles may have claims under general health and safety law:",
          list: [
            "Refuse and waste collection workers — discarded needles in waste streams",
            "Prison officers and police — needlestick risk during searches",
            "Laundry workers — sharps in clothing and linen",
            "Tattooists and body piercing workers — inadequate sharps protocols",
          ],
        },
        {
          heading: "What to Do After a Needlestick Injury",
          content:
            "If you suffer a needlestick or sharps injury at work, take the following steps:",
          list: [
            "Encourage the wound to bleed — do not suck the wound",
            "Wash thoroughly with running water and soap",
            "Report the incident to your manager and ensure it is recorded",
            "Seek immediate medical advice — attend occupational health or A&E for risk assessment",
            "Post-exposure prophylaxis (PEP) must be started within 72 hours if indicated",
            "Preserve all documentation including incident reports and medical notes",
            "Contact a solicitor as soon as possible",
          ],
        },
      ]}
      guideSlugs={[
        "accident-at-work-claim-scotland",
        "evidence-for-personal-injury-claim-scotland",
      ]}
      locationClaimType="needlestick injury claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Health and Safety (Sharp Instruments in Healthcare) Regulations 2013", url: "https://www.legislation.gov.uk/uksi/2013/645/contents" },
        { label: "HSE — Sharps injuries: guidance for employers and employees in health and social care", url: "https://www.hse.gov.uk/healthservices/needlesticks/" },
        { label: "NHS — Needlestick injury guidance", url: "https://www.nhsinform.scot/care-support-and-rights/nhs-services/hospitals/needlestick-injuries" },
      ]}
      related={[
        { label: "Accident at Work Claims Scotland", href: "/accident-at-work-claims-scotland" },
        { label: "Medical Negligence Claims Scotland", href: "/medical-negligence-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
