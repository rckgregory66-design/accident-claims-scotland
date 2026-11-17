// After `next build`, confirm public/_redirects does not clobber a live page
// and that every target exists in the static export.
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const file = readFileSync("public/_redirects", "utf8");
const rows = file
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"))
  .map((line) => {
    const parts = line.split(/\s+/);
    return { from: parts[0], to: parts[1], status: parts[2] };
  });

const resolves = (path) => {
  const p = path.replace(/\/$/, "") || "/index";
  return existsSync(join(OUT, `${p}.html`)) || existsSync(join(OUT, p, "index.html")) || existsSync(join(OUT, p));
};

let failed = false;
const seen = new Set();
for (const { from, to, status } of rows) {
  if (status !== "301") {
    console.error(`STATUS ${from} → ${to} (${status}, expected 301)`);
    failed = true;
  }
  if (seen.has(from)) {
    console.error(`DUPLICATE source ${from}`);
    failed = true;
  }
  seen.add(from);
  if (resolves(from)) {
    console.error(`CLASH ${from} is a live page and cannot be redirected`);
    failed = true;
  }
  if (!resolves(to)) {
    console.error(`MISSING TARGET ${from} → ${to}`);
    failed = true;
  }
  if (from === to) {
    console.error(`LOOP ${from}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log(`Redirect check passed for ${rows.length} rules.`);
