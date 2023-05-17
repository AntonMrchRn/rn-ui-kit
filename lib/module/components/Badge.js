function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { BadgeIcon } from '../icons/BadgeIcom';
export const Badge = _ref => {
  let {
    icon,
    variant = 'accent',
    labelStyle,
    label = '',
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = StyleSheet.create({
    label: {
      color: '#fff',
      marginLeft: 5,
      fontFamily: 'Nunito Sans Regular'
    },
    badge: {
      height: 28,
      borderRadius: 8,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start'
    },
    accent: {
      backgroundColor: theme.background.accent
    },
    danger: {
      backgroundColor: theme.background.danger
    },
    secondary: {
      backgroundColor: theme.background.secondary
    },
    warning: {
      backgroundColor: theme.icons.warning
    },
    success: {
      backgroundColor: theme.background.success
    },
    basic: {
      backgroundColor: theme.icons.basic
    },
    special: {
      backgroundColor: theme.background.special
    }
  });
  const getIcon = () => {
    if (icon) {
      if (typeof icon === 'boolean') {
        return /*#__PURE__*/React.createElement(BadgeIcon, null);
      }
      return icon;
    }
    return null;
  };
  const currentBadgeStyle = StyleSheet.compose(styles.badge, [styles[variant], props.style]);
  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
  return /*#__PURE__*/React.createElement(View, _extends({
    style: currentBadgeStyle
  }, props), getIcon(), /*#__PURE__*/React.createElement(Text, {
    style: currentLabelStyle
  }, label));
};
//# sourceMappingURL=Badge.js.map