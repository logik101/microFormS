import { SearchResult, SearchResultType } from '../types';

export const siteWideSearchIndex: SearchResult[] = [
  // Home Page Content
  {
    id: 'home-hero',
    type: SearchResultType.PAGE,
    titleKey: 'heroTitle',
    contentKey: 'heroSubtitle',
    link: '/',
  },
  {
    id: 'home-about-snippet',
    type: SearchResultType.PAGE,
    titleKey: 'aboutMicroFormS',
    contentKey: 'aboutMicroFormSDesc',
    link: '/about',
  },
  {
    id: 'home-projects',
    type: SearchResultType.PAGE,
    titleKey: 'ourProjects',
    contentKey: 'techInnovationsDesc',
    link: '/#projects',
  },
  
  // Home Page Services
  {
    id: 'service-quality-training',
    type: SearchResultType.SERVICE,
    titleKey: 'qualityTraining',
    contentKey: 'qualityTrainingDesc',
    link: '/#services',
  },
  {
    id: 'service-data-analysis',
    type: SearchResultType.SERVICE,
    titleKey: 'advancedDataAnalysis',
    contentKey: 'advancedDataAnalysisDesc',
    link: '/#services',
  },
  {
    id: 'service-innovative-strategies',
    type: SearchResultType.SERVICE,
    titleKey: 'innovativeStrategies',
    contentKey: 'innovativeStrategiesDesc',
    link: '/#services',
  },
  {
    id: 'service-in-depth-studies',
    type: SearchResultType.SERVICE,
    titleKey: 'inDepthStudies',
    contentKey: 'cuttingEdgeTech',
    link: '/#services',
  },
  
  // About Page Content
  {
    id: 'about-who-we-are',
    type: SearchResultType.PAGE,
    titleKey: 'whoWeAre',
    contentKey: 'whoWeAreDesc',
    link: '/about',
  },
  {
    id: 'about-mission',
    type: SearchResultType.PAGE,
    titleKey: 'ourMission',
    contentKey: 'ourMissionDesc',
    link: '/about',
  },
  {
    id: 'about-vision',
    type: SearchResultType.PAGE,
    titleKey: 'ourVision',
    contentKey: 'ourVisionDesc',
    link: '/about',
  },
  {
    id: 'about-team-intro',
    type: SearchResultType.PAGE,
    titleKey: 'ourTeam',
    contentKey: 'ourTeamDesc',
    link: '/about#team',
  },
  
  // Team Members
  {
    id: 'team-walner',
    type: SearchResultType.TEAM,
    titleKey: 'walnerName',
    contentKey: 'walnerDesc',
    link: '/about#team',
  },
  {
    id: 'team-charly',
    type: SearchResultType.TEAM,
    titleKey: 'charlyName',
    contentKey: 'charlyDesc',
    link: '/about#team',
  },
  {
    id: 'team-johny',
    type: SearchResultType.TEAM,
    titleKey: 'johnyName',
    contentKey: 'johnyDesc',
    link: '/about#team',
  },
  {
    id: 'team-johnson',
    type: SearchResultType.TEAM,
    titleKey: 'johnsonName',
    contentKey: 'johnsonDesc',
    link: '/about#team',
  },
  {
    id: 'team-robinson',
    type: SearchResultType.TEAM,
    titleKey: 'robinsonName',
    contentKey: 'robinsonDesc',
    link: '/about#team',
  },
  {
    id: 'team-ginel',
    type: SearchResultType.TEAM,
    titleKey: 'ginelName',
    contentKey: 'ginelDesc',
    link: '/about#team',
  },

  // Formations Page
  {
    id: 'formations-hero',
    type: SearchResultType.PAGE,
    titleKey: 'formationsTitle',
    contentKey: 'formationsSubtitle',
    link: '/formations',
  },
  {
    id: 'formation-strategic',
    type: SearchResultType.FORMATION,
    titleKey: 'strategicTraining',
    contentKey: 'formationsStrategicDesc',
    link: '/formations#formations-list',
  },
  {
    id: 'formation-microfinance',
    type: SearchResultType.FORMATION,
    titleKey: 'microfinanceTraining',
    contentKey: 'formationsMicrofinanceDesc',
    link: '/formations#formations-list',
  },
  {
    id: 'formation-ai',
    type: SearchResultType.FORMATION,
    titleKey: 'aiInFinance',
    contentKey: 'formationsAiDesc',
    link: '/formations#formations-list',
  },
  
  // Blog Articles
  {
    id: 'blog-1',
    type: SearchResultType.BLOG,
    titleKey: 'blogTitleAi',
    contentKey: 'blogContentAi',
    link: '/blog/1',
  },
  {
    id: 'blog-2',
    type: SearchResultType.BLOG,
    titleKey: 'blogTitlePioneer',
    contentKey: 'blogDescPioneer',
    link: '/blog/2',
  },
  {
    id: 'blog-3',
    type: SearchResultType.BLOG,
    titleKey: 'blogTitleInnovation',
    contentKey: 'blogDescInnovation',
    link: '/blog/3',
  },
];