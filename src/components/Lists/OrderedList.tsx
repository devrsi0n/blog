/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';
import { ReactNode } from 'react';

const Ol = styled.ol`
  list-style: none;
  counter-reset: list;
  position: relative;
  padding: 15px 0 30px 30px;
  margin: 0 auto;
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
    counter-increment: list;
    content: counter(list) '.';
    font-weight: 600;
    position: absolute;
    left: -3rem;
    top: -0.3rem;
    font-size: 2rem;

    ${mediaqueries.tablet`
      left: 0;
    `};
  }
`;

interface IOrderedListProps {
  children: ReactNode;
}

export default function OrderedList(props: IOrderedListProps): JSX.Element {
  return (
    <Ol
      {...props}
      sx={{
        color: 'text',
        transition: theme => theme.colorModeTransition,
        'li::before': {
          color: 'text',
        },
      }}
    />
  );
}
