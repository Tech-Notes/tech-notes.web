import React from 'react';

const BoxFile = ({children, level}) => {
  return (
    <div class={`flex text-sm px-5 items-center hover:bg-slate-500 active:bg-slate-600 cursor-pointer ${level === "1" && "gap-3 h-12"} ${level === "2" && "gap-2 ml-4 h-10"}`}>
      {children}
    </div>
  );
}

export default BoxFile;
