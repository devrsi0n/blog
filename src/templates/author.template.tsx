import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import SEO from '@components/SEO';
import Paginator from '@components/Navigation/Navigation.Paginator';

import AuthorHero from '@sections/author/Author.Hero';
import AuthorArticles from '@sections/author/Author.Articles';

function ArticlesPage({ location, pageContext }) {
  const { author } = pageContext.additionalContext;
  const articles = pageContext.group;

  return (
    <>
      <SEO
        pathname={location.pathname}
        title={author.name}
        description={author.bio}
      />
      <Section narrow>
        <AuthorHero author={author} />
        <AuthorArticles articles={articles} />
        <AuthorPaginator>
          <Paginator {...pageContext} />
        </AuthorPaginator>
      </Section>
      <AuthorsGradient />
    </>
  );
}

export default React.memo(ArticlesPage);

const AuthorsGradient = styled.div`
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

const AuthorPaginator = styled.div`
  text-align: center;
`;
