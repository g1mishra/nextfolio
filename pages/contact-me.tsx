import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <main className="h-full flex flex-1 items-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Get in touch with Full-Stack Developer - Jeevan Kumar</title>
        <meta
          name="description"
          content="I reply to all inquiries within a few hours. So, if you need development assistance for your product, simply fill out the form and I'll take care of the rest."
        />
        <meta property="og:url" content="https://g1mishra.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Full-Stack Developer, India - Jeevan Kumar" />
        <meta property="og:title" content="Get in touch with Full-Stack Developer - Jeevan Kumar" />
        <meta
          property="og:description"
          content="I reply to all inquiries within a few hours. So, if you need development assistance for your product, simply fill out the form and I'll take care of the rest."
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
          content="Get in touch with Full-Stack Developer - Jeevan Kumar"
        />
        <meta
          name="twitter:description"
          content="I reply to all inquiries within a few hours. So, if you need development assistance for your product, simply fill out the form and I'll take care of the rest."
        />
        <meta name="twitter:image" content="/og.png" />
      </Head>
      <div className="w-full flex justify-center">Work in progress</div>
    </main>
  );
};

export default Home;
