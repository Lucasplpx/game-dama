import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { BoardProvider } from '../hooks/useBoard';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <BoardProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </BoardProvider>
    </ThemeProvider>
  );
}

export default MyApp;
