import React from 'react';

const Box = ({children, className}) => {
  return (
    <div className={`hover:bg-light-100 dark:hover:bg-dark-200 rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export default Box;
