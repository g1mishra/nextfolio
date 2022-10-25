import Footer from '@components/footer/footer';
import Header from '@components/header';
import { GTM_ID } from '@lib/gtm';
import Script from 'next/script';
import React from 'react';

type Props = {
  children: React.ReactElement;
};

const RootLayout = (props: Props) => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3rem)] relative border-light border rounded-lg bg-secondaryBG overflow-hidden">
      <Header />
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
