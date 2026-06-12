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

const OVERUSED = new Set([
  "founder-eval-framework",
  "bl-ai-transformation",
  "bl-governance-mvg",
  "bl-change-management",
  "bl-vendor-evaluation",
  "founder-data-moat-layers",
  "bl-roi-business-case",
  "founder-vc-diligence-stack",
  "founder-hiring-sequence",
  "founder-scaling-inflection",
  "founder-risk-governance",
  "ch2-data-flywheel",
]);

const GENERIC_TITLES = new Set([
  "AI Initiative Execution Path",
  "Evaluation Framework",
  "AI Governance Framework",
  "Vendor Evaluation Process",
  "AI ROI Framework",
  "Building AI Culture",
  "Strategic Moat Layers",
  "Competitive Moat Layers",
  "Investor Diligence Stack",
  "AI Risk Management Flow",
  "AI Risk Governance Flow",
  "Evaluation Before Launch",
  "AI by Function",
]);

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
  if (currentType === "tree") return "tree";
  if (currentType === "nested") return "nested";
  if (currentType === "comparison") return "comparison";
  return "flow";
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

function extractTake(block) {
  const m = block.match(/take:\s*"((?:[^"\\]|\\.)*)"/);
  return m ? m[1].replace(/\\"/g, '"') : "";
}

function extractSubtitle(block) {
  const m = block.match(/subtitle:\s*"((?:[^"\\]|\\.)*)"/);
  return m ? m[1].replace(/\\"/g, '"') : "";
}

function extractSectionTitle(block) {
  const m = block.match(/title:\s*"((?:[^"\\]|\\.)*)"/);
  return m ? m[1].replace(/\\"/g, '"') : "Section";
}

function extractSectionNumber(block) {
  return block.match(/number:\s*"([^"]+)"/)?.[1] ?? "0";
}

const allDiagrams = [];

for (const d of dirs) {
  for (const f of fs.readdirSync(path.join(lib, d)).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const fp = path.join(lib, d, f);
    let text = fs.readFileSync(fp, "utf8");
    let changed = false;

    const diagramRe =
      /(\{[\s\S]*?number:\s*"[^"]+"[\s\S]*?)(,\s*\{\s*kind:\s*"diagram"[\s\S]*?id:\s*")([^"]+)("[\s\S]*?type:\s*")([^"]+)("[\s\S]*?title:\s*")((?:[^"\\]|\\.)*)("[\s\S]*?caption:\s*\n?\s*")((?:[^"\\]|\\.)*)("[\s\S]*?\}\s*,?\s*\))/g;

    text = text.replace(diagramRe, (full, sectionPart, p1, oldId, p2, oldType, p3, oldTitle, p4, oldCaption, p5) => {
      const sectionTitle = extractSectionTitle(sectionPart);
      const sectionNum = extractSectionNumber(sectionPart);
      const take = extractTake(sectionPart);
      const subtitle = extractSubtitle(sectionPart);

      const needsFix =
        OVERUSED.has(oldId) ||
        GENERIC_TITLES.has(oldTitle) ||
        oldTitle === "AI Initiative Execution Path" ||
        (oldId === "ch1-paradigm-shift" && !sectionTitle.toLowerCase().includes("rule"));

      if (!needsFix && !oldId.startsWith("bl-pb") && !oldId.startsWith("founder-pb") && !oldId.startsWith("founder-ch")) {
        const type = oldType;
        allDiagrams.push({
          id: oldId,
          type,
          title: oldTitle,
          caption: oldCaption,
          file: `${d}/${f}`,
        });
        return full;
      }

      const prefix = prefixFromFile(fp);
      const secSlug = slugify(sectionNum + "-" + sectionTitle);
      const newId = `${prefix}-${secSlug}`;
      const newTitle = sectionTitle;
      const newCaption = makeCaption(take, subtitle);
      const newType = inferType(sectionTitle, oldType);

      allDiagrams.push({
        id: newId,
        type: newType,
        title: newTitle,
        caption: newCaption,
        file: `${d}/${f}`,
      });

      changed = true;
      return `${sectionPart}${p1}${newId}${p2}${newType}${p3}${newTitle}${p4}${newCaption}${p5}`;
    });

    if (changed) {
      fs.writeFileSync(fp, text);
      console.error("updated", `${d}/${f}`);
    }
  }
}

const byId = new Map();
for (const d of allDiagrams) byId.set(d.id, d);
fs.writeFileSync(
  path.join("scripts", "bl-founder-diagrams.json"),
  JSON.stringify([...byId.values()], null, 2),
);
console.error("unique diagrams", byId.size);
