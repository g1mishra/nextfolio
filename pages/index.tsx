import CrossSvg from '@components/cross-svg';
import MemoryGame from '@components/game/memory-game';
import { HighlightBoxBG1 } from '@components/highlight-box';
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
      className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:flex-wrap gap-y-[5vh] gap-x-[5vw] p-4 sm:pt-12"
    >
      <NextHead
        title="Jeevan Kumar - Full stack web Developer, youtuber & mentor"
        desc="Full-Stack Web Developer based in India with 2.5+ years experience. I talk about technology, coding, and development on my YouTube channel."
      />
      <div
        ref={divRef}
        className="flex flex-col display-h sm:min-h-max justify-around gap-20 relative"
      >
        <div className="flex flex-col justify-center min-h-max h-[60%]">
          <p className="text-white">Hi there 👋 I am</p>
          <h1 className="text-white text-[62px] leading-[100%] mt-2 -ml-1">Jeevan Kumar</h1>
          <h2 className="text-[#43D9AD] text-xl sm:text-2xl mt-2">&gt; Full-stack developer</h2>
          <h3 className="text-[#92b9b1] text-xl sm:text-2xl mt-2">&gt; Youtuber & mentor</h3>
        </div>
        <div className="flex flex-col justify-center min-h-max h-[40%]">
          <p className="mt-0.5">{'// play the game below 😍'}</p>
          <p className="mt-0.5">{'// find it on my github page.'}</p>
          <p className="mt-2 break-all">
            <span className="text-keyword">const </span>{' '}
            <span className="text-var">githubLink </span>
            <span className="text-white"> = </span>
            <a className="text-string" href="https://github.com/g1mishra/g1mishra.dev">
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
