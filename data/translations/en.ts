import { Translations } from '@/types/i18n';

export const enTranslations: Translations = {
  seo: {
    title: 'WorldSpend.org — Real-Time Global Expenditure & Live Spending Statistics',
    description:
      'Authoritative live statistics tracking real-time global expenditure, live spending statistics, world spending clock, and global financial tracker data.',
    mainKeyword: 'Real-time global expenditure',
    secondaryKeywords: [
      'Live spending statistics',
      'Global financial tracker',
      'World spending clock',
    ],
    keywords: [
      'Real-time global expenditure',
      'Live spending statistics',
      'Global financial tracker',
      'World spending clock',
      'world expenditure',
      'macroeconomic statistics',
      'global finance dashboard',
    ],
  },
  header: {
    tagline: 'Real-Time Global Expenditure & Economic Flow Analytics',
    compareNav: 'Compare',
    compareNavTitle: 'Multi-Counter Comparison (Coming Soon)',
    soonBadge: 'Soon',
    backToTop: 'Back to Top',
    timeframes: {
      year: 'Year 2026',
      today: 'Today',
      session: 'Your Visit',
      second: 'Per Second',
    },
    selectCurrency: 'Select Currency',
    selectLanguage: 'Language',
  },
  comparePage: {
    badge: 'Live Comparative Analysis',
    title: 'Multi-Counter Comparison & Ranking Matrix',
    subtitle: 'Select up to 10 real-time indicators to benchmark velocity, proportions, and simultaneous financial flow rates.',
    selectionLimit: (current: number, max: number) => `${current} / ${max} selected`,
    addCounterPlaceholder: 'Search and add an indicator...',
    clearAll: 'Clear All',
    selectPresets: 'Quick Presets:',
    presetTopGlobal: 'Top Global Flows',
    presetSovereignDebts: 'Sovereign Debts',
    presetTechAndMedia: 'Tech & Social Media',
    presetLifestyle: 'Lifestyle & Consumer',
    liveComparisonTitle: 'Simultaneous 60 FPS Real-Time Benchmark',
    rankingHeader: 'Rank & Velocity',
    ratePerSecHeader: 'Flow per Second',
    annualTotalHeader: 'Annual Baseline',
    shareOfTotalHeader: '% of Comparison',
    maxLimitWarning: 'You can compare a maximum of 10 counters simultaneously.',
    emptyStateTitle: 'No Counters Selected',
    emptyStateDescription: 'Choose from the selector above or pick a quick preset to start comparing financial flows.',
    backToHome: 'Back to All Counters',
    shareComparison: 'Share Comparison',
    copiedLink: 'Link copied to clipboard!',
  },
  heroTicker: {
    yearLabel: 'Total Global Expenditure in 2026',
    todayLabel: 'Total Global Expenditure Today (since 00:00 GMT)',
    sessionLabel: (seconds: number) => `Total Global Expenditure during your ${Math.floor(seconds)}s visit`,
    secondLabel: 'Total Global Expenditure per Second',
    perSecondSuffix: 'per second',
  },
  sessionBanner: {
    timeOnPage: 'Elapsed time on page:',
    spendDuringVisit: 'Money spent globally during your visit:',
  },
  searchAndFilter: {
    filterSectionTitle: 'Search & Category Filters',
        searchPlaceholder: 'Search indicators by topics, countries, or sources (e.g. debt, United States, Netflix)...',
    showingCounters: (count: number) => `Showing ${count} live indicators`,
    indicatorsCount: (count: number) => `${count} indicators`,
    categoriesCount: (count: number) => `${count} categories`,
    noResultsFound: (q: string) => `No statistical counters found matching "${q}"`,
    viewAllButton: 'View all indicators',
    collapseAll: 'Collapse all',
    expandAll: 'Expand all',
  },
  card: {
    perSecondBadge: '/s',
    officialSourcePrefix: 'Official Source:',
    embedTitle: 'Live Embed Code',
    embedInstruction: 'Embed this live ticking counter into any website or blog:',
    testWidgetPage: 'Test widget page',
    copyHtml: 'Copy HTML',
    copied: 'Copied!',
  },
  detailPage: {
    backLink: 'Back to All Live Counters',
    backToCompare: 'Back to Comparison Matrix',
    statisticalIndicator: 'STATISTICAL INDICATOR',
    annualBaseline: 'Annual Baseline',
    annualizedExp: 'Annualized expenditure',
    ratePerMinute: 'Spending per Minute',
    rateOfFlow: 'Rate of capital flow',
    shareOfGdp: 'Share of Global GDP',
    ofWorldEconomy: 'Of world economy',
    historicalChartTitle: 'Historical Expenditure Trajectory (2000 – 2026)',
    historicalChartSubtitle: '',
    historicalSeriesInfo: 'Official data series (2000–2026)',
    projectedLabel: 'Projected',
    historicalLabel: 'Historical',
    chartFooterNote: 'Live interactive financial chart',
    statisticalOverview: 'Statistical Overview:',
    officialSource: 'Official Source:',
    continuousUpdate: 'Continuous 60 FPS update',
    relatedCountersTitle: 'Related Indicators in this Category',
    relatedCountersSubtitle: 'Other real-time statistical counters in the same category',
    shareButton: 'Share statistic',
    shareCopied: 'Link copied to clipboard!',
    downloadCsv: 'Download CSV',
    embedWidget: 'Embed Widget',
    embedCopied: 'Iframe code copied!',
    showChart: 'Show Chart',
    hideChart: 'Hide Chart',
    shareX: 'Share on X (Twitter)',
    shareWhatsApp: 'Share on WhatsApp',
  },
  footer: {
    methodologyTitle: 'Methodology & Data Integrity',
    methodologyBody: 'Real-time figures based on official data from international organizations.',
    copyrightTagline: 'Verified Real-Time Global Financial Statistics and Macroeconomic Indicators',
    categoriesTitle: 'Expenditure Categories',
    trendingTitle: 'Trending Real-Time Counters',
    sourcesTitle: 'Official Data Sources',
    toolsTitle: 'Tools & Architecture',
    toolsEmbedWidgets: 'Embeddable Live Widgets',
    toolsEngine: '60 FPS Dynamic Engine',
    toolsMultiCurrency: 'Multi-Currency Converter (11 Currencies)',
    toolsHreflang: 'Hreflang Multilingual SEO',
    copyrightNotice: 'WorldSpend Global Financial Analytics',
    disclaimerTitle: 'Informational & Analytical Disclaimer',
    disclaimerText:
      'All real-time statistical figures presented on WorldSpend.org are algorithmic approximations based on official annual baselines and reported historical growth trajectories. Data is updated continuously for informational, research, and benchmarking purposes.',
    citationText: 'Cite as: WorldSpend Global Expenditure Index (2026). Available at https://worldspend.org',
  },
    categories: {
    tech: { name: 'Technology & Crypto', description: 'Artificial intelligence, cloud computing, servers, and cryptocurrencies' },
    all: { name: 'All Expenditures', description: 'Complete real-time global financial overview' },
    entertainment: { name: 'Entertainment & Brands', description: 'Sports, streaming, video games, and global brands' },
    government: { name: 'Government & Public Sector', description: 'Public budgets, aid, space exploration, and ministries' },
    health: { name: 'Health & Wellness', description: 'Public health, tobacco, and medical procedures' },
    food: { name: 'Food & Cost of Living', description: 'Food expenditure, cost of living, and daily consumption' },
    illicit: { name: 'Black Market & Illicit', description: 'Criminal economy, cybercrime, drugs, and trafficking' },
    military: { name: 'Defense & Military', description: 'Global military spending, weaponry, armies, and defense programs' },
    'country-gdp': { name: 'GDP by Country', description: 'Gross Domestic Product (nominal GDP) of countries in real-time' },
  },
  items: {
    'global-web-hosting-market': {
      title: "Web Hosting Market",
      subtitle: "The global web hosting services market generates approximately 178.76 billion dollars annually",
      description: "Global spending on web hosting services, including shared, dedicated, VPS, and cloud hosting, reaches approximately 178.76 billion dollars annually. This market is the bedrock supporting the entire ecosystem of websites and applications on the Internet.",
      sourceName: "Fortune Business Insights",
      sources: [
        {
          name: "Fortune Business Insights — Web Hosting Services Market Size, Share & COVID-19 Impact Analysis",
          url: "https://www.fortunebusinessinsights.com/es/industry-reports/web-hosting-services-market-100863",
        }
      ],
    },
    'apple-annual-revenue': {
      title: "Apple Revenue",
      subtitle: "Apple's estimated annual revenue reaches 437.6 billion dollars, based on its latest record quarter",
      description: "Apple's estimated annual revenue amounts to approximately 437.6 billion dollars, projected from the record quarter closed in June 2026 with 109.4 billion dollars. This record-breaking financial performance was primarily driven by a 22% growth in global iPhone sales.",
      sourceName: "Infobae",
      sources: [
        {
          name: "Infobae — Apple bate récord de ingresos en su último trimestre",
          url: "https://www.infobae.com/estados-unidos/2026/08/02/apple-bate-record-de-ingresos-antes-de-la-salida-de-tim-cook/",
        }
      ],
    },
    'global-ai-spending': {
      title: "Global AI Spending",
      subtitle: "Corporate spending on artificial intelligence worldwide will exceed 2.5 trillion dollars annually",
      description: "Global spending on artificial intelligence (AI) technology, infrastructure, and services will exceed 2.5 trillion dollars. This unprecedented growth is driven by the enterprise adoption of generative AI, construction of hyper-scale data centers, and corporate process automation.",
      sourceName: "RTVE News",
      sources: [
        {
          name: "RTVE — Gasto récord en Inteligencia Artificial",
          url: "https://www.rtve.es/noticias/20260702/inteligencia-artificial-cuesta-mas-personal-marca-record-gasto-empresas/17084006.shtml",
        }
      ],
    },
    'crypto-mining-electricity-cost': {
      title: "Crypto Mining Electricity Cost",
      subtitle: "Global electricity spending for cryptocurrency mining ranges between 10 and 15 billion dollars per year",
      description: "The cost of electricity consumed globally for cryptocurrency mining (primarily Bitcoin) is estimated at 10 to 15 billion dollars annually. This represents a significant portion of global power consumption, driven by the continuous operation of powerful specialized server farms (ASICs).",
      sourceName: "Digiconomist (Bitcoin Energy Consumption)",
      sources: [
        {
          name: "Digiconomist — Bitcoin Energy Consumption Index",
          url: "https://digiconomist.net/bitcoin-energy-consumption/",
        }
      ],
    },
    'julian-alvarez-market-value': {
      title: "Julián Álvarez Market Value",
      subtitle: "The estimated market valuation of player Julián Álvarez is 100 million euros",
      description: "The current market value of Julián Álvarez (Atlético de Madrid and Argentina national team forward) stands at 100 million euros, consolidating him as one of the elite football players globally according to historical Transfermarkt data.",
      sourceName: "Transfermarkt — Julián Álvarez profile",
      sources: [
        {
          name: "Transfermarkt — Julián Álvarez Profile (Market Value History)",
          url: "https://www.transfermarkt.es/julian-alvarez/marktwertverlauf/spieler/576024",
        }
      ],
    },
    'us-national-debt': {
      title: "US National Debt",
      subtitle: "The accumulated public debt of the US exceeds 39 trillion dollars",
      description: "The accumulated national debt of the United States exceeds 39 trillion dollars (39,000,000,000,000 USD). This represents the total outstanding financial obligations of the US federal government accumulated throughout its fiscal history.",
      sourceName: "LA Times",
      sources: [
        {
          name: "LA Times — US national debt exceeds 39 trillion dollars",
          url: "https://www.latimes.com/espanol/eeuu/articulo/2026-03-27/la-deuda-nacional-de-eeuu-supera-los-39-billones-de-dolares",
        }
      ],
    },
    'spain-monarchy-spending': {
      title: "Spanish Monarchy Spending",
      subtitle: "The estimated global cost of the Spanish Royal House is around 105 million euros per year",
      description: "The estimated global cost of the Monarchy in Spain is around 105 million euros annually, combining the official direct allocation of 8.43 million euros with security, military personnel, and support expenses from other state departments, equivalent to about 2.2 euros per citizen.",
      sourceName: "Diario en Positivo",
      sources: [
        {
          name: "Diario en Positivo — Cost of the Spanish monarchy",
          url: "https://www.diarioenpositivo.com/economia/estudio-calcula-que-monarquia-cuesta-105-millones-ano-jefaturas-estado-mas-baratas-europa/20260303181913075067.html",
        }
      ],
    },
    'uk-monarchy-spending': {
      title: "British Monarchy Spending",
      subtitle: "The estimated global cost of the British Royal Family is around 166 million euros per year",
      description: "The global expenditure of the United Kingdom monarchy is estimated at around 166 million euros annually, including the Sovereign Grant and state-funded security costs. It is one of the most expensive heads of state in Europe.",
      sourceName: "Diario en Positivo",
      sources: [
        {
          name: "Diario en Positivo — Cost of the British monarchy",
          url: "https://www.diarioenpositivo.com/economia/estudio-calcula-que-monarquia-cuesta-105-millones-ano-jefaturas-estado-mas-baratas-europa/20260303181913075067.html",
        }
      ],
    },
    'fortnite-player-spending': {
      title: "Player Spending in Fortnite",
      subtitle: "Fortnite players spend an average of about 16 million dollars per day",
      description: "Players of the popular battle royale Fortnite spend an average of approximately 16 million dollars per day globally. This expenditure is mainly driven by purchasing V-Bucks to acquire battle passes, character skins, emotes, and other in-game cosmetics.",
      sourceName: "Tekrevol",
      sources: [
        {
          name: "Tekrevol — Fortnite Revenue and Usage Statistics",
          url: "https://www.tekrevol.com/blogs/fortnite-revenue-usage-statistics/",
        }
      ],
    },
    'onlyfans-user-spending': {
      title: "User Spending on OnlyFans",
      subtitle: "Users spend approximately 7.2 billion dollars annually on OnlyFans",
      description: "Global user spending on the creator subscription platform OnlyFans reached approximately 7.2 billion dollars annually. The platform has experienced massive growth driven by its direct subscription and tipping model.",
      sourceName: "El Vocero",
      sources: [
        {
          name: "El Vocero — OnlyFans generated USD 7.2 billion",
          url: "https://elvocero.com.ar/2025/12/18/onlyfans-facturo-usd-7-200-millones-en-2025-y-argentina-se-ubico-entre-los-20-paises-que-mas-gastaron/",
        }
      ],
    },
    'mrbeast-content-reinvestment': {
      title: "MrBeast Reinvestment Spending",
      subtitle: "MrBeast reinvests almost all of his earnings (about 400 million dollars annually)",
      description: "Jimmy Donaldson (MrBeast) reinvests practically all revenues generated by his holding Beast Industries, estimated at about 400 million dollars annually, directly into producing his YouTube blockbusters and new business ventures. Beast Industries has an estimated valuation of 5.2 billion dollars.",
      sourceName: "Plisio",
      sources: [
        {
          name: "Plisio — MrBeast profile and finances",
          url: "https://plisio.net/es/profiles/mrbeast",
        }
      ],
    },
    'eras-tour-ticket-spending': {
      title: "The Eras Tour Ticket Spending",
      subtitle: "Fans spent over 2 billion dollars on tickets for Taylor Swift's tour",
      description: "Global fan spending on ticket sales for Taylor Swift's \"The Eras Tour\" exceeded 2 billion dollars over nearly two years of concerts, making it the highest-grossing music tour in history. This financial impact also significantly boosted local economies in each visited city.",
      sourceName: "Billboard",
      sources: [
        {
          name: "Billboard — The Eras Tour exceeds 2 billion",
          url: "https://www.billboard.com/espanol/noticias/taylor-swift-eras-tour-supera-2000-millones-de-dolares-en-ventas-1235849106/",
        },
        {
          name: "GQ — Taylor Swift Earnings from The Eras Tour",
          url: "https://www.revistagq.com/moda/articulo/cuanto-gana-nike-michael-jordan",
        },
        {
          name: "TN — What Taylor Swift did with the earnings",
          url: "https://tn.com.ar/musica/noticias/2025/12/12/taylor-swift-blanqueo-que-hizo-con-la-millonaria-cifra-que-gano-con-the-eras-tour/",
        }
      ],
    },
    'jordan-brand-spending': {
      title: "Spending on Jordan Brand Products",
      subtitle: "Consumers spend over 7 billion dollars annually on Jordan brand products",
      description: "Global consumer spending on shoes, apparel, and accessories from Nike's Jordan Brand division exceeds 7 billion dollars annually. Michael Jordan receives approximately 5% of these sales in royalties from his historic endorsement deal.",
      sourceName: "GQ",
      sources: [
        {
          name: "GQ — How much Nike and Michael Jordan make from Jordan Brand",
          url: "https://www.revistagq.com/moda/articulo/cuanto-gana-nike-michael-jordan",
        },
        {
          name: "NX Noticias — Michael Jordan royalties exceed 300 million",
          url: "https://www.facebook.com/NXNoticias.oficial/posts/michael-jordan-regal%C3%ADas-con-nike-superan-los-300-millones-de-d%C3%B3lares-al-a%C3%B1ola-hi/122280916874074746/",
        }
      ],
    },
    'ferrari-f1-spending': {
      title: "Ferrari Formula 1 Team Expenditure",
      subtitle: "Ferrari spends about 185 million dollars annually to compete under the F1 cost cap",
      description: "The annual expenditure of the Ferrari team to operate its Formula 1 operations is estimated at an average of 185 million dollars (ranging from 170 to 200 million USD) under the FIA-regulated cost cap. This funding covers car development, testing, and team operational salaries, excluding exclusions like driver salaries and engines.",
      sourceName: "Revista Car",
      sources: [
        {
          name: "Revista Car — How much it costs to run an F1 team",
          url: "https://revistacar.es/cuanto-cuesta-tener-un-equipo-de-formula-1/",
        }
      ],
    },
    'un-annual-budget': {
      title: "UN Regular Budget Spending",
      subtitle: "The United Nations (UN) regular budget for 2026 is 3.45 billion dollars",
      description: "The approved regular budget for the functioning of the United Nations (UN) for the year 2026 amounts to 3.45 billion dollars. This budget funds the general secretariat, peace missions, programs, and offices of the United Nations worldwide.",
      sourceName: "UN News",
      sources: [
        {
          name: "UN News — UN regular budget for 2026",
          url: "https://news.un.org/es/story/2025/12/1540968",
        }
      ],
    },
    'who-annual-budget': {
      title: "WHO Basic Budget Spending",
      subtitle: "The World Health Organization (WHO) basic program budget is 2.1 billion dollars annually",
      description: "The approved budget for the basic programs of the World Health Organization (WHO) for the 2026-2027 biennium amounts to 4.2 billion dollars (equivalent to an annualized average of 2.1 billion dollars). This cycle includes a historic 20% increase in assessed contributions to strengthen responses to global health emergencies.",
      sourceName: "World Health Organization (WHO)",
      sources: [
        {
          name: "WHO — Member States approve 2026-2027 budget and increase",
          url: "https://www.who.int/es/news/item/20-05-2025-in-historic-move--who-member-states-approve-20--funding-increase-and-2026-27-budget",
        },
        {
          name: "WHO — Official Spanish Website",
          url: "https://www.who.int/es",
        }
      ],
    },
    'global-pharmaceutical-spending': {
      title: "Global Pharmaceutical Spending",
      subtitle: "Spending on medicines and pharmaceutical products exceeds 2 trillion dollars annually worldwide",
      description: "Global pharmaceutical spending exceeded 2 trillion dollars annually (2,000,000,000,000 USD), ranging between 1.7 and 2.3 trillion depending on invoice price or net market price segmentation. This sector is driven by the development of new highly specialized medicines, global access to treatments, and population aging.",
      sourceName: "Intuition Labs",
      sources: [
        {
          name: "Intuition Labs — Pharmaceutical Market Analysis & Trends",
          url: "https://intuitionlabs.ai/articles/pharmaceutical-market-analysis-trends",
        }
      ],
    },
    'global-obesity-economic-cost': {
      title: "Economic Cost of Obesity and Overweight",
      subtitle: "The global economic impact of obesity and overweight is around 2 trillion dollars annually",
      description: "The global economic cost resulting from overweight and obesity is estimated at approximately 2 trillion dollars annually, representing between 2.4% and 2.8% of global GDP. This impact includes direct medical expenses and massive losses in productivity due to work disability or premature death. Projections estimate it will exceed 4.3 trillion annually by 2035.",
      sourceName: "Live-Med (World Obesity Atlas)",
      sources: [
        {
          name: "Live-Med — Analysis of the World Obesity Atlas: Economic impact of obesity",
          url: "https://live.med/es/blog/analisis-del-world-obesity-atlas-2023-impacto-economico-obesidad/",
        }
      ],
    },
    'global-depression-anxiety-cost': {
      title: "Cost of Depression and Anxiety",
      subtitle: "Depression and anxiety cost the global economy around 1 trillion dollars annually",
      description: "The global economic impact of depression and anxiety disorders amounts to approximately 1 trillion dollars annually. This cost mainly stems from lost productivity due to absenteeism, presenteeism, and medical leave, affecting the mental health of millions worldwide.",
      sourceName: "Yahoo News (WHO / World Bank)",
      sources: [
        {
          name: "Yahoo News — The global cost of anxiety and depression",
          url: "https://es-us.noticias.yahoo.com/costo-global-ansiedad-depresi%C3%B3n-supera-150118561.html",
        }
      ],
    },

    'spain-cost-raising-child': {
      title: 'Cost of Raising a Child in Spain (Ages 0–18)',
      subtitle: 'Between €115,000 and €180,000 total basic average; about €8,194 per year per child',
      description:
        'There is no single global figure, as the cost varies greatly by country. In Spain, raising a child to age 18 costs between €115,000 and €180,000 on average (mean: €147,500), equivalent to about €8,194 per year per child (~$8,932 USD). This cost includes food, clothing, education, healthcare, leisure, and transport, excluding housing and university tuition.',
      sourceName: 'Educo — How Much Does It Cost to Raise a Child in Spain?',
      sources: [
        {
          name: 'Educo — How Much Does It Cost to Raise a Child in Spain?',
          url: 'https://www.educo.org/blog/cuanto-cuesta-criar-a-un-hijo-o-hija-en-espana',
        },
      ],
    },
    'global-online-food-delivery-market': {
      title: 'Global Online Food Delivery & Takeaway Spending',
      subtitle: 'People spend over $320 billion per year on digital food delivery platforms worldwide',
      description:
        'Globally, people spend over $320 billion per year on food delivery and takeaway through digital platforms such as Uber Eats, Just Eat, Deliveroo, DoorDash, and Glovo. This market has grown exponentially since the 2020 pandemic, driven by the rise of mobile commerce, urban consumption habits, and the global expansion of dark kitchens.',
      sourceName: 'Fortune Business Insights — Online Food Delivery Market',
      sources: [
        {
          name: 'Fortune Business Insights — Online Food Delivery Market Size & Growth Report',
          url: 'https://www.fortunebusinessinsights.com/online-food-delivery-market-110672',
        },
      ],
    },
    'global-cinema-box-office-revenue': {
      title: 'Global Spending on Cinema Tickets',
      subtitle: 'Global annual spending on cinema tickets stands at around €29.6 billion (~$32.264B USD)',
      description:
        'Global annual consumer spending on cinema tickets stands at approximately €29.6 billion (~$32.264 billion USD), driven mainly by the growth of the Asian market. Asia leads the post-pandemic recovery of consumer moviegoing, while North American and European markets remain fundamental pillars of theatrical box office spending.',
      sourceName: 'Spain Audiovisual Hub / European Audiovisual Observatory',
      sources: [
        {
          name: 'Spain Audiovisual Hub — European Audiovisual Observatory: Asia Drives Global Box Office Growth',
          url: 'https://spainaudiovisualhub.digital.gob.es/es/actualidad/observatorio-audiovisual-europeo--asia-impulsa-el-crecimiento-de',
        },
      ],
    },
    'superbowl-advertising-revenue': {
      title: 'Brand Advertising Spending at the Super Bowl',
      subtitle: 'Brands paid over $414 million to advertise during the Super Bowl for the second consecutive year',
      description:
        'Companies spent over $414 million to place their ads during the Super Bowl, surpassing $400 million for the second consecutive year. A 30-second spot during the game can cost up to $8 million, making the Super Bowl the most expensive advertising showcase on the planet. Brands from automotive, food, tech, and entertainment sectors compete to reach over 100 million simultaneous viewers.',
      sourceName: 'Palco23 / Mundo Deportivo — Super Bowl Advertising Spend',
      sources: [
        {
          name: 'Palco23 / Mundo Deportivo — Super Bowl Surpasses $400M in Ad Spend for Second Year',
          url: 'https://palco23.mundodeportivo.com/media/la-super-bowl-supera-los-400-millones-de-dolares-de-ingresos-publicitarios-por-segundo-ano',
        },
      ],
    },
    'fifa-world-cup-2026-cost': {
      title: 'FIFA World Cup 2026 Organization Cost',
      subtitle: 'Total FIFA expenditure to organize and operate the first-ever 48-team World Cup',
      description:
        'The cost of organizing and operating the FIFA 2026 World Cup amounted to approximately $2.4 billion for FIFA itself. The tournament was held in 16 cities across the United States, Canada, and Mexico with 48 national teams participating for the first time in history, making it the most expensive event in the history of world football.',
      sourceName: 'BBC Mundo — FIFA World Cup 2026',
      sources: [
        {
          name: 'BBC Mundo — The organization cost of FIFA World Cup 2026',
          url: 'https://www.bbc.com/mundo/articles/cy8d7p71p7po',
        },
      ],
    },
    'fifa-world-cup-global-advertising-investment': {
      title: 'Brand Advertising Spend for FIFA World Cup 2026',
      subtitle: 'Companies spent ~$10.5B per edition to advertise during the World Cup (4-year cycle → ~$2.625B/year)',
      description:
        'The FIFA World Cup does not take place every year, but every four years. The total advertising cost that brands and companies assumed to advertise during the 2026 World Cup amounts to approximately $10.5 billion per edition (~$2.625 billion annualized). Brands paid this money to occupy space on television, streaming platforms, stadiums, and social media during the world\'s most-watched tournament.',
      sourceName: 'AdLatina — Brand Advertising Cost for FIFA World Cup 2026',
      sources: [
        {
          name: 'AdLatina — Global Advertising Investment Estimated for the 2026 World Cup is Around $10.5 Billion',
          url: 'https://www.adlatina.com/publicidad/la-inversin-publicitaria-global-estimada-para-el-mundial-2026-ronda-los-10.500-millones-de-dlares',
        },
      ],
    },
    'spain-equality-ministry-budget': {
      title: 'Spain Ministry of Equality Annual Budget',
      subtitle: 'Annual public budget allocated to equality policies and gender violence prevention programs',
      description:
        'Official general state budget (PGE) allocation for the Ministry of Equality in Spain, funding work-life reconciliation, awareness campaigns, and victim assistance systems.',
      sourceName: 'Ministry of Equality of Spain & Wikipedia',
      sources: [
        {
          name: 'Ministry of Equality — Official Press Release on Budget Execution',
          url: 'https://www.igualdad.gob.es/comunicacion/sala-de-prensa/la-ejecucion-presupuestaria-del-ministerio-de-igualdad-roza-el-96-en-2025-y-supera-la-del-ejercicio-anterior/',
        },
        {
          name: 'Wikipedia — Ministry of Equality (Spain)',
          url: 'https://en.wikipedia.org/wiki/Ministry_of_Equality_(Spain)',
        },
      ],
    },
    'cost-raising-child-18-years': {
      title: 'Total Cost of Raising a Child to Age 18',
      subtitle: 'Average cumulative spending on food, housing, education, healthcare, and child rearing',
      description:
        'Cumulative financial investment required to raise a child from birth to legal adulthood (age 18), averaging ~€320,000 / $350,000 per child across European and high-income households.',
      sourceName: 'Save the Children & Family Budget Survey (INE)',
    },
    'spain-pensions-expenditure': {
      title: 'Public Pensions Expenditure in Spain',
      subtitle: 'Monthly and annual consolidated payroll for retirement, widowhood, and disability pensions',
      description:
        'Total expenditure by the Spanish Social Security public system paying over 10 million contributory pensions, representing approximately 12.5% of national GDP.',
      sourceName: 'Spanish Social Security & Ministry of Inclusion',
    },
    'monthly-food-grocery-spending': {
      title: 'Monthly Household Food & Grocery Spending',
      subtitle: 'Consumer spending on supermarkets, fresh produce, and domestic groceries',
      description:
        'Global aggregate household grocery and supermarket food expenditure. Average family spending in Western nations ranges between €450 and €550 per month.',
      sourceName: 'Food and Agriculture Organization (FAO) & National Statistics Institute (INE)',
    },
    'wedding-industry-average-cost': {
      title: 'Average Wedding Cost & Wedding Industry Spending',
      subtitle: 'Total expenditure on banquet reception, attire, photography, honeymoon, and venue celebration',
      description:
        'Annual worldwide wedding celebration market. In Spain, the average wedding investment stands at €22,500 for an average of 120 guests.',
      sourceName: 'The Knot Global Wedding Report & Bodas.net',
    },
    'baby-diapers-annual-spending': {
      title: 'Annual Spending on Baby Diapers',
      subtitle: 'Recurrent household purchases of disposable diapers and baby hygiene products',
      description:
        'Global consumer market for infant disposable diapers. A newborn baby uses between 5,000 and 6,000 diapers in their first 30 months, averaging €50–€70 monthly per family.',
      sourceName: 'Euromonitor International & Consumer Organization (OCU)',
    },
    'spain-social-welfare-benefits': {
      title: 'Spain Social Welfare & Assistance Benefits',
      subtitle: 'Unemployment benefits, Minimum Vital Income, dependency care, and public social safety nets',
      description:
        'Public expenditure across Spain dedicated to social safety programs, unemployment coverage, vulnerable household subsidies, and the national dependency care system.',
      sourceName: 'State Public Employment Service (SEPE), Ministry of Social Rights & Eurostat',
    },
    'la-velada-production-cost': {
      title: 'Production Budget of La Velada del Año VI (Ibai)',
      subtitle: 'Technical production, stadium rental, musical performances, and security budget for the event',
      description:
        'Total production cost of the world\'s largest live streaming event organized by Ibai Llanos (Bernabéu / Metropolitano stadiums), including international artist fees and audiovisual logistics.',
      sourceName: 'KOI Productions, Twitch & Forbes Spain Media Analysis',
    },
    'netflix-annual-revenue': {
      title: 'User Spending on Netflix Subscriptions',
      subtitle: 'Global annual spending of $45.2 billion USD (~€38.8B) on paid memberships',
      description:
        'Netflix users spend approximately $45.2 billion USD (~€38.8 billion) per year. The vast majority of this spending is on paid membership fees, as ad-supported plans represent a small fraction of the total according to Xataka.',
      sourceName: 'Xataka — Netflix Content Production & Revenue Analysis',
      sources: [
        {
          name: 'Xataka — Netflix Spends $17B on Content & Generates $45.2B Revenue',
          url: 'https://www.xataka.com/streaming/netflix-gasta-17-000-millones-producir-contenido-a-youtube-se-hacen-gratis-eso-youtube-esta-ganando-partida',
        },
      ],
    },
    'amazon-prime-subscription-revenue': {
      title: 'User Spending on Amazon Prime Subscriptions',
      subtitle: 'Global annual consumer spend of $49.62 billion USD across Prime, Video, and Music',
      description:
        'Amazon does not publicly break down exact user spending for Prime Video alone, as the service is bundled into Amazon Prime. However, the total consumer spending on subscription services (including Prime, music, books, and digital video) reached $49.62 billion USD worldwide according to Marketplace Pulse.',
      sourceName: 'Marketplace Pulse & Amazon SEC Filings',
      sources: [
        {
          name: 'Marketplace Pulse — Amazon Subscription Services Sales',
          url: 'https://www.marketplacepulse.com/stats/amazon-subscription-services-sales',
        },
        {
          name: 'Amazon Prime — Official Website',
          url: 'https://www.amazon.es/prime',
        },
      ],
    },
    'disney-dtc-streaming-revenue': {
      title: 'User Spending on Disney Streaming (DTC)',
      subtitle: 'Annual consumer spend estimated between $22B and $25B USD across Disney+, Hulu, and ESPN+ ($23.5B USD average)',
      description:
        'Consumers spend approximately $22 billion to $25 billion USD per year ($23.5 billion USD average) on Disney\'s Direct-to-Consumer (DTC) segment, which encompasses streaming subscriptions for Disney+, Hulu, and ESPN+, as well as in-app purchases according to The Motley Fool.',
      sourceName: 'The Motley Fool — Disney Streaming Profit Analysis',
      sources: [
        {
          name: 'The Motley Fool — How High Can Disney Streaming Profit Go?',
          url: 'https://www.fool.com/investing/2026/03/29/how-high-can-disney-streaming-profit-go/',
        },
      ],
    },
    'warner-bros-discovery-max-revenue': {
      title: 'User Spending on Max (HBO)',
      subtitle: 'Annual streaming DTC segment spending estimated between $10B and $11B USD ($10.5B USD average)',
      description:
        'Subscribers of Warner Bros. Discovery (owner of HBO/Max) spend approximately $10 billion to $11 billion USD per year ($10.5 billion USD average) on its global streaming (DTC) segment, with the vast majority coming from user subscription fees according to Señal News.',
      sourceName: 'Señal News — Warner Bros. Discovery Financial & Streaming Report',
      sources: [
        {
          name: 'Señal News — Warner Bros. Discovery Ends 2025 Under Pressure Despite Streaming Gains',
          url: 'https://senalnews.com/en/data/warner-bros-discovery-ends-2025-under-pressure-despite-streaming-gains',
        },
      ],
    },
    'twitch-annual-revenue': {
      title: 'User Spending on Twitch',
      subtitle: 'Estimated annual global spending between $1.8B and $1.9B USD ($1.85B USD average)',
      description:
        'Users and advertisers spend approximately $1.8 billion to $1.9 billion USD per year ($1.85 billion USD average) on Twitch through channel subscriptions, bits/donations, and ad purchases according to Business of Apps.',
      sourceName: 'Business of Apps — Twitch Revenue & Usage Statistics',
      sources: [
        {
          name: 'Business of Apps — Twitch Statistics (Revenue & Subscriptions)',
          url: 'https://www.businessofapps.com/data/twitch-statistics/',
        },
      ],
    },
    'global-cocaine-opioids-spending': {
      title: 'Spending on Cocaine & Opioids',
      subtitle: 'Estimated annual retail spending of $245 billion USD worldwide',
      description:
        'The combined global illicit spending on cocaine and opioids is estimated between $220 billion and $270 billion annually at the retail level ($245 billion average), representing a critical segment of consumption mapped by the United Nations Office on Drugs and Crime (UNODC).',
      sourceName: 'UNODC & International Drug Market Analysis',
      sources: [
        {
          name: 'UNODC — Report on Illicit Financial Flows Related to Drug Trafficking',
          url: 'https://www.unodc.org/unodc/frontpage/2023/December/illicit-financial-flows-related-to-cross-border-drug-trafficking-are-comparable-to-the-value-of-exports-of-licit-markets--unodc-report-shows.html',
        },
      ],
    },
    'global-illicit-firearms-spending': {
      title: 'Spending on Spending on Illicit Firearms Trafficking',
      subtitle: 'Estimated economic spending of $1 billion USD annually worldwide',
      description:
        'According to the United Nations Office on Drugs and Crime (UNODC), buyers spend approximately $1 billion annually on illicit firearms trafficking, arming opposing factions in conflicts across Africa, the Middle East, Latin America, and Asia.',
      sourceName: 'United Nations Office on Drugs and Crime (UNODC)',
      sources: [
        {
          name: 'UNODC — Illicit Firearms Trade and Trafficking Report',
          url: 'https://www.unodc.org/',
        },
      ],
    },
    'global-cybercrime-losses': {
      title: 'Global Cybercrime Losses',
      subtitle: 'Projected global economic cost of cybercrime reaching $10.8 trillion annually',
      description:
        'Global losses caused by cybercrime reach $10.8 trillion worldwide in 2026, covering data theft, digital extortion, online fraud, and operational disruption for companies and governments.',
      sourceName: 'Cybersecurity Ventures — 500 Ransomware & Cybercrime Statistics for 2026',
      sources: [
        {
          name: 'Cybersecurity Ventures — Official 2026 Cybercrime Report',
          url: 'https://cybersecurityventures.com/500-ransomware-statistics-for-2026/',
        },
      ],
    },
    'global-ransomware-damages': {
      title: 'Global Ransomware Damages',
      subtitle: 'Global economic cost of data hijacking and digital extortion exceeding $74B per year',
      description:
        'Specific damages caused by ransomware attacks exceed $74 billion annually worldwide in 2026, including ransom payments, downtime costs, and forensic remediation.',
      sourceName: 'Cybersecurity Ventures — 500 Ransomware Statistics for 2026',
      sources: [
        {
          name: 'Cybersecurity Ventures — 500 Ransomware Statistics for 2026',
          url: 'https://cybersecurityventures.com/500-ransomware-statistics-for-2026/',
        },
      ],
    },
    'global-money-laundering-total': {
      title: 'Global Money Laundering',
      subtitle: 'Estimated volume between $1.5 trillion and $2.85 trillion annually ($2.17 Trillion USD average)',
      description:
        'It is estimated that between €715 billion and €2 trillion ($1.5 to $2.85 trillion USD) are laundered worldwide each year, equivalent to approximately 2% to 5% of global Gross Domestic Product (GDP) according to European Council data.',
      sourceName: 'Council of the European Union — Anti-money laundering',
      sources: [
        {
          name: 'European Council — Infographic on Anti-Money Laundering',
          url: 'https://www.consilium.europa.eu/es/infographics/anti-money-laundering/',
        },
      ],
    },
    'global-black-market-economy': {
      title: 'Global Black Market & Illicit Economy',
      subtitle: 'Estimated average economic volume between $7 trillion and $15 trillion annually ($11.5 Trillion USD)',
      description:
        'The global black market and illicit economy generate between 8% and 15% of global Gross Domestic Product (GDP), according to IMF estimates and research on organized crime. This represents an average estimate of $11.5 trillion annually.',
      sourceName: 'El País & International Monetary Fund (IMF)',
      sources: [
        {
          name: 'El País — The colossal size of the global black market and illicit economy (IMF)',
          url: 'https://elpais.com/economia/2019/09/21/actualidad/1569062038_189861.html',
        },
      ],
    },
    'global-military-aircraft-market': {
      title: 'Spending on Military Aircraft',
      subtitle: 'Annual spending of $67 billion USD on military aircraft ($52.8 billion USD for combat fighter jets)',
      description:
        'Global spending on military aircraft and combat fighter jets reaches an annual valuation of over $67 billion USD, with fighter jets representing $52.8 billion USD of the market according to Fortune Business Insights.',
      sourceName: 'Fortune Business Insights — Military Aircraft Market Report',
      sources: [
        {
          name: 'Fortune Business Insights — Military Aircraft Market Size & Analysis',
          url: 'https://www.fortunebusinessinsights.com/es/military-aircraft-market-102771',
        },
      ],
    },
    'eu-defense-spending-total': {
      title: 'European Union Defense Expenditure',
      subtitle: 'Consolidated military budget of EU Member States estimated at €454 billion in 2026',
      description:
        'In 2025, defense spending by European Union Member States increased for the eleventh consecutive year, reaching €418 billion. In 2026, it is projected to hit a record €454 billion (~$494.86 billion USD) according to official Council of the European Union data.',
      sourceName: 'Council of the European Union — EU Defence in numbers',
      sources: [
        {
          name: 'European Council — EU Defence in numbers (Key Figures)',
          url: 'https://www.consilium.europa.eu/es/policies/defence-numbers/',
        },
      ],
    },
    'global-nuclear-weapons-spending': {
      title: 'Global Nuclear Weapons Expenditure',
      subtitle: 'All-time record of $118.8 billion USD annually (~$3,768 USD per second)',
      description:
        'Global expenditure on the maintenance, development, and modernization of nuclear arsenals reached an all-time record of $118.8 billion USD (approximately $3,768 per second) recorded by the International Campaign to Abolish Nuclear Weapons (ICAN).',
      sourceName: 'ICAN & JusPax — Global Nuclear Weapons Spending',
      sources: [
        {
          name: 'ICAN — Global Nuclear Weapons Spending and Modernization Report',
          url: 'https://www.juspax-es.org/l/premeditado-gasto-mundial-en-armas-nucleares-en-2025/',
        },
      ],
    },
    'global-military-spending': {
      title: 'Global Military Expenditure',
      subtitle: 'Global arms budget and defense spending across all nations per year',
      description:
        'Global military and arms expenditure reaches an all-time record of $2.887 trillion ($2,887 billion USD) driven by geopolitical tensions and defense investments according to SIPRI data reported by Deutsche Welle (DW).',
      sourceName: 'Deutsche Welle (DW) — New record: arms spending rises worldwide',
    },
    'global-narcotics-spending': {
      title: 'Global Narcotics Expenditure',
      subtitle: 'Estimated annual economic volume of the illicit global drug trade',
      description:
        'Estimated global expenditure on narcotics and illicit substances reaching $750 billion annually, representing one of the largest sectors of the underground economy according to studies on global criminal activities.',
      sourceName: 'Ethic — How much does criminal activity weigh in the global economy?',
    },
    'spain-individual-monthly-food-cost': {
      title: 'Monthly Food Spending per Person in Spain',
      subtitle: 'Average estimated monthly budget of €250 for groceries and food per inhabitant',
      description:
        'Average expenditure on food and groceries for a resident in Spain, estimated at €250 per month (€3,000 annually) according to CaixaBank cost of living reports.',
      sourceName: 'CaixaBank — Cost of Living in Spain Guide',
    },
    'individual-monthly-food-cost': {
      title: 'Individual Monthly Food & Dining Expenditure',
      subtitle: 'Average individual monthly spending on groceries and dining out per adult',
      description:
        'Average monthly food expenditure per individual adult for home cooking and restaurant dining, averaging between €220 and €310 monthly per person in Spain.',
      sourceName: 'INE Family Budget Survey & Eurostat',
    },
    'government-styling-makeup-spending': {
      title: 'Official Styling & Image Budget for Government Officials',
      subtitle: 'Public procurement contracts for hair styling, makeup, and image consulting for official appearances',
      description:
        'Public tender spending for hair dressing, makeup, and personal styling services allocated for institutional events, official speeches, and televised press conferences of government officials.',
      sourceName: 'Public Sector Procurement Platform & Transparency Portal (Spain)',
    },
    'spain-total-annual-public-spending': {
      title: 'Total Annual Public Expenditure of Spain',
      subtitle: 'Consolidated public budget across Central Administration, Autonomous Communities, and Local City Councils',
      description:
        'Aggregate annual public expenditure of the Kingdom of Spain across all state levels (General Administration, 17 Regional Autonomous Governments, Social Security, and municipalities), totaling over €645 billion annually.',
      sourceName: 'Ministry of Finance & Bank of Spain',
    },
    'spain-social-expenditure-total': {
      title: 'Total Social Protection Expenditure in Spain',
      subtitle: 'Combined state budget allocated to pensions, public healthcare, education, and social services',
      description:
        'Total public funds allocated by Spain to welfare state policies: national health service, public education, retirement pensions, and social assistance, representing over 56% of total public expenditure.',
      sourceName: 'Eurostat & Ministry of Finance (Spain)',
    },
    'spain-public-spending-gdp-percentage': {
      title: 'Spain Public Expenditure as Share of GDP (44.6%)',
      subtitle: 'Percentage of national Gross Domestic Product channeled through the public sector',
      description:
        'Public administration spending in Spain accounts for 44.6% of national Gross Domestic Product (GDP), aligning closely with the European Union and Eurozone averages.',
      sourceName: 'Bank of Spain, INE & European Commission (AMECO)',
    },
    'global-public-expenditure-total': {
      title: 'Total Global Government & Public Expenditure',
      subtitle: 'Consolidated fiscal budget of all sovereign states and public administrations worldwide',
      description:
        'Total global fiscal budget administered annually by sovereign governments on public infrastructure, education, defense, social safety nets, and public debt servicing (~32% of Global GDP).',
      sourceName: 'International Monetary Fund (IMF World Economic Outlook) & World Bank',
    },
    'usa-individual-monthly-cost-of-living': {
      title: 'Average Monthly Cost of Living per Person in the US',
      subtitle: 'Monthly living cost for a single adult in the United States (rent, healthcare, food, and transport)',
      description:
        'Living in the US requires an average of $3,200 to $4,200 monthly for a single adult ($38,000 to $50,000 annually), distributed across housing ($1,400-$1,900 rent), private medical coverage, transportation, and groceries.',
      sourceName: 'U.S. Bureau of Labor Statistics (BLS) & MIT Living Wage Calculator',
    },
    'usa-supermarket-grocery-spending': {
      title: 'Monthly Grocery & Supermarket Spending in the US',
      subtitle: 'Average household and individual monthly food budget in American supermarkets',
      description:
        'An individual in the US spends an average of $420 to $580 monthly on food groceries cooked at home. Food prices vary considerably by state, with California and New York recording the highest levels.',
      sourceName: 'USDA Economic Research Service & U.S. Census Bureau',
    },
    'usa-federal-minimum-wage-annual': {
      title: 'US Minimum Wage: Monthly and Annual Benchmarks',
      subtitle: 'Federal minimum wage ($7.25/h = $1,256/mo) vs. state level averages ($15-$17.50/h = $2,600-$2,950/mo)',
      description:
        'The US federal statutory minimum wage is established at $7.25 per hour ($1,256 monthly full-time gross = $15,080 per year), while over 30 states have enacted higher minimum wage floors between $15.00 and $17.50/hr.',
      sourceName: 'U.S. Department of Labor (DOL) & Economic Policy Institute',
    },
    'cost-of-living-spain-vs-usa': {
      title: 'Cost of Living Comparison: Spain vs. United States',
      subtitle: 'The overall cost of living in the United States is 65% to 85% higher than in Spain',
      description:
        'Living in the US is significantly more expensive than in Spain: residential rental housing is 110% higher, healthcare and medical insurance are up to 400% more costly, and groceries cost 40% to 70% more in the US.',
      sourceName: 'OECD Better Life Index, Numbeo Cost of Living & Eurostat',
    },
    'july-fourth-fireworks-spending': {
      title: 'Annual Spending on Fireworks & 4th of July Pyrotechnics',
      subtitle: 'Global and US consumer expenditure on celebratory fireworks and public pyrotechnic displays',
      description:
        'Global consumer fireworks and commercial pyrotechnics spending. In the United States alone during Independence Day (4th of July) festivities, consumers and municipalities spend over $1.5 billion on fireworks.',
      sourceName: 'American Pyrotechnics Association (APA) & U.S. CPSC',
    },
    'uk-asylum-seekers-support-spending': {
      title: 'UK Asylum Support & Accommodation Expenditure',
      subtitle: 'Annual Home Office budget on hotel accommodation, caseworker processing, and asylum support payments',
      description:
        'Total expenditure by the UK Home Office dedicated to processing asylum applications, providing hotel and contingency accommodation, and issuing weekly subsistence allowances to asylum applicants.',
      sourceName: 'UK Home Office & National Audit Office (NAO)',
    },
    'us-snap-food-stamps-spending': {
      title: 'US SNAP Food Assistance (Food Stamps) Budget',
      subtitle: 'Federal nutrition safety net budget supporting over 41 million American low-income beneficiaries',
      description:
        'Federal expenditure by the USDA Supplemental Nutrition Assistance Program (SNAP / Food Stamps), transferring electronic funds directly to low-income families and seniors for nutritious food.',
      sourceName: 'USDA Food and Nutrition Service (FNS) & Congressional Budget Office (CBO)',
    },
    'gta-6-development-marketing-budget': {
      title: 'Grand Theft Auto VI (GTA 6) Production & Marketing Budget',
      subtitle: 'Total multi-year investment in proprietary game engine tech, motion capture, and global launch marketing',
      description:
        'Estimated multi-year total budget for Grand Theft Auto VI (Rockstar Games / Take-Two Interactive), recognized as the most expensive entertainment media production in human history.',
      sourceName: 'Take-Two Interactive SEC Filings & Financial Analyst Consensus',
    },
    'global-cancer-research-spending': {
      title: 'Global Cancer Research & Oncology R&D Expenditure',
      subtitle: 'Worldwide funding for oncology trials, cancer immunotherapy, and novel anti-tumor drug discovery',
      description:
        'Combined global investment across sovereign health institutes (such as the US NCI), philanthropic cancer charities, and biopharmaceutical corporations developing life-saving cancer therapies.',
      sourceName: 'National Cancer Institute (NCI), WHO (IARC) & Cancer Research UK',
    },
    'uk-welfare-benefits-total-spending': {
      title: 'Total UK Welfare & Social Security Benefits Expenditure',
      subtitle: 'Annual state expenditure on State Pension, Universal Credit, disability, and housing allowances',
      description:
        'Consolidated social security expenditure administered by the UK Department for Work and Pensions (DWP) delivering retirement pensions, Universal Credit, and disability allowances (~£270 billion).',
      sourceName: 'UK Department for Work and Pensions (DWP) & Office for Budget Responsibility (OBR)',
    },
    'global-space-exploration-spending': {
      title: 'Public Investment in Space Exploration',
      subtitle: 'Global public investment in space exploration reaches €119 billion annually',
      description:
        'The global budget for space exploration has shown significant growth in recent years. It is estimated that governments worldwide will make a global public investment in the space sector of €119 billion annually, driving lunar missions, satellites, and orbital technology.',
      sourceName: 'FasterCapital — Cost Challenge of Space Exploration',
    },
    'mega-sporting-events-organization-cost': {
      title: 'Organization Cost of Mega Sporting Events (World Cup & Olympics)',
      subtitle: 'Average annualized expenditures in stadium construction, broadcasting logistics, and security',
      description:
        'Annualized global expenditure in bidding, constructing infrastructure, and staging mega international tournaments including the FIFA World Cup, Olympic Games, and the UEFA Champions League.',
      sourceName: 'International Olympic Committee (IOC) & FIFA Financial Reports',
    },
    'global-military-defence-spending': {
      title: 'Global Military & Defense Expenditure',
      subtitle: 'Combined defense budgets, arms procurement, armed forces personnel, and defense R&D of all nations',
      description:
        'Total annual worldwide military expenditure across all sovereign defense ministries, led by the United States, China, Russia, India, and NATO allied members.',
      sourceName: 'Stockholm International Peace Research Institute (SIPRI)',
    },
    'global-ai-artificial-intelligence-spending': {
      title: 'Global Spending on Artificial Intelligence (AI)',
      subtitle: 'Annual enterprise and datacenter investment in GPU chips, LLM infrastructure, and generative AI systems',
      description:
        'Worldwide enterprise, cloud hyperscaler, and governmental spending on artificial intelligence computing hardware, software ecosystems, and machine learning infrastructure.',
      sourceName: 'IDC Worldwide AI Tracker & Gartner',
    },
    'global-healthcare-total': {
      title: 'Total Global Healthcare Expenditure',
      subtitle: 'Combined spending on hospitals, clinical treatments, prescription drugs, and public health systems',
      description:
        'Total worldwide expenditure across public and private health sectors, including hospital facilities, medical research, pharmaceutical supply chains, and health insurance systems (~10% of World GDP).',
      sourceName: 'World Health Organization (WHO) & World Bank',
    },
    'global-advertising-marketing-spending': {
      title: 'Global Advertising & Marketing Expenditure',
      subtitle: 'Annual global advertising spend across digital platforms, television, search engines, and social media',
      description:
        'Total global commercial advertising expenditure across Google, Meta, television broadcasting, print, outdoor billboards, and influencer campaigns, approaching $1 Trillion annually.',
      sourceName: 'WARC Global Ad Spend Outlook & GroupM',
    },
    'global-economic-cost-of-war': {
      title: 'Global Economic Impact & Cost of War',
      subtitle: 'Combined worldwide economic destruction, military spending, refugees, and lost GDP from active armed conflicts',
      description:
        'Global macroeconomic cost of armed conflicts, war damage, physical destruction of cities, lost economic output, and humanitarian aid according to the Institute for Economics and Peace (~13% of World GDP).',
      sourceName: 'Institute for Economics and Peace (IEP Global Peace Index) & World Bank',
    },
    'global-electricity-power-spending': {
      title: 'Global Electricity & Power Generation Spending',
      subtitle: 'Worldwide spending on electricity consumption across households, factories, datacenters, and smart grids',
      description:
        'Total worldwide expenditure on electrical power generated by renewables, nuclear, natural gas, and coal grids, accelerated by electric transport and AI datacenter computing demands.',
      sourceName: 'International Energy Agency (IEA) & BloombergNEF',
    },
    'global-crude-oil-spending-annual': {
      title: 'Global Annual Expenditure on Crude Oil',
      subtitle: 'Daily global consumption of over 102 million barrels of crude oil for transport, fuels, and petrochemicals',
      description:
        'Total market value of crude petroleum consumed worldwide (~102 million barrels/day) refined into gasoline, diesel, aviation jet fuel, heating oils, and synthetic polymers.',
      sourceName: 'International Energy Agency (IEA) & OPEC Statistical Bulletin',
    },
    'global-christmas-holiday-spending': {
      title: 'Global Christmas & Holiday Season Retail Spending',
      subtitle: 'Worldwide consumer spending on holiday gifts, festive groceries, toys, decorations, and year-end travel',
      description:
        'Consumer holiday shopping expenditure across the globe spanning Black Friday, Christmas, and New Year festivities, driven by retail shopping, gastronomy, and family reunions.',
      sourceName: 'National Retail Federation (NRF) & Global Retail Analytics',
    },
    'annual-cost-of-owning-a-dog': {
      title: 'Annual Cost of Owning a Dog & Canine Care',
      subtitle: 'Average annual cost of $1,400 to $2,400 per dog on premium food, vet checkups, vaccinations, and grooming',
      description:
        'Average annual expenditure per household on raising a pet dog, factoring in veterinary care, nutritious food, pet health insurance, boarding, and routine grooming.',
      sourceName: 'American Pet Products Association (APPA) & FEDIAF',
    },
    'annual-cost-of-owning-a-cat': {
      title: 'Annual Cost of Owning a Cat & Feline Care',
      subtitle: 'Average annual cost of $950 to $1,600 per cat on nutrition, hygiene litter, vet care, and wellness toys',
      description:
        'Average annual cost incurred by domestic cat owners, including vet appointments, dental checkups, cat litter, high-protein food, and preventative care.',
      sourceName: 'American Pet Products Association (APPA) & PDSA Wellbeing',
    },
    'annual-cost-of-owning-a-horse': {
      title: 'Annual Cost of Owning a Horse & Equestrian Care',
      subtitle: 'Average annual cost of $4,500 to $12,000 per horse on boarding, farrier, feed, and equestrian care',
      description:
        'Annual financial commitment required to board and maintain an equestrian horse, encompassing stable livery fees, hay and feed, professional farrier shoes, and equine veterinary care.',
      sourceName: 'British Equestrian Trade Association (BETA) & American Horse Council',
    },
    'uk-state-pension-annual-cost': {
      title: 'Annual Cost of the UK State Pension',
      subtitle: 'Annual UK government expenditure delivering state retirement pensions to over 12.6 million retirees',
      description:
        'Annual fiscal budget expended by the UK Department for Work and Pensions (DWP) paying the basic and new State Pension under the Triple Lock mechanism (~£125 billion).',
      sourceName: 'UK Department for Work and Pensions (DWP) & OBR',
    },
    'annual-cost-of-amazon-prime': {
      title: 'User Spending on Amazon Prime Subscriptions',
      subtitle: 'Annual consumer spend generated by over 200 million worldwide members ($139/yr or €49.90/yr)',
      description:
        'Global annual consumer subscription revenue paid to Amazon for Prime membership benefits, free shipping, Prime Video entertainment, and exclusive services.',
      sourceName: 'Amazon.com, Inc. SEC Form 10-K & CIRP Research',
    },
    'annual-cost-of-owning-a-pool': {
      title: 'Annual Maintenance & Operating Cost of a Swimming Pool',
      subtitle: 'Average annual cost of $3,000 to $5,000 per pool in chlorine, chemicals, water, and pump electricity',
      description:
        'Annual operational and maintenance expenses for residential inground swimming pools, encompassing sanitizing chemicals, water utility bills, pump electricity, filter maintenance, and seasonal opening/closing.',
      sourceName: 'Pool & Hot Tub Alliance (PHTA) & HomeAdvisor',
    },
    'global-video-games-purchases-spending': {
      title: 'Global Video Game Purchases & Gaming Expenditure',
      subtitle: 'Worldwide consumer spending on console, PC, mobile games, DLCs, microtransactions, and gaming subscriptions',
      description:
        'Total global consumer spending across digital downloads, physical game copies, mobile microtransactions, and subscription tiers (PlayStation Plus, Xbox Game Pass).',
      sourceName: 'Newzoo Global Games Market Report & ESA',
    },
    'global-coffee-purchases-spending': {
      title: 'Global Coffee Purchases & Retail Consumption',
      subtitle: 'Worldwide daily consumption of over 2.25 billion cups across specialty cafes and supermarkets',
      description:
        'Total consumer expenditure on packaged roasted coffee beans, espresso capsules, and prepared beverages served across coffee shops and specialty cafes globally.',
      sourceName: 'International Coffee Organization (ICO) & Statista',
    },
    'global-bottled-water-purchases-spending': {
      title: 'Global Bottled Water Purchases & Consumption',
      subtitle: 'Annual global retail consumption of over 390 billion liters of packaged mineral and purified water',
      description:
        'Total global commercial expenditure on bottled drinking water, natural spring water, and sparkling water bottles purchased by households and enterprises.',
      sourceName: 'International Bottled Water Association (IBWA) & UNU-INWEH',
    },
    'global-illicit-arms-trafficking-spending': {
      title: 'Global Illicit Arms Trafficking & Black Market Weapons',
      subtitle: 'Estimated annual black market revenue from illegal small arms, assault rifles, and smuggled munitions',
      description:
        'Estimated economic scale of the clandestine black market for illicit firearms, assault rifles, and smuggled ammunition tracked by the United Nations Office on Drugs and Crime (UNODC) and Small Arms Survey.',
      sourceName: 'UN Office on Drugs and Crime (UNODC) & Small Arms Survey',
    },
    'global-cryptocurrency-purchases-spending': {
      title: 'Global Cryptocurrency Purchases & Fiat Inflows',
      subtitle: 'Annual net fiat currency invested by retail and institutional buyers into Bitcoin, Ethereum, and digital assets',
      description:
        'Annualized new fiat capital injected by retail and institutional investors purchasing Bitcoin, Ethereum, stablecoins, and cryptocurrencies via regulated exchanges and on-ramps.',
      sourceName: 'Chainalysis Global Crypto Adoption Index & CoinGecko',
    },
    'ai-datacenters-chatgpt-spending': {
      title: 'Global Spending on AI Datacenters & ChatGPT Infrastructure',
      subtitle: 'Record hyperscaler CapEx in GPU server clusters, liquid cooling systems, and power grid substations',
      description:
        'Global capital expenditure by hyperscalers (Microsoft, AWS, Google Cloud, Meta, OpenAI) dedicated to building and equipping compute datacenters powering generative AI models like ChatGPT.',
      sourceName: 'Dell\'Oro Group Data Center CapEx & Synergy Research',
    },
    'weight-loss-drugs-ozempic-spending': {
      title: 'Global Spending on Weight-Loss Drugs (Ozempic & GLP-1)',
      subtitle: 'Worldwide consumer and insurance expenditures on GLP-1 weight loss and diabetes treatments (Ozempic, Wegovy, Mounjaro)',
      description:
        'Total global market expenditure across healthcare systems, private insurance, and out-of-pocket patient spending on GLP-1 receptor agonist medications for obesity management and metabolic health.',
      sourceName: 'IQVIA Global Medicine Spending & Novo Nordisk / Eli Lilly Reports',
    },
    'top-10-football-clubs-transfer-spending': {
      title: 'Transfer Spending by the World\'s Top 10 Richest Football Clubs',
      subtitle: 'Combined annual transfer fees spent by Real Madrid, Manchester City, Chelsea, PSG, Arsenal and European giants',
      description:
        'Aggregate annual player transfer expenditure executed by the 10 highest-revenue football clubs in the world across summer and winter transfer windows.',
      sourceName: 'Transfermarkt & FIFA Transfer Matching System (TMS)',
    },
    'top-10-football-clubs-total-payroll-spending': {
      title: 'Total Wage Bill & Payroll of the Top 10 Richest Football Clubs',
      subtitle: 'Annual wage commitments to star players, coaches, and sports staff in elite global football',
      description:
        'Consolidated annual staff payroll and wage expenditure of the top 10 richest football clubs in the world according to UEFA and the Deloitte Football Money League.',
      sourceName: 'Deloitte Football Money League & UEFA Club Licensing Benchmark',
    },
    'global-football-transfers-spending': {
      title: 'Total Global Expenditure on Football Transfers',
      subtitle: 'Total worldwide financial volume of international and domestic player transfers across all FIFA associations',
      description:
        'Total monetary fees paid to transfer professional football players across all leagues and confederations (UEFA, Premier League, LaLiga, Serie A, Saudi Pro League) reported by FIFA.',
      sourceName: 'FIFA Global Transfer Report & TMS',
    },
    'global-illicit-drug-trade': {
      title: 'Global Illicit Drug Trade & Narcotics Trafficking',
      subtitle: 'Clandestine worldwide market for cocaine, opiates, cannabis, and synthetic illicit drugs',
      description:
        'Estimated economic scale of the international illegal narcotics trade tracked by the United Nations Office on Drugs and Crime (UNODC) World Drug Report.',
      sourceName: 'UN Office on Drugs and Crime (UNODC World Drug Report)',
    },
    'illicit-stolen-art-antiquities-trafficking': {
      title: 'Illicit Trafficking of Stolen Art & Cultural Antiquities',
      subtitle: 'International black market for stolen masterworks, archaeological looting, and illicit cultural heritage',
      description:
        'Annual underground financial revenue generated from museum theft, archaeological site plundering, and the illicit trafficking of cultural property tracked by UNESCO and INTERPOL.',
      sourceName: 'UNESCO & INTERPOL Works of Art Unit',
    },
    'global-counterfeit-pirated-goods-trade': {
      title: 'Global Trade in Counterfeit & Pirated Goods',
      subtitle: 'Worldwide market for imitation apparel, footwear, fake electronics, and counterfeit pharmaceuticals',
      description:
        'Total estimated volume of international trade in intellectual property infringements, fake luxury goods, and counterfeit parts according to the OECD and EUIPO (~2.5% of world trade).',
      sourceName: 'OECD & European Union Intellectual Property Office (EUIPO)',
    },
    'global-cybercrime-ransomware-damages': {
      title: 'Global Losses to Cybercrime & Ransomware Extortion',
      subtitle: 'Worldwide economic damage from corporate ransomware, digital fraud, data theft, and cyberattacks',
      description:
        'Total economic toll inflicted by cybercriminals, ransomware syndicates, intellectual property theft, and financial fraud reported by Cybersecurity Ventures and the FBI IC3.',
      sourceName: 'Cybersecurity Ventures & FBI IC3 Report',
    },
    'cristiano-ronaldo-annual-earnings-wealth': {
      title: 'Cristiano Ronaldo Annual Earnings & Wealth Tracker',
      subtitle: 'Al-Nassr player salary, Nike lifetime contract, Binance, and global CR7 commercial endorsements',
      description:
        'Total annual earnings accrued by Cristiano Ronaldo combining his Saudi Pro League contract at Al-Nassr and global corporate sponsorships. Estimated net worth exceeds $750 Million.',
      sourceName: 'Forbes Highest-Paid Athletes & Bloomberg',
    },
    'lionel-messi-annual-earnings-wealth': {
      title: 'Lionel Messi Annual Earnings & Wealth Tracker',
      subtitle: 'Inter Miami player salary, Apple TV MLS revenue share, Adidas partnership, and sponsorships',
      description:
        'Total annual earnings generated by Lionel Messi spanning his MLS salary at Inter Miami, Apple TV Season Pass subscriber profit sharing, and Adidas global royalties. Estimated net worth exceeds $650 Million.',
      sourceName: 'Forbes & Sportico Highest-Paid Athletes',
    },
    'lamine-yamal-annual-earnings-wealth': {
      title: 'Lamine Yamal Annual Earnings & Contract Salary',
      subtitle: 'FC Barcelona first-team wages, performance bonuses, and long-term Adidas global contract',
      description:
        'Annualized earnings accrued by FC Barcelona and Spanish national team phenom Lamine Yamal across his professional club contract and long-term footwear deal with Adidas.',
      sourceName: 'Capology, Transfermarkt & Forbes Sports',
    },
    'china-military-defense-spending': {
      title: 'China Military & Defense Spending',
      subtitle: 'Official and estimated annual budget for the People\'s Liberation Army (PLA), naval expansion, and strategic forces',
      description:
        'Annual consolidated defense expenditure by the People\'s Republic of China covering armed forces personnel, stealth fighter procurement, aircraft carrier carrier battle groups, and strategic nuclear modernization according to SIPRI and the Ministry of Finance.',
      sourceName: 'SIPRI (Stockholm International Peace Research Institute) & Ministry of Finance of China',
    },
    'china-education-spending': {
      title: 'China Public Spending on Education',
      subtitle: 'National budget for primary, secondary, vocational, and elite university higher education',
      description:
        'Total government and municipal budgetary expenditure allocated to China\'s national education system (exceeding 4% of GDP) according to the Ministry of Education and National Bureau of Statistics.',
      sourceName: 'Ministry of Education of China & National Bureau of Statistics (NBS)',
    },
    'china-research-development-spending': {
      title: 'China Spending on Research & Development (R&D)',
      subtitle: 'Gross domestic R&D expenditure on semiconductors, AI, quantum computing, clean energy, and space exploration',
      description:
        'Total annual gross domestic expenditure on research and experimental development (GERD) across state institutions and private tech giants according to China NBS and OECD.',
      sourceName: 'National Bureau of Statistics of China (NBS) & OECD',
    },
    'china-healthcare-spending': {
      title: 'China Total Spending on Healthcare & Public Health',
      subtitle: 'Consolidated public and private expenditure on universal basic medical insurance, hospitals, and clinics',
      description:
        'Aggregate annual health expenditure across central/local health insurance funds, medical infrastructure, and pharmaceuticals reported by the National Health Commission and WHO.',
      sourceName: 'National Health Commission of China (NHC) & WHO',
    },
    'china-foreign-aid-belt-road-spending': {
      title: 'China Spending on Foreign Aid & Belt and Road Initiative',
      subtitle: 'International development finance, concessional loans, and infrastructure cooperation across the Global South',
      description:
        'Annual financial volume of grants, zero-interest loans, and overseas infrastructure financing committed through the China International Development Cooperation Agency (CIDCA) and state policy banks.',
      sourceName: 'AidData (William & Mary) & CIDCA',
    },
    'china-lobbying-united-states-spending': {
      title: 'China Spending on Foreign Lobbying in the United States',
      subtitle: 'FARA-registered public relations, political consulting, and media representation expenditures in Washington, D.C.',
      description:
        'Total annual spending reported to the US Department of Justice under the Foreign Agents Registration Act (FARA) by Chinese registered entities, state media, and commercial representatives.',
      sourceName: 'OpenSecrets.org Foreign Lobby Watch & US DOJ FARA',
    },
    'france-aid-support-ukraine-spending': {
      title: 'France Military Aid & Support for Ukraine',
      subtitle: 'Bilateral artillery (CAESAR), SCALP cruise missiles, armored vehicles, and EU Peace Facility allocations',
      description:
        'Annual financial and military contribution provided by France in support of Ukraine, including frontline defense hardware, military training, and humanitarian relief tracked by the Kiel Institute and French Ministry of the Armed Forces.',
      sourceName: 'Kiel Institute Ukraine Support Tracker & French Ministry of the Armed Forces',
    },
    'paris-2024-olympic-games-spending': {
      title: 'Total Cost & Spending on the Paris 2024 Olympic Games',
      subtitle: 'SOLIDEO infrastructure build-up, COJO operational organizing committee, security, and urban works',
      description:
        'Consolidated expenditures of the Paris 2024 Olympic and Paralympic Games across public works (SOLIDEO: Olympic Village, Aquatics Centre) and operational delivery (COJO) audited by the French Cour des Comptes.',
      sourceName: 'Cour des Comptes de France & COJO Paris 2024',
    },
    'france-covid-19-pandemic-spending': {
      title: 'France Total Emergency Spending on COVID-19 Pandemic',
      subtitle: 'Funding the emergency relief: partial unemployment subsidies, corporate solidarity funds, and healthcare stimulus',
      description:
        'Total public emergency expenditure mobilized by the French Republic during the pandemic crisis (furlough schemes, vaccine procurement, hospital revaluation, and recovery plan) reported by the Cour des Comptes and Bercy.',
      sourceName: 'Cour des Comptes & Ministry of Economy and Finance (Bercy)',
    },
    'france-cleaning-seine-river-spending': {
      title: 'Spending to Clean & Sanitize the River Seine (Plan Baignade)',
      subtitle: 'Historic sanitation project: Austerlitz 50,000 m³ retention basin, wastewater modernization, and river cleanup',
      description:
        'Total public capital invested by the French State, City of Paris, and Water Agency to clean the Seine for Olympic open-water events and public swimming, centered on the massive Austerlitz underground storm basin.',
      sourceName: 'Préfecture d\'Île-de-France & City of Paris (Plan Baignade)',
    },
    'france-youth-budget-spending': {
      title: 'French State Budget for Youth Programs & Policies',
      subtitle: 'Funding for Contrat d\'Engagement Jeune (CEJ), Pass Culture, university student grants, and youth employment subsidies',
      description:
        'Consolidated public budget allocated by the French Republic to youth welfare, culture passes for 18-year-olds, higher education grants, and youth apprenticeship subsidies.',
      sourceName: 'French Ministry of National Education & Budget Law (PLF)',
    },
    'france-immigration-asylum-budget-spending': {
      title: 'French State Budget for Immigration, Asylum & Integration',
      subtitle: 'Official allocation for asylum seeker allowance (ADA), accommodation centers (CADA), OFII, and state medical aid (AME)',
      description:
        'Annual public budget committed under France\'s national mission for asylum seekers, reception infrastructure, integration programs, and emergency healthcare assistance.',
      sourceName: 'French Ministry of the Interior & Annual Budget Law',
    },
    'france-household-christmas-spending': {
      title: 'Christmas Spending by French Households',
      subtitle: 'Annual holiday expenditure on gifts, gourmet festive meals, Christmas trees, decorations, and travel',
      description:
        'Cumulative holiday spending by French households across gift purchasing, festive cuisine, champagne, and decorations according to the Cofidis/CSA holiday barometer and INSEE.',
      sourceName: 'Cofidis / CSA Research Christmas Barometer & INSEE',
    },
    'france-household-clothing-fashion-spending': {
      title: 'Clothing & Fashion Spending by French Households',
      subtitle: 'Annual expenditure on ready-to-wear apparel, footwear, leather goods, and fashion accessories',
      description:
        'Total annual consumer spending by French households on women\'s, men\'s, and children\'s clothing and footwear according to INSEE national accounts and Institut Français de la Mode (IFM).',
      sourceName: 'INSEE & Institut Français de la Mode (IFM)',
    },
    'france-household-food-spending': {
      title: 'Food & Grocery Spending by French Households',
      subtitle: 'Total domestic grocery consumption: fresh produce, supermarket shopping, bakeries, and food staples',
      description:
        'Total annual grocery and food at-home expenditure by France\'s 29.5 million households (~395 €/month per household, ~17% of average budget) calculated by INSEE and FranceAgriMer.',
      sourceName: 'INSEE (National Accounts) & FranceAgriMer',
    },
    'germany-buergergeld-spending': {
      title: 'Germany Spending on Citizen\'s Income (Bürgergeld)',
      subtitle: 'Federal budget expenditure on basic income, accommodation & heating allowances (KdU), and Jobcenter operations',
      description:
        'Total federal budgetary outlay allocated to basic security for jobseekers (standard citizen allowance, rent, heating, and administrative costs) reported by the Federal Ministry of Labour and Social Affairs (BMAS).',
      sourceName: 'BMAS (Federal Ministry of Labour and Social Affairs) & BA',
    },
    'germany-military-defense-spending': {
      title: 'Germany Military & Defense Spending',
      subtitle: 'Regular defense budget (Einzelplan 14) and €100-Billion Bundeswehr special modernization fund (~2% of GDP)',
      description:
        'Consolidated defense spending by the Federal Republic of Germany according to NATO criteria, including regular armed forces maintenance and military procurement tracked by SIPRI.',
      sourceName: 'SIPRI & German Federal Ministry of Defence (BMVg)',
    },
    'germany-foreign-development-aid-spending': {
      title: 'Germany Spending on Official Development Assistance (ODA / BMZ)',
      subtitle: 'International development cooperation, humanitarian aid, and poverty reduction (World\'s 2nd largest donor)',
      description:
        'Official Development Assistance (ODA) mobilized by Germany across developing economies for healthcare, infrastructure, education, and climate resilience monitored by OECD DAC and BMZ.',
      sourceName: 'OECD Development Assistance Committee & BMZ Germany',
    },
    'germany-state-pension-spending': {
      title: 'Germany Spending on Statutory Pensions (Gesetzliche Rente)',
      subtitle: 'Total pension disbursements to 21 million retirees plus over €112 Billion federal budget subsidy',
      description:
        'Annual pension payments distributed by Deutsche Rentenversicherung to over 21 million German pensioners financed through social contributions and direct federal subsidies.',
      sourceName: 'Deutsche Rentenversicherung Bund & BMAS',
    },
    'germany-education-spending': {
      title: 'Germany Public Spending on Education & Universities',
      subtitle: 'Consolidated expenditure by Federal Government, 16 States (Länder), and municipalities for schools and universities',
      description:
        'Total public funding allocated to early childhood education, general schools, vocational apprenticeships, and higher education research reported in the Destatis Education Finance Report.',
      sourceName: 'Federal Statistical Office of Germany (Destatis)',
    },
    'germany-refugees-asylum-spending': {
      title: 'Germany Spending on Refugees & Asylum Seekers',
      subtitle: 'Federal and State expenditure on accommodation, social integration, language schooling, and BAMF administration',
      description:
        'Consolidated refugee-related financial expenditures by the German Federal Government and the 16 Länder for asylum housing, municipal integration, language programs, and origin country support.',
      sourceName: 'Federal Ministry of Finance (BMF) & BAMF Germany',
    },
    'germany-total-social-budget-spending': {
      title: 'Germany Total Social Budget & Welfare Expenditure',
      subtitle: 'Consolidated expenditure across health, pensions, long-term care, and unemployment insurance (~30.5% of GDP)',
      description:
        'Aggregate annual welfare spending and social protection system outlays across all statutory security funds in Germany according to the official BMAS Social Budget.',
      sourceName: 'BMAS (Federal Ministry of Labour and Social Affairs - Social Budget)',
    },
    'germany-household-vacation-travel-spending': {
      title: 'Germany Spending on Vacation & Holiday Travel',
      subtitle: 'Annual holiday expenditure across ~65 million vacation trips, flights, package tours, and hotels (~€1,200/person/trip)',
      description:
        'Total annual vacation and holiday tourism spending by German travelers domestically and abroad reported by the German Travel Association (DRV) and FUR Reiseanalyse.',
      sourceName: 'German Travel Association (DRV) & FUR Reiseanalyse',
    },
    'germany-household-food-spending': {
      title: 'Germany Spending on Food, Groceries & Non-Alcoholic Drinks',
      subtitle: 'Monthly and annual household grocery consumption (~€415/month per household, ~15% of private consumption)',
      description:
        'Total grocery and beverage retail consumption spending across Germany\'s 41 million households calculated by the Federal Statistical Office (Destatis).',
      sourceName: 'Federal Statistical Office of Germany (Destatis)',
    },
    'germany-silvester-fireworks-spending': {
      title: 'Germany Spending on New Year\'s Eve Fireworks (Silvester)',
      subtitle: 'Total pyrotechnics retail sales during the official 3-day window before New Year\'s Eve',
      description:
        'Total sales revenue of fireworks, rockets, and bangers sold to German consumers during the year-end celebration window reported by the Pyrotechnic Industry Association (VPI).',
      sourceName: 'Association of the Pyrotechnic Industry (VPI Germany)',
    },
    'germany-household-christmas-gifts-spending': {
      title: 'Germany Spending on Christmas Gifts & Holiday Presents',
      subtitle: 'Total retail expenditure on Christmas gifts for family and friends (~€500 per gift-giving consumer)',
      description:
        'Annual holiday gift spending across toys, electronics, books, cosmetics, and vouchers during the German Christmas shopping season tracked by HDE and GfK.',
      sourceName: 'German Retail Federation (HDE) & GfK',
    },
    'germany-household-rent-housing-spending': {
      title: 'Germany Spending on Rent & Household Housing Costs',
      subtitle: 'Base cold rent, operating utilities, and maintenance across 41 million households (~28% of consumer budget)',
      description:
        'Total aggregate housing expenditure in Germany covering tenant rents, municipal heating, waste and utility charges, and owner-occupier maintenance reported by Destatis.',
      sourceName: 'Federal Statistical Office (Destatis - Housing Census)',
    },
    'germany-household-clothing-fashion-spending': {
      title: 'Germany Spending on Clothing, Footwear & Fashion',
      subtitle: 'Annual household budget for apparel, shoes, and leather accessories (~€1,600/household/year)',
      description:
        'Total retail expenditure by German consumers on apparel, fashion textiles, and footwear according to BTE Handelsverband and Destatis.',
      sourceName: 'BTE Textile & Footwear Retail Federation & Destatis',
    },
    'germany-engagement-ring-spending': {
      title: 'Germany Spending on Engagement Rings & Diamonds',
      subtitle: 'Annual national market for diamond engagement rings across ~380,000 marriage proposals (~€680 average ring)',
      description:
        'Total annual expenditure by German couples on diamond engagement rings and bridal jewelry reported by the Federal Association of Jewelers (BVJ).',
      sourceName: 'Federal Association of Jewelers and Watch Specialists (BVJ)',
    },
    'germany-car-vehicle-purchase-spending': {
      title: 'Germany Spending on Car Purchases (New & Used Passenger Vehicles)',
      subtitle: 'Total transaction volume across ~2.8 million new cars and ~6.0 million used car purchases',
      description:
        'Total consumer and commercial expenditure on passenger car acquisitions in Germany (average new car price >€44,000) reported in the DAT Report and Kraftfahrt-Bundesamt (KBA).',
      sourceName: 'Deutsche Automobil Treuhand (DAT Report) & KBA',
    },
    'germany-halloween-spending': {
      title: 'Germany Spending on Halloween Festivities & Costumes',
      subtitle: 'Retail spending on costumes, makeup, spooky decorations, candy, and themed celebrations',
      description:
        'Total annual revenue generated by German retailers and consumers for Halloween celebrations, trick-or-treating candy, and costumes according to the German Retail Federation (HDE).',
      sourceName: 'German Retail Federation (HDE - Halloween Consumer Survey)',
    },
    'brazil-bolsa-familia-spending': {
      title: 'Brazil Spending on the Bolsa Família Welfare Program',
      subtitle: 'Direct monthly cash transfers supporting over 20.8 million low-income and vulnerable families',
      description:
        'Total annual budget disbursed by the Brazilian Federal Government for Bolsa Família monthly family stipends according to the Ministry of Social Development (MDS) and the Transparency Portal.',
      sourceName: 'Ministry of Social Development (MDS) & Transparency Portal',
    },
    'brazil-sus-public-healthcare-spending': {
      title: 'Brazil Spending on the Unified Health System (SUS)',
      subtitle: 'Federal public health budget: public hospital network, free vaccinations, emergency SAMU, and basic care',
      description:
        'Consolidated federal healthcare expenditure financing the SUS universal network serving over 190 million citizens according to the Ministry of Health and Siops.',
      sourceName: 'Ministry of Health of Brazil & Siops (National Treasury)',
    },
    'brazil-judiciary-system-spending': {
      title: 'Brazil Spending on the Judiciary System (Poder Judiciário)',
      subtitle: 'Total operational cost of federal, state, labor, electoral, and supreme courts (~1.3% of GDP)',
      description:
        'Total annual expenditure of Brazil\'s judicial branch covering magistrate compensation, staff payroll, courts infrastructure, and technology audited in the CNJ\'s official «Justiça em Números» report.',
      sourceName: 'National Council of Justice (CNJ - Justiça em Números)',
    },
    'brazil-inss-pension-spending': {
      title: 'Brazil Spending on Public Pensions & Social Security (INSS)',
      subtitle: 'Retirement benefits disbursed to millions of general workers (RGPS) and federal civil servants (RPPS)',
      description:
        'Total annual social security outlays covering retirement, disability, and survivor pensions paid by the INSS and federal civil service funds tracked by the Ministry of Social Security.',
      sourceName: 'Ministry of Social Security & National Treasury Secretariat',
    },
    'brazil-politicians-congress-spending': {
      title: 'Brazil Annual Spending on Politicians & National Congress',
      subtitle: 'Operational budget for Chamber of Deputies, Senate, Electoral Fund, and parliamentary quotas',
      description:
        'Consolidated annual expenditure of the Brazilian political apparatus including the National Congress (House and Senate), electoral public campaigns, and legislative allowances.',
      sourceName: 'National Congress of Brazil, Transparency Portal & TSE',
    },
    'brazil-former-presidents-benefits-spending': {
      title: 'Brazil Spending on Benefits & Security for Former Presidents',
      subtitle: 'Lifetime security detail, 6 staff aides, 2 official vehicles with fuel, and travel allowances (Law 7.474/1986)',
      description:
        'Federal expenditure funded by the Presidency of the Republic to provide security, dedicated advisors, and official transport to all former heads of state under Brazilian federal law.',
      sourceName: 'General Secretariat of the Presidency & Transparency Portal',
    },
    'brazil-tax-exemptions-subsidies-spending': {
      title: 'Brazil Spending on Tax Exemptions & Corporate Subsidies',
      subtitle: 'Federal revenue foregone across tax breaks, Simples Nacional, Manaus Free Trade Zone, and subsidies (~5% of GDP)',
      description:
        'Total tax expenditure and foregone fiscal revenue granted through sectoral subsidies, simplified tax brackets, and regional industrial incentives reported by the Receita Federal.',
      sourceName: 'Receita Federal do Brasil (DGT Report)',
    },
    'brazil-military-daughters-pension-spending': {
      title: 'Brazil Spending on Lifetime Pensions for Daughters of Military Officers',
      subtitle: 'Surviving beneficiary pensions paid to over 100,000 unmarried daughters and heirs of armed forces personnel',
      description:
        'Annual military survivor pension expenditure paid by the National Treasury and Ministry of Defense to daughters of deceased officers under legacy legislation audited by the TCU.',
      sourceName: 'Federal Court of Accounts (TCU) & Ministry of Defense of Brazil',
    },
    'brazil-online-bets-gambling-spending': {
      title: 'Brazil Spending on Online Sports Betting & Virtual Casinos (Bets)',
      subtitle: 'Total volume transferred to fixed-odds betting platforms and iGaming casinos via PIX (~R$ 20B/month)',
      description:
        'Aggregate annual volume transferred by Brazilian punters via PIX to online sportsbooks and casino platforms analyzed in the Central Bank of Brazil (BCB) Technical Note and Anbima.',
      sourceName: 'Central Bank of Brazil (BCB) & Anbima',
    },
    'brazil-tourists-spending-united-states': {
      title: 'Spending by Brazilian Tourists in the United States',
      subtitle: 'Annual expenditure on shopping, hotels, Disney theme parks, and flights across Florida and New York',
      description:
        'Total international tourism expenditure by over 1.6 million Brazilian travelers visiting the US (Orlando, Miami, New York) registered by the US NTTO and Central Bank of Brazil.',
      sourceName: 'US National Travel & Tourism Office (NTTO) & BCB',
    },
    'brazil-household-cost-of-living-spending': {
      title: 'Cost of Living & Household Consumption in Brazil',
      subtitle: 'Total consolidated current expenditure across 75 million households for housing, food, transport, and health (~R$ 6,500/month/family)',
      description:
        'Aggregate final household consumption expenditure across Brazilian families in the domestic economy calculated by the IBGE Family Budget Survey (POF).',
      sourceName: 'Brazilian Institute of Geography and Statistics (IBGE - POF)',
    },
    'spain-national-public-debt': {
      title: 'Total National Public Debt of Spain',
      subtitle: 'Outstanding public debt under Excessive Deficit Procedure (EDP) across Central State, Autonomous Regions, and Social Security (~107% of GDP)',
      description:
        'Aggregate nominal sovereign debt in circulation owed by the Kingdom of Spain reported by the Bank of Spain (Banco de España) and Eurostat.',
      sourceName: 'Bank of Spain (Banco de España) & Eurostat',
    },
    'united-states-national-public-debt': {
      title: 'United States National Public Debt',
      subtitle: 'Total gross federal debt outstanding in US Treasury securities (US National Debt Clock)',
      description:
        'Total sovereign public debt issued and accumulated by the US federal government across public and intragovernmental holdings tracked by the US Department of the Treasury.',
      sourceName: 'US Department of the Treasury (Fiscal Service)',
    },
    'fc-barcelona-total-debt': {
      title: 'FC Barcelona Total Debt & Espai Barça Financing',
      subtitle: 'Ordinary net debt obligations and structured stadium bond financing (Goldman Sachs & JP Morgan)',
      description:
        'Consolidated financial liabilities of FC Barcelona including bank debt, player amortizations, and the Spotify Camp Nou reconstruction bonds audited in the club\'s Annual Economic Report.',
      sourceName: 'FC Barcelona Annual Economic Report & LaLiga',
    },
    'real-madrid-total-debt-financing': {
      title: 'Real Madrid CF Total Debt & Bernabéu Stadium Financing',
      subtitle: 'Long-term fixed-rate bank loans for the Santiago Bernabéu transformation (net operational cash positive)',
      description:
        'Total structured stadium remodeling debt contracted by Real Madrid CF with institutional lenders (JP Morgan, Bank of America) repaid via fixed annual installments backed by record stadium revenues.',
      sourceName: 'Real Madrid CF Annual Financial Accounts & LaLiga',
    },
    'colombia-external-foreign-debt': {
      title: 'Colombia Total External Foreign Debt',
      subtitle: 'Consolidated outstanding balance of public and private external foreign debt (~50% of Colombian GDP)',
      description:
        'Total foreign currency obligations owed to international creditors by Colombia\'s public sector and private corporations tracked by the Banco de la República.',
      sourceName: 'Banco de la República de Colombia & Ministry of Finance',
    },
    'united-kingdom-national-public-debt': {
      title: 'United Kingdom National Public Debt (UK Debt Clock)',
      subtitle: 'Public Sector Net Debt (PSND ex banks) issued in British government gilts (~99.5% of GDP)',
      description:
        'Total nominal sovereign debt owed by the UK public sector recorded by the Office for National Statistics (ONS) and HM Treasury.',
      sourceName: 'Office for National Statistics (ONS) & HM Treasury',
    },
    'china-national-government-debt': {
      title: 'China Sovereign & Local Government National Debt',
      subtitle: 'Central government bonds and local government financing vehicles (LGFVs) (~83% of Chinese GDP)',
      description:
        'Consolidated public debt of the People\'s Republic of China including official sovereign bonds and off-budget local liabilities according to the IMF and Ministry of Finance.',
      sourceName: 'Ministry of Finance of China & IMF Global Debt Database',
    },
    'canada-national-public-debt': {
      title: 'Canada National Public Debt (Federal & Provincial)',
      subtitle: 'Consolidated liabilities across the federal government and 10 Canadian provinces (~71% of GDP)',
      description:
        'Accumulated net debt of Canada combining federal Treasury bonds and provincial borrowing reported by Finance Canada and Statistics Canada.',
      sourceName: 'Department of Finance Canada & Statistics Canada',
    },
    'united-states-debt-relief-programs': {
      title: 'US National Debt Relief & Settlement Program Volume',
      subtitle: 'Annual consumer debt volume restructured across accredited credit card, loan, and settlement programs',
      description:
        'Aggregate volume of unsecured consumer debt enrolled into certified debt relief and settlement programs monitored by the CFPB and AFCC.',
      sourceName: 'Consumer Financial Protection Bureau (CFPB) & AFCC',
    },
    'japan-national-public-debt': {
      title: 'Japan National Public Debt (JGB Sovereign Liabilities)',
      subtitle: 'Total outstanding sovereign debt in Japanese Government Bonds (~260% of Japanese GDP)',
      description:
        'Total sovereign debt issued by the Government of Japan tracked by the Ministry of Finance (MOF) and Bank of Japan (BOJ).',
      sourceName: 'Ministry of Finance of Japan (MOF) & Bank of Japan (BOJ)',
    },
    'germany-national-public-debt': {
      title: 'Germany National Public Debt (Staatsverschuldung)',
      subtitle: 'Consolidated public sector debt across the Federal Government (Bund), 16 States, and municipalities (~64% of GDP)',
      description:
        'Aggregate gross public debt of Germany reported by the Federal Statistical Office (Destatis) and Deutsche Bundesbank.',
      sourceName: 'Statistisches Bundesamt (Destatis) & Deutsche Bundesbank',
    },
    'france-national-public-debt': {
      title: 'France National Public Debt (Dette Publique)',
      subtitle: 'Maastricht debt liabilities across the Central State, social security, and local governments (~111% of GDP)',
      description:
        'Total sovereign public debt of France (OAT securities and social debt) audited by INSEE and Banque de France.',
      sourceName: 'INSEE & Banque de France (Maastricht Debt)',
    },
    'italy-national-public-debt': {
      title: 'Italy National Public Debt (Debito Pubblico)',
      subtitle: 'Gross sovereign public liabilities in Italian government bonds (BTP & BOT) (~138% of GDP)',
      description:
        'Consolidated gross debt of Italian public administrations reported by Banca d\'Italia and Istat.',
      sourceName: 'Banca d\'Italia & Istat',
    },
    'brazil-national-public-debt': {
      title: 'Brazil Federal National Public Debt (Dívida Pública Federal)',
      subtitle: 'Total domestic and external federal debt stock in National Treasury bonds (~78% of GDP)',
      description:
        'Consolidated federal debt stock issued by the National Treasury of Brazil tracked by the Central Bank of Brazil (BCB).',
      sourceName: 'National Treasury of Brazil (STN) & Central Bank of Brazil (BCB)',
    },
    'india-national-public-debt': {
      title: 'India National General Government Debt',
      subtitle: 'Combined sovereign public debt across the Central Government and 28 States (~82% of Indian GDP)',
      description:
        'Total public debt obligations of India in sovereign bonds and external loans recorded by the RBI and Ministry of Finance.',
      sourceName: 'Reserve Bank of India (RBI) & Ministry of Finance',
    },
    'mexico-national-public-debt': {
      title: 'Mexico National Public Debt (SHRFSP)',
      subtitle: 'Historical Balance of Public Sector Financial Requirements (~49% of Mexican GDP)',
      description:
        'Broad federal public debt of Mexico in Cetes, M Bonos, and multilateral loans audited by SHCP and Banco de México.',
      sourceName: 'Secretariat of Finance (SHCP) & Banco de México',
    },
    'argentina-national-public-debt': {
      title: 'Argentina Gross National Public Debt',
      subtitle: 'Total central administration debt stock in national and foreign currency (~88% of Argentine GDP)',
      description:
        'Outstanding public debt of Argentina across sovereign bonds, dollar notes, and IMF loans recorded by the Secretariat of Finance.',
      sourceName: 'Secretariat of Finance (Ministry of Economy of Argentina)',
    },
    'australia-national-public-debt': {
      title: 'Australia National Public Debt (Commonwealth Debt)',
      subtitle: 'Gross federal government liabilities in Australian Government Securities (AGS) (~54% of GDP)',
      description:
        'Total sovereign debt securities issued by the Australian Office of Financial Management (AOFM) and Reserve Bank of Australia.',
      sourceName: 'Australian Office of Financial Management (AOFM) & RBA',
    },
    'south-korea-national-public-debt': {
      title: 'South Korea National Public Debt (D1 Debt)',
      subtitle: 'Central and local government sovereign debt in Korea Treasury Bonds (KTBs) (~51% of Korean GDP)',
      description:
        'Total national sovereign debt obligations of South Korea tracked by the Ministry of Economy and Finance (MOEF).',
      sourceName: 'Ministry of Economy and Finance (MOEF) & Bank of Korea',
    },
    'saudi-arabia-national-public-debt': {
      title: 'Saudi Arabia National Public Debt',
      subtitle: 'Sovereign debt in domestic Islamic Sukuks and international bonds (~26% of Saudi GDP)',
      description:
        'Total sovereign liabilities of the Kingdom of Saudi Arabia managed by the National Debt Management Center (NDMC).',
      sourceName: 'National Debt Management Center (NDMC) & Ministry of Finance',
    },
    'switzerland-national-public-debt': {
      title: 'Switzerland National Public Debt (Confederation & Cantons)',
      subtitle: 'Sovereign debt governed by the constitutional Swiss Debt Brake mechanism (~38% of Swiss GDP)',
      description:
        'Consolidated gross debt of the Swiss Confederation, 26 cantons, and municipalities tracked by the Federal Finance Administration.',
      sourceName: 'Federal Finance Administration (FFA) & Swiss National Bank (SNB)',
    },
    'netherlands-national-public-debt': {
      title: 'Netherlands National Public Debt (EMU Debt)',
      subtitle: 'Dutch sovereign debt in DSL government bonds managed by DSTA (~44% of Dutch GDP)',
      description:
        'Gross public administration debt of the Kingdom of the Netherlands recorded by CBS and the Dutch State Treasury Agency.',
      sourceName: 'Centraal Bureau voor de Statistiek (CBS) & DSTA',
    },
    'russia-national-public-debt': {
      title: 'Russian Federation Sovereign Public Debt',
      subtitle: 'Domestic and external government debt in federal OFZ ruble bonds (~15% of Russian GDP)',
      description:
        'Consolidated sovereign state debt of Russia reported by the Ministry of Finance of the Russian Federation (Minfin).',
      sourceName: 'Ministry of Finance of Russia (Minfin) & Bank of Russia',
    },
    'turkey-national-public-debt': {
      title: 'Turkey Central Government Gross Public Debt',
      subtitle: 'Consolidated public debt stock in Turkish liras and foreign currencies (~28% of Turkish GDP)',
      description:
        'Total gross debt stock of the central government of the Republic of Turkey published by the Ministry of Treasury and Finance.',
      sourceName: 'Ministry of Treasury and Finance of the Republic of Turkey',
    },
    'south-africa-national-public-debt': {
      title: 'South Africa National Government Debt',
      subtitle: 'Gross sovereign debt in South African domestic and foreign loan bonds (~74% of South African GDP)',
      description:
        'Consolidated national government gross debt recorded by the National Treasury of South Africa and SARB.',
      sourceName: 'National Treasury of South Africa & South African Reserve Bank (SARB)',
    },
    'global-social-media-advertising-spend': {
      title: 'Global Spending on Social Media Advertising',
      subtitle: 'Total budget invested by brands in ads across Instagram, TikTok, Facebook, YouTube, and X (~$7,925/s)',
      description:
        'Aggregate global digital ad spending deployed on social platforms (feed ads, story promotions, reels, and sponsored video campaigns) reported by eMarketer and Zenith.',
      sourceName: 'eMarketer (Insider Intelligence) & Zenith Optimedia',
    },
    'tiktok-advertising-and-in-app-spending': {
      title: 'Global Spending on TikTok (Ads, Coins & TikTok Shop)',
      subtitle: 'Annual revenue generated from advertiser campaigns, user virtual coins/gifts, and TikTok Shop purchases (~$1,062/s)',
      description:
        'Total expenditure across the TikTok ecosystem (ByteDance) including brand advertising, in-app purchases of virtual gifts, and creator commerce tracked by Sensor Tower and eMarketer.',
      sourceName: 'ByteDance Financial Reports, Sensor Tower & eMarketer',
    },
    'instagram-advertising-and-creator-spending': {
      title: 'Global Spending on Instagram Advertising & Commerce',
      subtitle: 'Revenue generated from Reels ads, Stories, Feed placements, and creator commerce (~$2,251/s, >50% of Meta Ads)',
      description:
        'Total global advertiser expenditure on Instagram (Meta Platforms) including sponsored posts, video placements, and creator monetization audited in Meta\'s SEC filings.',
      sourceName: 'Meta Platforms (SEC Form 10-K) & eMarketer',
    },
    'global-influencer-marketing-creator-spending': {
      title: 'Global Influencer Marketing & Creator Economy Spending',
      subtitle: 'Direct brand expenditure on influencer sponsorships, paid collaborations, and user-generated content (UGC)',
      description:
        'Total marketing spend committed by brands to content creators, ambassadors, and influencer campaigns on Instagram, TikTok, and YouTube analyzed by Goldman Sachs.',
      sourceName: 'Goldman Sachs (Creator Economy Report) & Influencer Marketing Hub',
    },
    'spain-gasoline-fuel-consumption-spending': {
      title: 'Spain Consumer Spending on Gasoline & Automotive Fuel',
      subtitle: 'Annual fuel expenditure across 12,000+ gas stations for 95/98 petrol and diesel',
      description:
        'Aggregate motorist and transport expenditure on road fuels in Spain reported by CORES and the Ministry for Ecological Transition (MITECO).',
      sourceName: 'CORES & Ministry for Ecological Transition (MITECO)',
    },
    'spain-total-public-expenditure': {
      title: 'Spain Total Consolidated Public Expenditure',
      subtitle: 'Consolidated spending across Central State, 17 Autonomous Regions, Local Town Halls, and Social Security (~46.5% of GDP)',
      description:
        'Total annual government spending disbursed by all public administrations in Spain reported by the IGAE and Eurostat.',
      sourceName: 'IGAE & Eurostat',
    },
    'spain-healthcare-sanidad-spending': {
      title: 'Spain Total Healthcare Spending (Public & Private Health)',
      subtitle: 'Health expenditure across regional health services (SNS) and private medical insurance (~7.5% of GDP)',
      description:
        'Consolidated public and private healthcare expenditure in Spain audited in the EGSP report by the Ministry of Health and INE.',
      sourceName: 'Ministry of Health of Spain (EGSP) & INE',
    },
    'spain-defense-military-spending-nato': {
      title: 'Spain Defense & Military Spending (NATO Methodology)',
      subtitle: 'Consolidated defense and military budget according to official NATO criteria (~1.30% of GDP)',
      description:
        'Total military and security expenditures of Spain reported under NATO standard definitions and SIPRI.',
      sourceName: 'NATO (Defence Expenditures) & SIPRI',
    },
    'spain-education-spending': {
      title: 'Spain Public & Private Education Spending',
      subtitle: 'Consolidated education budget across schools, vocational training, and public universities (~4.4% of GDP)',
      description:
        'Total national expenditure on early, primary, secondary, and higher education in Spain tracked by the Ministry of Education and INE.',
      sourceName: 'Ministry of Education of Spain & INE',
    },
    'spain-irpf-income-tax-revenue': {
      title: 'Spain Personal Income Tax Collection (IRPF Renta)',
      subtitle: 'Annual income tax revenue collected by the Tax Agency (AEAT) from payroll withholdings and tax returns',
      description:
        'Net personal income tax revenues collected from over 22 million Spanish tax filers according to the AEAT official reports.',
      sourceName: 'Spanish Tax Agency (AEAT)',
    },
    'real-madrid-transfers-signings-spending': {
      title: 'Real Madrid CF Annual Transfer & Signing Expenditures',
      subtitle: 'Average annual transfer market investment for star players and squad reinforcements',
      description:
        'Annual player transfer fees, signing bonuses, and federation rights amortizations for Real Madrid CF audited in official accounts and Transfermarkt.',
      sourceName: 'Real Madrid CF Official Financial Accounts & Transfermarkt',
    },
    'spain-mortgage-closing-costs-spending': {
      title: 'Spain Mortgage Closing & Formalization Expenses',
      subtitle: 'Annual expenditure on property appraisal, notary fees, land registry, and loan settlement across 450k+ mortgages',
      description:
        'Aggregate costs disbursed by Spanish borrowers and financial institutions in mortgage constitution and notary fees tracked by the Bank of Spain and INE.',
      sourceName: 'Bank of Spain (BdE) & INE',
    },
    'spain-home-buying-transaction-costs-spending': {
      title: 'Spain Real Estate Transaction Costs & Property Taxes',
      subtitle: 'Property transfer tax (ITP/VAT), stamp duty (AJD), and legal fees across 600,000+ annual home sales (~10-12%)',
      description:
        'Total tax and administrative costs paid by home buyers in Spain reported by the General Council of Notaries and Land Registrars of Spain.',
      sourceName: 'General Council of Notaries & Land Registrars of Spain',
    },
    'spain-tax-deductible-expenses-irpf': {
      title: 'Spain Tax-Deductible Expenses & Allowances (IRPF)',
      subtitle: 'Total deductions claimed by self-employed workers, pension contributors, primary residence, and regional tax credits',
      description:
        'Aggregate deductible expenses from economic activities and personal income tax allowances reported by the Spanish Tax Agency (AEAT).',
      sourceName: 'Spanish Tax Agency (AEAT - IRPF Statistics)',
    },
    'vinted-second-hand-fashion-spending': {
      title: 'Vinted Second-Hand Fashion & Marketplace Spending',
      subtitle: 'Gross Merchandise Volume (GMV) of pre-owned clothing, footwear, and accessories traded across Europe & Spain',
      description:
        'Annual transaction volume processed on the circular fashion platform Vinted reported in company disclosures and Cross-Border Commerce Europe.',
      sourceName: 'Vinted Financial Reports & Cross-Border Commerce Europe',
    },
    'spain-household-cost-of-living-spending': {
      title: 'Spain Household Cost of Living & Annual Consumption',
      subtitle: 'Annual expenditure across 19.2 million Spanish households on housing, energy, food, transport, and leisure (~€32,600/family)',
      description:
        'Aggregate household consumption expenditure tracking the total cost of living in Spain according to the Household Budget Survey (EPF) by the INE.',
      sourceName: 'National Statistics Institute of Spain (INE - Household Budget Survey EPF)',
    },
    'spain-total-wages-salaries-spending': {
      title: 'Spain Total Employee Wages & Average Salary Compensation',
      subtitle: 'Gross annual wage mass distributed across 21.3 million employed workers in Spain (Average salary ~€26,948/year)',
      description:
        'Total compensation of employees across public and private sectors in Spain recorded in Quarterly National Accounts and Salary Structure Surveys by INE.',
      sourceName: 'INE (Quarterly National Accounts & Salary Structure Survey)',
    },
    'spain-minimum-wage-smi-spending': {
      title: 'Spain Minimum Wage (SMI) Total Wage Expenditure',
      subtitle: 'Aggregate annual earnings of 2.5 million workers on statutory minimum wage (€1,134/month in 14 payments = €15,876/yr)',
      description:
        'Total payroll expenditure received by employees on the statutory minimum wage (SMI) regulated by the Ministry of Labor and INE.',
      sourceName: 'Ministry of Labor and Social Economy & INE',
    },
    'spain-household-rent-spending': {
      title: 'Spain Household Residential Rental Spending',
      subtitle: 'Annual rental payments disbursed by over 3.4 million tenant households for primary residence leases',
      description:
        'Aggregate annual rent payments for primary residences in Spain analyzed by the Bank of Spain and the Ministry of Housing (MIVAU).',
      sourceName: 'Bank of Spain & Ministry of Housing and Urban Agenda (MIVAU)',
    },
    'us-federal-discretionary-spending': {
      title: 'United States Federal Discretionary Spending',
      subtitle: 'Annual budget appropriated by Congress for Defense, Education, Transportation, Veterans, and Science (~$55,490/s)',
      description:
        'Total discretionary budget enacted through regular congressional appropriation bills reported by the Congressional Budget Office (CBO).',
      sourceName: 'Congressional Budget Office (CBO) & US Treasury',
    },
    'us-federal-mandatory-spending-entitlements': {
      title: 'United States Federal Mandatory Spending & Entitlements',
      subtitle: 'Statutory outlays for Social Security, Medicare, Medicaid, and Net Interest on Public Debt (~$131,595/s)',
      description:
        'Federal mandatory spending and entitlement outlays funded through statutory formulas and FICA payroll taxes audited by the CBO.',
      sourceName: 'Congressional Budget Office (CBO) & US Treasury',
    },
    'united-states-credit-card-consumer-spending': {
      title: 'United States Consumer Credit Card Spending & Purchase Volume',
      subtitle: 'Total annual purchases and retail transaction volume charged on Visa, Mastercard, American Express, and Discover',
      description:
        'Aggregate credit card purchase volume and revolving consumer spending in the US tracked by the Federal Reserve Board and Nilson Report.',
      sourceName: 'Federal Reserve Board (Consumer Credit G.19) & Nilson Report',
    },
    'global-cosmetic-surgery-spending': {
      title: 'Spending on Cosmetic Surgery',
      subtitle: 'The total cost of cosmetic surgeries worldwide is estimated at €2.66 billion annually',
      description:
        'The total cost of cosmetic surgeries in the world is estimated at 2.66 billion euros. This expenditure includes a wide range of procedures, from breast augmentation and liposuction to facial injections of botulinum toxin and hyaluronic acid. The growing demand for these treatments is driven by social media influence and the culture of self-image.',
      sourceName: 'MediHair — Plastic and Cosmetic Surgery Statistics 2025',
    },
    'economic-burden-of-tobacco': {
      title: 'Economic Burden of Tobacco',
      subtitle: 'The economic and medical cost of tobacco is $1.8 trillion USD annually worldwide',
      description:
        'The economic burden of tobacco is devastating, with a global cost of $1.8 trillion annually. This cost includes medical expenses, tobacco-related illnesses, and the effects of secondhand smoke, though when adding lost productivity, the cost doubles. The tobacco industry, which generates revenue of approximately $92 billion, faces a major lag in implementing tobacco taxes, limiting the capacity to prevent and reduce consumption.',
      sourceName: 'World Health Organization (WHO) — Tobacco Trends Report',
    },
    'spain-public-healthcare-spending': {
      title: 'Spain Public Healthcare Spending',
      subtitle: 'Public healthcare expenditure in Spain reaches €101.739 billion annually (~€2,084 per inhabitant)',
      description:
        'Public healthcare spending in Spain reached €101.739 billion, representing 6.4% of GDP and an average expenditure of €2,084 per inhabitant, according to the Public Healthcare Expenditure Statistics from the Ministry of Health.',
      sourceName: 'Ministry of Health — Public Healthcare Expenditure Statistics',
    },
    'spain-subsidies-public-grants-spending': {
      title: 'Public Subsidies & Grants in Spain',
      subtitle: 'Spain allocates around €41.49 billion annually in direct public subsidies and grants',
      description:
        'Spain allocates around €41.49 billion annually in direct public subsidies and grants distributed among the central government, regional communities, and local entities. This general figure encompasses aid to families, productive sectors, companies, and social entities, excluding major social protection items like contributory pensions or unemployment benefits.',
      sourceName: 'Libre Mercado — Expenditure on Subsidies and Grants in Spain',
    },
    'global-alcohol-spending': {
      title: 'Spending on Alcoholic Drinks',
      subtitle: 'Annual expenditure on alcoholic beverages is around $1.94 trillion USD worldwide',
      description:
        'Global consumer spending on alcoholic drinks reaches between $1.89 trillion and $2 trillion annually. This figure encompasses retail sales in stores and supermarkets, as well as consumption in bars, pubs, and restaurants globally, based on the Statista Market Forecast report.',
      sourceName: 'Statista Market Forecast — Alcoholic Drinks Worldwide',
    },
    'global-counterfeit-goods-spending': {
      title: 'Spending on Counterfeit Goods',
      subtitle: 'Global spending on counterfeit products exceeds €412 billion annually',
      description:
        'The global trade of counterfeit goods is estimated at over €412 billion, representing 2.5% of total worldwide trade. In the European Union, imports of counterfeit products reached €119 billion.',
      sourceName: 'Merca2.0 — The Global Economy of Counterfeits',
    },
    'global-wildlife-trafficking-spending': {
      title: 'Spending on Wildlife Trafficking',
      subtitle: 'The illegal wildlife trade moves over $20 billion USD annually worldwide',
      description:
        'The illegal trafficking of wild animals and exotic species generates annual transactions of over $20 billion globally, constituting one of the most lucrative criminal businesses in the world alongside drug and arms trafficking, according to the Euribor environmental crime report.',
      sourceName: 'Euribor — The Black Business of Exotic Animal Trafficking',
    },
    'global-organ-trafficking-spending': {
      title: 'Spending on Organ Trafficking',
      subtitle: 'Illegal organ trafficking generates between $600 million and $1.2 billion USD annually worldwide',
      description:
        'Illegal organ trafficking generates estimated annual profits and transactions of between $600 million and $1.2 billion globally. This clandestine activity is primarily fueled by the exploitation of donors in extreme poverty and the practice of transplant tourism, according to Wikipedia data.',
      sourceName: 'Wikipedia — Organ Trafficking',
    },
    'global-art-trafficking-spending': {
      title: 'Spending on Art Trafficking',
      subtitle: 'Illicit trafficking of cultural property and art moves nearly $10 billion USD annually',
      description:
        'The illicit trade of artworks, antiquities, and archaeological heritage represents a criminal industry of nearly $10 billion annually. Often funding terrorist networks and transnational organized crime, it poses one of the greatest threats to peoples\' cultural identity, as revealed by UNESCO and the UN.',
      sourceName: 'UNESCO & UN — Illicit Trafficking of Cultural Property',
    },
    'lamine-yamal-market-value': {
      title: 'Market Value of Lamine Yamal',
      subtitle: 'The estimated market valuation of Lamine Yamal stands at €220 million',
      description:
        'Lamine Yamal\'s market value stands at €220 million, consolidating him as one of the most valuable and financially promising football players in the world, according to Transfermarkt profile and valuation data.',
      sourceName: 'Transfermarkt — Lamine Yamal Profile',
    },
  },
};
