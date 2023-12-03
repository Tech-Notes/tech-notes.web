import React from 'react';
import { ColorSchemeProvider } from './utils';
import { PageRoutes } from './routes';

const App = () => {
  return (
    <ColorSchemeProvider>
      <PageRoutes/>
    </ColorSchemeProvider> 
  );
}

export default App;
