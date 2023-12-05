import { Route, Routes } from 'react-router';
import { DashBoard,Customers,LoyaltySystem,PostQueue,Products,UserManagement,Signin } from '../pages';
import { Layout, AuthLayout } from '../layout';

const PageRoutes = () => {
  return ( 
    <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<DashBoard />} />
            <Route index path="/dashboard" element={<DashBoard />} />
            <Route path="/inventory/products" element={< Products/>} />
            <Route path="/sales/customers" element={<Customers/>} />
            <Route path="/loyalty/system" element={<LoyaltySystem/>} />
            <Route path="/postqueue" element={<PostQueue/>} />
            <Route path="/usermanagement" element={<UserManagement/>} />
          </Route>
          <Route path="/signin" element={<Signin/>} />
        </Routes>
  );
}

export default PageRoutes;
