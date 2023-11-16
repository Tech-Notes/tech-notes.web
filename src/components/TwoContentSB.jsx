import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TwoContentSB = ({icon, title}) => {
  return (
    <div class="flex gap-3 text-sm h-12 px-5 items-center hover:bg-slate-400">
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
