const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

const enItem = `    'economic-burden-of-tobacco': {
      title: 'Economic Burden of Tobacco',
      subtitle: 'The economic and medical cost of tobacco is $1.8 trillion USD annually worldwide',
      description:
        'The economic burden of tobacco is devastating, with a global cost of $1.8 trillion annually. This cost includes medical expenses, tobacco-related illnesses, and the effects of secondhand smoke, though when adding lost productivity, the cost doubles. The tobacco industry, which generates revenue of approximately $92 billion, faces a major lag in implementing tobacco taxes, limiting the capacity to prevent and reduce consumption.',
      sourceName: 'World Health Organization (WHO) — Tobacco Trends Report',
    },`;

const esItem = `    'economic-burden-of-tobacco': {
      title: 'La carga económica del tabaco',
      subtitle: 'El costo económico y médico del tabaco es de 1,8 billones de dólares anuales en el mundo',
      description:
        'La carga económica del tabaco es devastadora, con un costo global de 1,8 billones de dólares al año. Este costo incluye gastos médicos, enfermedades relacionadas y efectos del humo de segunda mano, aunque al sumar la pérdida de productividad, el costo se duplica. La industria del tabaco, que genera ingresos de aproximadamente 92 mil millones de dólares, enfrenta un grave de rezago en la implementación de impuestos al tabaco, lo que limita su capacidad para prevenir y reducir el consumo.',
      sourceName: 'Organización Mundial de la Salud (OMS) — Informe de Tendencias del Tabaco',
    },`;

const frItem = `    'economic-burden-of-tobacco': {
      title: 'Le fardeau économique du tabac',
      subtitle: 'Le coût économique et médical du tabac s\\\'élève à 1,8 billion de dollars par an dans le monde',
      description:
        'Le fardeau économique du tabac est dévastateur, avec un coût mondial de 1,8 billion de dollars par an. Ce coût comprend les dépenses médicales, les maladies liées au tabac et les effets du tabagisme passif, bien qu\\\'en ajoutant la perte de productivité, ce coût soit doublé. L\\\'industrie du tabac, qui génère des revenus d\\\'environ 92 milliards de dollars, fait face à un retard important dans la mise en œuvre des taxes sur le tabac, limitant sa capacité à prévenir et à réduire la consommation.',
      sourceName: 'Organisation mondiale de la santé (OMS) — Rapport sur les tendances du tabac',
    },`;

const deItem = `    'economic-burden-of-tobacco': {
      title: 'Wirtschaftliche Belastung durch Tabak',
      subtitle: 'Die wirtschaftlichen und gesundheitlichen Kosten von Tabak belaufen sich weltweit auf 1,8 Billionen USD jährlich',
      description:
        'Die wirtschaftliche Belastung durch Tabak ist verheerend und verursacht weltweit Kosten von 1,8 Billionen US-Dollar pro Jahr. Diese Kosten beinhalten medizinische Ausgaben, tabakbedingte Krankheiten und die Auswirkungen von Passivrauch, wobei sich die Kosten bei Berücksichtigung von Produktivitätsverlusten verdoppeln. Die Tabakindustrie, die einen Umsatz von rund 92 Milliarden Dollar erzielt, hinkt bei der Einführung von Tabaksteuern hinterher, was die Eindämmung des Konsums einschränkt.',
      sourceName: 'Weltgesundheitsorganisation (WHO) — Tabak-Trendbericht',
    },`;

const ptItem = `    'economic-burden-of-tobacco': {
      title: 'O fardo económico do tabaco',
      subtitle: 'O custo económico e médico do tabaco é de 1,8 biliões de dólares anuais no mundo',
      description:
        'O fardo económico do tabaco é devastador, com um custo global de 1,8 biliões de dólares por ano. Este custo inclui despesas médicas, doenças relacionadas e efeitos do fumo passivo, embora, ao somar a perda de produtividade, o custo duplique. A indústria do tabaco, que gera receitas de aproximadamente 92 mil milhões de dólares, enfrenta um grave atraso na aplicação de impostos sobre o tabaco, o que limita a sua capacidade de prevenir e reduzir o consumo.',
      sourceName: 'Organização Mundial da Saúde (OMS) — Relatório de Tendências do Tabaco',
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
  if (content.includes('economic-burden-of-tobacco')) {
    console.log(`Already exists in ${t.file}`);
    return;
  }
  
  // Find the closing of 'global-cosmetic-surgery-spending' block
  // which is:
  //     },
  //   },
  // };
  // or variations with different CRLF endings.
  // We can split by line, find where 'global-cosmetic-surgery-spending' ends, and insert our item before the closing of the items object.
  const lines = content.split(/\r?\n/);
  let insertIndex = -1;
  
  // Search from the end of the file
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '},' && i < lines.length - 2) {
      // Check if it's the end of the cosmetic surgery block
      if (lines[i+1].trim() === '},' && (lines[i+2].trim() === '};' || lines[i+2].trim() === '};')) {
        insertIndex = i + 1; // Insert before the items closing brace
        break;
      }
    }
  }
  
  if (insertIndex !== -1) {
    lines.splice(insertIndex, 0, t.item);
    fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
    console.log(`Successfully added tobacco translation to ${t.file}`);
  } else {
    console.log(`Could not find insertion point in ${t.file}`);
  }
});
console.log('All translations processed.');
