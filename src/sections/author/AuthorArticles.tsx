/** @jsx jsx */
import { jsx } from 'theme-ui';
// import React from 'react';
import styled from '@emotion/styled';

import mediaqueries from '@styles/media';
import { IArticle } from '@types';

import ArticlesList from '@sections/articles/ArticlesList';

interface AuthorArticlesProps {
  articles: IArticle[];
}

const AuthorArticles = ({ articles }: AuthorArticlesProps) => {
  return (
    <AuthorArticlesContainer
      sx={{
        background: theme => `linear-gradient(
        180deg,
        ${theme.colors.card} 0%,
        rgba(249, 250, 252, 0) 91.01%
      )`,
      }}
    >
      <ArticlesList articles={articles} alwaysShowAllDetails />
    </AuthorArticlesContainer>
  );
};

export default AuthorArticles;

const AuthorArticlesContainer = styled.div`
  border-radius: 8px;
  padding: 88px 98px;
  position: relative;
  z-index: 1;

  ${mediaqueries.desktop_medium`
    padding: 80px;
  `}

  ${mediaqueries.desktop`
    padding: 0;
    background: transparent;
  `}
`;
