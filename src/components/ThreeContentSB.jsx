import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewFile from './NewFile';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Icon from '../elementTags/Icon';
import BoxFile from '../elementTags/BoxFile';


const ThreeContentSB = ({icon, title, indexPage}) => {
  
  return (
    <div class="flex flex-col">
      <BoxFile level="1">
          <Icon>
            <FontAwesomeIcon icon={icon} />
          </Icon>
          <div>
              {title}
          </div>
          <Icon>
              <FontAwesomeIcon icon={faAngleDown}/>
          </Icon>
      </BoxFile>

      <NewFile newFile={indexPage}/>
    
    </div>
    
  );
}

export default ThreeContentSB;
