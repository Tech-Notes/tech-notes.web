import React from 'react';

const InnerContainer = ({children, level}) => {
  return (
    <div class={`flex items-center ${level === "1" && "h-14 w-1/4 justify-center md:w-40"} ${level === "2" && "gap-2"}`}>
      {children}
    </div>
  );
}

export default InnerContainer;
