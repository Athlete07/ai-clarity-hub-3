import fs from "fs";
import path from "path";

const lib = path.join("src/lib");
const dirs = fs
  .readdirSync(lib, { withFileTypes: true })
  .filter(
    (e) =>
      e.isDirectory() &&
      (e.name.startsWith("concepts-bl-") ||
        e.name === "concepts-founder" ||
        e.name.startsWith("concepts-founder-")),
  )
  .map((e) => e.name);

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

function inferType(sectionTitle, currentType) {
  const t = sectionTitle.toLowerCase();
  if (t.includes("matrix") || t.includes(" vs ") || t.includes("spectrum") || t.includes("trade-off"))
    return "comparison";
  if (t.includes("hierarchy") || t.includes("layers") || t.includes("nested") || t.includes("⊃"))
    return "nested";
  if (t.includes("decision tree") || t.includes("build vs") || t.includes("build-buy"))
    return "tree";
  return currentType || "flow";
}

function makeCaption(take, subtitle) {
  const src = (take || subtitle || "").replace(/\s+/g, " ").trim();
  if (!src) return "Visual summary of this section's operating model.";
  if (src.length <= 160) return src;
  const cut = src.slice(0, 157);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut) + "…";
}

function prefixFromFile(filePath) {
  const base = path.basename(filePath, ".ts");
  const m = base.match(/chapter-(\d+)/);
  const ch = m ? m[1].padStart(2, "0") : "00";
  if (filePath.includes("concepts-bl-pb")) {
    const pb = filePath.match(/concepts-bl-pb(\d+)/)?.[1] ?? "0";
    return `bl-pb${pb}-ch${ch}`;
  }
  if (filePath.includes("concepts-founder-pb")) {
    const pb = filePath.match(/concepts-founder-pb(\d+)/)?.[1] ?? "0";
    return `founder-pb${pb}-ch${ch}`;
  }
  return `founder-ch${ch}`;
}

function parseSection(sectionBlock) {
  const header = sectionBlock.split(/paragraphs:\s*\[/)[0] ?? sectionBlock;
  const number = header.match(/number:\s*"([^"]+)"/)?.[1] ?? "0";
  const title = header.match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1]?.replace(/\\"/g, '"') ?? "Section";
  const subtitle = header.match(/subtitle:\s*"((?:[^"\\]|\\.)*)"/)?.[1]?.replace(/\\"/g, '"') ?? "";
  const take = header.match(/take:\s*"((?:[^"\\]|\\.)*)"/)?.[1]?.replace(/\\"/g, '"') ?? "";
  return { number, title, subtitle, take };
}

const KEEP_IDS = new Set([
  "ch1-dl-flow",
  "ch1-ai-hierarchy",
  "ch1-paradigm-shift",
  "ch2-training-loop",
  "ch2-fitting-comparison",
  "ch2-epochs-nested",
  "ch2-data-flywheel",
  "ch3-ai-stack",
  "ch4-feedback-cycle",
  "ch8-cost-latency-frontier",
  "ch1-feedback-loop",
  "founder-training-inference-split",
  "founder-unit-economics-trap",
  "founder-api-vs-own",
  "founder-inference-optimisation",
  "founder-ai-native-spectrum",
  "founder-build-buy-partner",
  "founder-funding-valuation",
  "founder-ai-roles-map",
  "founder-org-design-stages",
  "prompting-vs-finetuning-ladder",
  "pb4-rag-pipeline",
]);

function updateDiagramBlock(diagramBlock, meta, prefix) {
  const oldId = diagramBlock.match(/id:\s*"([^"]+)"/)?.[1] ?? "";
  const oldType = diagramBlock.match(/type:\s*"([^"]+)"/)?.[1] ?? "flow";
  const { number, title, subtitle, take } = meta;

  const newId = KEEP_IDS.has(oldId) ? oldId : `${prefix}-${slugify(`${number}-${title}`)}`;
  const newType = KEEP_IDS.has(oldId) ? oldType : inferType(title, oldType);
  const newTitle = title;
  const newCaption = makeCaption(take, subtitle);

  return {
    block: diagramBlock
      .replace(/id:\s*"[^"]+"/, `id: "${newId}"`)
      .replace(/type:\s*"[^"]+"/, `type: "${newType}"`)
      .replace(/title:\s*"((?:[^"\\]|\\.)*)"/, `title: "${newTitle.replace(/"/g, '\\"')}"`)
      .replace(
        /caption:\s*\n?\s*"((?:[^"\\]|\\.)*)"/,
        `caption:\n        "${newCaption.replace(/"/g, '\\"')}"`,
      ),
    record: { id: newId, type: newType, title: newTitle, caption: newCaption },
  };
}

const allDiagrams = [];

for (const d of dirs) {
  for (const f of fs.readdirSync(path.join(lib, d)).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const fp = path.join(lib, d, f);
    let text = fs.readFileSync(fp, "utf8");
    const prefix = prefixFromFile(fp);

    const sectionWithRe =
      /sectionWithDiagram\(\{([\s\S]*?)\},\s*\{([\s\S]*?kind:\s*"diagram"[\s\S]*?)\}\s*,?\s*\)/g;
    text = text.replace(sectionWithRe, (full, sectionBlock, diagramBlock) => {
      const meta = parseSection(sectionBlock);
      const { block, record } = updateDiagramBlock(diagramBlock, meta, prefix);
      allDiagrams.push({ ...record, file: `${d}/${f}` });
      return `sectionWithDiagram({${sectionBlock}}, {${block}})`;
    });

    const buildSectionRe =
      /buildSection\(\{([\s\S]*?examples:[\s\S]*?\],)\s*\},\s*\{([\s\S]*?kind:\s*"diagram"[\s\S]*?)\}\s*,?\s*\)/g;
    text = text.replace(buildSectionRe, (full, sectionBlock, diagramBlock) => {
      const meta = parseSection(sectionBlock);
      const { block, record } = updateDiagramBlock(diagramBlock, meta, prefix);
      allDiagrams.push({ ...record, file: `${d}/${f}` });
      return `buildSection({${sectionBlock}}, {${block}})`;
    });

    fs.writeFileSync(fp, text);
  }
}

const byId = new Map();
for (const d of allDiagrams) byId.set(d.id, d);
fs.writeFileSync(path.join("scripts", "bl-founder-diagrams.json"), JSON.stringify([...byId.values()], null, 2));
console.error("unique diagrams", byId.size);
