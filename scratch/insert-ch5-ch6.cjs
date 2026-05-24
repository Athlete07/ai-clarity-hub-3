const fs = require("fs");
const path = require("path");
const ts = require("typescript");

// We'll read the code of chapter5 and chapter6, convert them to strings,
// and then inject them into concepts.ts before the end of the `concepts` array.
// First, we can just compile them using standard node require if we convert them to JS,
// but since they are simple JS objects exported as `export const chapter5 = { ... }`,
// we can read the file as string, extract the `{ ... }` part and inject it.

function extractObjectString(filePath, exportName) {
  const content = fs.readFileSync(filePath, "utf-8");
  const prefix = `export const ${exportName} = `;
  const startIndex = content.indexOf(prefix);
  if (startIndex === -1) {
    throw new Error(`Could not find ${exportName} in ${filePath}`);
  }
  let objStr = content.substring(startIndex + prefix.length);
  // remove the trailing semicolon
  objStr = objStr.trim();
  if (objStr.endsWith(";")) {
    objStr = objStr.slice(0, -1);
  }
  return objStr;
}

const ch5Str = extractObjectString(path.join(__dirname, "chapter5-code.ts"), "chapter5");
const ch6Str = extractObjectString(path.join(__dirname, "chapter6-code.ts"), "chapter6");

const conceptsFilePath = path.join(__dirname, "../src/lib/concepts.ts");
let conceptsContent = fs.readFileSync(conceptsFilePath, "utf-8");

// The concepts array ends with:
//   examples: []
// }
// ];
// We will look for that ending and insert `, ch5, ch6`

const targetPattern = `  examples: []\n}\n];`;
if (!conceptsContent.includes(targetPattern)) {
  console.log("Could not find the target pattern. Trying fallback.");
  const altTarget = `}\n];`;
  const lastIndex = conceptsContent.lastIndexOf(altTarget);
  if (lastIndex === -1) {
    throw new Error("Could not find the end of the concepts array.");
  }
  
  const before = conceptsContent.substring(0, lastIndex + 1); // include the `}`
  const after = conceptsContent.substring(lastIndex + 1); // `\n];`
  conceptsContent = before + ",\n" + ch5Str + ",\n" + ch6Str + after;
} else {
  const replacement = `  examples: []\n},\n${ch5Str},\n${ch6Str}\n];`;
  conceptsContent = conceptsContent.replace(targetPattern, replacement);
}

fs.writeFileSync(conceptsFilePath, conceptsContent, "utf-8");
console.log("Successfully injected chapter 5 and 6 into concepts.ts");
