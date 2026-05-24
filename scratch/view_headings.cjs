const fs = require('fs');
const lines = fs.readFileSync('src/lib/concepts.ts', 'utf8').split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('kind: "h3"')) {
    console.log(`Line ${i + 1}:`);
    console.log(lines.slice(i, i + 5).join('\n'));
    console.log('---');
  }
}
