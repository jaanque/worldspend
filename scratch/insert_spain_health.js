const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

const enItem = `    'spain-public-healthcare-spending': {
      title: 'Spain Public Healthcare Spending',
      subtitle: 'Public healthcare expenditure in Spain reaches €101.739 billion annually (~€2,084 per inhabitant)',
      description:
        'Public healthcare spending in Spain reached €101.739 billion, representing 6.4% of GDP and an average expenditure of €2,084 per inhabitant, according to the Public Healthcare Expenditure Statistics from the Ministry of Health.',
      sourceName: 'Ministry of Health — Public Healthcare Expenditure Statistics',
    },`;

const esItem = `    'spain-public-healthcare-spending': {
      title: 'Gasto Sanitario Público en España',
      subtitle: 'El gasto sanitario público en España alcanza los 101.739 millones de euros anuales (~2.084€ por habitante)',
      description:
        'El gasto sanitario público en España alcanzó los 101.739 millones de euros, lo que representa un 6,4% del PIB y un gasto medio de 2.084 euros por habitante, según la Estadística de Gasto Sanitario Público del Ministerio de Sanidad.',
      sourceName: 'Ministerio de Sanidad — Estadística de Gasto Sanitario Público',
    },`;

const frItem = `    'spain-public-healthcare-spending': {
      title: 'Dépenses Publiques de Santé en Espagne',
      subtitle: 'Les dépenses publiques de santé en Espagne atteignent 101,739 milliards d\\\'euros par an (~2 084 € par habitant)',
      description:
        'Les dépenses publiques de santé en Espagne ont atteint 101,739 milliards d\\\'euros, représentant 6,4 % du PIB et une dépense moyenne de 2 084 euros par habitant, selon l\\\'enquête statistique du Ministère de la Santé.',
      sourceName: 'Ministère de la Santé — Statistiques des dépenses publiques de santé',
    },`;

const deItem = `    'spain-public-healthcare-spending': {
      title: 'Öffentliche Gesundheitsausgaben in Spanien',
      subtitle: 'Die öffentlichen Gesundheitsausgaben in Spanien belaufen sich auf 101,739 Milliarden Euro jährlich (~2.084 € pro Einwohner)',
      description:
        'Die öffentlichen Gesundheitsausgaben in Spanien erreichten 101,739 Milliarden Euro, was 6,4 % des BIP und durchschnittliche Ausgaben von 2.084 Euro pro Einwohner entspricht, so die Statistik der öffentlichen Gesundheitsausgaben des Gesundheitsministeriums.',
      sourceName: 'Gesundheitsministerium — Statistik der öffentlichen Gesundheitsausgaben',
    },`;

const ptItem = `    'spain-public-healthcare-spending': {
      title: 'Despesa Pública com Saúde na Espanha',
      subtitle: 'A despesa pública com saúde na Espanha atinge 101.739 milhões de euros anuais (~2.084€ por habitante)',
      description:
        'A despesa pública com saúde na Espanha atingiu 101.739 milhões de euros, representando 6,4% do PIB e uma despesa média de 2.084 euros por habitante, segundo a Estatística de Despesa Pública com Saúde do Ministério da Saúde.',
      sourceName: 'Ministério da Saúde — Estatística de Despesa Pública com Saúde',
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
  if (content.includes('spain-public-healthcare-spending')) {
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
    console.log(`Successfully added Spain health translation to ${t.file}`);
  } else {
    console.log(`Could not find insertion point in ${t.file}`);
  }
});
console.log('All translations processed.');
