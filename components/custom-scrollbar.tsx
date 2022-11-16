import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const CustomScrollbar = (props: Props) => {
  return (
    <div className="border border-light rounded-md bg-[#011221] p-1">
      <pre className="overflow-auto scrollbar border-x-[0.25rem] sm:border-x-[0.5rem] p-2 sm:p-3 border-[#011221] ">
        {props.children}
      </pre>
    </div>
  );
};

export default CustomScrollbar;
