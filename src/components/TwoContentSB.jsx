import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import Icon from '../elementTags/Icon';
import BoxFile from '../elementTags/BoxFile';

const TwoContentSB = ({icon, title, indexPage}) => {
  const navigate=useNavigate();

  const onClickHandler=()=>{
    navigate(`/${indexPage}`);

  }
  return (
    <div onClick={onClickHandler}>
      <BoxFile level="1">
        <Icon>
          <FontAwesomeIcon icon={icon} />
        </Icon>
        <div>
            {title}
        </div>
      </BoxFile>

    </div>
    
  );
}

export default TwoContentSB;
