import React from 'react';

const Div = ({children, mode, className}) => {
  return (
    <div className= {`bg-light-200 dark:bg-gray-400 ${className} ${mode === "2" && "bg-light-100 dark:bg-gray-100"}`}>
      {children}
    </div>
  );
}

export default Div;
