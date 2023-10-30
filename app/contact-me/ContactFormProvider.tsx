'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { ContatcFormData } from './page';

function ContactFormProvider({ children }: { children: React.ReactNode }) {
  const methods = useForm<ContatcFormData>({ defaultValues: { name: '', email: '', message: '' } });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export default ContactFormProvider;
