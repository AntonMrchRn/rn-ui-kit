import React, { FC, createContext, useContext } from 'react';
import { Colors, colors } from './palette';

const ThemeContext = createContext<Colors>(colors);
ThemeContext.displayName = 'ThemeContext';

export const useTheme = () => useContext(ThemeContext);

export type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
  /**
   * Принимает в себя обьект, с помощью которого можно переназначить определенные заданные цвета в палетке своими
   *
   */
  theme?: Colors;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = colors,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
