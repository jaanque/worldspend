const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

const enItem = `    'global-wildlife-trafficking-spending': {
      title: 'Spending on Wildlife Trafficking',
      subtitle: 'The illegal wildlife trade moves over $20 billion USD annually worldwide',
      description:
        'The illegal trafficking of wild animals and exotic species generates annual transactions of over $20 billion globally, constituting one of the most lucrative criminal businesses in the world alongside drug and arms trafficking, according to the Euribor environmental crime report.',
      sourceName: 'Euribor — The Black Business of Exotic Animal Trafficking',
    },`;

const esItem = `    'global-wildlife-trafficking-spending': {
      title: 'Gasto en Tráfico Ilegal de Animales',
      subtitle: 'El tráfico ilegal de animales silvestres y exóticos mueve más de 20.000 millones de dólares anuales',
      description:
        'El tráfico ilegal de animales silvestres y especies exóticas genera transacciones anuales de más de 20.000 millones de dólares a nivel global, constituyendo uno de los negocios criminales más lucrativos del mundo junto al tráfico de drogas y armas, según datos del informe de Euribor.',
      sourceName: 'Euribor — El negocio negro del tráfico de animales exóticos',
    },`;

const frItem = `    'global-wildlife-trafficking-spending': {
      title: 'Dépenses dans le Trafic d\\\'Animaux Sauvages',
      subtitle: 'Le commerce illégal d\\\'animaux sauvages génère plus de 20 milliards de dollars par an dans le monde',
      description:
        'Le trafic illégal d\\\'animaux sauvages et d\\\'espèces exotiques génère des transactions annuelles de plus de 20 milliards de dollars à l\\\'échelle mondiale, constituant l\\\'une des activités criminelles les plus lucratives au monde aux côtés du trafic de drogue et d\\\'armes, selon le rapport d\\\'Euribor.',
      sourceName: 'Euribor — Le marché noir du trafic d\\\'animaux exotiques',
    },`;

const deItem = `    'global-wildlife-trafficking-spending': {
      title: 'Ausgaben für illegalen Tierhandel',
      subtitle: 'Der illegale Handel mit Wildtieren bewegt weltweit über 20 Milliarden Dollar jährlich',
      description:
        'Der illegale Handel mit Wildtieren und exotischen Arten generiert weltweit jährliche Umsätze von über 20 Milliarden US-Dollar. Er stellt laut Euribor neben dem Drogen- und Waffenhandel eines der lukrativsten kriminellen Geschäfte der Welt dar.',
      sourceName: 'Euribor — Das dunkle Geschäft mit dem illegalen Handel exotischer Tiere',
    },`;

const ptItem = `    'global-wildlife-trafficking-spending': {
      title: 'Gastos com Tráfico Ilegal de Animais',
      subtitle: 'O tráfico ilegal de animais selvagens e exóticos movimenta mais de 20 mil milhões de dólares anuais',
      description:
        'O tráfico ilegal de animais selvagens e espécies exóticas gera transações anuais de mais de 20 mil milhões de dólares a nível global, constituindo um dos negócios criminosos mais lucrativos do mundo, a par do tráfico de droga e armas, segundo o relatório da Euribor.',
      sourceName: 'Euribor — O negócio negro do tráfico de animais exóticos',
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
  if (content.includes('global-wildlife-trafficking-spending')) {
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
    console.log(`Successfully added wildlife translation to ${t.file}`);
  } else {
    console.log(`Could not find insertion point in ${t.file}`);
  }
});
console.log('All translations processed.');
