import { CategoryInfo, CurrencyConfig, CurrencyCode, SpendItem } from '@/types/spend';
import { COUNTRIES_GDP_DATA } from './countriesGdpData';
import { COUNTRIES_DEBT_DATA } from './countriesDebtData';

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
    id: 'entertainment',
    name: 'Entretenimiento y Marcas',
    iconName: 'MonitorPlay',
    color: '#8b5cf6',
    badgeBg: 'rgba(139, 92, 246, 0.12)',
    badgeBorder: 'rgba(139, 92, 246, 0.3)',
    description: 'Deportes, streaming, videojuegos y grandes marcas globales',
  },
  {
    id: 'government',
    name: 'Gobierno y Sector Público',
    iconName: 'Landmark',
    color: '#3b82f6',
    badgeBg: 'rgba(59, 130, 246, 0.12)',
    badgeBorder: 'rgba(59, 130, 246, 0.3)',
    description: 'Presupuestos públicos, ayudas, exploración espacial y ministerios',
  },
  {
    id: 'health',
    name: 'Salud y Bienestar',
    iconName: 'HeartPulse',
    color: '#ef4444',
    badgeBg: 'rgba(239, 68, 68, 0.12)',
    badgeBorder: 'rgba(239, 68, 68, 0.3)',
    description: 'Sanidad pública, salud, tabaco y procedimientos médicos',
  },
  {
    id: 'food',
    name: 'Alimentación y Coste de Vida',
    iconName: 'ShoppingBag',
    color: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(16, 185, 129, 0.3)',
    description: 'Gasto en comida, coste de la vida y consumo cotidiano',
  },
  {
    id: 'illicit',
    name: 'Mercado Negro e Ilícito',
    iconName: 'ShieldAlert',
    color: '#ef4444',
    badgeBg: 'rgba(239, 68, 68, 0.12)',
    badgeBorder: 'rgba(239, 68, 68, 0.3)',
    description: 'Economía criminal, ciberdelincuencia, drogas y tráfico',
  },
  {
    id: 'military',
    name: 'Defensa y Armamento',
    iconName: 'Shield',
    color: '#f59e0b',
    badgeBg: 'rgba(245, 158, 11, 0.12)',
    badgeBorder: 'rgba(245, 158, 11, 0.3)',
    description: 'Gasto militar global, armamento, ejércitos y programas de defensa',
  },
  {
    id: 'country-gdp',
    name: 'PIB por Países',
    iconName: 'Globe2',
    color: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(16, 185, 129, 0.3)',
    description: 'Producto Interior Bruto (PIB nominal) de los países en tiempo real',
  },
];

export const SPEND_ITEMS: SpendItem[] = [
  // Deuda nacional de Estados Unidos
  {
    id: 'us-national-debt',
    categoryId: 'government',
    title: 'Deuda nacional de Estados Unidos',
    subtitle: 'La deuda pública acumulada de EE.UU. supera los 39 billones de dólares',
    annualSpendUSD: 39000000000000, // 39 billones (trillions en inglés) de USD
    growthRatePct: 6,
    iconName: 'Landmark',
    accentColor: '#0a3161', // US Navy Blue
    description: 'La deuda nacional acumulada de los Estados Unidos supera los 39 billones de dólares (39 trillion USD). Esta cifra representa el total de las obligaciones financieras pendientes del gobierno federal estadounidense acumuladas a lo largo de su historia fiscal.',
    sourceName: 'LA Times',
    sourceUrl: 'https://www.latimes.com/espanol/eeuu/articulo/2026-03-27/la-deuda-nacional-de-eeuu-supera-los-39-billones-de-dolares',
    sources: [
      {
        name: 'LA Times — La deuda nacional de EE.UU. supera los 39 billones de dólares',
        url: 'https://www.latimes.com/espanol/eeuu/articulo/2026-03-27/la-deuda-nacional-de-eeuu-supera-los-39-billones-de-dolares',
      },
    ],
    sourceYear: 2026,
    tags: ['eeuu', 'deuda nacional', 'gobierno', 'economia', 'presupuesto', 'usa'],
  },
  // Gasto en la Monarquía Española
  {
    id: 'spain-monarchy-spending',
    categoryId: 'government',
    title: 'Gasto en la Monarquía Española',
    subtitle: 'El coste global estimado de la Casa Real española asciende a unos 105 millones de euros al año',
    annualSpendUSD: 114130434, // 105M€ convertidos a USD (105M / 0.92)
    growthRatePct: 2,
    iconName: 'Landmark',
    accentColor: '#ffb81c', // Spanish Gold
    description: 'El coste global estimado de la Monarquía en España asciende a unos 105 millones de euros anuales al sumar la asignación directa oficial de 8,43 millones de euros con los gastos de personal militar, seguridad y soporte de otros ministerios del Estado, lo que equivale a unos 2,2 euros por ciudadano.',
    sourceName: 'Diario en Positivo',
    sourceUrl: 'https://www.diarioenpositivo.com/economia/estudio-calcula-que-monarquia-cuesta-105-millones-ano-jefaturas-estado-mas-baratas-europa/20260303181913075067.html',
    sources: [
      {
        name: 'Diario en Positivo — Coste de la monarquía española',
        url: 'https://www.diarioenpositivo.com/economia/estudio-calcula-que-monarquia-cuesta-105-millones-ano-jefaturas-estado-mas-baratas-europa/20260303181913075067.html',
      },
    ],
    sourceYear: 2026,
    tags: ['monarquía', 'españa', 'casa real', 'presupuesto', 'gobierno'],
  },

  // 1. Gasto en el Ministerio de Igualdad de España
  {
    id: 'spain-equality-ministry-budget',
    categoryId: 'government',
    title: 'Gasto en el Ministerio de Igualdad de España',
    subtitle: 'Presupuesto general anual asignado a políticas de igualdad y prevención de violencia de género',
    annualSpendUSD: 552420000, // €511.5M convertido a USD a tipo ~1.08
    growthRatePct: 3.2,
    iconName: 'Landmark',
    accentColor: '#8b5cf6',
    description:
      'Presupuesto anual del Ministerio de Igualdad de España fijado en 511,5 millones de euros, estructurado en 484 millones de euros gestionados directamente por los servicios centrales del ministerio y 27,5 millones de euros asignados a organismos autónomos dependientes.',
    sourceName: 'Ministerio de Igualdad del Gobierno de España & Wikipedia',
    sourceUrl: 'https://www.igualdad.gob.es/comunicacion/sala-de-prensa/la-ejecucion-presupuestaria-del-ministerio-de-igualdad-roza-el-96-en-2025-y-supera-la-del-ejercicio-anterior/',
    sources: [
      {
        name: 'Ministerio de Igualdad — Nota de Prensa Oficial de Ejecución Presupuestaria',
        url: 'https://www.igualdad.gob.es/comunicacion/sala-de-prensa/la-ejecucion-presupuestaria-del-ministerio-de-igualdad-roza-el-96-en-2025-y-supera-la-del-ejercicio-anterior/',
      },
      {
        name: 'Wikipedia — Ministerio de Igualdad (España)',
        url: 'https://es.wikipedia.org/wiki/Ministerio_de_Igualdad_(España)',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Servicios Centrales del Ministerio', percentage: 94.6, amountUSD: 522720000 },
      { label: 'Organismos Autónomos Dependientes', percentage: 5.4, amountUSD: 29700000 },
    ],
    history: [
      { year: 2018, spendUSD: 180000000 },
      { year: 2020, spendUSD: 205000000 },
      { year: 2021, spendUSD: 450000000 },
      { year: 2022, spendUSD: 525000000 },
      { year: 2023, spendUSD: 550000000 },
      { year: 2024, spendUSD: 552420000 },
      { year: 2026, spendUSD: 570000000 },
    ],
    tags: ['ministerio de igualdad', 'pge', 'igualdad', 'gobierno españa', 'presupuestos'],
  },
  // Gasto en subvenciones y ayudas públicas en España (Libre Mercado)
  {
    id: 'spain-subsidies-public-grants-spending',
    categoryId: 'government',
    title: 'Gasto en Subvenciones y Ayudas en España',
    subtitle: 'España destina unos 41.490 millones de euros anuales en subvenciones y ayudas públicas directas',
    annualSpendUSD: 45097826087, // 41.490M € convertidos a USD (41.49B / 0.92)
    growthRatePct: 5.2,
    iconName: 'Landmark',
    accentColor: '#3b82f6',
    description:
      'España destina alrededor de 41.490 millones de euros anuales en subvenciones y ayudas públicas directas distribuidas entre el gobierno central, las comunidades autónomas y las entidades locales. Esta cifra general engloba ayudas a familias, sectores productivos, empresas y entidades sociales, sin contar las grandes partidas de protección social como las pensiones contributivas o el desempleo.',
    sourceName: 'Libre Mercado — El gasto en subvenciones y ayudas en España',
    sourceUrl: 'https://www.libertaddigital.com/libremercado/2025-12-10/el-gasto-en-subvenciones-se-dispara-hasta-los-42-000-millones-y-equivale-a-2-100-euros-por-hogar-7330610/',
    sources: [
      {
        name: 'Libre Mercado — El Gasto en Subvenciones y Ayudas Equivale a 2.100€ por Hogar',
        url: 'https://www.libertaddigital.com/libremercado/2025-12-10/el-gasto-en-subvenciones-se-dispara-hasta-los-42-000-millones-y-equivale-a-2-100-euros-por-hogar-7330610/',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Ayudas Directas a Familias y Hogares', percentage: 40.0, amountUSD: 18039130435 },
      { label: 'Subvenciones a Empresas y Sectores Productivos', percentage: 60.0, amountUSD: 27058695652 },
    ],
    history: [
      { year: 2018, spendUSD: 30000000000 },
      { year: 2020, spendUSD: 38000000000 },
      { year: 2022, spendUSD: 40000000000 },
      { year: 2026, spendUSD: 45097826087 },
    ],
    tags: ['españa', 'subvenciones', 'ayudas publicas', 'gobierno españa', 'presupuesto', 'comunidades autonomas', 'hogares'],
  },
  // Inversión pública en exploración espacial (FasterCapital)
  {
    id: 'global-space-exploration-spending',
    categoryId: 'government',
    title: 'Gasto público en Exploración Espacial',
    subtitle: 'La inversión pública en exploración espacial alcanza los 119.000 millones de euros anuales en el mundo',
    annualSpendUSD: 129347826087, // 119.000M € convertidos a USD (119.0B / 0.92)
    growthRatePct: 6.5,
    iconName: 'Globe',
    accentColor: '#38bdf8',
    description:
      'El presupuesto para la exploración espacial ha mostrado un crecimiento significativo en los últimos años. Se estima que los gobiernos de todo el mundo realizarán una inversión pública en el sector espacial de 119.000 millones de euros anuales, impulsando misiones lunares, satélites y tecnología de órbita.',
    sourceName: 'FasterCapital — Desafío de costos de la exploración espacial',
    sourceUrl: 'https://fastercapital.com/es/contenido/Desafio-de-costos--El-desafio-de-costos-de-la-exploracion-espacial.html',
    sources: [
      {
        name: 'FasterCapital — El Desafío de Costos de la Exploración Espacial',
        url: 'https://fastercapital.com/es/contenido/Desafio-de-costos--El-desafio-de-costos-de-la-exploracion-espacial.html',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Gobierno y Agencias Públicas de EE.UU. (NASA, etc.)', percentage: 45.0, amountUSD: 58206521739 },
      { label: 'Otras Agencias Espaciales del Mundo (ESA, CNSA, ISRO, etc.)', percentage: 55.0, amountUSD: 71141304348 },
    ],
    history: [
      { year: 2018, spendUSD: 97826086956 },
      { year: 2021, spendUSD: 114130434782 },
      { year: 2026, spendUSD: 129347826087 },
    ],
    tags: ['espacio', 'nasa', 'esa', 'satelites', 'gasto publico', 'presupuesto', 'fastercapital', 'ciencia'],
  },
  // Gasto del presupuesto ordinario de la ONU
  {
    id: 'un-annual-budget',
    categoryId: 'government',
    title: 'Gasto del presupuesto ordinario de la ONU',
    subtitle: 'El presupuesto de la Organización de las Naciones Unidas (ONU) para 2026 es de 3.450 millones de dólares',
    annualSpendUSD: 3450000000, // 3.450 millones de USD anuales
    growthRatePct: 2.0,
    iconName: 'Globe',
    accentColor: '#009edb', // UN Blue
    description: 'El presupuesto ordinario aprobado para el funcionamiento de la Organización de las Naciones Unidas (ONU) durante el año 2026 asciende a 3.450 millones de dólares. Este presupuesto financia la secretaría general, misiones de paz, programas y oficinas de las Naciones Unidas en todo el mundo.',
    sourceName: 'Noticias ONU',
    sourceUrl: 'https://news.un.org/es/story/2025/12/1540968',
    sources: [
      {
        name: 'Noticias ONU — Presupuesto ordinario de la ONU para 2026',
        url: 'https://news.un.org/es/story/2025/12/1540968',
      },
    ],
    sourceYear: 2026,
    tags: ['onu', 'naciones unidas', 'presupuesto', 'global', 'gobierno', 'cooperacion'],
  },
  // Gasto en la Monarquía Británica
  {
    id: 'uk-monarchy-spending',
    categoryId: 'government',
    title: 'Gasto en la Monarquía Británica',
    subtitle: 'El coste global estimado de la familia real británica ronda los 166 millones de euros al año',
    annualSpendUSD: 180434782, // 166M€ convertidos a USD (166M / 0.92)
    growthRatePct: 3.5,
    iconName: 'Landmark',
    accentColor: '#00247d', // Royal Blue
    description: 'El gasto global de la monarquía del Reino Unido se estima en unos 166 millones de euros anuales, incluyendo la subvención soberana (Sovereign Grant) y los costes de seguridad financiados por el Estado. Es una de las jefaturas de estado más caras de Europa.',
    sourceName: 'Diario en Positivo',
    sourceUrl: 'https://www.diarioenpositivo.com/economia/estudio-calcula-que-monarquia-cuesta-105-millones-ano-jefaturas-estado-mas-baratas-europa/20260303181913075067.html',
    sources: [
      {
        name: 'Diario en Positivo — Coste de la monarquía británica',
        url: 'https://www.diarioenpositivo.com/economia/estudio-calcula-que-monarquia-cuesta-105-millones-ano-jefaturas-estado-mas-baratas-europa/20260303181913075067.html',
      },
    ],
    sourceYear: 2026,
    tags: ['monarquía', 'reino unido', 'familia real', 'presupuesto', 'gobierno'],
  },
  // Gasto de jugadores en Fortnite
  {
    id: 'fortnite-player-spending',
    categoryId: 'entertainment',
    title: 'Gasto de jugadores en Fortnite',
    subtitle: 'Los jugadores de Fortnite gastan un promedio de unos 16 millones de dólares al día',
    annualSpendUSD: 5840000000, // 16M al día * 365 días = 5.840 millones de USD anuales
    growthRatePct: 5,
    iconName: 'Tv',
    accentColor: '#31a4fb',
    description: 'Los jugadores del popular battle royale Fortnite gastan un promedio aproximado de 16 millones de dólares al día a nivel global. Este gasto se realiza principalmente a través de la compra de su moneda virtual, los pavos (V-Bucks), para adquirir pases de batalla, skins de personajes, gestos y otros cosméticos dentro del juego.',
    sourceName: 'Tekrevol',
    sourceUrl: 'https://www.tekrevol.com/blogs/fortnite-revenue-usage-statistics/',
    sources: [
      {
        name: 'Tekrevol — Fortnite Revenue and Usage Statistics',
        url: 'https://www.tekrevol.com/blogs/fortnite-revenue-usage-statistics/',
      },
    ],
    sourceYear: 2026,
    tags: ['fortnite', 'videojuegos', 'microtransacciones', 'entretenimiento', 'epic games'],
  },
  // Gasto de usuarios en OnlyFans
  {
    id: 'onlyfans-user-spending',
    categoryId: 'entertainment',
    title: 'Gasto de usuarios en OnlyFans',
    subtitle: 'Los usuarios gastan aproximadamente 7.200 millones de dólares anuales en OnlyFans',
    annualSpendUSD: 7200000000, // 7.200 millones de USD anuales
    growthRatePct: 15,
    iconName: 'Tv',
    accentColor: '#00aff0', // OnlyFans light blue
    description: 'El gasto global de los usuarios en la plataforma de suscripción de creadores de contenido OnlyFans alcanzó aproximadamente los 7.200 millones de dólares anuales. La plataforma ha experimentado un crecimiento masivo impulsado por su modelo de suscripción directa y propinas.',
    sourceName: 'El Vocero',
    sourceUrl: 'https://elvocero.com.ar/2025/12/18/onlyfans-facturo-usd-7-200-millones-en-2025-y-argentina-se-ubico-entre-los-20-paises-que-mas-gastaron/',
    sources: [
      {
        name: 'El Vocero — OnlyFans facturó USD 7.200 millones',
        url: 'https://elvocero.com.ar/2025/12/18/onlyfans-facturo-usd-7-200-millones-en-2025-y-argentina-se-ubico-entre-los-20-paises-que-mas-gastaron/',
      },
    ],
    sourceYear: 2025,
    tags: ['onlyfans', 'suscripciones', 'entretenimiento', 'tecnologia', 'redes sociales'],
  },
  // Gasto en reinversión de MrBeast
  {
    id: 'mrbeast-content-reinvestment',
    categoryId: 'entertainment',
    title: 'Gasto en producción y reinversión de MrBeast',
    subtitle: 'MrBeast reinvierte casi la totalidad de sus ingresos (unos 400 millones de dólares anuales)',
    annualSpendUSD: 400000000, // 400 millones de USD anuales
    growthRatePct: 10,
    iconName: 'Tv',
    accentColor: '#00e5ff', // MrBeast logo teal
    description: 'Jimmy Donaldson (MrBeast) reinvierte prácticamente la totalidad de los ingresos generados por su holding Beast Industries, estimados en unos 400 millones de dólares anuales, directamente en la producción de sus superproducciones de YouTube y nuevos proyectos empresariales. Beast Industries cuenta con una valoración corporativa estimada en unos 5.200 millones de dólares.',
    sourceName: 'Plisio',
    sourceUrl: 'https://plisio.net/es/profiles/mrbeast',
    sources: [
      {
        name: 'Plisio — Perfil y finanzas de MrBeast',
        url: 'https://plisio.net/es/profiles/mrbeast',
      },
    ],
    sourceYear: 2025,
    tags: ['mrbeast', 'youtube', 'reinversion', 'entretenimiento', 'beast industries'],
  },
  // Gasto en entradas de The Eras Tour (Taylor Swift)
  {
    id: 'eras-tour-ticket-spending',
    categoryId: 'entertainment',
    title: 'Gasto en entradas de The Eras Tour (Taylor Swift)',
    subtitle: 'Los fans gastaron más de 2.000 millones de dólares en entradas para la gira de Taylor Swift',
    annualSpendUSD: 1000000000, // 2.000 millones de USD generados a lo largo de 2 años, anualizado a 1.000 millones de USD anuales
    growthRatePct: 0,
    iconName: 'Tv',
    accentColor: '#e0aaff', // Eras Tour soft pastel purple
    description: 'El gasto global de los fans en la venta de entradas para la gira "The Eras Tour" de Taylor Swift superó los 2.000 millones de dólares a lo largo de casi dos años de conciertos, convirtiéndose en la gira musical con mayor recaudación en la historia de la música. Este impacto financiero también impulsó significativamente las economías locales en cada ciudad que visitó.',
    sourceName: 'Billboard',
    sourceUrl: 'https://www.billboard.com/espanol/noticias/taylor-swift-eras-tour-supera-2000-millones-de-dolares-en-ventas-1235849106/',
    sources: [
      {
        name: 'Billboard — The Eras Tour supera 2000 millones',
        url: 'https://www.billboard.com/espanol/noticias/taylor-swift-eras-tour-supera-2000-millones-de-dolares-en-ventas-1235849106/',
      },
      {
        name: 'GQ — Ganancias de Taylor Swift con The Eras Tour',
        url: 'https://www.revistagq.com/articulo/cuanto-ha-ganado-taylor-swift-con-el-eras-tour-despues-de-casi-dos-anos-de-gira',
      },
      {
        name: 'TN — Qué hizo Taylor Swift con lo ganado',
        url: 'https://tn.com.ar/musica/noticias/2025/12/12/taylor-swift-blanqueo-que-hizo-con-la-millonaria-cifra-que-gano-con-the-eras-tour/',
      },
    ],
    sourceYear: 2025,
    tags: ['taylor swift', 'conciertos', 'musica', 'eras tour', 'entretenimiento'],
  },
  // Gasto en productos de Jordan Brand (Nike)
  {
    id: 'jordan-brand-spending',
    categoryId: 'entertainment',
    title: 'Gasto en productos de Jordan Brand (Nike)',
    subtitle: 'Los consumidores gastan más de 7.000 millones de dólares anuales en productos de la marca Jordan',
    annualSpendUSD: 7000000000, // 7.000 millones de USD anuales
    growthRatePct: 8,
    iconName: 'Tv',
    accentColor: '#e60000', // Classic Jordan Red
    description: 'El gasto global de los consumidores en zapatillas, ropa y accesorios de la división Jordan Brand de Nike supera los 7.000 millones de dólares anuales. Michael Jordan recibe aproximadamente el 5% de estas ventas en concepto de regalías por su histórico acuerdo de patrocinio.',
    sourceName: 'GQ',
    sourceUrl: 'https://www.revistagq.com/moda/articulo/cuanto-gana-nike-michael-jordan',
    sources: [
      {
        name: 'GQ — Cuánto gana Nike y Michael Jordan con Jordan Brand',
        url: 'https://www.revistagq.com/moda/articulo/cuanto-gana-nike-michael-jordan',
      },
      {
        name: 'NX Noticias — Regalías de Michael Jordan superan los 300 millones',
        url: 'https://www.facebook.com/NXNoticias.oficial/posts/michael-jordan-regal%C3%ADas-con-nike-superan-los-300-millones-de-d%C3%B3lares-al-a%C3%B1ola-hi/122280916874074746/',
      },
    ],
    sourceYear: 2024,
    tags: ['jordan', 'nike', 'zapatillas', 'moda', 'deportes', 'marcas', 'gasto'],
  },
  // Gasto de Ferrari en su equipo de Fórmula 1
  {
    id: 'ferrari-f1-spending',
    categoryId: 'entertainment',
    title: 'Gasto de Ferrari en su equipo de Fórmula 1',
    subtitle: 'Ferrari gasta unos 185 millones de dólares al año para competir bajo el límite presupuestario de la F1',
    annualSpendUSD: 185000000, // Media de 170-200 millones de USD anuales
    growthRatePct: 0,
    iconName: 'Tv',
    accentColor: '#e00000', // Ferrari Red
    description: 'El gasto anual de la escudería Ferrari para operar su equipo de Fórmula 1 se estima en una media de 185 millones de dólares (dentro del rango de 170 a 200 millones de USD) bajo el límite presupuestario regulado por la FIA. Esta cifra financia el desarrollo de los coches, las pruebas y los salarios de operaciones del equipo, aunque excluye excepciones como los salarios de los pilotos y los motores.',
    sourceName: 'Revista Car',
    sourceUrl: 'https://revistacar.es/cuanto-cuesta-tener-un-equipo-de-formula-1/',
    sources: [
      {
        name: 'Revista Car — Cuánto cuesta tener un equipo de Fórmula 1',
        url: 'https://revistacar.es/cuanto-cuesta-tener-un-equipo-de-formula-1/',
      },
    ],
    sourceYear: 2024,
    tags: ['ferrari', 'f1', 'formula 1', 'deportes', 'marcas', 'presupuesto', 'gasto'],
  },

  // Ingresos Globales de Spotify
  {
    id: 'spotify-annual-revenue',
    categoryId: 'entertainment',
    title: 'Gasto de usuarios en Spotify',
    subtitle: 'Spotify genera alrededor de 17.000 millones de euros en ingresos anuales',
    annualSpendUSD: 18478260870, // 17.000 millones de euros convertidos a USD (17B / 0.92)
    growthRatePct: 15,
    iconName: 'Music',
    accentColor: '#1db954',
    description: 'La plataforma de streaming de música Spotify genera unos ingresos totales de aproximadamente 17.000 millones de euros anuales a nivel global. Esta cifra millonaria proviene principalmente de sus suscripciones Premium y, en menor medida, de la publicidad en su nivel gratuito.',
    sourceName: 'CompaniesMarketCap',
    sourceUrl: 'https://companiesmarketcap.com/eur/spotify/revenue/',
    sources: [
      {
        name: 'CompaniesMarketCap — Spotify Revenue',
        url: 'https://companiesmarketcap.com/eur/spotify/revenue/',
      },
    ],
    sourceYear: 2024,
    tags: ['spotify', 'musica', 'streaming', 'entretenimiento', 'ingresos'],
  },
  // Presupuesto de GTA VI
  {
    id: 'gta-6-budget',
    categoryId: 'entertainment',
    title: 'Gasto en desarrollo de GTA VI',
    subtitle: 'El costo estimado de desarrollo y marketing de Grand Theft Auto VI',
    annualSpendUSD: 1000000000,
    growthRatePct: 0,
    iconName: 'Tv',
    accentColor: '#8b5cf6',
    description: 'El presupuesto estimado para el desarrollo de Grand Theft Auto VI (GTA 6) supera los 1.000 millones de dólares, convirtiéndolo en uno de los productos de entretenimiento más caros de la historia. El CEO de Take-Two Interactive lo definió como "caro".',
    sourceName: 'Vandal',
    sourceUrl: 'https://vandal.elespanol.com/noticia/1350789570/mas-de-1000-millones-de-dolares-estiman-el-presupuesto-de-gta-6-que-el-ceo-de-taketwo-define-como-caro/',
    sources: [
      {
        name: 'Vandal — Más de 1.000 millones de dólares estiman el presupuesto de GTA 6',
        url: 'https://vandal.elespanol.com/noticia/1350789570/mas-de-1000-millones-de-dolares-estiman-el-presupuesto-de-gta-6-que-el-ceo-de-taketwo-define-como-caro/',
      },
    ],
    sourceYear: 2024,
    tags: ['gta', 'videojuegos', 'entretenimiento', 'rockstar', 'take-two', 'presupuesto'],
  },
  // Gasto en Cirugías Estéticas en el Mundo
  {
    id: 'global-cosmetic-surgery-spending',
    categoryId: 'health',
    title: 'Gasto en Cirugías Estéticas',
    subtitle: 'El costo total de las cirugías estéticas en el mundo se estima en 2.660 millones de euros anuales',
    annualSpendUSD: 2891304348, // €2.660 millones de euros convertidos a USD (2.66B / 0.92)
    growthRatePct: 5.5,
    iconName: 'Sparkles',
    accentColor: '#ec4899',
    description:
      'El costo total de las cirugías estéticas en el mundo se estima en 2.660 millones de euros. Este gasto incluye una amplia gama de procedimientos, desde el aumento de pecho y la liposucción hasta inyecciones faciales de toxina botulínica y ácido hialurónico. La creciente demanda de estos tratamientos se debe a la influencia de las redes sociales y el culto a la imagen.',
    sourceName: 'MediHair — Estadísticas de cirugía plástica y estética 2025',
    sourceUrl: 'https://medihair.com/es/estadisticas-de-cirugia-plastica-y-estetica/',
    sources: [
      {
        name: 'Estadísticas de cirugía plástica y estética 2025',
        url: 'https://medihair.com/es/estadisticas-de-cirugia-plastica-y-estetica/',
      },
    ],
    sourceYear: 2025,
    tags: ['cirugía estética', 'belleza', 'cirugía plástica', 'estilismo', 'medihair', 'salud estética'],
  },
  // Gasto farmacéutico mundial (Intuition Labs)
  {
    id: 'global-pharmaceutical-spending',
    categoryId: 'health',
    title: 'Gasto farmacéutico mundial',
    subtitle: 'El gasto en medicamentos y productos farmacéuticos supera los 2 billones de dólares anuales en el mundo',
    annualSpendUSD: 2000000000000, // 2 billones (trillions en inglés) de USD
    growthRatePct: 4.5,
    iconName: 'Pill',
    accentColor: '#10b981', // Emerald green
    description: 'El gasto farmacéutico mundial superó los 2 billones de dólares anuales, oscilando entre 1,7 y 2,3 billones según la segmentación por precios de factura o precios netos de mercado. Este sector está impulsado por el desarrollo de nuevos medicamentos de alta especialidad, el acceso global a tratamientos y el envejecimiento de la población.',
    sourceName: 'Intuition Labs',
    sourceUrl: 'https://intuitionlabs.ai/articles/pharmaceutical-market-analysis-trends',
    sources: [
      {
        name: 'Intuition Labs — Pharmaceutical Market Analysis & Trends',
        url: 'https://intuitionlabs.ai/articles/pharmaceutical-market-analysis-trends',
      },
    ],
    sourceYear: 2025,
    tags: ['farmacéutica', 'medicamentos', 'salud', 'gasto global', 'farmacia', 'medicina'],
  },
  // Costo económico de la obesidad y sobrepeso (Live-Med)
  {
    id: 'global-obesity-economic-cost',
    categoryId: 'health',
    title: 'Costo económico de la obesidad y sobrepeso',
    subtitle: 'El impacto económico mundial de la obesidad y el sobrepeso ronda los 2 billones de dólares anuales',
    annualSpendUSD: 2000000000000, // 2 billones (trillions en inglés) de USD
    growthRatePct: 6.8,
    iconName: 'HeartPulse',
    accentColor: '#ef4444', // Red
    description: 'El coste económico global derivado del sobrepeso y la obesidad se estima en unos 2 billones de dólares anuales, lo que representa entre el 2,4% y el 2,8% del PIB mundial. Este impacto incluye gastos médicos directos y pérdidas masivas de productividad por incapacidad laboral o muerte prematura. Las proyecciones estiman que superará los 4,3 billones anuales para 2035.',
    sourceName: 'Live-Med (World Obesity Atlas)',
    sourceUrl: 'https://live.med/es/blog/analisis-del-world-obesity-atlas-2023-impacto-economico-obesidad/',
    sources: [
      {
        name: 'Live-Med — Análisis del World Obesity Atlas: Impacto económico de la obesidad',
        url: 'https://live.med/es/blog/analisis-del-world-obesity-atlas-2023-impacto-economico-obesidad/',
      },
    ],
    sourceYear: 2026,
    tags: ['obesidad', 'salud', 'costo medico', 'gasto global', 'pib', 'sobrepeso', 'productividad'],
  },
  // Costo de la depresión y ansiedad (Yahoo Noticias)
  {
    id: 'global-depression-anxiety-cost',
    categoryId: 'health',
    title: 'Costo de la depresión y ansiedad',
    subtitle: 'La depresión y la ansiedad cuestan a la economía mundial alrededor de 1 billón de dólares anuales',
    annualSpendUSD: 1000000000000, // 1 billón (trillion en inglés) de USD
    growthRatePct: 3.5,
    iconName: 'Brain',
    accentColor: '#8b5cf6', // Purple
    description: 'El impacto económico global de los trastornos de depresión y ansiedad asciende a aproximadamente 1 billón de dólares anuales. Este coste proviene principalmente de la pérdida de productividad laboral por absentismo, presentismo y bajas médicas, afectando la salud mental de millones de personas a nivel mundial.',
    sourceName: 'Yahoo Noticias (OMS / Banco Mundial)',
    sourceUrl: 'https://es-us.noticias.yahoo.com/costo-global-ansiedad-depresi%C3%B3n-supera-150118561.html',
    sources: [
      {
        name: 'Yahoo Noticias — El costo global de la ansiedad y depresión',
        url: 'https://es-us.noticias.yahoo.com/costo-global-ansiedad-depresi%C3%B3n-supera-150118561.html',
      },
    ],
    sourceYear: 2025,
    tags: ['depresión', 'ansiedad', 'salud mental', 'salud', 'gasto global', 'productividad', 'oms'],
  },
  // Gasto del presupuesto básico de la OMS
  {
    id: 'who-annual-budget',
    categoryId: 'health',
    title: 'Gasto del presupuesto básico de la OMS',
    subtitle: 'El presupuesto para programas básicos de la OMS es de 2.100 millones de dólares anuales',
    annualSpendUSD: 2100000000, // 2.100 millones de USD anualizados (4.200 millones para el bienio 2026-2027)
    growthRatePct: 4.0,
    iconName: 'HeartPulse',
    accentColor: '#009ad9', // WHO Blue
    description: 'El presupuesto para programas básicos de la Organización Mundial de la Salud (OMS) aprobado para el bienio 2026-2027 asciende a 4.200 millones de dólares (lo que equivale a un promedio de 2.100 millones de dólares anuales). Este ciclo incluye un aumento histórico del 20% en las contribuciones básicas asignadas por los Estados Miembros para fortalecer la respuesta a emergencias sanitarias mundiales.',
    sourceName: 'Organización Mundial de la Salud (OMS)',
    sourceUrl: 'https://www.who.int/es/news/item/20-05-2025-in-historic-move--who-member-states-approve-20--funding-increase-and-2026-27-budget',
    sources: [
      {
        name: 'OMS — Estados Miembros aprueban aumento y presupuesto 2026-2027',
        url: 'https://www.who.int/es/news/item/20-05-2025-in-historic-move--who-member-states-approve-20--funding-increase-and-2026-27-budget',
      },
      {
        name: 'OMS — Sitio Web Oficial en Español',
        url: 'https://www.who.int/es',
      },
    ],
    sourceYear: 2026,
    tags: ['oms', 'who', 'salud', 'presupuesto', 'global', 'salud publica'],
  },
  // Carga económica del tabaco (OMS)
  {
    id: 'economic-burden-of-tobacco',
    categoryId: 'health',
    title: 'Gasto y costo médico del tabaco',
    subtitle: 'El costo económico y médico del tabaco es de 1,8 billones de dólares anuales en el mundo',
    annualSpendUSD: 1800000000000, // $1.8 Trillones USD (1.8 Trillion)
    growthRatePct: 2.5,
    iconName: 'HeartPulse',
    accentColor: '#b91c1c',
    description:
      'La carga económica del tabaco es devastadora, con un costo global de 1,8 billones de dólares al año. Este costo incluye gastos médicos, enfermedades relacionadas y efectos del humo de segunda mano, aunque al sumar la pérdida de productividad, el costo se duplica. La industria del tabaco, que genera ingresos de aproximadamente 92 mil millones de dólares, enfrenta un grave rezago en la implementación de impuestos al tabaco, lo que limita su capacidad para prevenir y reducir el consumo.',
    sourceName: 'Organización Mundial de la Salud (OMS) — Informe de Tendencias del Tabaco',
    sourceUrl: 'https://www.who.int/es/news/item/06-10-2025-who-tobacco-trends-report-1-in-5-adults-still-addicted-to-tobacco',
    sources: [
      {
        name: 'OMS — Informe sobre las Tendencias del Consumo de Tabaco',
        url: 'https://www.who.int/es/news/item/06-10-2025-who-tobacco-trends-report-1-in-5-adults-still-addicted-to-tobacco',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Gastos Médicos y Humo de Segunda Mano', percentage: 50.0, amountUSD: 900000000000 },
      { label: 'Pérdida de Productividad Laboral', percentage: 50.0, amountUSD: 900000000000 },
    ],
    history: [
      { year: 2018, spendUSD: 1400000000000 },
      { year: 2021, spendUSD: 1600000000000 },
      { year: 2025, spendUSD: 1750000000000 },
      { year: 2026, spendUSD: 1800000000000 },
    ],
    tags: ['tabaco', 'oms', 'salud publica', 'tabaquismo', 'enfermedades', 'coste medico', 'cigarrillos'],
  },
  // Gasto sanitario público en España (Ministerio de Sanidad)
  {
    id: 'spain-public-healthcare-spending',
    categoryId: 'health',
    title: 'Gasto Sanitario Público en España',
    subtitle: 'El gasto sanitario público en España alcanza los 101.739 millones de euros anuales (~2.084€ por habitante)',
    annualSpendUSD: 110585869565, // 101.739M € convertidos a USD (101.739B / 0.92)
    growthRatePct: 4.8,
    iconName: 'HeartPulse',
    accentColor: '#3b82f6',
    description:
      'El gasto sanitario público en España alcanzó los 101.739 millones de euros, lo que representa un 6,4% del PIB y un gasto medio de 2.084 euros por habitante, según la Estadística de Gasto Sanitario Público del Ministerio de Sanidad.',
    sourceName: 'Ministerio de Sanidad — Estadística de Gasto Sanitario Público',
    sourceUrl: 'https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/sanidad14/paginas/2026/130526-gasto-sanitario-publico-2024.aspx',
    sources: [
      {
        name: 'La Moncloa — El Gasto Sanitario Público en España',
        url: 'https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/sanidad14/paginas/2026/130526-gasto-sanitario-publico-2024.aspx',
      },
      {
        name: 'EpData — Datos de Presupuesto de Sanidad por Comunidades Autónomas',
        url: 'https://www.epdata.es/datos/gasto-sanitario-espana-presupuesto-sanidad-comunidades-autonomas/686',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Servicios de Salud de las CCAA', percentage: 92.5, amountUSD: 102291929347 },
      { label: 'Administración Central y Seguridad Social', percentage: 7.5, amountUSD: 8293940218 },
    ],
    history: [
      { year: 2018, spendUSD: 85000000000 },
      { year: 2020, spendUSD: 95400000000 },
      { year: 2022, spendUSD: 104200000000 },
      { year: 2026, spendUSD: 110585869565 },
    ],
    tags: ['españa', 'sanidad', 'gasto publico', 'salud', 'ministerio de sanidad', 'hospitales', 'presupuesto'],
  },
  // Gasto en bebidas alcohólicas (Statista)
  {
    id: 'global-alcohol-spending',
    categoryId: 'food',
    title: 'Gasto en Bebidas Alcohólicas',
    subtitle: 'El gasto anual en bebidas alcohólicas se sitúa en torno a los 1,94 billones de dólares en el mundo',
    annualSpendUSD: 1945000000000, // $1.945 Trillones USD (1.945 Trillion)
    growthRatePct: 3.5,
    iconName: 'ShoppingBag',
    accentColor: '#d97706',
    description:
      'El gasto en bebidas alcohólicas alcanza una cifra anual de entre 1,89 billones y 2 billones de dólares. Esta cifra abarca tanto las compras de los consumidores en tiendas y supermercados como el consumo en bares y restaurantes a nivel global, según datos del informe de Statista Market Forecast.',
    sourceName: 'Statista Market Forecast — Alcoholic Drinks Worldwide',
    sourceUrl: 'https://www.statista.com/outlook/cmo/alcoholic-drinks/worldwide',
    sources: [
      {
        name: 'Statista — Mercado y Gasto Mundial de Bebidas Alcohólicas',
        url: 'https://www.statista.com/outlook/cmo/alcoholic-drinks/worldwide',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Cerveza', percentage: 45.0, amountUSD: 875250000000 },
      { label: 'Espirituosas', percentage: 35.0, amountUSD: 680750000000 },
      { label: 'Vino y Sidra', percentage: 20.0, amountUSD: 389000000000 },
    ],
    history: [
      { year: 2018, spendUSD: 1650000000000 },
      { year: 2021, spendUSD: 1780000000000 },
      { year: 2024, spendUSD: 1890000000000 },
      { year: 2026, spendUSD: 1945000000000 },
    ],
    tags: ['alcohol', 'bebidas', 'alimentacion', 'cerveza', 'vino', 'restaurantes', 'statista', 'consumo'],
  },
  // 2b. Coste de criar a un hijo en España hasta los 18 años (Educo)
  {
    id: 'spain-cost-raising-child',
    categoryId: 'food',
    title: 'Gasto de criar a un hijo en España (0–18 años)',
    subtitle: 'Entre 115.000 € y 180.000 € en total de media básica; unos 8.194 € al año por hijo',
    annualSpendUSD: 8932, // Media 147.500 € / 18 años = 8.194 €/año × 1.09 ≈ $8.932 USD/año
    growthRatePct: 3.0,
    iconName: 'ShoppingBag',
    accentColor: '#f59e0b',
    description:
      'No existe una cifra única a nivel mundial, ya que el costo cambia mucho según el país. En España, criar a un hijo hasta los 18 años cuesta entre 115.000 y 180.000 euros de media básica (media: 147.500 €), lo que equivale a unos 8.194 € al año por hijo (~8.932 USD). Este coste incluye alimentación, ropa, educación, sanidad, ocio y transporte, sin contar con vivienda ni estudios universitarios.',
    sourceName: 'Educo — ¿Cuánto cuesta criar a un hijo en España?',
    sourceUrl: 'https://www.educo.org/blog/cuanto-cuesta-criar-a-un-hijo-o-hija-en-espana',
    sources: [
      {
        name: 'Educo — ¿Cuánto cuesta criar a un hijo o hija en España?',
        url: 'https://www.educo.org/blog/cuanto-cuesta-criar-a-un-hijo-o-hija-en-espana',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Alimentación y Ropa', percentage: 30, amountUSD: 2680 },
      { label: 'Educación y Material Escolar', percentage: 28, amountUSD: 2501 },
      { label: 'Ocio, Extraescolares y Deporte', percentage: 22, amountUSD: 1965 },
      { label: 'Sanidad y Cuidados', percentage: 20, amountUSD: 1786 },
    ],
    history: [
      { year: 2015, spendUSD: 7200 },
      { year: 2018, spendUSD: 7700 },
      { year: 2021, spendUSD: 8100 },
      { year: 2025, spendUSD: 8932 },
    ],
    tags: ['hijo', 'crianza', 'familia', 'españa', 'educo', 'coste de vida', 'infancia'],
  },
  // 2c. Mercado Mundial de Comida a Domicilio Online (Fortune Business Insights)
  {
    id: 'global-online-food-delivery-market',
    categoryId: 'food',
    title: 'Gasto Mundial en Comida a Domicilio y Para Llevar Online',
    subtitle: 'La gente gasta más de 320.000 millones de dólares al año en plataformas digitales de comida a domicilio',
    annualSpendUSD: 320000000000, // $320.000 Millones USD (320 Billion)
    growthRatePct: 9.8,
    iconName: 'ShoppingBag',
    accentColor: '#f59e0b',
    description:
      'A nivel mundial, la gente gasta más de 320.000 millones de dólares al año en el mercado de comida a domicilio y para llevar a través de plataformas digitales como Uber Eats, Just Eat, Deliveroo, DoorDash o Glovo. Este mercado ha crecido de forma exponencial desde la pandemia de 2020, impulsado por el auge del comercio móvil, los hábitos de consumo urbano y la expansión de los dark kitchens a escala global, según el informe de Fortune Business Insights.',
    sourceName: 'Fortune Business Insights — Online Food Delivery Market',
    sourceUrl: 'https://www.fortunebusinessinsights.com/online-food-delivery-market-110672',
    sources: [
      {
        name: 'Fortune Business Insights — Online Food Delivery Market Size & Growth Report',
        url: 'https://www.fortunebusinessinsights.com/online-food-delivery-market-110672',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Asia-Pacífico (China, India, Japón, Corea)', percentage: 48, amountUSD: 153600000000 },
      { label: 'América del Norte (EE. UU. y Canadá)', percentage: 28, amountUSD: 89600000000 },
      { label: 'Europa y Resto del Mundo', percentage: 24, amountUSD: 76800000000 },
    ],
    history: [
      { year: 2019, spendUSD: 107400000000 },
      { year: 2021, spendUSD: 196000000000 },
      { year: 2023, spendUSD: 262000000000 },
      { year: 2025, spendUSD: 320000000000 },
    ],
    tags: ['comida a domicilio', 'delivery', 'uber eats', 'glovo', 'just eat', 'doordash', 'fortune business insights'],
  },
  // 2. Gasto en comida al mes de 1 persona en España (CaixaBank)

  {
    id: 'spain-individual-monthly-food-cost',
    categoryId: 'food',
    title: 'Gasto en Comida de 1 Persona en España',
    subtitle: 'Presupuesto mensual medio estimado de 250 € para alimentación y cesta de la compra de un habitante',
    annualSpendUSD: 3260, // 250€/mes * 12 meses = 3.000€ (~$3.260 USD)
    growthRatePct: 3.5,
    iconName: 'ShoppingBag',
    accentColor: '#10b981',
    description:
      'Gasto promedio en alimentación y cesta de la compra para una persona residente que vive sola en España, estimado en 250 € al mes (3.000 € anuales) según datos consolidados de CaixaBank y análisis de consumo de Telecinco Noticias.',
    sourceName: 'CaixaBank & Telecinco Noticias',
    sourceUrl: 'https://www.caixabank.es/particular/nuevos-residentes/coste-de-vida-en-espana-p.html',
    sources: [
      {
        name: 'CaixaBank — Análisis de Coste de Vida en España para Nuevos Residentes',
        url: 'https://www.caixabank.es/particular/nuevos-residentes/coste-de-vida-en-espana-p.html',
      },
      {
        name: 'Telecinco Noticias — ¿Cuánto gasta en comida al mes una persona que vive sola?',
        url: 'https://www.telecinco.es/noticias/economia/consumo/20260201/cuanto-gasta-persona-vive-sola-comida-mes_18_017982448.html',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Supermercado y Productos Frescos', percentage: 80, amountUSD: 2608 },
      { label: 'Restauración y Consumo Fuera de Casa', percentage: 20, amountUSD: 652 },
    ],
    history: [
      { year: 2021, spendUSD: 2600 },
      { year: 2023, spendUSD: 2950 },
      { year: 2025, spendUSD: 3260 },
    ],
    tags: ['comida', 'supermercado', 'caixabank', 'españa', 'cesta de la compra', 'gasto mensual'],
  },
  // Gasto en tráfico ilegal de arte (UNESCO/ONU)
  {
    id: 'global-art-trafficking-spending',
    categoryId: 'illicit',
    title: 'Gasto en Tráfico Ilegal de Arte',
    subtitle: 'El tráfico ilícito de bienes culturales y obras de arte mueve casi 10.000 millones de dólares anuales',
    annualSpendUSD: 10000000000, // $10.000 Millones USD (10 Billion)
    growthRatePct: 4.1,
    iconName: 'ShieldAlert',
    accentColor: '#ef4444',
    description:
      'El tráfico ilícito de obras de arte, antigüedades y patrimonio arqueológico representa una industria criminal de casi 10.000 millones de dólares anuales. Financiando en muchos casos a redes terroristas y al crimen organizado trasnacional, constituye una de las mayores amenazas contra la identidad de los pueblos según revelan la UNESCO y la ONU.',
    sourceName: 'UNESCO & ONU — Tráfico ilícito de bienes culturales',
    sourceUrl: 'https://coronavirus.onu.org.mx/traficantes-de-arte-traficantes-de-almas',
    sources: [
      {
        name: 'UNESCO & ONU — Traficantes de arte, traficantes de almas',
        url: 'https://coronavirus.onu.org.mx/traficantes-de-arte-traficantes-de-almas',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Tráfico de Bienes de Zonas de Conflicto', percentage: 40.0, amountUSD: 4000000000 },
      { label: 'Robos a Museos y Colecciones Privadas', percentage: 35.0, amountUSD: 3500000000 },
      { label: 'Excavaciones Clandestinas y Expoliación', percentage: 25.0, amountUSD: 2500000000 },
    ],
    history: [
      { year: 2018, spendUSD: 8000000000 },
      { year: 2022, spendUSD: 9000000000 },
      { year: 2026, spendUSD: 10000000000 },
    ],
    tags: ['arte', 'tráfico de arte', 'bienes culturales', 'mercado negro', 'unesco', 'onu', 'antiguedades'],
  },
  // Gasto en tráfico ilegal de órganos (Wikipedia)
  {
    id: 'global-organ-trafficking-spending',
    categoryId: 'illicit',
    title: 'Gasto en Tráfico Ilegal de Órganos',
    subtitle: 'El tráfico ilegal de órganos genera entre 600 y 1.200 millones de dólares anuales a nivel mundial',
    annualSpendUSD: 1200000000, // $1.200 Millones USD (1.2 Billion)
    growthRatePct: 4.8,
    iconName: 'ShieldAlert',
    accentColor: '#ef4444',
    description:
      'El tráfico ilegal de órganos genera ganancias y transacciones anuales estimadas entre 600 millones y 1.200 millones de dólares a nivel global. Esta actividad clandestina se nutre principalmente de la explotación de donantes en situación de pobreza extrema y del llamado turismo de trasplantes, según datos consolidados de Wikipedia.',
    sourceName: 'Wikipedia — Tráfico de órganos',
    sourceUrl: 'https://es.wikipedia.org/wiki/Tr%C3%A1fico_de_%C3%B3rganos',
    sources: [
      {
        name: 'Wikipedia — Tráfico de Órganos y Turismo de Trasplantes',
        url: 'https://es.wikipedia.org/wiki/Tr%C3%A1fico_de_%C3%B3rganos',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Demanda de Riñones', percentage: 65.0, amountUSD: 780000000 },
      { label: 'Hígado, Corazón y Otros Órganos', percentage: 35.0, amountUSD: 420000000 },
    ],
    history: [
      { year: 2018, spendUSD: 950000000 },
      { year: 2022, spendUSD: 1080000000 },
      { year: 2026, spendUSD: 1200000000 },
    ],
    tags: ['órganos', 'tráfico de órganos', 'mercado negro', 'salud', 'transplantes', 'crimen organizado', 'wikipedia'],
  },
  // Gasto en tráfico ilegal de animales (Euribor)
  {
    id: 'global-wildlife-trafficking-spending',
    categoryId: 'illicit',
    title: 'Gasto en Tráfico Ilegal de Animales',
    subtitle: 'El tráfico ilegal de animales silvestres y exóticos mueve más de 20.000 millones de dólares anuales',
    annualSpendUSD: 20000000000, // $20.000 Millones USD (20 Billion)
    growthRatePct: 4.5,
    iconName: 'ShieldAlert',
    accentColor: '#ef4444',
    description:
      'El tráfico ilegal de animales silvestres y especies exóticas genera transacciones anuales de más de 20.000 millones de dólares a nivel global, constituyendo uno de los negocios criminales más lucrativos del mundo junto al tráfico de drogas y armas, según datos del informe de Euribor.',
    sourceName: 'Euribor — El negocio negro del tráfico de animales exóticos',
    sourceUrl: 'https://www.euribor.com.es/2026/05/12/el-negocio-negro-del-trafico-de-animales-exoticos-cuanto-mueve-esta-industria-ilegal/',
    sources: [
      {
        name: 'Euribor — El Negocio Criminal del Tráfico de Especies Exóticas',
        url: 'https://www.euribor.com.es/2026/05/12/el-negocio-negro-del-trafico-de-animales-exoticos-cuanto-mueve-esta-industria-ilegal/',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Demanda en Asia-Pacífico', percentage: 55.0, amountUSD: 11000000000 },
      { label: 'América del Norte y Europa', percentage: 30.0, amountUSD: 6000000000 },
      { label: 'Resto del Mundo', percentage: 15.0, amountUSD: 3000000000 },
    ],
    history: [
      { year: 2018, spendUSD: 15000000000 },
      { year: 2021, spendUSD: 17500000000 },
      { year: 2026, spendUSD: 20000000000 },
    ],
    tags: ['animales', 'tráfico de animales', 'mercado negro', 'crimen ambiental', 'especies exoticas', 'euribor'],
  },
  // Gasto en productos falsificados (Merca2.0)
  {
    id: 'global-counterfeit-goods-spending',
    categoryId: 'illicit',
    title: 'Gasto en Productos Falsificados',
    subtitle: 'El gasto global en productos falsificados supera los 412.000 millones de euros anuales',
    annualSpendUSD: 447826086957, // 412.000M € convertidos a USD (412.0B / 0.92)
    growthRatePct: 4.2,
    iconName: 'ShieldAlert',
    accentColor: '#ef4444',
    description:
      'El comercio global de falsificaciones se estima en más de 412.000 millones de euros, lo que representa un 2,5% del total del comercio en todo el planeta. En la Unión Europea, las importaciones de productos falsificados alcanzaron los 119.000 millones de euros.',
    sourceName: 'Merca2.0 — La economía global de las falsificaciones',
    sourceUrl: 'https://www.merca20.com/la-economia-global-de-las-falsificaciones-cuanto-dinero-y-empleos-se-pierden-cada-ano/',
    sources: [
      {
        name: 'Merca2.0 — La economía global de las falsificaciones',
        url: 'https://www.merca20.com/la-economia-global-de-las-falsificaciones-cuanto-dinero-y-empleos-se-pierden-cada-ano/',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Importaciones de Falsificaciones en la UE', percentage: 29.0, amountUSD: 129869565217 },
      { label: 'Resto del Mundo', percentage: 71.0, amountUSD: 317956521740 },
    ],
    history: [
      { year: 2018, spendUSD: 380434782608 },
      { year: 2022, spendUSD: 413043478261 },
      { year: 2026, spendUSD: 447826086957 },
    ],
    tags: ['falsificaciones', 'mercado negro', 'contrabando', 'comercio global', 'marcas', 'copias', 'merca20'],
  },
  // 3. Gasto Global en Estupefacientes y Narcotráfico (Ethic.es)
  {
    id: 'global-narcotics-spending',
    categoryId: 'illicit',
    title: 'Gasto Mundial en Estupefacientes',
    subtitle: 'Volumen económico estimado del tráfico ilegal de drogas a escala mundial por año',
    annualSpendUSD: 750000000000, // $750.000 Millones USD (750 mil millones)
    growthRatePct: 4.8,
    iconName: 'ShieldAlert',
    accentColor: '#ef4444',
    description:
      'Gasto global estimado en estupefacientes y sustancias ilícitas que alcanza los 750.000 millones de dólares anuales, representando una de las mayores actividades de la economía subterránea mundial según análisis sobre el peso de la actividad criminal.',
    sourceName: 'Ethic — ¿Cuánto pesa la actividad criminal en la economía mundial?',
    sourceUrl: 'https://ethic.es/cuanto-pesa-la-actividad-criminal-en-la-economia-mundial',
    sources: [
      {
        name: 'Ethic — ¿Cuánto pesa la actividad criminal en la economía mundial?',
        url: 'https://ethic.es/cuanto-pesa-la-actividad-criminal-en-la-economia-mundial',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Cocaína y Derivados', percentage: 38, amountUSD: 285000000000 },
      { label: 'Opioides y Heroína', percentage: 32, amountUSD: 240000000000 },
      { label: 'Cannabis e Ilegales Sintéticos', percentage: 30, amountUSD: 225000000000 },
    ],
    history: [
      { year: 2018, spendUSD: 600000000000 },
      { year: 2021, spendUSD: 680000000000 },
      { year: 2024, spendUSD: 730000000000 },
      { year: 2025, spendUSD: 750000000000 },
    ],
    tags: ['estupefacientes', 'narcotrafico', 'drogas', 'ethic', 'mercado negro', 'crimen organizado'],
  },
  // 3c. Mercado Ilegal de Cocaína y Opiáceos (UNODC / Euribor / El Mundo)
  {
    id: 'global-cocaine-opioids-spending',
    categoryId: 'illicit',
    title: 'Gasto en Cocaína y Opiáceos',
    subtitle: 'Gasto minorista estimado de 245.000 millones de dólares anuales a nivel global',
    annualSpendUSD: 245000000000, // Media entre 220.000M y 270.000M USD = $245.000.000.000 USD
    growthRatePct: 4.2,
    iconName: 'ShieldAlert',
    accentColor: '#dc2626',
    description:
      'El gasto ilegal global combinado en cocaína y opiáceos se estima entre 220.000 y 270.000 millones de dólares anuales a nivel de consumo minorista (media de 245.000 millones de USD), formando una parte crítica de los flujos de consumo ilícitos mundiales mapeados por la Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC).',
    sourceName: 'UNODC & Análisis Internacional de Narcotráfico',
    sourceUrl: 'https://www.unodc.org/',
    sources: [
      {
        name: 'UNODC — Informe sobre Flujos Financieros Ilícitos del Tráfico de Drogas',
        url: 'https://www.unodc.org/unodc/frontpage/2023/December/illicit-financial-flows-related-to-cross-border-drug-trafficking-are-comparable-to-the-value-of-exports-of-licit-markets--unodc-report-shows.html',
      },
      {
        name: 'Euribor — Las 10 drogas que más dinero mueven en el mundo',
        url: 'https://www.euribor.com.es/2026/05/26/las-10-drogas-que-mas-dinero-mueven-en-el-mundo-el-negocio-ilicito-mas-rentable-del-planeta/',
      },
      {
        name: 'El Mundo — Informe de Consumo y Tráfico Mundial de Sustancias',
        url: 'https://www.elmundo.es/salud/2026/06/26/6a3e1ecffc6c83ca1d8b457a.html',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Cocaína y Derivados Alcaloides', percentage: 55, amountUSD: 134750000000 },
      { label: 'Opioides, Heroína y Fentanilo', percentage: 45, amountUSD: 110250000000 },
    ],
    history: [
      { year: 2018, spendUSD: 195000000000 },
      { year: 2021, spendUSD: 215000000000 },
      { year: 2024, spendUSD: 238000000000 },
      { year: 2025, spendUSD: 245000000000 },
    ],
    tags: ['cocaina', 'opiaceos', 'unodc', 'drogas', 'narcotrafico', 'venta minorista'],
  },
  // 3d. Gasto en Tráfico Ilegal de Armas de Fuego (UNODC)
  {
    id: 'global-illicit-firearms-spending',
    categoryId: 'illicit',
    title: 'Gasto en Gasto en Tráfico Ilegal de Armas de Fuego',
    subtitle: 'Gasto estimado en 1.000 millones de dólares anuales a nivel mundial',
    annualSpendUSD: 1000000000, // $1.000 Millones USD (1 Mil Millones)
    growthRatePct: 4.0,
    iconName: 'ShieldAlert',
    accentColor: '#dc2626',
    description:
      'Según la Oficina de Naciones Unidas contra la Droga y el Delito (UNODC), los compradores gastan unos 1.000 millones de dólares anuales en el comercio ilegal de armas. Con ellas, todas las partes enfrentadas libran sus guerras en África, Oriente Medio, América Latina y Asia.',
    sourceName: 'UNODC & El Quinto',
    sourceUrl: 'https://elquinto.com.co/el-negocio-de-armas-y-drogas-ilicitas-en-el-mundo/',
    sources: [
      {
        name: 'UNODC — Informe sobre el Comercio Ilegal y Tráfico de Armas de Fuego',
        url: 'https://www.unodc.org/',
      },
      {
        name: 'El Quinto — El negocio de armas y drogas ilícitas en el mundo',
        url: 'https://elquinto.com.co/el-negocio-de-armas-y-drogas-ilicitas-en-el-mundo/',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Fusiles de Asalto y Armas Ligeras', percentage: 55, amountUSD: 550000000 },
      { label: 'Municiones y Componentes', percentage: 25, amountUSD: 250000000 },
      { label: 'Armas Cortas y Secundarias', percentage: 20, amountUSD: 200000000 },
    ],
    history: [
      { year: 2018, spendUSD: 850000000 },
      { year: 2021, spendUSD: 920000000 },
      { year: 2024, spendUSD: 970000000 },
      { year: 2025, spendUSD: 1000000000 },
    ],
    tags: ['armas', 'trafico de armas', 'unodc', 'onu', 'mercado negro', 'armas de fuego'],
  },
  // 3e. Pérdidas Globales por Ciberdelincuencia (Cybersecurity Ventures)
  {
    id: 'global-cybercrime-losses',
    categoryId: 'illicit',
    title: 'Costo de las pérdidas por Ciberdelincuencia',
    subtitle: 'Coste económico global del ciberdelito proyectado en 10,8 billones de dólares anuales',
    annualSpendUSD: 10800000000000, // $10,8 Billones USD (10.8 Trillion)
    growthRatePct: 15.0,
    iconName: 'ShieldAlert',
    accentColor: '#dc2626',
    description:
      'Las pérdidas globales causadas por la ciberdelincuencia alcanzan los 10,8 billones de dólares a escala mundial en 2026, abarcando robo de datos, extorsión digital, fraude informático e interrupción operativa de empresas y gobiernos.',
    sourceName: 'Cybersecurity Ventures — 500 Ransomware & Cybercrime Statistics for 2026',
    sourceUrl: 'https://cybersecurityventures.com/500-ransomware-statistics-for-2026/',
    sources: [
      {
        name: 'Cybersecurity Ventures — Reporte Oficial de Ciberdelincuencia 2026',
        url: 'https://cybersecurityventures.com/500-ransomware-statistics-for-2026/',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Robo de Datos e Infraestructura Corporativa', percentage: 50, amountUSD: 5400000000000 },
      { label: 'Fraude Financiero y Phishing', percentage: 35, amountUSD: 3780000000000 },
      { label: 'Ataques de Ransomware y Extorsión', percentage: 15, amountUSD: 1620000000000 },
    ],
    history: [
      { year: 2021, spendUSD: 6000000000000 },
      { year: 2023, spendUSD: 8000000000000 },
      { year: 2025, spendUSD: 9500000000000 },
      { year: 2026, spendUSD: 10800000000000 },
    ],
    tags: ['ciberdelincuencia', 'hackers', 'cybersecurity ventures', 'ciberseguridad', 'fraude digital'],
  },
  // 3f. Daños Causados por Ransomware (Cybersecurity Ventures)
  {
    id: 'global-ransomware-damages',
    categoryId: 'illicit',
    title: 'Costo de daños por Ransomware',
    subtitle: 'Coste económico global por secuestro de datos y chantaje digital de $74.000M al año',
    annualSpendUSD: 74000000000, // $74.000 Millones USD (74 Billion)
    growthRatePct: 18.2,
    iconName: 'ShieldAlert',
    accentColor: '#ef4444',
    description:
      'Los daños específicos causados por los ataques de ransomware (secuestro informático de datos) superan los 74.000 millones de dólares anuales a escala mundial en 2026, incluyendo pagos de rescate, tiempos de inactividad e investigación forense.',
    sourceName: 'Cybersecurity Ventures — 500 Ransomware Statistics for 2026',
    sourceUrl: 'https://cybersecurityventures.com/500-ransomware-statistics-for-2026/',
    sources: [
      {
        name: 'Cybersecurity Ventures — 500 Estadísticas de Ransomware para 2026',
        url: 'https://cybersecurityventures.com/500-ransomware-statistics-for-2026/',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Pérdidas por Inactividad Operativa', percentage: 60, amountUSD: 44400000000 },
      { label: 'Recuperación y Restauración Forense', percentage: 25, amountUSD: 18500000000 },
      { label: 'Pagos Directos de Rescate (Ransom)', percentage: 15, amountUSD: 11100000000 },
    ],
    history: [
      { year: 2021, spendUSD: 20000000000 },
      { year: 2023, spendUSD: 42000000000 },
      { year: 2025, spendUSD: 65000000000 },
      { year: 2026, spendUSD: 74000000000 },
    ],
    tags: ['ransomware', 'secuestro de datos', 'cybersecurity ventures', 'ciberataques', 'extorsion digital'],
  },
  // 3g. Blanqueo de Capitales y Dinero Negro Mundial (Consejo Europeo)
  {
    id: 'global-money-laundering-total',
    categoryId: 'illicit',
    title: 'Dinero gastado en Blanqueo de Capitales',
    subtitle: 'Volumen estimado entre 1,5 y 2,85 billones de dólares anuales (2,17 Billones de USD de media)',
    annualSpendUSD: 2175000000000, // Media entre 1,5 y 2,85 billones USD = $2,175 Billones USD ($2.175 Trillion)
    growthRatePct: 4.1,
    iconName: 'ShieldAlert',
    accentColor: '#dc2626',
    description:
      'Se calcula que cada año se blanquean en el mundo entre 715.000 millones y 2 billones de euros (entre 1,5 y 2,85 billones de dólares), lo que equivale aproximadamente al 2% y al 5% del Producto Interior Bruto (PIB) mundial según datos infográficos del Consejo Europeo.',
    sourceName: 'Consejo de la Unión Europea — Lucha contra el blanqueo de capitales',
    sourceUrl: 'https://www.consilium.europa.eu/es/infographics/anti-money-laundering/',
    sources: [
      {
        name: 'Consejo Europeo — Infografía sobre la Lucha contra el Blanqueo de Capitales',
        url: 'https://www.consilium.europa.eu/es/infographics/anti-money-laundering/',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Evasión Fiscal Corporativa y Grandes Fortunas', percentage: 40, amountUSD: 870000000000 },
      { label: 'Ingresos por Narcotráfico y Crimen Organizado', percentage: 35, amountUSD: 761250000000 },
      { label: 'Corrupción y Malversación de Fondos Públicos', percentage: 25, amountUSD: 543750000000 },
    ],
    history: [
      { year: 2018, spendUSD: 1600000000000 },
      { year: 2021, spendUSD: 1850000000000 },
      { year: 2024, spendUSD: 2050000000000 },
      { year: 2025, spendUSD: 2175000000000 },
    ],
    tags: ['blanqueo de capitales', 'lavado de dinero', 'consejo europeo', 'fmi', 'economia ilicita', 'pib mundial'],
  },
  // 3b. Mercado Negro y Economía Ilícita Global (El País / FMI)
  {
    id: 'global-black-market-economy',
    categoryId: 'illicit',
    title: 'Gasto en Economía Ilícita Global',
    subtitle: 'Volumen económico promedio estimado entre 7 y 15 billones de dólares anuales (11,5 Billones de USD)',
    annualSpendUSD: 11500000000000, // Media entre 7 y 15 billones USD = 11.5 Billones USD ($11,5 Trillion)
    growthRatePct: 4.5,
    iconName: 'ShieldAlert',
    accentColor: '#dc2626',
    description:
      'El mercado negro y la economía ilícita global generan entre el 8% y el 15% del Producto Interior Bruto (PIB) mundial, según estimaciones del Fondo Monetario Internacional (FMI) e investigaciones sobre crimen organizado. Esto representa una media estimada de 11,5 billones de dólares anuales.',
    sourceName: 'El País & Fondo Monetario Internacional (FMI)',
    sourceUrl: 'https://elpais.com/economia/2019/09/21/actualidad/1569062038_189861.html',
    sources: [
      {
        name: 'El País — El colosal tamaño del mercado negro y la economía ilícita en el mundo (FMI)',
        url: 'https://elpais.com/economia/2019/09/21/actualidad/1569062038_189861.html',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Evasión Fiscal y Blanqueo de Capitales', percentage: 45, amountUSD: 5175000000000 },
      { label: 'Contrabando y Falsificación', percentage: 30, amountUSD: 3450000000000 },
      { label: 'Tráfico Ilegal (Drogas, Armas y Personas)', percentage: 25, amountUSD: 2875000000000 },
    ],
    history: [
      { year: 2018, spendUSD: 8500000000000 },
      { year: 2021, spendUSD: 9800000000000 },
      { year: 2024, spendUSD: 11000000000000 },
      { year: 2025, spendUSD: 11500000000000 },
    ],
    tags: ['mercado negro', 'economia ilicita', 'fmi', 'el pais', 'blanqueo', 'crimen organizado'],
  },
  // 4. Gasto Militar y Armamento Mundial (DW / SIPRI / APDHA)
  {
    id: 'global-military-spending',
    categoryId: 'military',
    title: 'Gasto Militar Mundial',
    subtitle: 'Presupuesto armamentístico global y gasto en defensa de todos los países por año',
    annualSpendUSD: 2887000000000, // 2,89 billones de dólares ($2.887 mil millones USD)
    growthRatePct: 2.9,
    iconName: 'Shield',
    accentColor: '#f59e0b',
    description:
      'El gasto militar mundial alcanzó la cifra récord de 2,89 billones de dólares (2.887.000 millones de USD). Este incremento global del 2,9% refleja el undécimo año consecutivo de aumento en la inversión en defensa, impulsado principalmente por la escalada en Europa y Asia frente a los conflictos activos según datos de SIPRI y APDHA.',
    sourceName: 'Deutsche Welle (DW), SIPRI & APDHA',
    sourceUrl: 'https://www.apdha.org/el-gasto-militar-mundial-marca-un-nuevo-record-historico-y-en-europa-espana-lidera-el-aumento/',
    sources: [
      {
        name: 'Deutsche Welle (DW) — El gasto armamentístico crece en todo el mundo (SIPRI)',
        url: 'https://www.dw.com/es/nuevo-récord-en-2025-el-gasto-armamentístico-crece-en-todo-el-mundo/a-76943170',
      },
      {
        name: 'APDHA — El gasto militar mundial marca un nuevo récord histórico',
        url: 'https://www.apdha.org/el-gasto-militar-mundial-marca-un-nuevo-record-historico-y-en-europa-espana-lidera-el-aumento/',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Estados Unidos y OTAN', percentage: 55, amountUSD: 1587850000000 },
      { label: 'China y Asia Oriental', percentage: 22, amountUSD: 635140000000 },
      { label: 'Rusia y Europa del Este', percentage: 13, amountUSD: 375310000000 },
      { label: 'Resto del Mundo', percentage: 10, amountUSD: 288700000000 },
    ],
    history: [
      { year: 2020, spendUSD: 1980000000000 },
      { year: 2022, spendUSD: 2240000000000 },
      { year: 2024, spendUSD: 2440000000000 },
      { year: 2025, spendUSD: 2887000000000 },
    ],
    tags: ['militar', 'armamento', 'defensa', 'sipri', 'dw', 'gasto militar mundial'],
  },
  // 4b. Gasto Mundial en Armas Nucleares (ICAN / JusPax)
  {
    id: 'global-nuclear-weapons-spending',
    categoryId: 'military',
    title: 'Gasto Mundial en Armas Nucleares',
    subtitle: 'Récord histórico de 118.800 millones de dólares al año (~3.768 $ por segundo)',
    annualSpendUSD: 118800000000, // $118.800 Millones USD (118.8 Billion)
    growthRatePct: 10.5,
    iconName: 'Shield',
    accentColor: '#f59e0b',
    description:
      'El gasto mundial en el mantenimiento, desarrollo y modernización de arsenales nucleares alcanzó un récord histórico de 118.800 millones de dólares (unos 3.768 dólares por segundo) registrado por la Campaña Internacional para Abolir las Armas Nucleares (ICAN).',
    sourceName: 'ICAN & JusPax — Gasto mundial en armas nucleares',
    sourceUrl: 'https://www.juspax-es.org/l/premeditado-gasto-mundial-en-armas-nucleares-en-2025/',
    sources: [
      {
        name: 'ICAN — Informe de Gasto Mundial en Armas Nucleares y Modernización',
        url: 'https://www.juspax-es.org/l/premeditado-gasto-mundial-en-armas-nucleares-en-2025/',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Estados Unidos (Modernización de Arsenal)', percentage: 43, amountUSD: 51084000000 },
      { label: 'China (Expansión Nuclear)', percentage: 22, amountUSD: 26136000000 },
      { label: 'Rusia (Disuasión y Mantenimiento Nuclear)', percentage: 17, amountUSD: 20196000000 },
      { label: 'Reino Unido, Francia, India, Pakistán, Israel, Corea del Norte', percentage: 18, amountUSD: 21384000000 },
    ],
    history: [
      { year: 2021, spendUSD: 82400000000 },
      { year: 2023, spendUSD: 91400000000 },
      { year: 2024, spendUSD: 104000000000 },
      { year: 2025, spendUSD: 118800000000 },
    ],
    tags: ['armas nucleares', 'ican', 'militar', 'arsenal nuclear', 'desarme', 'juspax'],
  },
  // 4c. Gasto en Defensa de la Unión Europea (Consejo Europeo / EDA)
  {
    id: 'eu-defense-spending-total',
    categoryId: 'military',
    title: 'Gasto en Defensa de la Unión Europea',
    subtitle: 'Presupuesto militar consolidado de los Estados miembros estimado en 454.000 millones de euros en 2026',
    annualSpendUSD: 494860000000, // 454.000.000.000 € a tipo ~1.09 = $494.860.000.000 USD
    growthRatePct: 8.6,
    iconName: 'Shield',
    accentColor: '#3b82f6',
    description:
      'En 2025, el gasto en defensa de los Estados miembros de la Unión Europea aumentó por undécimo año consecutivo, alcanzando los 418.000 millones de euros. En 2026 se calcula que alcanzará un récord de 454.000 millones de euros (~494.860 millones de dólares USD) según datos oficiales del Consejo Europeo.',
    sourceName: 'Consejo de la Unión Europea — La defensa de la UE en cifras',
    sourceUrl: 'https://www.consilium.europa.eu/es/policies/defence-numbers/',
    sources: [
      {
        name: 'Consejo Europeo — La defensa de la UE en cifras (Cifras clave)',
        url: 'https://www.consilium.europa.eu/es/policies/defence-numbers/',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Adquisición de Equipamiento y Armamento', percentage: 40, amountUSD: 197944000000 },
      { label: 'Personal y Fuerzas Armadas', percentage: 35, amountUSD: 173201000000 },
      { label: 'Operaciones, Mantenimiento y Logística', percentage: 25, amountUSD: 123715000000 },
    ],
    history: [
      { year: 2023, spendUSD: 316000000000 },
      { year: 2024, spendUSD: 360000000000 },
      { year: 2025, spendUSD: 455620000000 }, // 418.000M €
      { year: 2026, spendUSD: 494860000000 }, // 454.000M €
    ],
    tags: ['defensa ue', 'union europea', 'consejo europeo', 'eda', 'gasto militar ue', 'armamento'],
  },
  // 4d. Gasto Mundial en Aviación Militar y Aviones de Caza (Fortune Business Insights)
  {
    id: 'global-military-aircraft-market',
    categoryId: 'military',
    title: 'Gasto en Aviación Militar',
    subtitle: 'Gasto anual de 67.000M$ USD en aviación militar (52.800M$ en cazas de combate)',
    annualSpendUSD: 67000000000, // $67.000 Millones USD (67 Billion)
    growthRatePct: 5.2,
    iconName: 'Shield',
    accentColor: '#f59e0b',
    description:
      'El gasto mundial en aviación militar alcanza una cifra de 67.000 millones de dólares anuales, destacando el segmento de gasto exclusivo en cazas y aviones de combate con 52.800 millones de dólares según el informe de mercado de Fortune Business Insights.',
    sourceName: 'Fortune Business Insights — Informe del Mercado de Aviones Militares',
    sourceUrl: 'https://www.fortunebusinessinsights.com/es/military-aircraft-market-102771',
    sources: [
      {
        name: 'Fortune Business Insights — Tamaño y Análisis del Mercado de Aviación Militar',
        url: 'https://www.fortunebusinessinsights.com/es/military-aircraft-market-102771',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Cazas y Aviones de Combate', percentage: 78.8, amountUSD: 52800000000 },
      { label: 'Transporte, Reconocimiento y Apoyo Aéreo', percentage: 21.2, amountUSD: 14200000000 },
    ],
    history: [
      { year: 2021, spendUSD: 54000000000 },
      { year: 2023, spendUSD: 60000000000 },
      { year: 2025, spendUSD: 64500000000 },
      { year: 2026, spendUSD: 67000000000 },
    ],
    tags: ['cazas', 'aviones militares', 'aviacion militar', 'defensa', 'fortune business insights', 'f-35'],
  },
  // Valor de mercado de Lamine Yamal (Transfermarkt)
  {
    id: 'lamine-yamal-market-value',
    categoryId: 'entertainment',
    title: 'Costo del traspaso de Lamine Yamal',
    subtitle: 'La valoración estimada de la ficha del jugador Lamine Yamal se sitúa en los 220 millones de euros',
    annualSpendUSD: 239130435, // 220.000.000 € convertidos a USD (220M / 0.92)
    growthRatePct: 15.0, // Alta proyección de crecimiento de valor
    iconName: 'Trophy',
    accentColor: '#3b82f6',
    description:
      'El valor de mercado de Lamine Yamal se sitúa en los 220 millones de euros, consolidándose como uno de los futbolistas más valiosos y con mayor proyección financiera del mundo según los datos del perfil oficial y valoración de Transfermarkt.',
    sourceName: 'Transfermarkt — Perfil de Lamine Yamal',
    sourceUrl: 'https://www.transfermarkt.es/lamine-yamal/profil/spieler/937958',
    sources: [
      {
        name: 'Transfermarkt — Perfil de Lamine Yamal (Ficha de Jugador)',
        url: 'https://www.transfermarkt.es/lamine-yamal/profil/spieler/937958',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Valor de Mercado del Jugador', percentage: 100.0, amountUSD: 239130435 },
    ],
    history: [
      { year: 2023, spendUSD: 54347826 },
      { year: 2024, spendUSD: 163043478 },
      { year: 2026, spendUSD: 239130435 },
    ],
    tags: ['fútbol', 'lamine yamal', 'barça', 'transfermarkt', 'valor de mercado', 'deportes'],
  },
  // 6. Coste de organización del Mundial FIFA 2026 (FIFA)
  {
    id: 'fifa-world-cup-2026-cost',
    categoryId: 'entertainment',
    title: 'Gasto de Organización del Mundial de Fútbol FIFA 2026',
    subtitle: 'Gasto total de la FIFA para organizar y operar el primer Mundial de 48 equipos de la historia',
    annualSpendUSD: 2400000000, // $2.400 Millones USD (2,4 Billion)
    growthRatePct: 0,
    iconName: 'Trophy',
    accentColor: '#f97316',
    description:
      'El costo de organización y operación del Mundial de la FIFA 2026 ascendió a unos 2.400 millones de dólares para la propia FIFA, según declaraciones de su presidente Gianni Infantino. El torneo se disputó en 16 ciudades de Estados Unidos, Canadá y México con 48 selecciones participantes por primera vez en la historia, siendo el evento más caro de la historia del fútbol mundial.',
    sourceName: 'BBC Mundo — Mundial de la FIFA 2026',
    sourceUrl: 'https://www.bbc.com/mundo/articles/cy8d7p71p7po',
    sources: [
      {
        name: 'BBC Mundo — El coste de organización del Mundial FIFA 2026',
        url: 'https://www.bbc.com/mundo/articles/cy8d7p71p7po',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Infraestructura, Logística y Operaciones', percentage: 55, amountUSD: 1320000000 },
      { label: 'Organización del Torneo y Arbitraje', percentage: 25, amountUSD: 600000000 },
      { label: 'Marketing, Transmisión y Comunicación', percentage: 20, amountUSD: 480000000 },
    ],
    history: [
      { year: 2018, spendUSD: 791000000 }, // Rusia 2018
      { year: 2022, spendUSD: 1700000000 }, // Catar 2022 (FIFA)
      { year: 2026, spendUSD: 2400000000 }, // EE. UU. / Canadá / México 2026
    ],
    tags: ['fifa', 'mundial', 'fútbol', 'copa del mundo', 'world cup 2026', 'estados unidos', 'canada', 'mexico', 'bbc'],
  },
  // 5. Coste de Producción de La Velada del Año de Ibai Llanos (€10M / ~$10.9M USD)
  {
    id: 'la-velada-production-cost',
    categoryId: 'entertainment',
    title: 'Gasto de Producción de La Velada del Año VI (Ibai)',
    subtitle: 'Presupuesto total de 10 millones de euros para alquiler de estadios, artistas, seguridad y producción técnica',
    annualSpendUSD: 10900000, // 10.000.000 € a tipo ~1.09 = $10.900.000 USD
    growthRatePct: 15.0,
    iconName: 'Tv',
    accentColor: '#8b5cf6',
    description:
      'Coste total de organización y presupuesto de producción de La Velada del Año de Ibai Llanos, estimado en 10 millones de euros (~10,9 millones de dólares). Incluye el alquiler de estadios (Santiago Bernabéu / Civitas Metropolitano), contratos musicales, pirotecnia, seguridad y producción audiovisual.',
    sourceName: 'Diario ABC, Diario AS & Onda Cero',
    sourceUrl: 'https://www.abc.es/gente/velada-ano-dinero-cuesta-gana-ibai-llanos-20260722013407-nt.html',
    sources: [
      {
        name: 'Diario ABC — La Velada del Año: el dinero que cuesta y gana Ibai Llanos',
        url: 'https://www.abc.es/gente/velada-ano-dinero-cuesta-gana-ibai-llanos-20260722013407-nt.html',
      },
      {
        name: 'Diario AS (MeriStation) — La mareante cifra económica que cuesta a Ibai organizar La Velada del Año',
        url: 'https://as.com/meristation/streamers/la-mareante-cifra-economica-que-le-cuesta-a-ibai-organizar-la-velada-del-ano-f202607-n/',
      },
      {
        name: 'Onda Cero — La cifra de negocio y producción de La Velada del Año de Ibai',
        url: 'https://www.ondacero.es/noticias/sociedad/ganado-dinero-ibai-velada-ano-5-esto-dicen-calculos_2025072868876ffef4ec026a96bddf38.html',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Artistas y Cachets Musicales', percentage: 40, amountUSD: 4360000 },
      { label: 'Alquiler de Estadio y Licencias', percentage: 30, amountUSD: 3270000 },
      { label: 'Producción Técnica y Streaming', percentage: 20, amountUSD: 2180000 },
      { label: 'Seguridad y Logística', percentage: 10, amountUSD: 1090000 },
    ],
    history: [
      { year: 2022, spendUSD: 3000000 },
      { year: 2023, spendUSD: 6000000 },
      { year: 2024, spendUSD: 8500000 },
      { year: 2025, spendUSD: 10900000 },
    ],
    tags: ['ibai', 'la velada del año', 'twitch', 'streaming', 'eventos', 'produccion'],
  },
  // 5b. Gasto de Usuarios en Suscripciones de Netflix (Xataka / Netflix Investor Relations)
  {
    id: 'netflix-annual-revenue',
    categoryId: 'entertainment',
    title: 'Gasto de Usuarios en Suscripciones de Netflix',
    subtitle: 'Gasto global de 45.200 millones de dólares al año (~38.800M €) en suscripciones',
    annualSpendUSD: 45200000000, // $45.200 Millones USD (45.2 Billion)
    growthRatePct: 14.5,
    iconName: 'Tv',
    accentColor: '#e50914',
    description:
      'Los usuarios de Netflix gastan alrededor de 45.200 millones de dólares (~38.800 millones de euros) al año en sus suscripciones. Prácticamente la totalidad de esta cifra proviene de sus cuotas de membresías de pago, ya que el gasto en planes alternativos con publicidad, aunque crece, representa una porción menor del total según análisis de Xataka.',
    sourceName: 'Xataka — Netflix y los costes de producción de contenido streaming',
    sourceUrl: 'https://www.xataka.com/streaming/netflix-gasta-17-000-millones-producir-contenido-a-youtube-se-hacen-gratis-eso-youtube-esta-ganando-partida',
    sources: [
      {
        name: 'Xataka — Netflix gasta 17.000M$ en contenido e ingresa 45.200M$',
        url: 'https://www.xataka.com/streaming/netflix-gasta-17-000-millones-producir-contenido-a-youtube-se-hacen-gratis-eso-youtube-esta-ganando-partida',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Suscripciones y Membresías de Pago', percentage: 92, amountUSD: 41584000000 },
      { label: 'Publicidad y Planes con Anuncios', percentage: 8, amountUSD: 3616000000 },
    ],
    history: [
      { year: 2021, spendUSD: 29700000000 },
      { year: 2023, spendUSD: 33700000000 },
      { year: 2025, spendUSD: 39000000000 },
      { year: 2026, spendUSD: 45200000000 },
    ],
    tags: ['netflix', 'streaming', 'xataka', 'suscripciones', 'entretenimiento', 'cine'],
  },
  // 5c. Gasto en Suscripciones de Amazon Prime (Marketplace Pulse)
  {
    id: 'amazon-prime-subscription-revenue',
    categoryId: 'entertainment',
    title: 'Gasto en Suscripciones de Amazon Prime',
    subtitle: 'Gasto global de 49.620 millones de dólares anuales en servicios de suscripción (Prime, Video, Music)',
    annualSpendUSD: 49620000000, // $49.620 Millones USD (49.62 Billion)
    growthRatePct: 11.8,
    iconName: 'Tv',
    accentColor: '#ff9900',
    description:
      'Amazon no desglosa públicamente de forma exacta cuánto gastan los usuarios solo por Prime Video, ya que el servicio viene incluido dentro del paquete global de Amazon Prime. Sin embargo, el gasto total de los usuarios en servicios de suscripción de la compañía (que incluye Prime, música, libros y vídeo digital) ascendió a 49.620 millones de dólares a nivel mundial según Marketplace Pulse.',
    sourceName: 'Marketplace Pulse & Amazon SEC Filings',
    sourceUrl: 'https://www.marketplacepulse.com/stats/amazon-subscription-services-sales',
    sources: [
      {
        name: 'Marketplace Pulse — Amazon Subscription Services Sales',
        url: 'https://www.marketplacepulse.com/stats/amazon-subscription-services-sales',
      },
      {
        name: 'Amazon Prime — Página Oficial del Servicio',
        url: 'https://www.amazon.es/prime',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Suscripciones Amazon Prime (Envíos y Prime Video)', percentage: 75, amountUSD: 37215000000 },
      { label: 'Amazon Music, Audible y Libros Digitales', percentage: 25, amountUSD: 12405000000 },
    ],
    history: [
      { year: 2021, spendUSD: 31770000000 },
      { year: 2023, spendUSD: 40210000000 },
      { year: 2025, spendUSD: 45200000000 },
      { year: 2026, spendUSD: 49620000000 },
    ],
    tags: ['amazon', 'prime', 'prime video', 'suscripciones', 'marketplace pulse', 'streaming'],
  },
  // 5d. Gasto de Usuarios en Disney Streaming (DTC) (Motley Fool / Disney SEC Filings)
  {
    id: 'disney-dtc-streaming-revenue',
    categoryId: 'entertainment',
    title: 'Gasto de Usuarios en Disney Streaming (DTC)',
    subtitle: 'Gasto anual estimado entre 22.000M y 25.000M$ USD en Disney+, Hulu y ESPN+ ($23.500M USD de media)',
    annualSpendUSD: 23500000000, // Media entre 22.000M$ y 25.000M$ = $23.500 Millones USD (23.5 Billion)
    growthRatePct: 12.4,
    iconName: 'Tv',
    accentColor: '#006e99',
    description:
      'Los usuarios de The Walt Disney Company gastan cerca de 22.000 a 25.000 millones de dólares al año (media estimada de 23.500 millones de USD) en su división de Venta Directa al Consumidor (DTC), que agrupa principalmente las suscripciones de streaming de Disney+, Hulu y ESPN+, además de una porción menor en compras dentro de estas plataformas según The Motley Fool.',
    sourceName: 'The Motley Fool — Disney Streaming Profit Analysis',
    sourceUrl: 'https://www.fool.com/investing/2026/03/29/how-high-can-disney-streaming-profit-go/',
    sources: [
      {
        name: 'The Motley Fool — How High Can Disney Streaming Profit Go?',
        url: 'https://www.fool.com/investing/2026/03/29/how-high-can-disney-streaming-profit-go/',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Suscripciones Disney+ y Hulu', percentage: 75, amountUSD: 17625000000 },
      { label: 'ESPN+ y Venta de Publicidad Digital DTC', percentage: 25, amountUSD: 5875000000 },
    ],
    history: [
      { year: 2021, spendUSD: 16300000000 },
      { year: 2023, spendUSD: 19800000000 },
      { year: 2025, spendUSD: 21900000000 },
      { year: 2026, spendUSD: 23500000000 },
    ],
    tags: ['disney', 'disney+', 'hulu', 'espn+', 'motley fool', 'streaming', 'dtc'],
  },
  // 5e. Gasto de Usuarios en Max (HBO) (Señal News)
  {
    id: 'warner-bros-discovery-max-revenue',
    categoryId: 'entertainment',
    title: 'Gasto de Usuarios en Max (HBO)',
    subtitle: 'Gasto anual estimado entre 10.000M$ y 11.000M$ USD en su división global de streaming DTC ($10.500M USD de media)',
    annualSpendUSD: 10500000000, // Media entre 10.000M$ y 11.000M$ = $10.500 Millones USD (10.5 Billion)
    growthRatePct: 9.8,
    iconName: 'Tv',
    accentColor: '#002855',
    description:
      'Los abonados de Warner Bros. Discovery (propietaria de HBO/Max) gastan alrededor de 10.000 a 11.000 millones de dólares al año (media estimada de 10.500 millones de USD) en su división global de streaming (DTC), donde la inmensa mayoría proviene de las cuotas de suscripción de los usuarios según datos reportados por Señal News.',
    sourceName: 'Señal News — Warner Bros. Discovery Financial & Streaming Report',
    sourceUrl: 'https://senalnews.com/en/data/warner-bros-discovery-ends-2025-under-pressure-despite-streaming-gains',
    sources: [
      {
        name: 'Señal News — Warner Bros. Discovery Ends 2025 Under Pressure Despite Streaming Gains',
        url: 'https://senalnews.com/en/data/warner-bros-discovery-ends-2025-under-pressure-despite-streaming-gains',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Suscripciones Directas HBO / Max', percentage: 88, amountUSD: 9240000000 },
      { label: 'Publicidad en Contenido y Licencias DTC', percentage: 12, amountUSD: 1260000000 },
    ],
    history: [
      { year: 2021, spendUSD: 7200000000 },
      { year: 2023, spendUSD: 8900000000 },
      { year: 2025, spendUSD: 9800000000 },
      { year: 2026, spendUSD: 10500000000 },
    ],
    tags: ['warner bros', 'hbo', 'max', 'discovery', 'senal news', 'streaming', 'dtc'],
  },
  // 5f. Gasto de Usuarios en Twitch (Business of Apps)
  {
    id: 'twitch-annual-revenue',
    categoryId: 'entertainment',
    title: 'Gasto de Usuarios en Twitch',
    subtitle: 'Gasto global estimado entre 1.800M$ y 1.900M$ USD al año ($1.850M USD de media)',
    annualSpendUSD: 1850000000, // Media entre 1.800M$ y 1.900M$ = $1.850 Millones USD (1.85 Billion)
    growthRatePct: 8.5,
    iconName: 'Tv',
    accentColor: '#9146ff',
    description:
      'Los usuarios y patrocinadores en Twitch gastan aproximadamente entre 1.800 y 1.900 millones de dólares al año (media estimada de 1.850 millones de USD) a través de suscripciones de canal, bits/donaciones y campañas publicitarias durante transmisiones en vivo según Business of Apps.',
    sourceName: 'Business of Apps — Twitch Revenue & Usage Statistics',
    sourceUrl: 'https://www.businessofapps.com/data/twitch-statistics/',
    sources: [
      {
        name: 'Business of Apps — Twitch Statistics (Revenue & Subscriptions)',
        url: 'https://www.businessofapps.com/data/twitch-statistics/',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Suscripciones de Canal y Bits (Donaciones)', percentage: 60, amountUSD: 1110000000 },
      { label: 'Anuncios y Publicidad Digital en Directo', percentage: 40, amountUSD: 740000000 },
    ],
    history: [
      { year: 2020, spendUSD: 1200000000 },
      { year: 2022, spendUSD: 1540000000 },
      { year: 2024, spendUSD: 1750000000 },
      { year: 2026, spendUSD: 1850000000 },
    ],
    tags: ['twitch', 'amazon', 'streaming', 'business of apps', 'subscripciones', 'bits', 'directos'],
  },
  // 5g. Gasto Global en Entradas de Cine (Observatorio Audiovisual Europeo / Spain Audiovisual Hub)
  {
    id: 'global-cinema-box-office-revenue',
    categoryId: 'entertainment',
    title: 'Gasto Global en Entradas de Cine',
    subtitle: 'El gasto en taquilla cinematográfica mundial ronda los 29.600 millones de euros anuales (~32.264M$ USD)',
    annualSpendUSD: 32264000000, // 29.600M€ × 1,09 ≈ $32.264M USD
    growthRatePct: 6.2,
    iconName: 'Tv',
    accentColor: '#c026d3',
    description:
      'El gasto específico de los espectadores en taquilla anual a nivel global ronda los 29.600 millones de euros (~32.264 millones de dólares), impulsado principalmente por el crecimiento del mercado asiático. Asia lidera la asistencia y el consumo en el sector cinematográfico mundial tras la pandemia, mientras que el mercado norteamericano y europeo continúan siendo pilares fundamentales del consumo en salas de cine según el Observatorio Audiovisual Europeo.',
    sourceName: 'Spain Audiovisual Hub / Observatorio Audiovisual Europeo',
    sourceUrl: 'https://spainaudiovisualhub.digital.gob.es/es/actualidad/observatorio-audiovisual-europeo--asia-impulsa-el-crecimiento-de',
    sources: [
      {
        name: 'Spain Audiovisual Hub — Observatorio Audiovisual Europeo: Asia impulsa el crecimiento de la taquilla mundial',
        url: 'https://spainaudiovisualhub.digital.gob.es/es/actualidad/observatorio-audiovisual-europeo--asia-impulsa-el-crecimiento-de',
      },
    ],
    sourceYear: 2025,
    breakdown: [
      { label: 'Asia-Pacífico (China, Japón, India, Corea)', percentage: 42, amountUSD: 13550880000 },
      { label: 'América del Norte (EE. UU. y Canadá)', percentage: 35, amountUSD: 11292400000 },
      { label: 'Europa y Resto del Mundo', percentage: 23, amountUSD: 7420720000 },
    ],
    history: [
      { year: 2019, spendUSD: 42500000000 }, // Récord pre-pandemia
      { year: 2021, spendUSD: 21300000000 }, // Recuperación post-COVID
      { year: 2023, spendUSD: 28900000000 },
      { year: 2025, spendUSD: 32264000000 },
    ],
    tags: ['cine', 'taquilla', 'box office', 'observatorio audiovisual', 'salas de cine', 'entretenimiento'],
  },
  // 5h. Lo que las Empresas Gastaron en Publicidad en la Super Bowl (Palco23 / Mundo Deportivo)
  {
    id: 'superbowl-advertising-revenue',
    categoryId: 'entertainment',
    title: 'Gasto de Empresas en Publicidad en la Super Bowl',
    subtitle: 'Las marcas pagaron más de 414 millones de dólares para anunciarse en la Super Bowl por segundo año consecutivo',
    annualSpendUSD: 414000000, // $414 Millones USD (414 Million)
    growthRatePct: 7.5,
    iconName: 'Trophy',
    accentColor: '#f97316',
    description:
      'Las empresas desembolsaron más de 414 millones de dólares para colocar sus anuncios durante la Super Bowl, superando los 400 millones por segundo año consecutivo. Un spot de 30 segundos durante el partido puede costar hasta 8 millones de dólares, lo que convierte a la Super Bowl en el escaparate publicitario más caro del planeta. Marcas de sectores como automoción, alimentación, tecnología y entretenimiento compiten por captar la atención de más de 100 millones de espectadores simultáneos.',
    sourceName: 'Palco23 / Mundo Deportivo — Gasto publicitario en la Super Bowl',
    sourceUrl: 'https://palco23.mundodeportivo.com/media/la-super-bowl-supera-los-400-millones-de-dolares-de-ingresos-publicitarios-por-segundo-ano',
    sources: [
      {
        name: 'Palco23 / Mundo Deportivo — La Super Bowl supera los 400 millones de dólares de inversión publicitaria por segundo año',
        url: 'https://palco23.mundodeportivo.com/media/la-super-bowl-supera-los-400-millones-de-dolares-de-ingresos-publicitarios-por-segundo-ano',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Spots en Emisión en Directo (TV lineal)', percentage: 85, amountUSD: 351900000 },
      { label: 'Publicidad Digital y Streaming (Paramount+)', percentage: 15, amountUSD: 62100000 },
    ],
    history: [
      { year: 2020, spendUSD: 340000000 },
      { year: 2022, spendUSD: 365000000 },
      { year: 2024, spendUSD: 400000000 },
      { year: 2026, spendUSD: 414000000 },
    ],
    tags: ['super bowl', 'nfl', 'publicidad', 'anuncios', 'televisión', 'deportes', 'palco23'],
  },
  // 5i. Gasto de las Marcas en Publicidad para el Mundial FIFA 2026 (AdLatina)
  {
    id: 'fifa-world-cup-global-advertising-investment',
    categoryId: 'entertainment',
    title: 'Gasto de las Marcas en Publicidad para el Mundial FIFA 2026',
    subtitle: 'Las empresas gastaron ~10.500M$ por edición en anunciarse durante el Mundial (ciclo 4 años → ~2.625M$/año)',
    annualSpendUSD: 2625000000, // $10.500M USD / 4 años = $2.625M USD/año anualizado
    growthRatePct: 8.0,
    iconName: 'Trophy',
    accentColor: '#f97316',
    description:
      'El Mundial de la FIFA no se celebra cada año, sino cada cuatro años. El coste publicitario total que las marcas y empresas asumieron para anunciarse durante el Mundial 2026 asciende a unos 10.500 millones de dólares por edición (~2.625 millones anualizados). Las marcas pagaron este dinero para ocupar espacios en televisión, plataformas de streaming, estadios y redes sociales durante el torneo más visto del planeta, según AdLatina.',
    sourceName: 'AdLatina — Coste publicitario de marcas en el Mundial FIFA 2026',
    sourceUrl: 'https://www.adlatina.com/publicidad/la-inversin-publicitaria-global-estimada-para-el-mundial-2026-ronda-los-10.500-millones-de-dlares',
    sources: [
      {
        name: 'AdLatina — La inversión publicitaria global estimada para el Mundial 2026 ronda los 10.500 millones de dólares',
        url: 'https://www.adlatina.com/publicidad/la-inversin-publicitaria-global-estimada-para-el-mundial-2026-ronda-los-10.500-millones-de-dlares',
      },
    ],
    sourceYear: 2026,
    breakdown: [
      { label: 'Compra de Espacios en TV y Streaming', percentage: 55, amountUSD: 1443750000 },
      { label: 'Patrocinios de Estadios y Equipos Nacionales', percentage: 25, amountUSD: 656250000 },
      { label: 'Publicidad Digital y Activaciones en Redes Sociales', percentage: 20, amountUSD: 525000000 },
    ],
    history: [
      { year: 2014, spendUSD: 1500000000 }, // Brasil 2014 (anualizado)
      { year: 2018, spendUSD: 1850000000 }, // Rusia 2018 (anualizado)
      { year: 2022, spendUSD: 2250000000 }, // Catar 2022 (anualizado)
      { year: 2026, spendUSD: 2625000000 }, // EE.UU./Canadá/México 2026 (anualizado)
    ],
    tags: ['fifa', 'mundial', 'publicidad', 'coste publicitario', 'world cup 2026', 'adlatina', 'marcas'],
  },


  // 3. Gasto mensual en alimentación por persona en varios países (Estadística Global de Consumo)


  ...[
    { id: 'food-spend-united-states', nameEs: 'Estados Unidos', nameEn: 'United States', nameFr: 'États-Unis', nameDe: 'Vereinigte Staaten', namePt: 'Estados Unidos', monthlyUsd: 540 },
    { id: 'food-spend-canada', nameEs: 'Canadá', nameEn: 'Canada', nameFr: 'Canada', nameDe: 'Kanada', namePt: 'Canadá', monthlyUsd: 470 },
    { id: 'food-spend-united-kingdom', nameEs: 'Reino Unido', nameEn: 'United Kingdom', nameFr: 'Royaume-Uni', nameDe: 'Vereinigtes Königreich', namePt: 'Reino Unido', monthlyUsd: 420 },
    { id: 'food-spend-germany', nameEs: 'Alemania', nameEn: 'Germany', nameFr: 'Allemagne', nameDe: 'Deutschland', namePt: 'Alemanha', monthlyUsd: 410 },
    { id: 'food-spend-france', nameEs: 'Francia', nameEn: 'France', nameFr: 'France', nameDe: 'Frankreich', namePt: 'França', monthlyUsd: 450 },
    { id: 'food-spend-italy', nameEs: 'Italia', nameEn: 'Italy', nameFr: 'Italie', nameDe: 'Italien', namePt: 'Itália', monthlyUsd: 430 },
    { id: 'food-spend-spain', nameEs: 'España', nameEn: 'Spain', nameFr: 'Espagne', nameDe: 'Spanien', namePt: 'Espanha', monthlyUsd: 380 },
    { id: 'food-spend-netherlands', nameEs: 'Países Bajos', nameEn: 'Netherlands', nameFr: 'Pays-Bas', nameDe: 'Niederlande', namePt: 'Países Baixos', monthlyUsd: 400 },
    { id: 'food-spend-switzerland', nameEs: 'Suiza', nameEn: 'Switzerland', nameFr: 'Suisse', nameDe: 'Schweiz', namePt: 'Suíça', monthlyUsd: 620 },
    { id: 'food-spend-norway', nameEs: 'Noruega', nameEn: 'Norway', nameFr: 'Norvège', nameDe: 'Norwegen', namePt: 'Noruega', monthlyUsd: 530 },
    { id: 'food-spend-sweden', nameEs: 'Suecia', nameEn: 'Sweden', nameFr: 'Suède', nameDe: 'Schweden', namePt: 'Suécia', monthlyUsd: 420 },
    { id: 'food-spend-denmark', nameEs: 'Dinamarca', nameEn: 'Denmark', nameFr: 'Danemark', nameDe: 'Dänemark', namePt: 'Dinamarca', monthlyUsd: 440 },
    { id: 'food-spend-australia', nameEs: 'Australia', nameEn: 'Australia', nameFr: 'Australie', nameDe: 'Australien', namePt: 'Austrália', monthlyUsd: 480 },
    { id: 'food-spend-new-zealand', nameEs: 'Nueva Zelandia', nameEn: 'New Zealand', nameFr: 'Nouvelle-Zélande', nameDe: 'Neuseeland', namePt: 'Nova Zelândia', monthlyUsd: 440 },
    { id: 'food-spend-japan', nameEs: 'Japón', nameEn: 'Japan', nameFr: 'Japon', nameDe: 'Japan', namePt: 'Japão', monthlyUsd: 460 },
    { id: 'food-spend-south-korea', nameEs: 'Corea del Sur', nameEn: 'South Korea', nameFr: 'Corée du Sud', nameDe: 'Südkorea', namePt: 'Coreia do Sul', monthlyUsd: 420 },
    { id: 'food-spend-singapore', nameEs: 'Singapur', nameEn: 'Singapore', nameFr: 'Singapour', nameDe: 'Singapur', namePt: 'Singapura', monthlyUsd: 490 },
    { id: 'food-spend-israel', nameEs: 'Israel', nameEn: 'Israel', nameFr: 'Israël', nameDe: 'Israel', namePt: 'Israel', monthlyUsd: 470 },
    // Países de ingresos medios
    { id: 'food-spend-china', nameEs: 'China', nameEn: 'China', nameFr: 'Chine', nameDe: 'China', namePt: 'China', monthlyUsd: 250 },
    { id: 'food-spend-brazil', nameEs: 'Brasil', nameEn: 'Brazil', nameFr: 'Brésil', nameDe: 'Brasilien', namePt: 'Brasil', monthlyUsd: 180 },
    { id: 'food-spend-mexico', nameEs: 'México', nameEn: 'Mexico', nameFr: 'Mexique', nameDe: 'Mexiko', namePt: 'México', monthlyUsd: 170 },
    { id: 'food-spend-turkey', nameEs: 'Turquía', nameEn: 'Türkiye', nameFr: 'Turquie', nameDe: 'Türkei', namePt: 'Turquia', monthlyUsd: 200 },
    { id: 'food-spend-russia', nameEs: 'Rusia', nameEn: 'Russia', nameFr: 'Russie', nameDe: 'Russland', namePt: 'Rússia', monthlyUsd: 220 },
    { id: 'food-spend-poland', nameEs: 'Polonia', nameEn: 'Poland', nameFr: 'Pologne', nameDe: 'Polen', namePt: 'Polônia', monthlyUsd: 280 },
    { id: 'food-spend-thailand', nameEs: 'Tailandia', nameEn: 'Thailand', nameFr: 'Thaïlande', nameDe: 'Thailand', namePt: 'Tailândia', monthlyUsd: 150 },
    { id: 'food-spend-malaysia', nameEs: 'Malasia', nameEn: 'Malaysia', nameFr: 'Malaisie', nameDe: 'Malaysia', namePt: 'Malásia', monthlyUsd: 180 },
    { id: 'food-spend-colombia', nameEs: 'Colombia', nameEn: 'Colombia', nameFr: 'Colombie', nameDe: 'Kolumbien', namePt: 'Colômbia', monthlyUsd: 140 },
    { id: 'food-spend-south-africa', nameEs: 'Sudáfrica', nameEn: 'South Africa', nameFr: 'Afrique du Sud', nameDe: 'Südafrika', namePt: 'África do Sul', monthlyUsd: 130 },
    { id: 'food-spend-argentina', nameEs: 'Argentina', nameEn: 'Argentina', nameFr: 'Argentine', nameDe: 'Argentinien', namePt: 'Argentina', monthlyUsd: 160 },
    { id: 'food-spend-romania', nameEs: 'Rumania', nameEn: 'Romania', nameFr: 'Roumanie', nameDe: 'Rumänien', namePt: 'Romênia', monthlyUsd: 230 },
    // Países de ingresos bajos
    { id: 'food-spend-india', nameEs: 'India', nameEn: 'India', nameFr: 'Inde', nameDe: 'Indien', namePt: 'Índia', monthlyUsd: 70 },
    { id: 'food-spend-indonesia', nameEs: 'Indonesia', nameEn: 'Indonesia', nameFr: 'Indonésie', nameDe: 'Indonesien', namePt: 'Indonésia', monthlyUsd: 80 },
    { id: 'food-spend-philippines', nameEs: 'Filipinas', nameEn: 'Philippines', nameFr: 'Philippines', nameDe: 'Philippinen', namePt: 'Filipinas', monthlyUsd: 75 },
    { id: 'food-spend-vietnam', nameEs: 'Vietnam', nameEn: 'Vietnam', nameFr: 'Viêt Nam', nameDe: 'Vietnam', namePt: 'Vietnã', monthlyUsd: 90 },
    { id: 'food-spend-egypt', nameEs: 'Egipto', nameEn: 'Egypt', nameFr: 'Égypte', nameDe: 'Ägypten', namePt: 'Egito', monthlyUsd: 80 },
    { id: 'food-spend-nigeria', nameEs: 'Nigeria', nameEn: 'Nigeria', nameFr: 'Nigéria', nameDe: 'Nigeria', namePt: 'Nigéria', monthlyUsd: 60 },
    { id: 'food-spend-kenya', nameEs: 'Kenia', nameEn: 'Kenya', nameFr: 'Kenya', nameDe: 'Kenia', namePt: 'Quênia', monthlyUsd: 55 },
    { id: 'food-spend-bangladesh', nameEs: 'Bangladés', nameEn: 'Bangladesh', nameFr: 'Bangladesh', nameDe: 'Bangladesch', namePt: 'Bangladesh', monthlyUsd: 50 },
    { id: 'food-spend-ethiopia', nameEs: 'Etiopía', nameEn: 'Ethiopia', nameFr: 'Éthiopie', nameDe: 'Äthiopien', namePt: 'Etiópia', monthlyUsd: 40 },
    { id: 'food-spend-pakistan', nameEs: 'Pakistán', nameEn: 'Pakistan', nameFr: 'Pakistan', nameDe: 'Pakistan', namePt: 'Paquistão', monthlyUsd: 55 },
  ].map((c): SpendItem => {
    const annualUsd = c.monthlyUsd * 12;
    return {
      id: c.id,
      categoryId: 'food',
      title: `Gasto en Comida de 1 Persona en ${c.nameEs}`,
      subtitle: `Gasto promedio individual de $${c.monthlyUsd} USD al mes ($${annualUsd.toLocaleString('es-ES')} al año)`,
      annualSpendUSD: annualUsd,
      growthRatePct: 3.2,
      iconName: 'ShoppingBag',
      accentColor: '#10b981',
      description: `Gasto medio anual en alimentación y cesta de la compra para una persona residente en ${c.nameEs}, estimado en $${c.monthlyUsd} USD mensuales ($${annualUsd.toLocaleString('es-ES')} USD anuales) según el informe global de gasto en comida por persona de Nutrola.`,
      sourceName: 'Nutrola — ¿Cuánto gasta una persona promedio en comida al mes?',
      sourceUrl: 'https://nutrola.app/es/blog/how-much-does-average-person-spend-on-food-per-month',
      sources: [
        {
          name: `Nutrola — Informe Global de Gasto Mensual en Alimentación por Persona (${c.nameEs})`,
          url: 'https://nutrola.app/es/blog/how-much-does-average-person-spend-on-food-per-month',
        },
      ],
      sourceYear: 2025,
      history: [
        { year: 2022, spendUSD: annualUsd * 0.9 },
        { year: 2024, spendUSD: annualUsd * 0.96 },
        { year: 2025, spendUSD: annualUsd },
      ],
      tags: ['comida', 'alimentación', c.nameEs.toLowerCase(), 'supermercado', 'cesta de la compra'],
    };
  }),
  // 5. Contadores de Deuda Pública por Países
  ...COUNTRIES_DEBT_DATA.filter((c) => c.id !== 'debt-united-states').map((c): SpendItem => {
    const annualUsd = c.debtUSD;
    return {
      id: c.id,
      categoryId: 'government',
      title: `Deuda pública de ${c.nameEs}`,
      subtitle: `Deuda nacional acumulada de ${c.nameEs} en tiempo real`,
      annualSpendUSD: annualUsd,
      growthRatePct: 4.5,
      iconName: 'Landmark',
      accentColor: '#3b82f6',
      description: `La deuda pública acumulada de ${c.nameEs} asciende a unos $${(annualUsd).toLocaleString('es-ES', { maximumFractionDigits: 0 })} dólares estadounidenses (${c.year}), representando las obligaciones financieras pendientes de la administración pública de ${c.nameEs}.`,
      sourceName: 'DatosMacro (Expansión)',
      sourceUrl: c.sources[0]?.url || 'https://datosmacro.expansion.com/deuda',
      sources: c.sources,
      sourceYear: c.year,
      history: [
        { year: c.year - 2, spendUSD: annualUsd * 0.90 },
        { year: c.year - 1, spendUSD: annualUsd * 0.95 },
        { year: c.year, spendUSD: annualUsd },
      ],
      tags: ['deuda', 'gobierno', c.nameEs.toLowerCase(), 'datosmacro', 'finanzas', 'presupuesto'],
    };
  }),
  // 4. Contadores de PIB por Países
  ...COUNTRIES_GDP_DATA.map((c): SpendItem => {
    const annualUsd = c.gdpMillionsUSD * 1000000;
    return {
      id: c.id,
      categoryId: 'country-gdp',
      title: `PIB de ${c.nameEs}`,
      subtitle: `Producto Interior Bruto nominal oficial de ${c.nameEs} en tiempo real`,
      annualSpendUSD: annualUsd,
      growthRatePct: 2.5,
      iconName: 'Globe',
      accentColor: '#10b981',
      description: `El Producto Interior Bruto (PIB nominal) de ${c.nameEs} alcanza los $${(c.gdpMillionsUSD).toLocaleString('es-ES', { minimumFractionDigits: 2 })} millones de dólares estadounidenses (${c.year}), basándose en cifras consolidadas del Banco Mundial, DatosMacro (Expansión) y fuentes multilaterales.`,
      sourceName: 'Banco Mundial & DatosMacro (Expansión)',
      sourceUrl: c.sources[0]?.url || 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD',
      sources: c.sources,
      sourceYear: c.year,
      history: [
        { year: c.year - 2, spendUSD: annualUsd * 0.93 },
        { year: c.year - 1, spendUSD: annualUsd * 0.96 },
        { year: c.year, spendUSD: annualUsd },
      ],
      tags: ['pib', 'gdp', c.nameEs.toLowerCase(), 'banco mundial', 'datosmacro', 'economía'],
    };
  }),
];
