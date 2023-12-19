import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ColorSchemeContext = createContext(null);

const useColorSchemeContext = () => useContext(ColorSchemeContext);

export const useColorScheme = () => {
  const { theme, setTheme } = useColorSchemeContext();
  const isDark = theme === 'dark';
  return { theme, setTheme, isDark };
};

const ColorSchemeProvider = ({ children }) => {
  const [scheme, setScheme] = useState(localStorage.getItem('theme'));

  const setTheme = useCallback((theme) => {
    setScheme(theme);
  }, []);

  useEffect(() => {
    if (
      scheme === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme)').matches)
    ) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [scheme]);

  return (
    <ColorSchemeContext.Provider value={{ theme: scheme, setTheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider;
