import React, { useEffect } from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';
// import { motion, AnimatePresence } from 'framer-motion';

import NavigationFooter from '@components/Navigation/Navigation.Footer';
import NavigationHeader from '@components/Navigation/Navigation.Header';
import { globalStyles } from '@styles';
import ArticlesContextProvider from '../../sections/articles/Articles.List.Context';

// const duration = 0.35;

// const variants = {
//   initial: {
//     opacity: 0,
//   },
//   enter: {
//     opacity: 1,
//     transition: {
//       duration,
//       delay: duration,
//       when: 'beforeChildren',
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: { duration },
//   },
// };

interface LayoutProps {
  children: React.ReactNode;
  location: Location;
}

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
function Layout({ children /* location */ }: LayoutProps) {
  const [colorMode] = useColorMode();

  useEffect(() => {
    window.parent.postMessage({ theme: colorMode }, '*');
  }, [colorMode]);

  return (
    <ArticlesContextProvider>
      <Container>
        <Global styles={globalStyles} />
        <NavigationHeader />
        {/* Remove page transition since it cause Progress calculate position error */}
        {/* <AnimatePresence>
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence> */}
        {children}
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
