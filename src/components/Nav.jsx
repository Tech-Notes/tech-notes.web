import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  return (
    <div class="w-full h-14 flex justify-between pr-4 box-border">
      <div class="h-14 w-1/6 flex justify-center items-center">
        <FontAwesomeIcon icon={faHouse} class="w-6"/>
      </div>
      <div class="flex gap-2 items-center">
        <div class="w-4 mr-3">
          <FontAwesomeIcon icon={faMoon} />
        </div>
        <div class="w-7 h-7 bg-profile bg-no-repeat bg-center bg-cover bg-fit rounded-2xl"></div>
        <div>
          Thazin Naing
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>

      </div>

    </div>
  );
}

export default NavBar;
