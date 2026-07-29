import { publishedGuides } from "@/data/guides";
import { CLAIM_TYPES, LOCATIONS, NAV_LINKS } from "@/data/siteConfig";

const STATIC_ROUTES = new Set([
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
