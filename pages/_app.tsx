import { AboutLayoutType } from '@layout/about-layout';
import RootLayout from '@layout/rootlayout';
import '@styles/globals.css';
import type { AppProps } from 'next/app';

type MyAppProps = AppProps & { Component: { getLayout: AboutLayoutType } };

function MyApp({ Component, pageProps }: MyAppProps) {
  if (Component.getLayout) {
    return (
      <RootLayout>
        <Component.getLayout>
          <Component {...pageProps} />
        </Component.getLayout>
      </RootLayout>
    );
  }
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
