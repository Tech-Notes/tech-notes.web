import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewFile from './NewFile';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const ThreeContentSB = ({icon, title, indexPage}) => {
  
  return (
    <div class="flex flex-col">

      <div class="flex gap-3 text-sm h-12 px-5 items-center hover:bg-slate-500 active:bg-slate-600 cursor-pointer">
          <div>
            <FontAwesomeIcon icon={icon} />
          </div>
          <div>
              {title}
          </div>
          <div class="ml-5">
              <FontAwesomeIcon icon={faAngleDown}/>
        </div>
      </div>

      <NewFile newFile={indexPage}/>
    
    </div>
    
  );
}

export default ThreeContentSB;
