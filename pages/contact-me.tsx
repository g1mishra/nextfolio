import NextHead from '@components/next-head';
import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <main className="flex flex-1 items-center">
      <NextHead
        canonical="https://g1mishra.dev/contact-me"
        title="Get in touch with Full-Stack Developer - Jeevan Kumar"
        desc="I reply to all inquiries within a few hours. So, if you need development assistance for your product, simply fill out the form and I'll take care of the rest."
      />
      <div className="w-full flex justify-center">Work in progress</div>
    </main>
  );
};

export default Contact;
