'use client';

import { ContatcFormData } from 'app/contact-me/page';
import axios from 'axios';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormContext<ContatcFormData>();

  const [emailSent, setEmailSent] = useState(false);

  const onSubmit = handleSubmit((data) => {
    axios
      .post('/api/contact', data)
      .then(() => {
        setEmailSent(true);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  const registerOptions = {
    name: { required: '_name is required' },
    email: { required: '_email is required' },
    message: {
      required: '_message is required',
      minLength: {
        value: 5,
        message: '_message must have at least 5 characters',
      },
    },
  };

  const resetForm = () => {
    setEmailSent(false);
    reset();
  };

  return (
    <div className={`p-4 flex flex-1 justify-center items-center sm:mb-0  my-6 xl:my-0 `}>
      {emailSent ? (
        <div className="flex flex-col items-center text-center justify-center max-w-sm min-h-[200px] gap-4">
          <h1> Thank you! 🤘</h1>
          <p>Your message has been accepted. You will recieve answer really soon!</p>{' '}
          <button
            type="submit"
            onClick={resetForm}
            className="bg-[#1C2B3A] rounded-lg max-w-max px-4 py-2 text-white"
          >
            send-new-message
          </button>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          autoComplete="off"
          className="flex flex-col gap-4 max-w-sm w-full"
        >
          <div className="flex flex-col gap-2">
            <label>_name:</label>
            <input type="text" {...register('name', registerOptions.name)} />
            <small className="text-red-700">{errors?.name && errors.name.message}</small>
          </div>
          <div className="flex flex-col gap-2">
            <label>_email:</label>
            <input type="email" {...register('email', registerOptions.email)} />
            <small className="text-red-700">{errors?.email && errors.email.message}</small>
          </div>
          <div className="flex flex-col gap-2">
            <label>_message:</label>
            <textarea className="py-2" {...register('message', registerOptions.message)} rows={6} />
            <small className="text-red-700">{errors?.message && errors.message.message}</small>
          </div>

          <button type="submit" className="bg-[#1C2B3A] rounded-lg max-w-max px-4 py-2 text-white">
            submit-message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
