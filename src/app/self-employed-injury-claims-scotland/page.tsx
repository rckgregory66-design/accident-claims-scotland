import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Self-Employed Injury Claims Scotland — Contractors & Freelancers",
  description:
    "Injured as a self-employed worker in Scotland? Information on claiming against site owners, contractors and occupiers. Rights for sole traders, contractors and gig workers. Free enquiry.",
  alternates: { canonical: "/self-employed-injury-claims-scotland" },
  openGraph: {
    title: "Self-Employed Injury Claims Scotland — Contractors & Freelancers",
    description: "Self-employed injury claim in Scotland. Your rights as a contractor or sole trader. Free enquiry.",
    url: "/self-employed-injury-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim compensation if I am self-employed and injured at work?",
    answer:
      "Yes, in many cases. Being self-employed does not prevent you from claiming compensation — it affects who you claim against. If you were working under the control of another party (a principal contractor, site owner or client), that party may owe you a duty of care. If you were injured on someone else's premises, the occupier may owe you a duty under the Occupiers' Liability (Scotland) Act 1960. Each case depends on its own facts.",
  },
  {
    question: "Who am I claiming against as a self-employed worker?",
    answer:
      "As a self-employed person, potential defenders include: the main contractor or principal contractor responsible for site safety; the occupier of premises where you were working; the party who supplied defective equipment; a co-worker or other person whose negligence caused the accident; or the party who controlled the work you were doing. Your solicitor will identify all potentially liable parties.",
  },
  {
    question: "Do I have the same rights as an employee?",
    answer:
      "Not in every respect. Employees benefit from implied duties under employment law and specific statutory protections such as the Employers' Liability (Compulsory Insurance) Act 1969. Self-employed workers generally cannot rely on employer's liability law. However, the common law of negligence and occupiers' liability in Scotland applies regardless of employment status, and some statutory regulations (such as those governing construction sites) impose duties on principal contractors that protect all workers on site, including self-employed sub-contractors.",
  },
  {
    question: "What if I am a gig economy worker or have an ambiguous employment status?",
    answer:
      "Courts have found that some workers described as self-employed are in reality workers or employees for legal purposes. If you had little control over your hours, were required to work personally, were integrated into the organisation's operations, or were economically dependent on one client, your employment status may be disputed. A solicitor can advise on whether your status gives rise to employer's liability duties.",
  },
  {
    question: "What is the time limit for a self-employed injury claim in Scotland?",
    answer:
      "The general time limit is three years from the date of the accident or date of knowledge. This applies regardless of employment status. Seek advice promptly — evidence, site records and witnesses may not be available indefinitely.",
  },
  {
    question: "Can I claim for loss of income as a self-employed person?",
    answer:
      "Yes. Loss of earnings for self-employed claimants is assessed by reference to pre-accident profits (typically by reference to tax returns and accounts), and the court will assess past and future lost income on that basis. Keeping good financial records is important in establishing loss of earnings as a self-employed person.",
  },
];

export default function SelfEmployedInjuryPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/self-employed-injury-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Accident at Work Claims Scotland", href: "/accident-at-work-claims-scotland" },
        { label: "Self-Employed Injury Claims Scotland" },
      ]}
      h1="Self-Employed Injury Claims Scotland"
      intro="Being self-employed does not mean you have no rights if you are injured at work. In Scotland, sole traders, contractors, freelancers and gig workers may be able to claim against principal contractors, site owners, occupiers or equipment suppliers whose negligence or breach of statutory duty caused the accident."
      tldr={[
        "Self-employed workers can claim — the defendant is typically the site owner, principal contractor or occupier.",
        "Some construction site regulations protect self-employed sub-contractors as well as employees.",
        "Gig workers and contractors with disputed employment status may have employee rights.",
        "Loss of earnings is assessed by reference to pre-accident profits and financial records.",
        "Time limit: three years from the accident or date of knowledge.",
      ]}
      answerBox="In Scotland, self-employed workers who are injured through the negligence or breach of duty of another party — such as a principal contractor, site owner or occupier — can bring a personal injury claim. Employment status affects who you claim against, not whether you can claim. A free enquiry will assess your situation."
      sections={[
        {
          heading: "Why Self-Employed Workers Can Still Claim",
          content:
            "The common law duty of care in Scotland is not limited to employment relationships. Any person or organisation that controls the conditions in which you work, or occupies premises where you work, may owe you a duty of care. If that duty is breached and you are injured as a result, you may have a valid claim — regardless of whether you are employed, self-employed or working under a contract for services.",
        },
        {
          heading: "Construction Sites and CDM Regulations",
          content:
            "The Construction (Design and Management) Regulations 2015 (CDM 2015) impose health and safety duties on principal designers, principal contractors and contractors that protect all workers on site — including self-employed sub-contractors. If you were injured on a construction or civil engineering project and the principal contractor failed to maintain safe site conditions or coordinate health and safety properly, you may have a claim regardless of your self-employed status.",
        },
        {
          heading: "Occupiers' Liability for Self-Employed Workers",
          content:
            "The Occupiers' Liability (Scotland) Act 1960 imposes a duty of care on occupiers of premises to take reasonable care to prevent injury to those using the premises — including self-employed contractors. If you were injured by a hazard on a client's or principal contractor's premises, the occupier may be liable. Visitors carrying out work on the premises are entitled to the protection of the Act.",
        },
        {
          heading: "Defective Equipment Claims",
          content:
            "If you were injured by defective equipment or machinery — whether supplied by a client, principal contractor or third party — you may have a claim under the Consumer Protection Act 1987 (product liability) or the common law of negligence. This applies even where you supplied your own tools, if another party supplied or maintained defective plant or equipment.",
        },
        {
          heading: "Proving Loss of Earnings as a Self-Employed Person",
          content:
            "Loss of earnings claims for self-employed people require evidence of pre-accident income, typically through:",
          list: [
            "Self-assessment tax returns for two to three years before the accident",
            "Business accounts prepared by an accountant",
            "Bank statements showing income patterns",
            "Contracts or purchase orders confirming expected income",
            "Evidence that work had to be declined or cancelled due to the injury",
          ],
        },
        {
          heading: "Gig Workers and Employment Status",
          content:
            "Courts have consistently found that some people described as self-employed — including delivery drivers, platform workers and personal care assistants — are in fact workers or employees in law, and so entitled to employer's liability protections. If you were closely supervised, required to work personally without substitution, and economically dependent on one organisation, your employment status may be more favourable than your contract suggests.",
        },
      ]}
      guideSlugs={[
        "accident-at-work-claim-scotland",
        "no-win-no-fee-scotland-explained",
        "what-is-my-accident-claim-worth-scotland",
      ]}
      locationClaimType="self-employed injury claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Construction (Design and Management) Regulations 2015 — principal contractor duties", url: "https://www.legislation.gov.uk/uksi/2015/51/contents" },
        { label: "Occupiers' Liability (Scotland) Act 1960", url: "https://www.legislation.gov.uk/ukpga/1960/30/contents" },
        { label: "Consumer Protection Act 1987 — defective product liability", url: "https://www.legislation.gov.uk/ukpga/1987/43/contents" },
      ]}
      related={[
        { label: "Accident at Work Claims Scotland", href: "/accident-at-work-claims-scotland" },
        { label: "Construction Accident Claims", href: "/construction-accident-claims-scotland" },
        { label: "Offshore Injury Claims", href: "/offshore-injury-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
