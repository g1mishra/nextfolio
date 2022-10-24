import '@styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '@layout/rootlayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
