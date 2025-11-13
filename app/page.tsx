import { generateMetadata } from '@components/next-head';
import TypedEffect from '@components/TypedEffect';
import { BIO_TEXT } from '@lib/constants';
import { getProfile, getHomePage } from '@lib/config';
import type { Metadata, NextPage } from 'next';
import HomePageContainer from './container';
import Highlights from '@components/Highlights';

const profile = getProfile();
const homePage = getHomePage();

export const metadata: Metadata = generateMetadata();

const Home: NextPage = () => {
  return (
    <main className="p-4 space-y-4">
      <HomePageContainer>
        <h1 className="sr-only">{BIO_TEXT}</h1>
        <div className="flex flex-col justify-center min-h-max mt-[5vh] sm:mt-0">
          <p className="text-white">{homePage.greeting}</p>
          <p className="text-white text-[62px] leading-[100%] mt-2 -ml-1">{profile.name}</p>
          <TypedEffect
            strings={homePage.typedStrings}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="text-[#43D9AD] text-lg\= sm:text-2xl mt-2"
          />
        </div>
        <div className="flex flex-col justify-center min-h-max sm:mt-[5vh]">
          <p className="mt-4">{homePage.githubComment}</p>
          <p className="mt-0.5 break-all">
            <span className="text-keyword">const </span>{' '}
            <span className="text-var">githubLink </span>
            <span className="text-white"> = </span>
            <a className="text-string" target="_blank" href={homePage.githubLink}>
              `{homePage.githubLink.replace('https://', '')}`
            </a>
          </p>
        </div>
      </HomePageContainer>
      <Highlights />
    </main>
  );
};

export default Home;
