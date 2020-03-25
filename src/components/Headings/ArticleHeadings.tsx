/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import Icons from '@components/Icons';
import { H1, H2, H3, H4, H5, H6 } from './Headings';

function IconHashLink() {
  const [colorMode] = useColorMode();
  const color = colorMode === 'dark' ? 'white' : 'black';
  return <Icons.HashLink fill={color} />;
}

const Anchor = styled.a`
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
`;

const commonStyle = css`
  display: flex;
  align-items: center;

  /* Hide link icon */
  svg {
    visibility: hidden;
  }

  &:hover {
    svg {
      visibility: visible;
    }
  }
`;

interface Heading {
  children: React.ReactNode;
}

function H1Heading({ children }: Heading) {
  return (
    <H1 id={children as string} css={commonStyle}>
      <Anchor href={`#${children}`} aria-hidden="true" tabIndex="-1">
        <IconHashLink />
      </Anchor>
      {children}
    </H1>
  );
}

function H2Heading({ children }: Heading) {
  return (
    <H2 id={children} css={commonStyle}>
      <Anchor href={`#${children}`} aria-hidden="true" tabIndex="-1">
        <IconHashLink />
      </Anchor>
      {children}
    </H2>
  );
}

function H3Heading({ children }: Heading) {
  return (
    <H3 id={children} css={commonStyle}>
      <Anchor href={`#${children}`} aria-hidden="true" tabIndex="-1">
        <IconHashLink />
      </Anchor>
      {children}
    </H3>
  );
}

function H4Heading({ children }: Heading) {
  return (
    <H4 id={children} css={commonStyle}>
      <Anchor href={`#${children}`} aria-hidden="true" tabIndex="-1">
        <IconHashLink />
      </Anchor>
      {children}
    </H4>
  );
}

function H5Heading({ children }: Heading) {
  return (
    <H5 id={children} css={commonStyle}>
      <Anchor href={`#${children}`} aria-hidden="true" tabIndex="-1">
        <IconHashLink />
      </Anchor>
      {children}
    </H5>
  );
}

function H6Heading({ children }: Heading) {
  return (
    <H6 id={children} css={commonStyle}>
      <Anchor href={`#${children}`} aria-hidden="true" tabIndex="-1">
        <IconHashLink />
      </Anchor>
      {children}
    </H6>
  );
}

export default {
  h1: H1Heading,
  h2: H2Heading,
  h3: H3Heading,
  h4: H4Heading,
  h5: H5Heading,
  h6: H6Heading,
};
