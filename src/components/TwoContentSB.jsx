import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';

const TwoContentSB = ({icon, title}) => {
  const navigate=useNavigate();

  const onClickHandler=()=>{
    navigate(`/${title}`);

  }
  return (
    <div onClick={onClickHandler} class="flex gap-3 text-sm h-12 px-5 items-center hover:bg-slate-400 cursor-pointer">
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
