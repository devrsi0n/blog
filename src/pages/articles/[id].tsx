import React, { useRef, useState, useEffect } from 'react';
// import * as path from 'path';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';
import dynamic from 'next/dynamic';

import { GetStaticProps, GetStaticPaths } from 'next';
import MDX from '../../components/MDX';
import Progress from '../../components/Progress';
import Section from '../../components/Section';
// import Subscription from '../../components/Subscription';
import Anchor from '../../components/Anchor';
import ArticleActions from '../../sections/article/Article.Actions';

import mediaqueries from '../../styles/media';

import { clamp } from '../../utils';
import debounce from '../../utils/debounce';
import ArticleAside from '../../sections/article/Article.Aside';
import ArticleHero from '../../sections/article/Article.Hero';
import ArticleControls from '../../sections/article/Article.Controls';
import ArticlesNext from '../../sections/article/Article.Next';
import ArticleSEO from '../../sections/article/Article.SEO';
import ArticleShare from '../../sections/article/Article.Share';
import useUtteranc from '../../hooks/useUtteranc';
import { getAllPostIds, getPostData } from '../../lib/posts';
import site, { Site } from '../../../site';
import { IArticle, IAuthor } from '../../types';
import { getLocation } from '../../lib/location';
import { getAuthors } from '../../lib/authors';
import { Logger } from '../../utils/logger';

const log = new Logger('pages/articles/[id].tsx');

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await getPostData(params.id as string);
  const allAuthors = getAuthors();
  const { filePath } = article;
  const startIndex = filePath.indexOf('content/posts');
  const importPath = filePath.slice(startIndex);

  return {
    props: {
      article: {
        ...article,
        importPath,
      },
      repoUrl: site.repoUrl,
      location: getLocation(`${site.siteUrl}/articles/${params.id}`),
      authors: allAuthors.filter(author =>
        article.authors.includes(author.name)
      ),
    },
  };
};

interface IArticleProps {
  location: Location;
  article: IArticle;
  repoUrl: Site;
  authors: IAuthor[];
}

const UTTERANC_ID = 'utterancContainer';

export default function Article({
  authors,
  location,
  article,
  repoUrl,
}: IArticleProps) {
  const contentSectionRef = useRef<HTMLElement>(null);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  // Set a minmum content height avoid calculate error
  const [contentHeight, setContentHeight] = useState<number>(100);
  const [progress, setProgress] = useState<number>(0);
  log.verbose(`article.importPath: ${article.importPath}`);
  const MDXContent = dynamic(() => import(`../../../${article.importPath}`));

  useUtteranc(UTTERANC_ID);

  // const mailchimp = false;
  // TODO: Add next articles
  const next = [];

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

  const editOnGitHubUrl = `${repoUrl}/edit/master/content/posts${article.filePath}`;

  return (
    <>
      <ArticleSEO
        url={location.href}
        article={article}
        authors={authors}
        location={location}
        name={article.slug}
        siteUrl={site.siteUrl}
      />
      <ArticleHero article={article} authors={authors} />
      <ArticleAside progress={progress}>
        <Progress contentHeight={contentHeight} progress={progress} />
      </ArticleAside>
      <MobileControls>
        <ArticleControls />
      </MobileControls>
      <ArticleBody ref={contentSectionRef}>
        <MDX>
          <MDXContent />
          <ArticleShare />
        </MDX>
      </ArticleBody>
      <ArticleAside progress={progress} alignRight>
        <ArticleActions url={location.pathname} />
      </ArticleAside>

      <div id={UTTERANC_ID} />

      <EditOnGitHub narrow>
        <Anchor href={editOnGitHubUrl}>在 GitHub 上编辑此文</Anchor>
      </EditOnGitHub>

      {/* TODO: add subscription */}
      {/* {mailchimp && article.subscription && <Subscription />} */}
      {next.length > 0 && (
        <NextArticle narrow>
          <FooterNext>其他文章</FooterNext>
          <ArticlesNext articles={next} />
          <FooterSpacer />
        </NextArticle>
      )}
    </>
  );
}

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
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `}

  &::after {
    content: '';
    position: absolute;
    background: ${p => p.theme.colors.grey};
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
