import React from 'react';
import { ColorSchemeProvider , UserProvider} from './utils';
import { PageRoutes } from './routes';

const App = () => {
  return (
    <ColorSchemeProvider>
      <UserProvider>
        <PageRoutes/>
      </UserProvider>
    </ColorSchemeProvider> 
  );
}

export default App;
