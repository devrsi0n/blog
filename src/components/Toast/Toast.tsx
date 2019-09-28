import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

interface AnimationComponentProps {
  children: React.ReactElement[];
  ref: React.MutableRefObject<HTMLElement>;
  theme?: { colors: { grey: string } };
}

const FadeIn = styled.div<AnimationComponentProps>`
  background: #fafafa;
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.grey};
  font-size: 14px;
  padding: 10px 16px;
  border-radius: 2px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.35s var(--ease-in-quart) forwards;

  @keyframes fadeIn {
    0% {
      margin-top: -40px;
      opacity: 0;
    }
    100% {
      margin-top: 20px;
      opacity: 1;
    }
  }
`;

const FadeOut = styled(FadeIn)`
  animation: fadeOut 0.35s var(--ease-out-quart) forwards;

  @keyframes fadeOut {
    0% {
      margin-top: 20px;
      opacity: 1;
    }
    100% {
      margin-top: -40px;
      opacity: 0;
    }
  }
`;

export interface ToastProps {
  content: string;
  icon?: React.ReactElement;
  duration: number;
  onAnimationDone?: () => void;
}

export default function Toast({
  icon,
  content,
  duration = 1000,
  onAnimationDone,
}: ToastProps) {
  const animationEl = useRef<HTMLElement>(null);
  const [AnimationWrap, setAnimationWrap] = useState<
    React.FunctionComponent<AnimationComponentProps>
  >(FadeIn);
  useEffect(() => {
    const timerID = setTimeout(() => {
      setAnimationWrap(FadeOut);
      animationEl.current.addEventListener(
        'animationend',
        onAnimationDone,
        false
      );
    }, duration);
    return () => clearTimeout(timerID);
  }, []);
  return (
    <Container>
      <Wrapper>
        <AnimationWrap ref={animationEl}>
          {icon && <IconWrap>{icon}</IconWrap>}
          <Text>{content}</Text>
        </AnimationWrap>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 999;
`;

const IconWrap = styled.div`
  padding-right: 5px;
`;

const Text = styled.p``;
