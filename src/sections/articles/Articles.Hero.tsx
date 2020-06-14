import React, { useContext, useCallback } from 'react';
import styled from '@emotion/styled';

import Section from '../../components/Section';
import Bio from '../../components/Bio';
import mediaqueries from '../../styles/media';
import { IconTiles, IconRows } from '../../components/Icons';
import { IAuthor, IHero } from '../../types';
import { GridLayoutContext } from './Articles.List.Context';

interface IAuthorsHeroProps {
  authors: IAuthor[]
  hero: IHero;
}

function ArticlesHero({ authors, hero }: IAuthorsHeroProps) {
  const { gridLayout = 'tiles', hasSetGridLayout, setGridLayout } = useContext(
    GridLayoutContext
  );

  const tilesIsActive = hasSetGridLayout && gridLayout === 'tiles';
  const featuredAuthor = authors.find(author => author.featured);

  const handleClickTilesButton = useCallback(() => setGridLayout('tiles'), [
    setGridLayout,
  ]);
  const handleClickRowButton = useCallback(() => setGridLayout('rows'), [
    setGridLayout,
  ]);

  if (!featuredAuthor) {
    throw new Error(`
      No featured Author found.
      Please ensure you have at least featured Author.
  `);
  }

  return (
    <Section /* relative */ id="Articles__Hero">
      <HeadingContainer style={{ maxWidth: `${hero.maxWidth}px` }}>
        <HeroHeading dangerouslySetInnerHTML={{ __html: hero.heading }} />
      </HeadingContainer>
      <SubheadingContainer>
        <Bio author={featuredAuthor} />
        <GridControlsContainer>
          <GridButton
            onClick={handleClickTilesButton}
            active={tilesIsActive}
            data-a11y="false"
            title="Show articles in Tile grid"
            aria-label="Show articles in Tile grid"
          >
            <IconTiles />
          </GridButton>
          <GridButton
            onClick={handleClickRowButton}
            active={!tilesIsActive}
            data-a11y="false"
            title="Show articles in Row grid"
            aria-label="Show articles in Row grid"
          >
            <IconRows />
          </GridButton>
        </GridControlsContainer>
      </SubheadingContainer>
    </Section>
  );
}

export default React.memo(ArticlesHero);

const SubheadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;

  ${mediaqueries.desktop`
    margin-bottom: 80px;
  `};

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `};

  ${mediaqueries.phablet`
    display: none;
  `};
`;

const GridControlsContainer = styled.div`
  display: flex;
  align-items: center;

  ${mediaqueries.tablet`
    display: none;
  `};
`;

const HeadingContainer = styled.div`
  margin: 100px 0;

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.25;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const GridButton = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.25s;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:hover {
    background: ${p => p.theme.colors.hover};
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -10%;
    top: -10%;
    width: 120%;
    height: 120%;
    border: 2px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 50%;
  }

  svg {
    opacity: ${p => (p.active ? 1 : 0.25)};
    transition: opacity 0.2s;

    path {
      fill: ${p => p.theme.colors.primary};
    }
  }
`;
