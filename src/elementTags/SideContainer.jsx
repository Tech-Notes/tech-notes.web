import React from 'react';

const SideContainer = ({children}) => {
  return (
    <div class="w-1/4 h-full px-1 border-r border-gray bg-slate-400 md:w-1/6 flex flex-col">
      {children}
    </div>
  );
}

export default SideContainer;
