import AboutContent from '@components/about-me/content';
import { CROSS_ICON } from '@components/icons';
import NextHead from '@components/next-head';
import AboutLayout, { AboutLayoutType } from '@layout/about-layout';
import { fetchGist, IGistData } from '@lib/gist';
import { aboutAtomPage } from 'atoms/aboutAtom';
import { useAtom } from 'jotai';
import type { GetStaticProps, NextPage } from 'next';

export interface IAboutProps {
  data: IGistData | null;
}

const About: NextPage<IAboutProps> & { getLayout: AboutLayoutType } = () => {
  const [currentPage] = useAtom(aboutAtomPage);

  return (
    <>
      <NextHead
        canonical="https://g1mishra.dev/about-me"
        title="About Jeevan Kumar - Past Development Experience, Interrests, Bio etc."
        desc="In a nutshell, over the last 2.5 years, I've gained development experience for over three early-stage companies. Some failed, some succeeded, and others continued to grow."
      />
      <div className="hidden sm:block border-b border-light">
        <p className="flex justify-between items-center pl-8 pr-4 py-2 max-w-max space-x-12 border-r border-light">
          <span>{currentPage}</span>
          {CROSS_ICON}
        </p>
      </div>
      <div className="flex h-full">
        <div className="px-4 flex-1 sm:h-[calc(100%-30px)] sm:p-6 relative font-[450] text-base sm:text-lg overflow-y-auto">
          <AboutContent />
        </div>
        <div className="w-6 border-light border-l hidden sm:flex p-1">
          <div className="sticky top-1 w-full h-4 bg-[#607B96]"></div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await fetchGist();
    const gists = { owner: data.owner, files: Object.values(data.files) };
    return { props: { data: gists } };
  } catch (e) {
    return { props: { data: null } };
  }
};

About.getLayout = AboutLayout;

export default About;
