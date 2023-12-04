import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon, faSun, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useColorScheme } from '../../utils/ColorSchemeProvider';
import { Div, Text } from '../../base';
import {useNavigate} from "react-router";

const profile={title: "Thazin Naing", image: "bg-profile"}

const NavigationBar = () => {
  const navigate=useNavigate();

  const [showArrow, setShowArrow]= useState(false);

  const {isDark, setTheme}=useColorScheme();

  const iconClickHandler=()=>{
    setTheme(isDark ? "light" : "dark");
  }

  const arrowClickHandler=()=>{
    setShowArrow(prev=> !prev)
  }

  const onClickHandler=()=>{
    navigate("/")
  }

  return (
    <Div className="flex items-center justify-between pr-4 border-b border-gray-200 dark:border-gray-600 h-16 cursor-pointer">
      <div className="flex items-center w-1/4 justify-center" onClick={onClickHandler}>
        <FontAwesomeIcon icon={faHouse} className="w-6 h-6"/>
      </div>
      <Div className='flex items-center gap-2' onClick={arrowClickHandler}>
        <div className="w-3.5 mr-3" onClick={iconClickHandler}>
          {isDark ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun} />}
        </div>
        
        <Div className={`w-7 h-7 bg-no-repeat bg-center bg-cover bg-fit rounded-2xl ${profile.image}`}></Div>
        
        <Text>
         {profile.title}
        </Text>

        <div onClick={arrowClickHandler}>
          {!showArrow ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}
        </div>
      </Div>
    </Div>
  );
}
export default NavigationBar;
