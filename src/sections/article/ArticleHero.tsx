/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';

import { H1 } from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';

import mediaqueries from '@styles/media';
import { IArticle, IAuthor } from '@types';

import ArticleAuthors from './ArticleAuthors';

interface ArticleHeroProps {
  article: IArticle;
  authors: IAuthor[];
}

const ArticleHero = ({ article, authors }: ArticleHeroProps) => {
  const hasCoAUthors = authors.length > 1;
  const hasHeroImage =
    article.hero &&
    Object.keys(article.hero.full).length !== 0 &&
    article.hero.full.constructor === Object;
  const updateAt = article.updatedAt.slice(0, 10);
  const createAt = article.date;
  return (
    <Hero>
      <Header>
        <HeroHeading
          sx={{
            fontFamily: 'serif',
          }}
        >
          {article.title}
        </HeroHeading>
        <HeroSubtitle
          hasCoAUthors={hasCoAUthors}
          sx={{
            color: 'grey',
          }}
        >
          <ArticleAuthors authors={authors} />
          <ArticleMeta hasCoAUthors={hasCoAUthors}>
            {compareDate(article.updatedAt, article.date) ? (
              <React.Fragment>
                <span>更新于&nbsp;</span>
                <time>{updateAt}</time>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span>发表于&nbsp;</span>
                <time>{createAt}</time>
              </React.Fragment>
            )}
            {/* · 阅读需要 {article.timeToRead} 分钟 */}
          </ArticleMeta>
        </HeroSubtitle>
      </Header>
      <HeroImage
        id="ArticleImage__Hero"
        sx={{
          boxShadow: 'image',
        }}
      >
        {hasHeroImage ? (
          <Image src={article.hero.full} />
        ) : (
          <ImagePlaceholder />
        )}
      </HeroImage>
      {article.heroRef && (
        <HeroRef>
          <HeroRefTxt
            sx={{
              color: 'gray',
            }}
          >
            封面来自{' '}
          </HeroRefTxt>
          <div dangerouslySetInnerHTML={{ __html: article.heroRef }} />
        </HeroRef>
      )}
    </Hero>
  );
};

export default React.memo(ArticleHero);

function compareDate(updatedAt: string, date: string) {
  const update = new Date(updatedAt);
  const create = new Date(date);
  return update.getTime() > create.getTime();
}

const HeroRefTxt = styled.p`
  padding-right: 10px;
`;

const HeroRef = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 944px;
  margin: 20px auto 0 auto;

  ${mediaqueries.phablet`
    width: calc(100vw - 40px);
  `}
`;

const Hero = styled.div`
  ${p => mediaqueries.phablet`
    &::before {
      content: "";
      width: 100%;
      height: 20px;
      background: ${p.theme.colors.primary};
      position: absolute;
      left: 0;
      top: 0;
      transition: ${p.theme.colorModeTransition};
    }

    &::after {
      content: "";
      width: 100%;
      height: 10px;
      background: ${p.theme.colors.background};
      position: absolute;
      left: 0;
      top: 10px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      transition: ${p.theme.colorModeTransition};
    }
  `}
`;

const ArticleMeta = styled.div<{ hasCoAUthors: boolean }>`
  margin-left: ${p => (p.hasCoAUthors ? '10px' : '0')};

  ${mediaqueries.phablet`
    margin-left: 0;
  `}
`;

const Header = styled.header`
  position: relative;
  z-index: 10;
  margin:100px auto 120px;
  padding-left: 68px;
  max-width: 749px;
  text-align: center;

  ${mediaqueries.desktop`
    padding-left: 53px;
    max-width: calc(507px + 53px);
    margin: 100px auto 70px;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 100px auto 70px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    margin: 170px auto 180px;
    padding: 0 40px;
  `}

  @media screen and (max-height: 700px) {
    margin: 100px auto;
  }
`;

const HeroHeading = styled(H1)`
  font-size: 48px;
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.32;
  text-align: center;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
    text-align: unset;
  `}
`;

const HeroSubtitle = styled.div<{ hasCoAUthors: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  ${p => mediaqueries.phablet`
    font-size: 14px;
    flex-direction: column;

    ${p.hasCoAUthors &&
      `
        &::before {
          content: '';
          position: absolute;
          left: -20px;
          right: -20px;
          top: -10px;
          bottom: -10px;
          border: 1px solid ${p.theme.colors.horizontalRule};
          opacity: 0.5;
          border-radius: 5px;
        }
    `}


    strong {
      display: block;
      font-weight: 500;
      margin-bottom: 5px;
    }
  `}
`;

const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 944px;
  overflow: hidden;
  margin: 0 auto;

  ${mediaqueries.tablet`
    max-width: 100%;
  `}

  ${mediaqueries.phablet`
    margin: 0 auto;
    width: calc(100vw - 40px);
    height: 220px;

    & > div {
      height: 220px;
    }
  `}
`;
