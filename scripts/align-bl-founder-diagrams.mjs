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
]);

/** Only keep IDs that are 1:1 with a single section topic across the repo. */
const KEEP_IDS = new Set([
  "ch1-dl-flow",
  "ch1-ai-hierarchy",
  "ch2-training-loop",
  "ch2-epochs-nested",
  "ch2-data-flywheel",
  "ch3-ai-stack",
  "ch4-feedback-cycle",
  "ch1-feedback-loop",
  "founder-training-inference-split",
  "founder-unit-economics-trap",
  "founder-api-vs-own",
  "founder-inference-optimisation",
  "founder-ai-native-spectrum",
  "founder-build-buy-partner",
  "founder-funding-valuation",
  "founder-ai-roles-map",
  "prompting-vs-finetuning-ladder",
  "pb4-rag-pipeline",
]);

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
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

function inferType(title, current) {
  const t = title.toLowerCase();
  if (t.includes("matrix") || t.includes(" vs ") || t.includes("spectrum") || t.includes("trade-off"))
    return "comparison";
  if (t.includes("hierarchy") || t.includes("layers") || t.includes("nested") || t.includes("⊃"))
    return "nested";
  if (t.includes("decision tree") || t.includes("build vs") || t.includes("build-buy")) return "tree";
  return current;
}

function makeCaption(take, subtitle) {
  const src = (take || subtitle || "").replace(/\s+/g, " ").trim();
  if (!src) return "Visual summary of this section's operating model.";
  if (src.length <= 160) return src;
  const cut = src.slice(0, 157);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut) + "…";
}

function sectionMetaBefore(text, diagramIndex) {
  const before = text.slice(0, diagramIndex);
  const numMatches = [...before.matchAll(/number:\s*"([^"]+)"/g)];
  if (!numMatches.length) return null;
  const lastNum = numMatches[numMatches.length - 1];
  const num = lastNum[1];
  const sliceStart = lastNum.index;
  const sliceEnd = before.indexOf("paragraphs:", sliceStart);
  const header = before.slice(sliceStart, sliceEnd > -1 ? sliceEnd : undefined);
  const title = header.match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1]?.replace(/\\"/g, '"');
  const subtitle = header.match(/subtitle:\s*"((?:[^"\\]|\\.)*)"/)?.[1]?.replace(/\\"/g, '"');
  const take = header.match(/take:\s*"((?:[^"\\]|\\.)*)"/)?.[1]?.replace(/\\"/g, '"');
  if (!title) return null;
  return { number: num, title, subtitle, take };
}

const allDiagrams = [];

for (const d of dirs) {
  for (const f of fs.readdirSync(path.join(lib, d)).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const fp = path.join(lib, d, f);
    let text = fs.readFileSync(fp, "utf8");
    const prefix = prefixFromFile(fp);
    const diagramRe = /\{\s*kind:\s*"diagram"([\s\S]*?)\n\s*\}/g;
    let changed = false;

    text = text.replace(diagramRe, (full, inner, offset) => {
      const diagramIndex = offset;
      const meta = sectionMetaBefore(text, diagramIndex);
      if (!meta) return full;

      const oldId = inner.match(/id:\s*"([^"]+)"/)?.[1] ?? "";
      const oldType = inner.match(/type:\s*"([^"]+)"/)?.[1] ?? "flow";
      const oldTitle = inner.match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? "";

      const needsNewId = OVERUSED.has(oldId) || !KEEP_IDS.has(oldId);
      const newId = KEEP_IDS.has(oldId)
        ? oldId
        : needsNewId
          ? `${prefix}-${slugify(`${meta.number}-${meta.title}`)}`
          : oldId;
      const newTitle = meta.title;
      const newCaption = makeCaption(meta.take, meta.subtitle);
      const newType = KEEP_IDS.has(oldId) ? oldType : inferType(newTitle, oldType);

      if (oldId === newId && oldTitle === newTitle) {
        allDiagrams.push({ id: newId, type: newType, title: newTitle, caption: newCaption, file: `${d}/${f}` });
        return full;
      }

      changed = true;
      let newInner = inner
        .replace(/id:\s*"[^"]+"/, `id: "${newId}"`)
        .replace(/type:\s*"[^"]+"/, `type: "${newType}"`)
        .replace(/title:\s*"((?:[^"\\]|\\.)*)"/, `title: "${newTitle.replace(/"/g, '\\"')}"`)
        .replace(
          /caption:\s*\n?\s*"((?:[^"\\]|\\.)*)"/,
          `caption:\n        "${newCaption.replace(/"/g, '\\"')}"`,
        );

      allDiagrams.push({ id: newId, type: newType, title: newTitle, caption: newCaption, file: `${d}/${f}` });
      return `{\n      kind: "diagram"${newInner}\n    }`;
    });

    if (changed) {
      fs.writeFileSync(fp, text);
      console.error("updated", `${d}/${f}`);
    }
  }
}

const byId = new Map();
for (const d of allDiagrams) byId.set(d.id, d);
// Re-scan all files for final registry
const final = [];
for (const d of dirs) {
  for (const f of fs.readdirSync(path.join(lib, d)).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const t = fs.readFileSync(path.join(lib, d, f), "utf8");
    const re =
      /kind:\s*"diagram"[\s\S]*?id:\s*"([^"]+)"[\s\S]*?type:\s*"(flow|nested|comparison|tree)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?caption:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(t))) {
      final.push({ id: m[1], type: m[2], title: m[3], caption: m[4], file: `${d}/${f}` });
    }
  }
}
const uniq = new Map();
for (const x of final) uniq.set(x.id, x);
fs.writeFileSync(path.join("scripts", "bl-founder-diagrams.json"), JSON.stringify([...uniq.values()], null, 2));
console.error("registry entries", uniq.size);
