import React, {useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon, faSun, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useColorScheme } from '../../provider/ColorSchemeProvider';
import { Button, Div, Text } from '../base';
import {useNavigate} from "react-router";
import { useAuth } from '../../provider/AuthProvider';

const profile={ image: "bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww')]"}

const NavigationBar = () => {
  const navigate=useNavigate();

  const {username, Logout}= useAuth();
  console.log("UserName", username);

  const [showArrow, setShowArrow]= useState(false);

  const {isDark, setTheme}=useColorScheme();

  const iconClickHandler=()=>{
    setTheme(isDark ? "light" : "dark");
  }

  console.log("showArrow", showArrow)

  const arrowClickHandler=()=>{
    setShowArrow(prev => !prev)
  }

  const onClickHandler=()=>{
    navigate("/")
  }

  return (
    <Div className="flex items-center justify-between pr-4 border-b border-gray-200 dark:border-gray-600 h-16 cursor-pointer relative">
      <Div className="flex items-center w-1/4 justify-center" onClick={onClickHandler}>
        <FontAwesomeIcon icon={faHouse} className="w-6 h-6"/>
      </Div>
      <Div className='flex items-center gap-2'>
        <Div className="w-3.5 mr-3" onClick={iconClickHandler}>
          {isDark ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun} />}
        </Div>

        {username ? <>
            <Div className={`w-7 h-7 bg-no-repeat bg-center bg-cover bg-fit rounded-2xl ${profile.image}`}></Div>
            <Text>{username}</Text>

            <Div onClick={arrowClickHandler}>
              {!showArrow ? <>
                <FontAwesomeIcon icon={faAngleDown} /> 
                <Div>
                  <Button onClick={Logout} className="absolute bg-light dark:bg-black top-16 py-2 px-4 right-4">Log Out</Button> 
                </Div>
              </>
                : 
                <FontAwesomeIcon icon={faAngleUp} />}
            </Div>
            </>
          :
            <Button onClick={()=>navigate("/signin")} className="px-3 py-2">Sign in</Button>
        }
        
      </Div>
    </Div>
  );
}
export default NavigationBar;
