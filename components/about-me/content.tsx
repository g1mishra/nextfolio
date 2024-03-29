'use client';

import { getAbsolutePath } from '@lib/common';
import dynamic from 'next/dynamic';
import { Fragment, useMemo, useRef } from 'react';
import { AboutSubRoutesT } from 'types/common';
import Bio from './bio';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

type Props = {
  className?: string;
  currentPage: AboutSubRoutesT;
};

// eslint-disable-next-line no-unused-vars
const lineHeightObj: { [K in AboutSubRoutesT]: string } = {
  bio: '2rem',
  education: '2rem',
  experience: '2rem',
  skills: '2.25rem',
};

const RenderStar = dynamic(() => import('./render-asterisk'), { ssr: false });

// Note : inline style added to 'p' tags to calc number of line
const AboutContent = ({ currentPage, className = '' }: Props) => {
  const rightDivRef = useRef<HTMLDivElement>(null);
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
      <RenderStar rightDivRef={rightDivRef} lineHeight={lineHeightObj[currentPage]} />
      <div
        ref={rightDivRef}
        className={`sm:ml-10 text-[#607B96] ${className}`}
        style={{ lineHeight: lineHeightObj[currentPage] }}
      >
        <br />
        {renderCurrentPage(currentPage)}
        <br />
      </div>
    </>
  );
};

export default AboutContent;

const renderCurrentPage = (currentPage: AboutSubRoutesT) => {
  switch (currentPage) {
    case 'bio':
      return <Bio />;
    case 'education':
      return <Education />;
    case 'experience':
      return <Experience />;
    case 'skills':
      return <Skills />;
    default:
      return <p>404 Not Found</p>;
  }
};
