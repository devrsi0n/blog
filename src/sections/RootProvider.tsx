import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Global } from '@emotion/core';

import theme from '../theme';
import { globalStyles } from '../styles/global';

interface RootProviderProps {
  children: React.ReactNode;
}

export default function RootProvider(props: RootProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {props.children}
    </ThemeProvider>
  );
}
