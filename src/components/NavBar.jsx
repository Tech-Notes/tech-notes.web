import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  return (
    <div class="w-full h-16 flex justify-between pr-4 md:pr-9 border-2 border-b-slate-100 ">
      <div class="h-14 w-1/6 flex justify-center items-center md:w-1/12 border-2 border-r-slate-100">
        <FontAwesomeIcon icon={faHouse} class="w-6"/>
      </div>
      <div class="flex gap-1.5 items-center">
        <div class="mr-3">
          <FontAwesomeIcon icon={faMoon} class="w-3.5" />
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
