/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';
import IconWrapper from '../IconWrapper';

const strActiveLightMode = '打开 Light Mode';
const strActiveDarkMode = '打开 Dark Mode';

export default function ModeSwitch() {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  const toggleColorMode = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      setColorMode(isDark ? `default` : `dark`);
    },
    [isDark, setColorMode]
  );

  return (
    <IconWrapper
      isDark={isDark}
      onClick={toggleColorMode}
      data-a11y="false"
      aria-label={isDark ? strActiveLightMode : strActiveDarkMode}
      title={isDark ? strActiveLightMode : strActiveDarkMode}
    >
      <MoonOrSun
        isDark={isDark}
        sx={{
          bg: 'primary',
          border: theme =>
            `${isDark ? '4px' : '2px'} solid ${theme.colors.primary}`,
          '&::before': {
            border: theme => `2px solid ${theme.colors.primary}`,
          },
          '&::after': {
            boxShadow: theme => `0 -23px 0 ${theme.colors.primary},
            0 23px 0 ${theme.colors.primary},
            23px 0 0 ${theme.colors.primary},
            -23px 0 0 ${theme.colors.primary},
            15px 15px 0 ${theme.colors.primary},
            -15px 15px 0 ${theme.colors.primary},
            15px -15px 0 ${theme.colors.primary},
            -15px -15px 0 ${theme.colors.primary}`,
          },
        }}
      />
      <MoonMask
        isDark={isDark}
        sx={{
          bg: 'background',
          transition: theme =>
            `${theme.colorModeTransition}, transform 0.45s ease`,
        }}
      />
    </IconWrapper>
  );
}

const MoonMask = styled.div<{ isDark: boolean }>`
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  transform: translate(${p => (p.isDark ? '14px, -14px' : '0, 0')});
  opacity: ${p => (p.isDark ? 0 : 1)};
`;

// This is based off a codepen! Much appreciated to: https://codepen.io/aaroniker/pen/KGpXZo
const MoonOrSun = styled.div<{ isDark: boolean }>`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transform: scale(${p => (p.isDark ? 0.55 : 1)});
  transition: all 0.45s ease;
  overflow: ${p => (p.isDark ? 'visible' : 'hidden')};

  &::before {
    content: '';
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    transform: translate(${p => (p.isDark ? '14px, -14px' : '0, 0')});
    opacity: ${p => (p.isDark ? 0 : 1)};
    transition: transform 0.45s ease;
  }

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(${p => (p.isDark ? 1 : 0)});
    transition: all 0.35s ease;

    ${p => mediaqueries.tablet`
      transform: scale(${p.isDark ? 0.92 : 0});
    `}
  }
`;
