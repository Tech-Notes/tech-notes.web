import { Suspense } from 'react';
import { Div, Loading } from '../components/base';

const LoyaltySystem = () => {
  return (
    <Suspense fallback={Loading}>
      <Div level="2" className="p-10 w-full h-full">
        Loyalty System
      </Div>
    </Suspense>
  );
};

export default LoyaltySystem;
