import fs from "fs";
import path from "path";

const lib = path.join("src/lib");
const prefixes = ["concepts-bl-", "concepts-founder", "concepts-mkt-"];

const dirs = fs
  .readdirSync(lib, { withFileTypes: true })
  .filter((e) => e.isDirectory() && prefixes.some((p) => e.name.startsWith(p) || e.name === "concepts-founder"))
  .map((e) => e.name);

const ids = new Set();
for (const d of dirs) {
  for (const f of fs.readdirSync(path.join(lib, d)).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const t = fs.readFileSync(path.join(lib, d, f), "utf8");
    for (const m of t.matchAll(/id:\s*"(mkt-[^"]+|bl-[^"]+|founder[^"]*|ch[^"]+|pb4-[^"]+)"/g)) {
      ids.add(m[1]);
    }
  }
}

const reg = fs.readFileSync(path.join(lib, "diagram-registry.ts"), "utf8");
const bl = fs.readFileSync(path.join(lib, "diagram-registry-bl-founder.ts"), "utf8");
const mkt = fs.readFileSync(path.join(lib, "diagram-registry-marketer.ts"), "utf8");
const allReg = reg + bl + mkt;
const missing = [...ids].filter((id) => !allReg.includes(`"${id}":`));

console.log(JSON.stringify({ chapterIds: ids.size, missing }, null, 2));
