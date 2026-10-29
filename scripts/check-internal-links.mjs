// Verifies every internal href in the static export (out/) resolves to a built page.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const pages = walk(OUT).filter((f) => f.endsWith(".html"));
const resolves = (path) => {
  const p = path.replace(/\/$/, "") || "/index";
  return existsSync(join(OUT, p + ".html")) || existsSync(join(OUT, p, "index.html")) || existsSync(join(OUT, p));
};
const broken = new Map();
for (const file of pages) {
  const html = readFileSync(file, "utf8");
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
    if (href.startsWith("/_next") || href.startsWith("//")) continue;
    if (!resolves(href)) {
      const key = `${href}`;
      broken.set(key, (broken.get(key) ?? new Set()).add(file.replace(OUT, "")));
    }
  }
}
if (broken.size) {
  for (const [href, from] of broken) console.error(`BROKEN ${href}  (on ${[...from].slice(0, 3).join(", ")}${from.size > 3 ? ` +${from.size - 3}` : ""})`);
  process.exit(1);
}
console.log(`Internal link check passed for ${pages.length} pages.`);
