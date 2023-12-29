import { Suspense } from 'react';
import Loading, { Div } from '../components/base';

const Customers = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Div level="2" className="p-10 w-full h-full">
        Customer Page
      </Div>
    </Suspense>
  );
};

export default Customers;
