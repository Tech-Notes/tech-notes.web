import { Route, Routes } from 'react-router';
import { AuthLayout, Layout } from '../layout';
import { Customers, DashBoard, ForgotPassword, LoyaltySystem, OTPCode, PostQueue, Products, Signin, UserManagement } from '../pages';
import ProtectedRoutes from './ProtectedRoutes';

const PageRoutes = () => {
  return ( 
    <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<ProtectedRoutes />}>
              {/* these two routes, should be abale to combine 
                like this: <Route index path="/dashboard" element={<DashBoard />} />
              */}
              <Route index element={<DashBoard />} />
              <Route path="/dashboard" element={<DashBoard />} />
              {/* command end... */}
              <Route path="/inventory/products" element={< Products/>} />
              <Route path="/sales/customers" element={<Customers/>} />
              <Route path="/loyalty/system" element={<LoyaltySystem/>} />
              <Route path="/postqueue" element={<PostQueue/>} />
              <Route path="/usermanagement" element={<UserManagement/>} />
            </Route>

          </Route>
          <Route path="/" element={<AuthLayout/>}>
            <Route path="/signin" element={<Signin/>} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
            <Route path="/otpcode" element={<OTPCode/>} />
          </Route>
          
        </Routes>
  );
}

export default PageRoutes;
