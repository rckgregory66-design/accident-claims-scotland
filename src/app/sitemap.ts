import type { MetadataRoute } from "next";
import { publishedGuides } from "@/data/guides";
import { SITE } from "@/data/siteConfig";
import { roadTrafficPages } from "@/data/roadTrafficPages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date("2026-07-29");

  const staticPages = [
    { url: `${SITE.url}/`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${SITE.url}/personal-injury-claims-scotland`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE.url}/road-traffic-accident-claims-scotland`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE.url}/accident-at-work-claims-scotland`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE.url}/medical-negligence-claims-scotland`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE.url}/industrial-disease-claims-scotland`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE.url}/serious-injury-claims-scotland`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE.url}/public-place-accident-claims-scotland`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE.url}/criminal-injury-compensation-scotland`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE.url}/no-win-no-fee-solicitors-scotland`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE.url}/how-to-claim-compensation-scotland`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE.url}/personal-injury-compensation-scotland`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE.url}/compensation-calculator-scotland`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE.url}/personal-injury-claim-time-limits-scotland`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE.url}/guides`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE.url}/about`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE.url}/editorial-methodology`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE.url}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE.url}/privacy-policy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE.url}/cookie-policy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE.url}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE.url}/complaints`, changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${SITE.url}/accessibility`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Only the two location pages with distinct, substantial local content are
  // indexable. The other useful navigation pages remain noindex and therefore
  // must not be advertised in the sitemap.
  const locationPages = [
    "glasgow-accident-claims",
    "edinburgh-accident-claims",
  ].map((slug) => ({
    url: `${SITE.url}/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: siteLastModified,
  }));

  const guidePages = publishedGuides.map((g) => ({
    url: `${SITE.url}/guides/${g.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: new Date(g.dateModified),
  }));

  const roadTrafficDetailPages = roadTrafficPages.map((page) => ({
    url: `${SITE.url}/${page.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: siteLastModified,
  }));

  return [
    ...staticPages.map((page) => ({ ...page, lastModified: siteLastModified })),
    ...locationPages,
    ...roadTrafficDetailPages,
    ...guidePages,
  ];
}
