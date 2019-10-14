import { ReactNode } from 'react';
import { string } from 'prop-types';

declare module '*.png' {
  const value: any;
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

interface IImage {
  src: string;
  alt?: string;
}

interface IGatsbyImage extends IImage {
  src: string;
  base64?: string;
  srcWebp?: string;
  srcSet?: string;
  srcSetWebp?: string;
  tracedSVG?: string;
}

interface IGatsbyImageFluid extends IGatsbyImage {
  maxHeight: number;
  maxWidth: number;
}

interface IGatsbyImageFixed extends IGatsbyImage {
  height: number;
  width: number;
}

export interface IAuthor {
  authorsPage?: boolean;
  featured?: boolean;
  name: string;
  slug: string;
  bio: string;
  avatar: {
    image: IGatsbyImageFluid;
    full: IGatsbyImageFluid;
  };
}

export interface IArticle {
  title: string;
  slug: string;
  authors: IAuthor[];
  excerpt: string;
  body: string;
  id: string;
  hero: {
    full: IGatsbyImageFluid;
    preview: IGatsbyImageFluid;
    regular: IGatsbyImageFluid;
    seo: string;
  };
  timeToRead: number;
  date: string;
  secret: boolean;
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
