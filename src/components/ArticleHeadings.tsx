/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useColorMode } from 'theme-ui';
import { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { IconHashLink as IconLink } from './Icons';
import mediaqueries from '../styles/media';
import { H1, H2, H3, H4, H5, H6 } from './Headings';

function IconHashLink() {
  const [colorMode] = useColorMode();
  const color = colorMode === 'dark' ? 'white' : 'black';
  return <IconLink fill={color} />;
}

const Anchor = styled.a`
  margin-left: 4px;
  line-height: 1;
`;

const commonStyle = css`
  display: flex;
  align-items: center;

  /* Hide link icon */
  svg {
    visibility: hidden;
  }

  &:hover,
  &:active {
    svg {
      visibility: visible;
    }
  }

  /* Mobile device should show hash link icon directly */
  ${mediaqueries.desktop`
    svg {
      width: 18px;
      height: 18px;
      visibility: visible;
    }
  `};
`;

export interface HeadingProps {
  children: React.ReactNode;
}

interface CommonHeadingProps extends HeadingProps {
  Component:
    | typeof H1
    | typeof H2
    | typeof H3
    | typeof H4
    | typeof H5
    | typeof H6;
}

function CommonHeading({ children, Component }: CommonHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [width, setWidth] = useState(10);
  useEffect(() => {
    if (ref.current) {
      const fontSize = window
        .getComputedStyle(ref.current)
        .fontSize.replace('px', '');
      setWidth(Number(fontSize) * 0.75);
    }
  }, [ref]);
  return (
    <Component ref={ref} id={children as string} css={commonStyle}>
      {children}
      <Anchor
        href={`#${children}`}
        aria-hidden="true"
        tabIndex={-1}
        style={{ width }}
      >
        <IconHashLink />
      </Anchor>
    </Component>
  );
}

function H1Heading(props: HeadingProps) {
  return <CommonHeading {...props} Component={H1} />;
}

function H2Heading(props: HeadingProps) {
  return <CommonHeading {...props} Component={H2} />;
}

function H3Heading(props: HeadingProps) {
  return <CommonHeading {...props} Component={H3} />;
}

function H4Heading(props: HeadingProps) {
  return <CommonHeading {...props} Component={H4} />;
}

function H5Heading(props: HeadingProps) {
  return <CommonHeading {...props} Component={H5} />;
}

function H6Heading(props: HeadingProps) {
  return <CommonHeading {...props} Component={H6} />;
}

export default {
  h1: H1Heading,
  h2: H2Heading,
  h3: H3Heading,
  h4: H4Heading,
  h5: H5Heading,
  h6: H6Heading,
};
