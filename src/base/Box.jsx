import React from 'react';

const Box = ({children, className}) => {
  return (
    <div className={`hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export default Box;
