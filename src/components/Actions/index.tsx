import React from 'react';
import styled from '@emotion/styled';
import Heart from '@components/Icons/ui/Heart.Icon';
import Handclap from '@components/Icons/ui/Handclap.Icon';
// import Share from '@components/Icons/ui/Share.Icon';
import Action from './Action';

interface Props {
  like: number;
  handclap: number;
  share: number;
  handleAction(type: 'like' | 'handclap' | 'share'): void;
}

export default function Actions({
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
        handClick={() => handleAction('like')}
      >
        <Heart width={24} />
      </Action>
      <Action
        type="handclap"
        count={handclap}
        color="rgb(29, 161, 242)"
        handClick={() => handleAction('handclap')}
      >
        <Handclap width={26} />
      </Action>
      {/* <Action
        type="share"
        count={share}
        color="rgb(23, 191, 99)"
        handClick={() => handleAction('share')}
      >
        <Share width={24} />
      </Action> */}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    margin: 10px 0;
  }
`;
