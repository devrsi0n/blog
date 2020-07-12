/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import React, { useEffect } from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

import NavigationFooter from '@components/Navigation/NavigationFooter';
import NavigationHeader from '@components/Navigation/NavigationHeader';
import { globalStyles } from '@styles/index';
import ArticlesContextProvider from '@sections/articles/ArticlesListContext';
import useStats from '@hooks/useStats';

const duration = 0.25;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration },
  },
};

interface LayoutProps {
  children: React.ReactNode;
  location: Location;
}

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
function Layout({ children, location }: LayoutProps) {
  const [colorMode] = useColorMode();

  useEffect(() => {
    // Scroll to hash link element when user navigate to or refresh the page
    if (location.hash.length > 1) {
      const id = location.hash.slice(1);
      const elm = document.getElementById(decodeURIComponent(id));
      if (!elm) {
        return;
      }
      const rect = elm.getBoundingClientRect();
      const offset = rect.top + window.pageYOffset + 65;
      window.scrollTo(0, offset);
    }
  }, [location]);

  useStats(location);

  useEffect(() => {
    window.parent.postMessage({ theme: colorMode }, '*');
  }, [colorMode]);

  return (
    <ArticlesContextProvider>
      <Container
        sx={{
          backgroundColor: 'background',
          transition: theme => theme.colorModeTransition,
        }}
      >
        <Global styles={globalStyles} />
        <NavigationHeader location={location} />
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <NavigationFooter />
      </Container>
    </ArticlesContextProvider>
  );
}

export default Layout;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;
