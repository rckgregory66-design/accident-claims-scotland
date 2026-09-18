import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Stress at Work Claims Scotland — Psychiatric Injury & Work-Related Stress",
  description:
    "Work-related stress, anxiety and psychiatric injury claims in Scotland. Employer duties, foreseeability, time limits and compensation for psychological injury at work. Free enquiry.",
  alternates: { canonical: "/stress-at-work-claims-scotland" },
  openGraph: {
    title: "Stress at Work Claims Scotland — Psychiatric Injury & Work-Related Stress",
    description: "Psychiatric injury at work in Scotland? Information on stress claims. Free enquiry.",
    url: "/stress-at-work-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim compensation for work-related stress in Scotland?",
    answer:
      "Yes, in certain circumstances. To succeed in a claim for work-related psychiatric injury in Scotland, you generally need to show: that you suffered a recognised psychiatric illness (not merely stress or unhappiness); that your employer knew or ought to have known that you were at risk of psychiatric injury; that they breached their duty of care; and that the breach caused your illness. These claims require careful legal and medical assessment.",
  },
  {
    question: "What counts as a psychiatric injury for a work stress claim?",
    answer:
      "A work stress claim requires a recognised psychiatric or psychological diagnosis — such as clinical depression, generalised anxiety disorder, post-traumatic stress disorder (PTSD), adjustment disorder, or a stress-related breakdown — not merely workplace unhappiness, frustration or pressure. Your GP or psychiatrist must diagnose a clinical condition.",
  },
  {
    question: "What must I prove to succeed in a work stress claim?",
    answer:
      "The courts have set out the following general requirements: (1) you must have suffered a recognised psychiatric illness; (2) the illness must have been caused by your work, not other factors; (3) your employer must have known — or it must have been foreseeable — that your work was likely to cause psychiatric injury; and (4) your employer must have failed to take reasonable steps to prevent the harm. Foreseeability — whether the risk was apparent to a reasonable employer — is often the most contested issue.",
  },
  {
    question: "What if my employer ignored my complaints about stress?",
    answer:
      "If you raised concerns about workload, bullying or other stress factors and your employer took no action, this significantly strengthens the foreseeability argument — that the employer knew or should have known of the psychiatric risk. Documented complaints, emails and letters are important evidence in stress at work claims.",
  },
  {
    question: "Can I claim for bullying or harassment at work in Scotland?",
    answer:
      "Yes. If bullying or harassment in the workplace caused a recognised psychiatric illness, you may have a claim against your employer for failing to prevent or address the behaviour. This may also engage the Protection from Harassment Act 1997 if the conduct was a course of conduct causing you alarm or distress.",
  },
  {
    question: "What is the time limit for a work stress claim in Scotland?",
    answer:
      "The general time limit is three years from the date of knowledge — typically when you knew (or ought to have known) that your psychiatric condition was caused by your work. For many stress-related conditions, this runs from diagnosis. Seek advice promptly as these cases are complex.",
  },
];

export default function StressAtWorkPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/stress-at-work-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Accident at Work Claims Scotland", href: "/accident-at-work-claims-scotland" },
        { label: "Stress at Work Claims Scotland" },
      ]}
      h1="Stress at Work Claims Scotland"
      intro="Work-related psychiatric injury — including clinical depression, PTSD and anxiety disorders caused by excessive pressure, bullying or a failure to manage risks — can give rise to a compensation claim in Scotland. These claims require careful legal and medical assessment but are well established under Scots law."
      tldr={[
        "A diagnosed psychiatric illness is required — ordinary workplace stress is not enough.",
        "Foreseeability is key: the employer must have known (or should have known) of the psychiatric risk.",
        "Documented complaints and HR records are critical evidence.",
        "Bullying and harassment causing psychiatric harm can also found a claim.",
        "Time limit: three years from the date of knowledge — usually from diagnosis.",
      ]}
      answerBox="In Scotland, you may claim compensation for work-related psychiatric injury where your employer knew or should have known of the risk of harm and failed to act. A diagnosed condition — such as depression, PTSD or an anxiety disorder — is required. The time limit is generally three years from diagnosis or date of knowledge. A free enquiry will assess your circumstances."
      sections={[
        {
          heading: "What Is a Work Stress Claim?",
          content:
            "A work stress claim (or psychiatric injury at work claim) is a personal injury claim brought against an employer where the claimant has suffered a recognised psychiatric illness caused by their working conditions. Recognised conditions include clinical depression, generalised anxiety disorder, PTSD, adjustment disorder and other stress-related diagnoses. The claim is grounded in the employer's common law duty of care to protect employees from foreseeable harm — including psychiatric harm.",
        },
        {
          heading: "The Foreseeability Test",
          content:
            "The most important — and most contested — element of a work stress claim is foreseeability. The law does not expect employers to prevent all stress, but does require them to take action when the risk of psychiatric injury to a particular employee was or should have been apparent. Indicators of foreseeability include:",
          list: [
            "The claimant made complaints to management or HR about workload or stress",
            "The claimant was signed off sick for stress or anxiety previously",
            "A GP wrote to the employer or issued fitness certificates citing stress",
            "The employer was aware of persistent bullying or harassment",
            "The claimant's role was objectively unreasonably demanding",
          ],
        },
        {
          heading: "Bullying and Harassment Claims",
          content:
            "Workplace bullying and harassment that causes a recognised psychiatric illness can give rise to a claim under: the employer's common law duty of care; the Protection from Harassment Act 1997 (where the conduct is a course of conduct causing alarm or distress); and, where the bullying is related to a protected characteristic, the Equality Act 2010. Employers have a duty to investigate complaints and take reasonable steps to stop bullying. Failure to do so can establish both liability and foreseeability.",
        },
        {
          heading: "Employer Duties — Risk Assessment and Management",
          content:
            "Under the Management of Health and Safety at Work Regulations 1999, employers must assess the risk of work-related stress and take steps to address it. The HSE publishes Management Standards for work-related stress covering demands, control, support, relationships, role and change. Breach of these standards does not in itself create liability, but is relevant to whether the employer took reasonable steps.",
        },
        {
          heading: "Evidence in Work Stress Claims",
          content: "Key evidence includes:",
          list: [
            "Medical records — GP notes, psychiatric assessments, sick certificates",
            "Written complaints, emails or letters to management or HR",
            "HR records — formal grievances, disciplinary proceedings, outcome letters",
            "Occupational health referrals and reports",
            "Witness evidence from colleagues confirming working conditions",
            "Workload records — schedules, rotas, overtime records",
          ],
        },
        {
          heading: "What Compensation Can Be Claimed?",
          content: "A successful work stress claim in Scotland can recover:",
          list: [
            "Solatium — compensation for pain, suffering and loss of amenity",
            "Loss of earnings — including future loss if the condition affects employability",
            "Cost of psychiatric treatment and therapy",
            "Care and assistance provided by family members",
            "Other financial losses flowing from the psychiatric injury",
          ],
        },
      ]}
      guideSlugs={[
        "accident-at-work-claim-scotland",
        "what-is-my-accident-claim-worth-scotland",
        "do-i-need-to-go-to-court-scotland",
      ]}
      locationClaimType="work-related stress and psychiatric injury claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "HSE — Work-related stress: management standards", url: "https://www.hse.gov.uk/stress/standards/" },
        { label: "Protection from Harassment Act 1997", url: "https://www.legislation.gov.uk/ukpga/1997/40/contents" },
        { label: "Management of Health and Safety at Work Regulations 1999", url: "https://www.legislation.gov.uk/uksi/1999/3242/contents" },
      ]}
      related={[
        { label: "Accident at Work Claims Scotland", href: "/accident-at-work-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
        { label: "Serious Injury Claims Scotland", href: "/serious-injury-claims-scotland" },
      ]}
    />
  );
}
