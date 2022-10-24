import Footer from '@components/footer/footer';
import HighlightBox from '@components/highlight-box';
import Navbar from '@components/navbar/navbar';
import { GTM_ID } from '@lib/gtm';
import Script from 'next/script';
import React from 'react';

type Props = {
  children: React.ReactElement;
};

const RootLayout = (props: Props) => {
  return (
    <div className="h-[calc(100vh-3rem)] border-light border rounded-lg bg-secondaryBG flex flex-col">
      <Navbar />
      <HighlightBox />
      {props.children}
      <Footer />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
    </div>
  );
};

export default RootLayout;
