import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const roots = ["src", "public"];
const extensions = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".txt", ".md"]);
const forbidden = [
  /\[LAW FIRM NAME\]/i,
  /\[SOLICITOR NAME\]/i,
  /\[LAW SOCIETY OF SCOTLAND MEMBERSHIP NUMBER\]/i,
  /\[PHONE(?: NUMBER)?\]/i,
  /\[EMAIL(?: ADDRESS)?\]/i,
  /\[OFFICE ADDRESS\]/i,
  /\bour (?:Scottish )?(?:solicitors|lawyers|legal team)\b/i,
];

async function filesBelow(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesBelow(path) : [path];
  }));
  return nested.flat();
}

const failures = [];
for (const root of roots) {
  for (const file of await filesBelow(root)) {
    if (!extensions.has(extname(file))) continue;
    const content = await readFile(file, "utf8");
    for (const pattern of forbidden) {
      if (pattern.test(content)) failures.push(`${relative(process.cwd(), file)} matches ${pattern}`);
    }
  }
}

if (failures.length) {
  console.error("Blocked placeholder or unsupported regulatory wording:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Placeholder and regulatory-claim check passed.");
