import fs from "fs";
import path from "path";

const lib = path.join("src/lib");
const prefixes = ["concepts-bl-", "concepts-founder"];

const dirs = fs
  .readdirSync(lib, { withFileTypes: true })
  .filter((e) => e.isDirectory() && prefixes.some((p) => e.name.startsWith(p)))
  .map((e) => e.name);

const paraIssues = [];
const exIssues = [];
const diagrams = [];
const fillerHits = [];

const fillerPatterns = [
  /architecture decisions matter/,
  /execution layer for/,
  /should be operationalized as repeatable/,
  /creates leverage only when/,
  /\.\.\.",\s*$/m,
  /Campaign data & context/,
];

for (const d of dirs) {
  for (const f of fs.readdirSync(path.join(lib, d)).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const file = `${d}/${f}`;
    const t = fs.readFileSync(path.join(lib, d, f), "utf8");
    const slug = t.match(/slug:\s*"([^"]+)"/)?.[1] ?? "?";

    for (const re of fillerPatterns) {
      if (re.test(t)) fillerHits.push({ file, slug, pattern: re.source });
    }

    const blockRe =
      /kind:\s*"diagram"[\s\S]*?id:\s*"([^"]+)"[\s\S]*?type:\s*"(flow|nested|comparison|tree)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?caption:\s*"([^"]+)"/g;
    let m;
    while ((m = blockRe.exec(t))) {
      diagrams.push({ id: m[1], type: m[2], title: m[3], caption: m[4], file });
    }

    const sectionBlocks = t.split(/buildSection\(|sectionWithDiagram\(/).slice(1);
    for (const block of sectionBlocks) {
      const num = block.match(/number:\s*"([^"]+)"/)?.[1];
      const title = block.match(/title:\s*"([^"]+)"/)?.[1];
      if (!num) continue;
      const afterPara = block.slice(block.indexOf("paragraphs:"));
      const paraCount = (afterPara.match(/\[\s*\[/g) || []).length;
      const exCount = (block.match(/title:\s*"[^"]+",\s*\n\s*body:/g) || []).length;
      if (paraCount < 3) paraIssues.push({ file, slug, num, title, count: paraCount });
      if (exCount < 3) exIssues.push({ file, slug, num, title, count: exCount });
    }
  }
}

// Load registry keys
const regText = fs.readFileSync(path.join(lib, "diagram-registry.ts"), "utf8");
const regKeys = new Set([...regText.matchAll(/"([^"]+)":\s*\{/g)].map((m) => m[1]));

const uniqueIds = [...new Map(diagrams.map((d) => [d.id, d])).values()];
const missing = uniqueIds.filter((d) => !regKeys.has(d.id));

console.log(
  JSON.stringify(
    {
      dirs: dirs.length,
      diagramCount: uniqueIds.length,
      missingDiagrams: missing,
      paraIssues: paraIssues.length,
      exIssues: exIssues.length,
      fillerHits: fillerHits.length,
      samplePara: paraIssues.slice(0, 5),
      sampleEx: exIssues.slice(0, 5),
      sampleFiller: fillerHits.slice(0, 5),
    },
    null,
    2,
  ),
);
