export interface IPaginator {
  pageCount: number;
  index: number;
  pathPrefix: string;
}

export interface ISocial {
  name?: string;
  url: string;
}

export interface IAuthor {
  name: string;
  bio: string;
  avatar: string;
  featured?: boolean;
  authorsPage?: boolean;
  slug: string;
  social: ISocial[];
}

export interface IHero {
  heading: string;
  maxWidth: number;
}

export interface IMarkdownMeta {
  title: string;
  author?: string;
  authors?: string;
  date: string;
  excerpt: string;
  hero: string;
  heroRef: string;
  tags: string;
}

export interface IArticle extends IMarkdownMeta {
  slug: string;
  authors: IAuthor[];
  body: string;
  id: string;
  updatedAt: string;
  secret: boolean;
  dateForSEO: string;
  filePath: string;
  importPath: string;
}

export interface IProgress {
  height: number;
  offset: number;
  title: string;
  mode: string;
  onClose?: () => void;
}
