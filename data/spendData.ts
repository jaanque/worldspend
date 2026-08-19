import { CategoryInfo, CurrencyConfig, CurrencyCode, SpendItem } from '@/types/spend';

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar (USD)',
    rateToUSD: 1.0,
    decimals: 2,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro (EUR)',
    rateToUSD: 0.92,
    decimals: 2,
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound (GBP)',
    rateToUSD: 0.78,
    decimals: 2,
  },
  JPY: {
    code: 'JPY',
    symbol: '¥',
    name: 'Japanese Yen (JPY)',
    rateToUSD: 154.5,
    decimals: 0,
  },
  BTC: {
    code: 'BTC',
    symbol: '₿',
    name: 'Bitcoin (BTC)',
    rateToUSD: 0.0000105,
    decimals: 6,
  },
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    name: 'All Expenditures',
    iconName: 'Globe',
    color: '#38bdf8',
    badgeBg: 'rgba(56, 189, 248, 0.12)',
    badgeBorder: 'rgba(56, 189, 248, 0.3)',
    description: 'Complete real-time global financial overview',
  },
  {
    id: 'government',
    name: 'Government & Public Budget',
    iconName: 'Landmark',
    color: '#3b82f6',
    badgeBg: 'rgba(59, 130, 246, 0.12)',
    badgeBorder: 'rgba(59, 130, 246, 0.3)',
    description: 'Public ministries, pensions, welfare benefits, and state administration',
  },
  {
    id: 'society',
    name: 'Family, Society & Lifestyle',
    iconName: 'Users',
    color: '#ec4899',
    badgeBg: 'rgba(236, 72, 153, 0.12)',
    badgeBorder: 'rgba(236, 72, 153, 0.3)',
    description: 'Child-rearing, weddings, baby care, and lifestyle milestones',
  },
  {
    id: 'food',
    name: 'Food & Household Groceries',
    iconName: 'Utensils',
    color: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(16, 185, 129, 0.3)',
    description: 'Monthly grocery spending, family alimentation, and supermarket costs',
  },
  {
    id: 'luxury',
    name: 'Media, Events & Aesthetics',
    iconName: 'Sparkles',
    color: '#8b5cf6',
    badgeBg: 'rgba(139, 92, 246, 0.12)',
    badgeBorder: 'rgba(139, 92, 246, 0.3)',
    description: 'Streaming mega-productions, public styling, and entertainment events',
  },
  {
    id: 'health',
    name: 'Healthcare & Public Health',
    iconName: 'HeartPulse',
    color: '#ef4444',
    badgeBg: 'rgba(239, 68, 68, 0.12)',
    badgeBorder: 'rgba(239, 68, 68, 0.3)',
    description: 'Global healthcare systems, pharmaceuticals, medical treatments, and public health',
  },
  {
    id: 'military',
    name: 'Military, Defense & Security',
    iconName: 'ShieldAlert',
    color: '#64748b',
    badgeBg: 'rgba(100, 116, 139, 0.12)',
    badgeBorder: 'rgba(100, 116, 139, 0.3)',
    description: 'Worldwide armed forces budgets, weapons procurement, and nuclear arsenals',
  },
  {
    id: 'tech',
    name: 'Technology, AI & Computing',
    iconName: 'Cpu',
    color: '#06b6d4',
    badgeBg: 'rgba(6, 182, 212, 0.12)',
    badgeBorder: 'rgba(6, 182, 212, 0.3)',
    description: 'Artificial intelligence compute, data centers, and advanced semiconductors',
  },
  {
    id: 'advertising',
    name: 'Advertising & Commercial Media',
    iconName: 'Megaphone',
    color: '#f59e0b',
    badgeBg: 'rgba(245, 158, 11, 0.12)',
    badgeBorder: 'rgba(245, 158, 11, 0.3)',
    description: 'Global digital advertising, TV commercials, and marketing campaigns',
  },
  {
    id: 'energy',
    name: 'Energy, Oil & Electricity',
    iconName: 'Zap',
    color: '#eab308',
    badgeBg: 'rgba(234, 179, 8, 0.12)',
    badgeBorder: 'rgba(234, 179, 8, 0.3)',
    description: 'Global electricity generation, crude oil consumption, and power grids',
  },
  {
    id: 'sports',
    name: 'Sports, Football & Tournaments',
    iconName: 'Trophy',
    color: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(16, 185, 129, 0.3)',
    description: 'Football transfer windows, club payrolls, player salaries, and international championships',
  },
  {
    id: 'illicit',
    name: 'Illicit Trade, Narcotics & Black Market',
    iconName: 'Skull',
    color: '#dc2626',
    badgeBg: 'rgba(220, 38, 38, 0.12)',
    badgeBorder: 'rgba(220, 38, 38, 0.3)',
    description: 'International narcotics trade, illegal arms smuggling, stolen art, and black markets',
  },
  {
    id: 'science',
    name: 'Science, Space & R&D',
    iconName: 'Atom',
    color: '#a855f7',
    badgeBg: 'rgba(168, 85, 247, 0.12)',
    badgeBorder: 'rgba(168, 85, 247, 0.3)',
    description: 'Scientific research & development, space agencies, and high-tech innovation',
  },
];

export const SPEND_ITEMS: SpendItem[] = [
  // 1. Gasto en el Ministerio de Igualdad
  {
    id: 'spain-equality-ministry-budget',
    categoryId: 'government',
    title: 'Gasto en el Ministerio de Igualdad de España',
    subtitle: 'Presupuesto general anual asignado a políticas de igualdad y prevención de violencia de género',
    annualSpendUSD: 600000000, // ~$600M (€573M PGE)
    growthRatePct: 3.2,
    iconName: 'Landmark',
    accentColor: '#8b5cf6',
    description:
      'Dotación presupuestaria oficial consolidada en los Presupuestos Generales del Estado (PGE) para el Ministerio de Igualdad, incluyendo programas de conciliación, sensibilización y protección integral.',
    sourceName: 'Presupuestos Generales del Estado (PGE) & Ministerio de Hacienda',
    sourceYear: 2024,
    history: [
      { year: 2018, spendUSD: 180000000 },
      { year: 2020, spendUSD: 205000000 },
      { year: 2021, spendUSD: 450000000 },
      { year: 2022, spendUSD: 525000000 },
      { year: 2023, spendUSD: 573000000 },
      { year: 2024, spendUSD: 590000000 },
      { year: 2026, spendUSD: 600000000 },
    ],
    tags: ['ministerio de igualdad', 'pge', 'igualdad', 'gobierno españa', 'presupuestos'],
  },

  // 2. Coste de criar a un hijo hasta los 18 años
  {
    id: 'cost-raising-child-18-years',
    categoryId: 'society',
    title: 'Gasto en Criar a un Hijo hasta los 18 Años',
    subtitle: 'Coste medio acumulado en alimentación, educación, vivienda, sanidad y crianza',
    annualSpendUSD: 350000000000, // $350B aggregate investment
    growthRatePct: 4.5,
    iconName: 'Baby',
    accentColor: '#ec4899',
    description:
      'Inversión económica requerida para mantener a un hijo desde su nacimiento hasta alcanzar la mayoría de edad (18 años), con una media de 320.000 € por hijo en España y la Unión Europea.',
    sourceName: 'Save the Children & Encuesta de Presupuestos Familiares (INE)',
    sourceYear: 2024,
    history: [
      { year: 2000, spendUSD: 180000000000 },
      { year: 2005, spendUSD: 210000000000 },
      { year: 2010, spendUSD: 250000000000 },
      { year: 2015, spendUSD: 290000000000 },
      { year: 2020, spendUSD: 325000000000 },
      { year: 2024, spendUSD: 342000000000 },
      { year: 2026, spendUSD: 350000000000 },
    ],
    tags: ['criar un hijo', 'hijo 18 años', 'crianza', 'hijos coste', 'familia'],
  },

  // 3. Gasto en pensiones en España
  {
    id: 'spain-pensions-expenditure',
    categoryId: 'government',
    title: 'Gasto en Pensiones en España',
    subtitle: 'Nómina mensual consolidada de pensiones contributivas de jubilación, viudedad e incapacidad',
    annualSpendUSD: 215000000000, // ~$215B (€195,000M)
    growthRatePct: 6.8,
    iconName: 'BadgeCheck',
    accentColor: '#3b82f6',
    description:
      'Gasto total del sistema público de la Seguridad Social española destinado a abonar las más de 10 millones de pensiones contributivas, representando aproximadamente el 12,5% del PIB nacional.',
    sourceName: 'Seguridad Social de España & Ministerio de Inclusión',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 120000000000 },
      { year: 2015, spendUSD: 145000000000 },
      { year: 2018, spendUSD: 160000000000 },
      { year: 2020, spendUSD: 175000000000 },
      { year: 2022, spendUSD: 190000000000 },
      { year: 2024, spendUSD: 205000000000 },
      { year: 2026, spendUSD: 215000000000 },
    ],
    tags: ['pensiones españa', 'seguridad social', 'jubilacion', 'pensiones gasto', 'pge'],
  },

  // 4. Gasto en comida al mes (Hogares)
  {
    id: 'monthly-food-grocery-spending',
    categoryId: 'food',
    title: 'Gasto en Comida y Alimentación al Mes',
    subtitle: 'Presupuesto destinado a cesta de la compra, supermercados y alimentación doméstica',
    annualSpendUSD: 9200000000000, // $9.2T
    growthRatePct: 3.8,
    iconName: 'ShoppingCart',
    accentColor: '#10b981',
    description:
      'Gasto consolidado de los hogares en productos alimenticios, frescos y supermercados. El gasto medio por hogar ronda los 450 € a 550 € mensuales en España.',
    sourceName: 'FAO & Instituto Nacional de Estadística (INE)',
    sourceYear: 2024,
    history: [
      { year: 2000, spendUSD: 4500000000000 },
      { year: 2005, spendUSD: 5800000000000 },
      { year: 2010, spendUSD: 7100000000000 },
      { year: 2015, spendUSD: 7900000000000 },
      { year: 2020, spendUSD: 8500000000000 },
      { year: 2024, spendUSD: 8900000000000 },
      { year: 2026, spendUSD: 9200000000000 },
    ],
    tags: ['comida al mes', 'supermercado', 'cesta de la compra', 'alimentacion', 'gasto comida'],
  },

  // 5. Gasto en una boda
  {
    id: 'wedding-industry-average-cost',
    categoryId: 'society',
    title: 'Gasto Medio en una Boda',
    subtitle: 'Coste global del banquete, vestido, fotografía, viaje de novios y celebración nupcial',
    annualSpendUSD: 290000000000, // $290B
    growthRatePct: 4.1,
    iconName: 'Heart',
    accentColor: '#f43f5e',
    description:
      'Gasto acumulado de las celebraciones matrimoniales en el mundo. En España, el coste medio por enlace nupcial se sitúa en 22.500 € para una media de 120 invitados.',
    sourceName: 'The Knot Global Wedding Report & Bodas.net',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 180000000000 },
      { year: 2015, spendUSD: 220000000000 },
      { year: 2018, spendUSD: 250000000000 },
      { year: 2020, spendUSD: 120000000000 },
      { year: 2022, spendUSD: 260000000000 },
      { year: 2024, spendUSD: 280000000000 },
      { year: 2026, spendUSD: 290000000000 },
    ],
    tags: ['boda', 'gasto boda', 'coste boda', 'matrimonio', 'celebracion'],
  },

  // 6. Gasto en pañales al mes
  {
    id: 'baby-diapers-annual-spending',
    categoryId: 'society',
    title: 'Gasto en Pañales para Bebés al Mes',
    subtitle: 'Consumo recurrente de pañales desechables y toallitas húmedas durante los primeros años',
    annualSpendUSD: 68000000000, // $68B
    growthRatePct: 3.5,
    iconName: 'Package',
    accentColor: '#06b6d4',
    description:
      'Volumen global de compra de pañales infantiles. Un bebé utiliza entre 5.000 y 6.000 pañales en sus primeros 30 meses, con un gasto medio de 50 € a 70 € al mes por familia.',
    sourceName: 'Euromonitor International & Organización de Consumidores (OCU)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 38000000000 },
      { year: 2015, spendUSD: 46000000000 },
      { year: 2018, spendUSD: 54000000000 },
      { year: 2020, spendUSD: 59000000000 },
      { year: 2022, spendUSD: 63000000000 },
      { year: 2024, spendUSD: 66000000000 },
      { year: 2026, spendUSD: 68000000000 },
    ],
    tags: ['pañales', 'pañales al mes', 'bebe', 'higiene infantil', 'gasto pañales'],
  },

  // 7. Gasto de España en ayudas y protección social
  {
    id: 'spain-social-welfare-benefits',
    categoryId: 'government',
    title: 'Gasto de España en Ayudas y Protección Social',
    subtitle: 'Prestaciones por desempleo, Ingreso Mínimo Vital, dependencia y subsidios públicos',
    annualSpendUSD: 72000000000, // ~$72B (€65,000M)
    growthRatePct: 4.2,
    iconName: 'Shield',
    accentColor: '#0ea5e9',
    description:
      'Gasto público conjunto del Estado español en prestaciones asistenciales, cobertura por desempleo, subsidios a familias vulnerables y Sistema para la Autonomía y Atención a la Dependencia.',
    sourceName: 'Servicio Público de Empleo Estatal (SEPE), Ministerio de Derechos Sociales & Eurostat',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 45000000000 },
      { year: 2015, spendUSD: 52000000000 },
      { year: 2018, spendUSD: 58000000000 },
      { year: 2020, spendUSD: 75000000000 },
      { year: 2022, spendUSD: 68000000000 },
      { year: 2024, spendUSD: 70000000000 },
      { year: 2026, spendUSD: 72000000000 },
    ],
    tags: ['españa en ayudas', 'subsidios', 'desempleo', 'ingreso minimo vital', 'ayudas sociales'],
  },

  // 8. Coste de producción de La Velada del Año (Ibai Llanos)
  {
    id: 'la-velada-production-cost',
    categoryId: 'luxury',
    title: 'Coste de Producción de La Velada del Año (Ibai)',
    subtitle: 'Presupuesto de producción técnica, alquiler de estadios, artistas y seguridad del evento',
    annualSpendUSD: 5500000, // ~$5.5M por edición
    growthRatePct: 15.0,
    iconName: 'Tv',
    accentColor: '#eab308',
    description:
      'Coste total de organización del mayor evento de streaming en habla hispana (Santiago Bernabéu / Metropolitano), incluyendo cachets musicales, infraestructura audiovisual y logística.',
    sourceName: 'KOI Productions, Twitch & Forbes Spain Media Analysis',
    sourceYear: 2024,
    history: [
      { year: 2021, spendUSD: 250000 },
      { year: 2022, spendUSD: 900000 },
      { year: 2023, spendUSD: 3200000 },
      { year: 2024, spendUSD: 4800000 },
      { year: 2026, spendUSD: 5500000 },
    ],
    tags: ['ibai en la velada', 'la velada del año', 'ibai llanos', 'coste velada', 'streaming'],
  },

  // 9. Gasto de una persona en comida al mes
  {
    id: 'individual-monthly-food-cost',
    categoryId: 'food',
    title: 'Gasto de una Persona en Comida al Mes',
    subtitle: 'Coste individual medio en supermercado y restauración mensual por habitante',
    annualSpendUSD: 4200000000000, // $4.2T global aggregate
    growthRatePct: 3.6,
    iconName: 'User',
    accentColor: '#10b981',
    description:
      'Gasto promedio individual de una persona adulta en alimentación doméstica y restauración, estimado en 220 € a 310 € mensuales por persona en España.',
    sourceName: 'INE Encuesta de Presupuestos Familiares & Eurostat',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 2800000000000 },
      { year: 2015, spendUSD: 3300000000000 },
      { year: 2018, spendUSD: 3600000000000 },
      { year: 2020, spendUSD: 3800000000000 },
      { year: 2022, spendUSD: 4000000000000 },
      { year: 2024, spendUSD: 4100000000000 },
      { year: 2026, spendUSD: 4200000000000 },
    ],
    tags: ['una persona en comida', 'gasto individual comida', 'comida persona mes', 'alimentacion individual'],
  },

  // 10. Gasto en maquillaje y estilismo de altos cargos (Pedro Sánchez / Gobierno)
  {
    id: 'government-styling-makeup-spending',
    categoryId: 'luxury',
    title: 'Gasto en Maquillaje y Estilismo de Altos Cargos Públicos',
    subtitle: 'Presupuesto de contratación pública de estilismo, peluquería e imagen para comparecencias',
    annualSpendUSD: 250000, // ~$250K (€230,000 PGE acumulado)
    growthRatePct: 2.1,
    iconName: 'Sparkles',
    accentColor: '#ec4899',
    description:
      'Importe de los contratos públicos licitados para servicios de peluquería, maquillaje y asesoría de imagen en actos institucionales y entrevistas oficiales de miembros del Gobierno.',
    sourceName: 'Plataforma de Contratación del Sector Público & Portal de Transparencia',
    sourceYear: 2024,
    history: [
      { year: 2018, spendUSD: 120000 },
      { year: 2020, spendUSD: 160000 },
      { year: 2022, spendUSD: 195000 },
      { year: 2024, spendUSD: 230000 },
      { year: 2026, spendUSD: 250000 },
    ],
    tags: ['pedro sanchez maquillaje', 'maquillaje gobierno', 'estilismo altos cargos', 'presupuesto imagen'],
  },

  // 11. Cuánto gasta el estado español al año / Cuánto gasta España
  {
    id: 'spain-total-annual-public-spending',
    categoryId: 'government',
    title: 'Gasto Público Total del Estado Español al Año',
    subtitle: 'Presupuesto consolidado de la Administración Central, Comunidades Autónomas y Ayuntamientos',
    annualSpendUSD: 710000000000, // ~$710B (€645,000M)
    growthRatePct: 4.8,
    iconName: 'Landmark',
    accentColor: '#3b82f6',
    description:
      'Gasto público conjunto de todas las administraciones públicas de España (Administración General del Estado, 17 CC.AA., Seguridad Social y corporaciones locales). En 2024-2026 supera los 645.000 millones de euros anuales.',
    sourceName: 'Ministerio de Hacienda & Banco de España',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 530000000000 },
      { year: 2015, spendUSD: 520000000000 },
      { year: 2018, spendUSD: 580000000000 },
      { year: 2020, spendUSD: 650000000000 },
      { year: 2022, spendUSD: 665000000000 },
      { year: 2024, spendUSD: 690000000000 },
      { year: 2026, spendUSD: 710000000000 },
    ],
    tags: ['cuanto gasta españa', 'gasto estado español', 'gasto publico españa 2024', 'gasto publico 2023', 'presupuesto estado'],
  },

  // 12. Gasto social total en España
  {
    id: 'spain-social-expenditure-total',
    categoryId: 'government',
    title: 'Gasto Social Total en España',
    subtitle: 'Presupuesto agregado en pensiones, sanidad pública, educación y servicios sociales',
    annualSpendUSD: 390000000000, // ~$390B (€355,000M)
    growthRatePct: 5.2,
    iconName: 'HeartPulse',
    accentColor: '#10b981',
    description:
      'Gasto total del Estado español destinado a políticas del Estado de Bienestar: sistema nacional de salud, educación pública, pensiones y servicios sociales, representando más del 56% del presupuesto público total.',
    sourceName: 'Eurostat & Estadística de Gasto Social de España',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 270000000000 },
      { year: 2015, spendUSD: 285000000000 },
      { year: 2018, spendUSD: 310000000000 },
      { year: 2020, spendUSD: 355000000000 },
      { year: 2022, spendUSD: 365000000000 },
      { year: 2024, spendUSD: 380000000000 },
      { year: 2026, spendUSD: 390000000000 },
    ],
    tags: ['gasto social españa', 'gasto social españa 2023', 'politicas sociales', 'bienestar', 'sanidad y educacion'],
  },

  // 13. Porcentaje de gasto público en España respecto al PIB (44.6%)
  {
    id: 'spain-public-spending-gdp-percentage',
    categoryId: 'government',
    title: 'Gasto Público de España respecto al PIB (44,6%)',
    subtitle: 'Porcentaje del Producto Interior Bruto canalizado a través del sector público',
    annualSpendUSD: 710000000000,
    growthRatePct: 4.5,
    iconName: 'Scale',
    accentColor: '#f59e0b',
    description:
      'El gasto de las administraciones públicas españolas representa exactamente el 44,6% del Producto Interior Bruto (PIB) nacional, situándose en la media de la Unión Europea y la Eurozona.',
    sourceName: 'Banco de España, INE & Comisión Europea (AMECO)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 530000000000 },
      { year: 2015, spendUSD: 520000000000 },
      { year: 2018, spendUSD: 580000000000 },
      { year: 2020, spendUSD: 650000000000 },
      { year: 2022, spendUSD: 665000000000 },
      { year: 2024, spendUSD: 690000000000 },
      { year: 2026, spendUSD: 710000000000 },
    ],
    tags: ['gasto publico españa porcentaje', 'porcentaje gastos publicos', 'gasto publico pib', 'ratio pib españa'],
  },

  // 14. Gasto público mundial consolidado
  {
    id: 'global-public-expenditure-total',
    categoryId: 'government',
    title: 'Gasto Público Mundial Total',
    subtitle: 'Presupuesto fiscal consolidado de todos los gobiernos y estados soberanos del planeta',
    annualSpendUSD: 38500000000000, // $38.5 Trillion
    growthRatePct: 4.4,
    iconName: 'Globe',
    accentColor: '#0ea5e9',
    description:
      'Volumen financiero total administrado anualmente por los gobiernos soberanos del mundo en servicios públicos, infraestructuras, defensa, sanidad, educación y deuda pública (~32% del PIB global).',
    sourceName: 'Fondo Monetario Internacional (FMI) & Banco Mundial',
    sourceYear: 2024,
    history: [
      { year: 2000, spendUSD: 12000000000000 },
      { year: 2005, spendUSD: 16000000000000 },
      { year: 2010, spendUSD: 24000000000000 },
      { year: 2015, spendUSD: 27000000000000 },
      { year: 2020, spendUSD: 33000000000000 },
      { year: 2024, spendUSD: 36500000000000 },
      { year: 2026, spendUSD: 38500000000000 },
    ],
    tags: ['gasto publico mundial', 'gasto publico 2024', 'gasto publico 2023', 'presupuesto mundial', 'fmi'],
  },

  // 15. Cuánto gasta una persona al mes en Estados Unidos / Cuánto dinero se necesita para vivir
  {
    id: 'usa-individual-monthly-cost-of-living',
    categoryId: 'society',
    title: 'Gasto Medio Mensual de una Persona en EE.UU.',
    subtitle: 'Coste medio de vida mensual de una persona soltera en EE.UU. (alquiler, comida, seguro médico y transporte)',
    annualSpendUSD: 11500000000000, // $11.5T gasto agregado de consumo personal en EE.UU. (~$3,500/mes por adulto)
    growthRatePct: 3.9,
    iconName: 'DollarSign',
    accentColor: '#10b981',
    description:
      'El gasto medio para vivir en EE.UU. ronda entre los $3.200 y $4.200 mensuales para una persona soltera ($38.000 a $50.000 anuales), distribuidos principalmente en vivienda (alquiler medio de $1.400-$1.900), seguro médico privado, coche y alimentación.',
    sourceName: 'U.S. Bureau of Labor Statistics (BLS) & MIT Living Wage Calculator',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 7200000000000 },
      { year: 2015, spendUSD: 8500000000000 },
      { year: 2018, spendUSD: 9400000000000 },
      { year: 2020, spendUSD: 9800000000000 },
      { year: 2022, spendUSD: 10600000000000 },
      { year: 2024, spendUSD: 11100000000000 },
      { year: 2026, spendUSD: 11500000000000 },
    ],
    tags: ['cuanto gasta una persona en estados unidos', 'vivir en estados unidos', 'costo de vida usa', 'gastos en estados unidos'],
  },

  // 16. Precios de supermercado en Estados Unidos
  {
    id: 'usa-supermarket-grocery-spending',
    categoryId: 'food',
    title: 'Gasto en Supermercado en Estados Unidos al Mes',
    subtitle: 'Presupuesto medio mensual en alimentación y productos de primera necesidad en EE.UU.',
    annualSpendUSD: 1150000000000, // $1.15 Trillion anuales en retail de alimentación en EE.UU.
    growthRatePct: 4.1,
    iconName: 'ShoppingCart',
    accentColor: '#f59e0b',
    description:
      'Una persona en EE.UU. gasta en promedio entre $420 y $580 al mes en la cesta del supermercado para cocinar en casa. Los precios varían significativamente según el estado (California y Nueva York siendo los más caros).',
    sourceName: 'USDA Economic Research Service & U.S. Census Bureau',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 680000000000 },
      { year: 2015, spendUSD: 790000000000 },
      { year: 2018, spendUSD: 890000000000 },
      { year: 2020, spendUSD: 960000000000 },
      { year: 2022, spendUSD: 1050000000000 },
      { year: 2024, spendUSD: 1110000000000 },
      { year: 2026, spendUSD: 1150000000000 },
    ],
    tags: ['precios supermercado estados unidos', 'precios de estados unidos', 'cuanto cuestan las cosas usa', 'comida usa'],
  },

  // 17. Sueldo mínimo en Estados Unidos mensual y anual
  {
    id: 'usa-federal-minimum-wage-annual',
    categoryId: 'government',
    title: 'Sueldo Mínimo en Estados Unidos Mensual y Anual',
    subtitle: 'Salario mínimo federal ($7,25/h = $1.256/mes) vs. medias estatales ($15-$17/h = $2.600-$2.950/mes)',
    annualSpendUSD: 85000000000, // $85B masa salarial
    growthRatePct: 2.5,
    iconName: 'BadgeCheck',
    accentColor: '#3b82f6',
    description:
      'El salario mínimo federal en EE.UU. está fijado por ley en $7,25 por hora ($1.256 brutos mensuales a 40h semanales = $15.080 al año). No obstante, más de 30 estados han legislado salarios mínimos superiores que oscilan entre $15 y $17,50 por hora.',
    sourceName: 'U.S. Department of Labor (DOL) & Economic Policy Institute',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 55000000000 },
      { year: 2015, spendUSD: 62000000000 },
      { year: 2018, spendUSD: 68000000000 },
      { year: 2020, spendUSD: 72000000000 },
      { year: 2022, spendUSD: 78000000000 },
      { year: 2024, spendUSD: 82000000000 },
      { year: 2026, spendUSD: 85000000000 },
    ],
    tags: ['sueldo minimo en estados unidos mensual', 'salario minimo usa', 'sueldo usa', 'salario estados unidos'],
  },

  // 18. Costo de vida en España vs. Estados Unidos
  {
    id: 'cost-of-living-spain-vs-usa',
    categoryId: 'society',
    title: 'Costo de Vida: España vs. Estados Unidos',
    subtitle: 'El costo de vida global en EE.UU. es entre un 65% y un 85% más alto que en España',
    annualSpendUSD: 12200000000000,
    growthRatePct: 4.0,
    iconName: 'Scale',
    accentColor: '#ec4899',
    description:
      'Vivir en Estados Unidos es considerablemente más caro que en España: la vivienda en alquiler es un 110% superior en EE.UU., la atención sanitaria y seguros son hasta un 400% más caros, y la cesta de la compra cuesta entre un 40% y un 70% más en suelo estadounidense.',
    sourceName: 'OECD Better Life Index, Numbeo Cost of Living & Eurostat',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 7800000000000 },
      { year: 2015, spendUSD: 9100000000000 },
      { year: 2018, spendUSD: 10100000000000 },
      { year: 2020, spendUSD: 10600000000000 },
      { year: 2022, spendUSD: 11400000000000 },
      { year: 2024, spendUSD: 11800000000000 },
      { year: 2026, spendUSD: 12200000000000 },
    ],
    tags: ['costo de vida en españa vs estados unidos', 'vivir en españa vs usa', 'comparativa precios usa españa', 'costo vida'],
  },

  // 19. Fireworks spending / 4th of July
  {
    id: 'july-fourth-fireworks-spending',
    categoryId: 'luxury',
    title: 'Gasto Anual en Fuegos Artificiales y 4 de Julio',
    subtitle: 'Consumo mundial y estadounidense en espectáculos pirotécnicos y fuegos artificiales recreativos',
    annualSpendUSD: 3200000000, // $3.2B global ($1.5B en EE.UU. en el 4 de julio)
    growthRatePct: 5.2,
    iconName: 'Flame',
    accentColor: '#f97316',
    description:
      'Gasto global en la industria pirotécnica. Solo en Estados Unidos durante las celebraciones del 4 de Julio (Día de la Independencia) los consumidores y ayuntamientos gastan más de 1.500 millones de dólares en fuegos artificiales.',
    sourceName: 'American Pyrotechnics Association (APA) & U.S. Consumer Product Safety Commission',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 1600000000 },
      { year: 2015, spendUSD: 2100000000 },
      { year: 2018, spendUSD: 2500000000 },
      { year: 2020, spendUSD: 2800000000 },
      { year: 2022, spendUSD: 3000000000 },
      { year: 2024, spendUSD: 3100000000 },
      { year: 2026, spendUSD: 3200000000 },
    ],
    tags: ['fireworks fourth of july', 'fuegos artificiales', '4th of july spending', 'pirotecnia'],
  },

  // 20. Asylum seekers UK & Global
  {
    id: 'uk-asylum-seekers-support-spending',
    categoryId: 'government',
    title: 'Gasto en Solicitantes de Asilo e Inmigración en Reino Unido',
    subtitle: 'Presupuesto anual del Home Office en alojamiento hotelero, tramitación y manutención de asilo',
    annualSpendUSD: 6500000000, // ~$6.5B (£5.4B per year)
    growthRatePct: 8.5,
    iconName: 'Shield',
    accentColor: '#6366f1',
    description:
      'Gasto total del gobierno británico (Home Office) dedicado a la tramitación de expedientes de asilo, provisión de alojamiento temporal en hoteles y centros asistenciales, y ayudas económicas de manutención.',
    sourceName: 'UK Home Office & National Audit Office (NAO)',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 1100000000 },
      { year: 2018, spendUSD: 1600000000 },
      { year: 2020, spendUSD: 2200000000 },
      { year: 2022, spendUSD: 4500000000 },
      { year: 2023, spendUSD: 5800000000 },
      { year: 2024, spendUSD: 6200000000 },
      { year: 2026, spendUSD: 6500000000 },
    ],
    tags: ['asylum seekers uk', 'asylum seekers spending', 'reino unido asilo', 'home office budget'],
  },

  // 21. US SNAP Food Assistance (Food Stamps)
  {
    id: 'us-snap-food-stamps-spending',
    categoryId: 'food',
    title: 'Presupuesto del Programa SNAP (Cupones de Alimentos en EE.UU.)',
    subtitle: 'Financiación federal del programa de asistencia nutricional suplementaria para más de 41 millones de beneficiarios',
    annualSpendUSD: 115000000000, // $115B
    growthRatePct: 3.1,
    iconName: 'ShoppingCart',
    accentColor: '#10b981',
    description:
      'Gasto federal del Departamento de Agricultura de EE.UU. (USDA) en el programa SNAP (Supplemental Nutrition Assistance Program), que proporciona transferencias económicas directas para la compra de alimentos a familias de bajos ingresos.',
    sourceName: 'USDA Food and Nutrition Service (FNS) & Congressional Budget Office (CBO)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 68000000000 },
      { year: 2015, spendUSD: 74000000000 },
      { year: 2018, spendUSD: 65000000000 },
      { year: 2020, spendUSD: 90000000000 },
      { year: 2022, spendUSD: 119000000000 },
      { year: 2024, spendUSD: 112000000000 },
      { year: 2026, spendUSD: 115000000000 },
    ],
    tags: ['how much money spent on snap', 'snap food stamps', 'cupones alimentos usa', 'usda snap budget'],
  },

  // 22. GTA 6 Development & Marketing
  {
    id: 'gta-6-development-marketing-budget',
    categoryId: 'luxury',
    title: 'Presupuesto de Desarrollo y Marketing de GTA 6',
    subtitle: 'Coste histórico acumulado de producción, tecnología de motor gráfico y campaña de lanzamiento mundial',
    annualSpendUSD: 2000000000, // $2.0 Billion estimated lifetime production
    growthRatePct: 20.0,
    iconName: 'Gamepad2',
    accentColor: '#a855f7',
    description:
      'Presupuesto total estimado para Grand Theft Auto VI (Rockstar Games / Take-Two Interactive), considerado el producto de entretenimiento más caro de la historia humana, combinando más de 10 años de desarrollo, captura de movimiento y publicidad global.',
    sourceName: 'Take-Two Interactive SEC Filings & Industry Financial Analyst Reports',
    sourceYear: 2024,
    history: [
      { year: 2018, spendUSD: 250000000 },
      { year: 2020, spendUSD: 600000000 },
      { year: 2022, spendUSD: 1100000000 },
      { year: 2024, spendUSD: 1650000000 },
      { year: 2026, spendUSD: 2000000000 },
    ],
    tags: ['how much money spent on gta 6', 'gta 6 budget', 'coste gta 6', 'rockstar games gta vi'],
  },

  // 23. Cancer research each year
  {
    id: 'global-cancer-research-spending',
    categoryId: 'health',
    title: 'Gasto Mundial en Investigación del Cáncer al Año',
    subtitle: 'Financiación en oncología, ensayos clínicos, inmunoterapia y desarrollo de fármacos antitumorales',
    annualSpendUSD: 28000000000, // $28B global
    growthRatePct: 6.4,
    iconName: 'Microscope',
    accentColor: '#ec4899',
    description:
      'Inversión global combinada de agencias públicas (como el NCI estadounidense y programas Horizonte Europa), fundaciones benéficas y la industria farmacéutica en investigación biomédica y ensayos clínicos contra el cáncer.',
    sourceName: 'National Cancer Institute (NCI), World Health Organization (IARC) & Cancer Research UK',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 11000000000 },
      { year: 2010, spendUSD: 15000000000 },
      { year: 2015, spendUSD: 19000000000 },
      { year: 2020, spendUSD: 23500000000 },
      { year: 2022, spendUSD: 25500000000 },
      { year: 2024, spendUSD: 27000000000 },
      { year: 2026, spendUSD: 28000000000 },
    ],
    tags: ['how much money spent on cancer research each year', 'cancer research spending', 'investigacion cancer', 'oncology r&d'],
  },

  // 24. UK Benefits total spending
  {
    id: 'uk-welfare-benefits-total-spending',
    categoryId: 'government',
    title: 'Gasto Total en Prestaciones y Ayudas Sociales en Reino Unido',
    subtitle: 'Nómina fiscal anual en pensiones de estado, Universal Credit, discapacidad y subsidios de vivienda',
    annualSpendUSD: 340000000000, // ~$340B (£270B)
    growthRatePct: 4.6,
    iconName: 'Landmark',
    accentColor: '#3b82f6',
    description:
      'Gasto anual total administrado por el Departamento de Trabajo y Pensiones (DWP) del Reino Unido para financiar las pensiones públicas de jubilación, el Universal Credit y las prestaciones por discapacidad y dependencia.',
    sourceName: 'UK Department for Work and Pensions (DWP) & Office for Budget Responsibility (OBR)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 210000000000 },
      { year: 2015, spendUSD: 245000000000 },
      { year: 2018, spendUSD: 270000000000 },
      { year: 2020, spendUSD: 300000000000 },
      { year: 2022, spendUSD: 315000000000 },
      { year: 2024, spendUSD: 330000000000 },
      { year: 2026, spendUSD: 340000000000 },
    ],
    tags: ['how much money spent on benefits uk', 'uk benefits spending', 'universal credit uk', 'dwp budget'],
  },

  // 25. Space exploration spending
  {
    id: 'global-space-exploration-spending',
    categoryId: 'society',
    title: 'Gasto Mundial en Exploración Espacial y Misiones',
    subtitle: 'Presupuestos combinados de agencias espaciales (NASA, ESA, CNSA, ISRO) y vuelos espaciales privados',
    annualSpendUSD: 110000000000, // $110B
    growthRatePct: 8.2,
    iconName: 'Rocket',
    accentColor: '#0ea5e9',
    description:
      'Presupuesto global anual dedicado a programas espaciales: misiones a la Luna y Marte (Artemis), telescopios espaciales (James Webb), estaciones orbitales y lanzamientos comerciales (SpaceX, Blue Origin).',
    sourceName: 'Euroconsult Space Economy Report & NASA Annual Budget',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 42000000000 },
      { year: 2010, spendUSD: 58000000000 },
      { year: 2015, spendUSD: 68000000000 },
      { year: 2020, spendUSD: 85000000000 },
      { year: 2022, spendUSD: 98000000000 },
      { year: 2024, spendUSD: 105000000000 },
      { year: 2026, spendUSD: 110000000000 },
    ],
    tags: ['how much money spent on space exploration', 'space exploration budget', 'nasa budget', 'exploracion espacial'],
  },

  // 26. Organization of Mega Sporting Competitions (World Cup / Olympics)
  {
    id: 'mega-sporting-events-organization-cost',
    categoryId: 'luxury',
    title: 'Coste de Organización de Megaeventos Deportivos (Mundial y JJ.OO.)',
    subtitle: 'Gasto promedio de organización, construcción de estadios, infraestructuras y seguridad en macrocompeticiones',
    annualSpendUSD: 35000000000, // $35B
    growthRatePct: 7.0,
    iconName: 'Trophy',
    accentColor: '#eab308',
    description:
      'Gasto promedio anualizado en la preparación y organización de las mayores competiciones deportivas del planeta (Copa Mundial de la FIFA, Juegos Olímpicos de Verano e Invierno, Super Bowl y UEFA Champions League).',
    sourceName: 'Comité Olímpico Internacional (COI) & Informes Financieros de la FIFA',
    sourceYear: 2024,
    history: [
      { year: 2004, spendUSD: 12000000000 },
      { year: 2008, spendUSD: 25000000000 },
      { year: 2012, spendUSD: 22000000000 },
      { year: 2016, spendUSD: 26000000000 },
      { year: 2020, spendUSD: 29000000000 },
      { year: 2022, spendUSD: 38000000000 },
      { year: 2024, spendUSD: 32000000000 },
      { year: 2026, spendUSD: 35000000000 },
    ],
    tags: ['organization of this competition', 'olympics cost', 'world cup spending', 'coste mundial futbol', 'organizacion eventos'],
  },

  // 27. Global spending on military / defence
  {
    id: 'global-military-defence-spending',
    categoryId: 'military',
    title: 'Gasto Militar y de Defensa Mundial',
    subtitle: 'Presupuestos combinados de defensa, compras armamentísticas, tropas e investigación bélica de todos los países',
    annualSpendUSD: 2440000000000, // $2.44 Trillion
    growthRatePct: 6.8,
    iconName: 'ShieldAlert',
    accentColor: '#64748b',
    description:
      'Gasto militar global anual de las fuerzas armadas de todos los países soberanos. Liderado por Estados Unidos, China, Rusia, India y los estados miembros de la OTAN en armamento y tropas.',
    sourceName: 'Stockholm International Peace Research Institute (SIPRI)',
    sourceYear: 2024,
    history: [
      { year: 2000, spendUSD: 850000000000 },
      { year: 2005, spendUSD: 1150000000000 },
      { year: 2010, spendUSD: 1630000000000 },
      { year: 2015, spendUSD: 1680000000000 },
      { year: 2020, spendUSD: 1980000000000 },
      { year: 2022, spendUSD: 2240000000000 },
      { year: 2024, spendUSD: 2380000000000 },
      { year: 2026, spendUSD: 2440000000000 },
    ],
    tags: ['global spending on military', 'global spending on defence', 'gasto militar mundial', 'sipri military expenditure'],
  },

  // 28. Global spending on AI (Artificial Intelligence)
  {
    id: 'global-ai-artificial-intelligence-spending',
    categoryId: 'tech',
    title: 'Gasto Mundial en Inteligencia Artificial (IA)',
    subtitle: 'Inversión anual en centros de datos, chips semiconductores (GPUs), modelos LLM y software empresarial de IA',
    annualSpendUSD: 235000000000, // $235 Billion
    growthRatePct: 29.5,
    iconName: 'Cpu',
    accentColor: '#06b6d4',
    description:
      'Inversión global de corporaciones tecnológicas e industrias en infraestructura de inteligencia artificial generativa, hardware de cómputo avanzado, chips aceleradores y despliegue de modelos de IA.',
    sourceName: 'International Data Corporation (IDC Worldwide AI Tracker) & Gartner',
    sourceYear: 2024,
    history: [
      { year: 2018, spendUSD: 28000000000 },
      { year: 2020, spendUSD: 50000000000 },
      { year: 2022, spendUSD: 118000000000 },
      { year: 2023, spendUSD: 154000000000 },
      { year: 2024, spendUSD: 195000000000 },
      { year: 2026, spendUSD: 235000000000 },
    ],
    tags: ['global spending on ai', 'ai spending', 'gasto en inteligencia artificial', 'inversion ia'],
  },

  // 29. Global spending on health / healthcare
  {
    id: 'global-healthcare-total',
    categoryId: 'health',
    title: 'Gasto Sanitario Mundial Total',
    subtitle: 'Gasto agregado en hospitales, tratamientos, fármacos y sistemas sanitarios de todo el planeta',
    annualSpendUSD: 9800000000000, // $9.8 Trillion (~10% del PIB mundial)
    growthRatePct: 4.8,
    iconName: 'HeartPulse',
    accentColor: '#ef4444',
    description:
      'Gasto total del planeta en atención médica y servicios de salud pública y privada, incluyendo infraestructuras hospitalarias, investigación médica, medicamentos recetados y aseguradoras.',
    sourceName: 'Organización Mundial de la Salud (OMS / WHO) & Banco Mundial',
    sourceYear: 2024,
    history: [
      { year: 2000, spendUSD: 3100000000000 },
      { year: 2005, spendUSD: 4700000000000 },
      { year: 2010, spendUSD: 6500000000000 },
      { year: 2015, spendUSD: 7400000000000 },
      { year: 2020, spendUSD: 9000000000000 },
      { year: 2022, spendUSD: 9400000000000 },
      { year: 2024, spendUSD: 9600000000000 },
      { year: 2026, spendUSD: 9800000000000 },
    ],
    tags: ['global spending on health', 'global spending on healthcare', 'global spending on health 2025', 'gasto sanitario mundial'],
  },

  // 30. Global spending on nuclear weapons
  {
    id: 'global-nuclear-weapons-spending',
    categoryId: 'military',
    title: 'Gasto Mundial en Armamento Nuclear',
    subtitle: 'Presupuesto de mantenimiento, modernización y desarrollo de arsenales atómicos en las 9 potencias nucleares',
    annualSpendUSD: 91400000000, // $91.4 Billion
    growthRatePct: 10.7,
    iconName: 'ShieldAlert',
    accentColor: '#e11d48',
    description:
      'Gasto anual consolidado de los 9 países con capacidad nuclear (Estados Unidos, China, Rusia, Reino Unido, Francia, India, Pakistán, Israel y Corea del Norte) en mantener y modernizar ojivas y misiles balísticos.',
    sourceName: 'Campaña Internacional para la Abolición de las Armas Nucleares (ICAN) & SIPRI',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 58000000000 },
      { year: 2018, spendUSD: 66000000000 },
      { year: 2020, spendUSD: 72000000000 },
      { year: 2022, spendUSD: 82900000000 },
      { year: 2023, spendUSD: 91400000000 },
      { year: 2024, spendUSD: 95000000000 },
      { year: 2026, spendUSD: 98000000000 },
    ],
    tags: ['global spending on nuclear weapons', 'nuclear weapons spending', 'gasto armas nucleares', 'ican report'],
  },

  // 31. Global spending on advertising
  {
    id: 'global-advertising-marketing-spending',
    categoryId: 'advertising',
    title: 'Gasto Mundial en Publicidad y Marketing',
    subtitle: 'Inversión global de empresas en publicidad digital, redes sociales, televisión y medios exteriores',
    annualSpendUSD: 990000000000, // $990 Billion (~$1 Trillion)
    growthRatePct: 6.2,
    iconName: 'Megaphone',
    accentColor: '#f59e0b',
    description:
      'Gasto global en medios publicitarios, incluyendo Google Ads, Meta, televisión, prensa, radio y publicidad exterior, rozando el billón de dólares anuales a nivel mundial.',
    sourceName: 'WARC Global Ad Spend Outlook & GroupM',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 390000000000 },
      { year: 2010, spendUSD: 460000000000 },
      { year: 2015, spendUSD: 540000000000 },
      { year: 2020, spendUSD: 620000000000 },
      { year: 2022, spendUSD: 840000000000 },
      { year: 2024, spendUSD: 920000000000 },
      { year: 2026, spendUSD: 990000000000 },
    ],
    tags: ['global spending on advertising is estimated to be approximately', 'global advertising spending', 'gasto publicidad mundial'],
  },

  // 32. Global economic cost of war / conflict
  {
    id: 'global-economic-cost-of-war',
    categoryId: 'military',
    title: 'Impacto Económico Mundial de las Guerras y Conflictos',
    subtitle: 'Coste global agregado de destrucción, refugiados, pérdidas de PIB y gasto armamentístico en guerras activas',
    annualSpendUSD: 17500000000000, // $17.5 Trillion (~13% del PIB mundial)
    growthRatePct: 7.5,
    iconName: 'Skull',
    accentColor: '#dc2626',
    description:
      'Impacto económico global de la violencia armada y las guerras en el planeta. Incluye la destrucción de infraestructuras, gasto bélico directo, pérdidas de productividad y ayuda humanitaria a refugiados según el Institute for Economics and Peace.',
    sourceName: 'Institute for Economics and Peace (IEP Global Peace Index) & World Bank',
    sourceYear: 2024,
    history: [
      { year: 2008, spendUSD: 9500000000000 },
      { year: 2012, spendUSD: 11800000000000 },
      { year: 2016, spendUSD: 14300000000000 },
      { year: 2020, spendUSD: 14960000000000 },
      { year: 2022, spendUSD: 17100000000000 },
      { year: 2024, spendUSD: 17400000000000 },
      { year: 2026, spendUSD: 17500000000000 },
    ],
    tags: ['how much does the world spend on war', 'cost of war', 'gasto mundial en guerras', 'impacto economico guerras'],
  },

  // 33. Global spending on electricity per year
  {
    id: 'global-electricity-power-spending',
    categoryId: 'energy',
    title: 'Gasto Mundial en Electricidad y Generación Eléctrica',
    subtitle: 'Facturación global del consumo eléctrico en hogares, fábricas, centros de datos e infraestructuras',
    annualSpendUSD: 3200000000000, // $3.2 Trillion
    growthRatePct: 5.8,
    iconName: 'Zap',
    accentColor: '#eab308',
    description:
      'Gasto total del planeta en consumo de energía eléctrica generada por fuentes renovables, nuclear, gas y carbón, impulsado fuertemente por la electrificación del transporte y centros de datos de IA.',
    sourceName: 'Agencia Internacional de la Energía (AIE / IEA) & BloombergNEF',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 1400000000000 },
      { year: 2010, spendUSD: 1950000000000 },
      { year: 2015, spendUSD: 2300000000000 },
      { year: 2020, spendUSD: 2650000000000 },
      { year: 2022, spendUSD: 2950000000000 },
      { year: 2024, spendUSD: 3100000000000 },
      { year: 2026, spendUSD: 3200000000000 },
    ],
    tags: ['how much does the world spend on electricity per year', 'electricity spending', 'gasto electricidad mundial'],
  },

  // 34. Global spending on oil per year
  {
    id: 'global-crude-oil-spending-annual',
    categoryId: 'energy',
    title: 'Gasto Mundial Anual en Petróleo Crudo',
    subtitle: 'Consumo diario de más de 102 millones de barriles de crudo para transporte, petroquímica e industria',
    annualSpendUSD: 2950000000000, // $2.95 Trillion
    growthRatePct: 2.8,
    iconName: 'Droplet',
    accentColor: '#475569',
    description:
      'Valor económico total del petróleo crudo consumido anualmente en el mundo (~102 millones de barriles por día a un precio promedio de $78-$85 por barril) refinado para gasolinas, diésel, queroseno de aviación y plásticos.',
    sourceName: 'International Energy Agency (IEA) & OPEC Annual Statistical Bulletin',
    sourceYear: 2024,
    history: [
      { year: 2000, spendUSD: 950000000000 },
      { year: 2008, spendUSD: 2800000000000 },
      { year: 2014, spendUSD: 3200000000000 },
      { year: 2020, spendUSD: 1500000000000 },
      { year: 2022, spendUSD: 3400000000000 },
      { year: 2024, spendUSD: 2850000000000 },
      { year: 2026, spendUSD: 2950000000000 },
    ],
    tags: ['how much does the world spend on oil per year', 'oil spending', 'gasto petroleo mundial', 'crude oil expenditure'],
  },

  // 35. Global spending on Christmas
  {
    id: 'global-christmas-holiday-spending',
    categoryId: 'luxury',
    title: 'Gasto Mundial en Navidad y Campaña Navideña',
    subtitle: 'Consumo en regalos, juguetes, alimentación festiva, decoraciones y viajes durante la temporada de fin de año',
    annualSpendUSD: 1450000000000, // $1.45 Trillion (~$1,450B global)
    growthRatePct: 4.2,
    iconName: 'Gift',
    accentColor: '#16a34a',
    description:
      'Gasto de los consumidores en todo el planeta durante la campaña de Navidad y fiestas de fin de año (Black Friday, Nochebuena, Reyes y Año Nuevo), concentrado principalmente en compras minoristas, juguetes, gastronomía festiva y viajes familiares.',
    sourceName: 'National Retail Federation (NRF) & Global Retail Analytics',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 850000000000 },
      { year: 2015, spendUSD: 1050000000000 },
      { year: 2018, spendUSD: 1200000000000 },
      { year: 2020, spendUSD: 1280000000000 },
      { year: 2022, spendUSD: 1380000000000 },
      { year: 2024, spendUSD: 1420000000000 },
      { year: 2026, spendUSD: 1450000000000 },
    ],
    tags: ['how much does the world spend on christmas', 'christmas spending', 'gasto navidad', 'compras navideñas'],
  },

  // 36. Annual cost of owning a dog
  {
    id: 'annual-cost-of-owning-a-dog',
    categoryId: 'society',
    title: 'Coste Anual de Tener un Perro y Cuidado Canino',
    subtitle: 'Gasto medio anual de 1.400 € a 2.400 $ por perro en alimentación, veterinario, vacunas y seguro',
    annualSpendUSD: 145000000000, // $145 Billion global
    growthRatePct: 5.6,
    iconName: 'Dog',
    accentColor: '#f97316',
    description:
      'Inversión anual media de una familia en el cuidado de un perro doméstico (estimada entre 1.400 € y 2.400 $ al año por mascota), sumando pienso de calidad, visitas veterinarias, desparasitación, peluquería y vacunas obligatorias.',
    sourceName: 'American Pet Products Association (APPA) & FEDIAF European Pet Food',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 72000000000 },
      { year: 2015, spendUSD: 92000000000 },
      { year: 2018, spendUSD: 110000000000 },
      { year: 2020, spendUSD: 122000000000 },
      { year: 2022, spendUSD: 135000000000 },
      { year: 2024, spendUSD: 140000000000 },
      { year: 2026, spendUSD: 145000000000 },
    ],
    tags: ['annual cost of owning a dog', 'cost of owning a dog', 'tener un perro coste', 'gasto perro anual'],
  },

  // 37. Annual cost of owning a cat
  {
    id: 'annual-cost-of-owning-a-cat',
    categoryId: 'society',
    title: 'Coste Anual de Tener un Gato y Cuidado Felino',
    subtitle: 'Gasto medio anual de 950 € a 1.600 $ por gato en arena, nutrición, prevención veterinaria y accesorios',
    annualSpendUSD: 95000000000, // $95 Billion global
    growthRatePct: 5.2,
    iconName: 'Cat',
    accentColor: '#ec4899',
    description:
      'Gasto promedio anual para mantener un gato en el hogar (entre 950 € y 1.600 $ por gato al año), incluyendo alimentación húmeda y seca, arena higiénica, revisiones veterinarias periódicas y rascadores.',
    sourceName: 'American Pet Products Association (APPA) & PDSA Animal Wellbeing',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 48000000000 },
      { year: 2015, spendUSD: 62000000000 },
      { year: 2018, spendUSD: 74000000000 },
      { year: 2020, spendUSD: 81000000000 },
      { year: 2022, spendUSD: 88000000000 },
      { year: 2024, spendUSD: 92000000000 },
      { year: 2026, spendUSD: 95000000000 },
    ],
    tags: ['annual cost of owning a cat', 'cost of owning a cat', 'tener un gato coste', 'gasto gato anual'],
  },

  // 38. Annual cost of owning a horse
  {
    id: 'annual-cost-of-owning-a-horse',
    categoryId: 'society',
    title: 'Coste Anual de Mantener un Caballo e Industria Hípica',
    subtitle: 'Coste anual de 4.500 € a 12.000 $ por caballo en pupilaje, herraje, forraje y cuidados ecuestres',
    annualSpendUSD: 32000000000, // $32 Billion
    growthRatePct: 3.4,
    iconName: 'Sparkles',
    accentColor: '#8b5cf6',
    description:
      'Gasto promedio anual para el mantenimiento de un caballo de recreo o deportivo, que oscila entre 4.500 € y 12.000 $ anuales en concepto de estabulación en hípica, forraje, herradores profesionales y chequeos veterinarios.',
    sourceName: 'British Equestrian Trade Association (BETA) & American Horse Council',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 21000000000 },
      { year: 2015, spendUSD: 24500000000 },
      { year: 2018, spendUSD: 27000000000 },
      { year: 2020, spendUSD: 28500000000 },
      { year: 2022, spendUSD: 30000000000 },
      { year: 2024, spendUSD: 31000000000 },
      { year: 2026, spendUSD: 32000000000 },
    ],
    tags: ['annual cost of owning a horse', 'cost of owning a horse', 'mantener un caballo', 'coste caballo anual'],
  },

  // 39. Annual cost of state pension UK
  {
    id: 'uk-state-pension-annual-cost',
    categoryId: 'government',
    title: 'Gasto Anual en Pensiones de Estado del Reino Unido',
    subtitle: 'Nómina fiscal del Estado británico abonada a más de 12,6 millones de jubilados en UK',
    annualSpendUSD: 160000000000, // ~$160 Billion (£125 Billion)
    growthRatePct: 6.2,
    iconName: 'BadgeCheck',
    accentColor: '#3b82f6',
    description:
      'Gasto anual directo del gobierno británico en el pago de la pensión estatal básica y nueva State Pension para más de 12,6 millones de personas jubiladas en el Reino Unido (regulado por el mecanismo del Triple Lock).',
    sourceName: 'UK Department for Work and Pensions (DWP) & Office for Budget Responsibility (OBR)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 105000000000 },
      { year: 2015, spendUSD: 122000000000 },
      { year: 2018, spendUSD: 135000000000 },
      { year: 2020, spendUSD: 142000000000 },
      { year: 2022, spendUSD: 148000000000 },
      { year: 2024, spendUSD: 154000000000 },
      { year: 2026, spendUSD: 160000000000 },
    ],
    tags: ['annual cost of state pension uk', 'state pension uk', 'pensiones reino unido', 'dwp state pension'],
  },

  // 40. Annual cost of Amazon Prime (Global Revenue)
  {
    id: 'annual-cost-of-amazon-prime',
    categoryId: 'tech',
    title: 'Facturación Global por Suscripciones de Amazon Prime',
    subtitle: 'Ingresos mundiales generados por más de 200 millones de suscriptores al servicio Prime ($139/año o 49,90€/año)',
    annualSpendUSD: 35200000000, // $35.2 Billion
    growthRatePct: 8.5,
    iconName: 'ShoppingCart',
    accentColor: '#f59e0b',
    description:
      'Gasto anual de los consumidores en el servicio de suscripción Amazon Prime a nivel mundial, que cuenta con más de 200 millones de miembros activos suscritos a entregas gratuitas, Prime Video y servicios asociados.',
    sourceName: 'Amazon.com, Inc. SEC Form 10-K & Consumer Intelligence Research Partners (CIRP)',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 4400000000 },
      { year: 2018, spendUSD: 14100000000 },
      { year: 2020, spendUSD: 25200000000 },
      { year: 2022, spendUSD: 31700000000 },
      { year: 2023, spendUSD: 33800000000 },
      { year: 2024, spendUSD: 34500000000 },
      { year: 2026, spendUSD: 35200000000 },
    ],
    tags: ['annual cost of amazon prime', 'amazon prime cost', 'precio amazon prime', 'suscripcion prime anual'],
  },

  // 41. Annual cost of owning a pool
  {
    id: 'annual-cost-of-owning-a-pool',
    categoryId: 'society',
    title: 'Coste Anual de Mantenimiento de una Piscina',
    subtitle: 'Gasto de 3.000 $ a 5.000 $ anuales por piscina en cloro, químicos, filtración, agua y electricidad',
    annualSpendUSD: 24000000000, // $24 Billion global
    growthRatePct: 4.8,
    iconName: 'Waves',
    accentColor: '#0ea5e9',
    description:
      'Gasto anual recurrente de los propietarios de piscinas residenciales para su mantenimiento higiénico y operativo (entre 3.000 $ y 5.000 $ al año por piscina), incluyendo productos químicos, electricidad para bombas, agua y servicios profesionales.',
    sourceName: 'Pool & Hot Tub Alliance (PHTA) & HomeAdvisor Cost Report',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 12500000000 },
      { year: 2015, spendUSD: 15800000000 },
      { year: 2018, spendUSD: 18500000000 },
      { year: 2020, spendUSD: 21000000000 },
      { year: 2022, spendUSD: 22800000000 },
      { year: 2024, spendUSD: 23500000000 },
      { year: 2026, spendUSD: 24000000000 },
    ],
    tags: ['annual cost of owning a pool', 'pool maintenance cost', 'coste mantener piscina', 'piscina gastos anuales'],
  },

  // 42. Comprar videojuegos (Global Video Game Purchases)
  {
    id: 'global-video-games-purchases-spending',
    categoryId: 'luxury',
    title: 'Gasto Mundial en Compra de Videojuegos',
    subtitle: 'Venta global de juegos de consola, PC, móviles, microtransacciones y suscripciones gaming',
    annualSpendUSD: 187700000000, // $187.7 Billion
    growthRatePct: 4.5,
    iconName: 'Gamepad2',
    accentColor: '#8b5cf6',
    description:
      'Gasto total de los consumidores en la compra de títulos de videojuegos, compras dentro de la aplicación (in-game items), suscripciones (PlayStation Plus, Xbox Game Pass) y descargas digitales para PC, consolas y smartphones.',
    sourceName: 'Newzoo Global Games Market Report & Entertainment Software Association (ESA)',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 70000000000 },
      { year: 2016, spendUSD: 101000000000 },
      { year: 2019, spendUSD: 145000000000 },
      { year: 2021, spendUSD: 180000000000 },
      { year: 2023, spendUSD: 184000000000 },
      { year: 2024, spendUSD: 187700000000 },
      { year: 2026, spendUSD: 195000000000 },
    ],
    tags: ['cuanto dinero se gasta en comprar videojuegos', 'gasto en videojuegos', 'video game spending', 'newzoo games market'],
  },

  // 43. Comprar café (Global Coffee Purchases & Consumption)
  {
    id: 'global-coffee-purchases-spending',
    categoryId: 'food',
    title: 'Gasto Mundial en Compra y Consumo de Café',
    subtitle: 'Consumo diario de más de 2.250 millones de tazas de café en cafeterías y supermercados',
    annualSpendUSD: 280000000000, // $280 Billion
    growthRatePct: 5.1,
    iconName: 'Coffee',
    accentColor: '#78350f',
    description:
      'Gasto global de los consumidores en café tostado, café molido, cápsulas en supermercados y bebidas servidas en cafeterías y cadenas de café especializadas en todo el planeta.',
    sourceName: 'International Coffee Organization (ICO) & Statista Consumer Market Insights',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 135000000000 },
      { year: 2015, spendUSD: 175000000000 },
      { year: 2018, spendUSD: 215000000000 },
      { year: 2020, spendUSD: 230000000000 },
      { year: 2022, spendUSD: 260000000000 },
      { year: 2024, spendUSD: 275000000000 },
      { year: 2026, spendUSD: 280000000000 },
    ],
    tags: ['cuanto dinero se gasta en comprar cafe', 'gasto en cafe', 'coffee spending', 'global coffee market'],
  },

  // 44. Comprar agua embotellada (Global Bottled Water Purchases)
  {
    id: 'global-bottled-water-purchases-spending',
    categoryId: 'food',
    title: 'Gasto Mundial en Compra de Agua Embotellada',
    subtitle: 'Consumo anual de más de 390.000 millones de litros de agua mineral y purificada envasada',
    annualSpendUSD: 340000000000, // $340 Billion
    growthRatePct: 6.4,
    iconName: 'Droplet',
    accentColor: '#0284c7',
    description:
      'Gasto comercial global en botellas y garrafas de agua mineral natural, agua purificada y agua con gas, superando los 390.000 millones de litros anuales adquiridos por particulares y empresas.',
    sourceName: 'International Bottled Water Association (IBWA) & United Nations University (UNU-INWEH)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 120000000000 },
      { year: 2015, spendUSD: 185000000000 },
      { year: 2018, spendUSD: 240000000000 },
      { year: 2020, spendUSD: 270000000000 },
      { year: 2022, spendUSD: 305000000000 },
      { year: 2024, spendUSD: 330000000000 },
      { year: 2026, spendUSD: 340000000000 },
    ],
    tags: ['cuanto dinero se gasta en comprar agua', 'gasto agua embotellada', 'bottled water spending', 'consumo de agua'],
  },

  // 45. Comprar armas ilegales (Global Illicit Arms Black Market)
  {
    id: 'global-illicit-arms-trafficking-spending',
    categoryId: 'illicit',
    title: 'Gasto en Compra y Tráfico de Armas Ilegales',
    subtitle: 'Mercado negro global de armas cortas, fusiles de asalto y municiones ilícitas',
    annualSpendUSD: 10500000000, // $10.5 Billion (~10-15% del comercio global de armas ligeras)
    growthRatePct: 4.0,
    iconName: 'Crosshair',
    accentColor: '#b91c1c',
    description:
      'Estimación del valor del tráfico clandestino y comercio ilegal de armas de fuego y municiones en el mercado negro internacional según la Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC) y el Small Arms Survey.',
    sourceName: 'UN Office on Drugs and Crime (UNODC) & Small Arms Survey',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 6500000000 },
      { year: 2014, spendUSD: 7800000000 },
      { year: 2018, spendUSD: 8900000000 },
      { year: 2020, spendUSD: 9400000000 },
      { year: 2022, spendUSD: 10100000000 },
      { year: 2024, spendUSD: 10300000000 },
      { year: 2026, spendUSD: 10500000000 },
    ],
    tags: ['cuanto dinero se gasta en comprar armas ilegales', 'armas ilegales mercado negro', 'illicit arms trade', 'trafico de armas'],
  },

  // 46. Comprar criptomonedas (Global Cryptocurrency Purchases & Inflows)
  {
    id: 'global-cryptocurrency-purchases-spending',
    categoryId: 'tech',
    title: 'Gasto y Adquisición Global de Criptomonedas',
    subtitle: 'Flujo neto anual de dinero fiat inyectado por particulares e instituciones en Bitcoin, Ethereum y activos digitales',
    annualSpendUSD: 480000000000, // $480 Billion net purchase/on-ramp flow
    growthRatePct: 22.0,
    iconName: 'Bitcoin',
    accentColor: '#f59e0b',
    description:
      'Volumen estimado de capital fiduciario nuevo invertido anualmente por inversores minoristas e institucionales para comprar Bitcoin, Ethereum, stablecoins y criptoactivos a través de exchanges regulados y pasarelas de pago.',
    sourceName: 'Chainalysis Global Crypto Adoption Index & CoinGecko Research',
    sourceYear: 2024,
    history: [
      { year: 2017, spendUSD: 65000000000 },
      { year: 2019, spendUSD: 95000000000 },
      { year: 2021, spendUSD: 520000000000 },
      { year: 2022, spendUSD: 240000000000 },
      { year: 2023, spendUSD: 330000000000 },
      { year: 2024, spendUSD: 420000000000 },
      { year: 2026, spendUSD: 480000000000 },
    ],
    tags: ['cuanto dinero se gasta en comprar criptomonedas', 'comprar criptomonedas', 'crypto purchases', 'inversion en bitcoin'],
  },

  // 47. Dinero gastado en centros de datos de IA (ChatGPT)
  {
    id: 'ai-datacenters-chatgpt-spending',
    categoryId: 'tech',
    title: 'Gasto en Centros de Datos de IA y ChatGPT',
    subtitle: 'Inversión récord en clústeres de servidores GPU, refrigeración líquida y energía para modelos de IA como ChatGPT',
    annualSpendUSD: 160000000000, // $160 Billion CapEx
    growthRatePct: 34.5,
    iconName: 'Server',
    accentColor: '#10b981',
    description:
      'Gasto de capital (CapEx) global de hiperescaladores (Microsoft Azure, AWS, Google Cloud, Meta y OpenAI) dedicado exclusivamente a la construcción y equipamiento de centros de datos para entrenamiento e inferencia de Inteligencia Artificial como ChatGPT.',
    sourceName: 'Dell’Oro Group Data Center CapEx Report & Synergy Research Group',
    sourceYear: 2024,
    history: [
      { year: 2020, spendUSD: 22000000000 },
      { year: 2021, spendUSD: 35000000000 },
      { year: 2022, spendUSD: 55000000000 },
      { year: 2023, spendUSD: 92000000000 },
      { year: 2024, spendUSD: 130000000000 },
      { year: 2026, spendUSD: 160000000000 },
    ],
    tags: ['dinero gastado en centros de datos de ia chatgpt', 'centros de datos chatgpt', 'ai datacenter spending', 'inversion ia servidores'],
  },

  // 48. Dinero gastado en medicamentos para perder peso (Ozempic)
  {
    id: 'weight-loss-drugs-ozempic-spending',
    categoryId: 'health',
    title: 'Gasto en Medicamentos para Perder Peso (Ozempic y GLP-1)',
    subtitle: 'Consumo mundial en fármacos inyectables GLP-1 contra la obesidad y diabetes (Ozempic, Wegovy, Mounjaro)',
    annualSpendUSD: 42000000000, // $42 Billion
    growthRatePct: 44.0,
    iconName: 'Pill',
    accentColor: '#ec4899',
    description:
      'Gasto anual global de pacientes, aseguradoras médicas y sistemas sanitarios en la compra de tratamientos agonistas del receptor GLP-1 para la pérdida de peso y control glucémico (Ozempic, Wegovy de Novo Nordisk y Mounjaro, Zepbound de Eli Lilly).',
    sourceName: 'IQVIA Global Medicine Spending & Novo Nordisk / Eli Lilly Financial Reports',
    sourceYear: 2024,
    history: [
      { year: 2019, spendUSD: 4500000000 },
      { year: 2021, spendUSD: 10200000000 },
      { year: 2022, spendUSD: 18500000000 },
      { year: 2023, spendUSD: 28000000000 },
      { year: 2024, spendUSD: 36000000000 },
      { year: 2026, spendUSD: 42000000000 },
    ],
    tags: ['dinero gastado en medicamentos para perder peso ozempic', 'gasto ozempic', 'weight loss drugs spending', 'glp 1 wegovy mounjaro'],
  },

  // 49. Gasto en fichajes de los 10 clubes top de fútbol
  {
    id: 'top-10-football-clubs-transfer-spending',
    categoryId: 'sports',
    title: 'Gasto en Fichajes de los 10 Clubes de Fútbol Top del Mundo',
    subtitle: 'Inversión anual combinada en traspasos de jugadores de Real Madrid, Manchester City, Chelsea, PSG, Arsenal y gigantes europeos',
    annualSpendUSD: 3850000000, // $3.85 Billion (~€3.55B)
    growthRatePct: 8.5,
    iconName: 'Trophy',
    accentColor: '#10b981',
    description:
      'Gasto agregado anual en fichajes de futbolistas ejecutado por los 10 clubes más ricos del planeta (Real Madrid, Man City, Chelsea, PSG, Bayern Múnich, Arsenal, Manchester United, Barcelona, Liverpool y Tottenham) en las ventanas de transferencias de verano e invierno.',
    sourceName: 'Transfermarkt & FIFA TMS (Transfer Matching System)',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 1400000000 },
      { year: 2016, spendUSD: 2150000000 },
      { year: 2019, spendUSD: 3200000000 },
      { year: 2021, spendUSD: 2300000000 },
      { year: 2022, spendUSD: 3400000000 },
      { year: 2023, spendUSD: 3950000000 },
      { year: 2024, spendUSD: 3700000000 },
      { year: 2026, spendUSD: 3850000000 },
    ],
    tags: ['cuanto dinero se gastan los 10 equipos mas top del mundo en futbol', 'fichajes de futbol', 'transfer spending top 10 clubs', 'fichajes real madrid manchester city'],
  },

  // 50. Masa salarial y sueldos de los 10 clubes top de fútbol
  {
    id: 'top-10-football-clubs-total-payroll-spending',
    categoryId: 'sports',
    title: 'Masa Salarial y Sueldos de los 10 Clubes de Fútbol Top',
    subtitle: 'Nómina anual de salarios a futbolistas estrella y cuerpos técnicos de la élite del fútbol mundial',
    annualSpendUSD: 5400000000, // $5.40 Billion (~€5.0B)
    growthRatePct: 6.2,
    iconName: 'Coins',
    accentColor: '#eab308',
    description:
      'Gasto total en masa salarial y retribuciones de plantilla deportiva de los 10 clubes de fútbol con mayores ingresos del mundo, según el informe anual de finanzas de clubes de la UEFA y la Deloitte Football Money League.',
    sourceName: 'Deloitte Football Money League & UEFA Club Licensing Benchmark',
    sourceYear: 2024,
    history: [
      { year: 2014, spendUSD: 2800000000 },
      { year: 2017, spendUSD: 3600000000 },
      { year: 2019, spendUSD: 4400000000 },
      { year: 2021, spendUSD: 4700000000 },
      { year: 2023, spendUSD: 5100000000 },
      { year: 2024, spendUSD: 5250000000 },
      { year: 2026, spendUSD: 5400000000 },
    ],
    tags: ['cuanto dinero se gastan en sueldos de futbolistas', 'masa salarial clubes futbol', 'deloitte football money league', 'salarios futbol elite'],
  },

  // 51. Gasto mundial total en fichajes de fútbol
  {
    id: 'global-football-transfers-spending',
    categoryId: 'sports',
    title: 'Gasto Mundial Total en Fichajes de Fútbol',
    subtitle: 'Volumen financiero total de traspasos internacionales y nacionales registrados en todas las ligas FIFA',
    annualSpendUSD: 9630000000, // $9.63 Billion
    growthRatePct: 7.8,
    iconName: 'Trophy',
    accentColor: '#059669',
    description:
      'Monto total de dinero pagado en traspasos de jugadores profesionales de fútbol a nivel planetario en todas las confederaciones (UEFA, CONMEBOL, Premier League, LaLiga, Serie A, Saudi Pro League, etc.) según el informe oficial de la FIFA.',
    sourceName: 'FIFA Global Transfer Report & TMS',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 2810000000 },
      { year: 2015, spendUSD: 4180000000 },
      { year: 2018, spendUSD: 7010000000 },
      { year: 2019, spendUSD: 7350000000 },
      { year: 2021, spendUSD: 4860000000 },
      { year: 2022, spendUSD: 6500000000 },
      { year: 2023, spendUSD: 9630000000 },
      { year: 2024, spendUSD: 9100000000 },
      { year: 2026, spendUSD: 9630000000 },
    ],
    tags: ['cuanto se gasta en fichajes', 'gasto mundial en fichajes futbol', 'fifa global transfer report', 'mercado de fichajes'],
  },

  // 52. Venta de sustancias ilícitas (Global Illicit Drug Trade)
  {
    id: 'global-illicit-drug-trade',
    categoryId: 'illicit',
    title: 'Gasto Mundial en Sustancias Ilícitas y Narcotráfico',
    subtitle: 'Mercado clandestino global de cocaína, opiáceos, cannabis y drogas sintéticas',
    annualSpendUSD: 650000000000, // $650 Billion
    growthRatePct: 5.5,
    iconName: 'Skull',
    accentColor: '#dc2626',
    description:
      'Valor estimado del mercado ilegal mundial de estupefacientes y sustancias psicotrópicas ilícitas según el Informe Mundial sobre las Drogas de la Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC).',
    sourceName: 'UN Office on Drugs and Crime (UNODC World Drug Report)',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 320000000000 },
      { year: 2010, spendUSD: 430000000000 },
      { year: 2015, spendUSD: 520000000000 },
      { year: 2019, spendUSD: 590000000000 },
      { year: 2022, spendUSD: 620000000000 },
      { year: 2024, spendUSD: 640000000000 },
      { year: 2026, spendUSD: 650000000000 },
    ],
    tags: ['venta de sustancias ilicitas', 'gasto en drogas', 'illicit drug trade', 'narcotrafico mundial'],
  },

  // 53. Venta y tráfico ilícito de arte y antigüedades
  {
    id: 'illicit-stolen-art-antiquities-trafficking',
    categoryId: 'illicit',
    title: 'Tráfico Ilícito de Obras de Arte y Bienes Culturales',
    subtitle: 'Mercado negro internacional de arte robado, expolio arqueológico y falsificaciones históricas',
    annualSpendUSD: 8500000000, // $8.5 Billion
    growthRatePct: 3.8,
    iconName: 'Palette',
    accentColor: '#d97706',
    description:
      'Volumen financiero clandestino generado anualmente por el saqueo de yacimientos arqueológicos, robo en museos y comercio ilícito de obras maestras y bienes culturales según la UNESCO e INTERPOL.',
    sourceName: 'UNESCO & INTERPOL Works of Art Unit',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 4500000000 },
      { year: 2015, spendUSD: 6200000000 },
      { year: 2018, spendUSD: 7400000000 },
      { year: 2021, spendUSD: 8000000000 },
      { year: 2024, spendUSD: 8300000000 },
      { year: 2026, spendUSD: 8500000000 },
    ],
    tags: ['venta de arte ilegal', 'trafico de obras de arte', 'arte robado mercado negro', 'stolen art trade'],
  },

  // 54. Comercio global de falsificaciones y piratería
  {
    id: 'global-counterfeit-pirated-goods-trade',
    categoryId: 'illicit',
    title: 'Gasto Mundial en Productos Falsificados y Piratería',
    subtitle: 'Comercio global de ropa, calzado, electrónica de imitación y medicamentos falsos',
    annualSpendUSD: 590000000000, // $590 Billion (~2.5% del comercio mundial)
    growthRatePct: 4.8,
    iconName: 'ShieldX',
    accentColor: '#9333ea',
    description:
      'Valor del comercio transfronterizo de bienes falsificados y pirateados (moda de lujo falsa, componentes electrónicos falsificados, cosméticos y medicamentos adulterados) según la OCDE y la EUIPO.',
    sourceName: 'OECD & European Union Intellectual Property Office (EUIPO)',
    sourceYear: 2024,
    history: [
      { year: 2013, spendUSD: 461000000000 },
      { year: 2016, spendUSD: 509000000000 },
      { year: 2019, spendUSD: 550000000000 },
      { year: 2022, spendUSD: 575000000000 },
      { year: 2024, spendUSD: 585000000000 },
      { year: 2026, spendUSD: 590000000000 },
    ],
    tags: ['productos falsificados', 'pirateria internacional', 'mercado falsificaciones', 'counterfeit goods'],
  },

  // 55. Daños por cibercrimen y ataques ransomware
  {
    id: 'global-cybercrime-ransomware-damages',
    categoryId: 'illicit',
    title: 'Pérdidas Mundiales por Cibercrimen y Ransomware',
    subtitle: 'Coste global del robo de datos, extorsión digital, ciberfraude y rescates informáticos',
    annualSpendUSD: 9500000000000, // $9.5 Trillion
    growthRatePct: 15.0,
    iconName: 'Skull',
    accentColor: '#dc2626',
    description:
      'Coste económico anual infligido por ataques cibernéticos, grupos de ransomware, robo de propiedad intelectual y fraude digital corporativo en todo el mundo según Cybersecurity Ventures y el FBI IC3.',
    sourceName: 'Cybersecurity Ventures & FBI Internet Crime Complaint Center (IC3)',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 3000000000000 },
      { year: 2018, spendUSD: 4500000000000 },
      { year: 2020, spendUSD: 6000000000000 },
      { year: 2022, spendUSD: 7500000000000 },
      { year: 2024, spendUSD: 8800000000000 },
      { year: 2026, spendUSD: 9500000000000 },
    ],
    tags: ['cibercrimen perdidas', 'coste ransomware', 'cybercrime damages', 'ciberdelincuencia mundial'],
  },

  // 56. Cuánto dinero gana y tiene Cristiano Ronaldo
  {
    id: 'cristiano-ronaldo-annual-earnings-wealth',
    categoryId: 'sports',
    title: 'Ingresos Anuales y Fortuna de Cristiano Ronaldo (CR7)',
    subtitle: 'Sueldo en Al-Nassr, derechos de imagen y contratos publicitarios mundiales (Nike, Binance, marcas propias)',
    annualSpendUSD: 260000000, // $260 Million / year ($8.24/s)
    growthRatePct: 4.5,
    iconName: 'Trophy',
    accentColor: '#eab308',
    description:
      'Ingresos anuales totales de Cristiano Ronaldo, combinando su salario astronómico en el club saudí Al-Nassr (~200 M$) y más de 60 M$ en patrocinios comerciales globales (Nike, marcas de hoteles y fragancias CR7). Su patrimonio neto total estimado supera los 750 millones de dólares.',
    sourceName: 'Forbes The World’s Highest-Paid Athletes & Bloomberg Billionaires Index',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 42000000 },
      { year: 2016, spendUSD: 88000000 },
      { year: 2019, spendUSD: 109000000 },
      { year: 2021, spendUSD: 120000000 },
      { year: 2023, spendUSD: 136000000 },
      { year: 2024, spendUSD: 260000000 },
      { year: 2026, spendUSD: 265000000 },
    ],
    tags: ['cuanto dinero tiene cristiano ronaldo', 'sueldo cristiano ronaldo', 'fortuna cristiano ronaldo', 'cristiano ronaldo earnings'],
  },

  // 57. Cuánto dinero gana y tiene Lionel Messi
  {
    id: 'lionel-messi-annual-earnings-wealth',
    categoryId: 'sports',
    title: 'Ingresos Anuales y Fortuna de Lionel Messi',
    subtitle: 'Salario en Inter Miami, participación en suscripciones de Apple TV MLS y contratos con Adidas y marcas globales',
    annualSpendUSD: 135000000, // $135 Million / year ($4.28/s)
    growthRatePct: 3.8,
    iconName: 'Trophy',
    accentColor: '#38bdf8',
    description:
      'Ganancias anuales globales de Lionel Messi que suman su ficha deportiva en el Inter Miami de la MLS, regalías por suscripciones de Apple TV MLS Season Pass y contratos multimillonarios de patrocinio con Adidas, Lay’s y socios comerciales. Su patrimonio neto total estimado ronda los 650 millones de dólares.',
    sourceName: 'Forbes & Sportico Highest-Paid Athletes',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 39000000 },
      { year: 2016, spendUSD: 81000000 },
      { year: 2019, spendUSD: 127000000 },
      { year: 2021, spendUSD: 130000000 },
      { year: 2023, spendUSD: 130000000 },
      { year: 2024, spendUSD: 135000000 },
      { year: 2026, spendUSD: 138000000 },
    ],
    tags: ['cuanto dinero tiene messi', 'sueldo messi inter miami', 'fortuna lionel messi', 'messi earnings'],
  },

  // 58. Cuánto dinero gana y tiene Lamine Yamal
  {
    id: 'lamine-yamal-annual-earnings-wealth',
    categoryId: 'sports',
    title: 'Ingresos Anuales y Salario de Lamine Yamal',
    subtitle: 'Nómina profesional en el FC Barcelona, primas deportivas y contrato exclusivo multianual con Adidas',
    annualSpendUSD: 12500000, // $12.5 Million / year (~€11.5M, $0.40/s)
    growthRatePct: 35.0,
    iconName: 'Sparkles',
    accentColor: '#ec4899',
    description:
      'Ingresos anuales estimados del joven astro del fútbol mundial Lamine Yamal (FC Barcelona y Selección Española), sumando su contrato deportivo profesional renovado, primas por títulos y su contrato publicitario a largo plazo como imagen global de Adidas.',
    sourceName: 'Capology Salary Database, Transfermarkt & Forbes Sports',
    sourceYear: 2024,
    history: [
      { year: 2023, spendUSD: 1500000 },
      { year: 2024, spendUSD: 6000000 },
      { year: 2025, spendUSD: 10000000 },
      { year: 2026, spendUSD: 12500000 },
    ],
    tags: ['cuanto dinero tiene lamine yamal', 'sueldo lamine yamal', 'contrato lamine yamal barcelona', 'lamine yamal salary'],
  },

  // 59. Cuánto gasta China en gasto militar y defensa
  {
    id: 'china-military-defense-spending',
    categoryId: 'military',
    title: 'Gasto Militar y Presupuesto de Defensa de China',
    subtitle: 'Presupuesto oficial y estimado de las Fuerzas Armadas (EPL), modernización naval y arsenal estratégico',
    annualSpendUSD: 296000000000, // $296 Billion (~1.67 Trillones de yuanes)
    growthRatePct: 7.2,
    iconName: 'ShieldAlert',
    accentColor: '#dc2626',
    description:
      'Gasto anual militar total de la República Popular China para el Ejército Popular de Liberación (EPL), desarrollo de portaviones, cazas furtivos y disuasión nuclear según el SIPRI y el Ministerio de Finanzas de China.',
    sourceName: 'SIPRI (Stockholm International Peace Research Institute) & China Ministry of Finance',
    sourceYear: 2024,
    history: [
      { year: 2000, spendUSD: 22000000000 },
      { year: 2008, spendUSD: 86000000000 },
      { year: 2015, spendUSD: 196000000000 },
      { year: 2020, spendUSD: 252000000000 },
      { year: 2022, spendUSD: 275000000000 },
      { year: 2024, spendUSD: 288000000000 },
      { year: 2026, spendUSD: 296000000000 },
    ],
    tags: ['how much does china spend on military', 'how much does china spend on defense', 'china military spending', 'gasto militar china'],
  },

  // 60. Cuánto gasta China en educación
  {
    id: 'china-education-spending',
    categoryId: 'society',
    title: 'Gasto Público de China en Educación',
    subtitle: 'Financiación nacional de colegios públicos, universidades de élite e investigación académica',
    annualSpendUSD: 860000000000, // $860 Billion (~6.1 Trillones de yuanes, >4% del PIB)
    growthRatePct: 5.6,
    iconName: 'GraduationCap',
    accentColor: '#3b82f6',
    description:
      'Inversión fiscal y pública consolidada del gobierno central y los gobiernos locales de China destinada al sistema educativo obligatorio, institutos técnicos y red universitaria según el Ministerio de Educación de China.',
    sourceName: 'Ministry of Education of China & National Bureau of Statistics (NBS)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 260000000000 },
      { year: 2015, spendUSD: 520000000000 },
      { year: 2018, spendUSD: 660000000000 },
      { year: 2021, spendUSD: 780000000000 },
      { year: 2024, spendUSD: 830000000000 },
      { year: 2026, spendUSD: 860000000000 },
    ],
    tags: ['how much does china spend on education', 'how much does china spend on education per student', 'gasto educacion china', 'china education budget'],
  },

  // 61. Cuánto gasta China en Investigación y Desarrollo (I+D / R&D)
  {
    id: 'china-research-development-spending',
    categoryId: 'science',
    title: 'Gasto de China en Investigación y Desarrollo (I+D)',
    subtitle: 'Inversión récord en semiconductores, robótica, inteligencia artificial, energía verde y ciencia espacial',
    annualSpendUSD: 470000000000, // $470 Billion (~3.33 Trillones de yuanes, 2.64% del PIB)
    growthRatePct: 8.1,
    iconName: 'Atom',
    accentColor: '#a855f7',
    description:
      'Gasto nacional bruto anual en I+D (GERD) de China sumando financiación estatal e inversión corporativa en tecnología punta, chips avanzados y ciencia aplicada según la Oficina Nacional de Estadísticas de China y la OCDE.',
    sourceName: 'National Bureau of Statistics of China (NBS) & OECD Science and Technology',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 30000000000 },
      { year: 2012, spendUSD: 160000000000 },
      { year: 2018, spendUSD: 295000000000 },
      { year: 2021, spendUSD: 380000000000 },
      { year: 2024, spendUSD: 440000000000 },
      { year: 2026, spendUSD: 470000000000 },
    ],
    tags: ['how much does china spend on research and development', 'china r and d spending', 'gasto i+d china', 'china investigacion y desarrollo'],
  },

  // 62. Cuánto gasta China en Sanidad y Salud Pública
  {
    id: 'china-healthcare-spending',
    categoryId: 'health',
    title: 'Gasto de China en Sanidad y Salud Pública',
    subtitle: 'Presupuesto sanitario nacional, seguros médicos estatales y construcción de hospitales',
    annualSpendUSD: 1250000000000, // $1.25 Trillion (~8.9 Trillones de yuanes, ~7.1% del PIB)
    growthRatePct: 6.8,
    iconName: 'HeartPulse',
    accentColor: '#ef4444',
    description:
      'Gasto total en salud pública, cobertura médica universal, infraestructura hospitalaria y farmacopea en China según la Comisión Nacional de Salud (NHC) y la base de datos de la Organización Mundial de la Salud (OMS).',
    sourceName: 'National Health Commission of China (NHC) & WHO Global Health Expenditure',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 300000000000 },
      { year: 2015, spendUSD: 630000000000 },
      { year: 2018, spendUSD: 870000000000 },
      { year: 2021, spendUSD: 1080000000000 },
      { year: 2024, spendUSD: 1190000000000 },
      { year: 2026, spendUSD: 1250000000000 },
    ],
    tags: ['how much does china spend on healthcare', 'china healthcare spending', 'gasto sanidad china', 'china presupuesto salud'],
  },

  // 63. Cuánto gasta China en ayuda exterior y la Franja y la Ruta
  {
    id: 'china-foreign-aid-belt-road-spending',
    categoryId: 'government',
    title: 'Gasto de China en Ayuda Exterior y Franja y la Ruta',
    subtitle: 'Financiación de infraestructuras globales, préstamos para desarrollo y cooperación bilateral (Belt and Road)',
    annualSpendUSD: 38000000000, // $38 Billion
    growthRatePct: 4.0,
    iconName: 'Globe',
    accentColor: '#06b6d4',
    description:
      'Volumen anual de subvenciones, préstamos concesionales de desarrollo y proyectos de cooperación internacional ejecutados por la Agencia China de Cooperación Internacional para el Desarrollo (CIDCA) e instituciones financieras estatales en África, Asia y Latinoamérica.',
    sourceName: 'AidData Global Chinese Development Finance Dataset & CIDCA',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 12000000000 },
      { year: 2014, spendUSD: 24000000000 },
      { year: 2017, spendUSD: 35000000000 },
      { year: 2020, spendUSD: 33000000000 },
      { year: 2023, spendUSD: 36500000000 },
      { year: 2024, spendUSD: 37500000000 },
      { year: 2026, spendUSD: 38000000000 },
    ],
    tags: ['how much does china spend on foreign aid', 'china foreign aid spending', 'china belt and road expenditure', 'ayuda exterior china'],
  },

  // 64. Cuánto gasta China en lobbying e influencia en EE.UU.
  {
    id: 'china-lobbying-united-states-spending',
    categoryId: 'government',
    title: 'Gasto de China en Lobbying e Influencia en EE.UU.',
    subtitle: 'Fondos registrados en la Ley FARA por empresas estatales, medios y firmas de relaciones públicas chinas en Washington',
    annualSpendUSD: 65000000, // $65 Million
    growthRatePct: 5.0,
    iconName: 'Landmark',
    accentColor: '#64748b',
    description:
      'Gastos totales declarados anualmente ante el Departamento de Justicia de EE.UU. bajo la Ley de Registro de Agentes Extranjeros (FARA) por parte de entidades chinas para relaciones públicas, asesoría política y medios de comunicación en Washington D.C.',
    sourceName: 'OpenSecrets.org Foreign Lobby Watch & US Department of Justice (FARA)',
    sourceYear: 2024,
    history: [
      { year: 2016, spendUSD: 18000000 },
      { year: 2018, spendUSD: 35000000 },
      { year: 2020, spendUSD: 61000000 },
      { year: 2022, spendUSD: 62000000 },
      { year: 2024, spendUSD: 64000000 },
      { year: 2026, spendUSD: 65000000 },
    ],
    tags: ['how much does china spend on lobbying in the us', 'china lobbying us spending', 'china foreign lobby watch fara', 'lobbying china eeuu'],
  },

  // 65. Combien la France a dépensé pour l'Ukraine / la guerre en Ukraine
  {
    id: 'france-aid-support-ukraine-spending',
    categoryId: 'military',
    title: 'Dépenses et Aide de la France pour l’Ukraine',
    subtitle: 'Aide militaire bilatérale (canons CAESAR, missiles SCALP, blindés), soutien humanitaire et fonds européens',
    annualSpendUSD: 4200000000, // $4.2 Billion / year (~3.88 Milliards d’euros)
    growthRatePct: 8.5,
    iconName: 'ShieldAlert',
    accentColor: '#3b82f6',
    description:
      'Montant annuel total engagé par l’État français pour l’aide militaire, la formation de soldats ukrainiens, l’assistance financière et la quote-part française de la Facilité Européenne pour la Paix (FEP) selon le Kiel Institute et le Ministère des Armées.',
    sourceName: 'Kiel Institute Ukraine Support Tracker (IfW Kiel) & Ministère des Armées de France',
    sourceYear: 2024,
    history: [
      { year: 2021, spendUSD: 150000000 },
      { year: 2022, spendUSD: 2400000000 },
      { year: 2023, spendUSD: 3800000000 },
      { year: 2024, spendUSD: 4100000000 },
      { year: 2026, spendUSD: 4200000000 },
    ],
    tags: ["combien la france a depense pour l'ukraine", 'combien la france a depense pour la guerre en ukraine', 'france aide ukraine', 'aide militaire ukraine france'],
  },

  // 66. Combien la France a dépensé pour les JO / JO 2024 (Paris 2024)
  {
    id: 'paris-2024-olympic-games-spending',
    categoryId: 'sports',
    title: 'Dépenses et Coût Total des Jeux Olympiques de Paris 2024',
    subtitle: 'Budget total des infrastructures (SOLIDEO), organisation (COJO), sécurité et rénovation urbaine',
    annualSpendUSD: 2250000000, // $2.25 Billion / year (total cost ~€8.9B / $9.65B amortized across 4-year cycle)
    growthRatePct: 12.0,
    iconName: 'Trophy',
    accentColor: '#eab308',
    description:
      'Dépenses consolidées d’organisation des Jeux Olympiques et Paralympiques de Paris 2024, incluant le budget public des infrastructures (SOLIDEO: Village olympique, Centre aquatique) et le budget privé de fonctionnement du COJO selon la Cour des Comptes de France.',
    sourceName: 'Cour des Comptes de France & COJO Paris 2024 Financial Report',
    sourceYear: 2024,
    history: [
      { year: 2018, spendUSD: 450000000 },
      { year: 2020, spendUSD: 1100000000 },
      { year: 2022, spendUSD: 1950000000 },
      { year: 2023, spendUSD: 2450000000 },
      { year: 2024, spendUSD: 2850000000 },
      { year: 2026, spendUSD: 2250000000 },
    ],
    tags: ['combien la france a depense pour les jo', 'combien la france a depense pour les jo 2024', 'cout jo paris 2024', 'budget jo 2024'],
  },

  // 67. Combien la France a dépensé pour le COVID ("Quoi qu'il en coûte")
  {
    id: 'france-covid-19-pandemic-spending',
    categoryId: 'health',
    title: 'Dépenses de la France pour la Crise du COVID-19',
    subtitle: 'Financement du « Quoi qu’il en coûte » : chômage partiel, fonds de solidarité, Santé et plan de relance',
    annualSpendUSD: 42000000000, // $42 Billion / year baseline (cumul total >140 Mds € / $155B)
    growthRatePct: -6.0,
    iconName: 'HeartPulse',
    accentColor: '#ef4444',
    description:
      'Total des dépenses publiques et mesures budgétaires d’urgence engagées par la France pour faire face à la pandémie de COVID-19 (dispositif de chômage partiel, fonds de solidarité pour les entreprises, achats de vaccins et revalorisation du Ségur de la santé) selon la Cour des Comptes et Bercy.',
    sourceName: 'Cour des Comptes (Rapport dépenses crise sanitaire) & Ministère de l’Économie (Bercy)',
    sourceYear: 2024,
    history: [
      { year: 2019, spendUSD: 0 },
      { year: 2020, spendUSD: 72000000000 },
      { year: 2021, spendUSD: 64000000000 },
      { year: 2022, spendUSD: 48000000000 },
      { year: 2024, spendUSD: 44000000000 },
      { year: 2026, spendUSD: 42000000000 },
    ],
    tags: ['combien la france a depense pour le covid', 'cout covid france', 'quoi quil en coute covid france', 'france covid spending'],
  },

  // 68. Combien la France a dépensé pour nettoyer la Seine
  {
    id: 'france-cleaning-seine-river-spending',
    categoryId: 'government',
    title: 'Dépenses pour Nettoyer et Assainir la Seine (Plan Baignade)',
    subtitle: 'Plan d’assainissement majeur : bassin de stockage d’Austerlitz, modernisation des stations d’épuration et réseaux d’eau',
    annualSpendUSD: 380000000, // $380 Million / year (Total plan: ~1.40 Milliards d’euros / $1.52B)
    growthRatePct: 4.5,
    iconName: 'Waves',
    accentColor: '#06b6d4',
    description:
      'Investissement public global financé par l’État, la Ville de Paris, la Métropole du Grand Paris et l’Agence de l’Eau Seine-Normandie pour rendre la Seine baignable (construction du collecteur géant d’Austerlitz de 50 000 m³, désinfection des rejets et raccordements des bateaux).',
    sourceName: 'Préfecture de la région d’Île-de-France & Ville de Paris (Plan Baignade)',
    sourceYear: 2024,
    history: [
      { year: 2018, spendUSD: 120000000 },
      { year: 2020, spendUSD: 250000000 },
      { year: 2022, spendUSD: 390000000 },
      { year: 2023, spendUSD: 420000000 },
      { year: 2024, spendUSD: 410000000 },
      { year: 2026, spendUSD: 380000000 },
    ],
    tags: ['combien la france a depense pour nettoyer la seine', 'cout assainissement seine jo', 'plan baignade seine budget', 'cleaning seine river cost'],
  },

  // 69. Budget de l'État français pour les jeunes
  {
    id: 'france-youth-budget-spending',
    categoryId: 'government',
    title: 'Budget de l’État Français pour la Jeunesse',
    subtitle: 'Financement du Contrat d’Engagement Jeune (CEJ), Pass Culture, bourses CNOUS et aides à l’emploi des jeunes',
    annualSpendUSD: 7800000000, // $7.8 Billion (~7.20 Milliards d’euros)
    growthRatePct: 4.8,
    iconName: 'Users',
    accentColor: '#3b82f6',
    description:
      'Crédits budgétaires consolidés alloués par la France aux politiques en faveur des jeunes : Contrat d’Engagement Jeune (CEJ), Pass Culture, bourses sur critères sociaux, Service National Universel (SNU) et exonérations pour l’apprentissage et l’emploi des jeunes.',
    sourceName: 'Ministère de l’Éducation Nationale et de la Jeunesse & Loi de Finances (PLF)',
    sourceYear: 2024,
    history: [
      { year: 2016, spendUSD: 3900000000 },
      { year: 2019, spendUSD: 4800000000 },
      { year: 2021, spendUSD: 6500000000 },
      { year: 2023, spendUSD: 7400000000 },
      { year: 2024, spendUSD: 7650000000 },
      { year: 2026, spendUSD: 7800000000 },
    ],
    tags: ["budget de l'etat francais pour les jeunes", 'budget jeunesse france', 'pass culture contrat engagement jeune', 'aides jeunes etat francais'],
  },

  // 70. Budget de l'État français pour les immigrés (Immigration, Asile & Intégration)
  {
    id: 'france-immigration-asylum-budget-spending',
    categoryId: 'government',
    title: 'Budget de l’État Français pour l’Immigration et l’Asile',
    subtitle: 'Crédits de la Mission Immigration, asile et intégration : allocation ADA, hébergement CADA, OFII et aide médicale',
    annualSpendUSD: 3650000000, // $3.65 Billion (~3.38 Milliards d’euros)
    growthRatePct: 6.2,
    iconName: 'Landmark',
    accentColor: '#64748b',
    description:
      'Dépenses budgétaires annuelles de l’État français consacrées à l’accueil des demandeurs d’asile (ADA), centres d’hébergement (CADA/HUDA), intégration républicaine (OFII), lutte contre l’immigration irrégulière et Aide Médicale de l’État (AME).',
    sourceName: 'Ministère de l’Intérieur & Loi de Finances de l’État Français',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 1650000000 },
      { year: 2018, spendUSD: 2300000000 },
      { year: 2020, spendUSD: 2850000000 },
      { year: 2022, spendUSD: 3200000000 },
      { year: 2024, spendUSD: 3500000000 },
      { year: 2026, spendUSD: 3650000000 },
    ],
    tags: ["budget de l'etat francais pour les immigres", 'budget immigration asile france', 'cout immigration etat francais', 'mission immigration asile integration'],
  },

  // 71. Combien dépensent les Français pour Noël
  {
    id: 'france-household-christmas-spending',
    categoryId: 'society',
    title: 'Dépenses des Français pour les Fêtes de Noël',
    subtitle: 'Budget annuel des ménages pour les cadeaux, le repas de fête, les décorations et les transports de Noël',
    annualSpendUSD: 16500000000, // $16.5 Billion (~15.2 Milliards d’euros, moyenne ~549 €/foyer)
    growthRatePct: 2.5,
    iconName: 'Gift',
    accentColor: '#dc2626',
    description:
      'Dépenses cumulées des ménages français lors des fêtes de fin d’année (achats de cadeaux pour enfants et proches, repas gastronomique de réveillon, sapin et décorations) selon le baromètre Cofidis/CSA et l’INSEE.',
    sourceName: 'Baromètre de Noël Cofidis / CSA Research & INSEE',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 14200000000 },
      { year: 2018, spendUSD: 15300000000 },
      { year: 2020, spendUSD: 13900000000 },
      { year: 2022, spendUSD: 15800000000 },
      { year: 2024, spendUSD: 16200000000 },
      { year: 2026, spendUSD: 16500000000 },
    ],
    tags: ['combien depensent les francais pour noel', 'budget noel francais', 'cadeaux noel depenses france', 'repas noel budget france'],
  },

  // 72. Combien dépensent les Français pour s'habiller (Mode et Vêtements)
  {
    id: 'france-household-clothing-fashion-spending',
    categoryId: 'society',
    title: 'Dépenses des Français pour l’Habillement et la Mode',
    subtitle: 'Budget annuel des foyers en vêtements de prêt-à-porter, chaussures, maroquinerie et accessoires',
    annualSpendUSD: 44000000000, // $44.0 Billion (~40.5 Milliards d’euros, ~1380 €/foyer/an)
    growthRatePct: 1.8,
    iconName: 'Shirt',
    accentColor: '#8b5cf6',
    description:
      'Dépenses totales des ménages français en articles textiles, habillement femme, homme et enfant, et chaussures de ville selon les comptes nationaux de l’INSEE et l’Institut Français de la Mode (IFM).',
    sourceName: 'INSEE (Consommation des ménages) & Institut Français de la Mode (IFM)',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 41000000000 },
      { year: 2016, spendUSD: 42500000000 },
      { year: 2019, spendUSD: 44200000000 },
      { year: 2021, spendUSD: 39500000000 },
      { year: 2023, spendUSD: 43200000000 },
      { year: 2024, spendUSD: 43800000000 },
      { year: 2026, spendUSD: 44000000000 },
    ],
    tags: ['combien depensent les francais pour s habiller', 'budget habillement francais', 'depenses vetements mode france', 'insee consommation habillement'],
  },

  // 73. Combien les Français dépensent pour leur alimentation
  {
    id: 'france-household-food-spending',
    categoryId: 'food',
    title: 'Dépenses des Français pour l’Alimentation et les Courses',
    subtitle: 'Budget alimentaire global des ménages : produits frais, supermarchés, boulangeries et épicerie',
    annualSpendUSD: 230000000000, // $230 Billion (~212 Milliards d’euros, ~395 €/mois par foyer, ~17% du budget)
    growthRatePct: 4.2,
    iconName: 'Utensils',
    accentColor: '#10b981',
    description:
      'Consommation alimentaire globale à domicile des 29,5 millions de ménages français (viandes, poissons, fruits et légumes, produits laitiers, pain et boissons) calculée par l’INSEE et FranceAgriMer.',
    sourceName: 'INSEE (Comptes nationaux - Dépenses alimentaires des ménages) & FranceAgriMer',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 165000000000 },
      { year: 2015, spendUSD: 185000000000 },
      { year: 2018, spendUSD: 198000000000 },
      { year: 2021, spendUSD: 210000000000 },
      { year: 2023, spendUSD: 224000000000 },
      { year: 2024, spendUSD: 228000000000 },
      { year: 2026, spendUSD: 230000000000 },
    ],
    tags: ['combien les francais depensent pour leur alimentation', 'budget courses francais', 'alimentation menages insee', 'depenses nourriture france'],
  },

  // 74. Wie viel gibt Deutschland für Bürgergeld aus
  {
    id: 'germany-buergergeld-spending',
    categoryId: 'government',
    title: 'Ausgaben Deutschlands für das Bürgergeld',
    subtitle: 'Gesamtausgaben des Bundeshaushalts für Bürgergeld, Kosten der Unterkunft (KdU) und Jobcenter',
    annualSpendUSD: 48500000000, // $48.5 Billion (~44.8 Mrd. Euro)
    growthRatePct: 6.5,
    iconName: 'Landmark',
    accentColor: '#3b82f6',
    description:
      'Jährliche Gesamtausgaben des Bundes für die Grundsicherung für Arbeitsuchende (Bürgergeld für Regelbedarf, Mehrbedarfe sowie anteilige Kosten für Miete und Heizung) laut Bundesministerium für Arbeit und Soziales (BMAS) und Bundesagentur für Arbeit.',
    sourceName: 'Bundesministerium für Arbeit und Soziales (BMAS) & Bundesagentur für Arbeit',
    sourceYear: 2024,
    history: [
      { year: 2019, spendUSD: 36000000000 },
      { year: 2021, spendUSD: 41000000000 },
      { year: 2022, spendUSD: 43500000000 },
      { year: 2023, spendUSD: 46200000000 },
      { year: 2024, spendUSD: 47800000000 },
      { year: 2026, spendUSD: 48500000000 },
    ],
    tags: ['wie viel gibt deutschland fuer buergergeld aus', 'kosten buergergeld deutschland', 'bundeshaushalt buergergeld', 'buergergeld ausgaben'],
  },

  // 75. Wie viel gibt Deutschland für Militär, Rüstung und Verteidigung aus
  {
    id: 'germany-military-defense-spending',
    categoryId: 'military',
    title: 'Militärausgaben und Verteidigungshaushalt Deutschlands',
    subtitle: 'Verteidigungshaushalt (Einzelplan 14) und 100-Mrd.-Euro-Sondervermögen für die Bundeswehr (~2 % des BIP)',
    annualSpendUSD: 75500000000, // $75.5 Billion (~69.8 Mrd. Euro)
    growthRatePct: 9.8,
    iconName: 'ShieldAlert',
    accentColor: '#dc2626',
    description:
      'Gesamte deutsche Verteidigungsausgaben nach NATO-Kriterien, bestehend aus dem regulären Wehretat des Bundesministeriums der Verteidigung und den Mitteln aus dem Sondervermögen Bundeswehr laut SIPRI und Bundesfinanzministerium.',
    sourceName: 'SIPRI & Bundesministerium der Verteidigung (BMVg)',
    sourceYear: 2024,
    history: [
      { year: 2014, spendUSD: 46000000000 },
      { year: 2018, spendUSD: 49500000000 },
      { year: 2021, spendUSD: 56000000000 },
      { year: 2022, spendUSD: 58500000000 },
      { year: 2023, spendUSD: 66800000000 },
      { year: 2024, spendUSD: 73000000000 },
      { year: 2026, spendUSD: 75500000000 },
    ],
    tags: ['wie viel gibt deutschland fuer militaer aus', 'wie viel gibt deutschland fuer ruestung aus', 'wie viel gibt deutschland fuer verteidigung aus', 'verteidigungshaushalt bundeswehr'],
  },

  // 76. Wie viel gibt Deutschland für Entwicklungshilfe (ODA / BMZ) aus
  {
    id: 'germany-foreign-development-aid-spending',
    categoryId: 'government',
    title: 'Ausgaben Deutschlands für Entwicklungshilfe (ODA)',
    subtitle: 'Offizielle internationale Entwicklungszusammenarbeit, Krisenhilfe und BMZ-Haushalt (2. größter Geber weltweit)',
    annualSpendUSD: 36500000000, // $36.5 Billion (~33.8 Mrd. Euro, ~0.8% des BNE)
    growthRatePct: 3.2,
    iconName: 'Globe',
    accentColor: '#06b6d4',
    description:
      'Öffentliche Netto-Entwicklungsleistungen (Official Development Assistance - ODA) der Bundesrepublik Deutschland für Armutsbekämpfung, Klimaschutz, Bildungs- und Gesundheitsprojekte im Globalen Süden laut OECD DAC und Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung (BMZ).',
    sourceName: 'OECD Development Assistance Committee (DAC) & BMZ',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 13000000000 },
      { year: 2016, spendUSD: 24700000000 },
      { year: 2019, spendUSD: 24200000000 },
      { year: 2021, spendUSD: 32200000000 },
      { year: 2023, spendUSD: 35600000000 },
      { year: 2024, spendUSD: 36200000000 },
      { year: 2026, spendUSD: 36500000000 },
    ],
    tags: ['wie viel gibt deutschland fuer entwicklungshilfe aus', 'entwicklungshilfe deutschland oecd', 'bmz haushalt ausgaben', 'deutsche entwicklungshilfe'],
  },

  // 77. Wie viel gibt Deutschland für Rente aus
  {
    id: 'germany-state-pension-spending',
    categoryId: 'government',
    title: 'Ausgaben Deutschlands für die Gesetzliche Rente',
    subtitle: 'Gesamtausgaben der Gesetzlichen Rentenversicherung inklusive über 112 Mrd. € Bundeszuschuss',
    annualSpendUSD: 395000000000, // $395 Billion (~365 Mrd. Euro)
    growthRatePct: 4.6,
    iconName: 'Users',
    accentColor: '#eab308',
    description:
      'Gesamte jährliche Rentenzahlungen an rund 21 Millionen Rentnerinnen und Rentner in Deutschland, finanziert aus den Beiträgen zur gesetzlichen Rentenversicherung und dem Bundeszuschuss aus dem Bundeshaushalt laut Deutscher Rentenversicherung und BMAS.',
    sourceName: 'Deutsche Rentenversicherung Bund & BMAS',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 240000000000 },
      { year: 2015, spendUSD: 280000000000 },
      { year: 2018, spendUSD: 310000000000 },
      { year: 2021, spendUSD: 345000000000 },
      { year: 2023, spendUSD: 375000000000 },
      { year: 2024, spendUSD: 388000000000 },
      { year: 2026, spendUSD: 395000000000 },
    ],
    tags: ['wie viel gibt deutschland fuer rente aus', 'rentenausgaben deutschland', 'bundeszuschuss gesetzliche rente', 'deutsche rentenversicherung ausgaben'],
  },

  // 78. Wie viel gibt Deutschland für Bildung aus
  {
    id: 'germany-education-spending',
    categoryId: 'society',
    title: 'Öffentliche Ausgaben Deutschlands für Bildung',
    subtitle: 'Gesamtausgaben von Bund, Ländern und Gemeinden für Schulen, berufliche Bildung und Universitäten',
    annualSpendUSD: 190000000000, // $190 Billion (~176 Mrd. Euro)
    growthRatePct: 4.1,
    iconName: 'GraduationCap',
    accentColor: '#3b82f6',
    description:
      'Gesamte öffentliche Bildungsausgaben in Deutschland für allgemeinbildende und berufliche Schulen, Hochschulen, Kitas und Ausbildungsförderung laut Bildungsfinanzbericht des Statistischen Bundesamtes (Destatis).',
    sourceName: 'Statistisches Bundesamt (Destatis - Bildungsfinanzbericht)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 116000000000 },
      { year: 2015, spendUSD: 135000000000 },
      { year: 2018, spendUSD: 152000000000 },
      { year: 2021, spendUSD: 172000000000 },
      { year: 2023, spendUSD: 184000000000 },
      { year: 2024, spendUSD: 188000000000 },
      { year: 2026, spendUSD: 190000000000 },
    ],
    tags: ['wie viel gibt deutschland fuer bildung aus', 'bildungsausgaben deutschland destatis', 'schulausgaben deutschland', 'hochschulbudget bund laender'],
  },

  // 79. Wie viel gibt Deutschland für Flüchtlinge aus
  {
    id: 'germany-refugees-asylum-spending',
    categoryId: 'government',
    title: 'Ausgaben Deutschlands für Flüchtlinge und Asyl',
    subtitle: 'Flüchtlingsbezogene Gesamtausgaben von Bund und Bundesländern : Unterbringung, Integration und Fluchtursachenbekämpfung',
    annualSpendUSD: 29500000000, // $29.5 Billion (~27.2 Mrd. Euro)
    growthRatePct: 5.2,
    iconName: 'Landmark',
    accentColor: '#64748b',
    description:
      'Konsolidierte flüchtlingsbezogene Ausgaben des Bundes und der 16 Bundesländer für Registrierung, Unterbringung, Verpflegung, Integrationskurse, Sprachförderung und Bekämpfung von Fluchtursachen laut Bericht des Bundesfinanzministeriums (BMF).',
    sourceName: 'Bundesministerium der Finanzen (BMF - Bericht über flüchtlingsbezogene Ausgaben) & BAMF',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 16000000000 },
      { year: 2017, spendUSD: 23500000000 },
      { year: 2020, spendUSD: 22000000000 },
      { year: 2022, spendUSD: 28500000000 },
      { year: 2024, spendUSD: 29000000000 },
      { year: 2026, spendUSD: 29500000000 },
    ],
    tags: ['wie viel gibt deutschland fuer fluechtlinge aus', 'kosten fluechtlinge bund laender', 'fluechtlingsausgaben deutschland', 'bamf integrationskosten'],
  },

  // 80. Wie viel gibt Deutschland für Soziales / Sozialleistungen aus (Sozialbudget)
  {
    id: 'germany-total-social-budget-spending',
    categoryId: 'government',
    title: 'Gesamtausgaben Deutschlands für Soziales (Sozialbudget)',
    subtitle: 'Konsolidiertes Sozialbudget aller Sicherungssysteme: Gesetzliche Kranken-, Renten-, Pflege- und Arbeitslosenversicherung (~30,5 % des BIP)',
    annualSpendUSD: 1320000000000, // $1.32 Trillion (~1.22 Billionen Euro)
    growthRatePct: 4.8,
    iconName: 'Landmark',
    accentColor: '#8b5cf6',
    description:
      'Gesamte Sozialleistungen und Aufwendungen aller sozialen Sicherungssysteme in Deutschland (Krankenkassen, Rentenversicherung, Pflegeversicherung, Grundsicherung, Kindergeld und Unfallversicherung) laut offiziellem Sozialbudget des BMAS.',
    sourceName: 'Bundesministerium für Arbeit und Soziales (BMAS - Sozialbudget)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 820000000000 },
      { year: 2015, spendUSD: 950000000000 },
      { year: 2018, spendUSD: 1060000000000 },
      { year: 2021, spendUSD: 1190000000000 },
      { year: 2023, spendUSD: 1260000000000 },
      { year: 2024, spendUSD: 1295000000000 },
      { year: 2026, spendUSD: 1320000000000 },
    ],
    tags: ['wie viel gibt deutschland fuer soziales aus', 'wie viel gibt deutschland fuer sozialleistungen aus', 'sozialbudget deutschland bmas', 'sozialausgaben bund'],
  },

  // 81. Wie viel geben die Deutschen für Urlaub aus
  {
    id: 'germany-household-vacation-travel-spending',
    categoryId: 'society',
    title: 'Ausgaben der Deutschen für Urlaub und Reisen',
    subtitle: 'Jährliche Gesamtausgaben für Urlaubsreisen, Pauschalreisen, Flüge und Hotelübernachtungen (~65 Mio. Urlaubsreisen)',
    annualSpendUSD: 86000000000, // $86.0 Billion (~79.5 Mrd. Euro, ~1200 € pro Person/Reise)
    growthRatePct: 5.5,
    iconName: 'Globe',
    accentColor: '#06b6d4',
    description:
      'Gesamte Reise- und Urlaubsausgaben der deutschen Bevölkerung für Haupt- und Kurzurlaubsreisen im In- und Ausland laut Deutscher Reiseverband (DRV) und FUR Reiseanalyse.',
    sourceName: 'Deutscher Reiseverband (DRV) & FUR Reiseanalyse',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 69000000000 },
      { year: 2019, spendUSD: 73000000000 },
      { year: 2020, spendUSD: 36000000000 },
      { year: 2022, spendUSD: 76000000000 },
      { year: 2023, spendUSD: 82500000000 },
      { year: 2024, spendUSD: 84500000000 },
      { year: 2026, spendUSD: 86000000000 },
    ],
    tags: ['wie viel geben die deutschen fuer urlaub aus', 'urlaubsausgaben deutschland', 'reiseausgaben der deutschen', 'drv urlaubsstudie'],
  },

  // 82. Wie viel geben die Deutschen für Lebensmittel aus
  {
    id: 'germany-household-food-spending',
    categoryId: 'food',
    title: 'Ausgaben der Deutschen für Lebensmittel und Getränke',
    subtitle: 'Monatlicher und jährlicher Lebensmittelkonsum der 41 Mio. Haushalte (~415 €/Monat pro Haushalt, ~15 % des Konsums)',
    annualSpendUSD: 215000000000, // $215 Billion (~198 Mrd. Euro)
    growthRatePct: 4.0,
    iconName: 'Utensils',
    accentColor: '#10b981',
    description:
      'Gesamte Konsumausgaben der privaten Haushalte in Deutschland für Nahrungsmittel, alkoholfreie Getränke und Tabakwaren zu Hause laut Volkswirtschaftlicher Gesamtrechnung des Statistischen Bundesamtes (Destatis).',
    sourceName: 'Statistisches Bundesamt (Destatis - Konsumausgaben der privaten Haushalte)',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 148000000000 },
      { year: 2016, spendUSD: 165000000000 },
      { year: 2019, spendUSD: 180000000000 },
      { year: 2021, spendUSD: 195000000000 },
      { year: 2023, spendUSD: 208000000000 },
      { year: 2024, spendUSD: 212000000000 },
      { year: 2026, spendUSD: 215000000000 },
    ],
    tags: ['wie viel geben die deutschen fuer lebensmittel aus', 'lebensmittelausgaben deutschland destatis', 'wocheneinkauf budget deutschland', 'essen trinken ausgaben haushalt'],
  },

  // 83. Wie viel geben die Deutschen für Silvesterfeuerwerk aus
  {
    id: 'germany-silvester-fireworks-spending',
    categoryId: 'luxury',
    title: 'Ausgaben der Deutschen für Silvesterfeuerwerk',
    subtitle: 'Umsatz mit Pyrotechnik, Raketen und Böllern an den 3 Verkaufstagen vor dem Jahreswechsel',
    annualSpendUSD: 195000000, // $195 Million (~180 Mio. Euro)
    growthRatePct: 3.8,
    iconName: 'Sparkles',
    accentColor: '#f59e0b',
    description:
      'Gesamtumsatz der pyrotechnischen Industrie in Deutschland im Verkauf von Silvesterfeuerwerk (Raketen, Batteriefeuerwerk und Knallkörper) laut Verband der pyrotechnischen Industrie (VPI).',
    sourceName: 'Verband der pyrotechnischen Industrie (VPI)',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 140000000 },
      { year: 2018, spendUSD: 150000000 },
      { year: 2020, spendUSD: 25000000 }, // Verkaufsverbot
      { year: 2022, spendUSD: 190000000 },
      { year: 2023, spendUSD: 192000000 },
      { year: 2024, spendUSD: 194000000 },
      { year: 2026, spendUSD: 195000000 },
    ],
    tags: ['wie viel geben die deutschen fuer feuerwerk aus', 'wie viel geben die deutschen fuer silvesterfeuerwerk aus', 'vpi feuerwerk umsatz', 'boeller silvester ausgaben'],
  },

  // 84. Wie viel geben die Deutschen für Weihnachtsgeschenke aus
  {
    id: 'germany-household-christmas-gifts-spending',
    categoryId: 'society',
    title: 'Ausgaben der Deutschen für Weihnachtsgeschenke',
    subtitle: 'Gesamtbudget der Verbraucher für Geschenke an Familie und Freunde (~500 € pro schenkende Person)',
    annualSpendUSD: 23500000000, // $23.5 Billion (~21.8 Mrd. Euro)
    growthRatePct: 2.1,
    iconName: 'Gift',
    accentColor: '#dc2626',
    description:
      'Gesamtausgaben für Weihnachtsgeschenke (Spielwaren, Elektronik, Bücher, Kosmetik und Gutscheine) während des Weihnachtsgeschäfts laut Handelsverband Deutschland (HDE) und GfK.',
    sourceName: 'Handelsverband Deutschland (HDE - Weihnachtsstudie) & GfK',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 19500000000 },
      { year: 2018, spendUSD: 21500000000 },
      { year: 2020, spendUSD: 20500000000 },
      { year: 2022, spendUSD: 22800000000 },
      { year: 2023, spendUSD: 23100000000 },
      { year: 2024, spendUSD: 23300000000 },
      { year: 2026, spendUSD: 23500000000 },
    ],
    tags: ['wie viel geben die deutschen fuer weihnachtsgeschenke aus', 'hde weihnachtsgeschenke budget', 'geschenke weihnachten ausgaben deutschland', 'gfk weihnachtsstudie'],
  },

  // 85. Wie viel geben die Deutschen für Miete und Wohnen aus
  {
    id: 'germany-household-rent-housing-spending',
    categoryId: 'society',
    title: 'Ausgaben der Deutschen für Miete und Wohnen',
    subtitle: 'Bruttokaltmiete, Nebenkosten und Instandhaltung aller 41 Mio. Haushalte (~28 % des Konsumbudgets)',
    annualSpendUSD: 380000000000, // $380 Billion (~350 Mrd. Euro)
    growthRatePct: 4.4,
    iconName: 'Landmark',
    accentColor: '#3b82f6',
    description:
      'Gesamte Wohnkosten der privaten Haushalte in Deutschland für Nettokaltmieten, Nebenkosten (Heizung, Warmwasser, Müllabfuhr) sowie Instandhaltung für Mieter und selbstnutzende Eigentümer laut Destatis.',
    sourceName: 'Statistisches Bundesamt (Destatis - Mikrozensus Wohnen)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 240000000000 },
      { year: 2015, spendUSD: 285000000000 },
      { year: 2018, spendUSD: 315000000000 },
      { year: 2021, spendUSD: 345000000000 },
      { year: 2023, spendUSD: 368000000000 },
      { year: 2024, spendUSD: 375000000000 },
      { year: 2026, spendUSD: 380000000000 },
    ],
    tags: ['wie viel geben die deutschen fuer miete aus', 'wohnausgaben deutschland destatis', 'mietkosten haushalte', 'mietbelastungsquote deutschland'],
  },

  // 86. Wie viel geben die Deutschen für Kleidung und Mode aus
  {
    id: 'germany-household-clothing-fashion-spending',
    categoryId: 'society',
    title: 'Ausgaben der Deutschen für Kleidung und Schuhe',
    subtitle: 'Jahresbudget der Haushalte für Damen-, Herren- und Kindermode sowie Schuhwerk (~1.600 €/Haushalt/Jahr)',
    annualSpendUSD: 72000000000, // $72.0 Billion (~66.5 Mrd. Euro)
    growthRatePct: 2.3,
    iconName: 'Shirt',
    accentColor: '#8b5cf6',
    description:
      'Gesamtausgaben der Verbraucher in Deutschland für Bekleidung, Textilien und Schuhe laut BTE Handelsverband Textil Schuhe Lederwaren und Destatis.',
    sourceName: 'BTE Handelsverband Textil Schuhe & Destatis',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 62000000000 },
      { year: 2016, spendUSD: 66000000000 },
      { year: 2019, spendUSD: 68500000000 },
      { year: 2021, spendUSD: 59000000000 },
      { year: 2023, spendUSD: 70200000000 },
      { year: 2024, spendUSD: 71200000000 },
      { year: 2026, spendUSD: 72000000000 },
    ],
    tags: ['wie viel geben die deutschen fuer kleidung aus', 'modeausgaben deutschland', 'bte bekleidung umsatz', 'schuhe kleidung budget haushalt'],
  },

  // 87. Wie viel geben die Deutschen für Verlobungsringe aus
  {
    id: 'germany-engagement-ring-spending',
    categoryId: 'society',
    title: 'Ausgaben der Deutschen für Verlobungsringe',
    subtitle: 'Jährlicher Gesamtmarkt für Antragsringe und Diamanten (~380.000 Heiratsanträge, Ø ~680 € pro Ring)',
    annualSpendUSD: 280000000, // $280 Million (~260 Mio. Euro, $8.87/s)
    growthRatePct: 3.5,
    iconName: 'Sparkles',
    accentColor: '#ec4899',
    description:
      'Geschätzte jährliche Gesamtausgaben für Verlobungsringe und Solitärdiamanten in Deutschland bei rund 380.000 Heiratsanträgen und Eheschließungen laut Bundesverband der Juweliere und Schmuckbranche.',
    sourceName: 'Bundesverband der Juweliere, Schmuck- und Uhrenfachgeschäfte (BVJ)',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 210000000 },
      { year: 2018, spendUSD: 245000000 },
      { year: 2020, spendUSD: 195000000 },
      { year: 2022, spendUSD: 265000000 },
      { year: 2024, spendUSD: 275000000 },
      { year: 2026, spendUSD: 280000000 },
    ],
    tags: ['wie viel geben die deutschen fuer verlobungsring aus', 'kosten verlobungsring deutschland', 'antragsring preis durchschnitt', 'diamantring verlobung budget'],
  },

  // 88. Wie viel geben die Deutschen für Autos aus (Neuwagen & Gebrauchtwagen)
  {
    id: 'germany-car-vehicle-purchase-spending',
    categoryId: 'society',
    title: 'Ausgaben der Deutschen für den Autokauf (Pkw)',
    subtitle: 'Gesamtvolumen für Neuwagen- und Gebrauchtwagenkäufe (~2,8 Mio. Neuwagen + ~6 Mio. Gebrauchtwagen)',
    annualSpendUSD: 115000000000, // $115 Billion (~106 Mrd. Euro)
    growthRatePct: 4.1,
    iconName: 'Car',
    accentColor: '#3b82f6',
    description:
      'Gesamtes jährliches Kaufvolumen privater und gewerblicher Autokäufer in Deutschland für Neuwagen (Durchschnittspreis >44.000 €) und Gebrauchtwagen laut DAT-Report und Kraftfahrt-Bundesamt (KBA).',
    sourceName: 'Deutsche Automobil Treuhand (DAT-Report) & Kraftfahrt-Bundesamt (KBA)',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 85000000000 },
      { year: 2016, spendUSD: 98000000000 },
      { year: 2019, spendUSD: 108000000000 },
      { year: 2021, spendUSD: 95000000000 },
      { year: 2023, spendUSD: 110000000000 },
      { year: 2024, spendUSD: 113500000000 },
      { year: 2026, spendUSD: 115000000000 },
    ],
    tags: ['wie viel geben die deutschen fuer autos aus', 'autokauf ausgaben deutschland', 'dat report pkw neuwagen gebrauchtwagen', 'durchschnittspreis auto deutschland'],
  },

  // 89. Wie viel geben die Deutschen für Halloween aus
  {
    id: 'germany-halloween-spending',
    categoryId: 'society',
    title: 'Ausgaben der Deutschen für Halloween',
    subtitle: 'Umsatz im Einzelhandel für Kostüme, Deko, Süßwaren und Gruselpartys (~500 Mio. € Markt)',
    annualSpendUSD: 540000000, // $540 Million (~500 Mio. Euro, $17.11/s)
    growthRatePct: 6.8,
    iconName: 'Skull',
    accentColor: '#f59e0b',
    description:
      'Umsatz der deutschen Händler und Konsumenten rund um Halloween für Kostüme, Make-up, Dekoartikel, Kürbisse und Süßigkeiten für «Süßes oder Saures» laut Handelsverband Deutschland (HDE).',
    sourceName: 'Handelsverband Deutschland (HDE - Halloween-Verbraucherumfrage)',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 240000000 },
      { year: 2018, spendUSD: 360000000 },
      { year: 2020, spendUSD: 320000000 },
      { year: 2022, spendUSD: 460000000 },
      { year: 2023, spendUSD: 505000000 },
      { year: 2024, spendUSD: 525000000 },
      { year: 2026, spendUSD: 540000000 },
    ],
    tags: ['wie viel geben die deutschen fuer halloween aus', 'hde halloween umsatz', 'halloween kostueme deko ausgaben', 'halloween markt deutschland'],
  },

  // 90. Quanto o Brasil gasta com Bolsa Família
  {
    id: 'brazil-bolsa-familia-spending',
    categoryId: 'government',
    title: 'Gastos do Brasil com o Programa Bolsa Família',
    subtitle: 'Transferência de renda direta para mais de 20,8 milhões de famílias em situação de vulnerabilidade',
    annualSpendUSD: 34000000000, // $34.0 Billion (~R$ 170 Bilhões de reais)
    growthRatePct: 5.2,
    iconName: 'Users',
    accentColor: '#10b981',
    description:
      'Orçamento anual executado pelo Governo Federal do Brasil para o pagamento do benefício mensal do Bolsa Família (média de R$ 680 por família) segundo o Ministério do Desenvolvimento Social (MDS) e o Portal da Transparência.',
    sourceName: 'Ministério do Desenvolvimento e Assistência Social (MDS) & Portal da Transparência',
    sourceYear: 2024,
    history: [
      { year: 2014, spendUSD: 11000000000 },
      { year: 2018, spendUSD: 8500000000 },
      { year: 2020, spendUSD: 18500000000 },
      { year: 2022, spendUSD: 17000000000 },
      { year: 2023, spendUSD: 32500000000 },
      { year: 2024, spendUSD: 33500000000 },
      { year: 2026, spendUSD: 34000000000 },
    ],
    tags: ['quanto o brasil gasta com bolsa familia', 'bolsa familia por ano', 'orcamento bolsa familia mds', 'custo bolsa familia brasil'],
  },

  // 91. Quanto o Brasil gasta com o SUS por ano (Sistema Único de Saúde)
  {
    id: 'brazil-sus-public-healthcare-spending',
    categoryId: 'health',
    title: 'Gastos do Brasil com o SUS (Sistema Único de Saúde)',
    subtitle: 'Orçamento federal da Saúde: rede hospitalar pública, vacinação nacional, atenção primária e Samu',
    annualSpendUSD: 46000000000, // $46.0 Billion (~R$ 231 Bilhões de reais)
    growthRatePct: 6.8,
    iconName: 'HeartPulse',
    accentColor: '#ef4444',
    description:
      'Recursos federais consolidados destinados ao financiamento do SUS (hospitais públicos, Farmácia Popular, vacinas, cirurgias de alta complexidade e atendimento a mais de 190 milhões de brasileiros) segundo o Ministério da Saúde e o Siops.',
    sourceName: 'Ministério da Saúde do Brasil & Sistema Siops (Tesouro Nacional)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 25000000000 },
      { year: 2015, spendUSD: 31000000000 },
      { year: 2018, spendUSD: 32500000000 },
      { year: 2021, spendUSD: 42000000000 },
      { year: 2023, spendUSD: 43500000000 },
      { year: 2024, spendUSD: 45000000000 },
      { year: 2026, spendUSD: 46000000000 },
    ],
    tags: ['quanto o brasil gasta com o sus por ano', 'orcamento sus saude brasil', 'gastos saude publica brasil', 'ministerio da saude orcamento anual'],
  },

  // 92. Quanto o Brasil gasta com o Judiciário (Poder Judiciário)
  {
    id: 'brazil-judiciary-system-spending',
    categoryId: 'government',
    title: 'Gastos do Brasil com o Poder Judiciário',
    subtitle: 'Custo total dos tribunais superiores (STF, STJ, TST, TSE), Justiça Federal e Tribunais de Justiça Estaduais (~1,3% do PIB)',
    annualSpendUSD: 24500000000, // $24.5 Billion (~R$ 123 Bilhões de reais)
    growthRatePct: 4.5,
    iconName: 'Scale',
    accentColor: '#3b82f6',
    description:
      'Despesa total anual do Poder Judiciário brasileiro com magistrados, servidores, estrutura física e tecnologia em toda a Justiça Estadual, Federal, do Trabalho e Eleitoral segundo o relatório oficial «Justiça em Números» do CNJ.',
    sourceName: 'Conselho Nacional de Justiça (CNJ - Relatório Justiça em Números)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 16500000000 },
      { year: 2015, spendUSD: 21000000000 },
      { year: 2018, spendUSD: 23200000000 },
      { year: 2021, spendUSD: 21500000000 },
      { year: 2023, spendUSD: 23800000000 },
      { year: 2024, spendUSD: 24200000000 },
      { year: 2026, spendUSD: 24500000000 },
    ],
    tags: ['quanto o brasil gasta com o judiciario', 'custo poder judiciario brasil', 'cnj justica em numeros', 'gastos stf tribunais brasil'],
  },

  // 93. Quanto o Brasil gasta com Aposentadoria (Previdência Social / INSS)
  {
    id: 'brazil-inss-pension-spending',
    categoryId: 'government',
    title: 'Gastos do Brasil com Aposentadorias e Previdência Social',
    subtitle: 'Benefícios previdenciários pagos pelo INSS (RGPS) e servidores públicos da União (RPPS)',
    annualSpendUSD: 190000000000, // $190 Billion (~R$ 950 Bilhões de reais)
    growthRatePct: 7.2,
    iconName: 'Landmark',
    accentColor: '#eab308',
    description:
      'Total de benefícios previdenciários de aposentadoria por idade, tempo de contribuição, invalidez e pensões pagas pelo INSS e regime dos servidores públicos federais segundo o Ministério da Previdência Social e o Tesouro Nacional.',
    sourceName: 'Ministério da Previdência Social & Secretaria do Tesouro Nacional',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 95000000000 },
      { year: 2015, spendUSD: 130000000000 },
      { year: 2018, spendUSD: 155000000000 },
      { year: 2021, spendUSD: 165000000000 },
      { year: 2023, spendUSD: 182000000000 },
      { year: 2024, spendUSD: 187000000000 },
      { year: 2026, spendUSD: 190000000000 },
    ],
    tags: ['quanto o brasil gasta com aposentadoria', 'gastos previdencia social inss', 'folha de pagamento aposentados brasil', 'tesouro nacional previdencia'],
  },

  // 94. Quanto o Brasil gasta com políticos por ano
  {
    id: 'brazil-politicians-congress-spending',
    categoryId: 'government',
    title: 'Gastos do Brasil com Políticos e Congresso Nacional',
    subtitle: 'Custo da Câmara dos Deputados, Senado Federal, Fundo Eleitoral, cotas parlamentares e gabinetes',
    annualSpendUSD: 8200000000, // $8.2 Billion (~R$ 41 Bilhões de reais)
    growthRatePct: 5.5,
    iconName: 'Landmark',
    accentColor: '#8b5cf6',
    description:
      'Custo anual consolidado do sistema político brasileiro somando o orçamento do Congresso Nacional (Câmara e Senado), fundo partidário, fundo eleitoral de campanha (Fundão), assembleias estaduais e cotas parlamentares (CEAP).',
    sourceName: 'Congresso Nacional do Brasil, Portal da Transparência & TSE',
    sourceYear: 2024,
    history: [
      { year: 2014, spendUSD: 4500000000 },
      { year: 2018, spendUSD: 6200000000 },
      { year: 2020, spendUSD: 6800000000 },
      { year: 2022, spendUSD: 7800000000 },
      { year: 2024, spendUSD: 8050000000 },
      { year: 2026, spendUSD: 8200000000 },
    ],
    tags: ['quanto o brasil gasta com politicos', 'quanto o brasil gasta com politicos por ano', 'custo congresso nacional brasil', 'fundo eleitoral gastos politicos'],
  },

  // 95. Quanto o Brasil gasta com ex-presidentes
  {
    id: 'brazil-former-presidents-benefits-spending',
    categoryId: 'government',
    title: 'Gastos do Brasil com Ex-Presidentes da República',
    subtitle: 'Segurança pessoal, 6 servidores de apoio de confiança, 2 veículos oficiais com combustível e diárias de viagens (Lei 7.474/1986)',
    annualSpendUSD: 2500000, // $2.5 Million (~R$ 12.5 Milhões de reais, $0.08/s)
    growthRatePct: 4.0,
    iconName: 'User',
    accentColor: '#64748b',
    description:
      'Gastos custeados pela Presidência da República para garantir os direitos previstos em lei a todos os ex-presidentes da República do Brasil (servidores comissionados, assessores, seguranças do GSI, veículos e viagens institucionais).',
    sourceName: 'Presidência da República (Secretaria-Geral) & Portal da Transparência',
    sourceYear: 2024,
    history: [
      { year: 2016, spendUSD: 1400000 },
      { year: 2019, spendUSD: 1800000 },
      { year: 2021, spendUSD: 2100000 },
      { year: 2023, spendUSD: 2350000 },
      { year: 2024, spendUSD: 2450000 },
      { year: 2026, spendUSD: 2500000 },
    ],
    tags: ['quanto o brasil gasta com ex presidentes', 'custo ex presidentes brasil', 'assessores segurancas ex presidentes', 'lei 7474 ex presidentes'],
  },

  // 96. Quanto o Brasil gasta com isenção fiscal (Renúncias Tributárias)
  {
    id: 'brazil-tax-exemptions-subsidies-spending',
    categoryId: 'government',
    title: 'Gastos Tributários do Brasil com Isenções Fiscais e Subsídios',
    subtitle: 'Renúncias de receitas federais em desonerações, Simples Nacional, Zona Franca de Manaus e incentivos setoriais (~5% do PIB)',
    annualSpendUSD: 105000000000, // $105 Billion (~R$ 525 Bilhões de reais)
    growthRatePct: 6.0,
    iconName: 'Coins',
    accentColor: '#f59e0b',
    description:
      'Volume total de impostos e tributos não arrecadados pelo Governo Federal em razão de isenções fiscais, regimes tributários favorecidos, deduções e subsídios concedidos a setores econômicos segundo a Receita Federal.',
    sourceName: 'Receita Federal do Brasil (Demonstrativo dos Gastos Tributários - DGT)',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 65000000000 },
      { year: 2016, spendUSD: 78000000000 },
      { year: 2019, spendUSD: 88000000000 },
      { year: 2021, spendUSD: 94000000000 },
      { year: 2023, spendUSD: 101000000000 },
      { year: 2024, spendUSD: 103500000000 },
      { year: 2026, spendUSD: 105000000000 },
    ],
    tags: ['quanto o brasil gasta com isencao fiscal', 'renuncias fiscais brasil', 'gastos tributarios receita federal', 'subsidios fiscais brasil'],
  },

  // 97. Quanto o Brasil gasta com pensão para filhas de militares
  {
    id: 'brazil-military-daughters-pension-spending',
    categoryId: 'military',
    title: 'Gastos com Pensões para Filhas de Militares no Brasil',
    subtitle: 'Pensões vitalícias pagas a mais de 100 mil herdeiras e filhas solteiras de militares das Forças Armadas',
    annualSpendUSD: 4000000000, // $4.0 Billion (~R$ 20 Bilhões de reais)
    growthRatePct: 3.0,
    iconName: 'ShieldAlert',
    accentColor: '#dc2626',
    description:
      'Gasto anual com pensões militares vitalícias pagas pelo Tesouro Nacional e Ministério da Defesa às filhas de membros falecidos do Exército, Marinha e Aeronáutica sob a legislação anterior à MP 2.215-10/2001 auditado pelo TCU.',
    sourceName: 'Tribunal de Contas da União (TCU) & Ministério da Defesa do Brasil',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 2800000000 },
      { year: 2018, spendUSD: 3300000000 },
      { year: 2020, spendUSD: 3650000000 },
      { year: 2022, spendUSD: 3850000000 },
      { year: 2024, spendUSD: 3950000000 },
      { year: 2026, spendUSD: 4000000000 },
    ],
    tags: ['quanto o brasil gasta com pensao para filhas de militares', 'pensao filhas militares tcu', 'custo pensoes militares brasil', 'pensao vitalicia forcas armadas'],
  },

  // 98. Quanto os brasileiros gastam com bets e apostas online
  {
    id: 'brazil-online-bets-gambling-spending',
    categoryId: 'luxury',
    title: 'Gastos dos Brasileiros com Bets e Apostas Online',
    subtitle: 'Volume total transferido para plataformas de apostas esportivas e cassinos virtuais via PIX (~R$ 20 bi/mês)',
    annualSpendUSD: 24000000000, // $24.0 Billion (~R$ 120 Bilhões de reais)
    growthRatePct: 22.0,
    iconName: 'Dices',
    accentColor: '#ec4899',
    description:
      'Volume total de dinheiro transferido por apostadores brasileiros via PIX para plataformas e sites de apostas de quota fixa (bets) e cassinos online segundo a Nota Técnica do Banco Central do Brasil (BCB) e Anbima.',
    sourceName: 'Banco Central do Brasil (BCB - Nota Técnica Apostas Online) & Anbima',
    sourceYear: 2024,
    history: [
      { year: 2019, spendUSD: 2000000000 },
      { year: 2021, spendUSD: 7500000000 },
      { year: 2022, spendUSD: 14000000000 },
      { year: 2023, spendUSD: 19500000000 },
      { year: 2024, spendUSD: 23200000000 },
      { year: 2026, spendUSD: 24000000000 },
    ],
    tags: ['quanto os brasileiros gastam com bets', 'quanto os brasileiros gastam em apostas', 'apostas online pix banco central', 'mercado de bets brasil'],
  },

  // 99. Quanto os brasileiros gastam nos EUA (Turismo)
  {
    id: 'brazil-tourists-spending-united-states',
    categoryId: 'society',
    title: 'Gastos de Turistas Brasileiros nos Estados Unidos',
    subtitle: 'Despesas com compras, hotéis, parques temáticos e passagens aéreas em Miami, Orlando e Nova York',
    annualSpendUSD: 8500000000, // $8.5 Billion (~R$ 42.5 Bilhões de reais)
    growthRatePct: 7.5,
    iconName: 'Globe',
    accentColor: '#06b6d4',
    description:
      'Gasto total anual dos mais de 1,6 milhão de turistas brasileiros em viagens internacionais aos Estados Unidos (Orlando, Miami, Nova York e Las Vegas) registrado pelo US National Travel and Tourism Office (NTTO) e Banco Central do Brasil.',
    sourceName: 'US National Travel and Tourism Office (NTTO) & Banco Central do Brasil (BCB)',
    sourceYear: 2024,
    history: [
      { year: 2014, spendUSD: 11500000000 },
      { year: 2018, spendUSD: 8200000000 },
      { year: 2020, spendUSD: 1800000000 },
      { year: 2022, spendUSD: 6800000000 },
      { year: 2023, spendUSD: 8100000000 },
      { year: 2024, spendUSD: 8350000000 },
      { year: 2026, spendUSD: 8500000000 },
    ],
    tags: ['quanto os brasileiros gastam nos eua', 'turistas brasileiros estados unidos gastos', 'compras brasileiros orlando miami', 'gastos viagens internacionais brasil'],
  },

  // 100. Consumo e Custo de Vida das Famílias no Brasil (POF)
  {
    id: 'brazil-household-cost-of-living-spending',
    categoryId: 'society',
    title: 'Consumo Global e Custo de Vida das Famílias Brasileiras',
    subtitle: 'Despesas correntes totais dos 75 milhões de lares com habitação, alimentação, transporte e saúde (~R$ 6.500/mês/família)',
    annualSpendUSD: 1180000000000, // $1.18 Trillion (~R$ 5.9 Trilhões de reais)
    growthRatePct: 5.0,
    iconName: 'ShoppingCart',
    accentColor: '#3b82f6',
    description:
      'Volume consolidado de despesas de consumo final das famílias no Brasil em habitação, alimentação diária, transporte, saúde privada e educação segundo a Pesquisa de Orçamentos Familiares (POF) do IBGE.',
    sourceName: 'Instituto Brasileiro de Geografia e Estatística (IBGE - POF)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 720000000000 },
      { year: 2015, spendUSD: 880000000000 },
      { year: 2018, spendUSD: 980000000000 },
      { year: 2021, spendUSD: 1050000000000 },
      { year: 2023, spendUSD: 1130000000000 },
      { year: 2024, spendUSD: 1160000000000 },
      { year: 2026, spendUSD: 1180000000000 },
    ],
    tags: ['coste de vida en brasil en euros', 'consumo familias brasil ibge', 'pesquisa orcamentos familiares pof', 'despesas mensais familias brasil'],
  },

  // 101. Cuál es la deuda pública de España
  {
    id: 'spain-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Total del Reino de España',
    subtitle: 'Saldo de deuda acumulada según el Protocolo de Déficit Excesivo (PDE) del Estado, CC.AA. y Seguridad Social (~107% del PIB)',
    annualSpendUSD: 1750000000000, // $1.75 Trillion (~1,62 Billones de euros)
    growthRatePct: 3.8,
    iconName: 'Landmark',
    accentColor: '#dc2626',
    description:
      'Volumen total de deuda viva en circulación emitida por la Administración Central, las 17 Comunidades Autónomas, Ayuntamientos y la Seguridad Social española según el Banco de España y Eurostat.',
    sourceName: 'Banco de España (Protocolo de Déficit Excesivo) & Eurostat',
    sourceYear: 2024,
    history: [
      { year: 2007, spendUSD: 520000000000 },
      { year: 2012, spendUSD: 1150000000000 },
      { year: 2018, spendUSD: 1390000000000 },
      { year: 2020, spendUSD: 1580000000000 },
      { year: 2022, spendUSD: 1620000000000 },
      { year: 2024, spendUSD: 1710000000000 },
      { year: 2026, spendUSD: 1750000000000 },
    ],
    tags: ['cual es la deuda de espana', 'cual es la deuda publica en espana', 'deuda espana actualmente hoy', 'deuda publica pde banco de espana'],
  },

  // 102. Cuál es la deuda de Estados Unidos (US National Debt Clock)
  {
    id: 'united-states-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Nacional Pública de Estados Unidos',
    subtitle: 'Volumen total de deuda federal bruta en bonos del Tesoro de EE.UU. (US National Debt Clock)',
    annualSpendUSD: 35500000000000, // $35.5 Trillion (~123% of GDP, $1.85T annual addition)
    growthRatePct: 5.6,
    iconName: 'Landmark',
    accentColor: '#3b82f6',
    description:
      'Monto total de deuda pública emitida y acumulada por el gobierno federal de los Estados Unidos (deuda pública en manos de inversores extranjeros y fondos intragubernamentales) según el Departamento del Tesoro de EE.UU.',
    sourceName: 'US Department of the Treasury (Fiscal Service - Debt to the Penny)',
    sourceYear: 2024,
    history: [
      { year: 2000, spendUSD: 5674000000000 },
      { year: 2008, spendUSD: 10025000000000 },
      { year: 2016, spendUSD: 19573000000000 },
      { year: 2020, spendUSD: 27751000000000 },
      { year: 2022, spendUSD: 31419000000000 },
      { year: 2024, spendUSD: 34500000000000 },
      { year: 2026, spendUSD: 35500000000000 },
    ],
    tags: ['cual es la deuda de estados unidos', 'us national debt clock', 'deuda publica eeuu tesoro', 'us federal debt total'],
  },

  // 103. Cuál es la deuda del FC Barcelona
  {
    id: 'fc-barcelona-total-debt',
    categoryId: 'sports',
    title: 'Deuda Total y Financiación del FC Barcelona',
    subtitle: 'Pasivo neto bancario ordinario y financiación estructurada del proyecto «Espai Barça» (Goldman Sachs & JP Morgan)',
    annualSpendUSD: 1300000000, // $1.30 Billion (~1.200 Millones de euros)
    growthRatePct: -2.5,
    iconName: 'Trophy',
    accentColor: '#ec4899',
    description:
      'Pasivo financiero consolidado del FC Barcelona que suma la deuda ordinaria y las emisiones de bonos del fondo de titularización para la reconstrucción del Spotify Camp Nou auditado en la Memoria Económica Anual del club.',
    sourceName: 'FC Barcelona Memoria Anual Económica & LaLiga Control Económico',
    sourceYear: 2024,
    history: [
      { year: 2018, spendUSD: 650000000 },
      { year: 2020, spendUSD: 1350000000 },
      { year: 2021, spendUSD: 1520000000 },
      { year: 2022, spendUSD: 1420000000 },
      { year: 2023, spendUSD: 1350000000 },
      { year: 2024, spendUSD: 1320000000 },
      { year: 2026, spendUSD: 1300000000 },
    ],
    tags: ['cual es la deuda del barcelona', 'cual es la deuda actual del barcelona', 'deuda fcb camp nou', 'espai barca deuda memoria'],
  },

  // 104. Cuál es la deuda del Real Madrid CF
  {
    id: 'real-madrid-total-debt-financing',
    categoryId: 'sports',
    title: 'Deuda y Financiación del Real Madrid CF (Estadio Bernabéu)',
    subtitle: 'Créditos bancarios a largo plazo para la remodelación del Santiago Bernabéu (deuda neta operativa saneada)',
    annualSpendUSD: 1250000000, // $1.25 Billion (~1.160 Millones de euros en préstamos del estadio)
    growthRatePct: 1.5,
    iconName: 'Trophy',
    accentColor: '#eab308',
    description:
      'Financiación total a tipo de interés fijo suscrita por el Real Madrid CF con entidades bancarias estadounidenses (JP Morgan, Bank of America) para la transformación del Nuevo Santiago Bernabéu, amortizada con una cuota anual fija de ~60M€ con ingresos récord del club.',
    sourceName: 'Real Madrid CF Memoria Anual & Cuentas Oficiales',
    sourceYear: 2024,
    history: [
      { year: 2019, spendUSD: 300000000 },
      { year: 2021, spendUSD: 680000000 },
      { year: 2022, spendUSD: 950000000 },
      { year: 2023, spendUSD: 1150000000 },
      { year: 2024, spendUSD: 1220000000 },
      { year: 2026, spendUSD: 1250000000 },
    ],
    tags: ['cual es la deuda del real madrid', 'cual es la deuda actual del madrid', 'deuda santiago bernabeu real madrid', 'credito bernabeu jp morgan'],
  },

  // 105. Cuál es la deuda externa de Colombia
  {
    id: 'colombia-external-foreign-debt',
    categoryId: 'government',
    title: 'Deuda Externa Total de Colombia',
    subtitle: 'Saldo consolidado de la deuda externa pública y privada del país (~50% del PIB colombiano)',
    annualSpendUSD: 198000000000, // $198 Billion (~50% del PIB)
    growthRatePct: 4.8,
    iconName: 'Landmark',
    accentColor: '#f59e0b',
    description:
      'Saldo total de las obligaciones financieras adquiridas con acreedores extranjeros por el sector público (Gobierno Nacional, entidades descentralizadas) y el sector privado de Colombia según el Banco de la República.',
    sourceName: 'Banco de la República de Colombia & Ministerio de Hacienda',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 65000000000 },
      { year: 2015, spendUSD: 112000000000 },
      { year: 2018, spendUSD: 132000000000 },
      { year: 2020, spendUSD: 155000000000 },
      { year: 2022, spendUSD: 184000000000 },
      { year: 2024, spendUSD: 194000000000 },
      { year: 2026, spendUSD: 198000000000 },
    ],
    tags: ['cual es la deuda externa de colombia', 'saldo deuda externa colombia banco de la republica', 'deuda publica externa colombia', 'deuda externa pib colombia'],
  },

  // 106. What is the national debt of the UK
  {
    id: 'united-kingdom-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Nacional del Reino Unido (UK National Debt)',
    subtitle: 'Deuda neta del sector público británico emitida en Gilts por HM Treasury (~99,5% del PIB)',
    annualSpendUSD: 3550000000000, // $3.55 Trillion (~£2.75 Trillion GBP)
    growthRatePct: 4.2,
    iconName: 'Landmark',
    accentColor: '#dc2626',
    description:
      'Deuda pública acumulada del Reino Unido (Public Sector Net Debt ex public sector banks) emitida por la Oficina de Gestión de Deuda de HM Treasury según la Oficina Nacional de Estadísticas (ONS).',
    sourceName: 'Office for National Statistics (ONS - Public Sector Finances) & HM Treasury',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 780000000000 },
      { year: 2010, spendUSD: 1550000000000 },
      { year: 2016, spendUSD: 2280000000000 },
      { year: 2020, spendUSD: 2950000000000 },
      { year: 2022, spendUSD: 3150000000000 },
      { year: 2024, spendUSD: 3450000000000 },
      { year: 2026, spendUSD: 3550000000000 },
    ],
    tags: ['what is the national debt of the uk', 'uk national debt', 'deuda publica reino unido ons', 'public sector net debt uk'],
  },

  // 107. What is the national debt of China
  {
    id: 'china-national-government-debt',
    categoryId: 'government',
    title: 'Deuda Pública Soberana de China',
    subtitle: 'Deuda del gobierno central y vehículos de financiación de gobiernos locales (LGFV) (~83% del PIB)',
    annualSpendUSD: 15800000000000, // $15.8 Trillion USD
    growthRatePct: 7.8,
    iconName: 'Landmark',
    accentColor: '#dc2626',
    description:
      'Saldo consolidado de la deuda pública soberana de la República Popular China que incluye bonos del gobierno central y pasivos de las administraciones locales (LGFV) según el Fondo Monetario Internacional (FMI) y el Ministerio de Finanzas de China.',
    sourceName: 'Ministry of Finance of China & International Monetary Fund (IMF Global Debt)',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 1200000000000 },
      { year: 2010, spendUSD: 3200000000000 },
      { year: 2016, spendUSD: 6800000000000 },
      { year: 2020, spendUSD: 11500000000000 },
      { year: 2022, spendUSD: 13800000000000 },
      { year: 2024, spendUSD: 15100000000000 },
      { year: 2026, spendUSD: 15800000000000 },
    ],
    tags: ['what is the national debt of china', 'china national debt imf', 'deuda publica china lgfv', 'china sovereign debt'],
  },

  // 108. What is the national debt of Canada
  {
    id: 'canada-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Nacional de Canadá',
    subtitle: 'Pasivo consolidado del gobierno federal y las provincias canadienses (~71% del PIB)',
    annualSpendUSD: 1650000000000, // $1.65 Trillion USD (~$2.25 Trillion CAD)
    growthRatePct: 3.5,
    iconName: 'Landmark',
    accentColor: '#3b82f6',
    description:
      'Deuda neta acumulada de Canadá sumando los bonos del gobierno federal (Public Accounts of Canada) y las emisiones de deuda de las 10 provincias según el Departamento de Finanzas de Canadá y Statistics Canada.',
    sourceName: 'Department of Finance Canada & Statistics Canada',
    sourceYear: 2024,
    history: [
      { year: 2008, spendUSD: 680000000000 },
      { year: 2015, spendUSD: 950000000000 },
      { year: 2019, spendUSD: 1100000000000 },
      { year: 2021, spendUSD: 1450000000000 },
      { year: 2023, spendUSD: 1580000000000 },
      { year: 2024, spendUSD: 1620000000000 },
      { year: 2026, spendUSD: 1650000000000 },
    ],
    tags: ['what is the national debt of canada', 'canada national debt', 'dette publique canada', 'deuda publica canada finance'],
  },

  // 109. What is the national debt relief program
  {
    id: 'united-states-debt-relief-programs',
    categoryId: 'government',
    title: 'Programas de Alivio y Liquidación de Deuda en EE.UU. (Debt Relief)',
    subtitle: 'Volumen anual de renegociación, consolidación y liquidación de deuda de tarjetas de crédito y préstamos',
    annualSpendUSD: 18500000000, // $18.5 Billion USD
    growthRatePct: 8.5,
    iconName: 'Shield',
    accentColor: '#10b981',
    description:
      'Volumen financiero total de deudas de consumidores estadounidenses acogidas a programas certificados de alivio de deuda (National Debt Relief, liquidación de tarjetas y reestructuración) según la CFPB y el American Fair Credit Council.',
    sourceName: 'Consumer Financial Protection Bureau (CFPB) & American Fair Credit Council (AFCC)',
    sourceYear: 2024,
    history: [
      { year: 2016, spendUSD: 8500000000 },
      { year: 2019, spendUSD: 11800000000 },
      { year: 2021, spendUSD: 13200000000 },
      { year: 2023, spendUSD: 16800000000 },
      { year: 2024, spendUSD: 17900000000 },
      { year: 2026, spendUSD: 18500000000 },
    ],
    tags: ['what is the national debt relief program', 'national debt relief us', 'alivio de deuda tarjetas credito eeuu', 'debt settlement volume'],
  },

  // 110. Deuda Pública de Japón (Japan National Debt)
  {
    id: 'japan-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Nacional de Japón',
    subtitle: 'Pasivo soberano total en bonos del gobierno japonés (JGB) (~260% del PIB japonés)',
    annualSpendUSD: 9850000000000, // $9.85 Trillion USD (~1.300 Billones de Yenes)
    growthRatePct: 2.2,
    iconName: 'Landmark',
    accentColor: '#ef4444',
    description:
      'Volumen total de bonos y títulos de deuda emitidos por el Gobierno de Japón según el Ministerio de Finanzas de Japón (MOF) y el Banco de Japón (BOJ).',
    sourceName: 'Ministry of Finance of Japan (MOF) & Bank of Japan (BOJ)',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 6800000000000 },
      { year: 2010, spendUSD: 8200000000000 },
      { year: 2016, spendUSD: 9100000000000 },
      { year: 2020, spendUSD: 9600000000000 },
      { year: 2022, spendUSD: 9750000000000 },
      { year: 2024, spendUSD: 9800000000000 },
      { year: 2026, spendUSD: 9850000000000 },
    ],
    tags: ['deuda publica japon', 'japan national debt', 'japan sovereign debt jgb', 'dette publique japon'],
  },

  // 111. Deuda Pública de Alemania (Germany National Debt)
  {
    id: 'germany-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Total de Alemania (Staatsverschuldung)',
    subtitle: 'Saldo consolidado de deuda de la Federación (Bund), los 16 Estados federados y municipios (~64% del PIB)',
    annualSpendUSD: 2850000000000, // $2.85 Trillion USD (~2,62 Billones de euros)
    growthRatePct: 3.2,
    iconName: 'Landmark',
    accentColor: '#eab308',
    description:
      'Deuda pública total de Alemania (Bundesanleihen, Länder y municipios) calculada por la Oficina Federal de Estadística (Destatis) y el Deutsche Bundesbank.',
    sourceName: 'Statistisches Bundesamt (Destatis) & Deutsche Bundesbank',
    sourceYear: 2024,
    history: [
      { year: 2008, spendUSD: 1650000000000 },
      { year: 2014, spendUSD: 2200000000000 },
      { year: 2019, spendUSD: 2150000000000 },
      { year: 2021, spendUSD: 2550000000000 },
      { year: 2023, spendUSD: 2750000000000 },
      { year: 2024, spendUSD: 2810000000000 },
      { year: 2026, spendUSD: 2850000000000 },
    ],
    tags: ['deuda publica alemania', 'staatsverschuldung deutschland', 'germany national debt bund', 'dette publique allemagne'],
  },

  // 112. Deuda Pública de Francia (France National Debt)
  {
    id: 'france-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Total de Francia (Dette Publique)',
    subtitle: 'Deuda en sentido de Maastricht del Estado, seguridad social y administraciones locales (~111% del PIB)',
    annualSpendUSD: 3450000000000, // $3.45 Trillion USD (~3,20 Billones de euros)
    growthRatePct: 4.5,
    iconName: 'Landmark',
    accentColor: '#3b82f6',
    description:
      'Deuda pública total del Estado francés (OATs, seguridad social y colectividades locales) auditada por el INSEE y el Banco de Francia.',
    sourceName: 'INSEE & Banque de France (Dette au sens de Maastricht)',
    sourceYear: 2024,
    history: [
      { year: 2007, spendUSD: 1450000000000 },
      { year: 2012, spendUSD: 2150000000000 },
      { year: 2018, spendUSD: 2650000000000 },
      { year: 2020, spendUSD: 3100000000000 },
      { year: 2022, spendUSD: 3250000000000 },
      { year: 2024, spendUSD: 3380000000000 },
      { year: 2026, spendUSD: 3450000000000 },
    ],
    tags: ['deuda publica francia', 'dette publique de la france insee', 'france national debt', 'dette maastricht france'],
  },

  // 113. Deuda Pública de Italia (Italy National Debt)
  {
    id: 'italy-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Nacional de Italia (Debito Pubblico)',
    subtitle: 'Saldo de deuda pública de la República Italiana emitida en títulos BTP y BOT (~138% del PIB)',
    annualSpendUSD: 3150000000000, // $3.15 Trillion USD (~2,90 Billones de euros)
    growthRatePct: 2.8,
    iconName: 'Landmark',
    accentColor: '#10b981',
    description:
      'Deuda total de las Administraciones Públicas italianas registrada por el Banco de Italia y el Istat.',
    sourceName: 'Banca d’Italia & Istat (Debito delle Amministrazioni Pubbliche)',
    sourceYear: 2024,
    history: [
      { year: 2007, spendUSD: 1850000000000 },
      { year: 2012, spendUSD: 2350000000000 },
      { year: 2018, spendUSD: 2700000000000 },
      { year: 2020, spendUSD: 2950000000000 },
      { year: 2022, spendUSD: 3050000000000 },
      { year: 2024, spendUSD: 3110000000000 },
      { year: 2026, spendUSD: 3150000000000 },
    ],
    tags: ['deuda publica italia', 'debito pubblico italia banca ditalia', 'italy national debt btp', 'dette publique italie'],
  },

  // 114. Deuda Pública Federal de Brasil (Brazil National Debt)
  {
    id: 'brazil-national-public-debt',
    categoryId: 'government',
    title: 'Dívida Pública Federal Total do Brasil',
    subtitle: 'Estoque da Dívida Pública Federal interna e externa em títulos do Tesouro Direto (~78% do PIB)',
    annualSpendUSD: 1450000000000, // $1.45 Trillion USD (~R$ 7,2 Trilhões de reais)
    growthRatePct: 6.5,
    iconName: 'Landmark',
    accentColor: '#10b981',
    description:
      'Estoque total da Dívida Pública Federal (DPF) emitida pela Secretaria do Tesouro Nacional do Brasil para financiar o orçamento da União segundo o Banco Central.',
    sourceName: 'Secretaria do Tesouro Nacional (STN) & Banco Central do Brasil (BCB)',
    sourceYear: 2024,
    history: [
      { year: 2008, spendUSD: 620000000000 },
      { year: 2014, spendUSD: 850000000000 },
      { year: 2018, spendUSD: 1100000000000 },
      { year: 2020, spendUSD: 1250000000000 },
      { year: 2022, spendUSD: 1350000000000 },
      { year: 2024, spendUSD: 1410000000000 },
      { year: 2026, spendUSD: 1450000000000 },
    ],
    tags: ['divida publica brasil', 'estoque divida publica federal stn', 'brazil national debt', 'deuda publica brasil'],
  },

  // 115. Deuda Pública de la India (India National Debt)
  {
    id: 'india-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Nacional de la India',
    subtitle: 'Deuda general del gobierno central y los estados de la Unión India (~82% del PIB)',
    annualSpendUSD: 3200000000000, // $3.20 Trillion USD (~₹265 Lakh Crore INR)
    growthRatePct: 7.5,
    iconName: 'Landmark',
    accentColor: '#f97316',
    description:
      'Deuda pública total de la India emitida por el Reserve Bank of India (RBI) y el Ministerio de Finanzas en bonos soberanos internos y deuda externa.',
    sourceName: 'Reserve Bank of India (RBI) & Ministry of Finance of India',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 720000000000 },
      { year: 2010, spendUSD: 1250000000000 },
      { year: 2016, spendUSD: 1950000000000 },
      { year: 2020, spendUSD: 2450000000000 },
      { year: 2022, spendUSD: 2850000000000 },
      { year: 2024, spendUSD: 3050000000000 },
      { year: 2026, spendUSD: 3200000000000 },
    ],
    tags: ['deuda publica india', 'india national public debt rbi', 'india government debt', 'dette publique inde'],
  },

  // 116. Deuda Pública de México (Mexico National Debt)
  {
    id: 'mexico-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Total de México (SHRFSP)',
    subtitle: 'Saldo Histórico de los Requerimientos Financieros del Sector Público mexicano (~49% del PIB)',
    annualSpendUSD: 890000000000, // $890 Billion USD (~16,5 Billones de pesos mexicanos)
    growthRatePct: 5.5,
    iconName: 'Landmark',
    accentColor: '#10b981',
    description:
      'Monto total de la deuda pública ampliada del gobierno de México (Cetes, Bonos M, deuda externa) auditado por la SHCP y Banco de México.',
    sourceName: 'Secretaría de Hacienda y Crédito Público (SHCP) & Banco de México',
    sourceYear: 2024,
    history: [
      { year: 2006, spendUSD: 280000000000 },
      { year: 2012, spendUSD: 460000000000 },
      { year: 2018, spendUSD: 620000000000 },
      { year: 2020, spendUSD: 720000000000 },
      { year: 2022, spendUSD: 810000000000 },
      { year: 2024, spendUSD: 865000000000 },
      { year: 2026, spendUSD: 890000000000 },
    ],
    tags: ['deuda publica mexico', 'shrfsp deuda shcp mexico', 'mexico national debt cetes', 'deuda externa mexico'],
  },

  // 117. Deuda Pública de Argentina (Argentina National Debt)
  {
    id: 'argentina-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Bruta de la República Argentina',
    subtitle: 'Stock total de deuda pública en moneda nacional y moneda extranjera (~88% del PIB argentino)',
    annualSpendUSD: 420000000000, // $420 Billion USD
    growthRatePct: 4.0,
    iconName: 'Landmark',
    accentColor: '#06b6d4',
    description:
      'Saldo total de deuda pública de la Administración Central argentina (bonos soberanos, títulos en dólares y préstamos del FMI) según la Secretaría de Finanzas.',
    sourceName: 'Secretaría de Finanzas de la Nación (Ministerio de Economía de Argentina)',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 155000000000 },
      { year: 2011, spendUSD: 205000000000 },
      { year: 2017, spendUSD: 320000000000 },
      { year: 2020, spendUSD: 365000000000 },
      { year: 2022, spendUSD: 395000000000 },
      { year: 2024, spendUSD: 412000000000 },
      { year: 2026, spendUSD: 420000000000 },
    ],
    tags: ['deuda publica argentina', 'stock deuda argentina secretaria de finanzas', 'argentina sovereign debt fmi', 'deuda externa argentina'],
  },

  // 118. Deuda Pública de Australia (Australia National Debt)
  {
    id: 'australia-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Nacional de Australia (Commonwealth Debt)',
    subtitle: 'Deuda bruta del gobierno federal australiano en bonos soberanos AGS (~54% del PIB)',
    annualSpendUSD: 680000000000, // $680 Billion USD (~$1.05 Trillion AUD)
    growthRatePct: 3.6,
    iconName: 'Landmark',
    accentColor: '#3b82f6',
    description:
      'Volumen total de bonos del Estado australiano emitidos por la Australian Office of Financial Management (AOFM) y el Banco de la Reserva de Australia.',
    sourceName: 'Australian Office of Financial Management (AOFM) & RBA',
    sourceYear: 2024,
    history: [
      { year: 2008, spendUSD: 120000000000 },
      { year: 2014, spendUSD: 340000000000 },
      { year: 2019, spendUSD: 460000000000 },
      { year: 2021, spendUSD: 590000000000 },
      { year: 2023, spendUSD: 645000000000 },
      { year: 2024, spendUSD: 665000000000 },
      { year: 2026, spendUSD: 680000000000 },
    ],
    tags: ['deuda publica australia', 'australia national debt aofm', 'australian government securities ags', 'dette australie'],
  },

  // 119. Deuda Pública de Corea del Sur (South Korea National Debt)
  {
    id: 'south-korea-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Nacional de Corea del Sur (D1 Debt)',
    subtitle: 'Deuda soberana del gobierno central y local en bonos KTB (~51% del PIB surcoreano)',
    annualSpendUSD: 860000000000, // $860 Billion USD (~1.150 Billones de KRW)
    growthRatePct: 4.8,
    iconName: 'Landmark',
    accentColor: '#3b82f6',
    description:
      'Pasivo financiero total de Corea del Sur en bonos del tesoro (Korea Treasury Bonds) según el Ministerio de Economía y Finanzas (MOEF) y el Banco de Corea.',
    sourceName: 'Ministry of Economy and Finance (MOEF) & Bank of Korea',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 240000000000 },
      { year: 2012, spendUSD: 420000000000 },
      { year: 2018, spendUSD: 620000000000 },
      { year: 2020, spendUSD: 720000000000 },
      { year: 2022, spendUSD: 810000000000 },
      { year: 2024, spendUSD: 845000000000 },
      { year: 2026, spendUSD: 860000000000 },
    ],
    tags: ['deuda publica corea del sur', 'south korea national debt ktb', 'corea del sur deuda publica moef', 'dette coree du sud'],
  },

  // 120. Deuda Pública de Arabia Saudita (Saudi Arabia National Debt)
  {
    id: 'saudi-arabia-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública del Reino de Arabia Saudita',
    subtitle: 'Saldo de deuda soberana en bonos islámicos (Sukuk) e instrumentos convencionales (~26% del PIB)',
    annualSpendUSD: 295000000000, // $295 Billion USD (~1.11 Trillion SAR)
    growthRatePct: 4.5,
    iconName: 'Landmark',
    accentColor: '#10b981',
    description:
      'Volumen de deuda pública del Reino de Arabia Saudita emitido para financiar proyectos de Visión 2030 gestionado por el Centro Nacional de Gestión de Deuda (NDMC).',
    sourceName: 'National Debt Management Center (NDMC) & Ministry of Finance of Saudi Arabia',
    sourceYear: 2024,
    history: [
      { year: 2014, spendUSD: 12000000000 },
      { year: 2017, spendUSD: 120000000000 },
      { year: 2019, spendUSD: 185000000000 },
      { year: 2021, spendUSD: 245000000000 },
      { year: 2023, spendUSD: 275000000000 },
      { year: 2024, spendUSD: 288000000000 },
      { year: 2026, spendUSD: 295000000000 },
    ],
    tags: ['deuda publica arabia saudita', 'saudi arabia national debt ndmc', 'sukuk arabia saudita deuda', 'saudi sovereign debt'],
  },

  // 121. Deuda Pública de Suiza (Switzerland National Debt)
  {
    id: 'switzerland-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública de la Confederación Suiza y Cantones',
    subtitle: 'Deuda soberana acumulada bajo la regla constitucional del Freno a la Deuda (~38% del PIB suizo)',
    annualSpendUSD: 320000000000, // $320 Billion USD (~285 Billion CHF)
    growthRatePct: 1.5,
    iconName: 'Landmark',
    accentColor: '#dc2626',
    description:
      'Deuda bruta consolidada de la Confederación Helvética, los 26 cantones y municipios suizos según la Administración Federal de Finanzas (AFF) y el BNS.',
    sourceName: 'Federal Finance Administration (FFA) & Swiss National Bank (SNB)',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 220000000000 },
      { year: 2012, spendUSD: 265000000000 },
      { year: 2018, spendUSD: 285000000000 },
      { year: 2020, spendUSD: 305000000000 },
      { year: 2022, spendUSD: 312000000000 },
      { year: 2024, spendUSD: 316000000000 },
      { year: 2026, spendUSD: 320000000000 },
    ],
    tags: ['deuda publica suiza', 'switzerland national debt ffa', 'dette publique suisse bns', 'schuldenbremse schweiz'],
  },

  // 122. Deuda Pública de los Países Bajos (Netherlands National Debt)
  {
    id: 'netherlands-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Nacional de los Países Bajos (Holanda)',
    subtitle: 'Deuda en sentido UEM del Estado neerlandés en bonos soberanos DSL (~44% del PIB)',
    annualSpendUSD: 520000000000, // $520 Billion USD (~480 Billones de euros)
    growthRatePct: 2.9,
    iconName: 'Landmark',
    accentColor: '#f97316',
    description:
      'Deuda bruta de las Administraciones Públicas neerlandesas emitida por la Dutch State Treasury Agency (DSTA) según el Centraal Bureau voor de Statistiek (CBS).',
    sourceName: 'Centraal Bureau voor de Statistiek (CBS) & Dutch State Treasury Agency (DSTA)',
    sourceYear: 2024,
    history: [
      { year: 2007, spendUSD: 290000000000 },
      { year: 2013, spendUSD: 440000000000 },
      { year: 2019, spendUSD: 420000000000 },
      { year: 2021, spendUSD: 470000000000 },
      { year: 2023, spendUSD: 495000000000 },
      { year: 2024, spendUSD: 510000000000 },
      { year: 2026, spendUSD: 520000000000 },
    ],
    tags: ['deuda publica paises bajos', 'netherlands national debt dsta', 'staatsoperatie nederland cbs', 'dette pays bas'],
  },

  // 123. Deuda Pública de Rusia (Russia Sovereign National Debt)
  {
    id: 'russia-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Soberana de la Federación Rusa',
    subtitle: 'Saldo de deuda interna y externa en bonos federales OFZ (~15% del PIB ruso)',
    annualSpendUSD: 340000000000, // $340 Billion USD (~30 Billones de rublos)
    growthRatePct: 5.0,
    iconName: 'Landmark',
    accentColor: '#ef4444',
    description:
      'Deuda pública soberana del Estado ruso emitida en bonos federales (OFZ) y pasivos externos según el Ministerio de Finanzas de Rusia (Minfin).',
    sourceName: 'Ministry of Finance of the Russian Federation (Minfin) & Bank of Russia',
    sourceYear: 2024,
    history: [
      { year: 2008, spendUSD: 110000000000 },
      { year: 2014, spendUSD: 195000000000 },
      { year: 2018, spendUSD: 220000000000 },
      { year: 2020, spendUSD: 265000000000 },
      { year: 2022, spendUSD: 305000000000 },
      { year: 2024, spendUSD: 328000000000 },
      { year: 2026, spendUSD: 340000000000 },
    ],
    tags: ['deuda publica rusia', 'russia national debt ofz', 'gosdolg russia minfin', 'dette souveraine russie'],
  },

  // 124. Deuda Pública de Turquía (Turkey National Debt)
  {
    id: 'turkey-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública del Gobierno Central de Turquía',
    subtitle: 'Saldo consolidado de la deuda pública interna y externa en liras y divisas (~28% del PIB)',
    annualSpendUSD: 260000000000, // $260 Billion USD (~8,5 Billones de TRY)
    growthRatePct: 6.8,
    iconName: 'Landmark',
    accentColor: '#dc2626',
    description:
      'Deuda pública total de la República de Turquía registrada por el Ministerio del Tesoro y Finanzas.',
    sourceName: 'Ministry of Treasury and Finance of the Republic of Turkey',
    sourceYear: 2024,
    history: [
      { year: 2005, spendUSD: 180000000000 },
      { year: 2012, spendUSD: 215000000000 },
      { year: 2018, spendUSD: 210000000000 },
      { year: 2020, spendUSD: 235000000000 },
      { year: 2022, spendUSD: 245000000000 },
      { year: 2024, spendUSD: 254000000000 },
      { year: 2026, spendUSD: 260000000000 },
    ],
    tags: ['deuda publica turquia', 'turkey national debt treasury', 'turkiye kamu borcu hazine', 'dette turquie'],
  },

  // 125. Deuda Pública de Sudáfrica (South Africa National Debt)
  {
    id: 'south-africa-national-public-debt',
    categoryId: 'government',
    title: 'Deuda Pública Nacional de Sudáfrica',
    subtitle: 'Deuda bruta del gobierno nacional en bonos soberanos sudafricanos (~74% del PIB)',
    annualSpendUSD: 280000000000, // $280 Billion USD (~5,2 Billones de ZAR)
    growthRatePct: 6.2,
    iconName: 'Landmark',
    accentColor: '#eab308',
    description:
      'Deuda pública bruta total de Sudáfrica emitida por el National Treasury de Sudáfrica y el South African Reserve Bank.',
    sourceName: 'National Treasury of South Africa & South African Reserve Bank (SARB)',
    sourceYear: 2024,
    history: [
      { year: 2008, spendUSD: 85000000000 },
      { year: 2013, spendUSD: 145000000000 },
      { year: 2018, spendUSD: 205000000000 },
      { year: 2020, spendUSD: 235000000000 },
      { year: 2022, spendUSD: 258000000000 },
      { year: 2024, spendUSD: 272000000000 },
      { year: 2026, spendUSD: 280000000000 },
    ],
    tags: ['deuda publica sudafrica', 'south africa national debt treasury', 'south africa gross government debt', 'dette afrique du sud'],
  },

  // 126. Gasto Global en Publicidad en Redes Sociales (Total Social Media Ad Spend)
  {
    id: 'global-social-media-advertising-spend',
    categoryId: 'advertising',
    title: 'Gasto Mundial en Publicidad en Redes Sociales',
    subtitle: 'Presupuesto total de marcas y empresas invertido en anuncios en Instagram, TikTok, Facebook, YouTube y X (~$7.925/s)',
    annualSpendUSD: 250000000000, // $250 Billion USD
    growthRatePct: 12.5,
    iconName: 'Share2',
    accentColor: '#8b5cf6',
    description:
      'Inversión publicitaria digital global canalizada hacia plataformas sociales (anuncios en feed, historias, reels y vídeos promocionados) según informes de eMarketer / Insider Intelligence y Zenith Optimedia.',
    sourceName: 'eMarketer (Insider Intelligence) & Zenith Optimedia',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 32000000000 },
      { year: 2018, spendUSD: 85000000000 },
      { year: 2020, spendUSD: 135000000000 },
      { year: 2022, spendUSD: 195000000000 },
      { year: 2023, spendUSD: 220000000000 },
      { year: 2024, spendUSD: 238000000000 },
      { year: 2026, spendUSD: 250000000000 },
    ],
    tags: ['gasto publicidad redes sociales', 'social media ad spend global', 'publicidad tiktok instagram facebook', 'inversion marketing digital redes'],
  },

  // 127. Cuánto se gasta en TikTok (Publicidad, Monedas y TikTok Shop)
  {
    id: 'tiktok-advertising-and-in-app-spending',
    categoryId: 'tech',
    title: 'Gasto Total en TikTok (Publicidad, Monedas y Compras)',
    subtitle: 'Facturación anual de TikTok por anuncios de marcas, compra de monedas virtuales y TikTok Shop (~$1.062/s)',
    annualSpendUSD: 33500000000, // $33.5 Billion USD
    growthRatePct: 28.0,
    iconName: 'Smartphone',
    accentColor: '#ec4899',
    description:
      'Gasto total generado en la plataforma TikTok (ByteDance) sumando la inversión publicitaria de anunciantes globales y el gasto de usuarios en regalos virtuales (TikTok Coins), propinas en directos y comisiones de TikTok Shop según Sensor Tower y eMarketer.',
    sourceName: 'ByteDance Financial Reports, Sensor Tower & eMarketer',
    sourceYear: 2024,
    history: [
      { year: 2019, spendUSD: 1200000000 },
      { year: 2020, spendUSD: 4500000000 },
      { year: 2021, spendUSD: 11000000000 },
      { year: 2022, spendUSD: 19500000000 },
      { year: 2023, spendUSD: 26800000000 },
      { year: 2024, spendUSD: 30500000000 },
      { year: 2026, spendUSD: 33500000000 },
    ],
    tags: ['cuanto se gasta en tiktok', 'tiktok ad revenue', 'tiktok monedas gastos usuarios', 'tiktok shop facturacion'],
  },

  // 128. Cuánto se gasta en Instagram (Publicidad y Comercio de Creadores)
  {
    id: 'instagram-advertising-and-creator-spending',
    categoryId: 'advertising',
    title: 'Gasto Publicitario y de Comercio en Instagram',
    subtitle: 'Ingresos por publicidad en Reels, Feed, Stories y suscripciones de creadores (~$2.251/s, >50% de Meta Ads)',
    annualSpendUSD: 71000000000, // $71.0 Billion USD
    growthRatePct: 15.2,
    iconName: 'Camera',
    accentColor: '#f43f5e',
    description:
      'Gasto total de anunciantes y marcas en publicidad en Instagram (propiedad de Meta Platforms), incluyendo anuncios patrocinados, colaboraciones pagadas y herramientas de monetización para creadores según los informes financieros de Meta ante la SEC.',
    sourceName: 'Meta Platforms (SEC Form 10-K) & eMarketer',
    sourceYear: 2024,
    history: [
      { year: 2017, spendUSD: 4100000000 },
      { year: 2019, spendUSD: 17500000000 },
      { year: 2021, spendUSD: 42000000000 },
      { year: 2022, spendUSD: 51000000000 },
      { year: 2023, spendUSD: 60500000000 },
      { year: 2024, spendUSD: 66800000000 },
      { year: 2026, spendUSD: 71000000000 },
    ],
    tags: ['cuanto se gasta en instagram', 'instagram ad spend', 'publicidad en instagram meta', 'ingresos instagram reels stories'],
  },

  // 129. Gasto Mundial en Marketing de Influencers y Creadores de Contenido
  {
    id: 'global-influencer-marketing-creator-spending',
    categoryId: 'advertising',
    title: 'Gasto Global en Marketing de Influencers y Creadores',
    subtitle: 'Presupuesto de marcas en patrocinios, contratos con creadores de contenido y campañas de UGC en redes',
    annualSpendUSD: 34000000000, // $34.0 Billion USD
    growthRatePct: 18.5,
    iconName: 'Sparkles',
    accentColor: '#a855f7',
    description:
      'Gasto directo de marcas globales en contratos comerciales, posts patrocinados, embajadores de marca y campañas de contenido generado por creadores (UGC) en Instagram, TikTok y YouTube según Goldman Sachs y el Influencer Marketing Hub.',
    sourceName: 'Goldman Sachs (Creator Economy Report) & Influencer Marketing Hub',
    sourceYear: 2024,
    history: [
      { year: 2016, spendUSD: 1700000000 },
      { year: 2019, spendUSD: 6500000000 },
      { year: 2021, spendUSD: 13800000000 },
      { year: 2022, spendUSD: 19500000000 },
      { year: 2023, spendUSD: 24500000000 },
      { year: 2024, spendUSD: 29500000000 },
      { year: 2026, spendUSD: 34000000000 },
    ],
    tags: ['gasto en influencers', 'influencer marketing spend', 'creadores de contenido gasto marcas', 'patrocinios redes sociales'],
  },

  // 130. Gasto en Gasolina y Carburantes en España
  {
    id: 'spain-gasoline-fuel-consumption-spending',
    categoryId: 'energy',
    title: 'Gasto en Gasolina y Carburantes en España',
    subtitle: 'Consumo anual de gasolina 95 y diésel de automoción en las más de 12.000 estaciones de servicio de España',
    annualSpendUSD: 42000000000, // $42.0 Billion USD (~38.500 M€)
    growthRatePct: 3.5,
    iconName: 'Car',
    accentColor: '#f59e0b',
    description:
      'Gasto total de conductores particulares y flotas de transporte en España en repostajes de gasolina 95/98 y gasóleo según la Corporación de Reservas Estratégicas de Productos Petrolíferos (CORES) y el Ministerio para la Transición Ecológica (MITECO).',
    sourceName: 'CORES & Ministerio para la Transición Ecológica (MITECO)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 31000000000 },
      { year: 2015, spendUSD: 28000000000 },
      { year: 2019, spendUSD: 34500000000 },
      { year: 2022, spendUSD: 44000000000 },
      { year: 2023, spendUSD: 40500000000 },
      { year: 2024, spendUSD: 41500000000 },
      { year: 2026, spendUSD: 42000000000 },
    ],
    tags: ['gasto gasolina', 'gasto de gasolina', 'calcular gasto gasolina', 'precio gasolina espana cores'],
  },

  // 131. Gasto Público Total de España
  {
    id: 'spain-total-public-expenditure',
    categoryId: 'government',
    title: 'Gasto Público Total del Reino de España',
    subtitle: 'Gasto público consolidado de todas las Administraciones Públicas: Estado Central, CC.AA., Ayuntamientos y Seguridad Social (~46,5% del PIB)',
    annualSpendUSD: 720000000000, // $720 Billion USD (~665.000 M€)
    growthRatePct: 4.8,
    iconName: 'Landmark',
    accentColor: '#dc2626',
    description:
      'Gasto público total liquidado y presupuestado por el conjunto de las Administraciones Públicas españolas según la Intervención General de la Administración del Estado (IGAE) y Eurostat.',
    sourceName: 'Intervención General de la Administración del Estado (IGAE) & Eurostat',
    sourceYear: 2024,
    history: [
      { year: 2008, spendUSD: 480000000000 },
      { year: 2014, spendUSD: 520000000000 },
      { year: 2019, spendUSD: 585000000000 },
      { year: 2021, spendUSD: 645000000000 },
      { year: 2023, spendUSD: 690000000000 },
      { year: 2024, spendUSD: 708000000000 },
      { year: 2026, spendUSD: 720000000000 },
    ],
    tags: ['gasto publico espana', 'que es el gasto publico', 'presupuestos generales del estado igae', 'gasto publico pib espana'],
  },

  // 132. Gasto en Sanidad en España (Sanidad Pública y Privada)
  {
    id: 'spain-healthcare-sanidad-spending',
    categoryId: 'health',
    title: 'Gasto Sanitario Global de España (Sanidad Pública y Privada)',
    subtitle: 'Presupuesto sanitario del Sistema Nacional de Salud (17 CC.AA.) y gasto privado en salud (~7,5% del PIB)',
    annualSpendUSD: 115000000000, // $115 Billion USD (~106.000 M€)
    growthRatePct: 5.2,
    iconName: 'HeartPulse',
    accentColor: '#ef4444',
    description:
      'Gasto sanitario total en España (atención hospitalaria autonómica, centros de salud, recetas del SNS y pólizas privadas) según la Estadística de Gasto Sanitario Público (EGSP) del Ministerio de Sanidad.',
    sourceName: 'Ministerio de Sanidad de España (EGSP) & Instituto Nacional de Estadística (INE)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 78000000000 },
      { year: 2015, spendUSD: 76000000000 },
      { year: 2019, spendUSD: 88000000000 },
      { year: 2021, spendUSD: 104000000000 },
      { year: 2023, spendUSD: 110000000000 },
      { year: 2024, spendUSD: 113000000000 },
      { year: 2026, spendUSD: 115000000000 },
    ],
    tags: ['gasto en sanidad espana', 'gasto sanitario en espana', 'gasto en sanidad por comunidades', 'gasto publico en sanidad espana'],
  },

  // 133. Gasto en Defensa y Militar de España (Criterio OTAN)
  {
    id: 'spain-defense-military-spending-nato',
    categoryId: 'military',
    title: 'Gasto en Defensa y Presupuesto Militar de España (Criterio OTAN)',
    subtitle: 'Presupuesto militar consolidado del Ministerio de Defensa según la metodología oficial de la OTAN (~1,30% del PIB)',
    annualSpendUSD: 24500000000, // $24.5 Billion USD (~22.500 M€)
    growthRatePct: 12.0,
    iconName: 'ShieldAlert',
    accentColor: '#b91c1c',
    description:
      'Gasto de defensa de España consolidando el presupuesto del Ministerio de Defensa, créditos para Programas Especiales de Armamento (PEAs) y pensiones militares bajo la metodología de la OTAN y SIPRI.',
    sourceName: 'OTAN (NATO Defence Expenditures) & SIPRI',
    sourceYear: 2024,
    history: [
      { year: 2014, spendUSD: 12500000000 },
      { year: 2018, spendUSD: 15200000000 },
      { year: 2020, spendUSD: 17400000000 },
      { year: 2022, spendUSD: 19800000000 },
      { year: 2023, spendUSD: 22400000000 },
      { year: 2024, spendUSD: 23800000000 },
      { year: 2026, spendUSD: 24500000000 },
    ],
    tags: ['gasto en defensa espana', 'gasto militar espana', 'otan gasto defensa espana', 'presupuesto ministerio de defensa'],
  },

  // 134. Gasto en Educación en España
  {
    id: 'spain-education-spending',
    categoryId: 'society',
    title: 'Gasto en Educación en España (Pública y Privada)',
    subtitle: 'Presupuesto consolidado de las 17 CC.AA. y el Ministerio de Educación en colegios, institutos y universidades (~4,4% del PIB)',
    annualSpendUSD: 68000000000, // $68.0 Billion USD (~62.500 M€)
    growthRatePct: 4.2,
    iconName: 'GraduationCap',
    accentColor: '#3b82f6',
    description:
      'Gasto total del sistema educativo español en educación infantil, primaria, secundaria, formación profesional y universidades públicas según el Ministerio de Educación, FP y Deportes y el INE.',
    sourceName: 'Ministerio de Educación, Formación Profesional y Deportes & INE',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 52000000000 },
      { year: 2015, spendUSD: 49000000000 },
      { year: 2019, spendUSD: 56500000000 },
      { year: 2021, spendUSD: 62000000000 },
      { year: 2023, spendUSD: 65500000000 },
      { year: 2024, spendUSD: 67000000000 },
      { year: 2026, spendUSD: 68000000000 },
    ],
    tags: ['gasto en educacion espana', 'gasto publico educacion espana', 'presupuesto educacion comunidades ine'],
  },

  // 135. Recaudación del IRPF en España (Campaña de la Renta)
  {
    id: 'spain-irpf-income-tax-revenue',
    categoryId: 'government',
    title: 'Recaudación del IRPF en España (Impuesto sobre la Renta)',
    subtitle: 'Total recaudado por la Agencia Tributaria (AEAT) en retenciones de nóminas y declaraciones de la Renta de los españoles',
    annualSpendUSD: 135000000000, // $135 Billion USD (~124.000 M€)
    growthRatePct: 6.8,
    iconName: 'Coins',
    accentColor: '#eab308',
    description:
      'Recaudación anual líquida del Impuesto sobre la Renta de las Personas Físicas (IRPF) aportada por los más de 22 millones de declarantes según los informes de recaudación de la Agencia Tributaria (AEAT).',
    sourceName: 'Agencia Estatal de Administración Tributaria (AEAT - Informes de Recaudación)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 72000000000 },
      { year: 2015, spendUSD: 79000000000 },
      { year: 2019, spendUSD: 94000000000 },
      { year: 2021, spendUSD: 108000000000 },
      { year: 2023, spendUSD: 125000000000 },
      { year: 2024, spendUSD: 131000000000 },
      { year: 2026, spendUSD: 135000000000 },
    ],
    tags: ['irpf', 'renta', 'hacienda', 'borrador renta', 'recaudacion irpf aeat'],
  },

  // 136. Gasto en Fichajes y Traspasos del Real Madrid CF
  {
    id: 'real-madrid-transfers-signings-spending',
    categoryId: 'sports',
    title: 'Gasto en Fichajes y Traspasos del Real Madrid CF',
    subtitle: 'Inversión anual media en traspasos de futbolistas para el primer equipo (Mbappé, Bellingham, Vinícius, etc.)',
    annualSpendUSD: 160000000, // $160 Million USD / year (~148 M€/año de media)
    growthRatePct: 5.0,
    iconName: 'Trophy',
    accentColor: '#eab308',
    description:
      'Gasto promedio anual en primas de fichaje, traspasos y amortizaciones de derechos federativos de futbolistas del Real Madrid CF según la Memoria Económica Oficial del club y Transfermarkt.',
    sourceName: 'Real Madrid CF Memoria Anual & Transfermarkt',
    sourceYear: 2024,
    history: [
      { year: 2015, spendUSD: 95000000 },
      { year: 2018, spendUSD: 165000000 },
      { year: 2019, spendUSD: 355000000 },
      { year: 2021, spendUSD: 35000000 },
      { year: 2022, spendUSD: 90000000 },
      { year: 2023, spendUSD: 140000000 },
      { year: 2024, spendUSD: 155000000 },
      { year: 2026, spendUSD: 160000000 },
    ],
    tags: ['gasto en fichajes real madrid', 'fichajes real madrid traspasos', 'cuanto gasta el real madrid en fichajes'],
  },

  // 137. Gastos de Hipoteca y Formalización en España
  {
    id: 'spain-mortgage-closing-costs-spending',
    categoryId: 'society',
    title: 'Gastos de Hipoteca y Formalización en España',
    subtitle: 'Gastos anuales de tasación, notaría, registro y gestoría de las más de 450.000 nuevas hipotecas firmadas al año',
    annualSpendUSD: 1850000000, // $1.85 Billion USD (~1.700 M€)
    growthRatePct: 4.5,
    iconName: 'Receipt',
    accentColor: '#0ea5e9',
    description:
      'Costes totales abonados por compradores y entidades en la constitución, formalización y tasación de préstamos hipotecarios, así como el volumen de reclamaciones de gastos hipotecarios según el Banco de España y el INE.',
    sourceName: 'Banco de España (BdE), Instituto Nacional de Estadística (INE) & Notariado',
    sourceYear: 2024,
    history: [
      { year: 2014, spendUSD: 1100000000 },
      { year: 2018, spendUSD: 1550000000 },
      { year: 2021, spendUSD: 1950000000 },
      { year: 2022, spendUSD: 2100000000 },
      { year: 2023, spendUSD: 1750000000 },
      { year: 2024, spendUSD: 1800000000 },
      { year: 2026, spendUSD: 1850000000 },
    ],
    tags: ['gastos hipoteca', 'gastos hipotecarios', 'reclamar gastos hipoteca', 'devolucion gastos hipoteca bde ine'],
  },

  // 138. Gastos e Impuestos en la Compra de Vivienda en España
  {
    id: 'spain-home-buying-transaction-costs-spending',
    categoryId: 'society',
    title: 'Gastos e Impuestos en la Compra de Vivienda en España',
    subtitle: 'Impuestos (ITP/IVA, AJD), aranceles notariales y registrales en las más de 600.000 compraventas anuales (~10-12% del valor)',
    annualSpendUSD: 9800000000, // $9.8 Billion USD (~9.000 M€)
    growthRatePct: 5.8,
    iconName: 'Home',
    accentColor: '#f97316',
    description:
      'Gasto total de los compradores de vivienda en España en concepto de Impuesto de Transmisiones Patrimoniales (ITP), Actos Jurídicos Documentados (AJD), honorarios de notario y Registro de la Propiedad según el Consejo General del Notariado y Registradores de España.',
    sourceName: 'Consejo General del Notariado & Colegio de Registradores de España',
    sourceYear: 2024,
    history: [
      { year: 2014, spendUSD: 4900000000 },
      { year: 2017, spendUSD: 6800000000 },
      { year: 2019, spendUSD: 7900000000 },
      { year: 2021, spendUSD: 9100000000 },
      { year: 2022, spendUSD: 10200000000 },
      { year: 2024, spendUSD: 9400000000 },
      { year: 2026, spendUSD: 9800000000 },
    ],
    tags: ['gastos compra vivienda', 'gastos venta vivienda', 'gastos en la compra de un piso', 'gastos compra vivienda segunda mano itp'],
  },

  // 139. Gastos Deducibles y Desgravaciones del IRPF en España
  {
    id: 'spain-tax-deductible-expenses-irpf',
    categoryId: 'government',
    title: 'Gastos Deducibles y Desgravaciones del IRPF en España',
    subtitle: 'Total de deducciones fiscales de autónomos, planes de pensiones, vivienda habitual y tramos autonómicos de la Renta',
    annualSpendUSD: 32000000000, // $32.0 Billion USD (~29.500 M€)
    growthRatePct: 3.8,
    iconName: 'FileText',
    accentColor: '#10b981',
    description:
      'Importe global de gastos deducibles de actividad económica (autónomos en estimación directa) y deducciones generales y autonómicas declaradas por los contribuyentes españoles ante la Agencia Tributaria (AEAT).',
    sourceName: 'Agencia Estatal de Administración Tributaria (AEAT - Estadística IRPF)',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 22000000000 },
      { year: 2016, spendUSD: 24500000000 },
      { year: 2019, spendUSD: 27800000000 },
      { year: 2021, spendUSD: 29500000000 },
      { year: 2023, spendUSD: 31000000000 },
      { year: 2024, spendUSD: 31600000000 },
      { year: 2026, spendUSD: 32000000000 },
    ],
    tags: ['gastos deducibles', 'que son los gastos deducibles', 'gastos deducibles renta', 'modelo 130 autonomos aeat'],
  },

  // 140. Gasto y Ventas en Vinted (Moda y Segunda Mano)
  {
    id: 'vinted-second-hand-fashion-spending',
    categoryId: 'luxury',
    title: 'Gasto y Ventas en Vinted (Moda y Artículos de Segunda Mano)',
    subtitle: 'Volumen total de transacciones (GMV) de ropa de segunda mano, calzado y accesorios entre usuarios',
    annualSpendUSD: 4500000000, // $4.5 Billion USD
    growthRatePct: 32.0,
    iconName: 'Shirt',
    accentColor: '#06b6d4',
    description:
      'Volumen bruto de mercancías (GMV) generado en la plataforma de moda circular y segunda mano Vinted en España y Europa según los informes financieros de Vinted UAB y Cross-Border Commerce Europe.',
    sourceName: 'Vinted Financial Reports & Cross-Border Commerce Europe',
    sourceYear: 2024,
    history: [
      { year: 2018, spendUSD: 420000000 },
      { year: 2020, spendUSD: 1200000000 },
      { year: 2021, spendUSD: 2300000000 },
      { year: 2022, spendUSD: 3200000000 },
      { year: 2023, spendUSD: 3900000000 },
      { year: 2024, spendUSD: 4200000000 },
      { year: 2026, spendUSD: 4500000000 },
    ],
    tags: ['vinted', 'gasto en vinted', 'compras ropa segunda mano vinted', 'ventas segunda mano declaracion renta'],
  },

  // 141. Coste de Vida y Consumo de los Hogares en España
  {
    id: 'spain-household-cost-of-living-spending',
    categoryId: 'society',
    title: 'Coste de Vida y Consumo de los Hogares en España',
    subtitle: 'Gasto anual de los 19,2 millones de familias españolas en vivienda, energía, alimentación, transporte y ocio (~32.600 €/hogar)',
    annualSpendUSD: 680000000000, // $680 Billion USD (~625.000 M€)
    growthRatePct: 4.2,
    iconName: 'Home',
    accentColor: '#3b82f6',
    description:
      'Gasto total en consumo y coste de la vida sufragado por las familias residentes en España según la Encuesta de Presupuestos Familiares (EPF) del Instituto Nacional de Estadística (INE).',
    sourceName: 'Instituto Nacional de Estadística (INE - Encuesta de Presupuestos Familiares)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 495000000000 },
      { year: 2014, spendUSD: 480000000000 },
      { year: 2019, spendUSD: 565000000000 },
      { year: 2021, spendUSD: 590000000000 },
      { year: 2023, spendUSD: 645000000000 },
      { year: 2024, spendUSD: 668000000000 },
      { year: 2026, spendUSD: 680000000000 },
    ],
    tags: ['coste de vida en espana', 'coste de la vida', 'costo de vida en espana', 'gasto medio familias espana ine'],
  },

  // 142. Masa Salarial y Sueldo Medio en España
  {
    id: 'spain-total-wages-salaries-spending',
    categoryId: 'society',
    title: 'Masa Salarial Total y Sueldos en España',
    subtitle: 'Remuneración bruta anual de los más de 21,3 millones de trabajadores asalariados en España (Sueldo medio ~26.948 €/año)',
    annualSpendUSD: 695000000000, // $695 Billion USD (~640.000 M€)
    growthRatePct: 5.1,
    iconName: 'Coins',
    accentColor: '#10b981',
    description:
      'Remuneración total de asalariados pagada por empresas e instituciones públicas en España registrada en la Contabilidad Nacional Trimestral (CNTR) y la Encuesta de Estructura Salarial del INE.',
    sourceName: 'INE (Contabilidad Nacional Trimestral & Encuesta de Estructura Salarial)',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 490000000000 },
      { year: 2014, spendUSD: 465000000000 },
      { year: 2018, spendUSD: 540000000000 },
      { year: 2021, spendUSD: 595000000000 },
      { year: 2023, spendUSD: 655000000000 },
      { year: 2024, spendUSD: 680000000000 },
      { year: 2026, spendUSD: 695000000000 },
    ],
    tags: ['salario medio espana', 'sueldo medio en espana', 'masa salarial espana ine', 'remuneracion asalariados espana'],
  },

  // 143. Gasto en Salario Mínimo Interprofesional (SMI) en España
  {
    id: 'spain-minimum-wage-smi-spending',
    categoryId: 'society',
    title: 'Masa Salarial del Salario Mínimo Interprofesional (SMI) en España',
    subtitle: 'Coste salarial agregado de los más de 2,5 millones de trabajadores perceptores del SMI (1.134 €/mes en 14 pagas = 15.876 €/año)',
    annualSpendUSD: 43000000000, // $43.0 Billion USD (~39.500 M€)
    growthRatePct: 8.5,
    iconName: 'Briefcase',
    accentColor: '#f59e0b',
    description:
      'Masa salarial total percibida por los trabajadores con sueldo regulado bajo el Salario Mínimo Interprofesional (SMI) fijado por el Ministerio de Trabajo y Economía Social y el INE.',
    sourceName: 'Ministerio de Trabajo y Economía Social & INE (EPA)',
    sourceYear: 2024,
    history: [
      { year: 2017, spendUSD: 24000000000 },
      { year: 2019, spendUSD: 31000000000 },
      { year: 2021, spendUSD: 35500000000 },
      { year: 2022, spendUSD: 38000000000 },
      { year: 2023, spendUSD: 40500000000 },
      { year: 2024, spendUSD: 42000000000 },
      { year: 2026, spendUSD: 43000000000 },
    ],
    tags: ['salario minimo espana smi', 'sueldo minimo interprofesional', 'coste salario minimo espana trabajo'],
  },

  // 144. Gasto Total en Alquiler de Vivienda en España
  {
    id: 'spain-household-rent-spending',
    categoryId: 'society',
    title: 'Gasto Total en Alquiler de Vivienda en España',
    subtitle: 'Gasto anual de los más de 3,4 millones de hogares inquilinos en rentas de arrendamiento de vivienda habitual',
    annualSpendUSD: 38000000000, // $38.0 Billion USD (~35.000 M€)
    growthRatePct: 6.5,
    iconName: 'Building2',
    accentColor: '#6366f1',
    description:
      'Volumen total pagado por las familias en alquiler de vivienda residencial habitual en España según el Banco de España, el Ministerio de Vivienda (MIVAU) y el INE.',
    sourceName: 'Banco de España (Boletín Económico) & Ministerio de Vivienda y Agenda Urbana (MIVAU)',
    sourceYear: 2024,
    history: [
      { year: 2014, spendUSD: 22000000000 },
      { year: 2017, spendUSD: 26500000000 },
      { year: 2019, spendUSD: 30500000000 },
      { year: 2021, spendUSD: 33000000000 },
      { year: 2023, spendUSD: 36000000000 },
      { year: 2024, spendUSD: 37200000000 },
      { year: 2026, spendUSD: 38000000000 },
    ],
    tags: ['gasto alquiler espana', 'alquiler vivienda espana', 'rentas alquiler hogares ine mivau', 'arrendatario arrendador espana'],
  },

  // 145. Gasto Discrecional Federal de Estados Unidos (US Discretionary Spending)
  {
    id: 'us-federal-discretionary-spending',
    categoryId: 'government',
    title: 'Gasto Discrecional Federal de Estados Unidos',
    subtitle: 'Presupuesto anual aprobado por el Congreso de EE.UU. para Defensa, Educación, Transporte, Seguridad Nacional y Ciencia (~$55.490/s)',
    annualSpendUSD: 1750000000000, // $1.75 Trillion USD
    growthRatePct: 4.0,
    iconName: 'Landmark',
    accentColor: '#3b82f6',
    description:
      'Total del presupuesto federal discrecional de EE.UU. aprobado mediante leyes de asignaciones del Congreso de los Estados Unidos según la Oficina de Presupuesto del Congreso (CBO) y el Departamento del Tesoro.',
    sourceName: 'Congressional Budget Office (CBO) & US Treasury',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 1350000000000 },
      { year: 2015, spendUSD: 1170000000000 },
      { year: 2019, spendUSD: 1340000000000 },
      { year: 2021, spendUSD: 1630000000000 },
      { year: 2023, spendUSD: 1700000000000 },
      { year: 2024, spendUSD: 1720000000000 },
      { year: 2026, spendUSD: 1750000000000 },
    ],
    tags: ['what is discretionary spending', 'discretionary spending us federal budget', 'gasto discrecional estados unidos', 'cbo federal appropriations'],
  },

  // 146. Gasto Obligatorio Federal y Programas Sociales en EE.UU. (Mandatory Spending)
  {
    id: 'us-federal-mandatory-spending-entitlements',
    categoryId: 'government',
    title: 'Gasto Obligatorio Federal de EE.UU. (Seguridad Social y Medicare)',
    subtitle: 'Desembolsos fijados por ley en Social Security, Medicare, Medicaid, veteranos e intereses de la deuda (~$131.595/s)',
    annualSpendUSD: 4150000000000, // $4.15 Trillion USD
    growthRatePct: 5.5,
    iconName: 'ShieldAlert',
    accentColor: '#dc2626',
    description:
      'Gasto federal obligatorio y prestaciones sociales en Estados Unidos financiado por impuestos sobre nóminas (FICA payroll taxes) según los informes oficiales de la CBO y el Tesoro de EE.UU.',
    sourceName: 'Congressional Budget Office (CBO) & Social Security / Medicare Trustees',
    sourceYear: 2024,
    history: [
      { year: 2010, spendUSD: 2100000000000 },
      { year: 2015, spendUSD: 2500000000000 },
      { year: 2019, spendUSD: 3100000000000 },
      { year: 2021, spendUSD: 4800000000000 },
      { year: 2023, spendUSD: 3800000000000 },
      { year: 2024, spendUSD: 4050000000000 },
      { year: 2026, spendUSD: 4150000000000 },
    ],
    tags: ['medicare and social security mandatory spending', 'us mandatory spending entitlements', 'gasto obligatorio estados unidos cbo'],
  },

  // 147. Gasto Total de Consumidores con Tarjeta de Crédito en Estados Unidos
  {
    id: 'united-states-credit-card-consumer-spending',
    categoryId: 'society',
    title: 'Gasto Total en Tarjetas de Crédito en Estados Unidos',
    subtitle: 'Volumen anual de compras y transacciones con tarjetas de crédito de consumidores estadounidenses (Visa, Mastercard, Amex)',
    annualSpendUSD: 5850000000000, // $5.85 Trillion USD
    growthRatePct: 7.2,
    iconName: 'CreditCard',
    accentColor: '#8b5cf6',
    description:
      'Volumen bruto anual de compras y cargos realizados por consumidores estadounidenses a través de tarjetas de crédito según el informe G.19 de la Reserva Federal (Federal Reserve Board) y Nilson Report.',
    sourceName: 'Federal Reserve Board (Consumer Credit G.19) & Nilson Report',
    sourceYear: 2024,
    history: [
      { year: 2012, spendUSD: 2450000000000 },
      { year: 2016, spendUSD: 3200000000000 },
      { year: 2019, spendUSD: 4100000000000 },
      { year: 2021, spendUSD: 4600000000000 },
      { year: 2023, spendUSD: 5400000000000 },
      { year: 2024, spendUSD: 5650000000000 },
      { year: 2026, spendUSD: 5850000000000 },
    ],
    tags: ['credit card spending', 'credit card bill limit us', 'gasto tarjetas de credito estados unidos', 'us consumer credit card transactions'],
  },
];
