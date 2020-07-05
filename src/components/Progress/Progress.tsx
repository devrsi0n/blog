/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Arrow } from '../Icons';

export interface IProgress {
  /**
   * Article content DOM height
   */
  contentHeight: number;
  progress: number;
}

interface Heading {
  text: string;
  offset: number;
  offsetPercentage: number;
}

function Progress({ contentHeight, progress }: IProgress) {
  const [headings, setHeadings] = useState<Heading[]>([]);

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
                sx={{
                  backgroundColor: theme => theme.colors.progress.bg,
                }}
                onClick={() =>
                  window.scrollTo({
                    top: heading.offset,
                    behavior: 'smooth',
                  })
                }
              >
                <ChapterProgress
                  style={individualOffset}
                  sx={{
                    backgroundColor: theme => theme.colors.text,
                  }}
                />
              </Chapter>
              <HeadingHover>
                <Heading
                  isActive={isActive}
                  onClick={() =>
                    window.scrollTo({
                      top: heading.offset,
                      behavior: 'smooth',
                    })
                  }
                  sx={{
                    color: 'text',
                  }}
                >
                  <Truncate>
                    <HeadingBackground
                      isActive={isActive}
                      sx={{
                        '&::before': {
                          backgroundColor: 'background',
                        },
                      }}
                    >
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

export default React.memo(Progress);

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
  overflow: hidden;
`;

const ChapterProgress = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
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
