import React from 'react';

const Div = ({ children, level, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-light dark:bg-black text-black dark:text-white ${className} ${
        level === '2' && 'bg-white dark:bg-gray-700'
      }`}>
      {children}
    </div>
  );
};

export default Div;
