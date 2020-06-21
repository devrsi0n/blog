import React from 'react';

import { MDXProvider } from '@mdx-js/react';
import { css } from '@emotion/core';

import styled from '../utils/styled';
import Anchor from './Anchor';
import Blockquote from './Blockquote';
import CodeInline from './Code.Inline';
import CodePre from './Code.Pre';
import CodePrism from './Code.Prism';
import Headings from './ArticleHeadings';
import HorizontalRule from './HorizontalRule';
import UnorderedList from './List.Unordered';
import OrderedList from './List.Ordered';
import Paragraph from './Paragraph';
import Table from './Table';
import TableCell from './Table.Cell';
import TableHead from './Table.Head';
import TableHeadCell from './Table.Head.Cell';
import Message from './Message';
import ImageZoom from './Image.Zoom';
import Figcaption from './Figcaption';

import mediaqueries from '../styles/media';
import { toKebabCase } from '../utils';

const components = {
  p: Paragraph,
  h1: Headings.h2, // h1 reserved article title
  h2: Headings.h2,
  h3: Headings.h3,
  h4: Headings.h4,
  h5: Headings.h5,
  h6: Headings.h6,
  // -thematicBreak
  blockquote: Blockquote,
  ul: UnorderedList,
  ol: OrderedList,
  // -li
  table: Table,
  thead: TableHead, // ?
  // -tr
  td: TableCell,
  th: TableHeadCell,
  pre: CodePre,
  code: CodePrism,
  // -em
  // -strong
  // -delete
  inlineCode: CodeInline,
  hr: HorizontalRule,
  a: Anchor,
  img: ImageZoom,
  figcaption: Figcaption,

  // Custom components, used in MDX directly
  Message,
};

export interface MDXProps {
  children: React.ReactNode;
}

function MDX({ children }: MDXProps) {
  return (
    <MDXProvider components={components}>
      <MDXBody>
        {children}
        <SplitLine />
      </MDXBody>
    </MDXProvider>
  );
}

export default React.memo(MDX);

const SplitLine = styled.div`
  background: #ccc;
  height: 1px;
  margin: 0 auto;
  width: 100%;
  max-width: 680px;
`;

const IMAGE_WIDTHS = {
  regular: '680px',
  large: '1004px',
  full: '100vw',
};

const ARTICLE_WIDTH = css`
  width: 100%;
  max-width: 680px;

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
  `};

  ${mediaqueries.phablet`
    padding: 0 20px;
  `};
`;

const HeadingsCSS = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 auto;
  }

  h1,
  h2 {
    margin: 25px auto 18px;

    ${mediaqueries.tablet`
      margin: 30px auto 18px;
    `};
  }

  h3 {
    margin: 20px auto 10px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${ARTICLE_WIDTH};
  }
`;

const PrismCSS = p => css`
  .prism-code {
    overflow: hidden;
    padding: 46px 32px;
    margin: 0 auto;
    font-family: ${p.theme.fonts.monospace};

    &:hover {
      overflow: auto;
    }

    .token-line {
      border-left: 3px solid transparent;

      ${Object.keys(p.theme.colors.prism)
        .map(key => {
          return `.${toKebabCase(key)}{color:${p.theme.colors.prism[key]};}`;
        })
        .reduce((curr, next) => curr + next, ``)};

      & > span {
      }
    }

    .number-line {
      display: inline-block;
      width: 32px;
      user-select: none;
      opacity: 0.3;
      color: ${p.theme.colors.prism.lineNumber};

      ${mediaqueries.tablet`
        opacity: 0;
        width: 0;
      `};
    }

    .token-line.highlight-line {
      margin: 0 -32px;
      padding: 0 32px;
      background: ${p.theme.colors.prism.highlight};
      border-left: 3px solid ${p.theme.colors.prism.highlightBorder};

      ${mediaqueries.tablet`
        margin: 0 -20px;
        padding: 0 20px;
      `};
    }

    .operator + .maybe-class-name {
      color: #ffcf74 !important;
    }

    .plain ~ .operator {
      color: #5fa8aa !important;
    }

    ${mediaqueries.desktop`
      left: -26px;
    `};

    ${mediaqueries.tablet`
      padding: 20px 20px;
      left: 0;
    `};

    ${mediaqueries.phablet`
      text-size-adjust: none;
      border-radius: 0;
      margin: 0 auto 25px;
      padding: 30px 20px 25px 20px;
      overflow: initial;
      position: relative;
    `};
  }
`;

const ImageCSS = css`
  .gatsby-resp-image-background-image {
    display: none !important;
  }

  img {
    display: inline-block;
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 0;
    margin: 15px auto 50px;
    border-radius: 5px;

    ${mediaqueries.tablet`
      margin: 10px auto 45px;
    `};
  }

  div.Image__Small {
    display: inline-block;
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 0;
    margin: 15px auto 50px;
    border-radius: 5px;
    width: 100%;
    max-width: 680px;

    ${mediaqueries.tablet`
      margin: 10px auto 45px;
    `};

    ${mediaqueries.desktop`
      max-width: 507px;
    `}

    ${mediaqueries.tablet`
      max-width: 486px;
      margin: 0 auto 25px;
    `};

    ${mediaqueries.phablet`
      padding: 0 20px;
    `};
  }

  .Image__Container {
    text-align: center;
  }

  img.Image__With-Shadow {
    box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.15);
  }

  div.Image__Medium {
    position: relative;
    margin: 15px auto 50px;
    width: 100%;
    max-width: ${IMAGE_WIDTHS.large};

    ${mediaqueries.desktop_medium`
      left: -34px;
    `};

    ${mediaqueries.desktop`
      left: -26px;
    `};

    ${mediaqueries.tablet`
      border-radius: 0;
      left: 0;
      margin: 0 auto 25px;

      img {
        border-radius: 0;
      }
    `};
  }

  div.Image__Large {
    position: relative;
    left: -68px;
    width: ${IMAGE_WIDTHS.full};
    max-width: ${IMAGE_WIDTHS.full};
    margin: 25px auto 60px;
    pointer-events: none;

    img {
      border-radius: 0;
    }

    ${mediaqueries.desktop`
      left: -53px;
    `};

    ${mediaqueries.tablet`
      left: 0;
      margin: 0 auto 25px;
    `};
  }
`;

/**
 * MDXBody
 * Here we're applying "global" selectors to make sure we maintain an article
 * body type feel. We're also applying all the Prism selectors and styles within
 * the MDXBody.
 */
const MDXBody = styled.div`
  position: relative;
  // z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${HeadingsCSS}
  ${PrismCSS}
  ${ImageCSS}
`;
