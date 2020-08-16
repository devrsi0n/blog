/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';
import { ReactNode } from 'react';

const Ul = styled.ul`
  list-style: none;
  counter-reset: list;
  position: relative;
  padding: 15px 0 30px 30px;
  margin: 0;
  font-size: 18px;

  li {
    position: relative;
    padding-bottom: 15px;

    ${mediaqueries.tablet`
      padding-left: 30px;
    `};

    ${mediaqueries.phablet`
      padding-left: 30px;
    `};

    p {
      ${mediaqueries.tablet`
        padding: 0;
      `};
    }
  }

  li > :not(ol, ul) {
    display: inline;
  }

  li::before {
    width: 3rem;
    display: inline-block;
    position: absolute;
    content: '';
    position: absolute;
    left: -30px;
    top: 8px;
    height: 8px;
    width: 8px;

    ${mediaqueries.tablet`
      left: 0;
    `};
  }
`;

interface IUnorderedListProps {
  children: ReactNode;
}

export default function UnorderedList(props: IUnorderedListProps): JSX.Element {
  return (
    <Ul
      {...props}
      sx={{
        color: 'text',
        transition: theme => theme.colorModeTransition,
        'li::before': {
          bg: 'text',
        },
      }}
    />
  );
}
