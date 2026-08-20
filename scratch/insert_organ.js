const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

const enItem = `    'global-organ-trafficking-spending': {
      title: 'Spending on Organ Trafficking',
      subtitle: 'Illegal organ trafficking generates between $600 million and $1.2 billion USD annually worldwide',
      description:
        'Illegal organ trafficking generates estimated annual profits and transactions of between $600 million and $1.2 billion globally. This clandestine activity is primarily fueled by the exploitation of donors in extreme poverty and the practice of transplant tourism, according to Wikipedia data.',
      sourceName: 'Wikipedia — Organ Trafficking',
    },`;

const esItem = `    'global-organ-trafficking-spending': {
      title: 'Gasto en Tráfico Ilegal de Órganos',
      subtitle: 'El tráfico ilegal de órganos genera entre 600 y 1.200 millones de dólares anuales a nivel mundial',
      description:
        'El tráfico ilegal de órganos genera ganancias y transacciones anuales estimadas entre 600 millones y 1.200 millones de dólares a nivel global. Esta actividad clandestina se nutre principalmente de la explotación de donantes en situación de pobreza extrema y del llamado turismo de trasplantes, según datos consolidados de Wikipedia.',
      sourceName: 'Wikipedia — Tráfico de órganos',
    },`;

const frItem = `    'global-organ-trafficking-spending': {
      title: 'Dépenses dans le Trafic d\\\'Organes',
      subtitle: 'Le trafic d\\\'organes génère entre 600 millions et 1,2 milliard de dollars par an dans le monde',
      description:
        'Le trafic illégal d\\\'organes génère des bénéfices et transactions annuels estimés entre 600 millions et 1,2 milliard de dollars à l\\\'échelle mondiale. Cette activité clandestine se nourrit de l\\\'exploitation de donneurs extrêmement pauvres et du tourisme de transplantation, selon Wikipédia.',
      sourceName: 'Wikipédia — Trafic d\\\'organes',
    },`;

const deItem = `    'global-organ-trafficking-spending': {
      title: 'Ausgaben für illegalen Organhandel',
      subtitle: 'Der illegale Organhandel generiert weltweit jährlich zwischen 600 Millionen und 1,2 Milliarden Dollar',
      description:
        'Der illegale Organhandel generiert weltweit jährliche Einnahmen und Umsätze von geschätzten 600 Millionen bis 1,2 Milliarden US-Dollar. Diese klandestine Aktivität wird laut Wikipedia vor allem durch die Ausbeutung extrem armer Spender und den sogenannten Transplantationstourismus genährt.',
      sourceName: 'Wikipedia — Organhandel',
    },`;

const ptItem = `    'global-organ-trafficking-spending': {
      title: 'Gastos com Tráfico Ilegal de Órgãos',
      subtitle: 'O tráfico ilegal de órgãos gera entre 600 e 1.200 milhões de dólares anuais a nível mundial',
      description:
        'O tráfico ilegal de órgãos gera lucros e transações anuais estimados entre 600 milhões e 1,2 mil milhões de dólares a nível global. Esta atividade clandestina alimenta-se da exploração de dadores em situação de pobreza extrema e do chamado turismo de transplantes, segundo a Wikipédia.',
      sourceName: 'Wikipédia — Tráfico de órgãos',
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
  if (content.includes('global-organ-trafficking-spending')) {
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
    console.log(`Successfully added organ translation to ${t.file}`);
  } else {
    console.log(`Could not find insertion point in ${t.file}`);
  }
});
console.log('All translations processed.');
