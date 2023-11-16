import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThreeContentSB = ({icon, title, arrowIcon}) => {
  return (
    <div class="flex gap-3 text-sm h-12 px-5 items-center hover:bg-slate-400">
        <div>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>
            {title}
        </div>
        <div class="ml-5">
            <FontAwesomeIcon icon={arrowIcon} />
        </div>
      </div>
  );
}

export default ThreeContentSB;
