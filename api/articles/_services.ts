import { gql } from 'apollo-boost';
import { formateDate } from '../_utils/date';
import client from '../_utils/apolloClient';

interface Article {
  _id?: string;
  url: string;
  title: string;
  like: number;
  handclap: number;
  share: number;
}

export async function getArticle(url: string) {
  if (!url) {
    throw new Error('Invalid url');
  }
  const queryStr = `
    query {
      article(url: "${url}") {
        _id

        url
        title
        like
        handclap
        share
        createdAt
        updatedAt
      }
    }
  `;
  console.log(`Query string:\n${queryStr}`);
  try {
    const result = await client.query({
      query: gql(queryStr),
      fetchPolicy: 'no-cache',
    });
    return (result as any) as Article;
  } catch (error) {
    // Not exist, create first
    await createArticle({ url, like: 0, handclap: 0, share: 0, title: '' });
    const rsp = await getArticle(url);
    return rsp;
  }
}

export async function createArticle(article: Article) {
  const mutationStr = `
    mutation {
      createArticle(data: {
        createdAt: "${formateDate(new Date())}",
        url: "${article.url}",
        title: "${article.title}",
        like: ${article.like ?? 0},
        handclap: ${article.handclap ?? 0},
        share: ${article.share ?? 0}
      }){
        _id
      }
    }
  `;
  console.log(`Mutation string:\n${mutationStr}`);
  const result = await client.mutate({
    mutation: gql(mutationStr),
  });
  return (result as any) as Article;
}

export async function updateArticle(id: string, article: Article) {
  const mutationStr = `
    mutation {
      updateArticle(
        id: "${id}",
        data: {
          updatedAt: "${formateDate(new Date())}",
          url: "${article.url}",
          title: "${article.title}",
          like: ${article.like ?? 0},
          handclap: ${article.handclap ?? 0},
          share: ${article.share ?? 0}
        }
      ){
        _id
      }
    }
  `;
  console.log(`Mutation string:\n${mutationStr}`);
  const rsp = await client.mutate({
    mutation: gql(mutationStr),
  });
  return rsp;
}
