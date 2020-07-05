/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';
import { ReactNode } from 'react';

const Blockquote = styled.blockquote`
  transition: ${p => p.theme.colorModeTransition};
  margin: 15px auto 50px;
  font-style: italic;

  ${mediaqueries.tablet`
    margin: 10px auto 35px;
  `};

  & > p {
    max-width: 880px !important;
    padding-right: 100px;
    padding-bottom: 0;
    width: 100%;
    margin: 0 auto;
    font-size: 36px;
    line-height: 1.32;
    font-weight: bold;

    ${mediaqueries.tablet`
      font-size: 26px;
      padding: 0 180px;
    `};

    ${mediaqueries.phablet`
      font-size: 36px;
      padding: 0 20px 0 40px;
    `};
  }
`;

interface BlockquoteCompProps {
  children: ReactNode;
}

export default function BlockquoteComp(props: BlockquoteCompProps) {
  return (
    <Blockquote
      {...props}
      sx={{
        color: 'text',
        fontFamily: 'serif',
        '& > p': {
          fontFamily: 'serif',
        },
      }}
    />
  );
}
