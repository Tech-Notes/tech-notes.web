import React from 'react';
import { AuthProvider, ColorSchemeProvider, DialogProvider } from './provider';
import { PageRoutes } from './routes';
import { ToastAlert } from './components/alerts';

const App = () => {
  return (
    <ColorSchemeProvider>
      <AuthProvider>
        <DialogProvider>
          <PageRoutes />
          <ToastAlert />
        </DialogProvider>
      </AuthProvider>
    </ColorSchemeProvider>
  );
};

export default App;
