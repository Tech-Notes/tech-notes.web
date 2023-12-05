import React, {useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon, faSun, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useColorScheme } from '../../utils/ColorSchemeProvider';
import { Button, Div, Text } from '../../base';
import {useNavigate} from "react-router";
import { useUserContext } from '../../utils/UserProvider';

const profile={title: "Thazin Naing", image: "bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww')]"}

const NavigationBar = () => {
  const navigate=useNavigate();

  const {user} = useUserContext();

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

        {user ? <>
            <Div className={`w-7 h-7 bg-no-repeat bg-center bg-cover bg-fit rounded-2xl ${profile.image}`}></Div>
            <Text>{profile.title}</Text>

            <div onClick={arrowClickHandler}>
            {!showArrow ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}
            </div>
            </>
          :
          <div onClick={()=>navigate("/signin")}> 
            <Button className="px-3 py-2">Sign in</Button>
          </div>
        }
        
      </Div>
    </Div>
  );
}
export default NavigationBar;
