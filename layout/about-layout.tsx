import GistView from '@components/about-me/gist-view';
import AboutSidebar from '@components/about-me/sidebar';
import { FC, ReactElement } from 'react';

interface IAboutLayoutProps {
  children: ReactElement;
}

const AboutLayout: FC<IAboutLayoutProps> = ({ children }) => {
  const { data } = children.props;
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

export type AboutLayoutType = typeof AboutLayout;

export default AboutLayout;
