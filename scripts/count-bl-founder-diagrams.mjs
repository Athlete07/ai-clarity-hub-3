import fs from "fs";
import path from "path";

const lib = path.join("src/lib");
const dirs = fs
  .readdirSync(lib, { withFileTypes: true })
  .filter(
    (e) =>
      e.isDirectory() &&
      (e.name.startsWith("concepts-bl-") || e.name === "concepts-founder" || e.name.startsWith("concepts-founder-")),
  )
  .map((e) => e.name);

let total = 0;
const byId = {};
for (const d of dirs) {
  for (const f of fs.readdirSync(path.join(lib, d)).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const t = fs.readFileSync(path.join(lib, d, f), "utf8");
    const re =
      /kind:\s*"diagram"[\s\S]*?id:\s*"([^"]+)"[\s\S]*?type:\s*"(flow|nested|comparison|tree)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?caption:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(t))) {
      total++;
      byId[m[1]] = (byId[m[1]] || 0) + 1;
    }
  }
}
console.log({ total, unique: Object.keys(byId).length, byId });
