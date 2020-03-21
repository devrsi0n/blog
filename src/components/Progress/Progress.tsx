import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';

import { clamp } from '@utils';

export interface IProgress {
  /**
   * Article content DOM height
   */
  contentHeight: number;
}

interface Heading {
  text: string;
  offset: number;
  offsetPercentage: number;
}

function Progress({ contentHeight }: IProgress) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const introduction = {
      text: '引言',
      offset: 1000,
      offsetPercentage: 0,
    };
    const articleHeadings = Array.from(
      document.querySelectorAll('h2')
    ).reverse();
    const allHeadings = articleHeadings
      .map(heading => {
        const rect = heading.getBoundingClientRect();
        const offset = rect.top + window.pageYOffset;
        const text = heading.innerText;
        const offsetPercentage = (heading.offsetTop / contentHeight) * 100;

        return {
          text,
          offset,
          offsetPercentage,
        };
      })
      .reverse();
    setHeadings([introduction, ...allHeadings]);
  }, [contentHeight]);

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
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <Arrow />
      </Introduction>
      <ProgressBar>
        {headings.map((heading, index) => {
          const previousOffset = headings[index - 1]
            ? headings[index - 1].offsetPercentage
            : 0;
          const nextOffset = headings[index + 1]
            ? headings[index + 1].offsetPercentage
            : 100;

          const start = progress - heading.offsetPercentage;
          const multiplier = 100 / (nextOffset - heading.offsetPercentage);

          const individualOffset = {
            transform: `translateY(${start - 100}%)`,
            height: `${100 * multiplier}%`,
          };

          const isActive =
            progress > previousOffset &&
            progress > heading.offsetPercentage &&
            progress < nextOffset;

          return (
            <Frame key={heading.text}>
              <Chapter
                onClick={() =>
                  window.scrollTo({
                    top: heading.offset + 65,
                    behavior: 'smooth',
                  })
                }
              >
                <ChapterProgress style={individualOffset} />
              </Chapter>
              <HeadingHover>
                <Heading
                  isActive={isActive}
                  onClick={() =>
                    window.scrollTo({
                      top: heading.offset + 15,
                      behavior: 'smooth',
                    })
                  }
                >
                  <Truncate>
                    <HeadingBackground isActive={isActive}>
                      {heading.text}
                    </HeadingBackground>
                  </Truncate>
                </Heading>
              </HeadingHover>
            </Frame>
          );
        })}
      </ProgressBar>
      <Introduction
        style={{
          top: 'unset',
          transform: 'rotate(180deg)',
          paddingBottom: '3px',
        }}
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight - 1000,
            behavior: 'smooth',
          });
        }}
      >
        <Arrow />
      </Introduction>
    </ProgressContainer>
  );
}

export default Progress;

const HeadingHover = styled.div`
  opacity: 0;
  transition: opacity 0.3s linear;
`;

const ProgressContainer = styled.div<{ hint?: boolean }>`
  position: relative;
  outline: none;
  user-select: none;

  &:hover {
    ${HeadingHover} {
      opacity: 1;
    }
  }

  ${p =>
    p.hint &&
    `
    ${HeadingHover} {
      opacity: 1;
    }
  `}
`;

const Frame = styled.div`
  position: relative;
  flex: 1;
  padding-bottom: 5px;
  outline: none;
  user-select: none;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 20px;
    left: -20px;
    top: 0;
  }
`;

const Chapter = styled.div`
  position: relative;
  height: 100%;
  margin-bottom: 5px;
  background-color: ${p => p.theme.colors.progress.bg};
  overflow: hidden;
`;

const ChapterProgress = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${p => p.theme.colors.text};
  top: 0;
`;

const Truncate = styled.div`
  width: 188px;
  padding: 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HeadingBackground = styled.span<{ isActive: boolean }>`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 115%;
    max-width: 198px;
    height: 130%;
    border-radius: 5px;
    background: ${p => p.theme.colors.background};
    opacity: ${p => (p.isActive ? 0.4 : 1)};
    left: -7.5%;
    top: -15%;
    position: absolute;
    z-index: -1;
  }
`;

const Heading = styled.h6<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  padding-left: 18px;
  top: 0;
  bottom: 0;

  color: ${p => p.theme.colors.text};
  opacity: ${p => (p.isActive ? '1 !important' : 0.25)};
  font-weight: 400;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:hover ${HeadingBackground} {
    opacity: 0.4;
  }
`;

const Introduction = styled.div`
  position: absolute;
  top: -26px;
  left: -4px;
  &:hover {
    cursor: pointer;
  }
  svg path {
    fill: ${p => p.theme.colors.progress.complete};
  }
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 1px;
  height: calc(88vh - 40px);
  max-height: 520px;
  outline: none;
  user-select: none;
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
