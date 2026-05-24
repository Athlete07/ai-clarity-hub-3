const fs = require("fs");

// 1. Update concepts.ts
let conceptsTs = fs.readFileSync("src/lib/concepts.ts", "utf8");
const chapter3Content = fs.readFileSync("scratch/chapter3-code.ts", "utf8");

// remove 'export const chapter3 = ' from the start and ';' from the end
const chapter3Object = chapter3Content.replace("export const chapter3 = ", "").replace(/;\s*$/, "");

// Find the last closing bracket of the concepts array
const lastBracketIndex = conceptsTs.lastIndexOf("];\n\nexport const conceptBySlug");
if (lastBracketIndex !== -1) {
  conceptsTs =
    conceptsTs.substring(0, lastBracketIndex) +
    ",\n  " +
    chapter3Object +
    "\n" +
    conceptsTs.substring(lastBracketIndex);
  fs.writeFileSync("src/lib/concepts.ts", conceptsTs);
  console.log("Updated concepts.ts");
} else {
  console.log("Could not find where to insert in concepts.ts");
}

// 2. Update playbooks.tsx
let playbooksTs = fs.readFileSync("src/routes/playbooks.tsx", "utf8");
// Add to PM_FOUNDATIONS_SEQUENCE
const seqToInsert = `,\n  {\n    slug: "pm-training-vs-inference",\n    note: "The most expensive mistake PMs make in AI is conflating the cost of building a model with the cost of running one.",\n  }`;
const seqIndex = playbooksTs.indexOf("];\n\ntype Playbook = {");
if (seqIndex !== -1) {
  playbooksTs =
    playbooksTs.substring(0, seqIndex - 1) + seqToInsert + "\n" + playbooksTs.substring(seqIndex);
}

// Add to topics
const topicToInsert = ` "Training vs Inference",`;
playbooksTs = playbooksTs.replace(
  '"AI vs ML vs DL", "How models learn"',
  '"AI vs ML vs DL", "How models learn",' + topicToInsert,
);

fs.writeFileSync("src/routes/playbooks.tsx", playbooksTs);
console.log("Updated playbooks.tsx");
