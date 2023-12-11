import React from 'react';

const Link = ({children, className, onClick}) => {
  return (
    <p onClick={onClick} className={` text-blue-800 dark:text-blue-800 ${className}`}>
      {children}
    </p>
  );
}

export default Link;

