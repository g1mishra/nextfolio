import RootLayout from '@layout/rootlayout';
import { GTM_ID } from '@lib/gtm';
import { getProfile, getSEO } from '@lib/config';
import '@styles/globals.css';

import { Fira_Code, Source_Code_Pro } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
});

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const profile = getProfile();
  const seo = getSEO();
  const keywords = seo.keywords && seo.keywords.length > 0
    ? seo.keywords.join(', ')
    : 'HTML, CSS, JavaScript, React, Next.js, developer, portfolio';

  return (
    <html lang="en" className={`${firaCode.className} ${sourceCodePro.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* <!-- possible content values: default, black or black-translucent --> */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="author" content={profile.name} />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta name="theme-color" content="#011627" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          media=""
        />
      </head>
      <body>
        <RootLayout>{children}</RootLayout>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}
