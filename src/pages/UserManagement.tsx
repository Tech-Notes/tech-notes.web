import { Suspense } from 'react';
import { Div, Loading } from '../components/base';

const UserManagement = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Div level="2" className="p-10 w-full h-full">
        User Management
      </Div>
    </Suspense>
  );
};

export default UserManagement;
