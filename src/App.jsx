import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './layout/Layout';
import Home from './pages/Home';

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/home" element={<Home/>} />
          </Route>
        </Routes>
  );
}

export default App;
