import { GetStaticProps } from 'next';
import styled from '@emotion/styled';

import { getSortedPostsData } from '../lib/posts';
import site from '../../site';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Paginator from '../components/Navigation.Paginator';
import ArticlesHero from '../sections/articles/Articles.Hero';
import ArticlesList from '../sections/articles/Articles.List';
import { getLocation } from '../lib/location';
import { IArticle, IAuthor } from '../types';
import { getAuthors } from '../lib/authors';

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${(p) => p.show && `margin-top: 95px;`}
`;

interface IHomeProps {
  authors: IAuthor[];
  articles: IArticle[];
  location: Location;
}

export default function Home({ articles, location, authors }: IHomeProps) {
  return (
    <>
      <SEO url={location.href} />
      <ArticlesHero authors={authors} hero={site.hero} />
      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={articles.length > 6}>
          <Paginator pageCount={articles.length / 6} index={0} pathPrefix="" />
        </ArticlesPaginator>
      </Section>
      <ArticlesGradient />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getSortedPostsData();
  const authors = getAuthors();
  articles.forEach((article) => {
    article.slug = `/articles/${article.slug}`;
  });
  return {
    props: {
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
  background: ${(p) => p.theme.colors.gradient};
  transition: ${(p) => p.theme.colorModeTransition};
`;
