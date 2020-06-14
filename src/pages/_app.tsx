import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Layout from '../components/Layout';
import { Global } from '@emotion/core';
import { globalStyles } from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
