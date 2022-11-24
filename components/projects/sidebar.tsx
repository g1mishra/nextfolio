import { ArrowIcon } from '@components/icons';
import React from 'react';

const ProjectsSidebar = () => {
  return (
    <div className="flex flex-col min-w-[22rem] max-w-full sm:max-w-max bg-secondaryBG sm:border-r border-light sm:overflow-y-auto ">
      <details
        open
        className="group/projects marker:content-[''] flex flex-col whitespace-nowrap border-b border-secondaryBG sm:border-light"
      >
        <summary className="w-full cursor-pointer select-none [&::-webkit-details-marker]:hidden">
          <div className="flex items-center px-4 py-2 bg-light sm:bg-secondaryBG">
            <ArrowIcon className="-rotate-90 group-open/projects:rotate-0" />
            <p className="text-white font-normal ml-2.5">projects</p>
          </div>
        </summary>
        {/* <div className="-mx-4 mb-2 border-t border-secondaryBG sm:border-light" /> */}
      </details>
    </div>
  );
};

export default ProjectsSidebar;
