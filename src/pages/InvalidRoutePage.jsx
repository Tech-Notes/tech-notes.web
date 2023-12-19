import React from 'react';
import { Div, Text } from '../components/base';

const InvalidRoutePage = () => {
  return (
    <Div className="h-screen flex justify-center pt-20">
      <Text className="text-3xl">Page Error : 404 Not Found!</Text>
    </Div>
  );
};

export default InvalidRoutePage;
