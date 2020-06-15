import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

import NavigationFooter from './Navigation.Footer';
import NavigationHeader from './Navigation.Header';
import ArticlesContextProvider from '../sections/articles/Articles.List.Context';
import useStats from '../hooks/useStats';
import useHasMounted from '../hooks/useHasMounted';

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
}

export const siteTitle = 'Next.js Sample Website';

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Scroll to hash link element when user navigate to or refresh the page
    if (window.location.hash.length > 1) {
      const id = window.location.hash.slice(1);
      const elm = document.getElementById(decodeURIComponent(id));
      if (!elm) {
        return;
      }
      const rect = elm.getBoundingClientRect();
      const offset = rect.top + window.pageYOffset + 65;
      window.scrollTo(0, offset);
    }
  }, []);

  useStats();

  const hadMounted = useHasMounted();

  return (
    <ArticlesContextProvider>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container>
        <NavigationHeader />
        {hadMounted ? (
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.main
              key={window.location.pathname}
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {children}
            </motion.main>
          </AnimatePresence>
        ) : (
          children
        )}

        <NavigationFooter />
      </Container>
    </ArticlesContextProvider>
  );
}

export default Layout;

const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.background};
  transition: ${p => p.theme.colorModeTransition};
  min-height: 100vh;
`;
