import React from 'react';
import { AuthProvider, ColorSchemeProvider, DialogProvider } from './provider';
import { PageRoutes } from './routes';

const App = () => {
  return (
    <ColorSchemeProvider>
      <AuthProvider>
        <DialogProvider>
          <PageRoutes />
        </DialogProvider>
      </AuthProvider>
    </ColorSchemeProvider>
  );
};

export default App;
