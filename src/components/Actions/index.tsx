import React from 'react';
import { useThemeUI } from 'theme-ui';
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
  const { theme } = useThemeUI();
  return (
    <Section>
      <Action
        type="like"
        count={like}
        color={theme.colors.like as string}
        handleClick={() => handleAction('like')}
        style={{
          padding: 0,
        }}
      >
        <IconHeart width={46} fill={theme.colors.like as string} />
      </Action>
      <Action
        type="handclap"
        count={handclap}
        color={theme.colors.handclap as string}
        handleClick={() => handleAction('handclap')}
      >
        <IconHandclap width={26} fill={theme.colors.handclap as string} />
      </Action>
      {/* <Action
        type="share"
        count={share}
        color={theme.colors.share as string}
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
