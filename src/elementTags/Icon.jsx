import React from 'react';

const Icon = ({children,level}) => {
  return (
    <div className={`w-3.5 ${level === "2" && "mr-3"}`}>
      {children}
    </div>
  );
}

export default Icon;
