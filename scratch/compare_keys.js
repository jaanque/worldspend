const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

function parseKeys(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const keys = [];
  const regex = /'([a-zA-Z0-9\-_]+)'\s*:\s*\{/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const key = match[1];
    if (!['seo', 'header', 'timeframes', 'comparePage', 'footer', 'categories', 'items', 'searchAndFilter', 'detailView', 'embedView', 'errorPage'].includes(key)) {
      keys.push(key);
    }
  }
  return keys;
}

const spendDataContent = fs.readFileSync(path.join(projectRoot, 'data/spendData.ts'), 'utf8');
const baseIds = [];
const itemRegex = /id:\s*'([^']+)'/g;
let match;
while ((match = itemRegex.exec(spendDataContent)) !== null) {
  const id = match[1];
  if (!['all', 'illicit', 'military', 'sports', 'luxury', 'food', 'government', 'country-gdp', 'health'].includes(id)) {
    // Exclude dynamic keys
    if (!id.startsWith('food-spend-') && !id.startsWith('gdp-')) {
      baseIds.push(id);
    }
  }
}
const uniqueBaseIds = [...new Set(baseIds)];

console.log(`Non-dynamic base item count in spendData.ts: ${uniqueBaseIds.length}`);
console.log(`Non-dynamic base items:`, uniqueBaseIds);

const files = ['en.ts', 'es.ts', 'fr.ts', 'de.ts', 'pt.ts'];
files.forEach(file => {
  const keys = parseKeys(path.join(projectRoot, 'data/translations', file));
  const missing = uniqueBaseIds.filter(id => !keys.includes(id));
  console.log(`${file} | Missing Non-Dynamic Keys: ${missing.length}`);
  if (missing.length > 0) {
    console.log(`  Missing keys in ${file}:`, missing);
  }
});
