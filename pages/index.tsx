import CrossSvg from '@components/cross-svg';
import MemoryGame from '@components/game/memory-game';
import { HighlightBoxBG1 } from '@components/highlight-box';
import ScrollIcon from '@components/scroll-icon';
import { isElementInViewport, scrollIntoviewByRef, scrollToId } from '@lib/common';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useRef, useState } from 'react';

const Home: NextPage = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const divRef = useRef<any>(null);

  const scrollCB = useCallback(() => {
    const elem = document.getElementById('gameBoard');
    if (elem && isElementInViewport(elem)) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  }, []);

  useEffect(() => {
    document.getElementsByTagName('main')[0]?.addEventListener('scroll', scrollCB);
    return () => {
      document.getElementsByTagName('main')[0]?.removeEventListener('scroll', scrollCB);
    };
  }, [scrollCB]);

  return (
    <main className="flex flex-col sm:flex-row sm:justify-center sm:items-center h-[calc(100vh-8rem)] relative gap-y-[5vh] gap-x-[5vw] p-4 pb-8 sm:pt-12 overflow-y-auto sm:flex-wrap">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Jeevan Kumar - Full stack web Developer, youtuber & mentor</title>
        <meta
          name="description"
          content="Full-Stack Web Developer based in India with 2.5+ years experience. I talk about technology, coding, and development on my YouTube channel."
        />
        <meta property="og:url" content="https://g1mishra.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Full-Stack Developer, India - Jeevan Kumar" />
        <meta
          property="og:title"
          content="Jeevan Kumar - Full stack web Developer, youtuber & mentor"
        />
        <meta
          property="og:description"
          content="Full-Stack Web Developer based in India with 2.5+ years experience. I talk about technology, coding, and development on my YouTube channel."
        />
        <meta property="og:image" content="https://g1mishra.dev/og.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="g1mishra.dev" />
        <meta property="twitter:url" content="https://g1mishra.dev/" />
        <meta name="twitter:image" content="https://g1mishra.dev/og-small.png" />
        <meta
          name="twitter:title"
          content="Jeevan Kumar - Full stack web Developer, youtuber & mentor"
        />
        <meta
          name="twitter:description"
          content="Full-Stack Web Developer based in India with 2.5+ years experience. I talk about technology, coding, and development on my YouTube channel."
        />
      </Head>
      <div
        ref={divRef}
        className="flex flex-col min-h-[calc(100vh-11rem)] sm:min-h-max justify-around gap-20 relative"
      >
        <div className="flex flex-col justify-center min-h-max h-[60%]">
          <p className="text-white">Hi there 👋 I am</p>
          <p className="text-white text-[62px] leading-[100%] mt-2 -ml-1">Jeevan Kumar</p>
          <p className="text-[#43D9AD] text-xl sm:text-2xl mt-2">&gt; Full-stack developer</p>
          <p className="text-[#92b9b1] text-xl sm:text-2xl mt-2">&gt; Youtuber & mentor</p>
        </div>
        <div className="flex flex-col justify-center min-h-max h-[40%]">
          <p className="mt-0.5">{'// play the game below 😍'}</p>
          <p className="mt-0.5">{'// find it on my github page.'}</p>
          <p className="mt-2 break-all">
            <span className="text-[#4D5BCE]">const </span>{' '}
            <span className="text-[#229977]">githubLink </span>
            <span className="text-white"> = </span>
            <a className="text-[#E99287]" href="https://github.com/g1mishra/g1mishra.dev">
              `https://github.com/g1mishra.dev`
            </a>
            <span className="block h-10 w-10" />
          </p>
        </div>
      </div>
      <ScrollIcon
        showTopArrow={showTopBtn}
        handleScroll={() => {
          if (showTopBtn) {
            if (divRef.current !== null) scrollIntoviewByRef(divRef.current);
          } else {
            scrollToId('gameBoard');
          }
        }}
      />
      <div
        id="gameBoard"
        className="w-full min-h-[375px] mb-2 relative overflow-hidden sm:w-[475px] px-3 sm:px-6 py-8 bg-gameBox backdrop-blur-[32px] rounded-lg"
      >
        <HighlightBoxBG1 className="-z-[1] flex absolute inset-0 scale-125" />
        <CrossSvg className="top-2 left-2" />
        <CrossSvg className="bottom-2 left-2" />
        <CrossSvg className="top-2 right-2" />
        <CrossSvg className="bottom-2 right-2" />
        <MemoryGame />
      </div>
    </main>
  );
};

export default Home;
