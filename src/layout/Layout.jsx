import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Layout = () => {
  return (
    <div class="bg-slate-300 w-screen h-screen box-border flex flex-col p-0 m-0">
      <div class="h-16">
        <NavBar />
      </div>
      <div class="h-full flex">
        <SideBar/>
        <Outlet />
      </div>
        
        

    </div>
    
  );
}

export default Layout;
