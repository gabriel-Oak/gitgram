/* eslint-disable react/jsx-props-no-spreading */
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Head from 'next/head';
import { FC } from 'react';
import theme from '../src/utils/theme';

interface Props {
  Component: any;
  pageProps: unknown;
}

const App: FC<Props> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>

    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
