import { experience, getAbsolutePath, skills } from '@lib/constants';
import { aboutAtomPage, aboutAtomPageT } from 'atoms/aboutAtom';
import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import { Fragment, useMemo, useRef } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Bio from './bio';

type Props = {
  className?: string;
};

// eslint-disable-next-line no-unused-vars
const lineHeightObj: { [K in aboutAtomPageT]: string } = {
  bio: '2rem',
  diploma: '2rem',
  experience: '2rem',
  skills: '2.25rem',
};

const RenderStar = dynamic(() => import('./render-asterisk'), { ssr: false });

// Note : inline style added to 'p' to calc number of line
const AboutContent = ({ className = '' }: Props) => {
  const [currentPage] = useAtom(aboutAtomPage);
  const rightDivRef = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery('(min-width: 640px)');
  const paths = useMemo(() => getAbsolutePath(currentPage), [currentPage]);

  return (
    <>
      <p className="sm:hidden leading-8">
        <br />
        {paths.map((path, idx) => (
          <Fragment key={idx}>
            {idx === 0 ? (
              <span className="text-white">{`// ${path}`}</span>
            ) : idx === paths.length - 1 ? (
              <span className="text-blueToken">{` / ${path}`}</span>
            ) : (
              <span className="text-white">{` / ${path}`}</span>
            )}
          </Fragment>
        ))}
      </p>
      {matches ? (
        <RenderStar rightDivRef={rightDivRef} lineHeight={lineHeightObj[currentPage]} />
      ) : null}
      <div
        ref={rightDivRef}
        className={`sm:ml-10 text-[#607B96] ${className}`}
        style={{ lineHeight: lineHeightObj[currentPage] }}
      >
        <br />
        {currentPage === 'bio' ? (
          <Bio />
        ) : currentPage === 'diploma' ? (
          <>
            <p className="text-lg font-bold inline">Mehr Chand Polytechnic College Jalandhar</p>
            <br />
            <p className="inline">Diploma, Computer Engineering</p>
            <br />
            <p className="font-light inline">Jan 2017 - Jan 2020</p>
            <br />
            <p className="inline">Grade: A+</p>
            <br />
          </>
        ) : currentPage === 'experience' ? (
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
        ) : currentPage === 'skills' ? (
          <>
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center space-x-4">
                {skill.icon ? (
                  <span>{skill.icon}</span>
                ) : (
                  <span className={skill.iconClassName}></span>
                )}
                <p className="capitalize inline">{skill.name}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            <p>Work In Progress</p>
          </>
        )}
        <br />
      </div>
    </>
  );
};

export default AboutContent;
