import ContactForm from '@components/contact-me/contact-form';
import FormSnippet from '@components/contact-me/form-snippet';
import ContactMeSidebar from '@components/contact-me/sidebar';
import { CROSS_ICON } from '@components/icons';
import NextHead from '@components/next-head';
import type { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

export type ContatcFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: NextPage = () => {
  const methods = useForm<ContatcFormData>({ defaultValues: { name: '', email: '', message: '' } });
  return (
    <>
      <NextHead
        canonical="https://g1mishra.dev/contact-me"
        title="Get in touch with Full-Stack Developer - Jeevan Kumar"
        desc="I reply to all inquiries within a few hours. So, if you need development assistance for your product, simply fill out the form and I'll take care of the rest."
      />
      <main className="flex flex-col sm:flex-row">
        <p className="sm:hidden px-4 py-6 text-[15px] text-white">_contact-me</p>
        <ContactMeSidebar />
        <FormProvider {...methods}>
          <div className="flex w-full flex-col sm:flex-row">
            <div className="flex-1 shrink-0 flex flex-col sm:border-r border-light">
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
        </FormProvider>
      </main>
    </>
  );
};

export default Contact;

const PageTabTitle = () => (
  <div className="hidden sm:block border-b border-light">
    <p className="flex justify-between items-center pl-8 pr-4 py-2 max-w-max space-x-12 border-r border-light">
      <span>contacts</span>
      {CROSS_ICON}
    </p>
  </div>
);
