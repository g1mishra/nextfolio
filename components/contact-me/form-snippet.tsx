'use client';

import { formatDate } from '@lib/date';
import { ContatcFormData } from 'app/contact-me/page';
import { useFormContext } from 'react-hook-form';

const FormSnippet = () => {
  const { watch } = useFormContext<ContatcFormData>();
  return (
    <div className="flex flex-1">
      <div className="p-4 flex-1 flex flex-col justify-center items-center my-6 xl:my-0 break-all">
        <div>
          <div className="flex">
            <span className="w-5 min-w-max inline-flex justify-end mr-10 text-token4">1</span>
            <span className="text-token2">
              <span className="text-token1">const </span>
              {`button = document.querySelector('`}
              <span className="text-token3">#sendBtn</span>
              <span className="text-token4">{`');`}</span>
            </span>
          </div>
          <div className="flex">
            <span className="w-5 min-w-max inline-flex justify-end mr-10 text-token4">2</span>{' '}
            <br />
          </div>
          <div className="text-token2">
            <span className="w-5 min-w-max inline-flex justify-end mr-10 text-token4">3</span>
            <span className="text-token1">const </span>
            <span>message</span>
            <span className="text-token1"> = </span>
            <span className="text-token4"> {`{`}</span>
          </div>
          <div className="flex">
            <span className="w-5 min-w-max inline-flex justify-end mr-10 text-token4">4</span>
            <p className="ml-4 text-token2">
              <span>name: </span>
              <span className="text-token3">{`"${watch('name')}"`}</span>
              <span className="text-token4">,</span>
            </p>
          </div>
          <div className="flex">
            <span className="w-5 min-w-max inline-flex justify-end mr-10 text-token4">5</span>
            <p className="ml-4 text-token2">
              <span> email: </span>
              <span className="text-token3">{`"${watch('email')}"`}</span>
              <span className="text-token4">,</span>
            </p>
          </div>
          <div className="flex">
            <p className="w-5 min-w-max shrink-0 inline-flex justify-end mr-10 text-token4">6</p>
            <p className="ml-4 text-token2">
              <span>message: </span>
              <span className="text-token3">{`"${watch('message')}"`}</span>
              <span className="text-token4">,</span>
            </p>
          </div>
          <div className="flex">
            <span className="w-5 min-w-max inline-flex justify-end mr-10 text-token4">7</span>

            <p className="ml-4 text-token2">
              <span> date: </span>
              <span className="text-token3">{`"${formatDate(new Date())}"`} </span>
            </p>
          </div>
          <div className="flex">
            <span className="w-5 min-w-max inline-flex justify-end mr-10 text-token4">8</span>
            <span>{`}`}</span>
          </div>
          <div className="flex">
            <span className="w-5 min-w-max inline-flex justify-end mr-10 text-token4">9</span>{' '}
            <br />
          </div>
          <div className="flex">
            <span className="w-5 min-w-max inline-flex justify-end mr-10 text-token4">10</span>
            <p className="text-token2">
              <span>{`button.addEventListener`}</span>
              <span className="text-token4">{`(`}</span>
              <span className="text-token3">{`'click'`}</span>
              <span className="text-token4">{`, ()`}</span>
              <span className="text-token1"> {`=>`} </span>
              <span className="text-token4">{`{`}</span>
            </p>
          </div>
          <div className="flex">
            <span className="w-5 min-w-max inline-flex justify-end mr-10 text-token4">11</span>
            <p className="ml-4 text-token2">
              <span>form.send</span>
              <span className="text-token4">(</span>
              <span>message</span>
              <span className="text-token4">)</span>
              <span className="text-token4">;</span>
            </p>
          </div>
          <div className="flex">
            <span className="w-5 min-w-max inline-flex justify-end mr-10 text-token4">12</span>
            <span>{`})`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSnippet;
