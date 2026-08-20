const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

const enItem = `    'global-space-exploration-spending': {
      title: 'Public Investment in Space Exploration',
      subtitle: 'Global public investment in space exploration reaches €119 billion annually',
      description:
        'The global budget for space exploration has shown significant growth in recent years. It is estimated that governments worldwide will make a global public investment in the space sector of €119 billion annually, driving lunar missions, satellites, and orbital technology.',
      sourceName: 'FasterCapital — Cost Challenge of Space Exploration',
    },`;

const esItem = `    'global-space-exploration-spending': {
      title: 'Inversión Pública en Exploración Espacial',
      subtitle: 'La inversión pública en exploración espacial alcanza los 119.000 millones de euros anuales en el mundo',
      description:
        'El presupuesto global para la exploración espacial ha mostrado un crecimiento significativo en los últimos años. Se estima que los gobiernos de todo el mundo realizarán una inversión pública global en el sector espacial de 119.000 millones de euros, impulsando misiones lunares, satélites y desarrollo tecnológico orbital.',
      sourceName: 'FasterCapital — Desafío de costos de la exploración espacial',
    },`;

const frItem = `    'global-space-exploration-spending': {
      title: 'Investissement Public dans l\\\'Exploration Spatiale',
      subtitle: 'L\\\'investissement public mondial dans l\\\'exploration spatiale atteint 119 milliards d\\\'euros par an',
      description:
        'Le budget mondial pour l\\\'exploration spatiale a affiché une croissance significative ces dernières années. Il est estimé que les gouvernements du monde entier réaliseront un investissement public de 119 milliards d\\\'euros par an dans le secteur spatial, soutenant les missions lunaires, les satellites et les technologies orbitales.',
      sourceName: 'FasterCapital — Le défi des coûts de l\\\'exploration spatiale',
    },`;

const deItem = `    'global-space-exploration-spending': {
      title: 'Öffentliche Investitionen in die Raumfahrt',
      subtitle: 'Die weltweiten öffentlichen Investitionen in die Weltraumforschung belaufen sich auf jährlich 119 Milliarden Euro',
      description:
        'Das weltweite Budget für die Weltraumforschung ist in den letzten Jahren erheblich gestiegen. Es wird geschätzt, dass die Regierungen weltweit jährlich 119 Milliarden Euro öffentlich in den Raumfahrtsektor investieren, was Mondmissionen, Satelliten und Orbit-Technologien vorantreibt.',
      sourceName: 'FasterCapital — Kostenherausforderung der Weltraumforschung',
    },`;

const ptItem = `    'global-space-exploration-spending': {
      title: 'Investimento Público em Exploração Espacial',
      subtitle: 'O investimento público global em exploração espacial atinge 119 mil milhões de euros anuais',
      description:
        'O orçamento global para a exploração espacial tem mostrado um crescimento significativo nos últimos anos. Estima-se que os governos de todo o mundo realizem um investimento público global no setor espacial de 119 mil milhões de euros por ano, impulsionando missões lunares, satélites e tecnologia de órbita.',
      sourceName: 'FasterCapital — Desafio de custos da exploração espacial',
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
  
  // If the key already exists, we will replace the whole block dynamically.
  // To be safe and clean, we can locate where "'global-space-exploration-spending': {" starts,
  // and replace up to its closing brace "},"
  const lines = content.split(/\r?\n/);
  let startIndex = -1;
  let endIndex = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("'global-space-exploration-spending': {")) {
      startIndex = i;
    }
    if (startIndex !== -1 && lines[i].trim() === '},' && i > startIndex && endIndex === -1) {
      // Find the closing of this key block
      endIndex = i;
    }
  }
  
  if (startIndex !== -1 && endIndex !== -1) {
    console.log(`Replacing existing space key in ${t.file} from line ${startIndex + 1} to ${endIndex + 1}`);
    lines.splice(startIndex, endIndex - startIndex + 1, t.item);
    fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
  } else {
    // Key doesn't exist, append it at the end of items object
    console.log(`Key does not exist in ${t.file}. Appending it.`);
    let insertIndex = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim() === '},' && i < lines.length - 2) {
        if (lines[i+1].trim() === '},' && lines[i+2].trim() === '};') {
          insertIndex = i + 1;
          break;
        }
      }
    }
    if (insertIndex !== -1) {
      lines.splice(insertIndex, 0, t.item);
      fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
      console.log(`Successfully appended to ${t.file}`);
    } else {
      console.log(`Could not find insertion point in ${t.file}`);
    }
  }
});
console.log('Finished updating space exploration translations.');
