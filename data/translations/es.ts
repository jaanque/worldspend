import { Translations } from '@/types/i18n';

export const esTranslations: Translations = {
  seo: {
    title: 'WorldSpend.org — Gasto Global en Tiempo Real y Estadísticas de Gasto en Vivo',
    description:
      'Panel oficial de estadísticas que monitoriza el gasto global en tiempo real, estadísticas de gasto en vivo, reloj del gasto mundial y rastreador financiero global.',
    mainKeyword: 'Gasto global en tiempo real',
    secondaryKeywords: [
      'Estadísticas de gasto en vivo',
      'Rastreador financiero global',
      'Reloj del gasto mundial',
    ],
    keywords: [
      'Gasto global en tiempo real',
      'Estadísticas de gasto en vivo',
      'Rastreador financiero global',
      'Reloj del gasto mundial',
      'gasto mundial',
      'estadísticas macroeconómicas',
      'finanzas globales en directo',
    ],
  },
  header: {
    tagline: 'Estadísticas del Gasto Mundial en Tiempo Real',
    compareNav: 'Comparar',
    compareNavTitle: 'Comparador Multi-Contador (Próximamente)',
    soonBadge: 'Próximamente',
    backToTop: 'Volver arriba',
    homeNav: 'Inicio',
    timeframes: {
      year: 'Año 2026',
      today: 'Hoy',
      session: 'Tu Visita',
      second: 'Por Segundo',
      custom: 'Personalizado...',
    },
    selectCurrency: 'Seleccionar divisa',
    selectLanguage: 'Idioma',
  },
  comparePage: {
    badge: 'Análisis Comparativo en Vivo',
    title: 'Comparador de Contadores y Matriz de Flujos',
    subtitle: 'Selecciona hasta un máximo de 10 indicadores en tiempo real para contrastar velocidades de gasto, proporciones y volumen monetario.',
    selectionLimit: (current: number, max: number) => `${current} / ${max} seleccionados`,
    addCounterPlaceholder: 'Buscar y añadir un indicador...',
    clearAll: 'Limpiar Todo',
    selectPresets: 'Duelos Predefinidos:',
    presetTopGlobal: 'Flujos Mundiales Top',
    presetSovereignDebts: 'Deudas Soberanas',
    presetTechAndMedia: 'Tecnología y Redes',
    presetLifestyle: 'Consumo y Estilo de Vida',
    liveComparisonTitle: 'Carrera Financiera Simultánea a 60 FPS',
    rankingHeader: 'Posición y Velocidad',
    ratePerSecHeader: 'Flujo por Segundo',
    annualTotalHeader: 'Gasto Anual Base',
    shareOfTotalHeader: '% de la Comparativa',
    maxLimitWarning: 'Puedes comparar un máximo de 10 contadores simultáneamente.',
    emptyStateTitle: 'Ningún Contador Seleccionado',
    emptyStateDescription: 'Usa el buscador superior o selecciona un duelo rápido para comenzar a comparar en tiempo real.',
    backToHome: 'Volver a Todos los Contadores',
    shareComparison: 'Compartir Comparativa',
    copiedLink: '¡Enlace copiado al portapapeles!',
  },
  heroTicker: {
    yearLabel: 'Gasto Mundial Total en 2026',
    todayLabel: 'Gasto Mundial Total Hoy (desde 00:00 GMT)',
    sessionLabel: (seconds: number) => `Gasto Mundial Total durante tus ${Math.floor(seconds)}s de visita`,
    secondLabel: 'Gasto Mundial Total por Segundo',
    perSecondSuffix: 'por segundo',
  },
  sessionBanner: {
    timeOnPage: 'Tiempo transcurrido en la página:',
    spendDuringVisit: 'Dinero gastado en el mundo durante tu visita:',
  },
  searchAndFilter: {
    filterSectionTitle: 'Buscador y Filtros por Categoría',
        searchPlaceholder: 'Buscar indicadores por temas, países o fuentes (ej. deuda, España, Netflix)...',
    showingCounters: (count: number) => `Mostrando ${count} contadores en vivo`,
    indicatorsCount: (count: number) => `${count} indicadores`,
    categoriesCount: (count: number) => `${count} categorías`,
    noResultsFound: (query: string) => `No se encontraron contadores estadísticos para "${query}"`,
    viewAllButton: 'Ver todos los indicadores',
    collapseAll: 'Plegar todo',
    expandAll: 'Desplegar todo',
  },
  card: {
    perSecondBadge: '/s',
    officialSourcePrefix: 'Fuente Oficial:',
    embedTitle: 'Código de Incrustación en Vivo',
    embedInstruction: 'Incrusta este contador en vivo en cualquier sitio web o blog:',
    testWidgetPage: 'Probar página de widget',
    copyHtml: 'Copiar HTML',
    copied: '¡Copiado!',
  },
  detailPage: {
    backLink: 'Volver a todas las estadísticas en vivo',
    backToCompare: 'Volver a la comparativa',
    statisticalIndicator: 'INDICADOR ESTADÍSTICO',
    annualBaseline: 'Gasto Anual Base',
    annualizedExp: 'Gasto anualizado consolidado',
    ratePerMinute: 'Gasto por Minuto',
    rateOfFlow: 'Velocidad de flujo de capital',
    shareOfGdp: 'Proporción del PIB Mundial',
    ofWorldEconomy: 'De la economía global',
    historicalChartTitle: 'Trayectoria Histórica del Gasto (2000 – 2026)',
    historicalChartSubtitle: '',
    historicalSeriesInfo: 'Serie de datos oficial (2000–2026)',
    projectedLabel: 'Proyectado',
    historicalLabel: 'Histórico',
    chartFooterNote: 'Gráfico financiero interactivo en vivo',
    statisticalOverview: 'Resumen Estadístico:',
    officialSource: 'Fuente Oficial:',
    continuousUpdate: 'Actualización continua a 60 FPS',
    relatedCountersTitle: 'Indicadores Relacionados en esta Categoría',
    relatedCountersSubtitle: 'Otros contadores estadísticos en tiempo real de la misma categoría',
    shareButton: 'Compartir estadística',
    shareCopied: '¡Enlace copiado al portapapeles!',
    downloadCsv: 'Descargar CSV',
    embedWidget: 'Insertar Widget',
    embedCopied: '¡Código iframe copiado!',
    showChart: 'Mostrar Gráfico',
    hideChart: 'Ocultar Gráfico',
    shareX: 'Compartir en X (Twitter)',
    shareWhatsApp: 'Compartir en WhatsApp',
  },
  footer: {
    methodologyTitle: 'Metodología e Integridad de Datos',
    methodologyBody: 'Cifras en tiempo real basadas en datos de organismos oficiales.',
    copyrightTagline: 'Estadísticas Financieras Globales Verificadas en Tiempo Real e Indicadores Macroeconómicos',
    categoriesTitle: 'Categorías de Gasto',
    trendingTitle: 'Contadores en Tiempo Real Populares',
    sourcesTitle: 'Fuentes Oficiales de Datos',
    toolsTitle: 'Herramientas y Arquitectura',
    toolsEmbedWidgets: 'Widgets Insertables en Vivo',
    toolsEngine: 'Motor Dinámico a 60 FPS',
    toolsMultiCurrency: 'Conversor Multidivisa (11 Monedas)',
    toolsHreflang: 'SEO Multilingüe Hreflang',
    copyrightNotice: 'WorldSpend Análisis Financiero Global',
    disclaimerTitle: 'Aviso Legal y de Divulgación',
    disclaimerText:
      'Las cifras de gasto en tiempo real mostradas en WorldSpend.org son aproximaciones algorítmicas continuas basadas en estadísticas y balances oficiales anuales. Los datos se actualizan continuamente con fines educativos, divulgativos y de análisis comparativo.',
    citationText: 'Cómo citar: WorldSpend Analytics. (2026). Indicadores Mundiales de Gasto en Tiempo Real. Disponible en https://worldspend.org',
  },
    categories: {
    tech: { name: 'Tecnología y Cripto', description: 'Inteligencia artificial, computación en la nube, servidores y criptomonedas' },
    all: { name: 'Todos los Gastos', description: 'Panorama financiero global completo en tiempo real' },
    entertainment: { name: 'Entretenimiento y Marcas', description: 'Deportes, streaming, videojuegos y grandes marcas globales' },
    government: { name: 'Gobierno y Sector Público', description: 'Presupuestos públicos, ayudas, exploración espacial y ministerios' },
    health: { name: 'Salud y Bienestar', description: 'Sanidad pública, salud, tabaco y procedimientos médicos' },
    food: { name: 'Alimentación y Coste de Vida', description: 'Gasto en comida, coste de la vida y consumo cotidiano' },
    illicit: { name: 'Mercado Negro e Ilícito', description: 'Economía criminal, ciberdelincuencia, drogas y tráfico' },
    military: { name: 'Defensa y Armamento', description: 'Gasto militar global, armamento, ejércitos y programas de defensa' },
    'country-gdp': { name: 'PIB por Países', description: 'Producto Interior Bruto (PIB nominal) de los países en tiempo real' },
  },
  items: {
    'global-web-hosting-market': {
      title: "Mercado de alojamiento web (Hosting)",
      subtitle: "El mercado global de servicios de alojamiento web genera unos 178.760 millones de dólares anuales",
      description: "El gasto global en servicios de alojamiento web (hosting), que incluye servidores compartidos, dedicados, VPS y hosting en la nube (cloud hosting), asciende a aproximadamente 178.760 millones de dólares anuales. Este mercado es la base sobre la que se apoya todo el ecosistema de sitios web y aplicaciones en Internet.",
      sourceName: "Fortune Business Insights",
      sources: [
        {
          name: "Fortune Business Insights — Web Hosting Services Market Size, Share & COVID-19 Impact Analysis",
          url: "https://www.fortunebusinessinsights.com/es/industry-reports/web-hosting-services-market-100863",
        }
      ],
    },
    'apple-annual-revenue': {
      title: "Ingresos de Apple",
      subtitle: "Los ingresos anuales estimados de Apple alcanzan los 437.600 millones de dólares, basados en su último trimestre récord",
      description: "Los ingresos anuales estimados de Apple ascienden a aproximadamente 437.600 millones de dólares, proyectados a partir del trimestre récord cerrado en junio de 2026 con 109.400 millones de dólares. Este rendimiento financiero récord estuvo impulsado principalmente por un crecimiento del 22% en las ventas globales de iPhone.",
      sourceName: "Infobae",
      sources: [
        {
          name: "Infobae — Apple bate récord de ingresos en su último trimestre",
          url: "https://www.infobae.com/estados-unidos/2026/08/02/apple-bate-record-de-ingresos-antes-de-la-salida-de-tim-cook/",
        }
      ],
    },
    'global-ai-spending': {
      title: "Gasto global en Inteligencia Artificial",
      subtitle: "El gasto de las empresas en inteligencia artificial a nivel mundial superará los 2,5 billones de dólares anuales",
      description: "El gasto mundial en tecnología, infraestructura y servicios de Inteligencia Artificial (IA) superará los 2,5 billones de dólares. Este incremento sin precedentes está impulsado por la adopción de la IA generativa por parte de las empresas, la construcción de mega centros de datos y la automatización de procesos corporativos.",
      sourceName: "RTVE Noticias",
      sources: [
        {
          name: "RTVE — Gasto récord en Inteligencia Artificial",
          url: "https://www.rtve.es/noticias/20260702/inteligencia-artificial-cuesta-mas-personal-marca-record-gasto-empresas/17084006.shtml",
        }
      ],
    },
    'crypto-mining-electricity-cost': {
      title: "Gasto eléctrico en minería cripto",
      subtitle: "El gasto en electricidad para la minería de criptomonedas a nivel mundial oscila entre 10.000 y 15.000 millones de dólares al año",
      description: "El costo de la electricidad consumida a nivel mundial para la minería de criptomonedas (principalmente Bitcoin) se estima entre 10.000 y 15.000 millones de dólares anuales. Esto representa una porción considerable del consumo eléctrico global, impulsado por el funcionamiento continuo de potentes granjas de servidores especializados (ASICs).",
      sourceName: "Digiconomist (Bitcoin Energy Consumption)",
      sources: [
        {
          name: "Digiconomist — Bitcoin Energy Consumption Index",
          url: "https://digiconomist.net/bitcoin-energy-consumption/",
        }
      ],
    },
    'julian-alvarez-market-value': {
      title: "Valor de mercado de Julián Álvarez",
      subtitle: "La valoración estimada de mercado del jugador Julián Álvarez se sitúa en los 100 millones de euros",
      description: "El valor de mercado actual de Julián Álvarez (delantero del Atlético de Madrid y de la selección argentina) es de 100 millones de euros, consolidándose como uno de los futbolistas de élite a nivel mundial según los datos históricos de Transfermarkt.",
      sourceName: "Transfermarkt — Perfil de Julián Álvarez",
      sources: [
        {
          name: "Transfermarkt — Perfil de Julián Álvarez (Historial de Valor de Mercado)",
          url: "https://www.transfermarkt.es/julian-alvarez/marktwertverlauf/spieler/576024",
        }
      ],
    },
    'us-national-debt': {
      title: "Deuda nacional de Estados Unidos",
      subtitle: "La deuda pública acumulada de EE.UU. supera los 39 billones de dólares",
      description: "La deuda nacional acumulada de los Estados Unidos supera los 39 billones de dólares (39 trillion USD). Esta cifra representa el total de las obligaciones financieras de la administración pública federal estadounidense acumuladas a lo largo de su historia.",
      sourceName: "LA Times",
      sources: [
        {
          name: "LA Times — La deuda nacional de EE.UU. supera los 39 billones de dólares",
          url: "https://www.latimes.com/espanol/eeuu/articulo/2026-03-27/la-deuda-nacional-de-eeuu-supera-los-39-billones-de-dolares",
        }
      ],
    },
    'spain-monarchy-spending': {
      title: "Gasto en la Monarquía Española",
      subtitle: "El coste global estimado de la Casa Real española asciende a unos 105 millones de euros al año",
      description: "El coste global estimado de la Monarquía en España asciende a unos 105 millones de euros anuales al sumar la asignación directa oficial de 8,43 millones de euros con los gastos de personal militar, seguridad y soporte de otros ministerios del Estado, lo que equivale a unos 2,2 euros por ciudadano.",
      sourceName: "Diario en Positivo",
      sources: [
        {
          name: "Diario en Positivo — Coste de la monarquía española",
          url: "https://www.diarioenpositivo.com/economia/estudio-calcula-que-monarquia-cuesta-105-millones-ano-jefaturas-estado-mas-baratas-europa/20260303181913075067.html",
        }
      ],
    },
    'uk-monarchy-spending': {
      title: "Gasto en la Monarquía Británica",
      subtitle: "El coste global estimado de la familia real británica ronda los 166 millones de euros al año",
      description: "El gasto global de la monarquía del Reino Unido se estima en unos 166 millones de euros anuales, incluyendo la subvención soberana (Sovereign Grant) y los costes de seguridad financiados por el Estado. Es una de las jefaturas de estado más caras de Europa.",
      sourceName: "Diario en Positivo",
      sources: [
        {
          name: "Diario en Positivo — Coste de la monarquía británica",
          url: "https://www.diarioenpositivo.com/economia/estudio-calcula-que-monarquia-cuesta-105-millones-ano-jefaturas-estado-mas-baratas-europa/20260303181913075067.html",
        }
      ],
    },
    'fortnite-player-spending': {
      title: "Gasto de jugadores en Fortnite",
      subtitle: "Los jugadores de Fortnite gastan un promedio de unos 16 millones de dólares al día",
      description: "Los jugadores del popular battle royale Fortnite gastan un promedio aproximado de 16 millones de dólares al día a nivel global. Este gasto se realiza principalmente a través de la compra de su moneda virtual, los pavos (V-Bucks), para adquirir pases de batalla, skins de personajes, gestos y otros cosméticos dentro del juego.",
      sourceName: "Tekrevol",
      sources: [
        {
          name: "Tekrevol — Fortnite Revenue and Usage Statistics",
          url: "https://www.tekrevol.com/blogs/fortnite-revenue-usage-statistics/",
        }
      ],
    },
    'onlyfans-user-spending': {
      title: "Gasto de usuarios en OnlyFans",
      subtitle: "Los usuarios gastan aproximadamente 7.200 millones de dólares anuales en OnlyFans",
      description: "El gasto global de los usuarios en la plataforma de suscripción de creadores de contenido OnlyFans alcanzó aproximadamente los 7.200 millones de dólares anuales. La plataforma ha experimentado un crecimiento masivo impulsado por su modelo de suscripción directa y propinas.",
      sourceName: "El Vocero",
      sources: [
        {
          name: "El Vocero — OnlyFans facturó USD 7.200 millones",
          url: "https://elvocero.com.ar/2025/12/18/onlyfans-facturo-usd-7-200-millones-en-2025-y-argentina-se-ubico-entre-los-20-paises-que-mas-gastaron/",
        }
      ],
    },
    'mrbeast-content-reinvestment': {
      title: "Gasto en producción y reinversión de MrBeast",
      subtitle: "MrBeast reinvierte casi la totalidad de sus ingresos (unos 400 millones de dólares anuales)",
      description: "Jimmy Donaldson (MrBeast) reinvierte prácticamente la totalidad de los ingresos generados por su holding Beast Industries, estimados en unos 400 millones de dólares anuales, directamente en la producción de sus superproducciones de YouTube y nuevos proyectos empresariales. Beast Industries cuenta con una valoración corporativa estimada en unos 5.200 millones de dólares.",
      sourceName: "Plisio",
      sources: [
        {
          name: "Plisio — Perfil y finanzas de MrBeast",
          url: "https://plisio.net/es/profiles/mrbeast",
        }
      ],
    },
    'eras-tour-ticket-spending': {
      title: "Gasto en entradas de The Eras Tour (Taylor Swift)",
      subtitle: "Los fans gastaron más de 2.000 millones de dólares en entradas para la gira de Taylor Swift",
      description: "El gasto global de los fans en la venta de entradas para la gira \"The Eras Tour\" de Taylor Swift superó los 2.000 millones de dólares a lo largo de casi dos años de conciertos, convirtiéndose en la gira musical con mayor recaudación en la historia de la música. Este impacto financiero también impulsó significativamente las economías locales en cada ciudad que visitó.",
      sourceName: "Billboard",
      sources: [
        {
          name: "Billboard — The Eras Tour supera 2000 millones",
          url: "https://www.billboard.com/espanol/noticias/taylor-swift-eras-tour-supera-2000-millones-de-dolares-en-ventas-1235849106/",
        },
        {
          name: "GQ — Ganancias de Taylor Swift con The Eras Tour",
          url: "https://www.revistagq.com/articulo/cuanto-ha-ganado-taylor-swift-con-el-eras-tour-despues-de-casi-dos-anos-de-gira",
        },
        {
          name: "TN — Qué hizo Taylor Swift con lo ganado",
          url: "https://tn.com.ar/musica/noticias/2025/12/12/taylor-swift-blanqueo-que-hizo-con-la-millonaria-cifra-que-gano-con-the-eras-tour/",
        }
      ],
    },
    'jordan-brand-spending': {
      title: "Gasto en productos de Jordan Brand (Nike)",
      subtitle: "Los consumidores gastan más de 7.000 millones de dólares anuales en productos de la marca Jordan",
      description: "El gasto global de los consumidores en zapatillas, ropa y accesorios de la división Jordan Brand de Nike supera los 7.000 millones de dólares anuales. Michael Jordan recibe aproximadamente el 5% de estas ventas en concepto de regalías por su histórico acuerdo de patrocinio.",
      sourceName: "GQ",
      sources: [
        {
          name: "GQ — Cuánto gana Nike y Michael Jordan con Jordan Brand",
          url: "https://www.revistagq.com/moda/articulo/cuanto-gana-nike-michael-jordan",
        },
        {
          name: "NX Noticias — Regalías de Michael Jordan superan los 300 millones",
          url: "https://www.facebook.com/NXNoticias.oficial/posts/michael-jordan-regal%C3%ADas-con-nike-superan-los-300-millones-de-d%C3%B3lares-al-a%C3%B1ola-hi/122280916874074746/",
        }
      ],
    },
    'ferrari-f1-spending': {
      title: "Gasto de Ferrari en su equipo de Fórmula 1",
      subtitle: "Ferrari gasta unos 185 millones de dólares al año para competir bajo el límite presupuestario de la F1",
      description: "El gasto anual de la escudería Ferrari para operar su equipo de Fórmula 1 se estima en una media de 185 millones de dólares (dentro del rango de 170 a 200 millones de USD) bajo el límite presupuestario regulado por la FIA. Esta cifra financia el desarrollo de los coches, las pruebas y los salarios de operaciones del equipo, aunque excluye excepciones como los salarios de los pilotos y los motores.",
      sourceName: "Revista Car",
      sources: [
        {
          name: "Revista Car — Cuánto cuesta tener un equipo de Fórmula 1",
          url: "https://revistacar.es/cuanto-cuesta-tener-un-equipo-de-formula-1/",
        }
      ],
    },
    'un-annual-budget': {
      title: "Gasto del presupuesto ordinario de la ONU",
      subtitle: "El presupuesto de la Organización de las Naciones Unidas (ONU) para 2026 es de 3.450 millones de dólares",
      description: "El presupuesto ordinario aprobado para el funcionamiento de la Organización de las Naciones Unidas (ONU) durante el año 2026 asciende a 3.450 millones de dólares. Este presupuesto financia la secretaría general, misiones de paz, programas y oficinas de las Naciones Unidas en todo el mundo.",
      sourceName: "Noticias ONU",
      sources: [
        {
          name: "Noticias ONU — Presupuesto ordinario de la ONU para 2026",
          url: "https://news.un.org/es/story/2025/12/1540968",
        }
      ],
    },
    'who-annual-budget': {
      title: "Gasto del presupuesto básico de la OMS",
      subtitle: "El presupuesto para programas básicos de la OMS es de 2.100 millones de dólares anuales",
      description: "El presupuesto para programas básicos de la Organización Mundial de la Salud (OMS) aprobado para el bienio 2026-2027 asciende a 4.200 millones de dólares (lo que equivale a un promedio de 2.100 millones de dólares anuales). Este ciclo incluye un aumento histórico del 20% en las contribuciones básicas asignadas por los Estados Miembros para fortalecer la respuesta a emergencias sanitarias mundiales.",
      sourceName: "Organización Mundial de la Salud (OMS)",
      sources: [
        {
          name: "OMS — Estados Miembros aprueban aumento y presupuesto 2026-2027",
          url: "https://www.who.int/es/news/item/20-05-2025-in-historic-move--who-member-states-approve-20--funding-increase-and-2026-27-budget",
        },
        {
          name: "OMS — Sitio Web Oficial en Español",
          url: "https://www.who.int/es",
        }
      ],
    },
    'global-pharmaceutical-spending': {
      title: "Gasto farmacéutico mundial",
      subtitle: "El gasto en medicamentos y productos farmacéuticos supera los 2 billones de dólares anuales en el mundo",
      description: "El gasto farmacéutico mundial superó los 2 billones de dólares anuales, oscilando entre 1,7 y 2,3 billones según la segmentación por precios de factura o precios netos de mercado. Este sector está impulsado por el desarrollo de nuevos medicamentos de alta especialidad, el acceso global a tratamientos y el envejecimiento de la población.",
      sourceName: "Intuition Labs",
      sources: [
        {
          name: "Intuition Labs — Pharmaceutical Market Analysis & Trends",
          url: "https://intuitionlabs.ai/articles/pharmaceutical-market-analysis-trends",
        }
      ],
    },
    'global-obesity-economic-cost': {
      title: "Costo económico de la obesidad y sobrepeso",
      subtitle: "El impacto económico mundial de la obesidad y el sobrepeso ronda los 2 billones de dólares anuales",
      description: "El coste económico global derivado del sobrepeso y la obesidad se estima en unos 2 billones de dólares anuales, lo que representa entre el 2,4% y el 2,8% del PIB mundial. Este impacto incluye gastos médicos directos y pérdidas masivas de productividad por incapacidad laboral o muerte prematura. Las proyecciones estiman que superará los 4,3 billones anuales para 2035.",
      sourceName: "Live-Med (World Obesity Atlas)",
      sources: [
        {
          name: "Live-Med — Análisis del World Obesity Atlas: Impacto económico de la obesidad",
          url: "https://live.med/es/blog/analisis-del-world-obesity-atlas-2023-impacto-economico-obesidad/",
        }
      ],
    },
    'global-depression-anxiety-cost': {
      title: "Costo de la depresión y ansiedad",
      subtitle: "La depresión y la ansiedad cuestan a la economía mundial alrededor de 1 billón de dólares anuales",
      description: "El impacto económico global de los trastornos de depresión y ansiedad asciende a aproximadamente 1 billón de dólares anuales. Este coste proviene principalmente de la pérdida de productividad laboral por absentismo, presentismo y bajas médicas, afectando la salud mental de millones de personas a nivel mundial.",
      sourceName: "Yahoo Noticias (OMS / Banco Mundial)",
      sources: [
        {
          name: "Yahoo Noticias — El costo global de la ansiedad y depresión",
          url: "https://es-us.noticias.yahoo.com/costo-global-ansiedad-depresi%C3%B3n-supera-150118561.html",
        }
      ],
    },

    'spain-cost-raising-child': {
      title: 'Coste de Criar a un Hijo en España (0–18 años)',
      subtitle: 'Entre 115.000 € y 180.000 € en total de media básica; unos 8.194 € al año por hijo',
      description:
        'No existe una cifra única a nivel mundial, ya que el costo cambia mucho según el país. En España, criar a un hijo hasta los 18 años cuesta entre 115.000 y 180.000 euros de media básica (media: 147.500 €), lo que equivale a unos 8.194 € al año por hijo (~8.932 USD). Este coste incluye alimentación, ropa, educación, sanidad, ocio y transporte, sin contar con vivienda ni estudios universitarios.',
      sourceName: 'Educo — ¿Cuánto cuesta criar a un hijo en España?',
      sources: [
        {
          name: 'Educo — ¿Cuánto cuesta criar a un hijo o hija en España?',
          url: 'https://www.educo.org/blog/cuanto-cuesta-criar-a-un-hijo-o-hija-en-espana',
        },
      ],
    },
    'global-online-food-delivery-market': {
      title: 'Gasto Mundial en Comida a Domicilio y Para Llevar Online',
      subtitle: 'La gente gasta más de 320.000 millones de dólares al año en plataformas digitales de comida a domicilio',
      description:
        'A nivel mundial, la gente gasta más de 320.000 millones de dólares al año en el mercado de comida a domicilio y para llevar a través de plataformas digitales como Uber Eats, Just Eat, Deliveroo, DoorDash o Glovo. Este mercado ha crecido de forma exponencial desde la pandemia de 2020, impulsado por el auge del comercio móvil, los hábitos de consumo urbano y la expansión de los dark kitchens a escala global.',
      sourceName: 'Fortune Business Insights — Online Food Delivery Market',
      sources: [
        {
          name: 'Fortune Business Insights — Online Food Delivery Market Size & Growth Report',
          url: 'https://www.fortunebusinessinsights.com/online-food-delivery-market-110672',
        },
      ],
    },
    'global-cinema-box-office-revenue': {
      title: 'Gasto Global en Entradas de Cine',
      subtitle: 'El gasto en taquilla cinematográfica mundial ronda los 29.600 millones de euros anuales (~32.264M$ USD)',
      description:
        'El gasto específico de los espectadores en taquilla anual a nivel global ronda los 29.600 millones de euros (~32.264 millones de dólares), impulsado principalmente por el crecimiento del mercado asiático. Asia lidera la asistencia y el consumo en el sector cinematográfico mundial, mientras que el mercado norteamericano y europeo continúan siendo pilares fundamentales del consumo en salas de cine.',
      sourceName: 'Spain Audiovisual Hub / Observatorio Audiovisual Europeo',
      sources: [
        {
          name: 'Spain Audiovisual Hub — Observatorio Audiovisual Europeo: Asia impulsa el crecimiento de la taquilla mundial',
          url: 'https://spainaudiovisualhub.digital.gob.es/es/actualidad/observatorio-audiovisual-europeo--asia-impulsa-el-crecimiento-de',
        },
      ],
    },
    'superbowl-advertising-revenue': {
      title: 'Gasto de Empresas en Publicidad en la Super Bowl',
      subtitle: 'Las marcas pagaron más de 414 millones de dólares para anunciarse en la Super Bowl por segundo año consecutivo',
      description:
        'Las empresas desembolsaron más de 414 millones de dólares para colocar sus anuncios durante la Super Bowl, superando los 400 millones por segundo año consecutivo. Un spot de 30 segundos durante el partido puede costar hasta 8 millones de dólares, lo que convierte a la Super Bowl en el escaparate publicitario más caro del planeta. Marcas de sectores como automoción, alimentación, tecnología y entretenimiento compiten por captar la atención de más de 100 millones de espectadores simultáneos.',
      sourceName: 'Palco23 / Mundo Deportivo — Gasto publicitario en la Super Bowl',
      sources: [
        {
          name: 'Palco23 / Mundo Deportivo — La Super Bowl supera los 400 millones de dólares de inversión publicitaria por segundo año',
          url: 'https://palco23.mundodeportivo.com/media/la-super-bowl-supera-los-400-millones-de-dolares-de-ingresos-publicitarios-por-segundo-ano',
        },
      ],
    },
    'fifa-world-cup-2026-cost': {
      title: 'Coste de Organización del Mundial de Fútbol FIFA 2026',
      subtitle: 'Gasto total de la FIFA para organizar y operar el primer Mundial de 48 equipos de la historia',
      description:
        'El costo de organización y operación del Mundial de la FIFA 2026 ascendió a unos 2.400 millones de dólares para la propia FIFA. El torneo se disputó en 16 ciudades de Estados Unidos, Canadá y México con 48 selecciones participantes por primera vez en la historia, siendo el evento más caro de la historia del fútbol mundial.',
      sourceName: 'BBC Mundo — Mundial de la FIFA 2026',
      sources: [
        {
          name: 'BBC Mundo — El coste de organización del Mundial FIFA 2026',
          url: 'https://www.bbc.com/mundo/articles/cy8d7p71p7po',
        },
      ],
    },
    'fifa-world-cup-global-advertising-investment': {
      title: 'Gasto de las Marcas en Publicidad para el Mundial FIFA 2026',
      subtitle: 'Las empresas gastaron ~10.500M$ por edición en anunciarse durante el Mundial (ciclo 4 años → ~2.625M$/año)',
      description:
        'El Mundial de la FIFA no se celebra cada año, sino cada cuatro años. El coste publicitario total que las marcas y empresas asumieron para anunciarse durante el Mundial 2026 asciende a unos 10.500 millones de dólares por edición (~2.625 millones anualizados). Las marcas pagaron este dinero para ocupar espacios en televisión, plataformas de streaming, estadios y redes sociales durante el torneo más visto del planeta.',
      sourceName: 'AdLatina — Coste publicitario de marcas en el Mundial FIFA 2026',
      sources: [
        {
          name: 'AdLatina — La inversión publicitaria global estimada para el Mundial 2026 ronda los 10.500 millones de dólares',
          url: 'https://www.adlatina.com/publicidad/la-inversin-publicitaria-global-estimada-para-el-mundial-2026-ronda-los-10.500-millones-de-dlares',
        },
      ],
    },
    'spain-equality-ministry-budget': {
      title: 'Presupuesto del Ministerio de Igualdad de España',
      subtitle: 'Presupuesto general anual asignado a políticas de igualdad y prevención de violencia de género',
      description:
        'Dotación presupuestaria oficial consolidada en los Presupuestos Generales del Estado (PGE) para el Ministerio de Igualdad, incluyendo programas de conciliación, sensibilización y protección integral.',
      sourceName: 'Presupuestos Generales del Estado (PGE) & Ministerio de Hacienda',
    },
    'cost-raising-child-18-years': {
      title: 'Coste de Criar a un Hijo hasta los 18 Años',
      subtitle: 'Coste medio acumulado en alimentación, educación, vivienda, sanidad y crianza',
      description:
        'Inversión económica requerida para mantener a un hijo desde su nacimiento hasta alcanzar la mayoría de edad (18 años), con una media de 320.000 € por hijo en España y la Unión Europea.',
      sourceName: 'Save the Children & Encuesta de Presupuestos Familiares (INE)',
    },
    'spain-pensions-expenditure': {
      title: 'Gasto en Pensiones en España',
      subtitle: 'Nómina mensual consolidada de pensiones contributivas de jubilación, viudedad e incapacidad',
      description:
        'Gasto total del sistema público de la Seguridad Social española destinado a abonar las más de 10 millones de pensiones contributivas, representando aproximadamente el 12,5% del PIB nacional.',
      sourceName: 'Seguridad Social de España & Ministerio de Inclusión',
    },
    'monthly-food-grocery-spending': {
      title: 'Gasto en Comida y Alimentación al Mes',
      subtitle: 'Presupuesto destinado a cesta de la compra, supermercados y alimentación doméstica',
      description:
        'Gasto consolidado de los hogares en productos alimenticios, frescos y supermercados. El gasto medio por hogar ronda los 450 € a 550 € mensuales en España.',
      sourceName: 'FAO & Instituto Nacional de Estadística (INE)',
    },
    'wedding-industry-average-cost': {
      title: 'Gasto Medio en una Boda',
      subtitle: 'Coste global del banquete, vestido, fotografía, viaje de novios y celebración nupcial',
      description:
        'Gasto acumulado de las celebraciones matrimoniales en el mundo. En España, el coste medio por enlace nupcial se sitúa en 22.500 € para una media de 120 invitados.',
      sourceName: 'The Knot Global Wedding Report & Bodas.net',
    },
    'baby-diapers-annual-spending': {
      title: 'Gasto en Pañales para Bebés al Mes',
      subtitle: 'Consumo recurrente de pañales desechables y toallitas húmedas durante los primeros años',
      description:
        'Volumen global de compra de pañales infantiles. Un bebé utiliza entre 5.000 y 6.000 pañales en sus primeros 30 meses, con un gasto medio de 50 € a 70 € al mes por familia.',
      sourceName: 'Euromonitor International & Organización de Consumidores (OCU)',
    },
    'spain-social-welfare-benefits': {
      title: 'Gasto de España en Ayudas y Protección Social',
      subtitle: 'Prestaciones por desempleo, Ingreso Mínimo Vital, dependencia y subsidios públicos',
      description:
        'Gasto público conjunto del Estado español en prestaciones asistenciales, cobertura por desempleo, subsidios a familias vulnerables y Sistema para la Autonomía y Atención a la Dependencia.',
      sourceName: 'Servicio Público de Empleo Estatal (SEPE), Ministerio de Derechos Sociales & Eurostat',
    },
    'la-velada-production-cost': {
      title: 'Coste de Producción de La Velada del Año VI (Ibai)',
      subtitle: 'Presupuesto total de 10 millones de euros para alquiler de estadios, artistas y producción técnica',
      description:
        'Coste total de organización del mayor evento de streaming en habla hispana (Santiago Bernabéu / Metropolitano), estimado en 10 millones de euros (~10,9 M$), incluyendo contratos musicales, infraestructura audiovisual y logística.',
      sourceName: 'Diario ABC, Diario AS & Onda Cero',
      sources: [
        {
          name: 'Diario ABC — La Velada del Año: el dinero que cuesta y gana Ibai Llanos',
          url: 'https://www.abc.es/gente/velada-ano-dinero-cuesta-gana-ibai-llanos-20260722013407-nt.html',
        },
        {
          name: 'Diario AS (MeriStation) — La mareante cifra económica que cuesta organizar La Velada del Año',
          url: 'https://as.com/meristation/streamers/la-mareante-cifra-economica-que-le-cuesta-a-ibai-organizar-la-velada-del-ano-f202607-n/',
        },
        {
          name: 'Onda Cero — La cifra de negocio y producción de La Velada del Año',
          url: 'https://www.ondacero.es/noticias/sociedad/ganado-dinero-ibai-velada-ano-5-esto-dicen-calculos_2025072868876ffef4ec026a96bddf38.html',
        },
      ],
    },
    'netflix-annual-revenue': {
      title: 'Gasto de Usuarios en Suscripciones de Netflix',
      subtitle: 'Gasto global de 45.200 millones de dólares al año (~38.800M €) en suscripciones',
      description:
        'Los usuarios de Netflix gastan alrededor de 45.200 millones de dólares (~38.800 millones de euros) al año en sus suscripciones. Prácticamente la totalidad de esta cifra proviene de sus cuotas de membresías de pago, ya que el gasto en planes alternativos con publicidad, aunque crecen, representa una porción menor del total según análisis de Xataka.',
      sourceName: 'Xataka — Netflix y los costes de producción de contenido streaming',
      sources: [
        {
          name: 'Xataka — Netflix gasta 17.000M$ en contenido e ingresa 45.200M$',
          url: 'https://www.xataka.com/streaming/netflix-gasta-17-000-millones-producir-contenido-a-youtube-se-hacen-gratis-eso-youtube-esta-ganando-partida',
        },
      ],
    },
    'amazon-prime-subscription-revenue': {
      title: 'Gasto en Suscripciones de Amazon Prime',
      subtitle: 'Gasto global de 49.620 millones de dólares anuales en servicios de suscripción (Prime, Video, Music)',
      description:
        'Amazon no desglosa públicamente de forma exacta cuánto gastan los usuarios solo por Prime Video, ya que el servicio viene incluido dentro del paquete global de Amazon Prime. Sin embargo, el gasto total de los usuarios en servicios de suscripción de la compañía (que incluye Prime, música, libros y vídeo digital) ascendió a 49.620 millones de dólares a nivel mundial según Marketplace Pulse.',
      sourceName: 'Marketplace Pulse & Amazon SEC Filings',
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
    },
    'disney-dtc-streaming-revenue': {
      title: 'Gasto de Usuarios en Disney Streaming (DTC)',
      subtitle: 'Gasto anual estimado entre 22.000M y 25.000M$ USD en Disney+, Hulu y ESPN+ ($23.500M USD de media)',
      description:
        'Los usuarios de The Walt Disney Company gastan cerca de 22.000 a 25.000 millones de dólares al año (media estimada de 23.500 millones de USD) en su división de Venta Directa al Consumidor (DTC), que agrupa principalmente las suscripciones de streaming de Disney+, Hulu y ESPN+, además de una porción menor en compras dentro de estas plataformas según The Motley Fool.',
      sourceName: 'The Motley Fool — Disney Streaming Profit Analysis',
      sources: [
        {
          name: 'The Motley Fool — How High Can Disney Streaming Profit Go?',
          url: 'https://www.fool.com/investing/2026/03/29/how-high-can-disney-streaming-profit-go/',
        },
      ],
    },
    'warner-bros-discovery-max-revenue': {
      title: 'Gasto de Usuarios en Max (HBO)',
      subtitle: 'Gasto anual estimado entre 10.000M$ y 11.000M$ USD en su división global de streaming DTC ($10.500M USD de media)',
      description:
        'Los abonados de Warner Bros. Discovery (propietaria de HBO/Max) gastan alrededor de 10.000 a 11.000 millones de dólares al año (media estimada de 10.500 millones de USD) en su división global de streaming (DTC), donde la inmensa mayoría proviene de las cuotas de suscripción de los usuarios según datos reportados por Señal News.',
      sourceName: 'Señal News — Warner Bros. Discovery Financial & Streaming Report',
      sources: [
        {
          name: 'Señal News — Warner Bros. Discovery Ends 2025 Under Pressure Despite Streaming Gains',
          url: 'https://senalnews.com/en/data/warner-bros-discovery-ends-2025-under-pressure-despite-streaming-gains',
        },
      ],
    },
    'twitch-annual-revenue': {
      title: 'Gasto de Usuarios en Twitch',
      subtitle: 'Gasto global estimado entre 1.800M$ y 1.900M$ USD al año ($1.850M USD de media)',
      description:
        'Los usuarios y patrocinadores en Twitch gastan aproximadamente entre 1.800 y 1.900 millones de dólares al año (media estimada de 1.850 millones de USD) a través de suscripciones de canal, bits/donaciones y campañas publicitarias durante transmisiones en vivo según Business of Apps.',
      sourceName: 'Business of Apps — Twitch Revenue & Usage Statistics',
      sources: [
        {
          name: 'Business of Apps — Twitch Statistics (Revenue & Subscriptions)',
          url: 'https://www.businessofapps.com/data/twitch-statistics/',
        },
      ],
    },
    'global-cocaine-opioids-spending': {
      title: 'Gasto en Cocaína y Opiáceos',
      subtitle: 'Gasto minorista estimado de 245.000 millones de dólares anuales a nivel global',
      description:
        'El gasto ilegal global combinado en cocaína y opiáceos se estima entre 220.000 y 270.000 millones de dólares anuales a nivel de consumo minorista (media de 245.000 millones de USD), formando una parte crítica de los flujos de consumo ilícitos mundiales mapeados por la Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC).',
      sourceName: 'UNODC & Análisis Internacional de Narcotráfico',
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
    },
    'global-illicit-firearms-spending': {
      title: 'Gasto en Tráfico Ilegal de Armas de Fuego',
      subtitle: 'Gasto estimado en 1.000 millones de dólares anuales a nivel mundial',
      description:
        'Según la Oficina de Naciones Unidas contra la Droga y el Delito (UNODC), los compradores gastan unos 1.000 millones de dólares anuales en el comercio ilegal de armas. Con ellas, todas las partes enfrentadas libran sus guerras en África, Oriente Medio, América Latina y Asia.',
      sourceName: 'UNODC & El Quinto',
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
    },
    'global-cybercrime-losses': {
      title: 'Pérdidas Mundiales por Ciberdelincuencia',
      subtitle: 'Coste económico global del ciberdelito proyectado en 10,8 billones de dólares anuales',
      description:
        'Las pérdidas globales causadas por la ciberdelincuencia alcanzan los 10,8 billones de dólares a escala mundial en 2026, abarcando robo de datos, extorsión digital, fraude informático e interrupción operativa de empresas y gobiernos.',
      sourceName: 'Cybersecurity Ventures — 500 Ransomware & Cybercrime Statistics for 2026',
      sources: [
        {
          name: 'Cybersecurity Ventures — Reporte Oficial de Ciberdelincuencia 2026',
          url: 'https://cybersecurityventures.com/500-ransomware-statistics-for-2026/',
        },
      ],
    },
    'global-ransomware-damages': {
      title: 'Daños Causados por Ransomware',
      subtitle: 'Coste económico global por secuestro de datos y chantaje digital de $74.000M al año',
      description:
        'Los daños específicos causados por los ataques de ransomware (secuestro informático de datos) superan los 74.000 millones de dólares anuales a escala mundial en 2026, incluyendo pagos de rescate, tiempos de inactividad e investigación forense.',
      sourceName: 'Cybersecurity Ventures — 500 Ransomware Statistics for 2026',
      sources: [
        {
          name: 'Cybersecurity Ventures — 500 Estadísticas de Ransomware para 2026',
          url: 'https://cybersecurityventures.com/500-ransomware-statistics-for-2026/',
        },
      ],
    },
    'global-money-laundering-total': {
      title: 'Blanqueo de Capitales Mundial',
      subtitle: 'Volumen estimado entre 1,5 y 2,85 billones de dólares anuales (2,17 Billones de USD de media)',
      description:
        'Se calcula que cada año se blanquean en el mundo entre 715.000 millones y 2 billones de euros (entre 1,5 y 2,85 billones de dólares), lo que equivale aproximadamente al 2% y al 5% del Producto Interior Bruto (PIB) mundial según datos infográficos del Consejo Europeo.',
      sourceName: 'Consejo de la Unión Europea — Lucha contra el blanqueo de capitales',
      sources: [
        {
          name: 'Consejo Europeo — Infografía sobre la Lucha contra el Blanqueo de Capitales',
          url: 'https://www.consilium.europa.eu/es/infographics/anti-money-laundering/',
        },
      ],
    },
    'global-black-market-economy': {
      title: 'Mercado Negro y Economía Ilícita Global',
      subtitle: 'Volumen económico promedio estimado entre 7 y 15 billones de dólares anuales (11,5 Billones de USD)',
      description:
        'El mercado negro y la economía ilícita global generan entre el 8% y el 15% del Producto Interior Bruto (PIB) mundial, según estimaciones del Fondo Monetario Internacional (FMI) e investigaciones sobre crimen organizado. Esto representa una media estimada de 11,5 billones de dólares anuales.',
      sourceName: 'El País & Fondo Monetario Internacional (FMI)',
      sources: [
        {
          name: 'El País — El colosal tamaño del mercado negro y la economía ilícita en el mundo (FMI)',
          url: 'https://elpais.com/economia/2019/09/21/actualidad/1569062038_189861.html',
        },
      ],
    },
    'global-military-aircraft-market': {
      title: 'Gasto en Aviación Militar',
      subtitle: 'Valoración actual de 67.000M$ USD anuales en aviación militar (52.800M$ en cazas de combate)',
      description:
        'El gasto mundial en aviación militar alcanza una valoración actual sobre los 67.000 millones de dólares anuales, destacando el segmento exclusivo de cazas y aviones de combate con 52.800 millones de dólares según el informe de mercado de Fortune Business Insights.',
      sourceName: 'Fortune Business Insights — Informe del Mercado de Aviones Militares',
      sources: [
        {
          name: 'Fortune Business Insights — Tamaño y Análisis del Mercado de Aviación Militar',
          url: 'https://www.fortunebusinessinsights.com/es/military-aircraft-market-102771',
        },
      ],
    },
    'eu-defense-spending-total': {
      title: 'Gasto en Defensa de la Unión Europea',
      subtitle: 'Presupuesto militar consolidado de los Estados miembros estimado en 454.000 millones de euros en 2026',
      description:
        'En 2025, el gasto en defensa de los Estados miembros de la Unión Europea aumentó por undécimo año consecutivo, alcanzando los 418.000 millones de euros. En 2026 se calcula que alcanzará un récord de 454.000 millones de euros (~494.860 millones de dólares USD) según datos oficiales del Consejo Europeo.',
      sourceName: 'Consejo de la Unión Europea — La defensa de la UE en cifras',
      sources: [
        {
          name: 'Consejo Europeo — La defensa de la UE en cifras (Cifras clave)',
          url: 'https://www.consilium.europa.eu/es/policies/defence-numbers/',
        },
      ],
    },
    'global-nuclear-weapons-spending': {
      title: 'Gasto Mundial en Armas Nucleares',
      subtitle: 'Récord histórico de 118.800 millones de dólares al año (~3.768 $ por segundo)',
      description:
        'El gasto mundial en el mantenimiento, desarrollo y modernización de arsenales nucleares alcanzó un récord histórico de 118.800 millones de dólares (unos 3.768 dólares por segundo) registrado por la Campaña Internacional para Abolir las Armas Nucleares (ICAN).',
      sourceName: 'ICAN & JusPax — Gasto mundial en armas nucleares',
      sources: [
        {
          name: 'ICAN — Informe de Gasto Mundial en Armas Nucleares y Modernización',
          url: 'https://www.juspax-es.org/l/premeditado-gasto-mundial-en-armas-nucleares-en-2025/',
        },
      ],
    },
    'global-military-spending': {
      title: 'Gasto Militar Mundial',
      subtitle: 'Presupuesto armamentístico global y gasto en defensa de todos los países por año',
      description:
        'El gasto militar mundial alcanzó la cifra récord de 2,89 billones de dólares (2.887.000 millones de USD). Este incremento global del 2,9% refleja el undécimo año consecutivo de aumento en la inversión en defensa, impulsado principalmente por la escalada en Europa y Asia frente a los conflictos activos según datos de SIPRI y APDHA.',
      sourceName: 'Deutsche Welle (DW), SIPRI & APDHA',
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
    },
    'global-narcotics-spending': {
      title: 'Gasto Mundial en Estupefacientes',
      subtitle: 'Volumen económico estimado del tráfico ilegal de drogas a escala mundial por año',
      description:
        'Gasto global estimado en estupefacientes y sustancias ilícitas que alcanza los 750.000 millones de dólares anuales, representando una de las mayores actividades de la economía subterránea mundial según análisis sobre el peso de la actividad criminal.',
      sourceName: 'Ethic — ¿Cuánto pesa la actividad criminal en la economía mundial?',
    },
    'spain-individual-monthly-food-cost': {
      title: 'Gasto en Comida de 1 Persona en España',
      subtitle: 'Presupuesto mensual medio estimado de 250 € para alimentación y cesta de la compra de un habitante',
      description:
        'Gasto promedio en alimentación y cesta de la compra para una persona residente que vive sola en España, estimado en 250 € al mes (3.000 € anuales) según datos de CaixaBank y análisis de consumo de Telecinco Noticias.',
      sourceName: 'CaixaBank & Telecinco Noticias',
    },
    'individual-monthly-food-cost': {
      title: 'Gasto de una Persona en Comida al Mes',
      subtitle: 'Coste individual medio en supermercado y restauración mensual por habitante',
      description:
        'Gasto promedio individual de una persona adulta en alimentación doméstica y restauración, estimado en 220 € a 310 € mensuales por persona en España.',
      sourceName: 'INE Encuesta de Presupuestos Familiares & Eurostat',
    },
    'government-styling-makeup-spending': {
      title: 'Gasto en Maquillaje y Estilismo de Altos Cargos Públicos',
      subtitle: 'Presupuesto de contratación pública de estilismo, peluquería e imagen para comparecencias',
      description:
        'Importe de los contratos públicos licitados para servicios de peluquería, maquillaje y asesoría de imagen en actos institucionales y entrevistas oficiales de miembros del Gobierno.',
      sourceName: 'Plataforma de Contratación del Sector Público & Portal de Transparencia',
    },
    'spain-total-annual-public-spending': {
      title: 'Gasto Público Total del Estado Español al Año',
      subtitle: 'Presupuesto consolidado de la Administración Central, Comunidades Autónomas y Ayuntamientos',
      description:
        'Gasto público conjunto de todas las administraciones públicas de España (Administración General del Estado, 17 CC.AA., Seguridad Social y corporaciones locales). En 2024-2026 supera los 645.000 millones de euros anuales.',
      sourceName: 'Ministerio de Hacienda & Banco de España',
    },
    'spain-social-expenditure-total': {
      title: 'Gasto Social Total en España',
      subtitle: 'Presupuesto agregado en pensiones, sanidad pública, educación y servicios sociales',
      description:
        'Gasto total del Estado español destinado a políticas del Estado de Bienestar: sistema nacional de salud, educación pública, pensiones y servicios sociales, representando más del 56% del presupuesto público total.',
      sourceName: 'Eurostat & Estadística de Gasto Social de España',
    },
    'spain-public-spending-gdp-percentage': {
      title: 'Gasto Público de España respecto al PIB (44,6%)',
      subtitle: 'Porcentaje del Producto Interior Bruto canalizado a través del sector público',
      description:
        'El gasto de las administraciones públicas españolas representa exactamente el 44,6% del Producto Interior Bruto (PIB) nacional, situándose en la media de la Unión Europea y la Eurozona.',
      sourceName: 'Banco de España, INE & Comisión Europea (AMECO)',
    },
    'global-public-expenditure-total': {
      title: 'Gasto Público Mundial Total',
      subtitle: 'Presupuesto fiscal consolidado de todos los gobiernos y estados soberanos del planeta',
      description:
        'Volumen financiero total administrado anualmente por los gobiernos soberanos del mundo en servicios públicos, infraestructuras, defensa, sanidad, educación y deuda pública (~32% del PIB global).',
      sourceName: 'Fondo Monetario Internacional (FMI) & Banco Mundial',
    },
    'usa-individual-monthly-cost-of-living': {
      title: 'Gasto Medio Mensual de una Persona en EE.UU.',
      subtitle: 'Coste medio de vida mensual de una persona soltera en EE.UU. (alquiler, comida, seguro médico y transporte)',
      description:
        'El gasto medio para vivir en EE.UU. ronda entre los $3.200 y $4.200 mensuales para una persona soltera ($38.000 a $50.000 anuales), distribuidos principalmente en vivienda (alquiler medio de $1.400-$1.900), seguro médico privado, coche y alimentación.',
      sourceName: 'U.S. Bureau of Labor Statistics (BLS) & MIT Living Wage Calculator',
    },
    'usa-supermarket-grocery-spending': {
      title: 'Gasto en Supermercado en Estados Unidos al Mes',
      subtitle: 'Presupuesto medio mensual en alimentación y productos de primera necesidad en EE.UU.',
      description:
        'Una persona en EE.UU. gasta en promedio entre $420 y $580 al mes en la cesta del supermercado para cocinar en casa. Los precios varían significativamente según el estado (California y Nueva York siendo los más caros).',
      sourceName: 'USDA Economic Research Service & U.S. Census Bureau',
    },
    'usa-federal-minimum-wage-annual': {
      title: 'Sueldo Mínimo en Estados Unidos Mensual y Anual',
      subtitle: 'Salario mínimo federal ($7,25/h = $1.256/mes) vs. medias estatales ($15-$17/h = $2.600-$2.950/mes)',
      description:
        'El salario mínimo federal en EE.UU. está fijado por ley en $7,25 por hora ($1.256 brutos mensuales a 40h semanales = $15.080 al año). No obstante, más de 30 estados han legislado salarios mínimos superiores que oscilan entre $15 y $17,50 por hora.',
      sourceName: 'U.S. Department of Labor (DOL) & Economic Policy Institute',
    },
    'cost-of-living-spain-vs-usa': {
      title: 'Costo de Vida: España vs. Estados Unidos',
      subtitle: 'El costo de vida global en EE.UU. es entre un 65% y un 85% más alto que en España',
      description:
        'Vivir en Estados Unidos es considerablemente más caro que en España: la vivienda en alquiler es un 110% superior en EE.UU., la atención sanitaria y seguros son hasta un 400% más caros, y la cesta de la compra cuesta entre un 40% y un 70% más en suelo estadounidense.',
      sourceName: 'OECD Better Life Index, Numbeo Cost of Living & Eurostat',
    },
    'july-fourth-fireworks-spending': {
      title: 'Gasto Anual en Fuegos Artificiales y 4 de Julio',
      subtitle: 'Consumo mundial y estadounidense en espectáculos pirotécnicos y fuegos artificiales recreativos',
      description:
        'Gasto global en la industria pirotécnica. Solo en Estados Unidos durante las celebraciones del 4 de Julio (Día de la Independencia) los consumidores y ayuntamientos gastan más de 1.500 millones de dólares en fuegos artificiales.',
      sourceName: 'American Pyrotechnics Association (APA) & U.S. CPSC',
    },
    'uk-asylum-seekers-support-spending': {
      title: 'Gasto en Solicitantes de Asilo e Inmigración en Reino Unido',
      subtitle: 'Presupuesto anual del Home Office en alojamiento hotelero, tramitación y manutención de asilo',
      description:
        'Gasto total del gobierno británico (Home Office) dedicado a la tramitación de expedientes de asilo, provisión de alojamiento temporal en hoteles y centros asistenciales, y ayudas económicas de manutención.',
      sourceName: 'UK Home Office & National Audit Office (NAO)',
    },
    'us-snap-food-stamps-spending': {
      title: 'Presupuesto del Programa SNAP (Cupones de Alimentos en EE.UU.)',
      subtitle: 'Financiación federal del programa de asistencia nutricional suplementaria para más de 41 millones de beneficiarios',
      description:
        'Gasto federal del Departamento de Agricultura de EE.UU. (USDA) en el programa SNAP (Supplemental Nutrition Assistance Program), que proporciona transferencias económicas directas para la compra de alimentos a familias de bajos ingresos.',
      sourceName: 'USDA Food and Nutrition Service (FNS) & Congressional Budget Office (CBO)',
    },
    'gta-6-development-marketing-budget': {
      title: 'Presupuesto de Desarrollo y Marketing de GTA 6',
      subtitle: 'Coste histórico acumulado de producción, tecnología de motor gráfico y campaña de lanzamiento mundial',
      description:
        'Presupuesto total estimado para Grand Theft Auto VI (Rockstar Games / Take-Two Interactive), considerado el producto de entretenimiento más caro de la historia humana, combinando más de 10 años de desarrollo, captura de movimiento y publicidad global.',
      sourceName: 'Take-Two Interactive SEC Filings & Industry Financial Analyst Reports',
    },
    'global-cancer-research-spending': {
      title: 'Gasto Mundial en Investigación del Cáncer al Año',
      subtitle: 'Financiación en oncología, ensayos clínicos, inmunoterapia y desarrollo de fármacos antitumorales',
      description:
        'Inversión global combinada de agencias públicas (como el NCI estadounidense y programas Horizonte Europa), fundaciones benéficas y la industria farmacéutica en investigación biomédica y ensayos clínicos contra el cáncer.',
      sourceName: 'National Cancer Institute (NCI), World Health Organization (IARC) & Cancer Research UK',
    },
    'uk-welfare-benefits-total-spending': {
      title: 'Gasto Total en Prestaciones y Ayudas Sociales en Reino Unido',
      subtitle: 'Nómina fiscal anual en pensiones de estado, Universal Credit, discapacidad y subsidios de vivienda',
      description:
        'Gasto anual total administrado por el Departamento de Trabajo y Pensiones (DWP) del Reino Unido para financiar las pensiones públicas de jubilación, el Universal Credit y las prestaciones por discapacidad y dependencia.',
      sourceName: 'UK Department for Work and Pensions (DWP) & Office for Budget Responsibility (OBR)',
    },
    'global-space-exploration-spending': {
      title: 'Inversión Pública en Exploración Espacial',
      subtitle: 'La inversión pública en exploración espacial alcanza los 119.000 millones de euros anuales en el mundo',
      description:
        'El presupuesto global para la exploración espacial ha mostrado un crecimiento significativo en los últimos años. Se estima que los gobiernos de todo el mundo realizarán una inversión pública global en el sector espacial de 119.000 millones de euros, impulsando misiones lunares, satélites y desarrollo tecnológico orbital.',
      sourceName: 'FasterCapital — Desafío de costos de la exploración espacial',
    },
    'mega-sporting-events-organization-cost': {
      title: 'Coste de Organización de Megaeventos Deportivos (Mundial y JJ.OO.)',
      subtitle: 'Gasto promedio de organización, construcción de estadios, infraestructuras y seguridad en macrocompeticiones',
      description:
        'Gasto promedio anualizado en la preparación y organización de las mayores competiciones deportivas del planeta (Copa Mundial de la FIFA, Juegos Olímpicos de Verano e Invierno, Super Bowl y UEFA Champions League).',
      sourceName: 'Comité Olímpico Internacional (COI) & Informes Financieros de la FIFA',
    },
    'global-military-defence-spending': {
      title: 'Gasto Militar y de Defensa Mundial',
      subtitle: 'Presupuestos combinados de defensa, compras armamentísticas, tropas e investigación bélica de todos los países',
      description:
        'Gasto militar global anual de las fuerzas armadas de todos los países soberanos. Liderado por Estados Unidos, China, Rusia, India y los estados miembros de la OTAN en armamento y tropas.',
      sourceName: 'Stockholm International Peace Research Institute (SIPRI)',
    },
    'global-ai-artificial-intelligence-spending': {
      title: 'Gasto Mundial en Inteligencia Artificial (IA)',
      subtitle: 'Inversión anual en centros de datos, chips semiconductores (GPUs), modelos LLM y software empresarial de IA',
      description:
        'Inversión global de corporaciones tecnológicas e industrias en infraestructura de inteligencia artificial generativa, hardware de cómputo avanzado, chips aceleradores y despliegue de modelos de IA.',
      sourceName: 'International Data Corporation (IDC Worldwide AI Tracker) & Gartner',
    },
    'global-healthcare-total': {
      title: 'Gasto Sanitario Mundial Total',
      subtitle: 'Gasto agregado en hospitales, tratamientos, fármacos y sistemas sanitarios de todo el planeta',
      description:
        'Gasto total del planeta en atención médica y servicios de salud pública y privada, incluyendo infraestructuras hospitalarias, investigación médica, medicamentos recetados y aseguradoras (~10% del PIB mundial).',
      sourceName: 'Organización Mundial de la Salud (OMS / WHO) & Banco Mundial',
    },
    'global-advertising-marketing-spending': {
      title: 'Gasto Mundial en Publicidad y Marketing',
      subtitle: 'Inversión global de empresas en publicidad digital, redes sociales, televisión y medios exteriores',
      description:
        'Gasto global en medios publicitarios, incluyendo Google Ads, Meta, televisión, prensa, radio y publicidad exterior, rozando el billón de dólares anuales a nivel mundial.',
      sourceName: 'WARC Global Ad Spend Outlook & GroupM',
    },
    'global-economic-cost-of-war': {
      title: 'Impacto Económico Mundial de las Guerras y Conflictos',
      subtitle: 'Coste global agregado de destrucción, refugiados, pérdidas de PIB y gasto armamentístico en guerras activas',
      description:
        'Impacto económico global de la violencia armada y las guerras en el planeta. Incluye la destrucción de infraestructuras, gasto bélico directo, pérdidas de productividad y ayuda humanitaria a refugiados según el Institute for Economics and Peace (~13% del PIB mundial).',
      sourceName: 'Institute for Economics and Peace (IEP Global Peace Index) & World Bank',
    },
    'global-electricity-power-spending': {
      title: 'Gasto Mundial en Electricidad y Generación Eléctrica',
      subtitle: 'Gasto global del consumo eléctrico en hogares, fábricas, centros de datos e infraestructuras',
      description:
        'Gasto total del planeta en consumo de energía eléctrica generada por fuentes renovables, nuclear, gas y carbón, impulsado fuertemente por la electrificación del transporte y centros de datos de IA.',
      sourceName: 'Agencia Internacional de la Energía (AIE / IEA) & BloombergNEF',
    },
    'global-crude-oil-spending-annual': {
      title: 'Gasto Mundial Anual en Petróleo Crudo',
      subtitle: 'Consumo diario de más de 102 millones de barriles de crudo para transporte, petroquímica e industria',
      description:
        'Valor económico total del petróleo crudo consumido anualmente en el mundo (~102 millones de barriles por día a un precio promedio de $78-$85 por barril) refinado para gasolinas, diésel, queroseno de aviación y plásticos.',
      sourceName: 'International Energy Agency (IEA) & OPEC Annual Statistical Bulletin',
    },
    'global-christmas-holiday-spending': {
      title: 'Gasto Mundial en Navidad y Campaña Navideña',
      subtitle: 'Consumo en regalos, juguetes, alimentación festiva, decoraciones y viajes durante la temporada de fin de año',
      description:
        'Gasto de los consumidores en todo el planeta durante la campaña de Navidad y fiestas de fin de año (Black Friday, Nochebuena, Reyes y Año Nuevo), concentrado principalmente en compras minoristas, juguetes, gastronomía festiva y viajes familiares.',
      sourceName: 'National Retail Federation (NRF) & Global Retail Analytics',
    },
    'annual-cost-of-owning-a-dog': {
      title: 'Coste Anual de Tener un Perro y Cuidado Canino',
      subtitle: 'Gasto medio anual de 1.400 € a 2.400 $ por perro en alimentación, veterinario, vacunas y seguro',
      description:
        'Inversión anual media de una familia en el cuidado de un perro doméstico (estimada entre 1.400 € y 2.400 $ al año por mascota), sumando pienso de calidad, visitas veterinarias, desparasitación, peluquería y vacunas obligatorias.',
      sourceName: 'American Pet Products Association (APPA) & FEDIAF',
    },
    'annual-cost-of-owning-a-cat': {
      title: 'Coste Anual de Tener un Gato y Cuidado Felino',
      subtitle: 'Gasto medio anual de 950 € a 1.600 $ por gato en arena, nutrición, prevención veterinaria y accesorios',
      description:
        'Gasto promedio anual para mantener un gato en el hogar (entre 950 € y 1.600 $ por gato al año), incluyendo alimentación húmeda y seca, arena higiénica, revisiones veterinarias periódicas y rascadores.',
      sourceName: 'American Pet Products Association (APPA) & PDSA Animal Wellbeing',
    },
    'annual-cost-of-owning-a-horse': {
      title: 'Coste Anual de Mantener un Caballo e Industria Hípica',
      subtitle: 'Coste anual de 4.500 € a 12.000 $ por caballo en pupilaje, herraje, forraje y cuidados ecuestres',
      description:
        'Gasto promedio anual para el mantenimiento de un caballo de recreo o deportivo, que oscila entre 4.500 € y 12.000 $ anuales en concepto de estabulación en hípica, forraje, herradores profesionales y chequeos veterinarios.',
      sourceName: 'British Equestrian Trade Association (BETA) & American Horse Council',
    },
    'uk-state-pension-annual-cost': {
      title: 'Gasto Anual en Pensiones de Estado del Reino Unido',
      subtitle: 'Nómina fiscal del Estado británico abonada a más de 12,6 millones de jubilados en UK',
      description:
        'Gasto anual directo del gobierno británico en el pago de la pensión estatal básica y nueva State Pension para más de 12,6 millones de personas jubiladas en el Reino Unido (~£125 billion).',
      sourceName: 'UK Department for Work and Pensions (DWP) & OBR',
    },
    'annual-cost-of-amazon-prime': {
      title: 'Facturación Global por Suscripciones de Amazon Prime',
      subtitle: 'Ingresos mundiales generados por más de 200 millones de suscriptores al servicio Prime ($139/año o 49,90€/año)',
      description:
        'Gasto anual de los consumidores en el servicio de suscripción Amazon Prime a nivel mundial, que cuenta con más de 200 millones de miembros activos suscritos a entregas gratuitas y Prime Video.',
      sourceName: 'Amazon.com, Inc. SEC Form 10-K & CIRP',
    },
    'annual-cost-of-owning-a-pool': {
      title: 'Coste Anual de Mantenimiento de una Piscina',
      subtitle: 'Gasto de 3.000 $ a 5.000 $ anuales por piscina en cloro, químicos, filtración, agua y electricidad',
      description:
        'Gasto anual recurrente de los propietarios de piscinas residenciales para su mantenimiento higiénico y operativo (entre 3.000 $ y 5.000 $ al año por piscina), incluyendo productos químicos, electricidad y agua.',
      sourceName: 'Pool & Hot Tub Alliance (PHTA) & HomeAdvisor',
    },
    'global-video-games-purchases-spending': {
      title: 'Gasto Mundial en Compra de Videojuegos',
      subtitle: 'Venta global de juegos de consola, PC, móviles, microtransacciones y suscripciones gaming',
      description:
        'Gasto total de los consumidores en la compra de títulos de videojuegos, compras dentro de la aplicación (in-game items), suscripciones (PlayStation Plus, Xbox Game Pass) y descargas digitales para PC, consolas y smartphones.',
      sourceName: 'Newzoo Global Games Market Report & ESA',
    },
    'global-coffee-purchases-spending': {
      title: 'Gasto Mundial en Compra y Consumo de Café',
      subtitle: 'Consumo diario de más de 2.250 millones de tazas de café en cafeterías y supermercados',
      description:
        'Gasto global de los consumidores en café tostado, café molido, cápsulas en supermercados y bebidas servidas en cafeterías y cadenas de café especializadas en todo el planeta.',
      sourceName: 'Organización Internacional del Café (OIC / ICO) & Statista',
    },
    'global-bottled-water-purchases-spending': {
      title: 'Gasto Mundial en Compra de Agua Embotellada',
      subtitle: 'Consumo anual de más de 390.000 millones de litros de agua mineral y purificada envasada',
      description:
        'Gasto comercial global en botellas y garrafas de agua mineral natural, agua purificada y agua con gas, superando los 390.000 millones de litros anuales adquiridos por particulares y empresas.',
      sourceName: 'International Bottled Water Association (IBWA) & UNU-INWEH',
    },
    'global-illicit-arms-trafficking-spending': {
      title: 'Gasto en Compra y Tráfico de Armas Ilegales',
      subtitle: 'Mercado negro global de armas cortas, fusiles de asalto y municiones ilícitas',
      description:
        'Estimación del valor del tráfico clandestino y comercio ilegal de armas de fuego y municiones en el mercado negro internacional según la Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC) y el Small Arms Survey.',
      sourceName: 'UN Office on Drugs and Crime (UNODC) & Small Arms Survey',
    },
    'global-cryptocurrency-purchases-spending': {
      title: 'Gasto y Adquisición Global de Criptomonedas',
      subtitle: 'Flujo neto anual de dinero fiat inyectado por particulares e instituciones en Bitcoin, Ethereum y activos digitales',
      description:
        'Volumen estimado de capital fiduciario nuevo invertido anualmente por inversores minoristas e institucionales para comprar Bitcoin, Ethereum, stablecoins y criptoactivos a través de exchanges regulados y pasarelas de pago.',
      sourceName: 'Chainalysis Global Crypto Adoption Index & CoinGecko',
    },
    'ai-datacenters-chatgpt-spending': {
      title: 'Gasto en Centros de Datos de IA y ChatGPT',
      subtitle: 'Inversión récord en clústeres de servidores GPU, refrigeración líquida y energía para modelos de IA como ChatGPT',
      description:
        'Gasto de capital (CapEx) global de hiperescaladores (Microsoft Azure, AWS, Google Cloud, Meta y OpenAI) dedicado exclusivamente a la construcción y equipamiento de centros de datos para entrenamiento e inferencia de Inteligencia Artificial como ChatGPT.',
      sourceName: 'Dell\'Oro Group Data Center CapEx & Synergy Research',
    },
    'weight-loss-drugs-ozempic-spending': {
      title: 'Gasto en Medicamentos para Perder Peso (Ozempic y GLP-1)',
      subtitle: 'Consumo mundial en fármacos inyectables GLP-1 contra la obesidad y diabetes (Ozempic, Wegovy, Mounjaro)',
      description:
        'Gasto anual global de pacientes, aseguradoras médicas y sistemas sanitarios en la compra de tratamientos agonistas del receptor GLP-1 para la pérdida de peso y control glucémico (Ozempic, Wegovy de Novo Nordisk y Mounjaro, Zepbound de Eli Lilly).',
      sourceName: 'IQVIA Global Medicine Spending & Novo Nordisk / Eli Lilly Reports',
    },
    'top-10-football-clubs-transfer-spending': {
      title: 'Gasto en Fichajes de los 10 Clubes de Fútbol Top del Mundo',
      subtitle: 'Inversión anual combinada en traspasos de jugadores de Real Madrid, Manchester City, Chelsea, PSG, Arsenal y gigantes europeos',
      description:
        'Gasto agregado anual en fichajes de futbolistas ejecutado por los 10 clubes más ricos del planeta (Real Madrid, Man City, Chelsea, PSG, Bayern Múnich, Arsenal, Manchester United, Barcelona, Liverpool y Tottenham) en las ventanas de transferencias de verano e invierno.',
      sourceName: 'Transfermarkt & FIFA TMS (Transfer Matching System)',
    },
    'top-10-football-clubs-total-payroll-spending': {
      title: 'Masa Salarial y Sueldos de los 10 Clubes de Fútbol Top',
      subtitle: 'Nómina anual de salarios a futbolistas estrella y cuerpos técnicos de la élite del fútbol mundial',
      description:
        'Gasto total en masa salarial y retribuciones de plantilla deportiva de los 10 clubes de fútbol con mayores ingresos del mundo, según el informe anual de finanzas de clubes de la UEFA y la Deloitte Football Money League.',
      sourceName: 'Deloitte Football Money League & UEFA Club Licensing Benchmark',
    },
    'global-football-transfers-spending': {
      title: 'Gasto Mundial Total en Fichajes de Fútbol',
      subtitle: 'Volumen financiero total de traspasos internacionales y nacionales registrados en todas las ligas FIFA',
      description:
        'Monto total de dinero pagado en traspasos de jugadores profesionales de fútbol a nivel planetario en todas las confederaciones (UEFA, CONMEBOL, Premier League, LaLiga, Serie A, Saudi Pro League, etc.) según el informe oficial de la FIFA.',
      sourceName: 'FIFA Global Transfer Report & TMS',
    },
    'global-illicit-drug-trade': {
      title: 'Gasto Mundial en Sustancias Ilícitas y Narcotráfico',
      subtitle: 'Mercado clandestino global de cocaína, opiáceos, cannabis y drogas sintéticas',
      description:
        'Valor estimado del mercado ilegal mundial de estupefacientes y sustancias psicotrópicas ilícitas según el Informe Mundial sobre las Drogas de la Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC).',
      sourceName: 'Oficina de la ONU contra la Droga y el Delito (UNODC)',
    },
    'illicit-stolen-art-antiquities-trafficking': {
      title: 'Tráfico Ilícito de Obras de Arte y Bienes Culturales',
      subtitle: 'Mercado negro internacional de arte robado, expolio arqueológico y falsificaciones históricas',
      description:
        'Volumen financiero clandestino generado anualmente por el saqueo de yacimientos arqueológicos, robo en museos y comercio ilícito de obras maestras y bienes culturales según la UNESCO e INTERPOL.',
      sourceName: 'UNESCO & Unidad de Obras de Arte de INTERPOL',
    },
    'global-counterfeit-pirated-goods-trade': {
      title: 'Gasto Mundial en Productos Falsificados y Piratería',
      subtitle: 'Comercio global de ropa, calzado, electrónica de imitación y medicamentos falsos',
      description:
        'Valor del comercio transfronterizo de bienes falsificados y pirateados (moda de lujo falsa, componentes electrónicos falsificados, cosméticos y medicamentos adulterados) según la OCDE y la EUIPO (~2,5% del comercio mundial).',
      sourceName: 'OCDE & Oficina de Propiedad Intelectual de la Unión Europea (EUIPO)',
    },
    'global-cybercrime-ransomware-damages': {
      title: 'Pérdidas Mundiales por Cibercrimen y Ransomware',
      subtitle: 'Coste global del robo de datos, extorsión digital, ciberfraude y rescates informáticos',
      description:
        'Coste económico anual infligido por ataques cibernéticos, grupos de ransomware, robo de propiedad intelectual y fraude digital corporativo en todo el mundo según Cybersecurity Ventures y el FBI IC3.',
      sourceName: 'Cybersecurity Ventures & FBI Internet Crime Complaint Center (IC3)',
    },
    'cristiano-ronaldo-annual-earnings-wealth': {
      title: 'Ingresos Anuales y Fortuna de Cristiano Ronaldo (CR7)',
      subtitle: 'Sueldo en Al-Nassr, derechos de imagen y contratos publicitarios mundiales (Nike, Binance, marcas propias)',
      description:
        'Ingresos anuales totales de Cristiano Ronaldo, combinando su salario astronómico en el club saudí Al-Nassr (~200 M$) y más de 60 M$ en patrocinios comerciales globales (Nike, marcas de hoteles y fragancias CR7). Su patrimonio neto total estimado supera los 750 millones de dólares.',
      sourceName: 'Forbes The World\'s Highest-Paid Athletes & Bloomberg Billionaires Index',
    },
    'lionel-messi-annual-earnings-wealth': {
      title: 'Ingresos Anuales y Fortuna de Lionel Messi',
      subtitle: 'Salario en Inter Miami, participación en suscripciones de Apple TV MLS y contratos con Adidas y marcas globales',
      description:
        'Ganancias anuales globales de Lionel Messi que suman su ficha deportiva en el Inter Miami de la MLS, regalías por suscripciones de Apple TV MLS Season Pass y contratos multimillonarios de patrocinio con Adidas, Lay\'s y socios comerciales. Su patrimonio neto total estimado ronda los 650 millones de dólares.',
      sourceName: 'Forbes & Sportico Highest-Paid Athletes',
    },
    'lamine-yamal-annual-earnings-wealth': {
      title: 'Ingresos Anuales y Salario de Lamine Yamal',
      subtitle: 'Nómina profesional en el FC Barcelona, primas deportivas y contrato exclusivo multianual con Adidas',
      description:
        'Ingresos anuales estimados del joven astro del fútbol mundial Lamine Yamal (FC Barcelona y Selección Española), sumando su contrato deportivo profesional renovado, primas por títulos y su contrato publicitario a largo plazo como imagen global de Adidas.',
      sourceName: 'Capology Salary Database, Transfermarkt & Forbes Sports',
    },
    'china-military-defense-spending': {
      title: 'Gasto Militar y Presupuesto de Defensa de China',
      subtitle: 'Presupuesto oficial y estimado de las Fuerzas Armadas (EPL), modernización naval y arsenal estratégico',
      description:
        'Gasto anual militar total de la República Popular China para el Ejército Popular de Liberación (EPL), desarrollo de portaviones, cazas furtivos y disuasión nuclear según el SIPRI y el Ministerio de Finanzas de China.',
      sourceName: 'SIPRI & Ministerio de Finanzas de China',
    },
    'china-education-spending': {
      title: 'Gasto Público de China en Educación',
      subtitle: 'Financiación nacional de colegios públicos, universidades de élite e investigación académica',
      description:
        'Inversión fiscal y pública consolidada del gobierno central y gobiernos locales de China destinada al sistema educativo obligatorio, institutos técnicos y red universitaria (>4% del PIB).',
      sourceName: 'Ministerio de Educación de China & Oficina Nacional de Estadística (NBS)',
    },
    'china-research-development-spending': {
      title: 'Gasto de China en Investigación y Desarrollo (I+D)',
      subtitle: 'Inversión récord en semiconductores, robótica, inteligencia artificial, energía verde y ciencia espacial',
      description:
        'Gasto nacional bruto anual en I+D (GERD) de China sumando financiación estatal e inversión corporativa en tecnología punta y ciencia aplicada según la Oficina Nacional de Estadísticas y la OCDE.',
      sourceName: 'Oficina Nacional de Estadística de China (NBS) & OCDE',
    },
    'china-healthcare-spending': {
      title: 'Gasto de China en Sanidad y Salud Pública',
      subtitle: 'Presupuesto sanitario nacional, seguros médicos estatales y construcción de hospitales',
      description:
        'Gasto total en salud pública, cobertura médica universal, infraestructura hospitalaria y farmacopea en China según la Comisión Nacional de Salud (NHC) y la Organización Mundial de la Salud (OMS).',
      sourceName: 'Comisión Nacional de Salud de China (NHC) & OMS (WHO)',
    },
    'china-foreign-aid-belt-road-spending': {
      title: 'Gasto de China en Ayuda Exterior y Franja y la Ruta',
      subtitle: 'Financiación de infraestructuras globales, préstamos para desarrollo y cooperación bilateral (Belt and Road)',
      description:
        'Volumen anual de subvenciones, préstamos concesionales de desarrollo y proyectos de cooperación internacional ejecutados por la Agencia China CIDCA en África, Asia y Latinoamérica.',
      sourceName: 'AidData (William & Mary) & CIDCA China',
    },
    'china-lobbying-united-states-spending': {
      title: 'Gasto de China en Lobbying e Influencia en EE.UU.',
      subtitle: 'Fondos registrados en la Ley FARA por empresas estatales, medios y firmas de relaciones públicas chinas en Washington',
      description:
        'Gastos totales declarados anualmente ante el Departamento de Justicia de EE.UU. bajo la Ley FARA por parte de entidades chinas para relaciones públicas, asesoría política y medios de comunicación.',
      sourceName: 'OpenSecrets.org Foreign Lobby Watch & Departamento de Justicia de EE.UU. (FARA)',
    },
    'france-aid-support-ukraine-spending': {
      title: 'Gasto y Ayuda Militar de Francia para Ucrania',
      subtitle: 'Cañones CAESAR, misiles SCALP, blindados ligeros, ayuda humanitaria y aportaciones al fondo de la UE',
      description:
        'Aportación económica y militar anual de Francia para Ucrania que incluye armamento de defensa, formación de brigadas militares y paquetes de ayuda humanitaria según el Instituto Kiel y el Ministerio de las Fuerzas Armadas de Francia.',
      sourceName: 'Kiel Institute Ukraine Support Tracker & Ministerio de las Fuerzas Armadas de Francia',
    },
    'paris-2024-olympic-games-spending': {
      title: 'Gasto y Coste Total de los Juegos Olímpicos de París 2024',
      subtitle: 'Presupuesto de infraestructuras (SOLIDEO), comité organizador (COJO), seguridad y adecuación urbana',
      description:
        'Coste total consolidado de los Juegos Olímpicos y Paralímpicos de París 2024 (Villa Olímpica, Centro Acuático y despliegue operativo) auditado por el Tribunal de Cuentas de Francia.',
      sourceName: 'Tribunal de Cuentas de Francia (Cour des Comptes) & COJO París 2024',
    },
    'france-covid-19-pandemic-spending': {
      title: 'Gasto de Francia en la Crisis del COVID-19 («Cueste lo que cueste»)',
      subtitle: 'Financiación del escudo social y económico: ERTEs franceses, fondos de solidaridad y refuerzo hospitalario',
      description:
        'Gasto público y medidas extraordinarias de choque movilizadas por Francia durante la pandemia (ayudas a autónomos, compras de material sanitario y plan de reactivación) según el Tribunal de Cuentas y Bercy.',
      sourceName: 'Cour des Comptes & Ministerio de Economía y Finanzas de Francia (Bercy)',
    },
    'france-cleaning-seine-river-spending': {
      title: 'Gasto en Limpiar y Descontaminar el Río Sena (Plan Baignade)',
      subtitle: 'Megaobra hidráulica: megadepósito de tormentas de Austerlitz de 50.000 m³, saneamiento y red de colectores',
      description:
        'Inversión pública total de Francia para hacer el Sena apto para el baño en los Juegos Olímpicos y para la ciudadanía parisina, liderada por el megadepósito subterráneo de Austerlitz y la modernización de depuradoras.',
      sourceName: 'Prefectura de Île-de-France & Ayuntamiento de París (Plan Baignade)',
    },
    'france-youth-budget-spending': {
      title: 'Presupuesto del Estado Francés para la Juventud',
      subtitle: 'Financiación del Contrato de Compromiso Joven (CEJ), Pass Culture, becas CNOUS y ayudas al empleo juvenil',
      description:
        'Créditos presupuestarios del Estado francés destinados a políticas de emancipación juvenil, ayudas al alquiler y bono cultural para jóvenes de 18 años.',
      sourceName: 'Ministerio de Educación Nacional y Juventud de Francia & PGE',
    },
    'france-immigration-asylum-budget-spending': {
      title: 'Presupuesto del Estado Francés para Inmigración y Asilo',
      subtitle: 'Créditos de la Misión Inmigración y Asilo: subsidio ADA, centros de acogida CADA, oficina OFII y asistencia médica AME',
      description:
        'Gasto público anual de Francia destinado a la acogida de solicitantes de asilo, integración cívica y cobertura sanitaria de urgencia.',
      sourceName: 'Ministerio del Interior de Francia & Presupuestos Generales del Estado',
    },
    'france-household-christmas-spending': {
      title: 'Gasto de los Hogares Franceses en Navidad',
      subtitle: 'Presupuesto familiar anual en regalos, cenas navideñas, decoración y desplazamientos festivos',
      description:
        'Gasto conjunto de las familias francesas durante las fiestas navideñas (media de ~549 € por hogar) según el barómetro anual Cofidis/CSA y el INSEE.',
      sourceName: 'Barómetro de Navidad Cofidis / CSA & INSEE',
    },
    'france-household-clothing-fashion-spending': {
      title: 'Gasto de los Franceses en Ropa y Moda',
      subtitle: 'Presupuesto anual de los hogares en prendas de vestir, calzado, marroquinería y complementos',
      description:
        'Consumo total anual de las familias francesas en moda y calzado (~1.380 €/hogar/año) según las cuentas nacionales del INSEE y el Institut Français de la Mode (IFM).',
      sourceName: 'INSEE & Institut Français de la Mode (IFM)',
    },
    'france-household-food-spending': {
      title: 'Gasto de los Hogares Franceses en Alimentación y Cesta de la Compra',
      subtitle: 'Presupuesto de consumo en alimentos frescos, supermercados, panaderías y productos básicos',
      description:
        'Gasto alimentario en el hogar de los 29,5 millones de familias francesas (~395 €/mes por hogar, ~17% del presupuesto familiar) analizado por el INSEE y FranceAgriMer.',
      sourceName: 'INSEE (Cuentas Nacionales) & FranceAgriMer',
    },
    'germany-buergergeld-spending': {
      title: 'Gasto de Alemania en el Ingreso Ciudadano (Bürgergeld)',
      subtitle: 'Presupuesto federal en renta mínima vital, subsidios de vivienda y calefacción (KdU) y oficinas Jobcenter',
      description:
        'Gasto federal consolidado de Alemania en la renta básica para desempleados y demandantes de empleo según el Ministerio Federal de Trabajo y Asuntos Sociales (BMAS).',
      sourceName: 'Ministerio de Trabajo y Asuntos Sociales de Alemania (BMAS) & BA',
    },
    'germany-military-defense-spending': {
      title: 'Gasto Militar y Presupuesto de Defensa de Alemania',
      subtitle: 'Presupuesto ordinario de Defensa (Einzelplan 14) y fondo especial de 100.000 M€ para la Bundeswehr (~2% del PIB)',
      description:
        'Gasto militar consolidado de la República Federal de Alemania bajo criterios OTAN para modernización de blindados, cazas y rearme según el SIPRI y el Ministerio de Defensa alemán.',
      sourceName: 'SIPRI & Ministerio Federal de Defensa de Alemania (BMVg)',
    },
    'germany-foreign-development-aid-spending': {
      title: 'Gasto de Alemania en Ayuda Oficial al Desarrollo (AOD / BMZ)',
      subtitle: 'Cooperación internacional al desarrollo y ayuda humanitaria (2º mayor donante mundial)',
      description:
        'Aportación pública neta de Alemania para proyectos de salud, clima e infraestructuras en países en vías de desarrollo según el CAD de la OCDE y el ministerio BMZ.',
      sourceName: 'Comité de Ayuda al Desarrollo de la OCDE (CAD) & BMZ Alemania',
    },
    'germany-state-pension-spending': {
      title: 'Gasto de Alemania en Pensiones Públicas (Gesetzliche Rente)',
      subtitle: 'Desembolso total de pensiones a 21 millones de jubilados más de 112.000 M€ en aportaciones del Estado',
      description:
        'Gasto anual en pensiones contributivas de jubilación gestionado por Deutsche Rentenversicherung para más de 21 millones de pensionistas alemanes.',
      sourceName: 'Deutsche Rentenversicherung Bund & BMAS Alemania',
    },
    'germany-education-spending': {
      title: 'Gasto Público de Alemania en Educación y Universidades',
      subtitle: 'Presupuesto consolidado del Estado Federal, los 16 Länder y municipios en colegios y centros superiores',
      description:
        'Inversión pública global en escuelas infantiles, colegios de primaria y secundaria, formación dual y universidades según el informe Bildungsfinanzbericht de Destatis.',
      sourceName: 'Oficina Federal de Estadística de Alemania (Destatis)',
    },
    'germany-refugees-asylum-spending': {
      title: 'Gasto de Alemania en Refugiados y Solicitantes de Asilo',
      subtitle: 'Partidas consolidadas del Gobierno Federal y los 16 Länder: alojamiento, cursos de integración y ayuda en origen',
      description:
        'Gasto total presupuestario de Alemania destinado a la acogida, cursos oficiales de idioma, integración sociolaboral y ayuda a países de origen según el Ministerio de Finanzas (BMF).',
      sourceName: 'Ministerio Federal de Finanzas de Alemania (BMF) & BAMF',
    },
    'germany-total-social-budget-spending': {
      title: 'Gasto Total de Alemania en Protección Social (Sozialbudget)',
      subtitle: 'Presupuesto social de todos los sistemas: sanidad, pensiones, dependencia y desempleo (~30,5% del PIB)',
      description:
        'Gasto consolidado anual en prestaciones sociales de todas las ramas de la seguridad social alemana según el Sozialbudget del ministerio BMAS.',
      sourceName: 'Ministerio de Trabajo y Asuntos Sociales de Alemania (BMAS)',
    },
    'germany-household-vacation-travel-spending': {
      title: 'Gasto de los Alemanes en Vacaciones y Viajes',
      subtitle: 'Presupuesto anual en viajes de ocio, paquetes turísticos, vuelos y hoteles (~65 millones de viajes)',
      description:
        'Gasto turístico total de la población alemana en vacaciones dentro y fuera del país (~1.200 € por persona/viaje) analizado por la Asociación Alemana de Viajes (DRV) y FUR.',
      sourceName: 'Asociación Alemana de Viajes (DRV) & FUR Reiseanalyse',
    },
    'germany-household-food-spending': {
      title: 'Gasto de los Hogares Alemanes en Alimentación y Cesta de la Compra',
      subtitle: 'Consumo mensual y anual de 41 millones de hogares en comida y bebida (~415 €/mes por hogar)',
      description:
        'Gasto de los hogares en Alemania en alimentos, bebidas no alcohólicas y compras de supermercado analizado por Destatis.',
      sourceName: 'Oficina Federal de Estadística de Alemania (Destatis)',
    },
    'germany-silvester-fireworks-spending': {
      title: 'Gasto de los Alemanes en Petardos y Fuegos Artificiales de Nochevieja',
      subtitle: 'Ventas de pirotecnia y cohetes durante los 3 días de venta autorizada previos a Año Nuevo',
      description:
        'Facturación del sector pirotécnico en Alemania en la campaña de fin de año (Silvester) según la Asociación de la Industria Pirotécnica (VPI).',
      sourceName: 'Asociación de la Industria Pirotécnica de Alemania (VPI)',
    },
    'germany-household-christmas-gifts-spending': {
      title: 'Gasto de los Alemanes en Regalos de Navidad',
      subtitle: 'Presupuesto de los consumidores en juguetes, electrónica, libros y regalos navideños (~500 € por persona)',
      description:
        'Gasto total en compras de regalos navideños durante la campaña de fin de año en Alemania según la Federación Alemana de Comercio (HDE) y GfK.',
      sourceName: 'Federación Alemana de Comercio (HDE) & GfK',
    },
    'germany-household-rent-housing-spending': {
      title: 'Gasto de los Alemanes en Alquiler y Vivienda',
      subtitle: 'Coste del alquiler neto, calefacción y gastos comunitarios de 41 millones de hogares (~28% del presupuesto)',
      description:
        'Gasto global en alquileres y mantenimiento del hogar en Alemania calculado por el censo de vivienda de Destatis.',
      sourceName: 'Oficina Federal de Estadística de Alemania (Destatis - Mikrozensus)',
    },
    'germany-household-clothing-fashion-spending': {
      title: 'Gasto de los Alemanes en Ropa, Calzado y Moda',
      subtitle: 'Presupuesto anual de los hogares en prendas textiles y zapatos (~1.600 €/hogar/año)',
      description:
        'Gasto total del consumidor alemán en moda femenina, masculina e infantil y calzado según la patronal BTE y Destatis.',
      sourceName: 'BTE Handelsverband Textil Schuhe & Destatis',
    },
    'germany-engagement-ring-spending': {
      title: 'Gasto de los Alemanes en Anillos de Compromiso',
      subtitle: 'Mercado nacional de anillos de pedida y diamantes (~380.000 pedidas de mano, Ø ~680 € por anillo)',
      description:
        'Gasto anual estimado en anillos de compromiso y joyería nupcial en Alemania según la Asociación Federal de Joyeros (BVJ).',
      sourceName: 'Asociación Federal de Joyeros y Relojeros de Alemania (BVJ)',
    },
    'germany-car-vehicle-purchase-spending': {
      title: 'Gasto de los Alemanes en la Compra de Coches (Nuevos y de Ocasión)',
      subtitle: 'Volumen total de transacciones de turismos (~2,8M coches nuevos + ~6,0M coches usados)',
      description:
        'Gasto global de particulares y empresas en la compra de turismos en Alemania (precio medio nuevo >44.000 €) según el informe DAT y la KBA.',
      sourceName: 'Deutsche Automobil Treuhand (DAT) & Kraftfahrt-Bundesamt (KBA)',
    },
    'germany-halloween-spending': {
      title: 'Gasto de los Alemanes en Halloween',
      subtitle: 'Facturación en disfraces, decoración terrorífica, maquillaje y dulces de «Truco o Trato»',
      description:
        'Gasto de los consumidores alemanes en disfraces, calabazas y golosinas para la festividad de Halloween según la patronal del comercio HDE.',
      sourceName: 'Federación Alemana de Comercio (HDE - Encuesta de Halloween)',
    },
    'brazil-bolsa-familia-spending': {
      title: 'Gasto de Brasil en el Programa Bolsa Família',
      subtitle: 'Transferencia monetaria directa a más de 20,8 millones de familias en situación de vulnerabilidad',
      description:
        'Presupuesto anual ejecutado por el Gobierno Federal de Brasil para el programa social Bolsa Família según el Ministerio de Desarrollo Social (MDS) y el Portal de la Transparencia.',
      sourceName: 'Ministerio de Desarrollo y Asistencia Social (MDS) & Portal de la Transparencia',
    },
    'brazil-sus-public-healthcare-spending': {
      title: 'Gasto de Brasil en el Sistema Único de Salud (SUS)',
      subtitle: 'Presupuesto sanitario federal: red hospitalaria pública, vacunación nacional, atención primaria y urgencias SAMU',
      description:
        'Recursos sanitarios consolidados destinados a la red universal del SUS que da cobertura a más de 190 millones de brasileños según el Ministerio de Salud.',
      sourceName: 'Ministerio de Salud de Brasil & Tesoro Nacional (Siops)',
    },
    'brazil-judiciary-system-spending': {
      title: 'Gasto de Brasil en el Poder Judicial (Poder Judiciário)',
      subtitle: 'Coste de los tribunales superiores (STF, STJ), justicia federal y tribunales estatales (~1,3% del PIB)',
      description:
        'Gasto global anual del Poder Judicial de Brasil en nóminas de magistrados, juzgados y tecnología según el informe «Justiça em Números» del CNJ.',
      sourceName: 'Consejo Nacional de Justicia de Brasil (CNJ)',
    },
    'brazil-inss-pension-spending': {
      title: 'Gasto de Brasil en Pensiones Públicas y Jubilaciones (INSS)',
      subtitle: 'Prestaciones de jubilación pagadas por el INSS (RGPS) y régimen de los funcionarios públicos (RPPS)',
      description:
        'Desembolso total de pensiones contributivas de jubilación, incapacidad y viudedad en Brasil según el Ministerio de la Seguridad Social y el Tesoro Nacional.',
      sourceName: 'Ministerio de la Seguridad Social & Secretaría del Tesoro Nacional de Brasil',
    },
    'brazil-politicians-congress-spending': {
      title: 'Gasto Anual de Brasil en Políticos y Congreso Nacional',
      subtitle: 'Presupuesto de la Cámara de Diputados, Senado Federal, Fondo Electoral, dietas y asesores',
      description:
        'Coste anual consolidado del poder legislativo y el sistema político brasileño (Cámara, Senado, fondo público electoral y asambleas estatales).',
      sourceName: 'Congreso Nacional de Brasil, Portal de la Transparencia & TSE',
    },
    'brazil-former-presidents-benefits-spending': {
      title: 'Gasto de Brasil en Beneficios y Seguridad de Expresidentes',
      subtitle: 'Seguridad personal del GSI, 6 asesores contratados, 2 vehículos oficiales con chófer y combustible (Ley 7.474/1986)',
      description:
        'Gastos abonados por la Presidencia de la República para sufragar los derechos vitalicios de los expresidentes de Brasil regulados por ley federal.',
      sourceName: 'Presidencia de la República de Brasil & Portal de la Transparencia',
    },
    'brazil-tax-exemptions-subsidies-spending': {
      title: 'Gasto Tributario de Brasil en Exenciones Fiscales y Subsidios',
      subtitle: 'Renuncia de ingresos públicos en desgravaciones, Simples Nacional, Zona Franca de Manaos y subsidios (~5% del PIB)',
      description:
        'Volumen de impuestos no recaudados por el Estado brasileño debido a incentivos fiscales sectoriales y exenciones según la Receita Federal.',
      sourceName: 'Receita Federal do Brasil (Informe DGT)',
    },
    'brazil-military-daughters-pension-spending': {
      title: 'Gasto de Brasil en Pensiones Vitalicias para Hijas de Militares',
      subtitle: 'Pensiones vitalicias pagadas a más de 100.000 herederas e hijas solteras de miembros fallecidos de las FF.AA.',
      description:
        'Gasto público en pensiones hereditarias vitalicias abonadas por el Tesoro Nacional a hijas de oficiales militares de las Fuerzas Armadas auditado por el TCU.',
      sourceName: 'Tribunal de Cuentas de la Unión (TCU) & Ministerio de Defensa de Brasil',
    },
    'brazil-online-bets-gambling-spending': {
      title: 'Gasto de los Brasileños en Apuestas Deportivas Online y Casinos (Bets)',
      subtitle: 'Volumen transferido a plataformas de apuestas y casinos virtuales vía PIX (~R$ 20.000 M al mes)',
      description:
        'Volumen de dinero transferido por apostadores brasileños vía PIX a casas de apuestas de cuota fija y casinos online según el Banco Central de Brasil y Anbima.',
      sourceName: 'Banco Central do Brasil (BCB) & Anbima',
    },
    'brazil-tourists-spending-united-states': {
      title: 'Gasto de los Turistas Brasileños en Estados Unidos',
      subtitle: 'Presupuesto en compras, hoteles, parques temáticos de Disney y vuelos en Miami y Orlando',
      description:
        'Gasto anual de más de 1,6 millones de turistas brasileños que viajan a EE.UU. registrado por la Oficina Nacional de Turismo de EE.UU. (NTTO) y el Banco Central de Brasil.',
      sourceName: 'US National Travel & Tourism Office (NTTO) & BCB',
    },
    'brazil-household-cost-of-living-spending': {
      title: 'Coste de la Vida y Consumo de los Hogares en Brasil',
      subtitle: 'Gasto corriente de 75 millones de familias en vivienda, alimentación, transporte y sanidad (~R$ 6.500/mes)',
      description:
        'Gasto de consumo final de las familias en la economía brasileña analizado por la Encuesta de Presupuestos Familiares (POF) del IBGE.',
      sourceName: 'Instituto Brasileño de Geografía y Estadística (IBGE - POF)',
    },
    'spain-national-public-debt': {
      title: 'Deuda Pública Total de España',
      subtitle: 'Saldo acumulado del Estado, CC.AA. y Seguridad Social bajo Protocolo de Déficit Excesivo (~107% del PIB)',
      description:
        'Deuda nominal bruta en circulación emitida por las Administraciones Públicas españolas según el Banco de España y Eurostat.',
      sourceName: 'Banco de España (PDE) & Eurostat',
    },
    'united-states-national-public-debt': {
      title: 'Deuda Nacional Pública de Estados Unidos (US Debt Clock)',
      subtitle: 'Volumen total de deuda federal bruta en circulación emitida en bonos del Tesoro estadounidense',
      description:
        'Deuda soberana viva acumulada por el gobierno federal de los Estados Unidos registrada al milímetro por el Departamento del Tesoro de EE.UU.',
      sourceName: 'Departamento del Tesoro de EE.UU. (Fiscal Service)',
    },
    'fc-barcelona-total-debt': {
      title: 'Deuda Total y Financiación del FC Barcelona',
      subtitle: 'Pasivo bancario ordinario y financiación de bonos del Espai Barça (Goldman Sachs & JP Morgan)',
      description:
        'Deuda económica consolidada del FC Barcelona que suma compromisos a corto y largo plazo y la remodelación del Spotify Camp Nou auditada en su Memoria.',
      sourceName: 'FC Barcelona Memoria Anual Económica & LaLiga',
    },
    'real-madrid-total-debt-financing': {
      title: 'Deuda y Financiación del Real Madrid CF (Estadio Bernabéu)',
      subtitle: 'Créditos a tipo fijo para las obras del Santiago Bernabéu (deuda neta operativa saneada)',
      description:
        'Préstamos bancarios a largo plazo suscritos por el Real Madrid para la remodelación del estadio, amortizados con cuotas anuales fijas cubiertas por ingresos récord.',
      sourceName: 'Real Madrid CF Memoria Anual & Cuentas Oficiales',
    },
    'colombia-external-foreign-debt': {
      title: 'Deuda Externa Total de Colombia',
      subtitle: 'Saldo consolidado de la deuda externa pública y privada del país (~50% del PIB colombiano)',
      description:
        'Saldo de la deuda externa contratada por el gobierno y el sector privado de Colombia según el Banco de la República.',
      sourceName: 'Banco de la República de Colombia & Ministerio de Hacienda',
    },
    'united-kingdom-national-public-debt': {
      title: 'Deuda Pública Nacional del Reino Unido (UK Debt Clock)',
      subtitle: 'Deuda neta del sector público británico emitida en bonos del Estado (Gilts) (~99,5% del PIB)',
      description:
        'Saldo de deuda soberana acumulada por el gobierno británico y sus administraciones según la Oficina Nacional de Estadísticas (ONS).',
      sourceName: 'Office for National Statistics (ONS) & HM Treasury',
    },
    'china-national-government-debt': {
      title: 'Deuda Pública Soberana de China',
      subtitle: 'Bonos del gobierno central y deuda de vehículos financieros locales (LGFV) (~83% del PIB)',
      description:
        'Deuda pública consolidada de la República Popular China que agrupa los bonos soberanos y pasivos de gobiernos locales según el FMI.',
      sourceName: 'Ministerio de Finanzas de China & FMI',
    },
    'canada-national-public-debt': {
      title: 'Deuda Pública Nacional de Canadá',
      subtitle: 'Pasivo consolidado del gobierno federal y las 10 provincias canadienses (~71% del PIB)',
      description:
        'Deuda neta total de Canadá combinando bonos federales y endeudamiento provincial según Finance Canada y Statistics Canada.',
      sourceName: 'Department of Finance Canada & Statistics Canada',
    },
    'united-states-debt-relief-programs': {
      title: 'Programas de Alivio y Liquidación de Deuda en EE.UU.',
      subtitle: 'Volumen anual de deuda renegociada y consolidada de tarjetas de crédito y préstamos',
      description:
        'Volumen de deuda de consumidores estadounidenses gestionado en programas regulados de alivio y reestructuración (CFPB).',
      sourceName: 'Consumer Financial Protection Bureau (CFPB) & AFCC',
    },
    'japan-national-public-debt': {
      title: 'Deuda Pública Nacional de Japón',
      subtitle: 'Pasivo soberano total en bonos del gobierno japonés (JGB) (~260% del PIB de Japón)',
      description:
        'Volumen total de bonos emitidos por el Gobierno de Japón registrado por el Ministerio de Finanzas y el Banco de Japón.',
      sourceName: 'Ministry of Finance of Japan & Bank of Japan',
    },
    'germany-national-public-debt': {
      title: 'Deuda Pública Total de Alemania (Staatsverschuldung)',
      subtitle: 'Saldo consolidado de la Federación, los 16 Estados federados y municipios (~64% del PIB)',
      description:
        'Deuda pública total de Alemania (Bundesanleihen y Länder) registrada por Destatis y el Bundesbank.',
      sourceName: 'Destatis & Deutsche Bundesbank',
    },
    'france-national-public-debt': {
      title: 'Deuda Pública Total de Francia (Dette Publique)',
      subtitle: 'Deuda en sentido de Maastricht del Estado, seguridad social y administraciones locales (~111% del PIB)',
      description:
        'Deuda soberana viva de la República Francesa (bonos OATs) auditada por el INSEE y la Banque de France.',
      sourceName: 'INSEE & Banque de France (Dette Maastricht)',
    },
    'italy-national-public-debt': {
      title: 'Deuda Pública Nacional de Italia (Debito Pubblico)',
      subtitle: 'Saldo de deuda pública de la República Italiana emitida en títulos BTP y BOT (~138% del PIB)',
      description:
        'Deuda bruta de las Administraciones Públicas italianas registrada por la Banca d\'Italia y el Istat.',
      sourceName: 'Banca d\'Italia & Istat',
    },
    'brazil-national-public-debt': {
      title: 'Deuda Pública Federal Total de Brasil',
      subtitle: 'Stock de la deuda pública federal interna y externa en títulos del Tesoro (~78% del PIB)',
      description:
        'Volumen de la deuda pública federal del Estado brasileño auditado por el Tesouro Nacional y el Banco Central.',
      sourceName: 'Secretaria do Tesouro Nacional & Banco Central do Brasil',
    },
    'india-national-public-debt': {
      title: 'Deuda Pública Nacional de la India',
      subtitle: 'Deuda combinada del gobierno central y los 28 estados de la Unión India (~82% del PIB)',
      description:
        'Deuda soberana bruta de la India en bonos públicos y préstamos registrada por el Reserve Bank of India.',
      sourceName: 'Reserve Bank of India (RBI) & Ministerio de Finanzas',
    },
    'mexico-national-public-debt': {
      title: 'Deuda Pública Total de México (SHRFSP)',
      subtitle: 'Saldo Histórico de los Requerimientos Financieros del Sector Público (~49% del PIB mexicano)',
      description:
        'Deuda ampliada del Estado mexicano en Cetes, Bonos M y deuda externa reportada por la SHCP.',
      sourceName: 'Secretaría de Hacienda y Crédito Público (SHCP) & Banxico',
    },
    'argentina-national-public-debt': {
      title: 'Deuda Pública Bruta de Argentina',
      subtitle: 'Stock total de pasivos de la Administración Central en pesos y dólares (~88% del PIB)',
      description:
        'Deuda soberana argentina en títulos públicos y préstamos del FMI auditada por la Secretaría de Finanzas.',
      sourceName: 'Secretaría de Finanzas (Ministerio de Economía de Argentina)',
    },
    'australia-national-public-debt': {
      title: 'Deuda Pública Nacional de Australia (Commonwealth Debt)',
      subtitle: 'Deuda bruta federal australiana emitida en bonos soberanos AGS (~54% del PIB)',
      description:
        'Volumen total de bonos soberanos australianos emitidos por la AOFM y el Banco de la Reserva de Australia.',
      sourceName: 'Australian Office of Financial Management (AOFM) & RBA',
    },
    'south-korea-national-public-debt': {
      title: 'Deuda Pública Nacional de Corea del Sur (D1 Debt)',
      subtitle: 'Deuda soberana del gobierno central y local en bonos del tesoro KTB (~51% del PIB)',
      description:
        'Pasivo financiero total de Corea del Sur registrado por el Ministerio de Economía y Finanzas (MOEF).',
      sourceName: 'Ministry of Economy and Finance (MOEF) & Bank of Korea',
    },
    'saudi-arabia-national-public-debt': {
      title: 'Deuda Pública de Arabia Saudita',
      subtitle: 'Saldo de deuda soberana en bonos islámicos (Sukuk) e instrumentos internacionales (~26% del PIB)',
      description:
        'Deuda pública soberana del Reino de Arabia Saudita gestionada por el Centro Nacional de Gestión de Deuda.',
      sourceName: 'National Debt Management Center (NDMC) & MinFin Saudí',
    },
    'switzerland-national-public-debt': {
      title: 'Deuda Pública de la Confederación Suiza y Cantones',
      subtitle: 'Deuda soberana bajo la regla constitucional del Freno a la Deuda (~38% del PIB suizo)',
      description:
        'Deuda pública consolidada de Suiza (Confederación y 26 cantones) registrada por la Administración Federal de Finanzas.',
      sourceName: 'Administración Federal de Finanzas de Suiza (AFF) & BNS',
    },
    'netherlands-national-public-debt': {
      title: 'Deuda Pública de los Países Bajos (Holanda)',
      subtitle: 'Deuda soberana del Estado neerlandés en bonos DSL (~44% del PIB de los Países Bajos)',
      description:
        'Deuda pública de los Países Bajos emitida por la DSTA según la oficina de estadística CBS.',
      sourceName: 'Centraal Bureau voor de Statistiek (CBS) & DSTA',
    },
    'russia-national-public-debt': {
      title: 'Deuda Pública Soberana de la Federación Rusa',
      subtitle: 'Saldo de deuda interna y externa en bonos federales OFZ (~15% del PIB ruso)',
      description:
        'Deuda soberana de la Federación Rusa registrada por el Ministerio de Finanzas (Minfin).',
      sourceName: 'Ministerio de Finanzas de Rusia (Minfin) & Banco de Rusia',
    },
    'turkey-national-public-debt': {
      title: 'Deuda Pública del Gobierno Central de Turquía',
      subtitle: 'Saldo consolidado de la deuda pública interna y externa en liras y divisas (~28% del PIB)',
      description:
        'Deuda pública bruta total de Turquía publicada por el Ministerio del Tesoro y Finanzas.',
      sourceName: 'Ministerio del Tesoro y Finanzas de la República de Turquía',
    },
    'south-africa-national-public-debt': {
      title: 'Deuda Pública Nacional de Sudáfrica',
      subtitle: 'Deuda bruta del gobierno nacional en bonos soberanos sudafricanos (~74% del PIB)',
      description:
        'Deuda soberana acumulada de Sudáfrica registrada por el National Treasury y el SARB.',
      sourceName: 'National Treasury of South Africa & SARB',
    },
    'global-social-media-advertising-spend': {
      title: 'Gasto Mundial en Publicidad en Redes Sociales',
      subtitle: 'Inversión total de marcas en anuncios en Instagram, TikTok, Facebook, YouTube y X (~$7.925/s)',
      description:
        'Inversión publicitaria digital global en plataformas de redes sociales (anuncios en feed, historias y reels) según eMarketer y Zenith.',
      sourceName: 'eMarketer (Insider Intelligence) & Zenith Optimedia',
    },
    'tiktok-advertising-and-in-app-spending': {
      title: 'Gasto Total en TikTok (Publicidad, Monedas y Compras)',
      subtitle: 'Gasto anual de TikTok por anuncios de marcas, compra de monedas y TikTok Shop (~$1.062/s)',
      description:
        'Gasto total generado en el ecosistema de TikTok (ByteDance) sumando publicidad, regalos virtuales en directos y compras online según Sensor Tower.',
      sourceName: 'ByteDance Financial Reports, Sensor Tower & eMarketer',
    },
    'instagram-advertising-and-creator-spending': {
      title: 'Gasto Publicitario y de Comercio en Instagram',
      subtitle: 'Facturación publicitaria en Reels, Feed, Stories y monetización de creadores (~$2.251/s, >50% de Meta Ads)',
      description:
        'Inversión publicitaria global de marcas en Instagram (Meta Platforms) auditada en los informes oficiales de Meta ante la SEC.',
      sourceName: 'Meta Platforms (SEC Form 10-K) & eMarketer',
    },
    'global-influencer-marketing-creator-spending': {
      title: 'Gasto Global en Marketing de Influencers y Creadores',
      subtitle: 'Presupuesto de marcas en patrocinios, contratos con creadores de contenido y campañas de UGC',
      description:
        'Inversión de marcas comerciales en acuerdos publicitarios con creadores en Instagram, TikTok y YouTube según Goldman Sachs.',
      sourceName: 'Goldman Sachs (Creator Economy Report) & Influencer Marketing Hub',
    },
    'spain-gasoline-fuel-consumption-spending': {
      title: 'Gasto en Gasolina y Carburantes en España',
      subtitle: 'Consumo anual de gasolina 95/98 y gasóleo en las más de 12.000 gasolineras de España',
      description:
        'Gasto de conductores particulares y transportistas en carburantes de automoción en España según CORES y el MITECO.',
      sourceName: 'CORES & Ministerio para la Transición Ecológica (MITECO)',
    },
    'spain-total-public-expenditure': {
      title: 'Gasto Público Total del Reino de España',
      subtitle: 'Gasto consolidado de Estado, CC.AA., Ayuntamientos y Seguridad Social (~46,5% del PIB)',
      description:
        'Gasto público liquidado de todas las Administraciones Públicas españolas según la IGAE y Eurostat.',
      sourceName: 'Intervención General de la Administración del Estado (IGAE) & Eurostat',
    },
    'spain-healthcare-sanidad-spending': {
      title: 'Gasto Sanitario Global de España (Sanidad Pública y Privada)',
      subtitle: 'Presupuesto sanitario del SNS (17 CC.AA.) y gasto privado en salud (~7,5% del PIB)',
      description:
        'Gasto sanitario en hospitales, centros de salud, farmacia y seguros privados según la Estadística de Gasto Sanitario Público (EGSP).',
      sourceName: 'Ministerio de Sanidad (EGSP) & INE',
    },
    'spain-defense-military-spending-nato': {
      title: 'Gasto en Defensa y Militar de España (Criterio OTAN)',
      subtitle: 'Presupuesto militar consolidado del Ministerio de Defensa según la metodología oficial de la OTAN (~1,30% del PIB)',
      description:
        'Gasto de defensa de España consolidando presupuesto ordinario, Programas Especiales (PEAs) y pensiones militares.',
      sourceName: 'OTAN (NATO Defence Expenditures) & SIPRI',
    },
    'spain-education-spending': {
      title: 'Gasto en Educación en España (Pública y Privada)',
      subtitle: 'Presupuesto educativo de las 17 CC.AA. y el Ministerio en colegios, institutos y universidades (~4,4% del PIB)',
      description:
        'Gasto educativo global en España en todas las etapas formativas según el Ministerio de Educación y el INE.',
      sourceName: 'Ministerio de Educación, FP y Deportes & INE',
    },
    'spain-irpf-income-tax-revenue': {
      title: 'Recaudación del IRPF en España (Campaña de la Renta)',
      subtitle: 'Total recaudado por la Agencia Tributaria (AEAT) en retenciones de nóminas y declaraciones del IRPF',
      description:
        'Recaudación tributaria anual del IRPF de los más de 22 millones de contribuyentes según la Agencia Tributaria.',
      sourceName: 'Agencia Estatal de Administración Tributaria (AEAT)',
    },
    'real-madrid-transfers-signings-spending': {
      title: 'Gasto en Fichajes y Traspasos del Real Madrid CF',
      subtitle: 'Inversión anual media en traspasos de futbolistas para el primer equipo (Mbappé, Bellingham, Vinícius)',
      description:
        'Inversión anual en primas de fichaje y amortizaciones de futbolistas del Real Madrid CF según su Memoria Económica y Transfermarkt.',
      sourceName: 'Real Madrid CF Memoria Anual & Transfermarkt',
    },
    'spain-mortgage-closing-costs-spending': {
      title: 'Gastos de Hipoteca y Formalización en España',
      subtitle: 'Gastos anuales de tasación, notaría, registro y gestoría de las más de 450.000 nuevas hipotecas firmadas al año',
      description:
        'Costes abonados en la formalización de préstamos hipotecarios y reclamaciones judiciales de cláusulas según el Banco de España y el INE.',
      sourceName: 'Banco de España (BdE), INE & Notariado',
    },
    'spain-home-buying-transaction-costs-spending': {
      title: 'Gastos e Impuestos en la Compra de Vivienda en España',
      subtitle: 'Impuestos (ITP/IVA, AJD), notaría y registro en las más de 600.000 compraventas anuales (~10-12% del precio)',
      description:
        'Gasto total en impuestos y aranceles legales al comprar vivienda en España según el Consejo General del Notariado y Registradores.',
      sourceName: 'Consejo General del Notariado & Registradores de España',
    },
    'spain-tax-deductible-expenses-irpf': {
      title: 'Gastos Deducibles y Desgravaciones del IRPF en España',
      subtitle: 'Total de deducciones fiscales de autónomos, planes de pensiones, vivienda habitual y tramos autonómicos',
      description:
        'Gastos deducibles de actividades económicas y desgravaciones del IRPF según las estadísticas oficiales de la Agencia Tributaria.',
      sourceName: 'Agencia Estatal de Administración Tributaria (AEAT)',
    },
    'vinted-second-hand-fashion-spending': {
      title: 'Gasto y Ventas en Vinted (Moda y Artículos de Segunda Mano)',
      subtitle: 'Volumen bruto de transacciones (GMV) de ropa de segunda mano, calzado y accesorios entre usuarios',
      description:
        'Volumen de compraventa y consumo de moda circular en Vinted en España y Europa según sus informes financieros.',
      sourceName: 'Vinted Financial Reports & Cross-Border Commerce Europe',
    },
    'spain-household-cost-of-living-spending': {
      title: 'Coste de Vida y Consumo de los Hogares en España',
      subtitle: 'Gasto anual de los 19,2 millones de familias españolas en vivienda, energía, alimentación, transporte y ocio (~32.600 €/hogar)',
      description:
        'Gasto total en consumo y coste de la vida sufragado por las familias residentes en España según la Encuesta de Presupuestos Familiares (EPF) del INE.',
      sourceName: 'Instituto Nacional de Estadística (INE - Encuesta de Presupuestos Familiares)',
    },
    'spain-total-wages-salaries-spending': {
      title: 'Masa Salarial Total y Sueldos en España',
      subtitle: 'Remuneración bruta anual de los más de 21,3 millones de trabajadores asalariados en España (Sueldo medio ~26.948 €/año)',
      description:
        'Remuneración total de asalariados pagada por empresas e instituciones públicas en España registrada en la Contabilidad Nacional del INE.',
      sourceName: 'INE (Contabilidad Nacional Trimestral & Estructura Salarial)',
    },
    'spain-minimum-wage-smi-spending': {
      title: 'Masa Salarial del Salario Mínimo Interprofesional (SMI) en España',
      subtitle: 'Coste salarial agregado de los más de 2,5 millones de trabajadores perceptores del SMI (1.134 €/mes en 14 pagas = 15.876 €/año)',
      description:
        'Masa salarial total percibida por los trabajadores con sueldo regulado bajo el Salario Mínimo Interprofesional fijado por el Ministerio de Trabajo.',
      sourceName: 'Ministerio de Trabajo y Economía Social & INE',
    },
    'spain-household-rent-spending': {
      title: 'Gasto Total en Alquiler de Vivienda en España',
      subtitle: 'Gasto anual de los más de 3,4 millones de hogares inquilinos en rentas de arrendamiento de vivienda habitual',
      description:
        'Volumen total pagado por las familias en alquiler de vivienda residencial habitual en España según el Banco de España y el MIVAU.',
      sourceName: 'Banco de España & Ministerio de Vivienda (MIVAU)',
    },
    'united-states-credit-card-consumer-spending': {
      title: 'Gasto Total en Tarjetas de Crédito en Estados Unidos',
      subtitle: 'Volumen anual de compras y cargos con tarjeta de crédito de consumidores en EE.UU. (Visa, Mastercard, Amex)',
      description:
        'Volumen bruto anual de compras con tarjetas de crédito de los estadounidenses según la Reserva Federal (Fed G.19) y Nilson.',
      sourceName: 'Federal Reserve Board (Consumer Credit G.19) & Nilson Report',
    },
    'global-cosmetic-surgery-spending': {
      title: 'Gasto en Cirugías Estéticas',
      subtitle: 'El costo total de las cirugías estéticas en el mundo se estima en 2.660 millones de euros anuales',
      description:
        'El costo total de las cirugías estéticas en el mundo se estima en 2.660 millones de euros. Este gasto incluye una amplia gama de procedimientos, desde el aumento de pecho y la liposucción hasta inyecciones faciales de toxina botulínica y ácido hialurónico. La creciente demanda de estos tratamientos se debe a la influencia de las redes sociales y el culto a la imagen.',
      sourceName: 'MediHair — Estadísticas de cirugía plástica y estética 2025',
    },
    'us-federal-discretionary-spending': {
      title: 'Gasto Discrecional Federal de Estados Unidos',
      subtitle: 'Presupuesto anual aprobado por el Congreso de EE.UU. para Defensa, Educación, Transporte y Ciencia (~$55.490/s)',
      description:
        'Presupuesto federal discrecional de EE.UU. aprobado por el Congreso según la Oficina de Presupuesto del Congreso (CBO).',
      sourceName: 'Congressional Budget Office (CBO) & US Treasury',
    },
    'us-federal-mandatory-spending-entitlements': {
      title: 'Gasto Obligatorio Federal de EE.UU. (Seguridad Social y Medicare)',
      subtitle: 'Desembolsos fijados por ley en Social Security, Medicare, Medicaid e intereses de deuda (~$131.595/s)',
      description:
        'Gasto federal obligatorio y prestaciones sociales en Estados Unidos financiado por impuestos de nómina según la CBO.',
      sourceName: 'Congressional Budget Office (CBO) & US Treasury',
    },
    'economic-burden-of-tobacco': {
      title: 'La carga económica del tabaco',
      subtitle: 'El costo económico y médico del tabaco es de 1,8 billones de dólares anuales en el mundo',
      description:
        'La carga económica del tabaco es devastadora, con un costo global de 1,8 billones de dólares al año. Este costo incluye gastos médicos, enfermedades relacionadas y efectos del humo de segunda mano, aunque al sumar la pérdida de productividad, el costo se duplica. La industria del tabaco, que genera ingresos de aproximadamente 92 mil millones de dólares, enfrenta un grave de rezago en la implementación de impuestos al tabaco, lo que limita su capacidad para prevenir y reducir el consumo.',
      sourceName: 'Organización Mundial de la Salud (OMS) — Informe de Tendencias del Tabaco',
    },
    'spain-public-healthcare-spending': {
      title: 'Gasto Sanitario Público en España',
      subtitle: 'El gasto sanitario público en España alcanza los 101.739 millones de euros anuales (~2.084€ por habitante)',
      description:
        'El gasto sanitario público en España alcanzó los 101.739 millones de euros, lo que representa un 6,4% del PIB y un gasto medio de 2.084 euros por habitante, según la Estadística de Gasto Sanitario Público del Ministerio de Sanidad.',
      sourceName: 'Ministerio de Sanidad — Estadística de Gasto Sanitario Público',
    },
    'spain-subsidies-public-grants-spending': {
      title: 'Subvenciones y Ayudas Públicas en España',
      subtitle: 'España destina unos 41.490 millones de euros anuales en subvenciones y ayudas públicas directas',
      description:
        'España destina alrededor de 41.490 millones de euros anuales en subvenciones y ayudas públicas directas distribuidas entre el gobierno central, las comunidades autónomas y las entidades locales. Esta cifra general engloba ayudas a familias, sectores productivos, empresas y entidades sociales, sin contar las grandes partidas de protección social como las pensiones contributivas o el desempleo.',
      sourceName: 'Libre Mercado — El gasto en subvenciones y ayudas en España',
    },
    'global-alcohol-spending': {
      title: 'Gasto en Bebidas Alcohólicas',
      subtitle: 'El gasto anual en bebidas alcohólicas se sitúa en torno a los 1,94 billones de dólares en el mundo',
      description:
        'El gasto en bebidas alcohólicas alcanza una cifra anual de entre 1,89 billones y 2 billones de dólares. Esta cifra abarca tanto las compras de los consumidores en tiendas y supermercados como el consumo en bares y restaurantes a nivel global, según datos del informe de Statista Market Forecast.',
      sourceName: 'Statista Market Forecast — Alcoholic Drinks Worldwide',
    },
    'global-counterfeit-goods-spending': {
      title: 'Gasto en Productos Falsificados',
      subtitle: 'El gasto global en productos falsificados supera los 412.000 millones de euros anuales',
      description:
        'El comercio global de falsificaciones se estima en más de 412.000 millones de euros, lo que representa un 2,5% del total del comercio en todo el planeta. En la Unión Europea, las importaciones de productos falsificados alcanzaron los 119.000 millones de euros.',
      sourceName: 'Merca2.0 — La economía global de las falsificaciones',
    },
    'global-wildlife-trafficking-spending': {
      title: 'Gasto en Tráfico Ilegal de Animales',
      subtitle: 'El tráfico ilegal de animales silvestres y exóticos mueve más de 20.000 millones de dólares anuales',
      description:
        'El tráfico ilegal de animales silvestres y especies exóticas genera transacciones anuales de más de 20.000 millones de dólares a nivel global, constituyendo uno de los negocios criminales más lucrativos del mundo junto al tráfico de drogas y armas, según datos del informe de Euribor.',
      sourceName: 'Euribor — El negocio negro del tráfico de animales exóticos',
    },
    'global-organ-trafficking-spending': {
      title: 'Gasto en Tráfico Ilegal de Órganos',
      subtitle: 'El tráfico ilegal de órganos genera entre 600 y 1.200 millones de dólares anuales a nivel mundial',
      description:
        'El tráfico ilegal de órganos genera ganancias y transacciones anuales estimadas entre 600 millones y 1.200 millones de dólares a nivel global. Esta actividad clandestina se nutre principalmente de la explotación de donantes en situación de pobreza extrema y del llamado turismo de trasplantes, según datos consolidados de Wikipedia.',
      sourceName: 'Wikipedia — Tráfico de órganos',
    },
    'global-art-trafficking-spending': {
      title: 'Gasto en Tráfico Ilegal de Arte',
      subtitle: 'El tráfico ilícito de bienes culturales y obras de arte mueve casi 10.000 millones de dólares anuales',
      description:
        'El tráfico ilícito de obras de arte, antigüedades y patrimonio arqueológico representa una industria criminal de casi 10.000 millones de dólares anuales. Financiando en muchos casos a redes terroristas y al crimen organizado trasnacional, constituye una de las mayores amenazas contra la identidad de los pueblos según revelan la UNESCO y la ONU.',
      sourceName: 'UNESCO & ONU — Tráfico ilícito de bienes culturales',
    },
    'lamine-yamal-market-value': {
      title: 'Valor de Mercado de Lamine Yamal',
      subtitle: 'La valoración estimada de la ficha del jugador Lamine Yamal se sitúa en los 220 millones de euros',
      description:
        'El valor de mercado de Lamine Yamal se sitúa en los 220 millones de euros, consolidándose como uno de los futbolistas más valiosos y con mayor proyección financiera del mundo según los datos del perfil oficial y valoración de Transfermarkt.',
      sourceName: 'Transfermarkt — Perfil de Lamine Yamal',
    },
  },
};
