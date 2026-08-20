const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

const enItem = `    'global-alcohol-spending': {
      title: 'Spending on Alcoholic Drinks',
      subtitle: 'Annual expenditure on alcoholic beverages is around $1.94 trillion USD worldwide',
      description:
        'Global consumer spending on alcoholic drinks reaches between $1.89 trillion and $2 trillion annually. This figure encompasses retail sales in stores and supermarkets, as well as consumption in bars, pubs, and restaurants globally, based on the Statista Market Forecast report.',
      sourceName: 'Statista Market Forecast — Alcoholic Drinks Worldwide',
    },`;

const esItem = `    'global-alcohol-spending': {
      title: 'Gasto en Bebidas Alcohólicas',
      subtitle: 'El gasto anual en bebidas alcohólicas se sitúa en torno a los 1,94 billones de dólares en el mundo',
      description:
        'El gasto en bebidas alcohólicas alcanza una cifra anual de entre 1,89 billones y 2 billones de dólares. Esta cifra abarca tanto las compras de los consumidores en tiendas y supermercados como el consumo en bares y restaurantes a nivel global, según datos del informe de Statista Market Forecast.',
      sourceName: 'Statista Market Forecast — Alcoholic Drinks Worldwide',
    },`;

const frItem = `    'global-alcohol-spending': {
      title: 'Dépenses en Boissons Alcoolisées',
      subtitle: 'Les dépenses annuelles en boissons alcoolisées s\\\'élèvent à environ 1,94 billion de dollars dans le monde',
      description:
        'Les dépenses de consommation en boissons alcoolisées atteignent entre 1,89 et 2 billions de dollars par an dans le monde. Ce chiffre englobe les ventes au détail dans les magasins et supermarchés, ainsi que la consommation dans les bars et restaurants, selon le rapport Statista Market Forecast.',
      sourceName: 'Statista Market Forecast — Boissons alcoolisées dans le monde',
    },`;

const deItem = `    'global-alcohol-spending': {
      title: 'Ausgaben für alkoholische Getränke',
      subtitle: 'Die jährlichen Ausgaben für alkoholische Getränke liegen weltweit bei rund 1,94 Billionen USD',
      description:
        'Die weltweiten Verbraucherausgaben für alkoholische Getränke belaufen sich auf jährlich 1,89 bis 2 Billionen US-Dollar. Diese Zahl umfasst sowohl den Verkauf im Einzelhandel und in Supermärkten als auch den Konsum in Bars und Restaurants weltweit, basierend auf dem Statista Market Forecast-Bericht.',
      sourceName: 'Statista Market Forecast — Alkoholische Getränke weltweit',
    },`;

const ptItem = `    'global-alcohol-spending': {
      title: 'Gastos com Bebidas Alcoólicas',
      subtitle: 'Os gastos anuais com bebidas alcoólicas situam-se em torno dos 1,94 biliões de dólares no mundo',
      description:
        'Os gastos de consumo em bebidas alcoólicas atingem entre 1,89 biliões e 2 biliões de dólares por ano no mundo. Este valor engloba tanto as vendas no retalho em lojas e supermercados como o consumo em bares e restaurantes globalmente, de acordo com o relatório Statista Market Forecast.',
      sourceName: 'Statista Market Forecast — Bebidas Alcoólicas no Mundo',
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
  if (content.includes('global-alcohol-spending')) {
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
    console.log(`Successfully added alcohol translation to ${t.file}`);
  } else {
    console.log(`Could not find insertion point in ${t.file}`);
  }
});
console.log('All translations processed.');
