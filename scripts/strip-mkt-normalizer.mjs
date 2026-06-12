import fs from "fs";
import path from "path";

const dirs = ["concepts-mkt-pb1", "concepts-mkt-pb2"].map((d) => path.join("src/lib", d));

const header = `import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

`;

for (const dir of dirs) {
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const fp = path.join(dir, f);
    let t = fs.readFileSync(fp, "utf8");
    if (!t.includes("normalizeSection")) continue;

    const exportIdx = t.indexOf("export const chapter");
    if (exportIdx === -1) {
      console.error("No export in", fp);
      continue;
    }
    t = header + t.slice(exportIdx);
    fs.writeFileSync(fp, t);
    console.error("stripped", fp);
  }
}
