function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { View } from 'react-native';
export const RadioButton = _ref => {
  let {
    style,
    isError,
    activeOpacity = 0.7,
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = StyleSheet.create({
    initial: {
      height: 20,
      width: 20,
      borderWidth: 1.5,
      borderColor: theme.background.accent,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    uncheckedUndisabled: {
      borderColor: theme.background.accent,
      backgroundColor: 'transparent'
    },
    checkedUndisabled: {
      borderColor: theme.background.accent,
      backgroundColor: '#fff'
    },
    uncheckedDisabled: {
      borderColor: theme.background.neutralDisable,
      backgroundColor: 'transparent'
    },
    checkedDisabled: {
      borderColor: theme.background.neutralDisable,
      backgroundColor: 'transparent'
    },
    radioActive: {
      height: 10,
      width: 10,
      backgroundColor: isError && props.checked && !props.disabled ? theme.background.danger : theme.background.accent,
      borderRadius: 50
    },
    radioDisabled: {
      backgroundColor: theme.background.neutralDisable
    },
    uncheckedUndisabledError: {
      borderColor: theme.background.danger,
      backgroundColor: '#FEEDEE'
    },
    checkedUndisabledError: {
      borderColor: theme.background.danger,
      backgroundColor: 'transparent'
    }
  });
  const getStyle = () => {
    if (!props.checked && !props.disabled && !isError) {
      return styles.uncheckedUndisabled;
    }
    if (props.checked && !props.disabled && !isError) {
      return styles.checkedUndisabled;
    }
    if (!props.checked && props.disabled) {
      return styles.uncheckedDisabled;
    }
    if (props.checked && props.disabled) {
      return styles.checkedDisabled;
    }
    if (isError && !props.checked && !props.disabled) {
      return styles.uncheckedUndisabledError;
    }
    if (isError && props.checked && !props.disabled) {
      return styles.checkedUndisabledError;
    }
    return;
  };
  const currentStyle = StyleSheet.compose(styles.initial, [getStyle(), style]);
  return /*#__PURE__*/React.createElement(TouchableOpacity, _extends({
    style: currentStyle,
    activeOpacity: activeOpacity
  }, props), props.checked && /*#__PURE__*/React.createElement(View, {
    style: [styles.radioActive, props.disabled && styles.radioDisabled]
  }));
};
//# sourceMappingURL=RadioButton.js.map