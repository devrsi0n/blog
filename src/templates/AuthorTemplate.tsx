/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import SEO from '@components/SEO';
import Paginator from '@components/Navigation/NavigationPaginator';

import AuthorHero from '@sections/author/AuthorHero';
import AuthorArticles from '@sections/author/AuthorArticles';

function ArticlesPage({ location, pageContext }) {
  const { author } = pageContext.additionalContext;
  const articles = pageContext.group;

  return (
    <React.Fragment>
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
      <AuthorsGradient
        sx={{
          backgroundColor: 'gradient',
          transition: theme => theme.colorModeTransition,
        }}
      />
    </React.Fragment>
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
`;

const AuthorPaginator = styled.div`
  text-align: center;
`;
