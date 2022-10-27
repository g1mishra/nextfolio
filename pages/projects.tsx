import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  //
  return (
    <main className="h-full flex flex-1 items-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio of full-stack web developer - Jeevan Kumar</title>
        <meta
          name="description"
          content="I'm a Full-stack developer based in India with 2.5+ years of experience. Check out some of the latest projects I've worked on."
        />
        <meta property="og:url" content="https://g1mishra.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Full-Stack Developer, India - Jeevan Kumar" />
        <meta property="og:title" content="Portfolio of full-stack web developer - Jeevan Kumar" />
        <meta
          property="og:description"
          content="I'm a Full-stack developer based in India with 2.5+ years of experience. Check out some of the latest projects I've worked on."
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image" content="/og_small.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="g1mishra.dev" />
        <meta property="twitter:url" content="https://g1mishra.dev/" />
        <meta name="twitter:title" content="Portfolio of full-stack web developer - Jeevan Kumar" />
        <meta
          name="twitter:description"
          content="I'm a Full-stack developer based in India with 2.5+ years of experience. Check out some of the latest projects I've worked on."
        />
        <meta name="twitter:image" content="/og.png" />
      </Head>
      <div className="w-full flex justify-center">Work in progress</div>
    </main>
  );
};

export default Home;
