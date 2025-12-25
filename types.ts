
export enum Language {
  FR = 'fr',
  EN = 'en',
  HT = 'ht',
}

export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

export interface BlogArticle {
  id: number;
  imageUrl: string;
  titleKey: string;
  descriptionKey: string;
  contentKey?: string;
  tagsKey?: string;
  date: string;
  readTimeKey: string;
  author?: string;
  isHidden?: boolean; 
}

export enum SearchResultType {
  PAGE = 'page',
  SERVICE = 'service',
  TEAM = 'team',
  FORMATION = 'formation',
  BLOG = 'blog',
}

export interface SearchResult {
  id: string;
  type: SearchResultType;
  titleKey: string;
  contentKey: string;
  link: string;
}

export type UserRole = 'admin' | 'standard';

export interface User {
  username: string;
  name?: string;
  role: UserRole;
}

export interface ActivityLog {
  id: number;
  username: string;
  action: string; // 'LOGIN', 'CREATE_POST', 'EDIT_POST', 'DELETE_POST', 'HIDE_POST', 'SHOW_POST', 'GITHUB_SYNC'
  details: string;
  timestamp: string;
}

export interface GitHubConfig {
  owner: string;
  repo: string;
  path: string;
  token: string;
}