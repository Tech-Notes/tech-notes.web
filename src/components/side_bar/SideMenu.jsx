import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {useNavigate} from "react-router";
import {faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Box , Text} from '../../base';

const SideMenu = ({menu}) => {

  const navigate= useNavigate();

  const [currentPath, setCurrentPath]=useState();

  const clickMenuHandler=()=>{
    !menu.subMenu ? navigate(menu.href): setCurrentPath(prev=> prev === menu.href ? "" :menu.href)
  }

  return (
    <div>
      <div onClick={clickMenuHandler}>
        <Box className="flex h-14 items-center p-3 gap-3">
          <FontAwesomeIcon icon={menu.icon} />
          <Text>{menu.title}</Text>
          {menu.subMenu && <div>{currentPath ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}</div> }
        </Box>
      </div>

      {currentPath === menu.href && 
        menu.subMenu.map((subMenu)=>{
          return(
            <div onClick={()=>navigate(subMenu.href)}>
              <Box className="flex h-13 items-center p-2 gap-3 ml-4" key={subMenu.key}>
                <FontAwesomeIcon icon={subMenu.icon} />
                <Text>{subMenu.title}</Text>
              </Box>
            </div>
          )
        })
      }
    </div>
  );
}

export default SideMenu;
