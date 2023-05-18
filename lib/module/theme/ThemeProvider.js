import React, { createContext, useContext } from 'react';
import { colors } from './palette';
const ThemeContext = /*#__PURE__*/createContext(colors);
ThemeContext.displayName = 'ThemeContext';
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = _ref => {
  let {
    children,
    theme = colors
  } = _ref;
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
};
//# sourceMappingURL=ThemeProvider.js.map