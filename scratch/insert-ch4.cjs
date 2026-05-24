const fs = require("fs");
const path = require("path");

const conceptsPath = path.join(__dirname, "../src/lib/concepts.ts");
let conceptsContent = fs.readFileSync(conceptsPath, "utf8");

const newChapterPath = path.join(__dirname, "chapter4-code.ts");
let newChapterContent = fs.readFileSync(newChapterPath, "utf8");

// Remove export const chapter4 = { and the closing };
newChapterContent = newChapterContent.replace("export const chapter4 = {", "{");
newChapterContent = newChapterContent.slice(0, newChapterContent.lastIndexOf("};")) + "}";

// Find the end of the concepts array. 
// It ends with: export const concepts: Concept[] = [ ... ];
const insertionPoint = conceptsContent.lastIndexOf("];\n");

if (insertionPoint === -1) {
  console.error("Could not find insertion point");
  process.exit(1);
}

// Insert before the closing bracket with a comma
conceptsContent = 
  conceptsContent.slice(0, insertionPoint) +
  ",\n  " + newChapterContent + "\n" +
  conceptsContent.slice(insertionPoint);

fs.writeFileSync(conceptsPath, conceptsContent);
console.log("Successfully inserted chapter 4 into concepts.ts");
