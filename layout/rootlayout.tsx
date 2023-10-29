"use client"

import Footer from '@components/footer/footer';
import Header from '@components/header';
import { GTM_ID } from '@lib/gtm';
import Script from 'next/script';
import React, { useEffect } from 'react';
import { useWindowSize } from 'usehooks-ts';

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  const { height } = useWindowSize();

  useEffect(() => {
    document.body.style.setProperty('--device-h', `${window.innerHeight}px`);
  }, [height]);

  return (
    <div className="border border-light rounded-lg bg-secondaryBG absolute inset-4 sm:inset-6 overflow-hidden">
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
