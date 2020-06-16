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
  secret?: boolean;
}

export interface IArticle extends IMarkdownMeta {
  slug: string;
  authors: IAuthor[];
  id: string;
  updatedAt: string;
  /**
   * Article absolute file path
   */
  absolutePath: string;
  /**
   * Path relative to project's root
   */
  relativePath: string;
}

export interface IProgress {
  height: number;
  offset: number;
  title: string;
  mode: string;
  onClose?: () => void;
}
