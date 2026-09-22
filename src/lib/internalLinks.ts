import { publishedGuides } from "@/data/guides";
import { CLAIM_TYPES, LOCATIONS, NAV_LINKS } from "@/data/siteConfig";
import { roadTrafficPageSlugs } from "@/data/roadTrafficPages";

// Indexable pages that are not in the main navigation or claim-type lists.
const LONG_TAIL_ROUTES = [
  "/manual-handling-injury-claims-scotland",
  "/needlestick-injury-claims-scotland",
  "/stress-at-work-claims-scotland",
  "/self-employed-injury-claims-scotland",
  "/delayed-diagnosis-claims-scotland",
  "/dental-negligence-claims-scotland",
  "/hospital-infection-claims-scotland",
  "/shop-accident-claims-scotland",
  "/school-accident-claims-scotland",
  "/hotel-accident-claims-scotland",
  "/occupational-asthma-claims-scotland",
  "/occupational-dermatitis-claims-scotland",
  "/domestic-abuse-injury-claim-scotland",
  "/child-abuse-injury-claim-scotland",
  "/contributory-negligence-road-accident-scotland",
  "/dog-bite-claims-scotland",
  "/work-at-height-fall-claims-scotland",
  "/scotland-personal-injury-statistics",
  "/editorial-methodology",
];

const STATIC_ROUTES = new Set([
  ...LONG_TAIL_ROUTES,
  "/",
  "/about",
  "/accessibility",
  "/complaints",
  "/contact",
  "/cookie-policy",
  "/guides",
  "/privacy-policy",
  "/terms",
  ...CLAIM_TYPES.map((item) => item.href.split("#")[0]),
  ...LOCATIONS.map((item) => item.href),
  ...NAV_LINKS.flatMap((item) => [
    item.href,
    ...(item.children?.map((child) => child.href) ?? []),
  ]),
  ...roadTrafficPageSlugs,
]);

const GUIDE_ROUTES = new Map(
  publishedGuides.map((guide) => [`/${guide.slug}`, `/guides/${guide.slug}`]),
);

const GUIDE_ALIASES = new Map<string, string>([
  ["/nhs-negligence-claims-scotland", "/guides/nhs-negligence-claims-scotland-explained"],
]);

export function resolveInternalHref(href: string): string | null {
  const [pathname, hash] = href.split("#");
  if (STATIC_ROUTES.has(pathname)) return href;

  const guideRoute = GUIDE_ROUTES.get(pathname) ?? GUIDE_ALIASES.get(pathname);
  if (!guideRoute) return null;
  return hash ? `${guideRoute}#${hash}` : guideRoute;
}
