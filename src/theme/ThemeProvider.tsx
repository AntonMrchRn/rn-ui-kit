import React, { FC, createContext, useContext } from 'react';
import { Colors, colors } from './palette';

const ThemeContext = createContext<Colors>(colors);
ThemeContext.displayName = 'ThemeContext';

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC<{
  children: JSX.Element | JSX.Element[];
  theme?: Colors;
}> = ({ children, theme = colors }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
