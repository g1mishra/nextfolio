import {
  ArrowIcon,
  ArrowIcon1,
  BIO_ICON,
  EMAIL_ICON,
  FILE_ICON,
  FOLDER_ICON,
} from '@components/icons';
import { aboutAtomPage, aboutAtomPageT } from 'atoms/aboutAtom';
import { useAtom } from 'jotai';
import { ReactElement } from 'react';
import LeftSidebar from './left-sidebar';

interface IFileLink {
  text: aboutAtomPageT;
  icon: ReactElement;
  className?: string;
  isActive?: boolean;
  // eslint-disable-next-line no-unused-vars
  callBack: (arg0: aboutAtomPageT) => void;
}

const FileLink = ({ text, callBack, icon, className, isActive }: IFileLink) => {
  return (
    <div
      className={`flex items-center py-2 cursor-pointer ${className} `}
      onClick={() => callBack(text)}
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
  const [currentPage, setCurrentPage] = useAtom(aboutAtomPage);
  return (
    <>
      <LeftSidebar currentPage={currentPage} />
      <div className="flex flex-col min-w-[18rem] max-w-full sm:max-w-max bg-secondaryBG sm:border-r border-light sm:overflow-y-auto ">
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
              className="px-4"
              callBack={setCurrentPage}
            />
            <details className="group/education marker:content-[''] flex flex-col whitespace-nowrap px-4 py-2 ">
              <summary className="w-full cursor-pointer select-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center " onClick={handleOpenAndClose}>
                  <ArrowIcon1 className="-ml-[calc(1.125rem)] rotate-0 group-open/education:rotate-90" />
                  <span className="ml-2.5">{FOLDER_ICON}</span>
                  <p className="text-white font-normal ml-2.5 flex items-center opacity-50">
                    education
                  </p>
                </div>
              </summary>
              <div className="-mx-4 mb-2 " />
              <FileLink
                icon={FILE_ICON}
                isActive={currentPage === 'diploma'}
                text="diploma"
                callBack={setCurrentPage}
              />
            </details>
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
              callBack={setCurrentPage}
            />
            <FileLink
              icon={FILE_ICON}
              className="px-4"
              isActive={currentPage === 'skills'}
              text="skills"
              callBack={setCurrentPage}
            />
          </div>
        </details>
        <ContactSection />
      </div>
    </>
  );
}

const ContactSection = () => (
  <div className="hidden sm:flex flex-col whitespace-nowrap ">
    <div className="flex items-center px-4 py-2">
      <ArrowIcon />
      <p className="text-white font-normal ml-2.5">contact</p>
    </div>
    <div className="-mx-4 mb-2 border-t border-light" />
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
