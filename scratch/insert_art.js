const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

const enItem = `    'global-art-trafficking-spending': {
      title: 'Spending on Art Trafficking',
      subtitle: 'Illicit trafficking of cultural property and art moves nearly $10 billion USD annually',
      description:
        'The illicit trade of artworks, antiquities, and archaeological heritage represents a criminal industry of nearly $10 billion annually. Often funding terrorist networks and transnational organized crime, it poses one of the greatest threats to peoples\\\' cultural identity, as revealed by UNESCO and the UN.',
      sourceName: 'UNESCO & UN — Illicit Trafficking of Cultural Property',
    },`;

const esItem = `    'global-art-trafficking-spending': {
      title: 'Gasto en Tráfico Ilegal de Arte',
      subtitle: 'El tráfico ilícito de bienes culturales y obras de arte mueve casi 10.000 millones de dólares anuales',
      description:
        'El tráfico ilícito de obras de arte, antigüedades y patrimonio arqueológico representa una industria criminal de casi 10.000 millones de dólares anuales. Financiando en muchos casos a redes terroristas y al crimen organizado trasnacional, constituye una de las mayores amenazas contra la identidad de los pueblos según revelan la UNESCO y la ONU.',
      sourceName: 'UNESCO & ONU — Tráfico ilícito de bienes culturales',
    },`;

const frItem = `    'global-art-trafficking-spending': {
      title: 'Dépenses dans le Trafic d\\\'Art',
      subtitle: 'Le trafic illicite de biens culturels et d\\\'œuvres d\\\'art représente près de 10 milliards de dollars par an',
      description:
        'Le commerce illicite d\\\'œuvres d\\\'art, d\\\'antiquités et de patrimoine archéologique représente une industrie criminelle de près de 10 milliards de dollars par an. Finançant souvent des réseaux terroristes et le crime organisé transnational, il constitue une menace majeure pour l\\\'identité des peuples selon l\\\'UNESCO et l\\\'ONU.',
      sourceName: 'UNESCO & ONU — Trafic illicite de biens culturels',
    },`;

const deItem = `    'global-art-trafficking-spending': {
      title: 'Ausgaben für illegalen Kunsthandel',
      subtitle: 'Der illegale Handel mit Kulturgütern und Kunstwerken bewegt jährlich fast 10 Milliarden US-Dollar',
      description:
        'Der illegale Handel mit Kunstwerken, Antiquitäten und archäologischem Erbe stellt eine kriminelle Industrie von fast 10 Milliarden US-Dollar jährlich dar. Er finanziert oft terroristische Netzwerke und die transnationale organisierte Kriminalität und bedroht laut UNESCO und UN die kulturelle Identität von Völkern.',
      sourceName: 'UNESCO & UN — Illegaler Handel mit Kulturgütern',
    },`;

const ptItem = `    'global-art-trafficking-spending': {
      title: 'Gastos com Tráfico Ilegal de Arte',
      subtitle: 'O tráfico ilícito de bens culturais e obras de arte movimenta quase 10 mil milhões de dólares anuais',
      description:
        'O comércio ilícito de obras de arte, antiguidades e património arqueológico representa uma indústria criminosa de quase 10 mil milhões de dólares anuais. Financiando frequentemente redes terroristas e o crime organizado transnacional, constitui uma das maiores ameaças contra la identidade dos povos, segundo a UNESCO e a ONU.',
      sourceName: 'UNESCO & ONU — Tráfico ilícito de bens culturais',
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
  if (content.includes('global-art-trafficking-spending')) {
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
    console.log(`Successfully added art translation to ${t.file}`);
  } else {
    console.log(`Could not find insertion point in ${t.file}`);
  }
});
console.log('All translations processed.');
