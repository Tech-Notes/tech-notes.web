import React from 'react';
import { Outlet } from 'react-router';
import { NavigationBar } from '../components/navigation';
import { SideBar } from '../components/side_bar';


const Layout = () => {
  return (
    <div className="w-screen h-screen box-border flex flex-col p-0 m-0">
      <NavigationBar />
      <div className="flex h-full">
        <SideBar/>
        <Outlet/>
      </div>
        
        

    </div>
    
  );
}

export default Layout;
