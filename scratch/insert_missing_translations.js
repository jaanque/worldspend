const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/PRO/Desktop/worldspend';

const frItems = `    'spain-individual-monthly-food-cost': {
      title: 'Dépenses Mensuelles de Nourriture par Personne en Espagne',
      subtitle: 'Une personne dépense en moyenne entre 250 € et 300 € par mois en alimentation en Espagne',
      description: 'Dépenses d\\\'alimentation et panier de courses moyen pour un célibataire en Espagne, s\\\'élevant à environ 270 € par mois (3 240 € par an).',
      sourceName: 'CaixaBank Research — Dépenses de consommation des ménages en Espagne',
    },
    'global-cocaine-opioids-spending': {
      title: 'Dépenses des Consommateurs en Cocaïne et Opioïdes',
      subtitle: 'Les usagers dépensent plus de 245 milliards de dollars par an en cocaïne et opiacés',
      description: 'Dépenses globales des consommateurs sur le marché illicite de la cocaïne et des opioïdes synthétiques, constituant la part la plus lucrative du trafic de drogue selon l\\\'ONUDC.',
      sourceName: 'Office des Nations Unies contre la drogue et le crime (ONUDC)',
    },
    'global-illicit-firearms-spending': {
      title: 'Dépenses dans le Trafic Illicite d\\\'Armes à Feu',
      subtitle: 'Le marché noir des armes à feu représente environ 1 milliard de dollars par an',
      description: 'Dépenses mondiales des acheteurs sur le marché noir des armes à feu et des munitions légères illicites, alimentant les conflits et la criminalité organisée.',
      sourceName: 'Rapport de l\\\'ONUDC sur le trafic d\\\'armes et Small Arms Survey',
    },
    'global-cybercrime-losses': {
      title: 'Coût et Dommages de la Cybercriminalité',
      subtitle: 'Les pertes dues aux cyberattaques, vols de données et fraudes atteignent 10,8 billions de dollars par an',
      description: 'Dépenses mondiales en rançons, nettoyage de systèmes et pertes directes des entreprises et particuliers liées aux activités cybercriminelles.',
      sourceName: 'Cybersecurity Ventures & Rapports Annuels sur la Cybercriminalité',
    },
    'global-ransomware-damages': {
      title: 'Coût des Attaques par Ransomware',
      subtitle: 'Les entreprises et utilisateurs dépensent plus de 74 milliards de dollars par an en rançons et réparations',
      description: 'Frais totaux supportés par les victimes de ransomware, y compris les rançons versées en cryptomonnaies et le coût des temps d\\\'arrêt opérationnels.',
      sourceName: 'Chainalysis & Cybersecurity Ventures',
    },
    'global-money-laundering-total': {
      title: 'Coût et Flux du Blanchiment d\\\'Argent',
      subtitle: 'Le volume d\\\'argent blanchi chaque année est estimé à 2,17 billions de dollars',
      description: 'Montant des fonds d\\\'origine criminelle réintégrés dans l\\\'économie légale, représentant environ 2 à 5 % du PIB mondial selon l\\\'ONUDC.',
      sourceName: 'Office des Nations Unies contre la drogue et le crime (ONUDC)',
    },
    'global-black-market-economy': {
      title: 'Économie Informelle du Marché Noir',
      subtitle: 'Les transactions au marché noir et l\\\'économie souterraine atteignent 11,5 billions de dollars par an',
      description: 'Valeur totale de l\\\'économie parallèle non déclarée, comprenant le commerce d\\\'articles de contrefaçon, le travail non déclaré et les transactions illégales.',
      sourceName: 'Études sur l\\\'économie informelle de la Banque Mondiale',
    },
    'eu-defense-spending-total': {
      title: 'Dépenses Militaires Conjointes de l\\\'Union Européenne',
      subtitle: 'Les pays de l\\\'Union européenne dépensent ensemble 494 milliards d\\\'euros par an en défense',
      description: 'Dépenses militaires cumulées des 27 États membres de l\\\'Union européenne, stimulées par la modernisation des forces armées et les objectifs de l\\\'OTAN.',
      sourceName: 'Agence Européenne de Défense (AED) & Rapports de l\\\'OTAN',
    },
    'global-military-aircraft-market': {
      title: 'Dépenses en Aviation Militaire et Chasseurs',
      subtitle: 'Les gouvernements dépensent 67 milliards de dollars par an dans l\\\'acquisition et la maintenance d\\\'avions militaires',
      description: 'Budget mondial dépensé par les armées de l\\\'air pour l\\\'achat et la mise à niveau de jets de combat, d\\\'avions de transport et d\\\'hélicoptères de combat.',
      sourceName: 'Statista & Reports and Data Aerospace',
    },
    'netflix-annual-revenue': {
      title: 'Dépenses des Utilisateurs sur Netflix',
      subtitle: 'Les abonnés dépensent plus de 45,2 milliards de dollars par an en abonnements Netflix',
      description: 'Dépenses totales des abonnés à l\\\'échelle mondiale pour l\\\'accès au catalogue de streaming de Netflix, constituant la totalité du segment direct de l\\\'entreprise.',
      sourceName: 'Lettre aux actionnaires de Netflix (Rapport Financier Annuel)',
    },
    'amazon-prime-subscription-revenue': {
      title: 'Dépenses des Utilisateurs sur Amazon Prime',
      subtitle: 'Les utilisateurs dépensent environ 49,6 milliards de dollars par an en abonnements Prime',
      description: 'Total des cotisations d\\\'abonnement versées par les utilisateurs d\\\'Amazon Prime pour les services de livraison rapide et Prime Video selon les rapports financiers.',
      sourceName: 'Rapport Annuel d\\\'Amazon (Form 10-K SEC)',
    },
    'disney-dtc-streaming-revenue': {
      title: 'Dépenses des Utilisateurs sur le Streaming Disney (DTC)',
      subtitle: 'Les utilisateurs dépensent environ 23,5 milliards de dollars par an sur Disney+, Hulu et ESPN+',
      description: 'Dépenses des consommateurs pour les services d\\\'abonnement direct (DTC) de la Walt Disney Company, y compris Disney+, Hulu et ESPN+.',
      sourceName: 'The Walt Disney Company — Rapports Financiers Annuels',
    },
    'warner-bros-discovery-max-revenue': {
      title: 'Dépenses des Utilisateurs sur Max (HBO)',
      subtitle: 'Les abonnés dépensent 10,5 milliards de dollars par an en abonnements de streaming sur Max',
      description: 'Dépenses des clients pour les abonnements de streaming de Warner Bros. Discovery (propriétaire de HBO/Max) dans sa division mondiale DTC.',
      sourceName: 'Señal News — Rapport de Warner Bros. Discovery',
    },
    'twitch-annual-revenue': {
      title: 'Dépenses des Utilisateurs sur Twitch',
      subtitle: 'Les utilisateurs dépensent environ 1,85 milliard de dollars par an en abonnements et dons',
      description: 'Dépenses des utilisateurs sur Twitch via les abonnements aux chaînes, l\\\'achat de Bits, les abonnements offerts et le soutien direct aux streamers.',
      sourceName: 'Business of Apps — Statistiques de revenus de Twitch',
    },`;

const deItems = `    'spain-individual-monthly-food-cost': {
      title: 'Monatliche Lebensmittelausgaben pro Person in Spanien',
      subtitle: 'Eine Person gibt in Spanien durchschnittlich 250 € bis 300 € pro Monat für Lebensmittel aus',
      description: 'Durchschnittliche Ausgaben für Lebensmittel und Einkäufe für einen Single-Haushalt in Spanien, die sich auf etwa 270 € pro Monat (3.240 € pro Jahr) belaufen.',
      sourceName: 'CaixaBank Research — Konsumausgaben der Haushalte in Spanien',
    },
    'global-cocaine-opioids-spending': {
      title: 'Verbraucherausgaben für Kokain und Opioide',
      subtitle: 'Konsumenten geben jährlich über 245 Milliarden Dollar für Kokain und Opiate aus',
      description: 'Weltweite Verbraucherausgaben auf dem illegalen Markt für Kokain und synthetische Opioide, die laut UNODC den lukrativsten Teil des globalen Drogenhandels ausmachen.',
      sourceName: 'Büro der Vereinten Nationen für Drogen- und Kriminalitätsbekämpfung (UNODC)',
    },
    'global-illicit-firearms-spending': {
      title: 'Ausgaben für illegalen Schusswaffenhandel',
      subtitle: 'Der Schwarzmarkt für Schusswaffen beläuft sich auf rund 1 Milliarde Dollar jährlich',
      description: 'Weltweite Ausgaben von Käufern auf dem Schwarzmarkt für illegale Handfeuerwaffen und Munition, die laut UNODC und Small Arms Survey Konflikte und organisierte Kriminalität finanzieren.',
      sourceName: 'UNODC-Bericht über Waffenhandel & Small Arms Survey',
    },
    'global-cybercrime-losses': {
      title: 'Kosten und Schäden durch Cyberkriminalität',
      subtitle: 'Die Verluste durch Cyberangriffe, Datendiebstahl und Betrug belaufen sich auf 10,8 Billionen USD jährlich',
      description: 'Weltweite Schäden und Kosten durch Cyberangriffe, Lösegelderpressungen, Datenraub und Systemwiederherstellung für Unternehmen und Verbraucher.',
      sourceName: 'Cybersecurity Ventures & Berichte zur Cyberkriminalität',
    },
    'global-ransomware-damages': {
      title: 'Kosten durch Ransomware-Angriffe',
      subtitle: 'Unternehmen und Opfer zahlen jährlich über 74 Milliarden Dollar für Lösegelder und Systemwiederherstellung',
      description: 'Gesamtschäden durch Ransomware, einschließlich gezahlter Lösegelder in Kryptowährungen und Ausfallkosten der betroffenen Infrastrukturen.',
      sourceName: 'Chainalysis & Cybersecurity Ventures',
    },
    'global-money-laundering-total': {
      title: 'Kosten und Volumen der Geldwäsche',
      subtitle: 'Das jährlich gewaschene Geldvolumen beläuft sich auf schätzungsweise 2,17 Billionen Dollar',
      description: 'Volumen krimineller Gelder, die in den legalen Wirtschaftskreislauf eingeschleust werden, was etwa 2 bis 5 % des weltweiten BIP ausmacht.',
      sourceName: 'Büro der Vereinten Nationen für Drogen- und Kriminalitätsbekämpfung (UNODC)',
    },
    'global-black-market-economy': {
      title: 'Informelle Schattenwirtschaft und Schwarzmarkt',
      subtitle: 'Die Schattenwirtschaft und Schwarzmarkttransaktionen belaufen sich auf jährlich 11,5 Billionen USD',
      description: 'Gesamtwert der nicht erfassten Schattenwirtschaft, einschließlich Schwarzarbeit, Produktpiraterie und illegaler Schwarzmarktgeschäfte.',
      sourceName: 'Schattenwirtschaftsstudien der Weltbank',
    },
    'eu-defense-spending-total': {
      title: 'Gemeinsame Verteidigungsausgaben der Europäischen Union',
      subtitle: 'Die EU-Mitgliedstaaten geben gemeinsam jährlich 494 Milliarden Euro für Verteidigung aus',
      description: 'Verteidigungsausgaben aller 27 EU-Mitgliedstaaten, getrieben durch Rüstungsmodernisierung und die Erfüllung von NATO-Zielen.',
      sourceName: 'Europäische Verteidigungsagentur (EDA) & NATO-Berichte',
    },
    'global-military-aircraft-market': {
      title: 'Ausgaben für Militärflugzeuge und Kampfjets',
      subtitle: 'Regierungen geben jährlich 67 Milliarden Dollar für Militärluftfahrt und deren Instandhaltung aus',
      description: 'Weltweite staatliche Ausgaben für den Kauf und die Wartung von Jagdflugzeugen, Militärtransportern und Kampfhubschraubern.',
      sourceName: 'Statista & Reports and Data Aerospace',
    },
    'netflix-annual-revenue': {
      title: 'Verbraucherausgaben für Netflix',
      subtitle: 'Abonnenten zahlen jährlich über 45,2 Milliarden Dollar für Netflix-Mitgliedschaften',
      description: 'Gesamtausgaben aller weltweiten Abonnenten für den Zugriff auf den Netflix-Streamingkatalog laut dem offiziellen Geschäftsbericht.',
      sourceName: 'Netflix Aktionärsbrief (Jahresfinanzbericht)',
    },
    'amazon-prime-subscription-revenue': {
      title: 'Verbraucherausgaben für Amazon Prime',
      subtitle: 'Mitglieder zahlen jährlich rund 49,6 Milliarden Dollar für Amazon Prime-Abonnements',
      description: 'Gesamte jährliche Mitgliedsbeiträge, die weltweit von Amazon Prime-Kunden für schnellen Versand und Prime Video gezahlt werden.',
      sourceName: 'Amazon Geschäftsbericht (Form 10-K SEC)',
    },
    'disney-dtc-streaming-revenue': {
      title: 'Verbraucherausgaben für Disney Streaming (DTC)',
      subtitle: 'Kunden geben jährlich rund 23,5 Milliarden Dollar für Disney+, Hulu und ESPN+ aus',
      description: 'Gesamte Abonnementsgebühren, die weltweit für die Streamingdienste der Walt Disney Company (Disney+, Hulu und ESPN+) ausgegeben werden.',
      sourceName: 'The Walt Disney Company — Jahresfinanzberichte',
    },
    'warner-bros-discovery-max-revenue': {
      title: 'Verbraucherausgaben für Max (HBO)',
      subtitle: 'Abonnenten zahlen jährlich 10,5 Milliarden Dollar für Streaming-Abonnements auf Max',
      description: 'Ausgaben der Abonnenten für den Streamingdienst Max von Warner Bros. Discovery (Eigentümer von HBO/Max) in deren globaler DTC-Sparte.',
      sourceName: 'Señal News — Warner Bros. Discovery Finanzbericht',
    },
    'twitch-annual-revenue': {
      title: 'Verbraucherausgaben für Twitch',
      subtitle: 'Zuschauer geben jährlich rund 1,85 Milliarden Dollar für Abonnements und Spenden aus',
      description: 'Ausgaben der Zuschauer auf Twitch für Kanal-Abonnements, Bits (Spenden) und Geschenkabonnements laut Business of Apps.',
      sourceName: 'Business of Apps — Twitch Umsatzstatistiken',
    },`;

const ptItems = `    'spain-individual-monthly-food-cost': {
      title: 'Gasto Mensual em Alimentação por Pessoa na Espanha',
      subtitle: 'Uma pessoa gasta em média entre 250 € e 300 € por mês em alimentação na Espanha',
      description: 'Despesas médias com alimentação e cesta de compras para uma pessoa residente na Espanha, estimadas em cerca de 270 € mensais (3.240 € por ano).',
      sourceName: 'CaixaBank Research — Despesas de consumo das famílias na Espanha',
    },
    'global-cocaine-opioids-spending': {
      title: 'Gastos de Consumidores em Cocaína e Opioides',
      subtitle: 'Os utilizadores gastam mais de 245 mil milhões de dólares por ano em cocaína e opiáceos',
      description: 'Despesas globais dos consumidores no mercado ilícito de cocaína e opioides sintéticos, representando a maior fatia do tráfico de drogas segundo o UNODC.',
      sourceName: 'Escritório das Nações Unidas sobre Drogas e Crime (UNODC)',
    },
    'global-illicit-firearms-spending': {
      title: 'Gastos com Tráfico Ilegal de Armas de Fogo',
      subtitle: 'O mercado negro de armas de fogo movimenta cerca de 1 mil milhão de dólares por ano',
      description: 'Despesas globais de compradores no mercado negro de armas de fogo e munições ilícitas, alimentando conflitos e o crime organizado.',
      sourceName: 'Relatório do UNODC sobre Tráfico de Armas & Small Arms Survey',
    },
    'global-cybercrime-losses': {
      title: 'Custo e Danos do Cibercrime',
      subtitle: 'As perdas decorrentes de ciberataques, roubo de dados e fraudes atingem 10,8 biliões de dólares por ano',
      description: 'Despesas globais em resgates, restauro de sistemas e perdas diretas de empresas e cidadãos com atividades cibercriminosas.',
      sourceName: 'Cybersecurity Ventures & Relatórios Anuais de Cibercrime',
    },
    'global-ransomware-damages': {
      title: 'Custo de Ataques de Ransomware',
      subtitle: 'Empresas e utilizadores gastam mais de 74 mil milhões de dólares anuais em resgates e reparações',
      description: 'Custos totais suportados por vítimas de ransomware, incluindo os resgates pagos em criptomoedas e o custo da paragem de atividade.',
      sourceName: 'Chainalysis & Cybersecurity Ventures',
    },
    'global-money-laundering-total': {
      title: 'Custo e Volume de Branqueamento de Capitais',
      subtitle: 'O volume de dinheiro branqueado anualmente é estimado em 2,17 biliões de dólares',
      description: 'Montante de fundos obtidos de forma ilícita integrados na economia formal, representando entre 2% a 5% do PIB mundial.',
      sourceName: 'Escritório das Nações Unidas sobre Drogas e Crime (UNODC)',
    },
    'global-black-market-economy': {
      title: 'Economia Informal do Mercado Negro',
      subtitle: 'As transações no mercado negro e economia paralela atingem 11,5 biliões de dólares por ano',
      description: 'Valor total estimado da economia paralela não declarada, incluindo contrabando, contrafação, trabalho não declarado e negócios ilícitos.',
      sourceName: 'Estudos sobre a economia informal do Banco Mundial',
    },
    'eu-defense-spending-total': {
      title: 'Despesas Militares Conjuntas da União Europeia',
      subtitle: 'Os estados-membros da União Europeia gastam em conjunto 494 mil milhões de euros anuais em defesa',
      description: 'Gastos de defesa acumulados das 27 nações da UE, impulsionados pela modernização militar e metas da NATO.',
      sourceName: 'Agência Europeia de Defesa (AED) & Relatórios da NATO',
    },
    'global-military-aircraft-market': {
      title: 'Gastos com Aviação Militar e Caças',
      subtitle: 'Os governos gastam 67 mil milhões de dólares anuais na aquisição e manutenção de aeronaves militares',
      description: 'Orçamento global despendido por forças aéreas para aquisição de jatos de combate, aviões de carga e helicópteros táticos.',
      sourceName: 'Statista & Reports and Data Aerospace',
    },
    'netflix-annual-revenue': {
      title: 'Gastos de Utilizadores na Netflix',
      subtitle: 'Os subscritores gastam mais de 45,2 mil milhões de dólares por ano em mensalidades da Netflix',
      description: 'Gastos globais dos subscritores para aceder ao catálogo de streaming de vídeo da Netflix, representando o volume direto da empresa.',
      sourceName: 'Carta aos Acionistas da Netflix (Relatório Financeiro Anual)',
    },
    'amazon-prime-subscription-revenue': {
      title: 'Gastos de Utilizadores no Amazon Prime',
      subtitle: 'Os utilizadores gastam cerca de 49,6 mil milhões de dólares anuais em assinaturas Prime',
      description: 'Montante anual pago pelos membros do serviço Amazon Prime para entregas grátis e acesso ao Prime Video, segundo os relatórios de contas da empresa.',
      sourceName: 'Relatório Anual da Amazon (Form 10-K SEC)',
    },
    'disney-dtc-streaming-revenue': {
      title: 'Gastos de Utilizadores em Streaming da Disney (DTC)',
      subtitle: 'Os utilizadores gastam cerca de 23,5 mil milhões de dólares anuais no Disney+, Hulu e ESPN+',
      description: 'Gastos diretos dos consumidores nos serviços de streaming direto ao consumidor (DTC) da Walt Disney Company, incluindo Disney+, Hulu e ESPN+.',
      sourceName: 'The Walt Disney Company — Relatório Financeiro de Contas',
    },
    'warner-bros-discovery-max-revenue': {
      title: 'Gastos de Utilizadores na Max (HBO)',
      subtitle: 'Os assinantes gastam 10,5 mil milhões de dólares anuais em subscrições de streaming na Max',
      description: 'Gasto anual de subscritores para acesso à plataforma de streaming Max da Warner Bros. Discovery (proprietária da HBO), de acordo com os dados da Señal News.',
      sourceName: 'Señal News — Relatório Financeiro da Warner Bros. Discovery',
    },
    'twitch-annual-revenue': {
      title: 'Gastos de Utilizadores na Twitch',
      subtitle: 'Os utilizadores gastam cerca de 1,85 mil milhões de dólares anuais em assinaturas e doações',
      description: 'Gastos globais dos espetadores na Twitch através de subscrições de canais, bits (doações) e subscrições oferecidas.',
      sourceName: 'Business of Apps — Estatísticas de Receita da Twitch',
    },`;

const targets = [
  { file: 'data/translations/fr.ts', items: frItems },
  { file: 'data/translations/de.ts', items: deItems },
  { file: 'data/translations/pt.ts', items: ptItems }
];

targets.forEach(t => {
  const filePath = path.join(projectRoot, t.file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
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
    lines.splice(insertIndex, 0, t.items);
    fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
    console.log(`Successfully added missing translations to ${t.file}`);
  } else {
    console.log(`Could not find insertion point in ${t.file}`);
  }
});
console.log('All missing translations inserted.');
