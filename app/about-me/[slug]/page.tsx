import AboutContent from '@components/about-me/content';
import { CROSS_ICON } from '@components/icons';
import { generateMetadata } from '@components/next-head';
import { IGistData } from '@lib/gist';
import { Metadata } from 'next';
import { AboutSubRoutesT } from 'types/common';

export interface IAboutProps {
  data: IGistData | null;
}

export const metadata: Metadata = generateMetadata({
  canonical: 'https://g1mishra.dev/about-me',
  title: 'About Jeevan Kumar - Past Development Experience, Interrests, Bio etc.',
  desc: "In a nutshell, over the last 3 years, I've gained development experience for over three early-stage companies. Some failed, some succeeded, and others continued to grow.",
});

export default function Page({ params }: { params: { slug: AboutSubRoutesT } }) {
  const currentPage = params.slug;
  return (
    <>
      <div className="hidden sm:block border-b border-light">
        <p className="flex justify-between items-center pl-8 pr-4 py-2 max-w-max space-x-12 border-r border-light">
          <span>{currentPage}</span>
          {CROSS_ICON}
        </p>
      </div>
      <div className="flex h-full">
        <div className="px-4 flex-1 lg:h-[calc(100%-30px)] lg:p-6 relative font-[450] text-base lg:text-lg lg:overflow-y-auto">
          <AboutContent currentPage={currentPage} />
        </div>
        <div className="w-6 border-light border-l hidden lg:flex p-1">
          <div className="sticky top-1 w-full h-4 bg-[#607B96]"></div>
        </div>
      </div>
    </>
  );
}
