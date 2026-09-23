// Validates the built pillar/child pages in ./out. Run after `next build`.
// Checks: one H1, canonical, 5 to 8 FAQs matching FAQPage JSON-LD, Breadcrumb/Article/FAQPage/Organization
// schema, a link back to the pillar hub, the hub linking to every child, sitemap membership,
// and that every internal link on a child page points at a built page.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const SITE = "https://accident-claims-scotland.com";
const pillarsSource = readFileSync("src/data/pillarChildren.ts", "utf8");
const pillars = [...pillarsSource.matchAll(/^  "([a-z0-9-]+)": \{\s*$/gm)].map((m) => m[1]);

const failures = [];
const fail = (page, message) => failures.push(`${page}: ${message}`);

const sitemap = readFileSync(join(OUT, "sitemap.xml"), "utf8");

function pageExists(path) {
  const clean = path.split("#")[0].split("?")[0].replace(/\/$/, "") || "/index";
  return existsSync(join(OUT, `${clean}.html`)) || existsSync(join(OUT, clean, "index.html"));
}

function jsonLdTypes(html) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  const nodes = blocks.flatMap((b) => {
    const parsed = JSON.parse(b[1]);
    return Array.isArray(parsed) ? parsed : [parsed];
  });
  return nodes;
}

let checked = 0;
for (const pillar of pillars) {
  const dir = join(OUT, pillar);
  if (!existsSync(dir)) {
    fail(pillar, "no built directory");
    continue;
  }
  const hubHtml = readFileSync(join(OUT, `${pillar}.html`), "utf8");
  const children = readdirSync(dir).filter((f) => f.endsWith(".html") && statSync(join(dir, f)).isFile());

  for (const file of children) {
    const slug = file.replace(/\.html$/, "");
    const url = `/${pillar}/${slug}`;
    const html = readFileSync(join(dir, file), "utf8");
    checked += 1;

    if ((html.match(/<h1[\s>]/g) ?? []).length !== 1) fail(url, "expected exactly one H1");
    if (!html.includes(`<link rel="canonical" href="${SITE}${url}"`)) fail(url, "missing or wrong canonical");
    if (/<meta name="robots" content="[^"]*noindex/.test(html)) fail(url, "page is noindex");

    const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
    if (title.length < 30 || title.length > 75) fail(url, `title length ${title.length}`);
    const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
    if (description.length < 110 || description.length > 175) fail(url, `description length ${description.length}`);

    const nodes = jsonLdTypes(html);
    const types = new Set(nodes.map((n) => n["@type"]));
    for (const required of ["Organization", "BreadcrumbList", "FAQPage", "Article", "WebPage"]) {
      if (!types.has(required)) fail(url, `missing ${required} schema`);
    }
    const faq = nodes.find((n) => n["@type"] === "FAQPage");
    const faqCount = faq?.mainEntity?.length ?? 0;
    if (faqCount < 5 || faqCount > 8) fail(url, `${faqCount} FAQs (need 5 to 8)`);
    const visibleFaqs = (html.match(/<details/g) ?? []).length;
    if (visibleFaqs !== faqCount) fail(url, `${visibleFaqs} visible FAQs but ${faqCount} in schema`);
    const crumbs = nodes.find((n) => n["@type"] === "BreadcrumbList")?.itemListElement ?? [];
    if (crumbs.length < 3) fail(url, "breadcrumb needs at least Home, pillar, page");

    if (!html.includes(`href="/${pillar}"`)) fail(url, "does not link back to the pillar hub");
    if (!hubHtml.includes(`href="${url}"`)) fail(url, "pillar hub does not link to this child");
    if (!sitemap.includes(`<loc>${SITE}${url}</loc>`)) fail(url, "missing from sitemap.xml");

    const internal = new Set([...html.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]));
    for (const href of internal) {
      if (href.startsWith("/_next") || /\.(?:txt|xml|ico|png|svg|jpg|webp)$/.test(href)) continue;
      if (!pageExists(href)) fail(url, `broken internal link ${href}`);
    }
  }
}

if (failures.length) {
  console.error(`Pillar page check failed (${failures.length}):\n${failures.map((f) => ` - ${f}`).join("\n")}`);
  process.exit(1);
}
console.log(`Pillar page check passed for ${checked} child pages across ${pillars.length} pillars.`);
