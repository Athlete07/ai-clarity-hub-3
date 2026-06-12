import fs from "fs";
import path from "path";

const lib = "src/lib";
const dirs = fs
  .readdirSync(lib, { withFileTypes: true })
  .filter((e) => e.isDirectory() && e.name.startsWith("concepts-mkt"))
  .map((e) => e.name);

const issues = [];

for (const d of dirs) {
  for (const f of fs.readdirSync(path.join(lib, d)).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const file = `${d}/${f}`;
    const t = fs.readFileSync(path.join(lib, d, f), "utf8");
    const slug = t.match(/slug:\s*"([^"]+)"/)?.[1] ?? "?";

    const sectionBlocks = t.split(/buildSection\(|sectionWithDiagram\(/).slice(1);
    for (const block of sectionBlocks) {
      const num = block.match(/number:\s*"([^"]+)"/)?.[1];
      const title = block.match(/title:\s*"([^"]+)"/)?.[1];
      const paraCount = (block.match(/paragraphs:\s*\[/g) ? 1 : 0) &&
        (block.slice(block.indexOf("paragraphs:")).match(/\[\s*\[/g) || []).length;
      const exCount = (block.match(/title:\s*"[^"]+",\s*\n\s*body:/g) || []).length;

      if (num && paraCount < 3) {
        issues.push({ file, slug, num, title, type: "paragraphs", count: paraCount });
      }
      if (num && exCount < 3) {
        issues.push({ file, slug, num, title, type: "examples", count: exCount });
      }
    }
  }
}

console.log(JSON.stringify(issues, null, 2));
console.error("issues", issues.length);
