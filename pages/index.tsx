import CrossSvg from '@components/cross-svg';
import MemoryGame from '@components/game/memory-game';
import { HighlightBoxBG1 } from '@components/highlight-box';
import type { NextPage } from 'next';
import Head from 'next/head';

export const scrollIntoId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const Home: NextPage = () => {
  return (
    <main className="flex w-full h-[calc(100vh-8rem)] flex-col sm:flex-row sm:justify-center sm:items-center gap-8 sm:gap-28 p-4 pb-8 overflow-y-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Jeevan Kumar - Full stack web Developer, youtuber & mentor</title>
        <meta
          name="description"
          content="I'm an enthusiastic, self-taught full-stack web developer from India."
        />
        <meta property="og:url" content="https://g1mishra.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jeevan Kumar" />
        <meta
          property="og:title"
          content="Jeevan Kumar - Full stack web Developer, youtuber & mentor"
        />
        <meta
          property="og:description"
          content="I'm an enthusiastic, self-taught full-stack web developer from India."
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image" content="/og_s.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="g1mishra.dev" />
        <meta property="twitter:url" content="https://g1mishra.dev/" />
        <meta
          name="twitter:title"
          content="Jeevan Kumar - Full stack web Developer, youtuber & mentor"
        />
        <meta
          name="twitter:description"
          content="I'm an enthusiastic, self-taught full-stack web developer from India."
        />
        <meta name="twitter:image" content="/og.png" />
      </Head>

      <div className="flex flex-col min-h-[calc(100vh-14rem)] sm:min-h-max justify-around gap-20 relative">
        <div className="flex flex-[2] justify-center flex-col">
          <p className="text-white">Hi there 👋 I am</p>
          <p className="text-white text-[62px] leading-[100%] mt-2 -ml-1">Jeevan Kumar</p>
          <p className="text-[#43D9AD] text-xl sm:text-2xl mt-2">&gt; Full-stack developer</p>
          <p className="text-[#92b9b1] text-xl sm:text-2xl mt-2">&gt; Youtuber & mentor</p>
        </div>
        <div className="flex-[1] flex flex-col justify-center">
          <p className="mt-0.5">{'// play the game below 😍'}</p>
          <p className="mt-0.5">{'// find it on my github page.'}</p>
          <p className="mt-2 break-all">
            <span className="text-[#4D5BCE]">const </span>{' '}
            <span className="text-[#229977]">githubLink </span>
            <span className="text-white"> = </span>
            <a className="text-[#E99287]" href="https://github.com/g1mishra/g1mishra.dev">
              `https://github.com/g1mishra.dev`
            </a>
          </p>
        </div>
      </div>
      <div>
        <button
          className="sm:hidden animate-bounce bg-secondaryBG mx-auto w-10 h-10 mb-2 flex justify-center items-center rounded-full border border-light"
          onClick={() => scrollIntoId('gameBoard')}
        >
          <svg
            className="w-5 h-5 text-[#43D9AD]"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
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
