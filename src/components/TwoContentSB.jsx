import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';

const TwoContentSB = ({icon, title, indexPage}) => {
  const navigate=useNavigate();

  const onClickHandler=()=>{
    navigate(`/${indexPage}`);

  }
  return (
    <div onClick={onClickHandler} class="flex gap-3 text-sm h-12 px-5 items-center hover:bg-slate-500 active:bg-slate-600 cursor-pointer">
        <div>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>
            {title}
        </div>
      </div>
  );
}

export default TwoContentSB;
