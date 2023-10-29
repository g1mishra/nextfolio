'use client';

import { CROSS_ICON } from '@components/icons';
import ProjectsSidebar from '@components/projects/sidebar';
import { selectedTagAtom } from 'atoms/projectsAtom';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { useMemo } from 'react';
import { IProjectPageProps } from './page';

const ProjectsPage = ({ projects, tags }: IProjectPageProps) => {
  const [selectedTags] = useAtom(selectedTagAtom);

  const tagsArr = useMemo(() => {
    return Object.entries(selectedTags)
      .filter(([, selected]) => selected)
      .map(([tag]) => tag);
  }, [selectedTags]);

  const filteredProjects = useMemo(() => {
    if (tagsArr.length === 0) {
      return projects;
    }
    return projects?.filter((project) =>
      tagsArr.every((tag) => project.tags.split(';').includes(tag))
    );
  }, [projects, tagsArr]);

  return (
    <div className="flex w-full flex-col sm:flex-row">
      <ProjectsSidebar tags={tags} />
      <div className="flex-1 shrink-0 flex flex-col sm:border-r border-light">
        <div className="hidden sm:block border-b border-light">
          <p className="flex justify-between items-center pl-8 pr-4 py-2 max-w-max space-x-12 border-r border-light">
            <span>{tagsArr?.length > 0 ? tagsArr.join(';') : 'all'}</span>
            {CROSS_ICON}
          </p>
        </div>
        <div className="flex-1 w-full p-4 sm:py-12 flex justify-center overflow-y-auto">
          <div className="flex flex-col h-max sm:grid xl:grid-cols-2 2xl:grid-cols-3 gap-12">
            {filteredProjects.map((project, index) => (
              <div className="flex flex-col gap-3 max-w-full sm:max-w-sm" key={project._id}>
                <p className=" text-primaryText flex items-center whitespace-nowrap">
                  <span className="text-blueToken font-bold">Project {index + 1}</span>
                  <span className="mx-3">{'//'}</span>
                  <span>_{project.name.toLowerCase().split(' ').join('-')}</span>
                </p>
                <div className="flex relative group flex-col rounded-[15px] overflow-clip bg-[#011221] border border-light">
                  <div className="w-full flex relative aspect-[6/3] h-full overflow-clip ">
                    {project.imgSrc ? (
                      <Image
                        priority
                        src={project.imgSrc ?? ''}
                        alt={project.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    ) : (
                      <div className="absolute inset-0 flex justify-center items-center font-semibold  bg-secondaryBG">
                        <p className="bg-white p-6 bg-opacity-5 rounded-md text-xl capitalize text-primaryText">
                          {project.name}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="w-full flex flex-col flex-[1] h-full p-4 gap-4 border-t border-light">
                    <p className="line-clamp-3 min-h-[75px]">{project.description}</p>
                  </div>
                  <div className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center backdrop-blur-sm bg-primaryBG/25">
                    {project.liveURL && (
                      <a
                        href={project.liveURL ?? ''}
                        target="_blank"
                        className="bg-[#1C2B3A] rounded-lg w-full px-4 py-2 text-white max-w-[150px] text-center my-2"
                        rel="noreferrer"
                      >
                        view-project
                      </a>
                    )}
                    {project.repoURL && (
                      <a
                        href={project.repoURL ?? ''}
                        target="_blank"
                        className="bg-[#1C2B3A] rounded-lg w-full px-4 py-2 text-white max-w-[150px] text-center my-2"
                        rel="noreferrer"
                      >
                        view-source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
