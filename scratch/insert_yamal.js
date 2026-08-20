const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

const enItem = `    'lamine-yamal-market-value': {
      title: 'Market Value of Lamine Yamal',
      subtitle: 'The estimated market valuation of Lamine Yamal stands at €220 million',
      description:
        'Lamine Yamal\\\'s market value stands at €220 million, consolidating him as one of the most valuable and financially promising football players in the world, according to Transfermarkt profile and valuation data.',
      sourceName: 'Transfermarkt — Lamine Yamal Profile',
    },`;

const esItem = `    'lamine-yamal-market-value': {
      title: 'Valor de Mercado de Lamine Yamal',
      subtitle: 'La valoración estimada de la ficha del jugador Lamine Yamal se sitúa en los 220 millones de euros',
      description:
        'El valor de mercado de Lamine Yamal se sitúa en los 220 millones de euros, consolidándose como uno de los futbolistas más valiosos y con mayor proyección financiera del mundo según los datos del perfil oficial y valoración de Transfermarkt.',
      sourceName: 'Transfermarkt — Perfil de Lamine Yamal',
    },`;

const frItem = `    'lamine-yamal-market-value': {
      title: 'Valeur Marchande de Lamine Yamal',
      subtitle: 'La valeur marchande estimée du joueur Lamine Yamal s\\\'élève à 220 millions d\\\'euros',
      description:
        'La valeur marchande de Lamine Yamal s\\\'établit à 220 millions d\\\'euros, s\\\'affirmant comme l\\\'un des footballeurs les plus chers et prometteurs au monde selon les données officielles de Transfermarkt.',
      sourceName: 'Transfermarkt — Profil de Lamine Yamal',
    },`;

const deItem = `    'lamine-yamal-market-value': {
      title: 'Marktwert von Lamine Yamal',
      subtitle: 'Der geschätzte Transferwert von Lamine Yamal liegt bei 220 Millionen Euro',
      description:
        'Der Marktwert von Lamine Yamal beläuft sich auf 220 Millionen Euro. Damit etabliert er sich laut den Daten des offiziellen Profils von Transfermarkt als einer der wertvollsten Fußballer der Welt.',
      sourceName: 'Transfermarkt — Lamine Yamal Profil',
    },`;

const ptItem = `    'lamine-yamal-market-value': {
      title: 'Valor de Mercado de Lamine Yamal',
      subtitle: 'A valorização estimada do passe do jogador Lamine Yamal situa-se nos 220 milhões de euros',
      description:
        'O valor de mercado de Lamine Yamal fixa-se nos 220 milhões de euros, consolidando-o como um dos futebolistas mais valiosos e com maior projeção financeira do mundo, segundo os dados de perfil da Transfermarkt.',
      sourceName: 'Transfermarkt — Perfil de Lamine Yamal',
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
  if (content.includes('lamine-yamal-market-value')) {
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
    console.log(`Successfully added Yamal translation to ${t.file}`);
  } else {
    console.log(`Could not find insertion point in ${t.file}`);
  }
});
console.log('All translations processed.');
