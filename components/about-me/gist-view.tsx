import Gist from '@components/gist';
import Star from '@components/star';
import { IGistData } from '@lib/gist';
import Image from 'next/image';
import { Fragment, memo, UIEvent, useRef } from 'react';

type Props = { data: IGistData | null };

const GistView = function GistComponent({ data }: Props) {
  const progressDivRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const scrollTotal = e.currentTarget.scrollTop;
    const heightWin = e.currentTarget.scrollHeight - e.currentTarget.clientHeight;
    const scroll = `${(scrollTotal / heightWin) * 100}%`;
    if (progressDivRef.current) progressDivRef.current.style.top = scroll;
  };

  return (
    <div className="flex-1 flex flex-col">
      <p className="hidden sm:flex max-h-max w-full items-center whitespace-nowrap px-4 py-2 border-b border-light">
        <span className="invisible">hidden</span>
      </p>
      <div className="flex h-full">
        <div className="relative flex-1 w-full">
          <div
            onScroll={handleScroll}
            className="sm:absolute p-4 sm:p-0 sm:inset-4 flex flex-col sm:overflow-y-auto"
          >
            <p className="mb-4 text-white sm:text-inherit">{'// Code snippet showcase:'}</p>

            {data?.files.map((file) => (
              <Fragment key={file.filename}>
                <div className="flex justify-between items-center my-5">
                  <div className="flex space-x-4 items-center">
                    <Image
                      className="rounded-full"
                      src={data?.owner.avatar_url ?? ''}
                      height={36}
                      width={36}
                      alt="g1mishra-profile"
                    />
                    <div className="flex flex-col gap-0.5 text-sm">
                      <p className="text-blueToken font-semibold">@{data?.owner.login}</p>
                      <p className="">{file.filename}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star count={0} />
                  </div>
                </div>
                <Gist
                  filename={file.filename}
                  code={file.content}
                  lang={file.language.toLowerCase()}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="w-6 border-light border-l hidden sm:flex flex-col p-1">
          <div ref={progressDivRef} className="sticky top-1 w-full h-4 bg-[#607B96]"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(GistView);
