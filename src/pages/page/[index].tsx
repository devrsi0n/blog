import { GetStaticProps, GetStaticPaths } from 'next';

import styled from '../../utils/styled';
import { getSortedPostsData } from '../../lib/posts';
import site from '../../../site';
import Section from '../../components/Section';
import SEO from '../../components/SEO';
import Paginator from '../../components/Navigation.Paginator';
import ArticlesHero from '../../sections/articles/Articles.Hero';
import ArticlesList from '../../sections/articles/Articles.List';
import { getLocation } from '../../lib/location';
import { IArticle, IAuthor } from '../../types';
import { getAllAuthors } from '../../lib/authors';

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;

export interface IPageProps {
  authors: IAuthor[];
  articles: IArticle[];
  location: Location;
  index: number;
  totalArticleNum: number;
}

export default function Page({
  articles,
  location,
  authors,
  index,
  totalArticleNum,
}: IPageProps) {
  return (
    <>
      <SEO url={location.href} />
      <ArticlesHero authors={authors} hero={site.hero} />
      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={totalArticleNum > 6}>
          <Paginator
            pageCount={totalArticleNum / 6}
            index={index}
            pathPrefix="/"
          />
        </ArticlesPaginator>
      </Section>
      <ArticlesGradient />
    </>
  );
}

const ARTICLE_MAX_NUM_IN_A_PAGE = 6;

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getSortedPostsData();
  const { length } = articles;
  const pageCount = Math.ceil(length / ARTICLE_MAX_NUM_IN_A_PAGE);
  const paths = [];
  for (let i = 1; i <= pageCount; i++) {
    paths.push({
      params: {
        index: String(i),
      },
    });
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const index = parseInt(params.index as string, 10);
  const allArticles = await getSortedPostsData();
  const authors = getAllAuthors();
  allArticles.forEach(article => {
    // eslint-disable-next-line no-param-reassign
    article.slug = `/articles/${article.slug}`;
  });
  const articles = allArticles.slice(
    (index - 1) * ARTICLE_MAX_NUM_IN_A_PAGE,
    index * ARTICLE_MAX_NUM_IN_A_PAGE
  );
  return {
    props: {
      index,
      totalArticleNum: allArticles.length,
      articles,
      authors,
      location: getLocation(site.siteUrl),
    },
  };
};

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;
