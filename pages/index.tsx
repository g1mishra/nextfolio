import CrossSvg from '@components/cross-svg';
import { HighlightBoxBG1 } from '@components/highlight-box';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <main className="flex flex-1 items-center p-4 h-full sm:min-h-[500px]">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          Jeevan Kumar - Full stack web Developer, youtuber & mentor
        </title>
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

      <div className="flex w-full relative justify-center items-center overflow-hidden mt-7 gap-14 sm:gap-28 flex-wrap">
        <div className="flex flex-col h-full grow sm:grow-0 justify-between sm:h-max sm:self-center gap-14 sm:gap-16">
          <div className="self-center w-full flex flex-col">
            <p className="text-white">Hi all. I am</p>
            <p className="text-white text-[58px] leading-[100%] mt-2 -ml-0.5">
              Jeevan Kumar
            </p>
            <p className="text-[#4D5BCE] text-xl sm:text-3xl flex mt-0.5">
              &gt; Full-stack developer
            </p>
          </div>
          <div className="">
            <p className="hidden sm:block mt-0.5">
              {'// complete the game to continue'}
            </p>
            <p className="hidden sm:block mt-0.5">
              {'// you can also see it on my Github page'}
            </p>
            <p className="block sm:hidden mt-0.5">
              {'// find my profile on Github:'}
            </p>
            <p className="mt-2 break-all">
              <span className="text-[#4D5BCE]">const </span>{' '}
              <span className="text-[#43D9AD]">githubLink </span>
              <span className="text-white"> = </span>
              <a
                className="text-[#E99287]"
                href="https://github.com/example/url"
              >
                “https://github.com/example/url”
              </a>
            </p>
          </div>
          {/* <button>Try game</button> */}
        </div>
        <div className="w-full h-[300px] mb-2 sm:w-[500px] sm:h-[475px] p-1 bg-gameBox border border-[#0C1616] backdrop-blur-[32px] rounded-lg">
          <HighlightBoxBG1 className="-z-[1] flex absolute w-full h-full sm:scale-110" />
          <CrossSvg className="top-2 left-2" />
          <CrossSvg className="bottom-2 left-2" />
          <CrossSvg className="top-2 right-2" />
          <CrossSvg className="bottom-2 right-2" />
        </div>
      </div>
    </main>
  );
};

export default Home;
