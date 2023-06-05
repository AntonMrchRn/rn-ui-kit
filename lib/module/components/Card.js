function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
export const Card = _ref => {
  let {
    isShadow,
    children,
    style,
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.background.main,
      alignSelf: 'flex-start',
      paddingVertical: 14,
      width: '100%'
    },
    shadow: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3
    }
  });
  const currentCardStyle = StyleSheet.compose(styles.card, [isShadow && styles.shadow, style]);
  return /*#__PURE__*/React.createElement(View, _extends({
    style: currentCardStyle
  }, props), children);
};
//# sourceMappingURL=Card.js.map