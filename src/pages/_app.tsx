import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Layout from '../components/Layout';
import { Global } from '@emotion/core';
import { globalStyles } from '../styles/global';

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

  static getDerivedStateFromError(error: Error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
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
