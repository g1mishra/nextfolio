import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <main className="h-full flex flex-1 items-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Jeevan | Projects</title>
        <meta
          name="description"
          content="A selection of Jeevan's best projects including website, webapp, REST API and more"
        />
        <meta property="og:url" content="https://g1mishra.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jeevan Kumar" />
        <meta property="og:title" content="Jeevan's Project" />
        <meta
          property="og:description"
          content="A selection of Jeevan's best projects including website, webapp, REST API and more"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image" content="/project_og_s.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="g1mishra.dev" />
        <meta property="twitter:url" content="https://g1mishra.dev/" />
        <meta name="twitter:title" content="Jeevan's Project" />
        <meta
          name="twitter:description"
          content="A selection of Jeevan's best projects including website, webapp, REST API and more"
        />
        <meta name="twitter:image" content="/project_og.png" />
      </Head>
      <div className="w-full flex justify-center">Work in progress</div>
    </main>
  );
};

export default Home;
