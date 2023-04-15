import { education } from '@lib/constants';
import { Fragment } from 'react';

const Education = () => {
  return (
    <>
      {education.map((edu, index) => (
        <Fragment key={index}>
          <p className="text-lg font-bold inline">{edu.university}</p>
          <br />
          <p className="inline">{edu.degree}</p>
          <br />
          <p className="font-light inline">{edu.period}</p>
          <br />
          <p className="inline font-light">{edu.description}</p>
          <br />
        </Fragment>
      ))}
    </>
  );
};

export default Education;
