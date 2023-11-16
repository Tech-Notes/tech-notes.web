import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './layout/Layout';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import InventOne from './pages/InventOne';
import LoyaltyOne from './pages/LoyaltyOne';
import SaleOne from './pages/SaleOne';
import PostQueue from './pages/PostQueue';
import UserManagement from './pages/UserManagement';

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/inventOne" element={< InventOne/>} />
            <Route path="/loyaltyOne" element={<LoyaltyOne/>} />
            <Route path="/saleOne" element={<SaleOne/>} />
            <Route path="/postQueue" element={<PostQueue/>} />
            <Route path="/userManagement" element={<UserManagement/>} />
          </Route>
        </Routes>
  );
}

export default App;
