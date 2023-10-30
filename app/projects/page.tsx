import { generateMetadata } from '@components/next-head';
import clientPromise from '@lib/mongodb';
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
  const { projects, tags } = await getData();

  return (
    <main className="flex flex-col sm:flex-row">
      <p className="sm:hidden px-4 py-6 text-[15px] text-white">_projects</p>
      <ProjectsPage projects={projects} tags={tags} />
    </main>
  );
};

export default Projects;

async function getData(): Promise<IProjectPageProps> {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const response = await db.collection('projects').find({}).toArray();
    const projects: IProject[] = JSON.parse(JSON.stringify(response));
    let tags = projects.map((item) => item.tags);
    tags = Array.from(new Set(tags.join(';').split(';')));
    projects.sort((a, b) => a.sno - b.sno);
    return { projects, tags };
  } catch (e) {
    return { projects: [], tags: [] };
  }
}

export const revalidate = 3600; // revalidate at most every hour
