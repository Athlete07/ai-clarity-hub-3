const fs = require("fs");
const path = require("path");

function extractObjectString(filePath, exportName) {
  const content = fs.readFileSync(filePath, "utf-8");
  const prefix = `export const ${exportName} = `;
  const startIndex = content.indexOf(prefix);
  if (startIndex === -1) {
    throw new Error(`Could not find ${exportName} in ${filePath}`);
  }
  let objStr = content.substring(startIndex + prefix.length);
  objStr = objStr.trim();
  if (objStr.endsWith(";")) {
    objStr = objStr.slice(0, -1);
  }
  return objStr;
}

const ch7Str = extractObjectString(path.join(__dirname, "chapter7-code.ts"), "chapter7");
const conceptsFilePath = path.join(__dirname, "../src/lib/concepts.ts");
let conceptsContent = fs.readFileSync(conceptsFilePath, "utf-8");

const targetPattern = `  examples: []\n}\n];`;
if (!conceptsContent.includes(targetPattern)) {
  console.log("Could not find the target pattern. Trying fallback.");
  const altTarget = `}\n];`;
  const lastIndex = conceptsContent.lastIndexOf(altTarget);
  if (lastIndex === -1) {
    throw new Error("Could not find the end of the concepts array.");
  }
  
  const before = conceptsContent.substring(0, lastIndex + 1);
  const after = conceptsContent.substring(lastIndex + 1);
  conceptsContent = before + ",\n" + ch7Str + after;
} else {
  const replacement = `  examples: []\n},\n${ch7Str}\n];`;
  conceptsContent = conceptsContent.replace(targetPattern, replacement);
}

fs.writeFileSync(conceptsFilePath, conceptsContent, "utf-8");
console.log("Successfully injected chapter 7 into concepts.ts");
