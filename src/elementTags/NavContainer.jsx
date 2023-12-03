import React from 'react';

const NavContainer = ({children}) => {
  return (
    <div class="h-full flex justify-between pr-4 md:pr-9 border-b border-gray cursor-pointer bg-slate-400">
        {children}
    </div>
  );
}

export default NavContainer;
