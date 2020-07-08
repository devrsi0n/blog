/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';
import { graphql, useStaticQuery } from 'gatsby';

import MDX from '@components/MDX';
import Progress from '@components/Progress';
import Section from '@components/Section';
import Subscription from '@components/Subscription';
import Anchor from '@components/Anchor';
import ArticleActions from '@sections/article/ArticleActions';

import mediaqueries from '@styles/media';

import { clamp } from '@utils';
import debounce from '@utils/debounce';
import ArticleAside from '@sections/article/ArticleAside';
import ArticleHero from '@sections/article/ArticleHero';
import ArticleControls from '@sections/article/ArticleControls';
import ArticleNext from '@sections/article/ArticleNext';
import ArticleSEO from '@sections/article/ArticleSEO';
import ArticleShare from '@sections/article/Article.Share';
import useUtteranc from '@hooks/useUtteranc';
import { ArticleTemplateSiteQuery } from '../types/graphql';

const siteQuery = graphql`
  query articleTemplateSite {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            repoUrl
            isLocal
          }
        }
      }
    }
  }
`;

function Article({ pageContext, location }) {
  const contentSectionRef = useRef<HTMLElement>(null);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  // Set a minmum content height avoid calculate error
  const [contentHeight, setContentHeight] = useState<number>(100);
  const [progress, setProgress] = useState<number>(0);
  useUtteranc('utterancContainer');
  const results = useStaticQuery<ArticleTemplateSiteQuery>(siteQuery);
  const { isLocal, repoUrl } = results.allSite.edges[0].node.siteMetadata;

  const { article, authors, mailchimp, next } = pageContext;

  useEffect(() => {
    const handleScroll = throttle(() => {
      // content top height relative to document body
      const topDiff =
        contentSectionRef.current.getBoundingClientRect().top + window.scrollY;
      const percentComplete =
        (window.scrollY / (contentHeight + topDiff - window.innerHeight)) * 100;

      setProgress(clamp(+percentComplete.toFixed(2), 0, 105));
    }, 20);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [contentHeight]);

  useEffect(() => {
    const calculateBodySize = throttle(() => {
      const contentSection = contentSectionRef.current;

      if (!contentSection) return;

      /**
       * If we haven't checked the content's height before,
       * we want to add listeners to the content area's
       * imagery to recheck when it's loaded
       */
      if (!hasCalculated) {
        const debouncedCalculation = debounce(calculateBodySize);
        const $images = contentSection.querySelectorAll('img');

        $images.forEach($img => {
          // If the image hasn't finished loading then add a listener
          if (!$img.complete) {
            $img.addEventListener('load', debouncedCalculation, false);
          }
        });

        // Prevent rerun of the listener attachment
        setHasCalculated(true);
      }
      const newHeight = contentSection.getBoundingClientRect().height;
      // Set the height and offset of the content area
      if (contentHeight !== newHeight) {
        setContentHeight(newHeight);
      }
    }, 20);

    calculateBodySize();
    window.addEventListener('resize', calculateBodySize);

    return () => window.removeEventListener('resize', calculateBodySize);
  }, [hasCalculated, contentSectionRef, contentHeight]);

  const editOnGitHubUrl = `${repoUrl}/edit/master/content/posts${article.filePath}/index.mdx`;

  return (
    <React.Fragment>
      <ArticleSEO article={article} authors={authors} location={location} />
      <ArticleHero article={article} authors={authors} />
      <ArticleAside progress={progress}>
        <Progress contentHeight={contentHeight} progress={progress} />
      </ArticleAside>
      <MobileControls>
        <ArticleControls />
      </MobileControls>
      <ArticleBody ref={contentSectionRef}>
        <MDX content={article.body}>
          <ArticleShare />
        </MDX>
      </ArticleBody>
      <ArticleAside progress={progress} alignRight>
        <ArticleActions url={location.pathname} />
      </ArticleAside>

      <div id="utterancContainer" />

      {isLocal && (
        <EditOnGitHub narrow>
          <Anchor href={editOnGitHubUrl}>在 GitHub 上编辑此文</Anchor>
        </EditOnGitHub>
      )}

      {mailchimp && article.subscription && <Subscription />}
      {next.length > 0 && (
        <NextArticle narrow>
          <FooterNext
            sx={{
              color: 'primary',
              '&::after': {
                backgroundColor: 'grey',
              },
            }}
          >
            其他文章
          </FooterNext>
          <ArticleNext articles={next} />
          <FooterSpacer />
        </NextArticle>
      )}
    </React.Fragment>
  );
}

export default React.memo(Article);

const EditOnGitHub = styled(Section)`
  margin-bottom: 2rem;
`;

const MobileControls = styled.div`
  position: relative;
  padding-top: 60px;
  transition: background 0.2s linear;
  text-align: center;

  ${mediaqueries.tablet_up`
    display: none;
  `}
`;

const ArticleBody = styled.article`
  position: relative;
  padding: 160px 0 35px;
  padding-left: 68px;
  transition: background 0.2s linear;
  display: flex;
  justify-content: center;

  ${mediaqueries.desktop`
    padding-left: 53px;
  `}

  ${mediaqueries.tablet`
    padding: 70px 0 80px;
  `}

  ${mediaqueries.phablet`
    padding: 60px 0;
  `}
`;

const NextArticle = styled(Section)`
  display: block;
`;

const FooterNext = styled.h3`
  position: relative;
  opacity: 0.25;
  margin-bottom: 100px;
  font-weight: 400;

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `}

  &::after {
    content: '';
    position: absolute;
    width: ${(910 / 1140) * 100}%;
    height: 1px;
    right: 0;
    top: 11px;

    ${mediaqueries.tablet`
      width: ${(600 / 1140) * 100}%;
    `}

    ${mediaqueries.phablet`
      width: ${(400 / 1140) * 100}%;
    `}

    ${mediaqueries.phone`
      width: 90px
    `}
  }
`;

const FooterSpacer = styled.div`
  margin-bottom: 65px;
`;
