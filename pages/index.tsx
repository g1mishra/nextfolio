import CrossSvg from '@components/cross-svg';
import MemoryGame from '@components/game/memory-game';
import { HighlightBoxBG1 } from '@components/gradient-box';
import NextHead from '@components/next-head';
import ScrollIcon from '@components/scroll-icon';
import { isElementInViewport, scrollIntoviewByRef, scrollToId } from '@lib/common';
import type { NextPage } from 'next';
import { useCallback, useRef, useState } from 'react';

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

  return (
    <main
      onScroll={scrollCB}
      className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:flex-wrap gap-y-[4vh] gap-x-[5vw] p-4"
    >
      <NextHead
        canonical="https://g1mishra.dev"
        title="Jeevan Kumar - Full stack web Developer, youtuber & mentor"
        desc={`Full-Stack Web Developer based in India with 2.5+ years of experience and worked for 3+ early-stage companies. I like to talk about technology, coding, and development on YouTube in my spare time.`}
      />
      <div
        ref={divRef}
        className="flex flex-col min-h-[calc(var(--main-h)_-_7rem)] sm:min-h-max justify-between"
      >
        <div className="flex flex-col justify-center min-h-max mt-[5vh] sm:mt-0">
          <p className="text-white">Hi there 👋 I am</p>
          <h1 className="text-white text-[62px] leading-[100%] mt-2 -ml-1">Jeevan Kumar</h1>
          <h2 className="text-[#43D9AD] text-xl sm:text-2xl mt-2">&gt; Full-stack developer</h2>
          <h3 className="text-[#92b9b1] text-xl sm:text-2xl mt-2">&gt; Youtuber & mentor</h3>
        </div>
        <div className="flex flex-col justify-center min-h-max sm:mt-[5vh]">
          <p className="mt-0.5 hidden sm:block">{'// have fun with the game 😍'}</p>
          <p className="mt-0.5 sm:hidden">{'// play the game below 😍'}</p>
          <p className="mt-0.5">{'// find it on my github page.'}</p>
          <p className="mt-2 break-all">
            <span className="text-keyword">const </span>{' '}
            <span className="text-var">githubLink </span>
            <span className="text-white"> = </span>
            <a className="text-string" href="https://github.com/g1mishra/g1mishra.dev">
              `https://github.com/g1mishra.dev`
            </a>
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
        className="w-full min-h-[375px] mb-2 relative sm:w-[475px] px-3 sm:px-6 py-8 bg-gameBox backdrop-blur-[32px] rounded-lg"
      >
        <div className="overflow-hidden absolute inset-0 -z-[1]">
          <HighlightBoxBG1 className="scale-125" />
        </div>

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
