import NextHead from '@components/next-head';
import type { NextPage } from 'next';

const Projects: NextPage = () => {
  return (
    <main className="flex flex-1 items-center">
      <NextHead
        canonical="https://g1mishra.dev/projects"
        title="Portfolio of full-stack web developer - Jeevan Kumar"
        desc="I'm a Full-stack developer based in India with 2.5+ years of experience. Check out some of the latest projects I've worked on."
      />
      <div className="w-full flex justify-center">Work in progress</div>
    </main>
  );
};

export default Projects;
