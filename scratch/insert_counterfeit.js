const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

const enItem = `    'global-counterfeit-goods-spending': {
      title: 'Spending on Counterfeit Goods',
      subtitle: 'Global spending on counterfeit products exceeds €412 billion annually',
      description:
        'The global trade of counterfeit goods is estimated at over €412 billion, representing 2.5% of total worldwide trade. In the European Union, imports of counterfeit products reached €119 billion.',
      sourceName: 'Merca2.0 — The Global Economy of Counterfeits',
    },`;

const esItem = `    'global-counterfeit-goods-spending': {
      title: 'Gasto en Productos Falsificados',
      subtitle: 'El gasto global en productos falsificados supera los 412.000 millones de euros anuales',
      description:
        'El comercio global de falsificaciones se estima en más de 412.000 millones de euros, lo que representa un 2,5% del total del comercio en todo el planeta. En la Unión Europea, las importaciones de productos falsificados alcanzaron los 119.000 millones de euros.',
      sourceName: 'Merca2.0 — La economía global de las falsificaciones',
    },`;

const frItem = `    'global-counterfeit-goods-spending': {
      title: 'Dépenses en Produits Contrefaits',
      subtitle: 'Les dépenses mondiales en produits de contrefaçon dépassent 412 milliards d\\\'euros par an',
      description:
        'Le commerce mondial de contrefaçons est estimé à plus de 412 milliards d\\\'euros, ce qui représente 2,5 % du commerce mondial total. Dans l\\\'Union européenne, les importations de produits contrefaits ont atteint 119 milliards d\\\'euros.',
      sourceName: 'Merca2.0 — L\\\'économie mondiale des contrefaçons',
    },`;

const deItem = `    'global-counterfeit-goods-spending': {
      title: 'Ausgaben für gefälschte Produkte',
      subtitle: 'Die weltweiten Ausgaben für gefälschte Produkte übersteigen jährlich 412 Milliarden Euro',
      description:
        'Der weltweite Handel mit Plagiaten wird auf über 412 Milliarden Euro geschätzt, was 2,5 % des gesamten Welthandels entspricht. In der Europäischen Union erreichten die Importe gefälschter Produkte 119 Milliarden Euro.',
      sourceName: 'Merca2.0 — Die globale Wirtschaft der Fälschungen',
    },`;

const ptItem = `    'global-counterfeit-goods-spending': {
      title: 'Gastos com Produtos Falsificados',
      subtitle: 'O gasto global com produtos falsificados supera os 412.000 milhões de euros anuais',
      description:
        'O comércio global de contrafação é estimado em mais de 412.000 milhões de euros, o que representa 2,5% do comércio mundial total. Na União Europeia, as importações de produtos contrafeitos atingiram 119.000 milhões de euros.',
      sourceName: 'Merca2.0 — A economia global das falsificações',
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
  if (content.includes('global-counterfeit-goods-spending')) {
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
    console.log(`Successfully added counterfeit translation to ${t.file}`);
  } else {
    console.log(`Could not find insertion point in ${t.file}`);
  }
});
console.log('All translations processed.');
