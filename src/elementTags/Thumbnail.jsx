import React from 'react';

const ThumbNail = ({children, image}) => {
  return (
    <div class={`w-7 h-7 bg-no-repeat bg-center bg-cover bg-fit rounded-2xl bg-${image}`}>
      {children}
    </div>
  );
}

export default ThumbNail;
