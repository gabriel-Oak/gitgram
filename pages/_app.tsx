import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Head from 'next/head';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../src/store';
import theme from '../src/utils/theme';

interface Props {
  Component: any;
  pageProps: any;
}

const App: FC<Props> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" 
        />
        
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/icon?family=Material+Icons" 
        />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
