import fs from "fs";
import path from "path";

const lib = "src/lib";
const dirs = fs
  .readdirSync(lib, { withFileTypes: true })
  .filter((e) => e.isDirectory() && e.name.startsWith("concepts-mkt"))
  .map((e) => e.name);
const diagrams = [];

for (const d of dirs) {
  const dirPath = path.join(lib, d);
  for (const f of fs.readdirSync(dirPath).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const t = fs.readFileSync(path.join(dirPath, f), "utf8");
    const re = /id:\s*"(mkt-[^"]+)"[\s\S]*?type:\s*"(flow|nested|comparison|tree)"/g;
    let m;
    while ((m = re.exec(t))) {
      diagrams.push({ id: m[1], type: m[2], file: `${d}/${f}` });
    }
  }
}

console.log(JSON.stringify(diagrams, null, 2));
console.error("count", diagrams.length);
