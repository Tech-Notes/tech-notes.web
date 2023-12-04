import React from 'react';

const Text = ({children}) => {
  return (
    <div className='text-black dark:text-white'>
      {children}
    </div>
  );
}

export default Text;
