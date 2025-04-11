import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const resetTheme = () => {
    setIsDarkMode(false);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};