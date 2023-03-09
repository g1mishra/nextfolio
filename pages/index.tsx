import { BIO_TEXT } from '@components/about-me/bio';
import GameBoard from '@components/game/game-board';
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

  function handleScroll(): void {
    if (showTopBtn) {
      if (divRef.current !== null) scrollIntoviewByRef(divRef.current);
    } else {
      scrollToId('gameBoard');
    }
  }

  return (
    <main
      onScroll={scrollCB}
      className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:flex-wrap gap-y-[4vh] gap-x-[5vw] p-4"
    >
      <NextHead
        canonical="https://g1mishra.dev"
        title="Jeevan Kumar - Full stack web developer, youtuber & mentor"
        desc={`Full-Stack Web Developer based in India with 2.5+ years of experience and worked for 3+ early-stage companies.`}
      />
      <h1 className="sr-only"> {BIO_TEXT} </h1>
      <div
        ref={divRef}
        className="flex flex-col min-h-[calc(var(--device-h)_-_14rem)] sm:min-h-max justify-between"
      >
        <div className="flex flex-col justify-center min-h-max mt-[5vh] sm:mt-0">
          <p className="text-white">Hi there 👋 I am</p>
          <p className="text-white text-[62px] leading-[100%] mt-2 -ml-1">Jeevan Kumar</p>
          <p className="text-[#43D9AD] text-xl sm:text-2xl mt-2">&gt; Full-stack developer</p>
          <p className="text-[#92b9b1] text-xl sm:text-2xl mt-2">&gt; Youtuber & mentor</p>
        </div>
        <div className="flex flex-col justify-center min-h-max sm:mt-[5vh]">
          <p className="mt-0.5 hidden sm:block">{'// have fun with the game 😍'}</p>
          <p className="mt-0.5 sm:hidden">{'// play the game below 😍'}</p>
          <p className="mt-0.5">{'// find it on my github page.'}</p>
          <p className="mt-2 break-all">
            <span className="text-keyword">const </span>{' '}
            <span className="text-var">githubLink </span>
            <span className="text-white"> = </span>
            <a className="text-string" href="https://github.com/g1mishra/nextfolio">
              `https://github.com/g1mishra/nextfolio`
            </a>
          </p>
        </div>
      </div>
      <ScrollIcon showTopArrow={showTopBtn} handleScroll={handleScroll} />
      <GameBoard />
    </main>
  );
};

export default Home;
