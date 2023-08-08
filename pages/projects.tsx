import { CROSS_ICON } from '@components/icons';
import NextHead from '@components/next-head';
import ProjectsSidebar from '@components/projects/sidebar';
import clientPromise from '@lib/mongodb';
import { selectedTagAtom } from 'atoms/projectsAtom';
import { useAtom } from 'jotai';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useMemo } from 'react';
import { IProject } from 'types/project';

interface IProjectPageProps {
  projects: IProject[];
  tags: string[];
}

const Projects: NextPage<IProjectPageProps> = ({ projects, tags }) => {
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
    return projects.filter((project) =>
      tagsArr.every((tag) => project.tags.split(';').includes(tag))
    );
  }, [projects, tagsArr]);

  return (
    <main className="flex flex-col sm:flex-row">
      <NextHead
        canonical="https://g1mishra.dev/projects"
        title="Portfolio of full-stack web developer - Jeevan Kumar"
        desc="I'm a Full-stack developer based in India with 2.5+ years of experience. Check out some of the latest projects I've worked on."
      />
      <p className="sm:hidden px-4 py-6 text-[15px] text-white">_projects</p>
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
            <div className="flex flex-col h-max sm:grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
              {filteredProjects.map((project, index) => (
                <div className="flex flex-col gap-3 max-w-full sm:max-w-sm" key={project._id}>
                  <p className=" text-primaryText flex items-center">
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
    </main>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const response = await db.collection('projects').find({}).toArray();
    const projects: IProject[] = JSON.parse(JSON.stringify(response));
    let tags = projects.map((item) => item.tags);
    tags = Array.from(new Set(tags.join(';').split(';')));
    projects.sort((a, b) => a.sno - b.sno);
    return { props: { projects, tags }, revalidate: 60 * 60 * 24 };
  } catch (e) {
    return { props: { projects: null }, revalidate: 60 * 60 * 1 };
  }
};
