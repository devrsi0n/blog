import * as fs from "fs";
import matter from "gray-matter";
import globby from 'globby';

import { IMarkdownMeta, IArticle } from '../types';
import { getAllAuthors } from './authors';
import { isProd } from '../utils/env';
import postTimestamps from '../../content/postTimestamps.json';

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
  const fileContents = await fs.promises.readFile(filePath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const meta = (matterResult.data as IMarkdownMeta);
  const authorStringArray: string[] = (meta.authors) ? meta.authors.split(',') : [meta.author];
  authorStringArray.forEach(a => a.trim());
  const updatePostKey = filePath.slice(filePath.indexOf('content/posts'));
  const updatedAt = postTimestamps[updatePostKey] ? postTimestamps[updatePostKey].updatedAt : meta.date;

  return {
    ...meta,
    id,
    slug: id,
    authors: getAuthors(authorStringArray),
    updatedAt,
    absolutePath: filePath,
    relativePath: getRelativeFilePath(filePath),
  };
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


function readAndSortArticles(filePaths: string[]): IArticle[] {
  const allPostsData: IArticle[] = [];
  for (const filePath of filePaths) {
    const fileName = filePath.slice(filePath.lastIndexOf('/') + 1);
    const id = fileName.replace(/\.mdx$/, "");
    // TODO: Use promise
    const fileContents = fs.readFileSync(filePath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const meta = matterResult.data as IMarkdownMeta;
    if (isProd && meta.secret) {
      continue;
    }

    const authorStringArray: string[] = (meta.authors) ? meta.authors.split(',') : [meta.author];
    authorStringArray.forEach(a => a.trim());
    const updatePostKey = filePath.slice(filePath.indexOf('content/posts'));
    const updatedAt = postTimestamps[updatePostKey] ? postTimestamps[updatePostKey].updatedAt : meta.date;

    allPostsData.push({
      id,
      slug: id,
      ...meta,
      updatedAt,
      absolutePath: filePath,
      relativePath: getRelativeFilePath(filePath),
      authors: getAuthors(authorStringArray),
    });
  }

  return allPostsData.sort((a, b) => (a.date < b.date) ? 1 : -1);
}

function getRelativeFilePath(absoluteFilePath: string) {
  return absoluteFilePath.slice(absoluteFilePath.indexOf('content/posts'));
}

function getAuthors(authorStringArray: string[]) {
  return allAuthors.filter(author =>
    authorStringArray.includes(author.name)
  );
}
