const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

const enItem = `    'spain-subsidies-public-grants-spending': {
      title: 'Public Subsidies & Grants in Spain',
      subtitle: 'Spain allocates around €41.49 billion annually in direct public subsidies and grants',
      description:
        'Spain allocates around €41.49 billion annually in direct public subsidies and grants distributed among the central government, regional communities, and local entities. This general figure encompasses aid to families, productive sectors, companies, and social entities, excluding major social protection items like contributory pensions or unemployment benefits.',
      sourceName: 'Libre Mercado — Expenditure on Subsidies and Grants in Spain',
    },`;

const esItem = `    'spain-subsidies-public-grants-spending': {
      title: 'Subvenciones y Ayudas Públicas en España',
      subtitle: 'España destina unos 41.490 millones de euros anuales en subvenciones y ayudas públicas directas',
      description:
        'España destina alrededor de 41.490 millones de euros anuales en subvenciones y ayudas públicas directas distribuidas entre el gobierno central, las comunidades autónomas y las entidades locales. Esta cifra general engloba ayudas a familias, sectores productivos, empresas y entidades sociales, sin contar las grandes partidas de protección social como las pensiones contributivas o el desempleo.',
      sourceName: 'Libre Mercado — El gasto en subvenciones y ayudas en España',
    },`;

const frItem = `    'spain-subsidies-public-grants-spending': {
      title: 'Subventions et Aides Publiques en Espagne',
      subtitle: 'L\\\'Espagne consacre environ 41,49 milliards d\\\'euros par an en subventions et aides publiques directes',
      description:
        'L\\\'Espagne consacre environ 41,49 milliards d\\\'euros par an en subventions et aides publiques directes réparties entre le gouvernement central, les communautés autonomes et les collectivités locales. Ce chiffre englobe les aides aux familles, aux secteurs productifs, aux entreprises et aux entités sociales, sans inclure les grands postes de protection sociale comme les retraites ou le chômage.',
      sourceName: 'Libre Mercado — Dépenses en subventions et aides en Espagne',
    },`;

const deItem = `    'spain-subsidies-public-grants-spending': {
      title: 'Öffentliche Subventionen und Hilfen in Spanien',
      subtitle: 'Spanien stellt jährlich rund 41,49 Milliarden Euro für direkte öffentliche Subventionen und Beihilfen bereit',
      description:
        'Spanien stellt jährlich rund 41,49 Milliarden Euro für direkte öffentliche Subventionen und Beihilfen bereit, die auf die Zentralregierung, autonome Gemeinschaften und lokale Körperschaften verteilt werden. Diese Zahl umfasst Hilfen für Familien, produktive Sektoren, Unternehmen und soziale Einrichtungen, ohne große Sozialausgaben wie Renten oder Arbeitslosengeld.',
      sourceName: 'Libre Mercado — Subventionsausgaben in Spanien',
    },`;

const ptItem = `    'spain-subsidies-public-grants-spending': {
      title: 'Subsídios e Ajudas Públicas na Espanha',
      subtitle: 'A Espanha destina cerca de 41.490 milhões de euros anuais em subsídios e ajudas públicas diretas',
      description:
        'A Espanha destina cerca de 41.490 milhões de euros anuais em subsídios e ajudas públicas diretas distribuídas entre o governo central, as comunidades autónomas e as entidades locais. Este valor engloba apoios a famílias, setores produtivos, empresas e entidades sociais, excluindo grandes parcelas de proteção social como pensões contributivas ou desemprego.',
      sourceName: 'Libre Mercado — Gastos com subsídios e apoios na Espanha',
    },`;

const targets = [
  { file: 'data/translations/en.ts', item: enItem },
  { file: 'data/translations/es.ts', item: esItem },
  { file: 'data/translations/fr.ts', item: frItem },
  { file: 'data/translations/de.ts', item: deItem },
  { file: 'data/translations/pt.ts', item: ptItem }
];

targets.forEach(t => {
  const filePath = path.join(projectRoot, t.file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('spain-subsidies-public-grants-spending')) {
    console.log(`Already exists in ${t.file}`);
    return;
  }
  
  const lines = content.split(/\r?\n/);
  let insertIndex = -1;
  
  // Search from the end of the file
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '},' && i < lines.length - 2) {
      if (lines[i+1].trim() === '},' && lines[i+2].trim() === '};') {
        insertIndex = i + 1; // Insert before the items closing brace
        break;
      }
    }
  }
  
  if (insertIndex !== -1) {
    lines.splice(insertIndex, 0, t.item);
    fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
    console.log(`Successfully added subsidies translation to ${t.file}`);
  } else {
    console.log(`Could not find insertion point in ${t.file}`);
  }
});
console.log('All translations processed.');
