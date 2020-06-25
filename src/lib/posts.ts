import * as fs from "fs";
import matter from "gray-matter";
import globby from 'globby';
import renderToString from '@devrsi0n/next-mdx-remote/render-to-string';
import React from 'react';
import { ThemeProvider } from 'theme-ui';

import { IMarkdownMeta, IArticle } from '../types';
import { getAllAuthors } from './authors';
import { isProd } from '../utils/env';
import postTimestamps from '../../content/postTimestamps.json';
import theme from '../theme';
import { components } from '../components/MDX';

const postsGlobPattern = "content/posts/**/*.mdx";

export async function getSortedPostsData(): Promise<IArticle[]> {
  const filePaths = await globby(postsGlobPattern, {
    absolute: true,
  });
  return readAndSortArticles(filePaths);
}

export async function getAllPostIds(): Promise<{ params: { id: string } }[]> {
  const filePaths = await globby(postsGlobPattern, {
    absolute: false,
  });
  return filePaths.map((filePath) => {
    const lastSlash = filePath.lastIndexOf('/');
    const lastDot = filePath.lastIndexOf('.');
    return {
      params: {
        id: filePath.slice(lastSlash + 1, lastDot),
      },
    };
  });
}

const allAuthors = getAllAuthors();

export async function getPostData(id: string): Promise<IArticle> {
  const filePaths = await globby(postsGlobPattern, {
    absolute: true,
  });
  const filePath = filePaths.filter(filePath => filePath.endsWith(`${id}.mdx`))[0];
  if (!filePath) {
    throw new Error(`Can't find the article file for id=${id}`);
  }
  return readArticle(filePath);
}

export async function getAdjacentArticles(id: string): Promise<IArticle[]> {
  const allData = await getSortedPostsData();
  const { length } = allData;
  if (length < 2) {
    return [];
  }
  let index = -1;
  allData.forEach((article, idx) => {
    if (article.id === id) {
      index = idx;
    }
  });
  if (index === -1) {
    return [];
  }
  if (length === 2) {
    return [allData[length - index - 1]]
  }
  if (index === 0) {
    return [allData[1], allData[2]];
  } else if (index === length - 1) {
    return [allData[length - 2], allData[length - 3]];
  } else {
    return [allData[index - 1], allData[index + 1]];
  }
}

async function readAndSortArticles(filePaths: string[]): Promise<IArticle[]> {
  const allPostsData: IArticle[] = await Promise.all(filePaths.map(filePath => readArticle(filePath)));

  return allPostsData.filter(article => !!article).sort((a, b) => (a.date < b.date) ? 1 : -1);
}

async function readArticle(filePath: string): Promise<IArticle> {
  const fileName = filePath.slice(filePath.lastIndexOf('/') + 1);
  const id = fileName.replace(/\.mdx$/, "");
  // TODO: Use promise
  const fileContents = await fs.promises.readFile(filePath, "utf8");
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);
  const meta = data as IMarkdownMeta;
  if (isProd && meta.secret) {
    return;
  }

  const authorStringArray: string[] = (meta.authors) ? meta.authors.split(',') : [meta.author];
  authorStringArray.forEach(a => a.trim());
  const updatePostKey = filePath.slice(filePath.indexOf('content/posts'));
  const updatedAt = postTimestamps[updatePostKey] ? postTimestamps[updatePostKey].updatedAt : meta.date;
  const mdxSource = await renderToString(content, components, {
    Provider: ({ children }) => React.createElement(ThemeProvider, {
      theme,
    },
    children)
  });

  return {
    id,
    slug: id,
    ...meta,
    mdxSource,
    updatedAt,
    relativePath: filePath,
    authors: getAuthors(authorStringArray),
  };
}

function getAuthors(authorStringArray: string[]) {
  return allAuthors.filter(author =>
    authorStringArray.includes(author.name)
  );
}
