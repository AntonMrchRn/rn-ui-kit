function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { PlusIcon } from '../icons/PlusIcon';
export const Button = _ref => {
  let {
    icon,
    variant = 'accent',
    labelStyle,
    label = '',
    size = 'M',
    isPending,
    style,
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = StyleSheet.create({
    label: {
      color: theme.background.main,
      marginLeft: icon || isPending ? 10 : 0,
      fontFamily: 'Nunito Sans Bold',
      fontSize: 17,
      fontWeight: '700',
      lineHeight: 24
    },
    button: {
      paddingVertical: 12,
      width: '100%',
      borderRadius: 8,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start'
    },
    smallButton: {
      paddingVertical: 12,
      borderRadius: 8,
      paddingHorizontal: 16,
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
    ghost: {
      borderWidth: 0,
      backgroundColor: 'transparency'
    },
    dangerGhost: {
      borderWidth: 0,
      backgroundColor: 'transparency'
    },
    outlineAccent: {
      backgroundColor: 'transparency',
      borderWidth: 2,
      borderColor: theme.background.accent
    },
    outlineDanger: {
      backgroundColor: 'transparency',
      borderWidth: 2,
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
      backgroundColor: 'transparency',
      borderColor: theme.background.neutralDisable
    },
    outlineDangerDisabled: {
      backgroundColor: 'transparency',
      borderColor: theme.background.dangerDisable
    },
    ghostDisabled: {
      backgroundColor: 'transparency'
    },
    dangerGhostDisabled: {
      backgroundColor: 'transparency'
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
      color: theme.background.neutralDisable
    },
    outlineDangerDisabled: {
      color: theme.background.dangerDisable
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
          color: props.disabled ? stylesLabel[`${variant}Disabled`].color : stylesLabel[variant].color
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
    activeOpacity: 0.5
  }), getIcon(), label && !isPending && /*#__PURE__*/React.createElement(Text, {
    style: currentLabelStyle
  }, label));
};
//# sourceMappingURL=Button.js.map