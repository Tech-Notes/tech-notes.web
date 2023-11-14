import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/Nav';

const Layout = () => {
  return (
    <div>
        <NavBar />
            <Outlet />
        </div>
  );
}

export default Layout;
