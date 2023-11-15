import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TwoContentSB = ({icon, title}) => {
  return (
    <div class="flex gap-3 h-12 bg-slate-400 justify-center items-center">
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
