import fs from "fs";
import path from "path";

const lib = path.join("src/lib");
const prefixes = ["concepts-bl-", "concepts-founder"];

const dirs = fs
  .readdirSync(lib, { withFileTypes: true })
  .filter((e) => e.isDirectory() && (prefixes.some((p) => e.name.startsWith(p)) || e.name === "concepts-founder"))
  .map((e) => e.name);

const diagrams = [];
for (const d of dirs) {
  for (const f of fs.readdirSync(path.join(lib, d)).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const t = fs.readFileSync(path.join(lib, d, f), "utf8");
    const re =
      /kind:\s*"diagram"[\s\S]*?id:\s*"([^"]+)"[\s\S]*?type:\s*"(flow|nested|comparison|tree)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?caption:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(t))) {
      diagrams.push({ id: m[1], type: m[2], title: m[3], caption: m[4], file: `${d}/${f}` });
    }
  }
}

const byId = new Map();
for (const d of diagrams) byId.set(d.id, d);
console.log(JSON.stringify([...byId.values()], null, 2));
console.error("unique", byId.size);
