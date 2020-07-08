/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import SEO from '@components/SEO';
import Paginator from '@components/Navigation/Navigation.Paginator';

import ArticlesHero from '@sections/articles/ArticlesHero';
import ArticlesList from '@sections/articles/ArticlesList';

function ArticlesPage({ location, pageContext }) {
  const articles = pageContext.group;
  const { authors } = pageContext.additionalContext;

  return (
    <React.Fragment>
      <SEO pathname={location.pathname} />
      <ArticlesHero authors={authors} />
      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
      <ArticlesGradient
        sx={{
          background: 'gradient',
          transition: theme => theme.colorModeTransition,
        }}
      />
    </React.Fragment>
  );
}

export default React.memo(ArticlesPage);

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
`;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;
