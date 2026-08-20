import { Translations } from '@/types/i18n';

export const ptTranslations: Translations = {
  seo: {
    title: 'WorldSpend.org — Gastos Globais em Tempo Real e Estatísticas ao Vivo',
    description:
      'Painel de dados macroeconômicos que rastreia os gastos globais em tempo real, estatísticas de gastos ao vivo, relógio dos gastos mundiais e rastreador financeiro global.',
    mainKeyword: 'Gastos globais em tempo real',
    secondaryKeywords: [
      'Estatísticas de gastos ao vivo',
      'Rastreador financeiro global',
      'Relógio dos gastos mundiais',
    ],
    keywords: [
      'Gastos globais em tempo real',
      'Estatísticas de gastos ao vivo',
      'Rastreador financeiro global',
      'Relógio dos gastos mundiais',
      'gastos mundiais',
      'estatísticas financeiras globais',
    ],
  },
  header: {
    tagline: 'Estatísticas dos Gastos Mundiais em Tempo Real',
    compareNav: 'Comparar',
    compareNavTitle: 'Comparador Multi-Contador (Em breve)',
    soonBadge: 'Em breve',
    backToTop: 'Voltar ao topo',
    homeNav: 'Início',
    timeframes: {
      year: 'Ano 2026',
      today: 'Hoje',
      session: 'Sua Visita',
      second: 'Por Segundo',
    },
    selectCurrency: 'Selecionar moeda',
    selectLanguage: 'Idioma',
  },
  comparePage: {
    badge: 'Análise Comparativa ao Vivo',
    title: 'Comparador de Contadores & Matriz de Fluxos',
    subtitle: 'Selecione até 10 indicadores em tempo real para comparar velocidades de gastos, proporções e volumes simultâneos.',
    selectionLimit: (current: number, max: number) => `${current} / ${max} selecionados`,
    addCounterPlaceholder: 'Buscar e adicionar um indicador...',
    clearAll: 'Limpar Tudo',
    selectPresets: 'Duelos Sugeridos:',
    presetTopGlobal: 'Fluxos Globais Top',
    presetSovereignDebts: 'Dívidas Soberanas',
    presetTechAndMedia: 'Tecnologia e Redes',
    presetLifestyle: 'Consumo e Estilo de Vida',
    liveComparisonTitle: 'Corrida Financeira Simultânea a 60 FPS',
    rankingHeader: 'Posição & Velocidade',
    ratePerSecHeader: 'Fluxo por Segundo',
    annualTotalHeader: 'Gasto Anual Base',
    shareOfTotalHeader: '% do Total Comparado',
    maxLimitWarning: 'Você pode comparar no máximo 10 contadores simultaneamente.',
    emptyStateTitle: 'Nenhum Contador Selecionado',
    emptyStateDescription: 'Escolha indicadores no seletor acima ou escolha um duelo rápido para iniciar a comparação em tempo real.',
    backToHome: 'Voltar a Todos os Contadores',
    shareComparison: 'Compartilhar Comparação',
    copiedLink: 'Link copiado para a área de transferência!',
  },
  heroTicker: {
    yearLabel: 'Gastos Mundiais Totais em 2026',
    todayLabel: 'Gastos Mundiais Totais Hoje (desde 00:00 GMT)',
    sessionLabel: (seconds: number) => `Gastos mundiais durante seus ${Math.floor(seconds)}s de visita`,
    secondLabel: 'Gastos Mundiais Totais por Segundo',
    perSecondSuffix: 'por segundo',
  },
  sessionBanner: {
    timeOnPage: 'Tempo decorrido na página:',
    spendDuringVisit: 'Dinheiro gasto globalmente durante sua visita:',
  },
  searchAndFilter: {
    filterSectionTitle: 'Pesquisa e Filtros por Categoria',
        searchPlaceholder: 'Buscar indicadores por temas, países ou fontes (ex. dívida, Brasil, Netflix)...',
    showingCounters: (count: number) => `Exibindo ${count} contadores ao vivo`,
    indicatorsCount: (count: number) => `${count} indicadores`,
    categoriesCount: (count: number) => `${count} categorias`,
    noResultsFound: (query: string) => `Nenhum contador estatístico encontrado para "${query}"`,
    viewAllButton: 'Ver todos os indicadores',
    collapseAll: 'Recolher tudo',
    expandAll: 'Expandir tudo',
  },
  card: {
    perSecondBadge: '/s',
    officialSourcePrefix: 'Fonte Oficial:',
    embedTitle: 'Código de Incorporação ao Vivo',
    embedInstruction: 'Incorpore este contador ao vivo em qualquer site ou blog:',
    testWidgetPage: 'Testar página do widget',
    copyHtml: 'Copiar HTML',
    copied: 'Copiado!',
  },
  detailPage: {
    backLink: 'Voltar para todas as estatísticas ao vivo',
    backToCompare: 'Voltar ao comparador',
    statisticalIndicator: 'INDICADOR ESTATÍSTICO',
    annualBaseline: 'Base Anual',
    annualizedExp: 'Despesa anualizada consolidada',
    ratePerMinute: 'Gastos por Minuto',
    rateOfFlow: 'Taxa de fluxo de capital',
    shareOfGdp: 'Participação no PIB Mundial',
    ofWorldEconomy: 'Da economia global',
    historicalChartTitle: 'Trajetória Histórica dos Gastos (2000 – 2026)',
    historicalChartSubtitle: '',
    statisticalOverview: 'Visão Geral Estatística:',
    officialSource: 'Fonte Oficial:',
    continuousUpdate: 'Atualização contínua a 60 FPS',
    relatedCountersTitle: 'Indicadores Relacionados nesta Categoria',
    relatedCountersSubtitle: 'Outros contadores estatísticos em tempo real da mesma categoria',
    shareButton: 'Compartilhar estatística',
    shareCopied: 'Link copiado para a área de transferência!',
    downloadCsv: 'Baixar CSV',
    embedWidget: 'Incorporar Widget',
    embedCopied: 'Código iframe copiado!',
    showChart: 'Mostrar Gráfico',
    hideChart: 'Ocultar Gráfico',
    shareX: 'Compartilhar no X (Twitter)',
    shareWhatsApp: 'Compartilhar no WhatsApp',
  },
  footer: {
    methodologyTitle: 'Metodologia e Integridade dos Dados',
    methodologyBody: 'Valores em tempo real baseados em dados oficiais de organismos internacionais.',
    copyrightTagline: 'Estatísticas Financeiras Globais Verificadas em Tempo Real e Indicadores Macroeconômicos',
    categoriesTitle: 'Categorias de Gastos',
    trendingTitle: 'Contadores em Tempo Real Populares',
    sourcesTitle: 'Fontes Oficiais de Dados',
    toolsTitle: 'Ferramentas e Arquitetura',
    toolsEmbedWidgets: 'Widgets Incorporáveis ao Vivo',
    toolsEngine: 'Motor Dinâmico a 60 FPS',
    toolsMultiCurrency: 'Conversor Multimoeda (11 Moedas)',
    toolsHreflang: 'SEO Multilíngue Hreflang',
    copyrightNotice: 'WorldSpend Análise Financeira Global',
    disclaimerTitle: 'Aviso Legal e Citação',
    disclaimerText:
      'Os valores de gastos em tempo real exibidos no WorldSpend.org são aproximações algorítmicas contínuas baseadas em relatórios oficiais anuais. Os dados são atualizados continuamente para fins educacionais e de pesquisa.',
    citationText: 'Como citar: WorldSpend Analytics. (2026). Indicadores Mundiais de Gastos em Tempo Real. Disponível em https://worldspend.org',
  },
    categories: {
    all: { name: 'Todos os Gastos', description: 'Visão geral financeira global completa em tempo real' },
    entertainment: { name: 'Entretenimento e Marcas', description: 'Esportes, streaming, videogames e marcas globais' },
    government: { name: 'Governo e Setor Público', description: 'Orçamentos públicos, ajudas, exploração espacial e ministérios' },
    health: { name: 'Saúde e Bem-estar', description: 'Saúde pública, tabaco e procedimentos médicos' },
    food: { name: 'Alimentação e Custo de Vida', description: 'Gastos com alimentação, custo de vida e consumo diário' },
    illicit: { name: 'Mercado Negro e Ilícito', description: 'Economia criminosa, crimes cibernéticos, drogas e tráfico' },
    military: { name: 'Defesa e Forças Armadas', description: 'Gastos militares globais, armamento, exércitos e programas de defesa' },
    'country-gdp': { name: 'PIB por País', description: 'Produto Interno Bruto (PIB nominal) dos países em tempo real' },
  },
  items: {
    'julian-alvarez-market-value': {
      title: "Valor de Mercado de Julián Álvarez",
      subtitle: "A estimativa de valor de mercado do jogador Julián Álvarez é de 100 milhões de euros",
      description: "O valor de mercado atual de Julián Álvarez (atacante do Atlético de Madrid e da seleção argentina) está fixado em 100 milhões de euros, consolidando-o como um dos jogadores de futebol de elite do mundo de acordo com a base de dados do Transfermarkt.",
      sourceName: "Transfermarkt — Perfil de Julián Álvarez",
      sources: [
        {
          name: "Transfermarkt — Perfil de Julián Álvarez (Histórico de Valor de Mercado)",
          url: "https://www.transfermarkt.es/julian-alvarez/marktwertverlauf/spieler/576024",
        }
      ],
    },
    'us-national-debt': {
      title: "Dívida Nacional dos EUA",
      subtitle: "A dívida pública acumulada dos EUA supera 39 trilhões de dólares",
      description: "A dívida nacional acumulada dos Estados Unidos ultrapassa 39 trilhões de dólares (39,000,000,000,000 USD). Representa o total das obrigações financeiras pendentes do governo federal americano acumuladas na história.",
      sourceName: "LA Times",
      sources: [
        {
          name: "LA Times — Dívida nacional dos EUA supera 39 trilhões",
          url: "https://www.latimes.com/espanol/eeuu/articulo/2026-03-27/la-deuda-nacional-de-eeuu-supera-los-39-billones-de-dolares",
        }
      ],
    },
    'spain-monarchy-spending': {
      title: "Gastos com a Monarquia Espanhola",
      subtitle: "O custo anual global estimado da Casa Real espanhola é de cerca de 105 milhões de euros",
      description: "O custo anual global da Monarquia na Espanha é estimado em cerca de 105 milhões de euros, somando a dotação direta oficial de 8,43 milhões de euros com gastos de segurança e apoio militar de outros departamentos, equivalendo a 2,2 euros por cidadão.",
      sourceName: "Diario en Positivo",
      sources: [
        {
          name: "Diario en Positivo — Custo da monarquia espanhola",
          url: "https://www.diarioenpositivo.com/economia/estudio-calcula-que-monarquia-cuesta-105-millones-ano-jefaturas-estado-mas-baratas-europa/20260303181913075067.html",
        }
      ],
    },
    'uk-monarchy-spending': {
      title: "Gastos com a Monarquia Britânica",
      subtitle: "O custo anual global estimado da Família Real britânica é de cerca de 166 milhões de euros",
      description: "Os gastos totais com a monarquia do Reino Unido rondam os 166 milhões de euros anuais, incluindo a Subvenção Soberana (Sovereign Grant) e os custos de segurança cobertos pelo Estado. É um dos chefes de Estado mais caros da Europa.",
      sourceName: "Diario en Positivo",
      sources: [
        {
          name: "Diario en Positivo — Custo da monarquia britânica",
          url: "https://www.diarioenpositivo.com/economia/estudio-calcula-que-monarquia-cuesta-105-millones-ano-jefaturas-estado-mas-baratas-europa/20260303181913075067.html",
        }
      ],
    },
    'fortnite-player-spending': {
      title: "Gastos dos Jogadores no Fortnite",
      subtitle: "Os jogadores de Fortnite gastam uma média de cerca de 16 milhões de dólares por dia",
      description: "Os jogadores do famoso battle royale Fortnite gastam em média 16 milhões de dólares por dia mundialmente. Esse valor deve-se à compra de V-Bucks para adquirir cosméticos, danças e passes de batalha.",
      sourceName: "Tekrevol",
      sources: [
        {
          name: "Tekrevol — Receitas e estatísticas de uso do Fortnite",
          url: "https://www.tekrevol.com/blogs/fortnite-revenue-usage-statistics/",
        }
      ],
    },
    'onlyfans-user-spending': {
      title: "Gastos dos Usuários no OnlyFans",
      subtitle: "Os usuários gastam cerca de 7,2 bilhões de dólares por ano no OnlyFans",
      description: "O gasto global de usuários na plataforma de assinaturas OnlyFans atingiu aproximadamente 7,2 bilhões de dólares anuais. O crescimento deve-se ao modelo de assinatura direta e gorjetas aos criadores.",
      sourceName: "El Vocero",
      sources: [
        {
          name: "El Vocero — OnlyFans fatura 7,2 bilhões de USD",
          url: "https://elvocero.com.ar/2025/12/18/onlyfans-facturo-usd-7-200-millones-en-2025-y-argentina-se-ubico-entre-los-20-paises-que-mas-gastaron/",
        }
      ],
    },
    'mrbeast-content-reinvestment': {
      title: "Reinvestimento e Produção do MrBeast",
      subtitle: "MrBeast reinveste quase todos os seus rendimentos (cerca de 400 milhões de dólares por ano)",
      description: "Jimmy Donaldson (MrBeast) reinveste quase toda a receita da sua holding Beast Industries (cerca de 400 milhões de dólares anuais) na produção de vídeos de alta produção para o YouTube. A Beast Industries vale 5,2 bilhões de dólares.",
      sourceName: "Plisio",
      sources: [
        {
          name: "Plisio — Perfil e finanças do MrBeast",
          url: "https://plisio.net/es/profiles/mrbeast",
        }
      ],
    },
    'eras-tour-ticket-spending': {
      title: "Gastos com The Eras Tour (Taylor Swift)",
      subtitle: "Os fãs gastaram mais de 2 bilhões de dólares em ingressos para a turnê da Taylor Swift",
      description: "O gasto mundial em ingressos para \"The Eras Tour\" de Taylor Swift superou os 2 bilhões de dólares. Tornou-se a turnê de shows mais lucrativa da história, impulsionando a economia dos locais por onde passou.",
      sourceName: "Billboard",
      sources: [
        {
          name: "Billboard — The Eras Tour supera 2 bilhões",
          url: "https://www.billboard.com/espanol/noticias/taylor-swift-eras-tour-supera-2000-millones-de-dolares-en-ventas-1235849106/",
        },
        {
          name: "GQ — Ganhos de Taylor Swift com The Eras Tour",
          url: "https://www.revistagq.com/moda/articulo/cuanto-gana-nike-michael-jordan",
        },
        {
          name: "TN — O que Taylor Swift fez com o dinheiro",
          url: "https://tn.com.ar/musica/noticias/2025/12/12/taylor-swift-blanqueo-que-hizo-con-la-millonaria-cifra-que-gano-con-the-eras-tour/",
        }
      ],
    },
    'jordan-brand-spending': {
      title: "Gastos em produtos Jordan Brand (Nike)",
      subtitle: "Os consumidores gastam mais de 7 bilhões de dólares por ano em produtos Jordan",
      description: "As vendas mundiais de calçados e vestuário da marca Jordan Brand da Nike superam 7 bilhões de dólares por ano. Michael Jordan recebe cerca de 5% de royalties sobre esse faturamento graças a um acordo histórico.",
      sourceName: "GQ",
      sources: [
        {
          name: "GQ — Ganhos da Nike e Michael Jordan com a Jordan",
          url: "https://www.revistagq.com/moda/articulo/cuanto-gana-nike-michael-jordan",
        },
        {
          name: "NX Noticias — Royalties de Michael Jordan superam 300M",
          url: "https://www.facebook.com/NXNoticias.oficial/posts/michael-jordan-regal%C3%ADas-con-nike-superan-los-300-millones-de-d%C3%B3lares-al-a%C3%B1ola-hi/122280916874074746/",
        }
      ],
    },
    'ferrari-f1-spending': {
      title: "Gastos com a Scuderia Ferrari na F1",
      subtitle: "A Ferrari gasta cerca de 185 milhões de dólares por ano sob o teto de gastos da F1",
      description: "Os gastos da equipe Ferrari para suas operações na F1 são estimados em cerca de 185 milhões de dólares anuais sob o limite financeiro da FIA. Esse valor exclui os salários de pilotos e custo de motores.",
      sourceName: "Revista Car",
      sources: [
        {
          name: "Revista Car — Quanto custa manter uma equipe de F1",
          url: "https://revistacar.es/cuanto-cuesta-tener-un-equipo-de-formula-1/",
        }
      ],
    },
    'un-annual-budget': {
      title: "Gastos do orçamento ordinário da ONU",
      subtitle: "O orçamento ordinário de funcionamento das Nações Unidas (ONU) é de 3,45 bilhões de dólares em 2026",
      description: "O orçamento de funcionamento ordinário da Organização das Nações Unidas atinge 3,45 bilhões de dólares em 2026, financiando a secretaria, missões de paz e escritórios globais.",
      sourceName: "ONU News",
      sources: [
        {
          name: "ONU News — Orçamento ordinário da ONU para 2026",
          url: "https://news.un.org/es/story/2025/12/1540968",
        }
      ],
    },
    'who-annual-budget': {
      title: "Orçamento de programas da OMS",
      subtitle: "O orçamento anual de programas de base da OMS é de 2,1 bilhões de dólares por ano",
      description: "O orçamento básico de programas da Organização Mundial da Saúde (OMS) atinge 4,2 bilhões de dólares para o biênio 2026-2027 (média de 2,1 bilhões por ano), incluindo um aumento de 20% nas contribuições dos países.",
      sourceName: "Organização Mundial da Saúde (OMS)",
      sources: [
        {
          name: "OMS — Países membros aprovam orçamento e aumento 2026-2027",
          url: "https://www.who.int/es/news/item/20-05-2025-in-historic-move--who-member-states-approve-20--funding-increase-and-2026-27-budget",
        },
        {
          name: "OMS — Site oficial em espanhol",
          url: "https://www.who.int/es",
        }
      ],
    },
    'global-pharmaceutical-spending': {
      title: "Gastos farmacêuticos mundiais",
      subtitle: "Os gastos mundiais com remédios e produtos de saúde superam 2 trilhões de dólares por ano",
      description: "As despesas com medicamentos chegam a mais de 2 trilhões de dólares anuais no mundo, impulsionadas pelo envelhecimento demográfico e terapias inovadoras de alta especialidade.",
      sourceName: "Intuition Labs",
      sources: [
        {
          name: "Intuition Labs — Análise do mercado farmacêutico e tendências",
          url: "https://intuitionlabs.ai/articles/pharmaceutical-market-analysis-trends",
        }
      ],
    },
    'global-obesity-economic-cost': {
      title: "Custo econômico mundial da obesidade",
      subtitle: "O impacto econômico global do excesso de peso é estimado em 2 trilhões de dólares anuais",
      description: "O custo anual decorrente do sobrepeso e da obesidade atinge cerca de 2 trilhões de dólares (2,4% a 2,8% do PIB mundial), englobando custos hospitalares e perdas de produtividade laboral.",
      sourceName: "Live-Med (World Obesity Atlas)",
      sources: [
        {
          name: "Live-Med — Análise do World Obesity Atlas: Impacto da obesidade",
          url: "https://live.med/es/blog/analisis-del-world-obesity-atlas-2023-impacto-economico-obesidad/",
        }
      ],
    },
    'global-depression-anxiety-cost': {
      title: "Custo da depressão e da ansiedade",
      subtitle: "A depressão e a ansiedade custam quase 1 trilhão de dólares anuais à economia global",
      description: "O impacto econômico anual dos transtornos mentais como ansiedade e depressão atinge 1 trilhão de dólares na economia mundial, principalmente na perda de produtividade por faltas ao trabalho.",
      sourceName: "Yahoo Notícias (OMS / Banco Mundial)",
      sources: [
        {
          name: "Yahoo Notícias — Custo mundial da ansiedade e depressão",
          url: "https://es-us.noticias.yahoo.com/costo-global-ansiedad-depresi%C3%B3n-supera-150118561.html",
        }
      ],
    },

    'spain-cost-raising-child': {
      title: 'Custo de Criar um Filho na Espanha (0–18 anos)',
      subtitle: 'Entre €115.000 e €180.000 no total em média básica; cerca de €8.194 por ano por filho',
      description:
        'Não existe um valor único a nível mundial, pois o custo varia muito conforme o país. Na Espanha, criar um filho até aos 18 anos custa entre 115.000 e 180.000 euros em média (média: 147.500 €), o equivalente a cerca de 8.194 € por ano por filho (~8.932 USD). Este custo inclui alimentação, roupa, educação, saúde, lazer e transporte, excluindo habitação e estudos universitários.',
      sourceName: 'Educo — Quanto custa criar um filho na Espanha?',
      sources: [{ name: 'Educo — Quanto custa criar um filho na Espanha?', url: 'https://www.educo.org/blog/cuanto-cuesta-criar-a-un-hijo-o-hija-en-espana' }],
    },
    'global-online-food-delivery-market': {
      title: 'Gastos Mundiais em Entrega de Comida ao Domicílio Online',
      subtitle: 'As pessoas gastam mais de 320 mil milhões de dólares por ano em plataformas digitais de entrega de refeições',
      description:
        'A nível mundial, as pessoas gastam mais de 320 mil milhões de dólares por ano no mercado de entrega de refeições e take-away através de plataformas digitais como Uber Eats, Just Eat, Deliveroo, DoorDash ou Glovo. Este mercado cresceu exponencialmente desde a pandemia de 2020, impulsionado pelo boom do comércio móvel e pela expansão global das dark kitchens.',
      sourceName: 'Fortune Business Insights — Mercado de Entrega de Refeições Online',
      sources: [{ name: 'Fortune Business Insights — Relatório sobre o Mercado de Entrega de Refeições Online', url: 'https://www.fortunebusinessinsights.com/online-food-delivery-market-110672' }],
    },
    'global-cinema-box-office-revenue': {
      title: 'Bilheteria Global do Cinema',
      subtitle: 'A bilheteria cinematográfica mundial anual ronda os 29,6 mil milhões de euros (~32,264 mil M$ USD)',
      description:
        'A receita anual global de bilheteria cinematográfica ronda os 29,6 mil milhões de euros (~32,264 mil milhões de dólares), impulsionada principalmente pelo crescimento do mercado asiático. A Ásia lidera a recuperação pós-pandemia do setor cinematográfico mundial, enquanto os mercados norte-americano e europeu continuam sendo pilares fundamentais.',
      sourceName: 'Spain Audiovisual Hub / Observatório Audiovisual Europeu',
      sources: [{ name: 'Spain Audiovisual Hub — A Ásia impulsiona o crescimento da bilheteria mundial', url: 'https://spainaudiovisualhub.digital.gob.es/es/actualidad/observatorio-audiovisual-europeo--asia-impulsa-el-crecimiento-de' }],
    },
    'superbowl-advertising-revenue': {
      title: 'Gastos Publicitários das Marcas no Super Bowl',
      subtitle: 'As marcas pagaram mais de 414 milhões de dólares para se anunciarem no Super Bowl pelo segundo ano consecutivo',
      description:
        'As empresas desembolsaram mais de 414 milhões de dólares para colocar os seus anúncios durante o Super Bowl, superando os 400 milhões pelo segundo ano consecutivo. Um spot de 30 segundos pode custar até 8 milhões de dólares, tornando o Super Bowl na montra publicitária mais cara do planeta.',
      sourceName: 'Palco23 / Mundo Deportivo — Gastos publicitários no Super Bowl',
      sources: [{ name: 'Palco23 — O Super Bowl ultrapassa os 400 milhões de dólares em gastos publicitários', url: 'https://palco23.mundodeportivo.com/media/la-super-bowl-supera-los-400-millones-de-dolares-de-ingresos-publicitarios-por-segundo-ano' }],
    },
    'fifa-world-cup-2026-cost': {
      title: 'Custo de Organização do Mundial de Futebol FIFA 2026',
      subtitle: 'Gastos totais da FIFA para organizar e operar o primeiro Mundial com 48 equipas da história',
      description:
        'O custo de organização e operação do Mundial FIFA 2026 ascendeu a cerca de 2,4 mil milhões de dólares para a própria FIFA. O torneio realizou-se em 16 cidades dos Estados Unidos, Canadá e México com 48 seleções participantes pela primeira vez na história.',
      sourceName: 'BBC Mundo — Mundial da FIFA 2026',
      sources: [{ name: 'BBC Mundo — O custo de organização do Mundial FIFA 2026', url: 'https://www.bbc.com/mundo/articles/cy8d7p71p7po' }],
    },
    'fifa-world-cup-global-advertising-investment': {
      title: 'Gastos das Marcas em Publicidade para o Mundial FIFA 2026',
      subtitle: 'As empresas gastaram ~10,5 mil M$ por edição para se anunciarem durante o Mundial (ciclo 4 anos → ~2,625 mil M$/ano)',
      description:
        'O Mundial da FIFA não se realiza todos os anos, mas de quatro em quatro anos. O custo publicitário total assumido pelas marcas para o Mundial 2026 ascende a cerca de 10,5 mil milhões de dólares por edição (~2,625 mil milhões anualizados). As marcas pagaram para ocupar espaços na televisão, plataformas de streaming, estádios e redes sociais durante o torneio mais visto do mundo.',
      sourceName: 'AdLatina — Custo publicitário das marcas para o Mundial FIFA 2026',
      sources: [{ name: 'AdLatina — O investimento publicitário global estimado para o Mundial 2026 ronda os 10,5 mil milhões de dólares', url: 'https://www.adlatina.com/publicidad/la-inversin-publicitaria-global-estimada-para-el-mundial-2026-ronda-los-10.500-millones-de-dlares' }],
    },
    'spain-equality-ministry-budget': {
      title: 'Orçamento do Ministério da Igualdade da Espanha',
      subtitle: 'Orçamento anual destinado a políticas de igualdade e prevenção de violência de gênero',
      description: 'Dotação orçamentária do Estado espanhol para programas de igualdade, conciliação e proteção.',
      sourceName: 'Ministério da Igualdade da Espanha & Wikipédia',
      sources: [
        {
          name: 'Ministério da Igualdade — Comunicado Oficial sobre a Execução Orçamentária',
          url: 'https://www.igualdad.gob.es/comunicacion/sala-de-prensa/la-ejecucion-presupuestaria-del-ministerio-de-igualdad-roza-el-96-en-2025-y-supera-la-del-ejercicio-anterior/',
        },
        {
          name: 'Wikipédia — Ministério da Igualdade (Espanha)',
          url: 'https://pt.wikipedia.org/wiki/Minist%C3%A9rio_da_Igualdade_(Espanha)',
        },
      ],
    },
    'cost-raising-child-18-years': {
      title: 'Custo de Criar um Filho até os 18 Anos',
      subtitle: 'Gastos acumulados com alimentação, moradia, educação, saúde e criação',
      description: 'Investimento financeiro médio necessário para criar um filho do nascimento até a maioridade (~€320.000).',
      sourceName: 'Save the Children & INE',
    },
    'spain-pensions-expenditure': {
      title: 'Gastos com Aposentadorias e Pensões na Espanha',
      subtitle: 'Folha mensal e anual de pensões contributivas de aposentadoria e invalidez',
      description: 'Despesa total da Seguridade Social espanhola pagando mais de 10 milhões de pensões (12,5% do PIB).',
      sourceName: 'Seguridade Social da Espanha & Ministério da Inclusão',
    },
    'monthly-food-grocery-spending': {
      title: 'Gastos Mensais com Alimentação e Supermercado',
      subtitle: 'Orçamento familiar para compras de supermercado e produtos frescos',
      description: 'Despesa consolidada das famílias em alimentação e compras em supermercados.',
      sourceName: 'FAO & Instituto Nacional de Estatística (INE)',
    },
    'wedding-industry-average-cost': {
      title: 'Custo Médio de um Casamento',
      subtitle: 'Gastos totais com banquete, vestuário, fotografia, lua de mel e celebração',
      description: 'Mercado global de festas de casamento, com custo médio na Espanha em torno de 22.500 €.',
      sourceName: 'The Knot Global Wedding Report & Bodas.net',
    },
    'baby-diapers-annual-spending': {
      title: 'Gastos com Fraldas para Bebês por Mês',
      subtitle: 'Consumo recorrente de fraldas descartáveis e itens de higiene infantil',
      description: 'Volume global de fraldas. Um bebê usa de 5.000 a 6.000 fraldas nos primeiros 30 meses.',
      sourceName: 'Euromonitor International & OCU',
    },
    'spain-social-welfare-benefits': {
      title: 'Gastos da Espanha em Auxílios e Proteção Social',
      subtitle: 'Seguro-desemprego, Renda Mínima Vital e benefícios de dependência social',
      description: 'Despesas públicas da Espanha em programas sociais de amparo a famílias e desempregados.',
      sourceName: 'SEPE, Ministério dos Direitos Sociais & Eurostat',
    },
    'la-velada-production-cost': {
      title: 'Custo de Produção de La Velada del Año VI (Ibai)',
      subtitle: 'Orçamento total de 10 milhões de euros para aluguel de estádios, artistas e produção técnica',
      description:
        'Custo total de organização do maior evento de streaming em língua espanhola (Santiago Bernabéu / Metropolitano), estimado em 10 milhões de euros (~$10,9M USD).',
      sourceName: 'Diario ABC, Diario AS & Onda Cero',
      sources: [
        {
          name: 'Diario ABC — La Velada del Año: o dinheiro que custa e ganha Ibai Llanos',
          url: 'https://www.abc.es/gente/velada-ano-dinero-cuesta-gana-ibai-llanos-20260722013407-nt.html',
        },
        {
          name: 'Diario AS (MeriStation) — O valor astronômico que custa a Ibai organizar La Velada del Año',
          url: 'https://as.com/meristation/streamers/la-mareante-cifra-economica-que-le-cuesta-a-ibai-organizar-la-velada-del-ano-f202607-n/',
        },
        {
          name: 'Onda Cero — Valores de produção e negócios de La Velada del Año de Ibai',
          url: 'https://www.ondacero.es/noticias/sociedad/ganado-dinero-ibai-velada-ano-5-esto-dicen-calculos_2025072868876ffef4ec026a96bddf38.html',
        },
      ],
    },
    'individual-monthly-food-cost': {
      title: 'Gasto de uma Pessoa com Comida por Mês',
      subtitle: 'Custo individual médio com supermercado e alimentação fora de casa',
      description: 'Despesas individuais médias de um adulto em compras de alimentação e refeições.',
      sourceName: 'INE & Eurostat',
    },
    'government-styling-makeup-spending': {
      title: 'Gastos com Maquiagem e Estilo de Altos Cargos Públicos',
      subtitle: 'Contratos públicos de cabeleireiro, maquiagem e assessoria de imagem para autoridades',
      description: 'Contratos públicos licitados para serviços de estética e imagem de membros do governo em atos oficiais.',
      sourceName: 'Portal da Transparência & Contratação Pública da Espanha',
    },
    'spain-total-annual-public-spending': {
      title: 'Gastos Públicos Totais da Espanha por Ano',
      subtitle: 'Orçamento consolidado do Estado central, 17 comunidades autônomas e municípios',
      description: 'Gastos anuais de todas as administrações públicas da Espanha, ultrapassando 645 bilhões de euros anuais.',
      sourceName: 'Ministério da Fazenda & Banco da Espanha',
    },
    'spain-social-expenditure-total': {
      title: 'Gastos Sociais Totais na Espanha',
      subtitle: 'Orçamento agregado para aposentadorias, saúde pública, educação e assistência social',
      description: 'Recursos públicos destinados ao Estado de bem-estar social, representando mais de 56% dos gastos públicos totais.',
      sourceName: 'Eurostat & Ministério da Fazenda',
    },
    'spain-public-spending-gdp-percentage': {
      title: 'Gastos Públicos da Espanha em % do PIB (44,6%)',
      subtitle: 'Participação do Produto Interno Bruto canalizada pelo setor público',
      description: 'Os gastos públicos espanhóis representam 44,6% do PIB nacional, em linha com a média da Zona do Euro.',
      sourceName: 'Banco da Espanha, INE & Comissão Europeia (AMECO)',
    },
    'global-public-expenditure-total': {
      title: 'Gastos Públicos Mundiais Totais',
      subtitle: 'Orçamento fiscal consolidado de todos os governos e nações soberanas',
      description: 'Volume financeiro total administrado anualmente por governos em serviços públicos, infraestrutura e saúde.',
      sourceName: 'Fundo Monetário Internacional (FMI) & Banco Mundial',
    },
    'usa-individual-monthly-cost-of-living': {
      title: 'Custo de Vida Médio Mensal por Pessoa nos EUA',
      subtitle: 'Despesas médias mensais de um adulto solteiro nos EUA (aluguel, saúde, alimentação, transporte)',
      description: 'Viver nos EUA exige em média de $3.200 a $4.200 mensais por pessoa solteira ($38.000 a $50.000 anuais).',
      sourceName: 'U.S. Bureau of Labor Statistics (BLS)',
    },
    'usa-supermarket-grocery-spending': {
      title: 'Gastos com Supermercado nos Estados Unidos por Mês',
      subtitle: 'Orçamento familiar e individual médio com alimentação em supermercados americanos',
      description: 'Uma pessoa nos EUA gasta em média entre $420 e $580 por mês em compras de alimentação doméstica.',
      sourceName: 'USDA & U.S. Census Bureau',
    },
    'usa-federal-minimum-wage-annual': {
      title: 'Salário Mínimo nos Estados Unidos (Mensal e Anual)',
      subtitle: 'Salário mínimo federal ($7,25/h = $1.256/mês) vs médias estaduais ($15-$17,50/h)',
      description: 'O salário mínimo federal legal nos EUA é de $7,25/hora, embora mais de 30 estados tenham pisos superiores.',
      sourceName: 'U.S. Department of Labor (DOL)',
    },
    'cost-of-living-spain-vs-usa': {
      title: 'Custo de Vida Comparado: Espanha vs. Estados Unidos',
      subtitle: 'O custo de vida geral nos Estados Unidos é de 65% a 85% superior ao da Espanha',
      description: 'Viver nos EUA é consideravelmente mais caro que na Espanha: aluguel +110%, saúde +400% e compras +50%.',
      sourceName: 'OECD & Numbeo Cost of Living',
    },
    'july-fourth-fireworks-spending': {
      title: 'Gastos Anuais com Fogos de Artifício e 4 de Julho',
      subtitle: 'Consumo global e americano em espetáculos pirotécnicos e comemorações',
      description: 'Gastos globais em pirotecnia. Apenas no 4 de Julho, os americanos gastam mais de 1,5 bilhão de dólares em fogos.',
      sourceName: 'American Pyrotechnics Association (APA)',
    },
    'global-military-spending': {
      title: 'Gastos Militares Mundiais',
      subtitle: 'Orçamento bélico global e despesas com defesa de todas as nações por ano',
      description:
        'Os gastos militares e bélicos globais atingem um recorde histórico de 2,887 trilhões de dólares (2.887 bilhões de USD) impulsionados por tensões geopolíticas segundo o SIPRI e a Deutsche Welle (DW).',
      sourceName: 'Deutsche Welle (DW) — Novo recorde: gastos com armas crescem no mundo todo',
    },
    'global-narcotics-spending': {
      title: 'Gastos Mundiais com Entorpecentes',
      subtitle: 'Volume econômico anual estimado do tráfico ilícito de drogas no mundo',
      description:
        'Os gastos globais estimados com entorpecentes atingem 750 bilhões de dólares anuais, representando uma das maiores atividades da economia informal e subterrânea.',
      sourceName: 'Ethic — Quanto pesa a atividade criminal na economia mundial?',
    },
    'uk-asylum-seekers-support-spending': {
      title: 'Gastos com Acolhimento de Refugiados no Reino Unido',
      subtitle: 'Orçamento anual do Home Office em hotéis e suporte a requerentes de asilo',
      description: 'Gastos públicos do Reino Unido para hospedagem temporária e processamento de solicitações de asilo.',
      sourceName: 'UK Home Office & National Audit Office',
    },
    'us-snap-food-stamps-spending': {
      title: 'Orçamento do Programa SNAP (Vales-Alimentação nos EUA)',
      subtitle: 'Assistência nutricional federal para mais de 41 milhões de beneficiários de baixa renda',
      description: 'Gastos do programa federal americano SNAP fornecendo transferência direta de renda para alimentação básica.',
      sourceName: 'USDA Food and Nutrition Service (FNS)',
    },
    'gta-6-development-marketing-budget': {
      title: 'Orçamento de Desenvolvimento e Marketing de GTA 6',
      subtitle: 'Investimento histórico para a produção do produto de entretenimento mais caro de todos os tempos',
      description: 'Orçamento total estimado para Grand Theft Auto VI (Rockstar Games / Take-Two), ultrapassando 2 bilhões de dólares.',
      sourceName: 'Take-Two Interactive & Analistas de Mercado',
    },
    'global-cancer-research-spending': {
      title: 'Gastos Globais em Pesquisa sobre o Câncer por Ano',
      subtitle: 'Financiamento em oncologia, imunoterapia e ensaios clínicos contra o câncer',
      description: 'Investimento conjunto de agências estatais de saúde, ONGs e indústria farmacêutica na cura do câncer.',
      sourceName: 'National Cancer Institute (NCI) & Cancer Research UK',
    },
    'uk-welfare-benefits-total-spending': {
      title: 'Gastos Totais com Benefícios Sociais no Reino Unido',
      subtitle: 'Orçamento do Estado em aposentadorias, Universal Credit e auxílio-moradia',
      description: 'Montante anual consolidado de seguridade social administrado pelo Department for Work and Pensions (DWP).',
      sourceName: 'UK Department for Work and Pensions (DWP)',
    },
    'global-space-exploration-spending': {
      title: 'Investimento Público em Exploração Espacial',
      subtitle: 'O investimento público global em exploração espacial atinge 119 mil milhões de euros anuais',
      description:
        'O orçamento global para a exploração espacial tem mostrado um crescimento significativo nos últimos anos. Estima-se que os governos de todo o mundo realizem um investimento público global no setor espacial de 119 mil milhões de euros por ano, impulsionando missões lunares, satélites e tecnologia de órbita.',
      sourceName: 'FasterCapital — Desafio de custos da exploração espacial',
    },
    'mega-sporting-events-organization-cost': {
      title: 'Custo de Organização de Megaeventos Esportivos (Copa do Mundo e Olimpíadas)',
      subtitle: 'Gastos médios com estádios, infraestrutura e segurança em macrocompetições',
      description: 'Investimentos globalmente necessários para organizar a Copa do Mundo da FIFA e os Jogos Olímpicos.',
      sourceName: 'Comitê Olímpico Internacional (COI) & FIFA',
    },
    'global-military-defence-spending': {
      title: 'Gastos Militares e de Defesa Mundiais',
      subtitle: 'Orçamentos de defesa combinados, compras de armas e tropas de todos os países',
      description: 'Gastos militares anuais das forças armadas soberanas de todo o planeta.',
      sourceName: 'SIPRI',
    },
    'global-ai-artificial-intelligence-spending': {
      title: 'Gastos Globais com Inteligência Artificial (IA)',
      subtitle: 'Investimentos anuais em data centers, chips GPUs, modelos LLM e software de IA',
      description: 'Investimento tecnológico global em infraestrutura de inteligência artificial generativa.',
      sourceName: 'IDC Worldwide AI Tracker & Gartner',
    },
    'global-healthcare-total': {
      title: 'Gastos Mundiais Totais com Saúde',
      subtitle: 'Despesas agregadas com hospitais, tratamentos, medicamentos e sistemas de saúde',
      description: 'Gastos globais em saúde pública e privada (~10% do PIB mundial).',
      sourceName: 'OMS (WHO) & Banco Mundial',
    },
    'global-nuclear-weapons-spending': {
      title: 'Gastos Mundiais com Armas Nucleares',
      subtitle: 'Orçamento de manutenção e modernização de arsenais atômicos das 9 potências',
      description: 'Gastos militares consolidados dos 9 países com armas nucleares.',
      sourceName: 'ICAN & SIPRI',
    },
    'global-advertising-marketing-spending': {
      title: 'Gastos Globais com Publicidade e Marketing',
      subtitle: 'Investimento publicitário de empresas em mídia digital, TV e redes sociais',
      description: 'Gastos globais em anúncios comerciais aproximando-se de 1 trilhão de dólares anuais.',
      sourceName: 'WARC & GroupM',
    },
    'global-economic-cost-of-war': {
      title: 'Impacto Econômico Global das Guerras e Conflitos',
      subtitle: 'Custo econômico global acumulado de destruição, refugiados e gastos bélicos em guerras',
      description: 'Custo macroeconômico global da violência armada segundo o Institute for Economics and Peace (~13% do PIB mundial).',
      sourceName: 'Institute for Economics and Peace (IEP) & Banco Mundial',
    },
    'global-electricity-power-spending': {
      title: 'Gastos Mundiais com Eletricidade e Geração de Energia',
      subtitle: 'Fatura global de consumo elétrico em residências, indústrias e data centers de IA',
      description: 'Gastos totais no planeta com energia elétrica gerada por fontes renováveis, nuclear e combustíveis.',
      sourceName: 'Agência Internacional de Energia (AIE / IEA)',
    },
    'global-crude-oil-spending-annual': {
      title: 'Gastos Globais Anuais com Petróleo Bruto',
      subtitle: 'Consumo diário de mais de 102 milhões de barris de petróleo para combustíveis e indústria',
      description: 'Valor financeiro total do petróleo cru consumido no mundo para gasolina, diesel, querosene e plásticos.',
      sourceName: 'IEA & OPEP',
    },
    'global-christmas-holiday-spending': {
      title: 'Gastos Globais com Natal e Festas de Fim de Ano',
      subtitle: 'Consumo em presentes, brinquedos, gastronomia natalina e viagens em família',
      description: 'Gastos dos consumidores em todo o planeta durante a temporada de compras de Natal e Ano Novo.',
      sourceName: 'National Retail Federation (NRF)',
    },
    'annual-cost-of-owning-a-dog': {
      title: 'Custo Anual de Ter um Cachorro e Cuidado Canino',
      subtitle: 'Gasto médio de 1.400 € a 2.400 $ por cão ao ano em ração, veterinário e vacinas',
      description: 'Gasto anual familiar para manter um cão doméstico (ração de qualidade, vacinas e cuidados veterinários).',
      sourceName: 'APPA & FEDIAF',
    },
    'annual-cost-of-owning-a-cat': {
      title: 'Custo Anual de Ter um Gato e Cuidado Felino',
      subtitle: 'Gasto médio de 950 € a 1.600 $ por gato ao ano em areia, alimentação e saúde',
      description: 'Despesas anuais médias para o cuidado de um gato doméstico com alimentação, areia e veterinário.',
      sourceName: 'APPA & PDSA',
    },
    'annual-cost-of-owning-a-horse': {
      title: 'Custo Anual de Manter um Cavalo e Hipismo',
      subtitle: 'Gasto médio de 4.500 € a 12.000 $ por cavalo ao ano em baia, ferrageamento e forragem',
      description: 'Investimento anual necessário para manter um cavalo em hípica (estabulagem, ferrador e veterinário).',
      sourceName: 'BETA & American Horse Council',
    },
    'uk-state-pension-annual-cost': {
      title: 'Custo Anual das Aposentadorias de Estado no Reino Unido',
      subtitle: 'Folha fiscal paga pelo governo britânico a mais de 12,6 milhões de aposentados',
      description: 'Gasto público anual com aposentadorias estatais no Reino Unido sob o mecanismo do Triple Lock (~125 bilhões £).',
      sourceName: 'UK Department for Work and Pensions (DWP)',
    },
    'annual-cost-of-amazon-prime': {
      title: 'Faturamento Global de Assinaturas do Amazon Prime',
      subtitle: 'Receita mundial gerada por mais de 200 milhões de assinantes do Prime',
      description: 'Gastos dos consumidores globais no programa de fidelidade Amazon Prime para entregas e streaming.',
      sourceName: 'Amazon SEC 10-K & CIRP',
    },
    'annual-cost-of-owning-a-pool': {
      title: 'Custo Anual de Manutenção de uma Piscina',
      subtitle: 'Gasto médio de 3.000 $ a 5.000 $ por piscina ao ano em cloro, químicos, água e energia',
      description: 'Despesas anuais recorrentes para filtragem, energia elétrica e produtos químicos em piscinas residenciais.',
      sourceName: 'Pool & Hot Tub Alliance (PHTA)',
    },
    'global-video-games-purchases-spending': {
      title: 'Gastos Mundiais com Compra de Videogames',
      subtitle: 'Vendas globais de jogos para consoles, PC, mobile, microtransações e assinaturas',
      description: 'Gastos dos consumidores mundiais em jogos digitais, expansões e assinaturas (Game Pass, PS Plus).',
      sourceName: 'Newzoo Global Games Market Report & ESA',
    },
    'global-coffee-purchases-spending': {
      title: 'Gastos Mundiais com Compra e Consumo de Café',
      subtitle: 'Consumo diário de mais de 2,25 bilhões de xícaras de café em cafeterias e supermercados',
      description: 'Gastos globais com café moído, grãos, cápsulas e bebidas servidas em cafeterias do mundo todo.',
      sourceName: 'Organização Internacional do Café (ICO)',
    },
    'global-bottled-water-purchases-spending': {
      title: 'Gastos Globais com Água Mineral Engarrafada',
      subtitle: 'Consumo anual de mais de 390 bilhões de litros de água mineral e purificada embalada',
      description: 'Gastos comerciais mundiais na compra de garrafas e galões de água mineral e de nascente.',
      sourceName: 'International Bottled Water Association (IBWA)',
    },
    'global-illicit-arms-trafficking-spending': {
      title: 'Gastos com Tráfico e Compra de Armas Ilegais',
      subtitle: 'Mercado negro global de armas leves, fuzis e munições contrabandeadas',
      description: 'Estimativa do valor do tráfico clandestino internacional de armas de fogo segundo o UNODC.',
      sourceName: 'UNODC & Small Arms Survey',
    },
    'global-cryptocurrency-purchases-spending': {
      title: 'Gastos e Aportes Globais na Compra de Criptomoedas',
      subtitle: 'Fluxo anual de moeda fiduciária injetado em Bitcoin, Ethereum e ativos digitais',
      description: 'Volume estimado de dinheiro novo investido por pessoas e instituições para comprar criptoativos.',
      sourceName: 'Chainalysis & CoinGecko',
    },
    'ai-datacenters-chatgpt-spending': {
      title: 'Gastos com Data Centers de IA e ChatGPT',
      subtitle: 'Investimento recorde em servidores GPU, resfriamento líquido e infraestrutura para IA',
      description: 'Gastos de capital (CapEx) dos gigantes de tecnologia (Microsoft, AWS, Google, Meta, OpenAI) em data centers para IA.',
      sourceName: 'Dell\'Oro Group & Synergy Research',
    },
    'weight-loss-drugs-ozempic-spending': {
      title: 'Gastos com Remédios para Emagrecer (Ozempic e GLP-1)',
      subtitle: 'Consumo mundial de medicamentos injetáveis contra obesidade e diabetes (Ozempic, Wegovy, Mounjaro)',
      description: 'Despesas globais de pacientes e sistemas de saúde com tratamentos GLP-1 da Novo Nordisk e Eli Lilly.',
      sourceName: 'IQVIA & Relatórios Financeiros Novo Nordisk / Eli Lilly',
    },
    'top-10-football-clubs-transfer-spending': {
      title: 'Gastos em Contratações dos 10 Clubes de Futebol Mais Ricos',
      subtitle: 'Investimento combinado em transferências de Real Madrid, Manchester City, Chelsea, PSG, etc.',
      description: 'Gastos totais anuais em transferências de jogadores realizados pelos 10 clubes mais ricos do planeta.',
      sourceName: 'Transfermarkt & FIFA TMS',
    },
    'top-10-football-clubs-total-payroll-spending': {
      title: 'Folha Salarial e Salários dos 10 Maiores Clubes de Futebol',
      subtitle: 'Salários anuais pagos a jogadores de elite, técnicos e comissão nos gigantes do futebol',
      description: 'Gasto total anual com folha salarial dos 10 clubes com maior faturamento do mundo segundo a UEFA e Deloitte.',
      sourceName: 'Deloitte Football Money League & UEFA',
    },
    'global-football-transfers-spending': {
      title: 'Gastos Mundiais Totais com Transferências no Futebol',
      subtitle: 'Volume financeiro anual de compras e vendas de jogadores em todas as ligas FIFA',
      description: 'Montante total de dinheiro pago em transferências de futebolistas profissionais em todo o mundo.',
      sourceName: 'FIFA Global Transfer Report & TMS',
    },
    'global-illicit-drug-trade': {
      title: 'Gastos Globais com Drogas Ilícitas e Narcotráfico',
      subtitle: 'Mercado clandestino global de cocaína, opioides, maconha e drogas sintéticas',
      description: 'Estimativa da movimentação financeira do narcotráfico internacional segundo relatório do UNODC.',
      sourceName: 'UNODC (Relatório Mundial sobre Drogas)',
    },
    'illicit-stolen-art-antiquities-trafficking': {
      title: 'Tráfico Ilícito de Obras de Arte e Bens Culturais',
      subtitle: 'Mercado negro internacional de arte roubada, saques arqueológicos e antiguidades',
      description: 'Volume financeiro anual clandestino de roubo e contrabando de patrimônio histórico segundo a UNESCO e INTERPOL.',
      sourceName: 'UNESCO & INTERPOL',
    },
    'global-counterfeit-pirated-goods-trade': {
      title: 'Comércio Global de Produtos Falsificados e Pirataria',
      subtitle: 'Mercado mundial de roupas falsas, eletrônicos piratas e medicamentos adulterados',
      description: 'Volume do comércio internacional de produtos piratas e falsificações segundo a OCDE e EUIPO (~2,5% do comércio mundial).',
      sourceName: 'OCDE & EUIPO',
    },
    'global-cybercrime-ransomware-damages': {
      title: 'Prejuízos Globais com Cibercrime e Ransomware',
      subtitle: 'Impacto econômico de ataques hackers, extorsão digital, roubo de dados e fraudes virtuais',
      description: 'Custo econômico anual infligido pelo cibercrime internacional segundo a Cybersecurity Ventures e o FBI IC3.',
      sourceName: 'Cybersecurity Ventures & FBI IC3',
    },
    'cristiano-ronaldo-annual-earnings-wealth': {
      title: 'Ganhos Anuais e Fortuna de Cristiano Ronaldo (CR7)',
      subtitle: 'Salário no Al-Nassr, contrato vitalício com a Nike, marcas próprias e patrocínios globais',
      description: 'Rendimento anual consolidado de Cristiano Ronaldo somando seu contrato na Arábia Saudita e publicidade mundial. Patrimônio estimado em mais de 750 milhões $.',
      sourceName: 'Forbes & Bloomberg',
    },
    'lionel-messi-annual-earnings-wealth': {
      title: 'Ganhos Anuais e Fortuna de Lionel Messi',
      subtitle: 'Salário no Inter Miami, participação no Apple TV MLS Pass e contrato com a Adidas',
      description: 'Ganhos anuais totais de Lionel Messi na MLS com cotas da Apple TV e patrocínios internacionais. Patrimônio estimado em 650 milhões $.',
      sourceName: 'Forbes & Sportico',
    },
    'lamine-yamal-annual-earnings-wealth': {
      title: 'Ganhos Anuais e Salário de Lamine Yamal',
      subtitle: 'Salário profissional no FC Barcelona, bônus de performance e contrato global com a Adidas',
      description: 'Ganhos anuais estimados da jovem estrela Lamine Yamal somando seu salário no Barcelona e contrato de embaixador global da Adidas.',
      sourceName: 'Capology & Forbes Sports',
    },
    'china-military-defense-spending': {
      title: 'Gastos Militares e Orçamento de Defesa da China',
      subtitle: 'Orçamento oficial e estimado das Forças Armadas (EPL), modernização naval e forças estratégicas',
      description: 'Gastos militares totais da República Popular da China para suas forças armadas, frota naval e arsenal estratégico segundo o SIPRI.',
      sourceName: 'SIPRI & Ministério das Finanças da China',
    },
    'china-education-spending': {
      title: 'Gastos Públicos da China em Educação',
      subtitle: 'Financiamento nacional de escolas públicas, ensino técnico e universidades de ponta',
      description: 'Orçamento governamental consolidado investido no sistema educacional chinês (>4% do PIB) segundo o Ministério da Educação.',
      sourceName: 'Ministério da Educação da China & BNS',
    },
    'china-research-development-spending': {
      title: 'Gastos da China em Pesquisa e Desenvolvimento (P&D / R&D)',
      subtitle: 'Investimento em semicondutores, robótica, inteligência artificial e tecnologia espacial',
      description: 'Gastos nacionais brutos em P&D na China segundo o Departamento Nacional de Estatísticas e a OCDE.',
      sourceName: 'Departamento Nacional de Estatísticas da China & OCDE',
    },
    'china-healthcare-spending': {
      title: 'Gastos com Saúde e Saúde Pública na China',
      subtitle: 'Orçamento de saúde nacional, cobertura médica universal e construção de hospitais',
      description: 'Gastos totais do sistema de saúde da China segundo a Comissão Nacional de Saúde e a OMS.',
      sourceName: 'Comissão Nacional de Saúde da China & OMS (WHO)',
    },
    'china-foreign-aid-belt-road-spending': {
      title: 'Gastos da China em Ajuda Externa e Cinturão e Rota',
      subtitle: 'Financiamento de desenvolvimento internacional e infraestruturas globais (Belt and Road)',
      description: 'Volume anual de cooperação e financiamentos externos executados pela agência chinesa CIDCA.',
      sourceName: 'AidData & CIDCA China',
    },
    'china-lobbying-united-states-spending': {
      title: 'Gastos de Lobby e Influência da China nos EUA',
      subtitle: 'Fundos registrados na Lei FARA junto ao Departamento de Justiça dos Estados Unidos',
      description: 'Gastos anuais declarados por entidades chinesas para relações públicas e lobby em Washington D.C.',
      sourceName: 'OpenSecrets.org & US DOJ FARA',
    },
    'france-aid-support-ukraine-spending': {
      title: 'Gastos e Ajuda Militar da França para a Ucrânia',
      subtitle: 'Canhões CAESAR, mísseis SCALP, blindados leves, ajuda humanitária e fundos europeus',
      description: 'Assistência anual financeira e militar da França para a Ucrânia segundo o Instituto Kiel e o Ministério das Forças Armadas francês.',
      sourceName: 'Kiel Institute & Ministério das Forças Armadas da França',
    },
    'paris-2024-olympic-games-spending': {
      title: 'Gastos e Custo Total das Olimpíadas de Paris 2024',
      subtitle: 'Orçamento de infraestrutura (SOLIDEO), comitê organizador (COJO), segurança e obras públicas',
      description: 'Despesas consolidadas dos Jogos Olímpicos e Paralímpicos de Paris 2024 auditadas pelo Tribunal de Contas da França.',
      sourceName: 'Cour des Comptes & COJO Paris 2024',
    },
    'france-covid-19-pandemic-spending': {
      title: 'Gastos da França com a Pandemia de COVID-19',
      subtitle: 'Financiamento do «Custe o que custar»: subsídios ao desemprego, socorro a empresas e saúde',
      description: 'Gastos públicos extraordinários mobilizados pela França durante a crise pandêmica segundo o Tribunal de Contas e o Ministério da Economia.',
      sourceName: 'Cour des Comptes & Ministério da Economia (Bercy)',
    },
    'france-cleaning-seine-river-spending': {
      title: 'Gastos para Limpar e Despoluir o Rio Sena (Plan Baignade)',
      subtitle: 'Megaobra de saneamento: reservatório de Austerlitz de 50.000 m³, modernização de estações e rede hídrica',
      description: 'Investimento público total da França para despoluir o Sena para os Jogos Olímpicos e a população parisiense.',
      sourceName: 'Prefeitura de Île-de-France & Cidade de Paris (Plan Baignade)',
    },
    'france-youth-budget-spending': {
      title: 'Orçamento do Estado Francês para a Juventude',
      subtitle: 'Financiamento do Contrato de Compromisso Jovem (CEJ), Pass Culture, bolsas CNOUS e incentivos ao emprego',
      description: 'Dotação orçamentária da França destinada a políticas públicas de juventude, cultura e apoio estudantil.',
      sourceName: 'Ministério da Educação Nacional da França & PLF',
    },
    'france-immigration-asylum-budget-spending': {
      title: 'Orçamento do Estado Francês para Imigração e Asilo',
      subtitle: 'Créditos da Missão Imigração e Asilo: auxílio ADA, centros de acolhimento CADA, OFII e ajuda médica (AME)',
      description: 'Gastos anuais do governo francês com acolhimento de solicitantes de refúgio, integração e assistência social.',
      sourceName: 'Ministério do Interior da França & Lei de Orçamento',
    },
    'france-household-christmas-spending': {
      title: 'Gastos das Famílias Francesas no Natal',
      subtitle: 'Orçamento familiar anual com presentes, ceia de Natal, decoração e viagens de fim de ano',
      description: 'Gasto médio das famílias francesas nas festas de fim de ano (~549 €/família) segundo o barômetro Cofidis/CSA e o INSEE.',
      sourceName: 'Barômetro de Natal Cofidis / CSA & INSEE',
    },
    'france-household-clothing-fashion-spending': {
      title: 'Gastos dos Franceses com Roupas e Moda',
      subtitle: 'Orçamento anual dos lares em vestuário feminino, masculino, infantil, calçados e acessórios',
      description: 'Consumo anual das famílias francesas em artigos de moda e calçados (~1.380 €/família/ano) segundo o INSEE e o IFM.',
      sourceName: 'INSEE & Institut Français de la Mode (IFM)',
    },
    'france-household-food-spending': {
      title: 'Gastos das Famílias Francesas com Alimentação e Supermercado',
      subtitle: 'Orçamento familiar em alimentos frescos, compras de supermercado, padarias e mercearia',
      description: 'Despesa alimentar doméstica das 29,5 milhões de famílias francesas (~395 €/mês por família) calculada pelo INSEE e FranceAgriMer.',
      sourceName: 'INSEE (Contas Nacionais) & FranceAgriMer',
    },
    'germany-buergergeld-spending': {
      title: 'Gastos da Alemanha com a Renda Cidadã (Bürgergeld)',
      subtitle: 'Orçamento federal para renda básica, auxílio-moradia (KdU) e centros de emprego (Jobcenter)',
      description: 'Gastos orçamentários do governo federal alemão com garantia de renda mínima e auxílio-moradia (BMAS).',
      sourceName: 'Ministério do Trabalho da Alemanha (BMAS) & Agência de Emprego (BA)',
    },
    'germany-military-defense-spending': {
      title: 'Gastos Militares e Orçamento de Defesa da Alemanha',
      subtitle: 'Orçamento ordinário de Defesa e fundo especial de 100 bilhões de euros para a Bundeswehr (~2% do PIB)',
      description: 'Gastos de defesa consolidados da República Federal da Alemanha segundo os padrões da OTAN e relatórios do SIPRI.',
      sourceName: 'SIPRI & Ministério Federal da Defesa da Alemanha (BMVg)',
    },
    'germany-foreign-development-aid-spending': {
      title: 'Gastos da Alemanha em Ajuda Oficial ao Desenvolvimento (APD / BMZ)',
      subtitle: 'Cooperação internacional e assistência humanitária global (2º maior doador mundial)',
      description: 'Assistência oficial ao desenvolvimento (APD) concedida pela Alemanha a países em desenvolvimento segundo a OCDE e o BMZ.',
      sourceName: 'Comitê de Ajuda ao Desenvolvimento da OCDE & BMZ Alemanha',
    },
    'germany-state-pension-spending': {
      title: 'Gastos da Alemanha com Aposentadorias Públicas',
      subtitle: 'Pagamentos totais de pensões a 21 milhões de aposentados e mais de 112 bilhões de euros em subsídio federal',
      description: 'Despesas anuais do sistema previdenciário público alemão gerenciado pela Deutsche Rentenversicherung.',
      sourceName: 'Deutsche Rentenversicherung Bund & BMAS',
    },
    'germany-education-spending': {
      title: 'Gastos Públicos da Alemanha com Educação e Universidades',
      subtitle: 'Orçamento consolidado do Governo Federal, 16 Estados (Länder) e municípios para escolas e universidades',
      description: 'Investimento público total em creches, escolas, ensino técnico e universidades segundo o Destatis.',
      sourceName: 'Departamento Federal de Estatística da Alemanha (Destatis)',
    },
    'germany-refugees-asylum-spending': {
      title: 'Gastos da Alemanha com Refugiados e Solicitantes de Refúgio',
      subtitle: 'Despesas consolidadas do Governo Federal e Estados: acolhimento, cursos de integração e ajuda na origem',
      description: 'Orçamento consolidado da Alemanha destinado ao acolhimento, habitação e cursos de língua para refugiados segundo o BMF.',
      sourceName: 'Ministério Federal das Finanças da Alemanha (BMF) & BAMF',
    },
    'germany-total-social-budget-spending': {
      title: 'Orçamento Social Total e Benefícios da Alemanha (Sozialbudget)',
      subtitle: 'Consolidado de todos os regimes: saúde, aposentadorias, cuidados continuados e desemprego (~30,5% do PIB)',
      description: 'Gastos totais do sistema de seguridade e proteção social na Alemanha segundo o Sozialbudget do BMAS.',
      sourceName: 'Ministério do Trabalho e Assuntos Sociais da Alemanha (BMAS)',
    },
    'germany-household-vacation-travel-spending': {
      title: 'Gastos dos Alemães com Férias e Viagens',
      subtitle: 'Orçamento anual em ~65 milhões de viagens turísticas, pacotes, voos e hotéis (~1.200 € por pessoa/viagem)',
      description: 'Gastos consolidados em turismo de lazer dos viajantes alemães segundo a Associação Alemã de Viagens (DRV) e FUR.',
      sourceName: 'Associação Alemã de Viagens (DRV) & FUR Reiseanalyse',
    },
    'germany-household-food-spending': {
      title: 'Gastos dos Lares Alemães com Alimentação e Supermercado',
      subtitle: 'Consumo mensal e anual de 41 milhões de lares em alimentos e bebidas (~415 €/mês por família)',
      description: 'Despesa total de consumo alimentar dos lares na Alemanha segundo o Departamento Federal de Estatística (Destatis).',
      sourceName: 'Departamento Federal de Estatística da Alemanha (Destatis)',
    },
    'germany-silvester-fireworks-spending': {
      title: 'Gastos dos Alemães com Fogos de Artifício no Ano Novo (Silvester)',
      subtitle: 'Faturamento do setor de pirotecnia nos 3 dias autorizados de vendas antes do Réveillon',
      description: 'Receita de vendas de fogos e foguetes de Réveillon na Alemanha segundo a Associação da Indústria Pirotécnica (VPI).',
      sourceName: 'Associação da Indústria Pirotécnica da Alemanha (VPI)',
    },
    'germany-household-christmas-gifts-spending': {
      title: 'Gastos dos Alemães com Presentes de Natal',
      subtitle: 'Orçamento com presentes para familiares e amigos (~500 € por pessoa)',
      description: 'Gastos totais em brinquedos, eletrônicos, livros e presentes de Natal na Alemanha segundo a HDE e GfK.',
      sourceName: 'Federação Alemã do Varejo (HDE) & GfK',
    },
    'germany-household-rent-housing-spending': {
      title: 'Gastos dos Alemães com Aluguel e Moradia',
      subtitle: 'Aluguel básico, aquecimento e condomínio de 41 milhões de lares (~28% do orçamento familiar)',
      description: 'Custos totais com moradia e aluguel na Alemanha calculados pelo censo habitacional do Destatis.',
      sourceName: 'Departamento Federal de Estatística (Destatis - Moradia)',
    },
    'germany-household-clothing-fashion-spending': {
      title: 'Gastos dos Alemães com Roupas, Calçados e Moda',
      subtitle: 'Orçamento anual dos lares em vestuário e sapatos (~1.600 €/família/ano)',
      description: 'Consumo de artigos têxteis e calçados na Alemanha segundo a federação BTE e o Destatis.',
      sourceName: 'Federação do Varejo Têxtil (BTE) & Destatis',
    },
    'germany-engagement-ring-spending': {
      title: 'Gastos dos Alemães com Anéis de Noivado e Diamantes',
      subtitle: 'Mercado nacional de anéis de pedido de casamento (~380.000 noivados, Ø ~680 € por anel)',
      description: 'Gastos anuais em joalheria de noivado na Alemanha segundo a Associação Federal de Joalheiros (BVJ).',
      sourceName: 'Associação Federal de Joalheiros da Alemanha (BVJ)',
    },
    'germany-car-vehicle-purchase-spending': {
      title: 'Gastos dos Alemães na Compra de Carros (Novos e Usados)',
      subtitle: 'Volume total de transações de automóveis (~2,8M carros novos + ~6,0M carros usados)',
      description: 'Gastos de particulares e empresas na aquisição de automóveis na Alemanha segundo o DAT Report e o KBA.',
      sourceName: 'Deutsche Automobil Treuhand (DAT) & KBA',
    },
    'germany-halloween-spending': {
      title: 'Gastos dos Alemães no Halloween',
      subtitle: 'Faturamento do comércio em fantasias, maquiagem, doces e decorações temáticas',
      description: 'Gastos dos consumidores alemães na comemoração do Halloween segundo a Federação Alemã do Varejo (HDE).',
      sourceName: 'Federação Alemã do Varejo (HDE - Pesquisa de Halloween)',
    },
    'brazil-bolsa-familia-spending': {
      title: 'Gastos do Brasil com o Programa Bolsa Família',
      subtitle: 'Transferência de renda direta para mais de 20,8 milhões de famílias em situação de vulnerabilidade',
      description:
        'Orçamento anual executado pelo Governo Federal do Brasil para o pagamento do benefício mensal do Bolsa Família (média de R$ 680 por família) segundo o Ministério do Desenvolvimento Social (MDS) e o Portal da Transparência.',
      sourceName: 'Ministério do Desenvolvimento e Assistência Social (MDS) & Portal da Transparência',
    },
    'brazil-sus-public-healthcare-spending': {
      title: 'Gastos do Brasil com o SUS (Sistema Único de Saúde)',
      subtitle: 'Orçamento federal da Saúde: rede hospitalar pública, vacinação nacional, atenção primária e Samu',
      description:
        'Recursos federais consolidados destinados ao financiamento do SUS (hospitais públicos, Farmácia Popular, vacinas, cirurgias de alta complexidade e atendimento a mais de 190 milhões de brasileiros) segundo o Ministério da Saúde e o Siops.',
      sourceName: 'Ministério da Saúde do Brasil & Sistema Siops (Tesouro Nacional)',
    },
    'brazil-judiciary-system-spending': {
      title: 'Gastos do Brasil com o Poder Judiciário',
      subtitle: 'Custo total dos tribunais superiores (STF, STJ, TST, TSE), Justiça Federal e Tribunais de Justiça Estaduais (~1,3% do PIB)',
      description:
        'Despesa total anual do Poder Judiciário brasileiro com magistrados, servidores, estrutura física e tecnologia em toda a Justiça Estadual, Federal, do Trabalho e Eleitoral segundo o relatório oficial «Justiça em Números» do CNJ.',
      sourceName: 'Conselho Nacional de Justiça (CNJ - Relatório Justiça em Números)',
    },
    'brazil-inss-pension-spending': {
      title: 'Gastos do Brasil com Aposentadorias e Previdência Social',
      subtitle: 'Benefícios previdenciários pagos pelo INSS (RGPS) e servidores públicos da União (RPPS)',
      description:
        'Total de benefícios previdenciários de aposentadoria por idade, tempo de contribuição, invalidez e pensões pagas pelo INSS e regime dos servidores públicos federais segundo o Ministério da Previdência Social e o Tesouro Nacional.',
      sourceName: 'Ministério da Previdência Social & Secretaria do Tesouro Nacional',
    },
    'brazil-politicians-congress-spending': {
      title: 'Gastos do Brasil com Políticos e Congresso Nacional',
      subtitle: 'Custo da Câmara dos Deputados, Senado Federal, Fundo Eleitoral, cotas parlamentares e gabinetes',
      description:
        'Custo anual consolidado do sistema político brasileiro somando o orçamento do Congresso Nacional (Câmara e Senado), fundo partidário, fundo eleitoral de campanha (Fundão), assembleias estaduais e cotas parlamentares (CEAP).',
      sourceName: 'Congresso Nacional do Brasil, Portal da Transparência & TSE',
    },
    'brazil-former-presidents-benefits-spending': {
      title: 'Gastos do Brasil com Ex-Presidentes da República',
      subtitle: 'Segurança pessoal, 6 servidores de apoio de confiança, 2 veículos oficiais com combustível e diárias de viagens (Lei 7.474/1986)',
      description:
        'Gastos custeados pela Presidência da República para garantir os direitos previstos em lei a todos os ex-presidentes da República do Brasil (servidores comissionados, assessores, seguranças do GSI, veículos e viagens institucionais).',
      sourceName: 'Presidência da República (Secretaria-Geral) & Portal da Transparência',
    },
    'brazil-tax-exemptions-subsidies-spending': {
      title: 'Gastos Tributários do Brasil com Isenções Fiscais e Subsídios',
      subtitle: 'Renúncias de receitas federais em desonerações, Simples Nacional, Zona Franca de Manaus e incentivos setoriais (~5% do PIB)',
      description:
        'Volume total de impostos e tributos não arrecadados pelo Governo Federal em razão de isenções fiscais, regimes tributários favorecidos, deduções e subsídios concedidos a setores econômicos segundo a Receita Federal.',
      sourceName: 'Receita Federal do Brasil (Demonstrativo dos Gastos Tributários - DGT)',
    },
    'brazil-military-daughters-pension-spending': {
      title: 'Gastos com Pensões para Filhas de Militares no Brasil',
      subtitle: 'Pensões vitalícias pagas a mais de 100 mil herdeiras e filhas solteiras de militares das Forças Armadas',
      description:
        'Gasto anual com pensões militares vitalícias pagas pelo Tesouro Nacional e Ministério da Defesa às filhas de membros falecidos do Exército, Marinha e Aeronáutica sob a legislação anterior à MP 2.215-10/2001 auditado pelo TCU.',
      sourceName: 'Tribunal de Contas da União (TCU) & Ministério da Defesa do Brasil',
    },
    'brazil-online-bets-gambling-spending': {
      title: 'Gastos dos Brasileiros com Bets e Apostas Online',
      subtitle: 'Volume total transferido para plataformas de apostas esportivas e cassinos virtuais via PIX (~R$ 20 bi/mês)',
      description:
        'Volume total de dinheiro transferido por apostadores brasileiros via PIX para plataformas e sites de apostas de quota fixa (bets) e cassinos online segundo a Nota Técnica do Banco Central do Brasil (BCB) e Anbima.',
      sourceName: 'Banco Central do Brasil (BCB - Nota Técnica Apostas Online) & Anbima',
    },
    'brazil-tourists-spending-united-states': {
      title: 'Gastos de Turistas Brasileiros nos Estados Unidos',
      subtitle: 'Despesas com compras, hotéis, parques temáticos e passagens aéreas em Miami, Orlando e Nova York',
      description:
        'Gasto total anual dos mais de 1,6 milhão de turistas brasileiros em viagens internacionais aos Estados Unidos registrado pelo US NTTO e Banco Central do Brasil.',
      sourceName: 'US National Travel and Tourism Office (NTTO) & Banco Central do Brasil (BCB)',
    },
    'brazil-household-cost-of-living-spending': {
      title: 'Consumo Global e Custo de Vida das Famílias Brasileiras',
      subtitle: 'Despesas correntes totais dos 75 milhões de lares com habitação, alimentação, transporte e saúde (~R$ 6.500/mês/família)',
      description:
        'Volume consolidado de despesas de consumo final das famílias no Brasil em habitação, alimentação diária, transporte e saúde segundo a Pesquisa de Orçamentos Familiares (POF) do IBGE.',
      sourceName: 'Instituto Brasileiro de Geografia e Estatística (IBGE - POF)',
    },
    'spain-national-public-debt': {
      title: 'Dívida Pública Total da Espanha',
      subtitle: 'Saldo da dívida soberana acumulada sob o Procedimento de Déficit Excessivo (PDE) (~107% do PIB espanhol)',
      description: 'Dívida bruta emitida pelas administrações públicas da Espanha segundo o Banco de Espanha e o Eurostat.',
      sourceName: 'Banco de Espanha & Eurostat',
    },
    'united-states-national-public-debt': {
      title: 'Dívida Pública Nacional dos Estados Unidos (US Debt Clock)',
      subtitle: 'Volume total da dívida federal bruta emitida em títulos do Tesouro norte-americano',
      description: 'Dívida soberana acumulada pelo governo federal dos Estados Unidos registrada pelo Departamento do Tesouro dos EUA.',
      sourceName: 'Departamento do Tesouro dos EUA (Fiscal Service)',
    },
    'fc-barcelona-total-debt': {
      title: 'Dívida Total e Financiamento do FC Barcelona',
      subtitle: 'Passivo bancário ordinário e emissão de títulos do projeto Espai Barça (Goldman Sachs & JP Morgan)',
      description: 'Passivo financeiro consolidado do FC Barcelona incluindo a reconstrução do Spotify Camp Nou.',
      sourceName: 'FC Barcelona Relatório Econômico Anual & LaLiga',
    },
    'real-madrid-total-debt-financing': {
      title: 'Dívida e Financiamento do Real Madrid CF (Estádio Bernabéu)',
      subtitle: 'Empréstimos bancários de longo prazo para a remodelação do Santiago Bernabéu (dívida operacional sanada)',
      description: 'Financiamento da transformação do estádio Bernabéu amortizado com prestações fixas e receitas recordes.',
      sourceName: 'Real Madrid CF Contas Anuais Oficiais & LaLiga',
    },
    'colombia-external-foreign-debt': {
      title: 'Dívida Externa Total da Colômbia',
      subtitle: 'Saldo consolidado da dívida externa pública e privada (~50% do PIB colombiano)',
      description: 'Obrigações financeiras externas da Colômbia com credores internacionais registradas pelo Banco da República.',
      sourceName: 'Banco da República da Colômbia & Ministério da Fazenda',
    },
    'united-kingdom-national-public-debt': {
      title: 'Dívida Pública Nacional do Reino Unido (UK Debt Clock)',
      subtitle: 'Dívida líquida do setor público britânico emitida em títulos Gilts (~99,5% do PIB)',
      description: 'Dívida pública acumulada do Reino Unido registrada pelo Office for National Statistics (ONS) e HM Treasury.',
      sourceName: 'Office for National Statistics (ONS) & HM Treasury',
    },
    'china-national-government-debt': {
      title: 'Dívida Pública Soberana da China',
      subtitle: 'Títulos do governo central e dívida de veículos de financiamento local (LGFVs) (~83% do PIB)',
      description: 'Dívida soberana consolidada da República Popular da China calculada pelo FMI e Ministério das Finanças.',
      sourceName: 'Ministério das Finanças da China & FMI',
    },
    'canada-national-public-debt': {
      title: 'Dívida Pública Nacional do Canadá',
      subtitle: 'Passivo consolidado do governo federal e das 10 províncias canadenses (~71% do PIB)',
      description: 'Dívida pública líquida acumulada do Canadá registrada pelo Departamento de Finanças e Statistics Canada.',
      sourceName: 'Department of Finance Canada & Statistics Canada',
    },
    'united-states-debt-relief-programs': {
      title: 'Programas de Alívio e Quitação de Dívidas nos EUA (Debt Relief)',
      subtitle: 'Volume anual de dívidas de cartões de crédito e empréstimos renegociados',
      description: 'Volume financeiro de dívidas de consumidores americanos em programas regulados de alívio e liquidação (CFPB).',
      sourceName: 'Consumer Financial Protection Bureau (CFPB) & AFCC',
    },
    'japan-national-public-debt': {
      title: 'Dívida Pública Nacional do Japão (JGB)',
      subtitle: 'Passivo soberano total em títulos do governo japonês (~260% do PIB japonês)',
      description: 'Dívida soberana emitida pelo Governo do Japão acompanhada pelo Ministério das Finanças (MOF) e Banco do Japão.',
      sourceName: 'Ministério das Finanças do Japão (MOF) & Banco do Japão',
    },
    'germany-national-public-debt': {
      title: 'Dívida Pública Total da Alemanha (Staatsverschuldung)',
      subtitle: 'Dívida consolidada da Federação (Bund), 16 Estados e municípios (~64% do PIB)',
      description: 'Dívida bruta pública da Alemanha calculada pelo Destatis e Deutsche Bundesbank.',
      sourceName: 'Departamento Federal de Estatística (Destatis) & Bundesbank',
    },
    'france-national-public-debt': {
      title: 'Dívida Pública Total da França (Dette Publique)',
      subtitle: 'Dívida de Maastricht do Estado central, seguridade social e governos locais (~111% do PIB)',
      description: 'Dívida soberana da França auditada pelo INSEE e Banco da França.',
      sourceName: 'INSEE & Banco da França (Dívida de Maastricht)',
    },
    'italy-national-public-debt': {
      title: 'Dívida Pública Nacional da Itália (Debito Pubblico)',
      subtitle: 'Passivo soberano bruto em títulos do governo italiano (BTP e BOT) (~138% do PIB)',
      description: 'Dívida bruta das administrações públicas da Itália registrada pela Banca d\'Italia e Istat.',
      sourceName: 'Banca d\'Italia & Istat',
    },
    'brazil-national-public-debt': {
      title: 'Dívida Pública Federal Total do Brasil (DPF)',
      subtitle: 'Estoque da dívida pública federal interna e externa em títulos do Tesouro (~78% do PIB)',
      description: 'Estoque total da dívida pública federal emitido pela Secretaria do Tesouro Nacional e Banco Central.',
      sourceName: 'Secretaria do Tesouro Nacional (STN) & Banco Central do Brasil',
    },
    'india-national-public-debt': {
      title: 'Dívida Pública Geral da Índia',
      subtitle: 'Dívida combinada do governo central e dos 28 Estados da Índia (~82% do PIB indiano)',
      description: 'Dívida soberana da Índia em títulos públicos e empréstimos registrada pelo RBI.',
      sourceName: 'Reserve Bank of India (RBI) & Ministério das Finanças',
    },
    'mexico-national-public-debt': {
      title: 'Dívida Pública Total do México (SHRFSP)',
      subtitle: 'Saldo Histórico dos Requerimentos Financeiros do Setor Público (~49% do PIB mexicano)',
      description: 'Dívida pública ampla do México em Cetes, Bonos M e dívida externa auditada pela SHCP.',
      sourceName: 'Secretaría de Hacienda y Crédito Público (SHCP) & Banxico',
    },
    'argentina-national-public-debt': {
      title: 'Dívida Pública Bruta da Argentina',
      subtitle: 'Estoque total de dívida da Administração Central em pesos e dólares (~88% do PIB argentino)',
      description: 'Dívida soberana da Argentina em títulos e empréstimos do FMI registrada pela Secretaria de Finanças.',
      sourceName: 'Secretaria de Finanças (Ministério da Economia da Argentina)',
    },
    'australia-national-public-debt': {
      title: 'Dívida Pública Nacional da Austrália (Commonwealth Debt)',
      subtitle: 'Passivo federal bruto em títulos soberanos australianos AGS (~54% do PIB)',
      description: 'Títulos públicos emitidos pela Australian Office of Financial Management (AOFM) e RBA.',
      sourceName: 'Australian Office of Financial Management (AOFM) & RBA',
    },
    'south-korea-national-public-debt': {
      title: 'Dívida Pública Nacional da Coreia do Sul (D1)',
      subtitle: 'Dívida soberana em títulos do tesouro coreano (KTBs) (~51% do PIB sul-coreano)',
      description: 'Passivo financeiro soberano da Coreia do Sul registrado pelo Ministério de Economia e Finanças (MOEF).',
      sourceName: 'Ministério de Economia e Finanças da Coreia (MOEF) & Banco da Coreia',
    },
    'saudi-arabia-national-public-debt': {
      title: 'Dívida Pública da Arábia Saudita',
      subtitle: 'Saldo de dívida soberana em Sukuks islâmicos e títulos internacionais (~26% do PIB)',
      description: 'Dívida soberana da Arábia Saudita gerida pelo Centro Nacional de Gestão da Dívida (NDMC).',
      sourceName: 'National Debt Management Center (NDMC Arábia Saudita)',
    },
    'switzerland-national-public-debt': {
      title: 'Dívida Pública da Suíça (Confederação e Cantões)',
      subtitle: 'Dívida soberana governada pelo mecanismo constitucional do Freio da Dívida (~38% do PIB)',
      description: 'Dívida consolidada da Suíça segundo a Administração Federal de Finanças (AFF) e SNB.',
      sourceName: 'Administração Federal de Finanças da Suíça & SNB',
    },
    'netherlands-national-public-debt': {
      title: 'Dívida Pública dos Países Baixos (Holanda)',
      subtitle: 'Dívida soberana holandesa em títulos DSL (~44% do PIB dos Países Baixos)',
      description: 'Dívida bruta pública dos Países Baixos emitida pela DSTA segundo o CBS.',
      sourceName: 'Centraal Bureau voor de Statistiek (CBS) & DSTA',
    },
    'russia-national-public-debt': {
      title: 'Dívida Pública Soberana da Rússia',
      subtitle: 'Dívida interna e externa em títulos federais OFZ (~15% do PIB russo)',
      description: 'Dívida soberana da Federação Russa registrada pelo Ministério das Finanças (Minfin).',
      sourceName: 'Ministério das Finanças da Rússia (Minfin) & Banco da Rússia',
    },
    'turkey-national-public-debt': {
      title: 'Dívida Pública do Governo Central da Turquia',
      subtitle: 'Estoque consolidado de dívida em liras e moeda estrangeira (~28% do PIB turco)',
      description: 'Dívida pública bruta da Turquia divulgada pelo Ministério do Tesouro e Finanças.',
      sourceName: 'Ministério do Tesouro e Finanças da República da Turquia',
    },
    'south-africa-national-public-debt': {
      title: 'Dívida Pública Nacional da África do Sul',
      subtitle: 'Dívida soberana bruta em títulos domésticos e internacionais (~74% do PIB sul-africano)',
      description: 'Dívida pública governamental registrada pelo National Treasury da África do Sul e SARB.',
      sourceName: 'National Treasury da África do Sul & SARB',
    },
    'global-social-media-advertising-spend': {
      title: 'Gastos Globais em Publicidade nas Redes Sociais',
      subtitle: 'Orçamento total investido por marcas em anúncios no Instagram, TikTok, Facebook, YouTube e X (~$7.925/s)',
      description: 'Investimento publicitário digital global direcionado a redes sociais segundo a eMarketer e Zenith.',
      sourceName: 'eMarketer (Insider Intelligence) & Zenith Optimedia',
    },
    'tiktok-advertising-and-in-app-spending': {
      title: 'Gastos Globais no TikTok (Anúncios, Moedas e TikTok Shop)',
      subtitle: 'Faturamento anual do TikTok com anúncios de marcas, compra de moedas virtuais e compras no app (~$1.062/s)',
      description: 'Gasto total gerado no ecossistema do TikTok (ByteDance) acompanhado pela Sensor Tower e eMarketer.',
      sourceName: 'ByteDance Financial Reports, Sensor Tower & eMarketer',
    },
    'instagram-advertising-and-creator-spending': {
      title: 'Gastos com Publicidade e Comércio no Instagram',
      subtitle: 'Receita com anúncios em Reels, Feed, Stories e monetização de criadores (~$2.251/s, >50% da receita da Meta)',
      description: 'Investimento publicitário global de anunciantes no Instagram (Meta Platforms) auditado na SEC.',
      sourceName: 'Meta Platforms (SEC Form 10-K) & eMarketer',
    },
    'global-influencer-marketing-creator-spending': {
      title: 'Gastos Globais em Marketing de Influenciadores e Criadores',
      subtitle: 'Orçamento de marcas em patrocínios, parcerias pagas e campanhas de UGC nas redes sociais',
      description: 'Gastos diretos de marcas em contratos com criadores de conteúdo no Instagram, TikTok e YouTube (Goldman Sachs).',
      sourceName: 'Goldman Sachs (Creator Economy Report) & Influencer Marketing Hub',
    },
    'spain-gasoline-fuel-consumption-spending': {
      title: 'Gastos com Gasolina e Combustíveis na Espanha',
      subtitle: 'Consumo anual de gasolina e diesel automotivo nos mais de 12.000 postos de combustível na Espanha',
      description: 'Gastos com combustíveis na Espanha segundo a CORES e o Ministério da Transição Ecológica (MITECO).',
      sourceName: 'CORES & Ministério da Transição Ecológica (MITECO)',
    },
    'spain-total-public-expenditure': {
      title: 'Gastos Públicos Totais do Reino da Espanha',
      subtitle: 'Despesa pública consolidada do Estado, 17 Comunidades Autônomas e Seguridade Social (~46,5% do PIB)',
      description: 'Total de gastos públicos da Espanha segundo a IGAE e Eurostat.',
      sourceName: 'IGAE & Eurostat',
    },
    'spain-healthcare-sanidad-spending': {
      title: 'Gastos com Saúde na Espanha (Pública e Privada)',
      subtitle: 'Orçamento do Sistema Nacional de Saúde (SNS) e gastos privados com saúde (~7,5% do PIB espanhol)',
      description: 'Despesa total com saúde na Espanha segundo a Estatística de Gasto Sanitário Público (EGSP) e o INE.',
      sourceName: 'Ministério da Saúde da Espanha (EGSP) & INE',
    },
    'spain-defense-military-spending-nato': {
      title: 'Gastos com Defesa e Orçamento Militar da Espanha (OTAN)',
      subtitle: 'Orçamento militar consolidado do Ministério da Defesa sob critérios da OTAN (~1,30% do PIB)',
      description: 'Gastos militares da Espanha segundo relatórios oficiais da OTAN e SIPRI.',
      sourceName: 'OTAN (NATO Defence Expenditures) & SIPRI',
    },
    'spain-education-spending': {
      title: 'Gastos com Educação na Espanha (Pública e Privada)',
      subtitle: 'Orçamento educacional das 17 regiões para escolas, colégios e universidades (~4,4% do PIB)',
      description: 'Gastos consolidados do sistema educacional espanhol segundo o Ministério da Educação e o INE.',
      sourceName: 'Ministério da Educação da Espanha & INE',
    },
    'spain-irpf-income-tax-revenue': {
      title: 'Arrecadação do Imposto de Renda na Espanha (IRPF)',
      subtitle: 'Total arrecadado pela Agência Tributária (AEAT) em retenções e declarações de renda dos espanhóis',
      description: 'Arrecadação do IRPF de mais de 22 milhões de declarantes na Espanha segundo a AEAT.',
      sourceName: 'Agência Tributária da Espanha (AEAT)',
    },
    'real-madrid-transfers-signings-spending': {
      title: 'Gastos em Contratações e Transferências do Real Madrid CF',
      subtitle: 'Investimento anual médio em compra de passes de jogadores para a equipe principal',
      description: 'Investimento anual em direitos federativos e contratações do Real Madrid segundo balanço e Transfermarkt.',
      sourceName: 'Real Madrid CF Relatório Oficial & Transfermarkt',
    },
    'spain-mortgage-closing-costs-spending': {
      title: 'Gastos com Hipoteca e Formalização na Espanha',
      subtitle: 'Custos anuais de avaliação, cartório, registro e assessoria de mais de 450.000 novas hipotecas assinadas por ano',
      description: 'Custos de formalização de crédito imobiliário na Espanha segundo o Banco da Espanha e o INE.',
      sourceName: 'Banco de España (BdE) & INE',
    },
    'spain-home-buying-transaction-costs-spending': {
      title: 'Custos e Impostos na Compra de Imóveis na Espanha',
      subtitle: 'Impostos (ITP/IVA, AJD), cartório e registro de imóveis em mais de 600.000 transações anuais (~10-12%)',
      description: 'Gastos tributários e cartorários na compra de imóveis na Espanha segundo o Notariado e Registradores.',
      sourceName: 'Consejo General del Notariado & Registradores de Espanha',
    },
    'spain-tax-deductible-expenses-irpf': {
      title: 'Despesas Dedutíveis e Isenções do IRPF na Espanha',
      subtitle: 'Total de deduções fiscais de autônomos, previdência privada, moradia habitual e deduções regionais',
      description: 'Despesas dedutíveis da atividade econômica e benefícios fiscais do IRPF segundo a Agência Tributária (AEAT).',
      sourceName: 'Agência Tributária da Espanha (AEAT)',
    },
    'vinted-second-hand-fashion-spending': {
      title: 'Gastos e Vendas na Vinted (Moda e Segunda Mão)',
      subtitle: 'Volume bruto de transações (GMV) de roupas usadas, calçados e acessórios entre usuários',
      description: 'Volume anual de negócios de moda circular processado pela Vinted segundo relatórios financeiros oficiais.',
      sourceName: 'Vinted Financial Reports & Cross-Border Commerce Europe',
    },
    'spain-household-cost-of-living-spending': {
      title: 'Custo de Vida e Despesas dos Lares na Espanha',
      subtitle: 'Gastos anuais das 19,2 milhões de famílias espanholas em moradia, energia, alimentação e lazer (~32.600 €/família)',
      description: 'Gasto total de consumo e custo de vida das famílias residentes na Espanha segundo a Pesquisa de Orçamentos Familiares do INE.',
      sourceName: 'Instituto Nacional de Estatística da Espanha (INE - EPF)',
    },
    'spain-total-wages-salaries-spending': {
      title: 'Massa Salarial Total e Salários na Espanha',
      subtitle: 'Remuneração bruta anual dos 21,3 milhões de trabalhadores na Espanha (Salário médio ~26.948 €/ano)',
      description: 'Remuneração global de empregados na Espanha registrada nas Contas Nacionais Trimestrais do INE.',
      sourceName: 'INE (Contabilidade Nacional & Estrutura Salarial)',
    },
    'spain-minimum-wage-smi-spending': {
      title: 'Massa Salarial do Salário Mínimo (SMI) na Espanha',
      subtitle: 'Rendimento anual bruto dos 2,5 milhões de trabalhadores com salário mínimo (1.134 €/mês em 14 parcelas = 15.876 €/ano)',
      description: 'Massa salarial total dos trabalhadores remunerados pelo Salário Mínimo Interprofissional segundo o Ministério do Trabalho.',
      sourceName: 'Ministério do Trabalho e Economia Social & INE',
    },
    'spain-household-rent-spending': {
      title: 'Gastos Totais com Aluguel Residencial na Espanha',
      subtitle: 'Despesa anual com aluguel de mais de 3,4 milhões de famílias inquilinas em moradia habitual',
      description: 'Volume total pago pelas famílias em aluguel residencial na Espanha segundo o Banco da Espanha e o Ministério da Habitação.',
      sourceName: 'Banco da Espanha & Ministério da Habitação (MIVAU)',
    },
    'us-federal-discretionary-spending': {
      title: 'Gastos Discricionários Federais dos Estados Unidos',
      subtitle: 'Orçamento anual aprovado pelo Congresso dos EUA para Defesa, Educação, Transportes e Ciência (~$55.490/s)',
      description: 'Orçamento federal discricionário dos EUA aprovado pelo Congresso segundo o Congressional Budget Office (CBO).',
      sourceName: 'Congressional Budget Office (CBO) & US Treasury',
    },
    'us-federal-mandatory-spending-entitlements': {
      title: 'Gastos Obrigatórios Federais dos EUA (Social Security & Medicare)',
      subtitle: 'Desembolsos legais obrigatórios com Seguridade Social, Medicare, Medicaid e juros da dívida (~$131.595/s)',
      description: 'Gastos federais obrigatórios dos EUA custeados por impostos sobre a folha de pagamento segundo o CBO.',
      sourceName: 'Congressional Budget Office (CBO) & US Treasury',
    },
    'united-states-credit-card-consumer-spending': {
      title: 'Gastos Totais com Cartão de Crédito nos Estados Unidos',
      subtitle: 'Volume anual de compras e transações com cartão de crédito de consumidores americanos (Visa, Mastercard, Amex)',
      description: 'Volume bruto de compras com cartão de crédito nos EUA acompanhado pelo Federal Reserve Board (G.19).',
      sourceName: 'Federal Reserve Board & Nilson Report',
    },
    'global-cosmetic-surgery-spending': {
      title: 'Gastos em Cirurgia Estética',
      subtitle: 'O custo total das cirurgias estéticas no mundo é estimado em 2.660 milhões de euros por ano',
      description:
        'O custo total das cirurgias estéticas no mundo é estimado em 2.660 milhões de euros. Esse gasto inclui uma ampla gama de procedimentos, desde o aumento de mama e a lipoaspiração até injeções faciais de toxina botulínica e ácido hialurônico. A crescente demanda por esses tratamentos deve-se à influência das redes sociais e ao culto da imagem.',
      sourceName: 'MediHair — Estatísticas de cirurgia plástica e estética 2025',
    },
    'economic-burden-of-tobacco': {
      title: 'O fardo económico do tabaco',
      subtitle: 'O custo económico e médico do tabaco é de 1,8 biliões de dólares anuais no mundo',
      description:
        'O fardo económico do tabaco é devastador, com um custo global de 1,8 biliões de dólares por ano. Este custo inclui despesas médicas, doenças relacionadas e efeitos do fumo passivo, embora, ao somar a perda de produtividade, o custo duplique. A indústria do tabaco, que gera receitas de aproximadamente 92 mil milhões de dólares, enfrenta um grave atraso na aplicação de impostos sobre o tabaco, o que limita a sua capacidade de prevenir e reduzir o consumo.',
      sourceName: 'Organização Mundial da Saúde (OMS) — Relatório de Tendências do Tabaco',
    },
    'spain-public-healthcare-spending': {
      title: 'Despesa Pública com Saúde na Espanha',
      subtitle: 'A despesa pública com saúde na Espanha atinge 101.739 milhões de euros anuais (~2.084€ por habitante)',
      description:
        'A despesa pública com saúde na Espanha atingiu 101.739 milhões de euros, representando 6,4% do PIB e uma despesa média de 2.084 euros por habitante, segundo a Estatística de Despesa Pública com Saúde do Ministério da Saúde.',
      sourceName: 'Ministério da Saúde — Estatística de Despesa Pública com Saúde',
    },
    'spain-subsidies-public-grants-spending': {
      title: 'Subsídios e Ajudas Públicas na Espanha',
      subtitle: 'A Espanha destina cerca de 41.490 milhões de euros anuais em subsídios e ajudas públicas diretas',
      description:
        'A Espanha destina cerca de 41.490 milhões de euros anuais em subsídios e ajudas públicas diretas distribuídas entre o governo central, as comunidades autónomas e as entidades locais. Este valor engloba apoios a famílias, setores produtivos, empresas e entidades sociais, excluindo grandes parcelas de proteção social como pensões contributivas ou desemprego.',
      sourceName: 'Libre Mercado — Gastos com subsídios e apoios na Espanha',
    },
    'global-alcohol-spending': {
      title: 'Gastos com Bebidas Alcoólicas',
      subtitle: 'Os gastos anuais com bebidas alcoólicas situam-se em torno dos 1,94 biliões de dólares no mundo',
      description:
        'Os gastos de consumo em bebidas alcoólicas atingem entre 1,89 biliões e 2 biliões de dólares por ano no mundo. Este valor engloba tanto as vendas no retalho em lojas e supermercados como o consumo em bares e restaurantes globalmente, de acordo com o relatório Statista Market Forecast.',
      sourceName: 'Statista Market Forecast — Bebidas Alcoólicas no Mundo',
    },
    'spain-individual-monthly-food-cost': {
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
    },
    'global-counterfeit-goods-spending': {
      title: 'Gastos com Produtos Falsificados',
      subtitle: 'O gasto global com produtos falsificados supera os 412.000 milhões de euros anuais',
      description:
        'O comércio global de contrafação é estimado em mais de 412.000 milhões de euros, o que representa 2,5% do comércio mundial total. Na União Europeia, as importações de produtos contrafeitos atingiram 119.000 milhões de euros.',
      sourceName: 'Merca2.0 — A economia global das falsificações',
    },
    'global-wildlife-trafficking-spending': {
      title: 'Gastos com Tráfico Ilegal de Animais',
      subtitle: 'O tráfico ilegal de animais selvagens e exóticos movimenta mais de 20 mil milhões de dólares anuais',
      description:
        'O tráfico ilegal de animais selvagens e espécies exóticas gera transações anuais de mais de 20 mil milhões de dólares a nível global, constituindo um dos negócios criminosos mais lucrativos do mundo, a par do tráfico de droga e armas, segundo o relatório da Euribor.',
      sourceName: 'Euribor — O negócio negro do tráfico de animais exóticos',
    },
    'global-organ-trafficking-spending': {
      title: 'Gastos com Tráfico Ilegal de Órgãos',
      subtitle: 'O tráfico ilegal de órgãos gera entre 600 e 1.200 milhões de dólares anuais a nível mundial',
      description:
        'O tráfico ilegal de órgãos gera lucros e transações anuais estimados entre 600 milhões e 1,2 mil milhões de dólares a nível global. Esta atividade clandestina alimenta-se da exploração de dadores em situação de pobreza extrema e do chamado turismo de transplantes, segundo a Wikipédia.',
      sourceName: 'Wikipédia — Tráfico de órgãos',
    },
    'global-art-trafficking-spending': {
      title: 'Gastos com Tráfico Ilegal de Arte',
      subtitle: 'O tráfico ilícito de bens culturais e obras de arte movimenta quase 10 mil milhões de dólares anuais',
      description:
        'O comércio ilícito de obras de arte, antiguidades e património arqueológico representa uma indústria criminosa de quase 10 mil milhões de dólares anuais. Financiando frequentemente redes terroristas e o crime organizado transnacional, constitui uma das maiores ameaças contra la identidade dos povos, segundo a UNESCO e a ONU.',
      sourceName: 'UNESCO & ONU — Tráfico ilícito de bens culturais',
    },
    'lamine-yamal-market-value': {
      title: 'Valor de Mercado de Lamine Yamal',
      subtitle: 'A valorização estimada do passe do jogador Lamine Yamal situa-se nos 220 milhões de euros',
      description:
        'O valor de mercado de Lamine Yamal fixa-se nos 220 milhões de euros, consolidando-o como um dos futebolistas mais valiosos e com maior projeção financeira do mundo, segundo os dados de perfil da Transfermarkt.',
      sourceName: 'Transfermarkt — Perfil de Lamine Yamal',
    },
  },
};
