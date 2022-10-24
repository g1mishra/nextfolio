import React from 'react';

const HighlightBox = () => {
  return (
    <div
      className="sm:hidden flex absolute mx-auto inset-x-0 left-0 top-0 aspect-video w-screen bg-gradient-to-br from-[#43d9ad]
       rotate-45 to-[#4d5bce] rounded-full scale-75 translate-y-[50%] blur-[150px]"
    />
  );
};

export default HighlightBox;
