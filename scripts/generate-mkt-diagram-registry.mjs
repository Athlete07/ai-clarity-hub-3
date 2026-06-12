import fs from "fs";
import path from "path";

const lib = "src/lib";
const dirs = fs
  .readdirSync(lib, { withFileTypes: true })
  .filter((e) => e.isDirectory() && e.name.startsWith("concepts-mkt"))
  .map((e) => e.name);

const diagrams = [];

for (const d of dirs) {
  for (const f of fs.readdirSync(path.join(lib, d)).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const t = fs.readFileSync(path.join(lib, d, f), "utf8");
    const blockRe =
      /kind:\s*"diagram"[\s\S]*?id:\s*"(mkt-[^"]+)"[\s\S]*?type:\s*"(flow|nested|comparison|tree)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?caption:\s*"([^"]+)"/g;
    let m;
    while ((m = blockRe.exec(t))) {
      diagrams.push({ id: m[1], type: m[2], title: m[3], caption: m[4] });
    }
  }
}

function slugWords(id) {
  return id
    .replace(/^mkt-/, "")
    .replace(/pb\d+-ch\d+-/g, "")
    .split("-")
    .filter(Boolean);
}

function flowSteps(title, caption) {
  const base = slugWords(title.replace(/[^a-zA-Z0-9 ]/g, " "));
  const labels = [
    ["Inputs", "Campaign data & context"],
    ["Process", title.split(" ")[0] ?? "Analyze"],
    ["Model / rules", "AI or workflow layer"],
    ["Review", "Human QA gate"],
    ["Output", "Actionable marketing decision"],
  ];
  if (title.toLowerCase().includes("loop") || caption.toLowerCase().includes("loop")) {
    return [
      { title: "Signal", desc: "Impressions, clicks, conversions" },
      { title: "Learn", desc: "Model updates from outcomes" },
      { title: "Recommend", desc: "Next bid, audience, or copy" },
      { title: "Act", desc: "Campaign change in platform" },
      { title: "Measure", desc: "Feedback into next cycle" },
    ];
  }
  if (title.toLowerCase().includes("pipeline") || title.toLowerCase().includes("workflow")) {
    return [
      { title: "Collect", desc: "First-party & platform data" },
      { title: "Transform", desc: "Clean, label, segment" },
      { title: "Score / draft", desc: "AI produces candidate output" },
      { title: "Approve", desc: "Marketer review gate" },
      { title: "Deploy", desc: "Live in channel" },
    ];
  }
  return labels.map((l, i) => ({
    title: l[0],
    desc: i === 1 ? title.slice(0, 48) : l[1],
  }));
}

function nestedLayers(title) {
  return [
    { title: "Strategy", desc: "Audience, offer, channel goals", items: "Brief, KPIs, guardrails" },
    { title: "Execution", desc: title, items: "Tools, prompts, automation" },
    { title: "Outcome", desc: "Pipeline, revenue, brand trust", items: "Measured lift vs baseline" },
  ];
}

function comparisonDef(title) {
  if (title.toLowerCase().includes("vs") || title.toLowerCase().includes("descriptive")) {
    return {
      type: "comparison",
      cards: [
        {
          label: "Before / descriptive",
          title: "Report what happened",
          desc: "Dashboards, lagging KPIs, manual post-mortems.",
        },
        {
          label: "After / predictive",
          title: "Act on what will happen",
          desc: "Forecasts, probabilities, automated next steps.",
          accent: true,
        },
      ],
    };
  }
  return {
    type: "comparison",
    cards: [
      {
        label: "Manual approach",
        title: "Human-only workflow",
        desc: "Slower, consistent judgment, does not scale.",
      },
      {
        label: "AI-augmented",
        title: title,
        desc: "Faster variation with review gates and measurement.",
        accent: true,
      },
    ],
  };
}

function treeDef(title) {
  return {
    type: "tree",
    root: "Is this asset high-trust and high-reuse potential?",
    branches: [
      {
        answer: "YES",
        label: "Repurpose broadly",
        action: "Expand to email, social, ads, sales enablement",
      },
      {
        answer: "NO",
        label: "Is it time-sensitive or tactical?",
        children: [
          {
            answer: "YES",
            label: "Single-channel use",
            conclusion: {
              title: "Publish once, retire quickly",
              action: "Do not invest in full repurposing pipeline",
            },
          },
          {
            answer: "NO",
            label: "Refresh or retire",
            conclusion: {
              title: "Update or archive",
              action: "Avoid polluting content library with weak assets",
            },
          },
        ],
      },
    ],
  };
}

function defFor(d) {
  switch (d.type) {
    case "flow":
      return { type: "flow", steps: flowSteps(d.title, d.caption) };
    case "nested":
      return { type: "nested", layers: nestedLayers(d.title) };
    case "comparison":
      return comparisonDef(d.title);
    case "tree":
      return treeDef(d.title);
    default:
      return { type: "flow", steps: flowSteps(d.title, d.caption) };
  }
}

const lines = [
  `import type { DiagramDef } from "./diagram-registry";`,
  ``,
  `/** Marketer track diagram definitions — keyed by chapter diagram ids. */`,
  `export const MARKETER_DIAGRAM_REGISTRY: Record<string, DiagramDef> = {`,
];

for (const d of diagrams) {
  const def = defFor(d);
  lines.push(`  "${d.id}": ${JSON.stringify(def, null, 4).replace(/\n/g, "\n  ")},`);
}

lines.push(`};`);
lines.push("");

const out = path.join(lib, "diagram-registry-marketer.ts");
fs.writeFileSync(out, lines.join("\n"));
console.error(`Wrote ${diagrams.length} diagrams to ${out}`);
