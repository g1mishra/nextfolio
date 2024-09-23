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
  canonical: 'https://g1mishra.dev/projects',
  title: 'Portfolio of full-stack web developer - Jeevan Kumar',
  desc: "I'm a Full-stack developer based in India with 3+ years of experience. Check out some of the latest projects I've worked on.",
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
