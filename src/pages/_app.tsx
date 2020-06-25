import React, { ErrorInfo } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { Global } from '@emotion/core';

import theme from '../theme';
import Layout from '../components/Layout';
import { globalStyles } from '../styles/global';
import { Logger } from '../utils/logger';

const log = new Logger('pages/_app.tsx');

export default class App extends React.Component<
  AppProps,
  {
    error: boolean | Error;
  }
> {
  constructor(props: AppProps) {
    super(props);
    this.state = { error: false };
  }

  componentDidMount() {
    /* eslint-disable no-console */
    console.log(`This project was build at ${process.env.BUILD_TIMESTAMP}`);
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // logErrorToMyService(error, errorInfo);
    log.error(error);
    log.error(errorInfo.componentStack);
  }

  render() {
    if (this.state.error) {
      if (process.env.NODE_ENV !== 'production') {
        return (
          <main>
            <h1>Error in component render</h1>
            <p>{String(this.state.error)}</p>
          </main>
        );
      }
      return <h1>Something went wrong.</h1>;
    }

    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
