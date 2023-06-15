function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { BadgeIcon } from '../icons/BadgeIcon';
export const Badge = _ref => {
  let {
    icon,
    variant = 'accent',
    labelStyle,
    label = '',
    secondary,
    style,
    iconStyle,
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = StyleSheet.create({
    label: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16
    },
    badge: {
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start'
    },
    accent: {
      backgroundColor: theme.background.accent
    },
    accentSecondary: {
      backgroundColor: theme.background.fieldMain
    },
    danger: {
      backgroundColor: theme.background.danger
    },
    dangerSecondary: {
      backgroundColor: theme.background.fieldDanger
    },
    secondary: {
      backgroundColor: theme.background.secondary
    },
    secondarySecondary: {
      backgroundColor: theme.background.secondaryBadge
    },
    warning: {
      backgroundColor: theme.icons.warning
    },
    warningSecondary: {
      backgroundColor: theme.background.fieldWarning
    },
    success: {
      backgroundColor: theme.background.success
    },
    successSecondary: {
      backgroundColor: theme.background.fieldSuccess
    },
    basic: {
      backgroundColor: theme.icons.basic
    },
    basicSecondary: {
      backgroundColor: theme.background.neutralDisableSecond
    },
    special: {
      backgroundColor: theme.background.special
    },
    specialSecondary: {
      backgroundColor: theme.background.specialLight
    }
  });
  const color = secondary ? styles[variant].backgroundColor : theme.text.contrast;
  const getIcon = () => {
    if (icon) {
      if (typeof icon === 'boolean') {
        return /*#__PURE__*/React.createElement(BadgeIcon, {
          color: color
        });
      }
      return icon;
    }
    return null;
  };
  const currentBadgeStyle = StyleSheet.compose(styles.badge, [secondary ? styles[`${variant}Secondary`] : styles[variant], style]);
  const currentLabelStyle = StyleSheet.compose(styles.label, [{
    color: color
  }, labelStyle]);
  return /*#__PURE__*/React.createElement(View, _extends({
    style: currentBadgeStyle
  }, props), /*#__PURE__*/React.createElement(View, {
    style: iconStyle
  }, getIcon()), /*#__PURE__*/React.createElement(Text, {
    style: currentLabelStyle
  }, label));
};
//# sourceMappingURL=Badge.js.map