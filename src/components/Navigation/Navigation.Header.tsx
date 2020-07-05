/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';
import throttle from 'lodash/throttle';

import Section from '@components/Section';
import Logo from '@components/Logo';
import useIsDarkMode from '@hooks/useIsDark';
import mediaqueries from '@styles/media';
import { IconChevronLeft, IconEx } from '@components/Icons';
import { getWindowDimensions, getBreakpointFromTheme } from '@utils';
import ShareButton from '@components/ShareButton';
import ModeSwitch from '../ModeSwitch';

const strNavToHome = '回到主页';

interface NavigationHeaderPropos {
  location: Location;
}

function NavigationHeader({ location }: NavigationHeaderPropos) {
  const [showBackArrow, setShowBackArrow] = useState(false);
  const [previousPath, setPreviousPath] = useState('/');
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [detached, seDetached] = useState(false);
  const { isDark } = useIsDarkMode();

  const [colorMode] = useColorMode();
  const fill = colorMode === 'dark' ? '#fff' : '#000';

  useEffect(() => {
    const listener = throttle(() => {
      if (window.scrollY > 2) {
        seDetached(true);
      } else {
        seDetached(false);
      }
    }, 50);
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  useEffect(() => {
    const { width } = getWindowDimensions();
    const phablet = getBreakpointFromTheme('phablet');

    const prev = localStorage.getItem('previousPath');
    const previousPathWasHomepage =
      prev === '/' || (prev && prev.includes('/page/'));
    const isArticle = !location.pathname.includes('/article/');

    setShowBackArrow(previousPathWasHomepage && isArticle && width > phablet);
    setShowCloseButton(
      previousPathWasHomepage && isArticle && width <= phablet
    );
    setPreviousPath(prev);
  }, [location.pathname]);

  const handleClick = useCallback(() => navigate(previousPath), [previousPath]);

  return (
    <RootContainer
      detached={detached}
      isDark={isDark}
      sx={{
        '&::before': {
          background: 'blur',
          transition: theme => theme.colorModeTransition,
        },
      }}
    >
      <NavSection as="header">
        <NavContainer>
          <LogoLink
            to="/"
            data-a11y="false"
            title={strNavToHome}
            aria-label={strNavToHome}
            back={showBackArrow ? 'true' : 'false'}
            sx={{
              '&[data-a11y="true"]:focus::after': {
                borderColor: 'accent',
              },
            }}
          >
            {showBackArrow && (
              <BackArrowIconContainer>
                <IconChevronLeft fill={fill} />
              </BackArrowIconContainer>
            )}
            <Logo fill={fill} />
            <Hidden>{strNavToHome}</Hidden>
          </LogoLink>
          <NavControls>
            {showCloseButton ? (
              <button
                type="button"
                onClick={handleClick}
                title={strNavToHome}
                aria-label={strNavToHome}
              >
                <IconEx fill={fill} />
              </button>
            ) : (
              <React.Fragment>
                <ShareButton />
                <ModeSwitch />
              </React.Fragment>
            )}
          </NavControls>
        </NavContainer>
      </NavSection>
    </RootContainer>
  );
}

export default NavigationHeader;

const RootContainer = styled.div<{ detached: boolean; isDark: boolean }>`
  position: sticky;
  top: 0;
  width: 100%;
  /* https://brumm.af/shadows */
  box-shadow: ${p => {
    let shadow = 'none';
    if (p.detached) {
      if (p.isDark) {
        shadow = `0 2.1px 2px rgba(255, 255, 255, 0.016),
    0 6.1px 7.8px rgba(255, 255, 255, 0.026),
    0 22px 51px rgba(255, 255, 255, 0.05)`;
      } else {
        shadow = `0 2.1px 2px rgba(0, 0, 0, 0.016),
    0 6.1px 7.8px rgba(0, 0, 0, 0.026),
    0 22px 51px rgba(0, 0, 0, 0.05)`;
      }
    }
    return shadow;
  }};
  overflow: visible;
  z-index: 99;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: saturate(180%) blur(10px);
    /* filter: blur(10px); */
  }

  ${mediaqueries.phablet`
    position: relative;
    top: unset;
    box-shadow: none;

    &::before {
      backdrop-filter: none;
    }
  `}
`;

const NavSection = styled(Section)`
  background: inherit;
`;

const BackArrowIconContainer = styled.div`
  transition: 0.2s transform var(--ease-out-quad);
  opacity: 0;
  padding-right: 30px;
  animation: fadeIn 0.3s linear forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  ${mediaqueries.desktop_medium`
    display: none;
  `}
`;

const NavContainer = styled.nav`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  height: 65px;
  user-select: none;
  -webkit-touch-callout: none;

  ${mediaqueries.phablet`
    height: 120px;
  `}
`;

const LogoLink = styled(Link)<{ back: string }>`
  position: relative;
  display: flex;
  align-items: center;
  left: ${p => (p.back === 'true' ? '-54px' : 0)};

  ${mediaqueries.desktop_medium`
    left: 0
  `}

  &[data-a11y="true"]:focus::after {
    content: '';
    position: absolute;
    left: -10%;
    top: -30%;
    width: 120%;
    height: 160%;
    border: 2px solid;
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  &:hover {
    ${BackArrowIconContainer} {
      transform: translateX(-3px);
    }
  }
`;

const NavControls = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${mediaqueries.phablet`
    right: -5px;
  `}
`;

const Hidden = styled.span`
  position: absolute;
  display: inline-block;
  opacity: 0;
  width: 0px;
  height: 0px;
  visibility: hidden;
  overflow: hidden;
`;
