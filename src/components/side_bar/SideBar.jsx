import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faBox, faCartShopping, faDashboard, faRocket, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {useNavigate} from "react-router";
import {faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Box , Div, Text} from '../../base';


const sideMenuList = [
    {title: "Dashboard", icon: faDashboard, id: Math.random()*100, href: "/dashboard"},
    {title: "Inventory", icon: faBox, id: Math.random()*100, href: "/inventory", subMenu: [{title: "Products", icon: faJs,href: "/inventory/products", id: Math.random()*100}]},
    {title: "Sales", icon: faCartShopping, id: Math.random()*100, href: "/sales", subMenu: [{title: "Customers", icon: faJs,href: "/sales/customers", id: Math.random()*100}]},
    {title: "Loyalty System", icon: faStar, id: Math.random()*100, href: "/loyalty", subMenu: [{title: "System", icon: faJs,href: "/loyalty/system", id: Math.random()*100}]},
    {title: "Post Queue", icon: faRocket, id: Math.random()*100, href: "/postqueue"},
    {title: "User Management", icon: faUser, id: Math.random()*100, href: "/usermanagement"},
]

const SideBar = () => {

  const navigate= useNavigate();

  const [currentPath, setCurrentPath]=useState();

  return (
    <Div className="h-full p-2 border-r border-gray-200 dark:border-gray-600 cursor-pointer">
      {sideMenuList?.map((menu)=>{
        return(
          <div key={menu.key}>
            <Box onClick={()=>!menu.subMenu ? navigate(menu.href): setCurrentPath(prev=> prev === menu.href ? "" :menu.href)} 
              className="flex h-14 items-center p-3 gap-3">
              <FontAwesomeIcon icon={menu.icon} />
              <Text>{menu.title}</Text>
              {menu.subMenu && <div>{currentPath ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}</div> }
            </Box>
      
            {currentPath === menu.href && 
              menu.subMenu.map((subMenu)=>{
                return(
                  <Box key={subMenu.key} onClick={()=>navigate(subMenu.href)} className="flex h-13 items-center p-2 gap-3 ml-4" >
                    <FontAwesomeIcon icon={subMenu.icon} />
                    <Text>{subMenu.title}</Text>
                  </Box>
                )
              })
            }
          </div>
        )
      })}   
    </Div>
  );
}

export default SideBar;
