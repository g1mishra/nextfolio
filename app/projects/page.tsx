import { generateMetadata } from '@components/next-head';
import { getProjects } from '@lib/projects';
import { Metadata } from 'next';
import { IProject } from 'types/project';
import ProjectsPage from './ProjectsPage';

export interface IProjectPageProps {
  projects: IProject[];
  tags: string[];
}

export const metadata: Metadata = generateMetadata({
  canonical: '/projects',
  title: 'Portfolio Projects - Full-stack Web Developer',
  desc: "Check out some of the latest projects I've worked on. From web applications to mobile apps, explore my development portfolio.",
});

const Projects = async () => {
  const { projects, tags } = await getProjects();

  return (
    <main className="flex flex-col sm:flex-row">
      <p className="sm:hidden px-4 py-6 text-[15px] text-white">_projects</p>
      <ProjectsPage projects={projects} tags={tags} />
    </main>
  );
};

export default Projects;

export const revalidate = 3600; // revalidate at most every hour
