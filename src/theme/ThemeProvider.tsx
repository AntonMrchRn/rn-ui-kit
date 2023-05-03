import React, { FC, createContext, useState } from 'react';
import { Colors, colors } from './palette';

export type ThemeContextProps = {
  theme: Colors;
  setTheme: React.Dispatch<React.SetStateAction<Colors>>;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: colors,
  setTheme: () => {},
});

export const ThemeProvider: FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const [theme, setTheme] = useState<Colors>(colors);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
