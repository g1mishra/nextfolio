import { GTM_ID } from '@lib/gtm';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="author" content="Jeevan Kumar" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, Next.js, express.js, python, developer, portfolio, g1mishra, checktolearn"
        />
        <meta name="theme-color" content="#011627" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
