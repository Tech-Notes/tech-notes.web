import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <div class="bg-slate-200 w-full h-full box-border">
        <NavBar />
        <Outlet />
        </div>
  );
}

export default Layout;
