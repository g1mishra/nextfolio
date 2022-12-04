import { ReactElement } from 'react';

const AbsoluteDiv = ({ children, className }: { children: ReactElement; className: string }) => (
  <div className="absolute inset-0 top-[5vh] flex justify-center items-center p-2 rounded-md z-50 bg-opacity-10">
    <div
      className={`flex justify-center items-center bg-white bg-opacity-50 rounded-md w-10/12 py-4 ${className}`}
    >
      {children}
    </div>
  </div>
);

export default AbsoluteDiv;
