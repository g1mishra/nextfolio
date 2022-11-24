import { CROSS_ICON } from '@components/icons';
import NextHead from '@components/next-head';
import ProjectsSidebar from '@components/projects/sidebar';
import clientPromise from '@lib/mongodb';
import type { GetStaticProps, NextPage } from 'next';
import { IProject } from 'types/project';

interface IProjectPageProps {
  projects: IProject[];
}

const Projects: NextPage<IProjectPageProps> = ({ projects }) => {
  return (
    <main className="flex flex-col sm:flex-row">
      <NextHead
        canonical="https://g1mishra.dev/projects"
        title="Portfolio of full-stack web developer - Jeevan Kumar"
        desc="I'm a Full-stack developer based in India with 2.5+ years of experience. Check out some of the latest projects I've worked on."
      />
      <p className="sm:hidden px-4 py-6 text-[15px] text-white">_projects</p>
      <div className="flex w-full flex-col sm:flex-row">
        <ProjectsSidebar />
        <div className="flex-1 shrink-0 flex flex-col sm:border-r border-light">
          <div className="hidden sm:block border-b border-light">
            <p className="flex justify-between items-center pl-8 pr-4 py-2 max-w-max space-x-12 border-r border-light">
              <span>react</span>
              {CROSS_ICON}
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            Work in progress <span className="sr-only"> - {JSON.stringify(projects)}</span>
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
    const projects = await db.collection('projects').find({}).toArray();
    return { props: { projects: JSON.parse(JSON.stringify(projects)) }, revalidate: 60 * 60 * 24 };
  } catch (e) {
    return { props: { projects: null }, revalidate: 60 * 60 * 24 };
  }
};
