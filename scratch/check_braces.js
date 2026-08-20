const fs = require('fs');
const content = fs.readFileSync('data/translations/en.ts', 'utf8');
const lines = content.split('\n');

let openBraces = 0;
let closeBraces = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const opens = (line.match(/\{/g) || []).length;
  const closes = (line.match(/\}/g) || []).length;
  openBraces += opens;
  closeBraces += closes;
  
  if (openBraces < closeBraces) {
    console.log(`Mismatched close brace at line ${i+1}: ${line}`);
    break;
  }
}
console.log(`Total opens: ${openBraces}, Total closes: ${closeBraces}`);
