import { Route, Routes } from 'react-router';
import { DashBoard,Customers,LoyaltySystem,PostQueue,Products,UserManagement,Signin,ForgotPassword,OTPCode } from '../pages';
import { Layout , AuthLayout} from '../layout';
import ProtectedRoutes from './ProtectedRoutes';

const PageRoutes = () => {
  return ( 
    <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<DashBoard />} />
            <Route index path="/dashboard" element={<DashBoard />} />

            <Route path="/" element={<ProtectedRoutes />} >
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
