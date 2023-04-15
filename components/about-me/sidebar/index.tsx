import { ArrowIcon, BIO_ICON, EMAIL_ICON, FILE_ICON } from '@components/icons';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import LeftSidebar from './left-sidebar';
import { AboutSubRoutesT } from 'types/common';

interface IFileLink {
  text: AboutSubRoutesT;
  link: string;
  icon: ReactElement;
  className?: string;
  isActive?: boolean;
  // eslint-disable-next-line no-unused-vars
}

const FileLink = ({ text, link, icon, className, isActive }: IFileLink) => {
  const router = useRouter();
  return (
    <div
      className={`flex items-center py-2 cursor-pointer ${className} `}
      onClick={() => router.push(link)}
    >
      {icon}
      <p className={`text-white font-normal ml-2.5  ${isActive ? 'opacity-90' : 'opacity-50'}`}>
        {text}
      </p>
    </div>
  );
};

const handleOpenAndClose = (e: any) => {
  document.querySelectorAll('details').forEach((d) => {
    if (d.open && !d.contains(e.target)) {
      d.open = false;
    }
  });
};

export default function AboutSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();
  const currentPage = (router.query.page as AboutSubRoutesT) ?? 'bio';

  return (
    <>
      <LeftSidebar currentPage={currentPage} setIsSidebarOpen={setIsSidebarOpen} />
      {isSidebarOpen ? <LeftSidebarFileLinks currentPage={currentPage} /> : null}
    </>
  );
}

const LeftSidebarFileLinks = ({ currentPage }: { currentPage: string }) => {
  return (
    <div className="flex flex-col min-w-[18rem] max-w-full sm:max-w-max bg-secondaryBG sm:border-r border-light sm:overflow-y-auto sm:sticky left-0 top-0 bottom-0">
      <details
        open
        className="group/personal-info marker:content-[''] flex flex-col whitespace-nowrap border-b border-secondaryBG sm:border-light"
      >
        <summary className="w-full cursor-pointer select-none [&::-webkit-details-marker]:hidden">
          <div
            className="flex items-center px-4 py-2 bg-light sm:bg-secondaryBG"
            onClick={handleOpenAndClose}
          >
            <ArrowIcon className="-rotate-90 group-open/personal-info:rotate-0" />
            <p className="text-white font-normal ml-2.5 flex items-center ">personal-info</p>
          </div>
        </summary>
        <div className="px-4 pb-2">
          <div className="-mx-4 mb-2 border-t border-secondaryBG sm:border-light" />
          <FileLink
            icon={BIO_ICON}
            isActive={currentPage === 'bio'}
            text="bio"
            link="/about-me"
            className="px-4"
          />
          <FileLink
            className="px-4"
            icon={FILE_ICON}
            isActive={currentPage === 'education'}
            text="education"
            link="/about-me/education"
          />
        </div>
      </details>
      <details className="group/professional-info marker:content-[''] flex flex-col whitespace-nowrap border-b border-secondaryBG sm:border-light">
        <summary className="w-full cursor-pointer select-none [&::-webkit-details-marker]:hidden">
          <div
            className="flex items-center px-4 py-2 bg-light sm:bg-secondaryBG"
            onClick={handleOpenAndClose}
          >
            <ArrowIcon className="-rotate-90 group-open/professional-info:rotate-0" />
            <p className="text-white font-normal ml-2.5 flex items-center ">professional-info</p>
          </div>
        </summary>
        <div className="px-4">
          <div className="-mx-4 mb-2 border-t border-secondaryBG sm:border-light" />
          <FileLink
            icon={FILE_ICON}
            className="px-4"
            isActive={currentPage === 'experience'}
            text="experience"
            link="/about-me/experience"
          />
          <FileLink
            icon={FILE_ICON}
            className="px-4"
            isActive={currentPage === 'skills'}
            text="skills"
            link="/about-me/skills"
          />
        </div>
      </details>
      <ContactSection />
    </div>
  );
};

const ContactSection = () => (
  <div className="hidden sm:flex flex-col whitespace-nowrap ">
    <div className="flex items-center px-4 py-2">
      <ArrowIcon />
      <p className="text-white font-normal ml-2.5">contact</p>
    </div>
    <div className="mb-2 border-t border-light" />
    <div className="px-4">
      <a
        className="flex items-center mt-2"
        href="mailto:g1mishra.dev@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        {EMAIL_ICON}
        <p className="ml-2">g1mishra.dev@gmail.com</p>
      </a>
    </div>
  </div>
);
