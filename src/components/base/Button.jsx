import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`text-black dark:text-white border border-pink-300 dark:border-white hover:bg-light-pink dark:hover:bg-gray-700 active:bg-pink-200  active:dark:bg-gray-800 rounded-lg  ${className}`}>
      {children}
    </div>
  );
};

export default Button;
