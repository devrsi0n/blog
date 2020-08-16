/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';

import mediaqueries from '@styles/media';
import { IArticle } from '@types';
import ArticleCard from '@components/ArticleCard';
import useWindowSize from '@hooks/useWindowWidth';
import { breakpointMap } from '../../gatsby-plugin-theme-ui';

/**
 * Sits at the bottom of our Article page. Shows the next 2 on desktop and the
 * next 1 on mobile!
 *
 *  [..............], [.........]
 *  [.....LONG.....], [..SHORT..]
 *  [..............], [.........]
 *
 * This does NOT use Articles.List because there's a special case of only have 1 article
 * as the next one suggested article, which requires special styling we didn't want to
 * mix into the generic list component.
 */
const ArticleNext = ({ articles }: { articles: IArticle[] }) => {
  const windowSize = useWindowSize();
  if (!articles) {
    return null;
  }

  const numberOfArticles = articles.length;
  return (
    <Grid numberOfArticles={numberOfArticles}>
      <ArticleCard article={articles[0]} isTiles />
      {windowSize.width >= breakpointMap.tablet && (
        <ArticleCard article={articles[1]} isTiles narrow />
      )}
    </Grid>
  );
};

export default React.memo(ArticleNext);

const wide = '1fr';
const narrow = '457px';

const Grid = styled.div<{ numberOfArticles: number }>`
  position: relative;
  display: grid;
  ${p => {
    if (p.numberOfArticles === 1) {
      return `
      grid-template-columns: 1fr;
      grid-template-rows: 1
    `;
    }
    return `
      grid-template-columns: ${wide} ${narrow};
      grid-template-rows: 2;
      `;
  }}
  column-gap: 30px;
  margin: 0 auto;
  max-width: ${p => (p.numberOfArticles === 1 ? '680px' : '100%')};

  ${mediaqueries.desktop`
    grid-template-columns: 1fr 1fr;
  `}

  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}
`;
