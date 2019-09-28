import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';

import { clamp } from '@utils';

export interface IProgress {
  contentHeight: number;
}

function Progress({ contentHeight }: IProgress) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const percentComplete = (window.scrollY / contentHeight) * 100;

      setProgress(clamp(+percentComplete.toFixed(2), -2, 104));
    }, 20);

    if (contentHeight) {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, [contentHeight]);

  return (
    <ProgressContainer tabIndex={-1}>
      <Introduction
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Arrow />
      </Introduction>
      <Trackline aria-hidden="true">
        <ProgressLine style={{ transform: `translateY(${progress}%)` }} />
      </Trackline>
      <Introduction
        style={{
          top: 'unset',
          transform: 'rotate(180deg)',
          paddingBottom: '3px',
        }}
        onClick={() => {
          window.scrollTo(0, document.body.scrollHeight - 1000);
        }}
      >
        <Arrow />
      </Introduction>
    </ProgressContainer>
  );
}

export default Progress;

const ProgressContainer = styled.div`
  position: relative;
  outline: none;
  user-select: none;
`;

const Introduction = styled.div`
  position: absolute;
  top: -26px;
  left: -4px;
  &:hover {
    cursor: pointer;
  }
  svg path {
    fill: ${p => p.theme.colors.progress};
  }
`;

const Trackline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(88vh - 40px);
  max-height: 425px;
  width: 1px;
  background-color: ${p => p.theme.colors.track};
  opacity: 0.6;
  overflow: hidden;
`;

const ProgressLine = styled.div`
  position: absolute;
  height: 100%;
  top: -100%;
  width: 1px;
  background-color: ${p => p.theme.colors.progress};
  left: 0;
`;

const Arrow = () => (
  <svg
    width="9"
    height="12"
    viewBox="0 0 9 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.85355 0.646446C4.65829 0.451184 4.34171 0.451184 4.14645 0.646446L0.964467 3.82843C0.769204 4.02369 0.769204 4.34027 0.964467 4.53553C1.15973 4.7308 1.47631 4.7308 1.67157 4.53553L4.5 1.70711L7.32843 4.53553C7.52369 4.7308 7.84027 4.7308 8.03553 4.53553C8.2308 4.34027 8.2308 4.02369 8.03553 3.82843L4.85355 0.646446ZM5 12L5 1L4 1L4 12L5 12Z" />
  </svg>
);
