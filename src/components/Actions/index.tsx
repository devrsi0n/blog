import React from 'react';
import styled from '@emotion/styled';
import { IconHeart, IconHandclap } from '@components/Icons';
// import {IconShare} from '@components/Icons';
import Action from './Action';

interface Props {
  like: number;
  handclap: number;
  // share: number;
  handleAction(type: 'like' | 'handclap' | 'share'): void;
}

function Actions({
  like,
  handclap,
  // share,
  handleAction,
}: Props) {
  return (
    <Section>
      <Action
        type="like"
        count={like}
        color="rgb(224, 36, 94)"
        handleClick={() => handleAction('like')}
        style={{
          padding: 0,
        }}
      >
        <IconHeart width={46} fill="rgb(224, 36, 94)" />
      </Action>
      <Action
        type="handclap"
        count={handclap}
        color="rgb(29, 161, 242)"
        handleClick={() => handleAction('handclap')}
      >
        <IconHandclap width={26} />
      </Action>
      {/* <Action
        type="share"
        count={share}
        color="rgb(23, 191, 99)"
        handClick={() => handleAction('share')}
      >
        <IconShare width={24} />
      </Action> */}
    </Section>
  );
}

export default React.memo(Actions);

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    margin: 10px 0;
  }
`;
