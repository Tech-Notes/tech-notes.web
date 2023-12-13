import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faBox, faCartShopping, faDashboard, faRocket, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "./SideMenu";
import { Div } from "../base";
import { useState } from "react";

const sideMenuList = [
    {title: "Dashboard", icon: faDashboard, id: Math.random()*100, href: "/dashboard"},
    {title: "Inventory", icon: faBox, id: Math.random()*100, href: "/inventory", subMenu: [{title: "Products", icon: faJs,href: "/protected/inventory/products", id: Math.random()*100}]},
    {title: "Sales", icon: faCartShopping, id: Math.random()*100, href: "/sales", subMenu: [{title: "Customers", icon: faJs,href: "/protected/sales/customers", id: Math.random()*100}]},
    {title: "Loyalty System", icon: faStar, id: Math.random()*100, href: "/loyalty", subMenu: [{title: "System", icon: faJs,href: "/protected/loyalty/system", id: Math.random()*100}]},
    {title: "Post Queue", icon: faRocket, id: Math.random()*100, href: "/protected/postqueue"},
    {title: "User Management", icon: faUser, id: Math.random()*100, href: "/protected/usermanagement"},
]

const SideBar = () => {

  const [currentPath, setCurrentPath]=useState();

  return (
    <Div className="h-full p-2 border-r border-gray-200 dark:border-gray-600 cursor-pointer">
      {sideMenuList?.map((menu)=>{
        return (<SideMenu key={menu.id} menu={menu} currentPath={currentPath} setCurrentPath={setCurrentPath}/>)
      })}   
    </Div>
  );
}

export default SideBar;
