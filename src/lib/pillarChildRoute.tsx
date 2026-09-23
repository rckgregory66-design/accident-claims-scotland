import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";
import { PILLARS, childPath, childrenOf, findChild, type PillarKey } from "@/data/pillarChildren";

type RouteParams = Promise<{ slug: string }>;

/** generateStaticParams for a pillar's [slug] route. */
export function pillarChildStaticParams(pillar: PillarKey) {
  return childrenOf(pillar).map((child) => ({ slug: child.slug }));
}

/** generateMetadata for a pillar's [slug] route. */
export async function pillarChildMetadata(pillar: PillarKey, params: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const child = findChild(pillar, slug);
  if (!child) return {};
  const url = childPath(child);
  return {
    title: child.metaTitle,
    description: child.description,
    alternates: { canonical: url },
    openGraph: { title: child.metaTitle, description: child.description, url },
  };
}

/** The single template every child page renders through. */
export async function PillarChildRoute({ pillar, params }: { pillar: PillarKey; params: RouteParams }) {
  const { slug } = await params;
  const child = findChild(pillar, slug);
  if (!child) notFound();

  const info = PILLARS[pillar];
  const hubHref = `/${pillar}`;
  const siblings = childrenOf(pillar).filter((item) => item.slug !== child.slug);

  return (
    <ClaimPageTemplate
      metaUrl={childPath(child)}
      datePublished={child.datePublished}
      dateModified={child.dateModified}
      breadcrumbs={[{ label: info.name, href: hubHref }, { label: child.h1 }]}
      h1={child.h1}
      intro={child.intro}
      tldr={child.tldr}
      answerBox={child.answerBox}
      sections={child.sections}
      faqs={child.faqs}
      guideSlugs={child.guideSlugs}
      locationClaimType={info.locationClaimType}
      subpages={{
        title: `More in ${info.name}`,
        pages: [
          { label: info.name, href: hubHref, desc: "Back to the main guide for this topic" },
          ...siblings.map((item) => ({ label: item.hubLabel, href: childPath(item), desc: item.hubDescription })),
        ],
      }}
      related={[...(child.related ?? []), ...info.related]}
      authoritativeSources={child.sources}
    />
  );
}
