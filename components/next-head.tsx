import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  desc: string;
};

const NextHead = ({ title, desc }: Props) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link href={`https://g1mishra.dev` + router.pathname} rel="canonical" />
      <meta name="description" content={desc} />
      <meta property="og:url" content="https://g1mishra.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Full-Stack Developer, India - Jeevan Kumar" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="https://g1mishra.dev/og.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="g1mishra.dev" />
      <meta property="twitter:url" content="https://g1mishra.dev/" />
      <meta name="twitter:image" content="https://g1mishra.dev/og-small.png" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
    </Head>
  );
};

export default NextHead;
