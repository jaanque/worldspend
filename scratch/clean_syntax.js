const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';
const esFile = path.join(projectRoot, 'data/translations/es.ts');
const enFile = path.join(projectRoot, 'data/translations/en.ts');

// 1. Clean up duplicate properties inside us-federal-mandatory-spending-entitlements in es.ts
if (fs.existsSync(esFile)) {
  let content = fs.readFileSync(esFile, 'utf8');
  const targetPattern = /'us-federal-mandatory-spending-entitlements': \{\s*title: 'Gasto Obligatorio Federal de EE\.UU\. \(Seguridad Social y Medicare\)',\s*subtitle: 'Desembolsos fijados por ley en Social Security, Medicare, Medicaid e intereses de deuda \(~\$131\.595\/s\)',\s*description:\s*'Gasto federal obligatorio y prestaciones sociales en Estados Unidos financiado por impuestos de nómina según la CBO\.',\s*sourceName: 'Congressional Budget Office \(CBO\) & US Treasury',\s*subtitle: 'Volumen anual de compras y cargos con tarjeta de crédito de consumidores en EE\.UU\. \(Visa, Mastercard, Amex\)',\s*description:\s*'Volumen bruto anual de compras con tarjetas de crédito de los estadounidenses según la Reserva Federal \(Fed G\.19\) y Nilson\.',\s*sourceName: 'Federal Reserve Board \(Consumer Credit G\.19\) & Nilson Report',\s*\}/;
  
  const cleanReplacement = `'us-federal-mandatory-spending-entitlements': {
      title: 'Gasto Obligatorio Federal de EE.UU. (Seguridad Social y Medicare)',
      subtitle: 'Desembolsos fijados por ley en Social Security, Medicare, Medicaid e intereses de deuda (~$131.595/s)',
      description:
        'Gasto federal obligatorio y prestaciones sociales en Estados Unidos financiado por impuestos de nómina según la CBO.',
      sourceName: 'Congressional Budget Office (CBO) & US Treasury',
    }`;
    
  // Let's do a more robust regex or split/replace if regex is too strict with newlines.
  const lines = content.split(/\r?\n/);
  let startIndex = -1;
  let endIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("'us-federal-mandatory-spending-entitlements': {")) {
      startIndex = i;
    }
    if (startIndex !== -1 && lines[i].trim() === '},' && i > startIndex) {
      // Find the second occurrence of }, or check if it matches the duplicate block
      // The block ends around line 1565.
      if (i - startIndex <= 12) {
        endIndex = i;
        break;
      }
    }
  }
  
  if (startIndex !== -1 && endIndex !== -1) {
    console.log(`Found duplicate block in es.ts from line ${startIndex + 1} to ${endIndex + 1}`);
    const replacementLines = [
      "    'us-federal-mandatory-spending-entitlements': {",
      "      title: 'Gasto Obligatorio Federal de EE.UU. (Seguridad Social y Medicare)',",
      "      subtitle: 'Desembolsos fijados por ley en Social Security, Medicare, Medicaid e intereses de deuda (~$131.595/s)',",
      "      description:",
      "        'Gasto federal obligatorio y prestaciones sociales en Estados Unidos financiado por impuestos de nómina según la CBO.',",
      "      sourceName: 'Congressional Budget Office (CBO) & US Treasury',",
      "    },"
    ];
    lines.splice(startIndex, endIndex - startIndex + 1, ...replacementLines);
    fs.writeFileSync(esFile, lines.join('\r\n'), 'utf8');
    console.log('Successfully cleaned up es.ts.');
  } else {
    console.log('Could not find duplicate block in es.ts.');
  }
}

// 2. Clean up duplicate braces in en.ts around line 485-490
if (fs.existsSync(enFile)) {
  let content = fs.readFileSync(enFile, 'utf8');
  const lines = content.split(/\r?\n/);
  let found = false;
  for (let i = 0; i < lines.length - 2; i++) {
    if (lines[i].trim() === '},' && lines[i+1].trim() === '},' && lines[i+2].trim() === '],') {
      console.log(`Found duplicate closing brace in en.ts at line ${i + 2}`);
      lines.splice(i+1, 1); // remove the extra },
      found = true;
      break;
    }
  }
  if (found) {
    fs.writeFileSync(enFile, lines.join('\r\n'), 'utf8');
    console.log('Successfully cleaned up en.ts.');
  } else {
    console.log('Could not find duplicate closing brace in en.ts.');
  }
}
