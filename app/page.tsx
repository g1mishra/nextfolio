import { generateMetadata } from '@components/next-head';
import TypedEffect from '@components/TypedEffect';
import { BIO_TEXT } from '@lib/constants';
import type { Metadata, NextPage } from 'next';
import HomePageContainer from './container';

export const metadata: Metadata = generateMetadata({
  canonical: 'https://g1mishra.dev',
  title: 'Jeevan Kumar - Full stack web developer, youtuber & mentor',
  desc: 'Full-Stack Web Developer based in India with more than 3 years of experience and worked for 3+ early-stage companies.',
});

const Home: NextPage = () => {
  return (
    <HomePageContainer>
      <h1 className="sr-only">{BIO_TEXT}</h1>
      <div className="flex flex-col justify-center min-h-max mt-[5vh] sm:mt-0">
        <p className="text-white">Hi there &#128075; I am</p>
        <p className="text-white text-[62px] leading-[100%] mt-2 -ml-1">Jeevan Kumar</p>
        <TypedEffect
          strings={[
            '> Full-stack developer',
            '> Youtuber & mentor',
            '> React enthusiast',
            '> Next.js expert',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="text-[#43D9AD] text-xl sm:text-2xl mt-2"
        />
      </div>
      <div className="flex flex-col justify-center min-h-max sm:mt-[5vh]">
        <p className="mt-0.5 hidden sm:block">{'// have fun with the game 😍'}</p>
        <p className="mt-0.5 sm:hidden">{'// play the game below 😍'}</p>
        <p className="mt-0.5">{'// find it on my github page.'}</p>
        <p className="mt-2 break-all">
          <span className="text-keyword">const </span> <span className="text-var">githubLink </span>
          <span className="text-white"> = </span>
          <a className="text-string" href="https://github.com/g1mishra/nextfolio">
            `https://github.com/g1mishra/nextfolio`
          </a>
        </p>
      </div>
    </HomePageContainer>
  );
};

export default Home;
