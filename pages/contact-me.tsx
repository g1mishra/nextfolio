import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <main className="h-full flex flex-1 items-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Jeevan | Contact</title>
        <meta
          name="description"
          content="Connect with Jeevan (g1mishra) on different socail platforms."
        />
        <meta property="og:url" content="https://g1mishra.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jeevan Kumar" />
        <meta property="og:title" content="Jeevan | Contact" />
        <meta
          property="og:description"
          content="Connect with Jeevan (g1mishra) on different socail platforms."
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image" content="/og_small.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="g1mishra.dev" />
        <meta property="twitter:url" content="https://g1mishra.dev/" />
        <meta name="twitter:title" content="Jeevan | Contact" />
        <meta
          name="twitter:description"
          content="Connect with Jeevan (g1mishra) on different socail platforms."
        />
        <meta name="twitter:image" content="/og.png" />
      </Head>
      <div className="w-full flex justify-center">Work in progress</div>
    </main>
  );
};

export default Home;
