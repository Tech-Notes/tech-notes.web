import React from 'react';

const Input = ({children,className, ...attributes}) => {
  return (
    <input className="px-3 dark:text-black text-sm py-2 border rounded-xl border-pink-300 outline-none dark:border-gray-600" {...attributes}>
      {children}
    </input>
  );
}

export default Input;
