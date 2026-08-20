const fs = require('fs');
const path = require('path');

const dir = 'data/translations';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

const newCategories = {
  es: `  categories: {
    all: { name: 'Todos los Gastos', description: 'Panorama financiero global completo en tiempo real' },
    entertainment: { name: 'Entretenimiento y Marcas', description: 'Deportes, streaming, videojuegos y grandes marcas globales' },
    government: { name: 'Gobierno y Sector Público', description: 'Presupuestos públicos, ayudas, exploración espacial y ministerios' },
    health: { name: 'Salud y Bienestar', description: 'Sanidad pública, salud, tabaco y procedimientos médicos' },
    food: { name: 'Alimentación y Coste de Vida', description: 'Gasto en comida, coste de la vida y consumo cotidiano' },
    illicit: { name: 'Mercado Negro e Ilícito', description: 'Economía criminal, ciberdelincuencia, drogas y tráfico' },
    military: { name: 'Defensa y Armamento', description: 'Gasto militar global, armamento, ejércitos y programas de defensa' },
    'country-gdp': { name: 'PIB por Países', description: 'Producto Interior Bruto (PIB nominal) de los países en tiempo real' },
  },`,
  en: `  categories: {
    all: { name: 'All Expenditures', description: 'Complete real-time global financial overview' },
    entertainment: { name: 'Entertainment & Brands', description: 'Sports, streaming, video games, and global brands' },
    government: { name: 'Government & Public Sector', description: 'Public budgets, aid, space exploration, and ministries' },
    health: { name: 'Health & Wellness', description: 'Public health, tobacco, and medical procedures' },
    food: { name: 'Food & Cost of Living', description: 'Food expenditure, cost of living, and daily consumption' },
    illicit: { name: 'Black Market & Illicit', description: 'Criminal economy, cybercrime, drugs, and trafficking' },
    military: { name: 'Defense & Military', description: 'Global military spending, weaponry, armies, and defense programs' },
    'country-gdp': { name: 'GDP by Country', description: 'Gross Domestic Product (nominal GDP) of countries in real-time' },
  },`,
  fr: `  categories: {
    all: { name: 'Toutes les Dépenses', description: 'Aperçu financier mondial complet en temps réel' },
    entertainment: { name: 'Divertissement et Marques', description: 'Sports, streaming, jeux vidéo et grandes marques mondiales' },
    government: { name: 'Gouvernement et Secteur Public', description: 'Budgets publics, aides, exploration spatiale et ministères' },
    health: { name: 'Santé et Bien-être', description: 'Santé publique, tabac et procédures médicales' },
    food: { name: 'Alimentation et Coût de la Vie', description: 'Dépenses alimentaires, coût de la vie et consommation quotidienne' },
    illicit: { name: 'Marché Noir et Illicite', description: 'Économie criminelle, cybercriminalité, drogues et trafic' },
    military: { name: 'Défense et Militaire', description: 'Dépenses militaires mondiales, armement, armées et programmes de défense' },
    'country-gdp': { name: 'PIB par Pays', description: 'Produit Intérieur Brut (PIB nominal) des pays en temps réel' },
  },`,
  de: `  categories: {
    all: { name: 'Alle Ausgaben', description: 'Kompletter globaler Finanzüberblick in Echtzeit' },
    entertainment: { name: 'Unterhaltung und Marken', description: 'Sport, Streaming, Videospiele und globale Marken' },
    government: { name: 'Regierung und Öffentlicher Sektor', description: 'Öffentliche Haushalte, Hilfen, Weltraumforschung und Ministerien' },
    health: { name: 'Gesundheit und Wellness', description: 'Öffentliche Gesundheit, Tabak und medizinische Eingriffe' },
    food: { name: 'Essen und Lebenshaltungskosten', description: 'Lebensmittelausgaben, Lebenshaltungskosten und täglicher Konsum' },
    illicit: { name: 'Schwarzmarkt und Illegales', description: 'Kriminelle Wirtschaft, Cyberkriminalität, Drogen und Schmuggel' },
    military: { name: 'Verteidigung und Militär', description: 'Globale Militärausgaben, Waffen, Armeen und Verteidigungsprogramme' },
    'country-gdp': { name: 'BIP nach Ländern', description: 'Bruttoinlandsprodukt (nominales BIP) der Länder in Echtzeit' },
  },`,
  pt: `  categories: {
    all: { name: 'Todos os Gastos', description: 'Visão geral financeira global completa em tempo real' },
    entertainment: { name: 'Entretenimento e Marcas', description: 'Esportes, streaming, videogames e marcas globais' },
    government: { name: 'Governo e Setor Público', description: 'Orçamentos públicos, ajudas, exploração espacial e ministérios' },
    health: { name: 'Saúde e Bem-estar', description: 'Saúde pública, tabaco e procedimentos médicos' },
    food: { name: 'Alimentação e Custo de Vida', description: 'Gastos com alimentação, custo de vida e consumo diário' },
    illicit: { name: 'Mercado Negro e Ilícito', description: 'Economia criminosa, crimes cibernéticos, drogas e tráfico' },
    military: { name: 'Defesa e Forças Armadas', description: 'Gastos militares globais, armamento, exércitos e programas de defesa' },
    'country-gdp': { name: 'PIB por País', description: 'Produto Interno Bruto (PIB nominal) dos países em tempo real' },
  },`,
};

for (const file of files) {
  const lang = path.basename(file, '.ts');
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Find the 'categories: {' block and replace it up to the next '},' at the root level of the translation object
  // Since categories is typically just a block of sub-objects, we can replace it with a regex
  // A simple way is to find 'categories: {' and replace everything up to the next root-level key or the end of the object.
  // Actually, let's use a regex that matches `categories: { ... },\n  items:` or similar.
  const regex = /categories:\s*\{[\s\S]*?\},[\s\n]*items:/;
  if (regex.test(content) && newCategories[lang]) {
    content = content.replace(regex, newCategories[lang] + '\n  items:');
    fs.writeFileSync(filepath, content);
  } else {
    console.log("Could not match regex in", file);
  }
}
