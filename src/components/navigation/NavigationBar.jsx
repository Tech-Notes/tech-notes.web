import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon, faSun, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useColorScheme } from '../../utils/ColorSchemeProvider';
import { Div } from '../../base';
import {useNavigate} from "react-router";

const profile={title: "Thazin Naing", image: "bg-profile"}

const NavigationBar = () => {
  const navigate=useNavigate();

  const [arrow, setArrow]= useState(false);

  const {isDark, setTheme}=useColorScheme();

  const iconClickHandler=()=>{
    setTheme(isDark ? "light" : "dark");
  }

  const arrowClickHandler=()=>{
    setArrow(prev=> !prev)
  }

  const onClickHandler=()=>{
    navigate("/")
  }

  return (
    <Div className="flex items-center justify-between pr-4 border-b border-gray-300 dark:border-gray-600 h-16 cursor-pointer">
      <div className="flex items-center w-1/4 justify-center" onClick={onClickHandler}>
        <FontAwesomeIcon icon={faHouse} className="w-6 h-6"/>
      </div>
      <div className='flex items-center gap-2' onClick={arrowClickHandler}>
        <div className="w-3.5 mr-3" onClick={iconClickHandler}>
          {isDark ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun} />}
        </div>
        
        <div className={`w-7 h-7 bg-no-repeat bg-center bg-cover bg-fit rounded-2xl ${profile.image}`}></div>
        
        <div>
         {profile.title}
        </div>

        <div>
          {!arrow ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}
        </div>
      </div>
    </Div>
  );
}
export default NavigationBar;
