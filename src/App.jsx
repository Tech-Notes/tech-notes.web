import React from 'react';
import { AuthProvider, ColorSchemeProvider } from './provider';
import { PageRoutes } from './routes';

const App = () => {
  return (
    <ColorSchemeProvider>
      <AuthProvider>
        <PageRoutes />
      </AuthProvider>
    </ColorSchemeProvider>
  );
};

export default App;
