import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';


const NavBar = () => {
  const navigate=useNavigate();

  const onClickHandler=()=>{
    navigate("/home")
  }

  return (
    <div class="h-full flex justify-between pr-4 md:pr-9 border-b border-slate-200 cursor-pointer bg-slate-400">
      <div onClick={onClickHandler} class=" h-14 w-1/4 flex justify-center items-center md:w-40">
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
