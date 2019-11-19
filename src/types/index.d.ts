import { FluidObject } from 'gatsby-image';

declare module '@emotion/styled' {
  import { CreateStyled } from '@emotion/styled/types/index';

  export * from '@emotion/styled/types/index';
  const customStyled: CreateStyled<import('gatsby-plugin-theme-ui').Theme>;
  export default customStyled;
}

declare global {
  interface Document {
    selection?: Selection;
  }
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.svg' {
  const value: string;
  export = value;
}

declare module 'process' {
  declare module 'env' {
    export const GATSBY_BUILD_TIMESTAMP: string;
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
  timeToRead: number;
  date: string;
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
