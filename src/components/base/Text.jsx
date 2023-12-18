import React from "react";

const Text = ({ children, className }) => {
  return (
    <p className={` text-black dark:text-white ${className}`}>{children}</p>
  );
};

export default Text;
