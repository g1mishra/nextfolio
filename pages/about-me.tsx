import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <main className="flex flex-1 items-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>About Jeevan Kumar - Past Development Experience, Interrests, Bio etc</title>
        <meta
          name="description"
          content="In a nutshell, over the last 2.5 years, I've gained development experience for over three early-stage companies. Some failed, some succeeded, and others continued to grow."
        />
        <meta property="og:url" content="https://g1mishra.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Full-Stack Developer, India - Jeevan Kumar" />
        <meta
          property="og:title"
          content="About Jeevan Kumar - Past Development Experience, Interrests, Bio etc"
        />
        <meta
          property="og:description"
          content="In a nutshell, over the last 2.5 years, I've gained development experience for over three early-stage companies. Some failed, some succeeded, and others continued to grow."
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image" content="/og_small.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="g1mishra.dev" />
        <meta property="twitter:url" content="https://g1mishra.dev/" />
        <meta
          name="twitter:title"
          content="About Jeevan Kumar - Past Development Experience, Interrests, Bio etc"
        />
        <meta
          name="twitter:description"
          content="In a nutshell, over the last 2.5 years, I've gained development experience for over three early-stage companies. Some failed, some succeeded, and others continued to grow."
        />
        <meta name="twitter:image" content="/og.png" />
      </Head>
      <div className="w-full flex justify-center">Work in progress</div>
    </main>
  );
};

export default Home;
