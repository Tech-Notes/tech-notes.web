import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThreeContentSB = ({icon, title, arrowIcon}) => {
  return (
    <div class="flex gap-2 h-12 bg-slate-400 justify-center items-center">
        <div>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>
            {title}
        </div>
        <div>
            <FontAwesomeIcon icon={arrowIcon} />
        </div>
      </div>
  );
}

export default ThreeContentSB;
