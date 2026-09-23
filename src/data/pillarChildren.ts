import type { AuthoritativeSource, FAQItem, RelatedLink, Section, SubpageLink } from "@/components/ClaimPageTemplate";
import { accidentAtWorkChildren } from "@/data/pillars/accidentAtWork";
import { industrialDiseaseChildren } from "@/data/pillars/industrialDisease";
import { medicalNegligenceChildren } from "@/data/pillars/medicalNegligence";

/**
 * Pillar/child content architecture.
 *
 * Each pillar is an existing hub page (for example
 * /industrial-disease-claims-scotland). Its children live one level below it:
 * /{pillar}/{child-slug}. All children render through the same template
 * (`PillarChildRoute`) so structure, schema and internal links stay consistent.
 */

export type PillarKey =
  | "industrial-disease-claims-scotland"
  | "accident-at-work-claims-scotland"
  | "medical-negligence-claims-scotland";

export interface PillarInfo {
  /** Hub page label used in breadcrumbs and "back to hub" links. */
  name: string;
  /** Text used by LocationLinks, for example "industrial disease claims". */
  locationClaimType: string;
  /** Cross-links to related pillars and evergreen pages shown on every child. */
  related: RelatedLink[];
}

export const PILLARS: Record<PillarKey, PillarInfo> = {
  "industrial-disease-claims-scotland": {
    name: "Industrial Disease Claims Scotland",
    locationClaimType: "industrial disease claims",
    related: [
      { label: "Accident at Work Claims", href: "/accident-at-work-claims-scotland" },
      { label: "Medical Negligence Claims", href: "/medical-negligence-claims-scotland" },
      { label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" },
      { label: "Time Limits Scotland", href: "/personal-injury-claim-time-limits-scotland" },
      { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
    ],
  },
  "accident-at-work-claims-scotland": {
    name: "Accident at Work Claims Scotland",
    locationClaimType: "accident at work claims",
    related: [
      { label: "Industrial Disease Claims", href: "/industrial-disease-claims-scotland" },
      { label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" },
      { label: "Personal Injury Claims Scotland", href: "/personal-injury-claims-scotland" },
      { label: "Time Limits Scotland", href: "/personal-injury-claim-time-limits-scotland" },
      { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
    ],
  },
  "medical-negligence-claims-scotland": {
    name: "Medical Negligence Claims Scotland",
    locationClaimType: "medical negligence claims",
    related: [
      { label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" },
      { label: "Personal Injury Claims Scotland", href: "/personal-injury-claims-scotland" },
      { label: "Industrial Disease Claims", href: "/industrial-disease-claims-scotland" },
      { label: "Time Limits Scotland", href: "/personal-injury-claim-time-limits-scotland" },
      { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
    ],
  },
};

export interface PillarChild {
  pillar: PillarKey;
  /** Final URL segment: /{pillar}/{slug}. */
  slug: string;
  h1: string;
  /** <title> text. Pattern: "{Topic} — {Qualifier}", kept under about 65 characters. */
  metaTitle: string;
  /** Meta description, roughly 140 to 160 characters. */
  description: string;
  /** Short label and one-line description used on the pillar hub grid. */
  hubLabel: string;
  hubDescription: string;
  intro: string;
  tldr: string[];
  answerBox: string;
  sections: Section[];
  /** 5 to 8 items; rendered visibly and emitted as FAQPage JSON-LD. */
  faqs: FAQItem[];
  sources: AuthoritativeSource[];
  guideSlugs?: string[];
  /** Cross-links to other pillars or sibling topics, in addition to the pillar defaults. */
  related?: RelatedLink[];
  datePublished: string;
  dateModified: string;
}

export const pillarChildren: PillarChild[] = [...industrialDiseaseChildren, ...accidentAtWorkChildren, ...medicalNegligenceChildren];

export function childPath(child: Pick<PillarChild, "pillar" | "slug">): string {
  return `/${child.pillar}/${child.slug}`;
}

export function childrenOf(pillar: PillarKey): PillarChild[] {
  return pillarChildren.filter((child) => child.pillar === pillar);
}

export function findChild(pillar: PillarKey, slug: string): PillarChild | undefined {
  return pillarChildren.find((child) => child.pillar === pillar && child.slug === slug);
}

/** Links from a pillar hub out to every child, for use in SubpageGrid. */
export function childSubpageLinks(pillar: PillarKey): SubpageLink[] {
  return childrenOf(pillar).map((child) => ({
    label: child.hubLabel,
    href: childPath(child),
    desc: child.hubDescription,
  }));
}
