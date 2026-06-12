import fs from "fs";

const t = fs.readFileSync("src/lib/concepts-bl-pb2/chapter-01-bl-ai-opportunity-assessment.ts", "utf8");
const re =
  /sectionWithDiagram\(\{([\s\S]*?)\},\s*\{([\s\S]*?kind:\s*"diagram"[\s\S]*?)\}\s*,?\s*\)/g;
let m;
while ((m = re.exec(t))) {
  const header = m[1].split(/paragraphs:\s*\[/)[0];
  const num = header.match(/number:\s*"([^"]+)"/)?.[1];
  const title = header.match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1];
  const did = m[2].match(/id:\s*"([^"]+)"/)?.[1];
  const dtitle = m[2].match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1];
  console.log({ num, title, did, dtitle });
}
