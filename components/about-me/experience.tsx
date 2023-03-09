import { experience } from '@lib/constants';
import React from 'react';

const Experience = () => {
  return (
    <>
      {experience.map((exp) => (
        <div key={exp.companyName}>
          <p className="text-lg font-bold inline">{exp.jobTitle}</p>
          <br />
          <p className="capitalize inline">@ {exp.companyName}</p>
          <br />
          <p className="inline">{exp.period}</p>
          <br />

          {exp.description.length > 0 ? (
            <>
              <p className="inline">{exp.description}</p> <br />
            </>
          ) : null}
          <br />
        </div>
      ))}
    </>
  );
};

export default Experience;
