import AboutSidebar from '@components/about-me/sidebar';
import { fetchGist } from '@lib/gist';
import { FC, ReactElement } from 'react';
import GistView from './gist-view';

interface IAboutLayoutProps {
  children: ReactElement;
}

const AboutLayout: FC<IAboutLayoutProps> = async ({ children }) => {
  const gists = await fetchGist();
  const data = { owner: gists.owner, files: Object.values(gists.files) };
  return (
    <main className="flex flex-col sm:flex-row">
      <p className="sm:hidden px-4 py-6 text-[15px] text-white">_about-me</p>
      <AboutSidebar />
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex-1 flex flex-col lg:border-r border-light lg:overflow-hidden">
          {children}
        </div>
        <GistView data={data} />
      </div>
    </main>
  );
};

export default AboutLayout;
