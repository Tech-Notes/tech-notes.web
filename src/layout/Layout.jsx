import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Div, Loading } from '../components/base';
import { NavigationBar } from '../components/navigation';
import { SideBar } from '../components/side_bar';

const Layout = () => {
  return (
    <Div className="w-screen h-screen box-border flex flex-col p-0 m-0">
      <NavigationBar />
      <Div className="flex h-full">
        <SideBar />
        <Outlet />
      </Div>
    </Div>
  );
};

export default Layout;
