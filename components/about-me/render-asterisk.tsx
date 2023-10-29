import useMediaQuery from 'hooks/useMediaQuery';
import { FC, RefObject, useEffect, useState } from 'react';

interface IRenderStarProps {
  rightDivRef: RefObject<HTMLDivElement>;
  lineHeight: string;
}

const RenderStar: FC<IRenderStarProps> = ({ rightDivRef, lineHeight }) => {
  const [numOfLines, setNumOfLines] = useState(0);
  const matches = useMediaQuery('(min-width: 640px)');

  useEffect(() => {
    if (!rightDivRef.current) return;
    // wait for the rightDivRef to be available
    const resizeObserver = new ResizeObserver(() => {
      if (rightDivRef?.current?.clientHeight) {
        let lines = Array.from(rightDivRef.current.querySelectorAll('p'))
          .map((elem) => elem.getClientRects().length)
          .reduce((f, s) => f + s);
        setNumOfLines(lines);
      }
    });
    resizeObserver.observe(rightDivRef.current);
    return () => resizeObserver.disconnect();
  }, [rightDivRef]);

  if (!matches) return null;

  return (
    <div className={`absolute left-4 top-6 `}>
      {numOfLines ? (
        <div className="overflow-hidden" style={{ lineHeight }}>
          <p>{'/**'}</p>
          <div className="ml-[0.7rem] break-words whitespace-pre-wrap">
            {Array(numOfLines)
              .fill('*')
              .map((star, idx) => (
                <p key={idx}>{star}</p>
              ))}
          </div>
          <p className="ml-[0.7rem] bg-secondaryBG">{'*/'}</p>
        </div>
      ) : null}
    </div>
  );
};

export default RenderStar;
