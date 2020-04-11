import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';
import { useColorMode } from 'theme-ui';
import throttle from 'lodash/throttle';

import Section from '@components/Section';
import Logo from '@components/Logo';
import useIsDarkMode from '@hooks/useIsDark';
import mediaqueries from '@styles/media';
import Icons from '@components/Icons';
import {
  copyToClipboard,
  getWindowDimensions,
  getBreakpointFromTheme,
} from '@utils';

const strNavToHome = '回到主页';

interface NavigationHeaderPropos {
  location: Location;
}

function NavigationHeader({ location }: NavigationHeaderPropos) {
  const [showBackArrow, setShowBackArrow] = useState(false);
  const [previousPath, setPreviousPath] = useState('/');
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [detached, seDetached] = useState(false);
  const [isDark] = useIsDarkMode();

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

  return (
    <RootContainer detached={detached} isDark={isDark}>
      <NavSection as="header">
        <NavContainer>
          <LogoLink
            to="/"
            data-a11y="false"
            title={strNavToHome}
            aria-label={strNavToHome}
            back={showBackArrow ? 'true' : 'false'}
          >
            {showBackArrow && (
              <BackArrowIconContainer>
                <Icons.ChevronLeft fill={fill} />
              </BackArrowIconContainer>
            )}
            <Logo fill={fill} />
            <Hidden>{strNavToHome}</Hidden>
          </LogoLink>
          <NavControls>
            {showCloseButton ? (
              <button
                type="button"
                onClick={() => navigate(previousPath)}
                title={strNavToHome}
                aria-label={strNavToHome}
              >
                <Icons.Ex fill={fill} />
              </button>
            ) : (
              <>
                <SharePageButton />
                <DarkModeToggle />
              </>
            )}
          </NavControls>
        </NavContainer>
      </NavSection>
    </RootContainer>
  );
}

export default NavigationHeader;

const strActiveLightMode = '打开 Light Mode';
const strActiveDarkMode = '打开 Dark Mode';

function DarkModeToggle() {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  function toggleColorMode(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    setColorMode(isDark ? `default` : `dark`);
  }

  return (
    <IconWrapper
      isDark={isDark}
      onClick={toggleColorMode}
      data-a11y="false"
      aria-label={isDark ? strActiveLightMode : strActiveDarkMode}
      title={isDark ? strActiveLightMode : strActiveDarkMode}
    >
      <MoonOrSun isDark={isDark} />
      <MoonMask isDark={isDark} />
    </IconWrapper>
  );
}

const strCopyUrlToClipboard = '复制 URL 到剪切板';

function SharePageButton() {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const fill = isDark ? '#fff' : '#000';

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(window.location.href);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  }

  return (
    <IconWrapper
      isDark={isDark}
      onClick={copyToClipboardOnClick}
      data-a11y="false"
      aria-label={strCopyUrlToClipboard}
      title={strCopyUrlToClipboard}
    >
      <Icons.Link fill={fill} />
      <ToolTip isDark={isDark} hasCopied={hasCopied}>
        复制成功
      </ToolTip>
    </IconWrapper>
  );
}

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
  overflow: hidden;
  z-index: 99;

  &::before {
    background: ${p => p.theme.colors.blur};
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
    border: 2px solid ${p => p.theme.colors.accent};
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

const ToolTip = styled.span<{ isDark: boolean; hasCopied: boolean }>`
  position: absolute;
  padding: 4px 13px;
  background: ${p => (p.isDark ? '#000' : 'rgba(0,0,0,0.1)')};
  color: ${p => (p.isDark ? '#fff' : '#000')};
  border-radius: 5px;
  font-size: 14px;
  top: -35px;
  opacity: ${p => (p.hasCopied ? 1 : 0)};
  transform: ${p => (p.hasCopied ? 'translateY(-3px)' : 'none')};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${p => (p.isDark ? '#000' : 'rgba(0,0,0,0.1)')};
  }
`;

const IconWrapper = styled.button<{ isDark: boolean }>`
  opacity: 0.5;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  margin-left: 30px;

  &:hover {
    opacity: 1;
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    border: 2px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  ${mediaqueries.tablet`
    display: inline-flex;
    transform: scale(0.708);
    margin-left: 10px;

    &:hover {
      opacity: 0.5;
    }
  `}
`;

// This is based off a codepen! Much appreciated to: https://codepen.io/aaroniker/pen/KGpXZo
const MoonOrSun = styled.div<{ isDark: boolean }>`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${p => (p.isDark ? '4px' : '2px')} solid
    ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.primary};
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
    border: 2px solid ${p => p.theme.colors.primary};
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
    box-shadow: 0 -23px 0 ${p => p.theme.colors.primary},
      0 23px 0 ${p => p.theme.colors.primary},
      23px 0 0 ${p => p.theme.colors.primary},
      -23px 0 0 ${p => p.theme.colors.primary},
      15px 15px 0 ${p => p.theme.colors.primary},
      -15px 15px 0 ${p => p.theme.colors.primary},
      15px -15px 0 ${p => p.theme.colors.primary},
      -15px -15px 0 ${p => p.theme.colors.primary};
    transform: scale(${p => (p.isDark ? 1 : 0)});
    transition: all 0.35s ease;

    ${p => mediaqueries.tablet`
      transform: scale(${p.isDark ? 0.92 : 0});
    `}
  }
`;

const MoonMask = styled.div<{ isDark: boolean }>`
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: ${p => p.theme.colors.background};
  transform: translate(${p => (p.isDark ? '14px, -14px' : '0, 0')});
  opacity: ${p => (p.isDark ? 0 : 1)};
  transition: ${p => p.theme.colorModeTransition}, transform 0.45s ease;
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
