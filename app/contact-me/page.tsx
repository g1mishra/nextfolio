import ContactForm from '@components/contact-me/contact-form';
import FormSnippet from '@components/contact-me/form-snippet';
import ContactMeSidebar from '@components/contact-me/sidebar';
import { generateMetadata } from '@components/next-head';
import type { Metadata, NextPage } from 'next';
import ContactFormProvider from './ContactFormProvider';
import PageTabTitle from './PageTabTitle';

export type ContatcFormData = {
  name: string;
  email: string;
  message: string;
};

export const metadata: Metadata = generateMetadata({
  canonical: 'https://g1mishra.dev/contact-me',
  title: 'Get in touch with Full-Stack Developer - Jeevan Kumar',
  desc: "I reply to all inquiries within a few hours. So, if you need development assistance for your product, simply fill out the form and I'll take care of the rest.",
});

const Contact: NextPage = () => {
  return (
    <main className="flex flex-col sm:flex-row">
      <p className="sm:hidden px-4 py-6 text-[15px] text-white">_contact-me</p>
      <ContactMeSidebar />
      <ContactFormProvider>
        <div className="flex w-full overflow-y-auto">
          <div className="flex w-full flex-col xl:flex-row">
            <div className="flex-1 shrink-0 flex flex-col xl:border-r border-light">
              <PageTabTitle />
              <ContactForm />
            </div>
            <div className="flex-1 shrink-0 hidden sm:flex flex-col">
              <p className="hidden sm:flex max-h-max w-full items-center whitespace-nowrap px-4 py-2 border-b border-light">
                <span className="invisible">hidden</span>
              </p>
              <FormSnippet />
            </div>
          </div>
          <div className="w-6 flex flex-col p-1 sticky inset-0  border-l border-light">
            <div className="sticky top-1 w-full h-2.5 bg-[#607B96]"></div>
          </div>
        </div>
      </ContactFormProvider>
    </main>
  );
};

export default Contact;
