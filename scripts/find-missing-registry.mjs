import fs from "fs";

const j = JSON.parse(fs.readFileSync("scripts/bl-founder-diagrams.json", "utf8"));
const r = fs.readFileSync("src/lib/diagram-registry-bl-founder.ts", "utf8");
const missing = j.filter((d) => !r.includes(`"${d.id}":`));
console.log("json", j.length, "missing", missing.length);
missing.forEach((m) => console.log(m.id, "|", m.title));
