import React from 'react';
import { AuthProvider, ColorSchemeProvider } from './provider';
import { PageRoutes } from './routes';
import { ToastAlert } from './components/alerts';

const App = () => {
  return (
    <ColorSchemeProvider>
      <AuthProvider>
        <PageRoutes />
        <ToastAlert />
      </AuthProvider>
    </ColorSchemeProvider>
  );
};

export default App;
