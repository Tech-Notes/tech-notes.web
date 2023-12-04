import React from 'react';

const Div = ({children, mode, className}) => {
  return (
    <div className= {`bg-light-blue dark:bg-black text-black dark:text-white ${className} ${mode === "2" && "bg-light-blue dark:bg-gray-700"}`}>
      {children}
    </div>
  );
}

export default Div;
