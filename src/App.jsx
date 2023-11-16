import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './layout/Layout';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
        </Routes>
  );
}

export default App;
