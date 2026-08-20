const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

// Helper to extract keys from translation file
function getKeysFromTranslationFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Find the items block by matching the items property inside default export
  // It is structured as items: { 'key': { ... }, ... }
  // We can use a simple regex to match keys inside items block
  const itemsSectionMatch = content.match(/items:\s*\{([\s\S]*?)\n\s*\},/);
  if (!itemsSectionMatch) {
    console.log(`Could not find items section in ${filePath}`);
    return [];
  }
  const itemsSection = itemsSectionMatch[1];
  const keyRegex = /'([^']+)':\s*\{/g;
  const keys = [];
  let match;
  while ((match = keyRegex.exec(itemsSection)) !== null) {
    keys.push(match[1]);
  }
  return keys;
}

// Extract base items from spendData.ts
const spendDataContent = fs.readFileSync(path.join(projectRoot, 'data/spendData.ts'), 'utf8');
const itemRegex = /id:\s*'([^']+)'/g;
const baseItemIds = [];
let match;
while ((match = itemRegex.exec(spendDataContent)) !== null) {
  // Exclude CATEGORIES IDs
  const id = match[1];
  if (!['all', 'illicit', 'military', 'sports', 'luxury', 'food', 'government', 'country-gdp'].includes(id)) {
    baseItemIds.push(id);
  }
}

const uniqueBaseIds = [...new Set(baseItemIds)];
console.log(`Found ${uniqueBaseIds.length} base spend item IDs in spendData.ts.`);

const langFiles = ['en.ts', 'es.ts', 'fr.ts', 'de.ts', 'pt.ts'];
langFiles.forEach(file => {
  const filePath = path.join(projectRoot, 'data/translations', file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  const keys = getKeysFromTranslationFile(filePath);
  const missing = uniqueBaseIds.filter(id => !keys.includes(id));
  console.log(`Language: ${file} | Translated items count: ${keys.length} | Missing items count: ${missing.length}`);
  if (missing.length > 0) {
    console.log(`Missing keys:`, missing);
  }
});
