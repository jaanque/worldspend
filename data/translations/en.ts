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
    yearLabel: 'Total Global Expenditure in 2026 (Year-to-Date)',
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
    searchPlaceholder: 'Filter 147+ live counters, institutions, keywords (e.g. debt, defense, tiktok, oil, wages)...',
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
    historicalChartTitle: 'Historical Spending Trajectory (2000 – 2026)',
    historicalChartSubtitle: 'Annual expenditure across verified historical baselines',
    statisticalOverview: 'Statistical Overview:',
    officialSource: 'Official Source:',
    continuousUpdate: 'Continuous 60 FPS update',
  },
  footer: {
    methodologyTitle: 'Methodology & Data Integrity',
    methodologyBody:
      'WorldSpend aggregates public spending reports from verified intergovernmental, state, and academic institutions (including the UN, World Bank, WHO, SIPRI, CBO, Eurostat, INE, and US Treasury). Algorithmic linear-interpolation runs at 60 frames per second using verified baseline annual totals to display granular real-time macroeconomic cash flow.',
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
    all: {
      name: 'All Expenditures',
      description: 'Complete real-time global financial overview',
    },
    government: {
      name: 'Government & Public Budget',
      description: 'Public ministries, pensions, welfare benefits, and state administration',
    },
    society: {
      name: 'Family, Society & Lifestyle',
      description: 'Child-rearing, weddings, baby care, and lifestyle milestones',
    },
    food: {
      name: 'Food & Household Groceries',
      description: 'Monthly grocery spending, family alimentation, and supermarket costs',
    },
    luxury: {
      name: 'Media, Events & Aesthetics',
      description: 'Streaming mega-productions, public styling, and entertainment events',
    },
    health: {
      name: 'Healthcare & Public Health',
      description: 'Global healthcare systems, pharmaceuticals, medical treatments, and public health',
    },
    illicit: {
      name: 'Illicit Substances & Black Market',
      description: 'International narcotics trade, money laundering, and illicit smuggling',
    },
    science: {
      name: 'Scientific Research & Space',
      description: 'Global R&D investments, space exploration programs, and cancer research',
    },
    advertising: {
      name: 'Advertising & Marketing',
      description: 'Digital ads, traditional media, and influencer sponsorships',
    },
    military: {
      name: 'Military & Defense',
      description: 'Worldwide defense budgets, weapons procurement, and nuclear arsenals',
    },
    tech: {
      name: 'Technology, AI & Computing',
      description: 'AI data centers, cloud computing infrastructure, and cybercrime damages',
    },
    energy: {
      name: 'Energy, Oil & Electricity',
      description: 'Global electricity generation, crude oil consumption, and power grids',
    },
    sports: {
      name: 'Sports, Football & Tournaments',
      description: 'Football transfer windows, club payrolls, player salaries, and international championships',
    },
    gambling: {
      name: 'Gambling & Lotteries',
      description: 'Physical casinos, online sports betting, and national state lotteries',
    },
    corruption: {
      name: 'Corruption & Tax Havens',
      description: 'Corporate tax avoidance, offshore accounts, and public sector bribery',
    },
  },
  items: {
    'spain-equality-ministry-budget': {
      title: 'Spain Ministry of Equality Annual Budget',
      subtitle: 'Annual public budget allocated to equality policies and gender violence prevention programs',
      description:
        'Official general state budget (PGE) allocation for the Ministry of Equality in Spain, funding work-life reconciliation, awareness campaigns, and victim assistance systems.',
      sourceName: 'General State Budgets (PGE) & Ministry of Finance (Spain)',
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
      title: 'Production Budget of La Velada del Año (Ibai)',
      subtitle: 'Technical production, stadium rental, musical performances, and security budget for the event',
      description:
        'Total production cost of the world’s largest live streaming event organized by Ibai Llanos (Bernabéu / Metropolitano stadiums), including international artist fees and audiovisual logistics.',
      sourceName: 'KOI Productions, Twitch & Forbes Spain Media Analysis',
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
      title: 'Global Space Exploration & Space Agencies Budget',
      subtitle: 'Combined expenditure of national agencies (NASA, ESA, CNSA, ISRO) and commercial aerospace',
      description:
        'Annual worldwide investment in lunar and Martian space missions (Artemis), deep-space astrophysics observatories (James Webb), orbital infrastructure, and commercial satellite launches.',
      sourceName: 'Euroconsult Space Economy Report & NASA Budget Estimates',
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
    'global-nuclear-weapons-spending': {
      title: 'Global Spending on Nuclear Weapons',
      subtitle: 'Annual maintenance, modernization, and operational budgets for atomic arsenals across the 9 nuclear states',
      description:
        'Total annual budget expended by the 9 nuclear-armed nations (US, China, Russia, UK, France, India, Pakistan, Israel, and North Korea) to maintain and modernize nuclear warheads and delivery systems.',
      sourceName: 'International Campaign to Abolish Nuclear Weapons (ICAN) & SIPRI',
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
      title: 'Amazon Prime Global Subscription Revenue',
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
      sourceName: 'Dell’Oro Group Data Center CapEx & Synergy Research',
    },
    'weight-loss-drugs-ozempic-spending': {
      title: 'Global Spending on Weight-Loss Drugs (Ozempic & GLP-1)',
      subtitle: 'Worldwide consumer and insurance expenditures on GLP-1 weight loss and diabetes treatments (Ozempic, Wegovy, Mounjaro)',
      description:
        'Total global market expenditure across healthcare systems, private insurance, and out-of-pocket patient spending on GLP-1 receptor agonist medications for obesity management and metabolic health.',
      sourceName: 'IQVIA Global Medicine Spending & Novo Nordisk / Eli Lilly Reports',
    },
    'top-10-football-clubs-transfer-spending': {
      title: 'Transfer Spending by the World’s Top 10 Richest Football Clubs',
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
      subtitle: 'Official and estimated annual budget for the People’s Liberation Army (PLA), naval expansion, and strategic forces',
      description:
        'Annual consolidated defense expenditure by the People’s Republic of China covering armed forces personnel, stealth fighter procurement, aircraft carrier carrier battle groups, and strategic nuclear modernization according to SIPRI and the Ministry of Finance.',
      sourceName: 'SIPRI (Stockholm International Peace Research Institute) & Ministry of Finance of China',
    },
    'china-education-spending': {
      title: 'China Public Spending on Education',
      subtitle: 'National budget for primary, secondary, vocational, and elite university higher education',
      description:
        'Total government and municipal budgetary expenditure allocated to China’s national education system (exceeding 4% of GDP) according to the Ministry of Education and National Bureau of Statistics.',
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
      sourceName: 'Préfecture d’Île-de-France & City of Paris (Plan Baignade)',
    },
    'france-youth-budget-spending': {
      title: 'French State Budget for Youth Programs & Policies',
      subtitle: 'Funding for Contrat d’Engagement Jeune (CEJ), Pass Culture, university student grants, and youth employment subsidies',
      description:
        'Consolidated public budget allocated by the French Republic to youth welfare, culture passes for 18-year-olds, higher education grants, and youth apprenticeship subsidies.',
      sourceName: 'French Ministry of National Education & Budget Law (PLF)',
    },
    'france-immigration-asylum-budget-spending': {
      title: 'French State Budget for Immigration, Asylum & Integration',
      subtitle: 'Official allocation for asylum seeker allowance (ADA), accommodation centers (CADA), OFII, and state medical aid (AME)',
      description:
        'Annual public budget committed under France’s national mission for asylum seekers, reception infrastructure, integration programs, and emergency healthcare assistance.',
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
        'Total annual consumer spending by French households on women’s, men’s, and children’s clothing and footwear according to INSEE national accounts and Institut Français de la Mode (IFM).',
      sourceName: 'INSEE & Institut Français de la Mode (IFM)',
    },
    'france-household-food-spending': {
      title: 'Food & Grocery Spending by French Households',
      subtitle: 'Total domestic grocery consumption: fresh produce, supermarket shopping, bakeries, and food staples',
      description:
        'Total annual grocery and food at-home expenditure by France’s 29.5 million households (~395 €/month per household, ~17% of average budget) calculated by INSEE and FranceAgriMer.',
      sourceName: 'INSEE (National Accounts) & FranceAgriMer',
    },
    'germany-buergergeld-spending': {
      title: 'Germany Spending on Citizen’s Income (Bürgergeld)',
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
      subtitle: 'International development cooperation, humanitarian aid, and poverty reduction (World’s 2nd largest donor)',
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
        'Total grocery and beverage retail consumption spending across Germany’s 41 million households calculated by the Federal Statistical Office (Destatis).',
      sourceName: 'Federal Statistical Office of Germany (Destatis)',
    },
    'germany-silvester-fireworks-spending': {
      title: 'Germany Spending on New Year’s Eve Fireworks (Silvester)',
      subtitle: 'Total pyrotechnics retail sales during the official 3-day window before New Year’s Eve',
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
        'Total annual expenditure of Brazil’s judicial branch covering magistrate compensation, staff payroll, courts infrastructure, and technology audited in the CNJ’s official «Justiça em Números» report.',
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
        'Consolidated financial liabilities of FC Barcelona including bank debt, player amortizations, and the Spotify Camp Nou reconstruction bonds audited in the club’s Annual Economic Report.',
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
        'Total foreign currency obligations owed to international creditors by Colombia’s public sector and private corporations tracked by the Banco de la República.',
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
        'Consolidated public debt of the People’s Republic of China including official sovereign bonds and off-budget local liabilities according to the IMF and Ministry of Finance.',
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
        'Consolidated gross debt of Italian public administrations reported by Banca d’Italia and Istat.',
      sourceName: 'Banca d’Italia & Istat',
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
        'Total global advertiser expenditure on Instagram (Meta Platforms) including sponsored posts, video placements, and creator monetization audited in Meta’s SEC filings.',
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
  },
};
