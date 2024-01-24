import { Route, Routes } from 'react-router';
import { AuthLayout, Layout } from '../layout';
import {
  Customers,
  DashBoard,
  ForgotPassword,
  InvalidRoutePage,
  LoyaltySystem,
  NewPassword,
  OTPCode,
  PostQueue,
  Products,
  Signin,
  UserManagement
} from '../pages';
import ProtectedRoutes from './ProtectedRoutes';
// import ProtectedRoutes from './ProtectedRoutes';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route index element={<DashBoard />} />
          <Route index path="/dashboard" element={<DashBoard />} />
          <Route path="/inventory/products" element={<Products />} />
          <Route path="/sales/customers" element={<Customers />} />
          <Route path="/loyalty/system" element={<LoyaltySystem />} />
          <Route path="/postqueue" element={<PostQueue />} />
          <Route path="/usermanagement" element={<UserManagement />} />
        </Route>
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/otp_code" element={<OTPCode />} />
        <Route path="/new_password" element={<NewPassword />} />
      </Route>
      <Route path="/*" element={<InvalidRoutePage />} />
    </Routes>
  );
};

export default PageRoutes;
