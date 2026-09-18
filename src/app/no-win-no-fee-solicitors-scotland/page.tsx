import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "No Win No Fee Claims Scotland — How Funding Works",
  description:
    "How no win, no fee funding works in Scotland: success fees, disbursements, ATE insurance and what you pay if you win or lose. Regulated under Scots law — free enquiry, no obligation.",
  alternates: { canonical: "/no-win-no-fee-solicitors-scotland" },
  openGraph: {
    title: "No Win No Fee Claims Scotland — How Funding Works",
    description: "Understand no win no fee personal injury claims in Scotland. Free enquiry — no obligation.",
    url: "/no-win-no-fee-solicitors-scotland",
  },
};

const faqs = [
  {
    question: "What does no win no fee actually mean?",
    answer:
      "A no win, no fee arrangement (sometimes called a conditional fee agreement or damages-based agreement) means that if your claim is unsuccessful, you will not be required to pay your solicitor's legal fees. You take on no financial risk simply by instructing a solicitor on this basis. If your claim succeeds, a payment — often a percentage of your compensation — may be deducted to cover legal costs. All terms will be clearly explained before you agree to proceed.",
  },
  {
    question: "Will I have to pay anything if my claim fails?",
    answer:
      "Under a properly structured no win, no fee agreement, you should not be required to pay your solicitor's fees if your claim is unsuccessful. However, you may need to consider other costs such as the other side's legal costs in some circumstances, medical report fees or court costs. Your solicitor will explain these risks clearly and advise on how they can be managed — for example, through after-the-event (ATE) insurance.",
  },
  {
    question: "What is after-the-event (ATE) insurance?",
    answer:
      "After-the-event insurance is a type of legal expenses insurance taken out after an accident to cover potential adverse costs if your claim fails — for example, the other side's legal costs. In many no win, no fee cases, your solicitor will advise on whether ATE insurance is appropriate for your claim. The premium for ATE insurance may only be payable if your claim succeeds.",
  },
  {
    question: "What percentage will be deducted from my compensation?",
    answer:
      "The amount that may be deducted from your compensation — sometimes called a success fee — varies depending on the funding arrangement and the complexity of your claim. Any deduction will be clearly set out in your written agreement before you instruct. We do not provide generic figures here because funding terms vary. Your solicitor will explain exactly what, if anything, will be deducted before you decide to proceed.",
  },
  {
    question: "Are there other ways to fund a personal injury claim in Scotland?",
    answer:
      "Yes. Other funding options include: legal expenses insurance already included in your home contents, car or travel insurance policy; trade union legal assistance if you are a trade union member; and, in some cases, Scottish Legal Aid Board funding for lower-income individuals. Your solicitor will help you identify the most appropriate funding option for your circumstances.",
  },
];

export default function NoWinNoFeePage() {
  return (
    <ClaimPageTemplate
      metaUrl="/no-win-no-fee-solicitors-scotland"
      dateModified="2026-08-11"
      breadcrumbs={[{ label: "No Win No Fee Solicitors Scotland" }]}
      h1="No Win No Fee Solicitors Scotland"
      intro="Many personal injury and accident claims in Scotland can be funded on a no win, no fee basis. This page explains clearly and transparently what no win, no fee means, how it works in Scotland, what costs may apply and what your alternatives are."
      tldr={[
        "No win, no fee means you pay no solicitor fees if your claim is unsuccessful.",
        "If you win, a percentage is typically deducted from your compensation to cover costs.",
        "After-the-event (ATE) insurance can protect against the other side's costs if you lose.",
        "Always check your existing insurance policies — you may already have legal expenses cover.",
        "All funding terms must be set out in writing and explained clearly before you sign.",
      ]}
      answerBox="In Scotland, no win, no fee means that if your personal injury or accident claim is unsuccessful, you will not have to pay your solicitor's fees. If your claim succeeds, a payment may be deducted from your compensation to cover legal costs — the exact amount will be set out in your written agreement before you proceed. All funding terms are explained clearly and there is no obligation."
      sections={[
        {
          heading: "What is No Win, No Fee?",
          content:
            "A no win, no fee arrangement is a funding agreement between you and your solicitor under which you agree that if your claim is unsuccessful, you will not pay the solicitor's fees. This arrangement allows people who have been injured through no fault of their own to access legal representation without worrying about upfront costs or bearing financial risk.",
        },
        {
          heading: "How Does No Win, No Fee Work in Scotland?",
          content:
            "In Scotland, no win, no fee claims are typically structured as conditional fee agreements (CFAs) or damages-based agreements (DBAs). Under these arrangements: (1) If your claim fails, your solicitor does not charge their fee. (2) If your claim succeeds, a payment is typically made from your compensation to cover legal costs. This payment will be clearly set out in your agreement. All terms are explained in writing before you agree to proceed.",
        },
        {
          heading: "What Costs Could I Face?",
          content: "Under a no win, no fee arrangement, potential costs to be aware of include:",
          list: [
            "Solicitor's success fee — a percentage of your compensation agreed in advance",
            "After-the-event (ATE) insurance premium — taken out to cover the risk of adverse costs if your claim fails; the premium may only be payable if you win",
            "Medical report fees — usually recoverable from the other side if your claim succeeds",
            "The other side's legal costs — in most civil cases, if you win, costs are paid by the other side; if you lose, ATE insurance can protect against this",
          ],
        },
        {
          heading: "What Will I Actually Receive?",
          content:
            "The amount you receive after a successful claim depends on the amount of compensation awarded or agreed and any deductions under your funding arrangement. Your solicitor will explain the likely deductions clearly before you proceed, so you understand what your net compensation is likely to be. We do not provide generic deduction figures here because funding terms vary between cases.",
        },
        {
          heading: "Alternative Funding Options in Scotland",
          content: "Before entering into a no win, no fee agreement, it is worth checking whether you have:",
          list: [
            "Legal expenses insurance (LEI) — often included in home contents, car or travel insurance policies; this can cover your legal costs without any deduction from your compensation",
            "Trade union legal assistance — if you are a member of a trade union, free legal help may be available for workplace accident and industrial disease claims",
            "Scottish Legal Aid Board (SLAB) funding — civil legal aid may be available for those who meet the financial eligibility criteria",
          ],
        },
        {
          heading: "Your Rights Before Signing a Funding Agreement",
          content:
            "Before signing any funding agreement, you have the right to understand fully: what you will be required to pay if your claim succeeds; what, if anything, you may be required to pay if your claim fails; how any insurance products work; and how to end the agreement. Your solicitor must explain all of this to you in writing and in plain English. Do not feel pressured to sign anything you do not fully understand.",
        },
        {
          heading: "Questions to Ask Before You Agree",
          content: "Ask the provider to confirm every material term in writing, including:",
          list: [
            "Whether the agreement is a speculative fee agreement, damages-based agreement or another arrangement",
            "Which fees, outlays, insurance premiums or other deductions may be taken after success",
            "What you could have to pay if the claim ends, is withdrawn or an offer is rejected",
            "Whether legal-expenses insurance, a trade union scheme or legal aid should be considered first",
            "How complaints, cancellation and changing solicitor are handled",
          ],
        },
        {
          heading: "Scottish Rules and Independent Checks",
          content: (
            <>
              <p>Funding language is sometimes used loosely. Read the signed terms rather than relying on an advert or headline. The following independent sources explain the regulatory and complaints context:</p>
              <ul>
                <li><a href="https://www.legislation.gov.uk/asp/2018/10/contents" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018</a></li>
                <li><a href="https://www.scottishlegalcomplaints.org.uk/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Scottish Legal Complaints Commission</a></li>
                <li><a href="https://www.slab.org.uk/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Scottish Legal Aid Board</a></li>
              </ul>
            </>
          ),
        },
        {
          heading: "Is No Win, No Fee Available for All Claims?",
          content:
            "No win, no fee funding is not available in all cases. Eligibility depends on the merits and prospects of your claim. Your solicitor will assess your claim and advise honestly on whether no win, no fee funding is appropriate and available in your circumstances. If it is not, they will discuss alternative funding options.",
        },
      ]}
      guideSlugs={[
        "no-win-no-fee-scotland-explained",
        "what-is-my-accident-claim-worth-scotland",
      ]}
      locationClaimType="no win no fee claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018 — Scottish funding rules", url: "https://www.legislation.gov.uk/asp/2018/10/contents" },
        { label: "Law Society of Scotland — finding a solicitor", url: "https://www.lawscot.org.uk/find-a-solicitor/" },
        { label: "Scottish Legal Aid Board — legal aid eligibility", url: "https://www.slab.org.uk/" },
      ]}
      related={[
        { label: "Personal Injury Claims Scotland", href: "/personal-injury-claims-scotland" },
        { label: "How to Claim Compensation", href: "/how-to-claim-compensation-scotland" },
        { label: "Compensation Guide", href: "/personal-injury-compensation-scotland" },
        { label: "Compensation Planner", href: "/compensation-calculator-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
