'use client';

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
    <div className="flex w-full flex-col sm:flex-row bg-[#011627] text-[#d6deeb]">
      <ProjectsSidebar tags={tags} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center px-4 py-2 border-b border-[#1e2d3d]">
          <span className="text-[#5f7e97]">projects /</span>
          <span className="ml-2">{tagsArr?.length > 0 ? tagsArr.join(', ') : 'all'}</span>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="@container">
            <div className="grid grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project._id}
                  className="bg-[#01111d] rounded-lg overflow-hidden border border-[#1e2d3d] hover:border-[#607B96] transition-all duration-300"
                >
                  <div className="relative aspect-video">
                    {project.imgSrc ? (
                      <Image
                        src={project.imgSrc}
                        alt={project.name}
                        layout="fill"
                        objectFit="contain"
                        className="bg-[#011627] p-2"
                      />
                    ) : (
                      <div className="absolute inset-0 flex justify-center items-center bg-[#011627]">
                        <p className="text-xl font-semibold">{project.name}</p>
                      </div>
                    )}
                  </div>
                  <div className="p-4 border-t flex flex-col justify-between border-[#1e2d3d]">
                    <h3 className="text-primaryText text-lg font-semibold mb-2">{project.name}</h3>
                    <p className="text-sm mb-4 line-clamp-3 flex-1 grow">{project.description}</p>
                    <div className="flex space-x-2 whitespace-nowrap">
                      {project.liveURL && (
                        <a
                          href={project.liveURL}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1 bg-[#1c2b3a] text-[#ffa7c4] rounded text-sm hover:bg-[#263b50] transition-colors"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.repoURL && (
                        <a
                          href={project.repoURL}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1 bg-[#1c2b3a] text-[#ffa7c4] rounded text-sm hover:bg-[#263b50] transition-colors"
                        >
                          Source Code
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
    </div>
  );
};

export default ProjectsPage;
