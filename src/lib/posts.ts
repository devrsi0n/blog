import * as fs from "fs";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import globby from 'globby';

import { IMarkdownMeta } from '../types';

const postsGlobPattern = "content/posts/**/*.mdx";

export async function getSortedPostsData() {
  const mdPaths = await globby(postsGlobPattern, {
    absolute: true,
  });
  const allPostsData = [];
  for (const filePath of mdPaths) {
    const fileName = filePath.slice(filePath.lastIndexOf('/') + 1);
    const id = fileName.replace(/\.mdx$/, "");
    // TODO: Use promise
    const fileContents = fs.readFileSync(filePath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    allPostsData.push({
      id,
      slug: id,
      ...(matterResult.data as IMarkdownMeta),
    });
  }
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export async function getAllPostIds() {
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

export async function getPostData(id: string) {
  const filePaths = await globby(postsGlobPattern, {
    absolute: true,
  });
  const filePath = filePaths.filter(filePath => filePath.endsWith(`${id}.mdx`))[0];
  const fileContents = await fs.promises.readFile(filePath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const data = (matterResult.data as IMarkdownMeta);
  const authors: string[] = (() => {
    if (data.authors) {
      return data.authors.split(',');
    } else {
      return [data.author];
    }
  })();
  authors.forEach(a => a.trim());

  // Combine the data with the id and contentHtml
  return {
    ...data,
    body: contentHtml,
    id,
    slug: id,
    filePath,
    authors,
  };
}
