function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { PlusIcon } from '../icons/PlusIcon';
import { Text } from './Text';
export const Button = _ref => {
  let {
    icon,
    variant = 'accent',
    labelStyle,
    label = '',
    size = 'M',
    isPending,
    style,
    activeOpacity,
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = StyleSheet.create({
    label: {
      marginLeft: icon || isPending ? 8 : 0,
      lineHeight: size === 'S' ? 20 : 24,
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '600',
      textAlign: 'center'
    },
    button: {
      paddingHorizontal: 24,
      paddingVertical: 4,
      width: '100%',
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      minHeight: 48
    },
    smallButton: {
      paddingVertical: 4,
      paddingHorizontal: 16,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      minHeight: 36
    },
    accent: {
      backgroundColor: theme.background.accent,
      fontFamily: 'Nunito Sans'
    },
    danger: {
      backgroundColor: theme.background.danger,
      fontFamily: 'Nunito Sans',
      lineHeight: size === 'S' ? 36.3 : 24
    },
    ghost: {
      borderWidth: 0,
      fontFamily: 'Nunito Sans',
      lineHeight: size === 'S' ? 20 : 24,
      paddingHorizontal: size === 'S' ? 0 : 24,
      borderRadius: 0
    },
    secondary: {
      backgroundColor: theme.background.neutralDisableSecond
    },
    dangerGhost: {
      borderWidth: 0,
      fontFamily: 'Nunito Sans',
      lineHeight: size === 'S' ? 20 : 24,
      paddingHorizontal: size === 'S' ? 0 : 24,
      borderRadius: 0
    },
    outlineAccent: {
      backgroundColor: 'white',
      borderWidth: 1.5,
      paddingHorizontal: size === 'S' ? 16 : 24,
      borderColor: theme.background.accent
    },
    outlineDanger: {
      backgroundColor: 'white',
      borderWidth: 1.5,
      paddingHorizontal: size === 'S' ? 16 : 24,
      borderColor: theme.background.danger
    },
    accentDisabled: {
      backgroundColor: theme.background.accentDisable,
      borderWidth: 0
    },
    dangerDisabled: {
      backgroundColor: theme.background.dangerDisable,
      borderWidth: 0
    },
    outlineAccentDisabled: {
      backgroundColor: 'white',
      borderColor: theme.background.accentMessage
    },
    outlineDangerDisabled: {
      backgroundColor: 'white',
      borderColor: theme.background.dangerDisable
    },
    secondaryDisabled: {
      backgroundColor: theme.background.neutralOptional
    },
    ghostDisabled: {
      backgroundColor: 'transparent'
    },
    dangerGhostDisabled: {
      backgroundColor: 'transparent'
    }
  });
  const stylesLabel = StyleSheet.create({
    accent: {
      color: theme.background.main
    },
    danger: {
      color: theme.background.main
    },
    ghost: {
      color: theme.icons.basic
    },
    secondary: {
      color: theme.text.basic
    },
    dangerGhost: {
      color: theme.background.danger
    },
    ghostDisabled: {
      color: theme.background.neutralDisable
    },
    dangerGhostDisabled: {
      color: theme.background.dangerDisable
    },
    outlineAccent: {
      color: theme.background.accent
    },
    outlineDanger: {
      color: theme.background.danger
    },
    accentDisabled: {
      color: theme.background.main
    },
    dangerDisabled: {
      color: theme.background.main
    },
    outlineAccentDisabled: {
      color: theme.background.accentMessage
    },
    outlineDangerDisabled: {
      color: theme.background.dangerDisable
    },
    secondaryDisabled: {
      color: theme.text.neutralDisable
    }
  });
  const getIcon = () => {
    if (isPending) {
      return /*#__PURE__*/React.createElement(ActivityIndicator, {
        color: props.disabled ? stylesLabel[`${variant}Disabled`].color : stylesLabel[variant].color
      });
    }
    if (icon) {
      if (typeof icon === 'boolean') {
        return /*#__PURE__*/React.createElement(PlusIcon, {
          color: props.disabled ? stylesLabel[`${variant}Disabled`].color : stylesLabel[variant].color,
          size: size === 'S' ? 20 : 24
        });
      }
      return icon;
    }
    return null;
  };
  const currentButtonStyle = StyleSheet.compose(size === 'S' ? styles.smallButton : styles.button, [styles[variant], props.disabled && styles[`${variant}Disabled`], style]);
  const currentLabelStyle = StyleSheet.compose(styles.label, [stylesLabel[variant], props.disabled && stylesLabel[`${variant}Disabled`], labelStyle]);
  return /*#__PURE__*/React.createElement(TouchableOpacity, _extends({
    style: currentButtonStyle
  }, props, {
    activeOpacity: activeOpacity || 0.5
  }), getIcon(), label && !isPending && /*#__PURE__*/React.createElement(Text, {
    variant: size === 'S' ? 'bodySBold' : 'bodyMBold',
    color: theme.background.main,
    style: currentLabelStyle
  }, label));
};
//# sourceMappingURL=Button.js.map