const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';
const files = [
  path.join(projectRoot, 'data/spendData.ts'),
  path.join(projectRoot, 'data/translations/en.ts'),
  path.join(projectRoot, 'data/translations/es.ts'),
  path.join(projectRoot, 'data/translations/fr.ts'),
  path.join(projectRoot, 'data/translations/de.ts'),
  path.join(projectRoot, 'data/translations/pt.ts')
];

const replacements = [
  // Spanish
  { from: /Ingresos Anuales de Netflix/g, to: 'Gasto de Usuarios en Suscripciones de Netflix' },
  { from: /Netflix ingresa alrededor de/g, to: 'Los usuarios de Netflix gastan alrededor de' },
  { from: /Ingresos por Suscripciones de Amazon Prime/g, to: 'Gasto en Suscripciones de Amazon Prime' },
  { from: /Ingresos por servicios de suscripción/g, to: 'Gasto en servicios de suscripción' },
  { from: /Ingresos de Disney por Streaming/g, to: 'Gasto de Usuarios en Disney Streaming' },
  { from: /The Walt Disney Company ingresa/g, to: 'Los usuarios de The Walt Disney Company gastan' },
  { from: /Ingresos de Warner Bros\. Discovery \(HBO\/Max\)/g, to: 'Gasto de Usuarios en Max (HBO)' },
  { from: /Warner Bros\. Discovery \(propietaria de HBO\/Max\) ingresa/g, to: 'Los abonados de Warner Bros. Discovery (propietaria de HBO/Max) gastan' },
  { from: /Ingresos Anuales de Twitch/g, to: 'Gasto de Usuarios en Twitch' },
  { from: /Twitch ingresa aproximadamente/g, to: 'Los usuarios y patrocinadores en Twitch gastan aproximadamente' },
  { from: /Recaudación Global de Taquilla de Cine/g, to: 'Gasto Global en Entradas de Cine' },
  { from: /La recaudación específica/g, to: 'El gasto específico' },
  { from: /Mercado Mundial de Aviación Militar/g, to: 'Gasto en Aviación Militar' },
  { from: /El mercado mundial de la aviación militar/g, to: 'El gasto mundial en aviación militar' },
  { from: /Mercado Mundial de Cocaína y Opiáceos/g, to: 'Gasto en Cocaína y Opiáceos' },
  { from: /El mercado ilegal global/g, to: 'El gasto ilegal global' },
  { from: /Tráfico Ilegal de Armas de Fuego/g, to: 'Gasto en Tráfico Ilegal de Armas de Fuego' },
  { from: /el comercio ilegal de armas mueve/g, to: 'los compradores gastan en el comercio ilegal de armas' },
  { from: /Venta minorista estimada/g, to: 'Gasto minorista estimado' },
  { from: /Facturación global/g, to: 'Gasto global' },
  { from: /Facturación anual/g, to: 'Gasto anual' },
  
  // English
  { from: /Netflix Annual Revenue/g, to: 'User Spending on Netflix Subscriptions' },
  { from: /Netflix generates approximately/g, to: 'Netflix users spend approximately' },
  { from: /Netflix generates around/g, to: 'Netflix users spend around' },
  { from: /Amazon Prime Subscription Revenue/g, to: 'User Spending on Amazon Prime Subscriptions' },
  { from: /Amazon Prime Global Subscription Revenue/g, to: 'User Spending on Amazon Prime Subscriptions' },
  { from: /subscription services segment generated/g, to: 'subscription services segment reached' },
  { from: /Disney Streaming \(DTC\) Revenue/g, to: 'User Spending on Disney Streaming (DTC)' },
  { from: /Disney Streaming Revenue/g, to: 'User Spending on Disney Streaming (DTC)' },
  { from: /The Walt Disney Company generates/g, to: 'Consumers spend' },
  { from: /Warner Bros\. Discovery \(HBO\/Max\) Revenue/g, to: 'User Spending on Max (HBO)' },
  { from: /Warner Bros\. Discovery \(owner of HBO\/Max\) generates/g, to: 'Subscribers of Warner Bros. Discovery (owner of HBO/Max) spend' },
  { from: /Twitch Annual Revenue/g, to: 'User Spending on Twitch' },
  { from: /Twitch generates approximately/g, to: 'Users and advertisers spend approximately' },
  { from: /Global Cinema Box Office Revenue/g, to: 'Global Spending on Cinema Tickets' },
  { from: /Cinema Box Office Revenue/g, to: 'Spending on Cinema Tickets' },
  { from: /cinema box office revenue stands/g, to: 'spending on cinema tickets stands' },
  { from: /theatrical exhibition business/g, to: 'theatrical box office spending' },
  { from: /Global Military Aircraft Market/g, to: 'Spending on Military Aircraft' },
  { from: /military aircraft market reaches/g, to: 'spending on military aircraft reaches' },
  { from: /Global Cocaine & Opioids Market/g, to: 'Spending on Cocaine & Opioids' },
  { from: /global illicit market for cocaine/g, to: 'global illicit spending on cocaine' },
  { from: /Illicit Firearms Trafficking/g, to: 'Spending on Illicit Firearms Trafficking' },
  { from: /illicit firearms trafficking generates/g, to: 'buyers spend approximately $1 billion annually on illicit firearms trafficking' },
  { from: /annual retail sales/g, to: 'annual retail spending' },
  { from: /annual global revenue/g, to: 'annual global spending' },
  { from: /annual subscription revenue/g, to: 'annual subscription spending' },

  // French
  { from: /Revenus Annuels de Netflix/g, to: 'Dépenses des Utilisateurs pour les Abonnements Netflix' },
  { from: /Netflix génère environ/g, to: 'Les utilisateurs de Netflix dépensent environ' },
  { from: /Revenus d'Abonnement Amazon Prime/g, to: 'Dépenses pour les Abonnements Amazon Prime' },
  { from: /généré par les services/g, to: 'dépensé pour les services' },
  { from: /Revenus de Disney par Streaming/g, to: 'Dépenses des Utilisateurs pour le Streaming Disney (DTC)' },
  { from: /The Walt Disney Company génère/g, to: 'Les consommateurs dépensent' },
  { from: /Revenus de Warner Bros\. Discovery \(HBO\/Max\)/g, to: 'Dépenses des Utilisateurs pour Max (HBO)' },
  { from: /génère environ 10/g, to: 'dépensent environ 10' },
  { from: /Revenus Annuels de Twitch/g, to: 'Dépenses des Utilisateurs sur Twitch' },
  { from: /Twitch génère environ/g, to: 'Les utilisateurs et annonceurs dépensent environ' },
  { from: /Revenus Mondiaux du Box-Office/g, to: 'Dépenses Mondiales en Billets de Cinéma' },
  { from: /Le chiffre d'affaires mondial/g, to: 'Les dépenses mondiales' },
  { from: /Marché Mondial de l'Aviation Militaire/g, to: 'Dépenses en Aviation Militaire' },
  { from: /atteint une valeur/g, to: 'atteignent des dépenses' },
  { from: /Marché Mondial de la Cocaïne/g, to: 'Dépenses en Cocaïne et Opiacés' },
  { from: /génère entre/g, to: 'représente des dépenses de' },
  { from: /Trafic Illicite d'Armes à Feu/g, to: "Dépenses pour le Trafic Illicite d'Armes à Feu" },
  { from: /le commerce illégal d'armes génère/g, to: "les acheteurs dépensent pour le commerce illégal d'armes" },

  // German
  { from: /Netflix Jahresumsatz/g, to: 'Nutzerausgaben für Netflix-Abonnements' },
  { from: /Netflix erwirtschaftet/g, to: 'Netflix-Nutzer geben' },
  { from: /Umsatz mit Amazon Prime/g, to: 'Ausgaben für Amazon Prime-Abonnements' },
  { from: /erwirtschaftet Amazon/g, to: 'geben Nutzer aus' },
  { from: /Disney Streaming-Umsatz/g, to: 'Nutzerausgaben für Disney-Streaming (DTC)' },
  { from: /The Walt Disney Company erzielt/g, to: 'Konsumenten geben' },
  { from: /Max-Streaming-Umsatz/g, to: 'Nutzerausgaben für Max (HBO)' },
  { from: /HBO\/Max\) erzielt/g, to: 'HBO/Max) geben Nutzer aus' },
  { from: /Twitch Jahresumsatz/g, to: 'Nutzerausgaben auf Twitch' },
  { from: /erwirtschaftet Twitch/g, to: 'geben Nutzer und Werbetreibende auf Twitch aus' },
  { from: /Globale Kino-Einspielergebnisse/g, to: 'Globale Ausgaben für Kinotickets' },
  { from: /Die weltweiten Kino-Einspielergebnisse/g, to: 'Die weltweiten Ausgaben für Kinotickets' },
  { from: /Weltmarkt für Militärluftfahrt/g, to: 'Ausgaben für Militärluftfahrt' },
  { from: /erreicht ein jährliches Volumen/g, to: 'erreicht jährliche Ausgaben' },
  { from: /Weltweiter illegaler Kokain-/g, to: 'Ausgaben für illegalen Kokain-' },
  { from: /erwirtschaftet auf/g, to: 'beläuft sich auf Ausgaben von' },
  { from: /Illegaler Waffenhandel/g, to: 'Ausgaben für illegalen Waffenhandel' },
  { from: /generiert der illegale/g, to: 'geben Käufer für den illegalen' },

  // Portuguese
  { from: /Receita Anual da Netflix/g, to: 'Gastos dos Usuários em Assinaturas da Netflix' },
  { from: /A Netflix gera cerca/g, to: 'Os usuários da Netflix gastam cerca' },
  { from: /Receita de Assinatura do Amazon Prime/g, to: 'Gastos em Assinaturas do Amazon Prime' },
  { from: /gerada por serviços/g, to: 'gasta em serviços' },
  { from: /Receita de Streaming da Disney/g, to: 'Gastos dos Usuários em Streaming da Disney (DTC)' },
  { from: /The Walt Disney Company gera/g, to: 'Os consumidores gastam' },
  { from: /Receita da Warner Bros\. Discovery \(HBO\/Max\)/g, to: 'Gastos dos Usuários em Max (HBO)' },
  { from: /gera cerca de 10/g, to: 'gastam cerca de 10' },
  { from: /Receita Anual da Twitch/g, to: 'Gastos dos Usuários na Twitch' },
  { from: /A Twitch gera cerca/g, to: 'Os usuários e anunciantes na Twitch gastam cerca' },
  { from: /Bilheteria Global de Cinema/g, to: 'Gastos Globais em Ingressos de Cinema' },
  { from: /A receita global de bilheteria/g, to: 'O gasto global em bilheteria' },
  { from: /Mercado Global de Aviação Militar/g, to: 'Gastos em Aviação Militar' },
  { from: /atinge uma avaliação/g, to: 'atinge gastos' },
  { from: /Mercado Global de Cocaína/g, to: 'Gastos em Cocaína e Opiáceos' },
  { from: /gera entre/g, to: 'representa gastos de' },
  { from: /Tráfico Ilícito de Armas de Fogo/g, to: 'Gastos com Tráfico Ilícito de Armas de Fogo' },
  { from: /o comércio ilegal de armas movimenta/g, to: 'os compradores gastam com o comércio ilegal de armas' }
];

files.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`File not found: ${file}`);
    return;
  }
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  replacements.forEach(rep => {
    content = content.replace(rep.from, rep.to);
  });
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated file: ${file}`);
  } else {
    console.log(`No changes for: ${file}`);
  }
});
console.log('Finished processing replacements.');
