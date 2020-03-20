import { FluidObject } from 'gatsby-image';

declare global {
  interface Document {
    selection?: Selection;
  }
}

export interface IPaginator {
  pageCount: number;
  index: number;
  pathPrefix: string;
}

export interface IAuthor {
  authorsPage?: boolean;
  featured?: boolean;
  name: string;
  slug: string;
  bio: string;
  avatar: {
    image: FluidObject;
    small: FluidObject;
    medium: FluidObject;
    large: FluidObject;
    full: FluidObject;
  };
  social: {
    name: string;
    url: string;
  }[];
}

export interface IArticle {
  title: string;
  slug: string;
  authors: IAuthor[];
  excerpt: string;
  body: string;
  id: string;
  hero: {
    full: FluidObject;
    preview: FluidObject;
    regular: FluidObject;
    narrow: FluidObject;
    seo: FluidObject;
  };
  heroRef: string;
  timeToRead: number;
  date: string;
  updatedAt: string;
  secret: boolean;
  dateForSEO: string;
}

interface IArticleQuery {
  edges: {
    node: IArticle;
  }[];
}

export interface IProgress {
  height: number;
  offset: number;
  title: string;
  mode: string;
  onClose?: () => void;
}
