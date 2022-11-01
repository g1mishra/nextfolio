import NextHead from '@components/next-head';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <main className="flex flex-1 items-center">
      <NextHead
        title="About Jeevan Kumar - Past Development Experience, Interrests, Bio etc."
        desc="In a nutshell, over the last 2.5 years, I've gained development experience for over three early-stage companies. Some failed, some succeeded, and others continued to grow."
      />
      <div className="w-full flex justify-center">Work in progress</div>
    </main>
  );
};

export default About;
