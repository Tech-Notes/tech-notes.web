import { Suspense } from 'react';
import { Loading, Div } from '../components/base';

const DashBoard = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Div level="2" className="p-10 w-full h-full">
        Dashboard
      </Div>
    </Suspense>
  );
};

export default DashBoard;
