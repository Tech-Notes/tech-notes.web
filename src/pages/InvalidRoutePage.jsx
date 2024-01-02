import React, { Suspense } from 'react';
import { Div, Loading, Text } from '../components/base';

const InvalidRoutePage = () => {
  return (
    <Suspense fallback={Loading}>
      <Div className="h-screen flex justify-center pt-20">
        <Text className="text-3xl">Page Error : 404 Not Found!</Text>
      </Div>
    </Suspense>
  );
};

export default InvalidRoutePage;
