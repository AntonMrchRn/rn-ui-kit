function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { CheckBoxIcon } from '../icons/CheckBoxIcon';
export const CheckBox = _ref => {
  let {
    icon,
    isError,
    style,
    activeOpacity = 0.7,
    ...props
  } = _ref;
  const theme = useTheme();
  const stylesCheckBox = StyleSheet.create({
    initial: {
      height: 20,
      width: 20,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'tranpsarent'
    },
    uncheckedUndisabled: {
      borderWidth: 1.5,
      borderColor: theme.background.accent,
      backgroundColor: 'transparent'
    },
    checkedUndisabled: {
      borderWidth: 0,
      backgroundColor: theme.background.accent
    },
    uncheckedDisabled: {
      borderWidth: 1.5,
      borderColor: theme.background.neutralDisable,
      backgroundColor: 'transparent'
    },
    checkedDisabled: {
      borderWidth: 0,
      borderColor: theme.background.neutralDisable,
      backgroundColor: theme.background.neutralDisable
    },
    uncheckedUndisabledError: {
      borderWidth: 1.5,
      borderColor: theme.background.danger,
      backgroundColor: '#FEEDEE'
    },
    checkedUndisabledError: {
      borderWidth: 0,
      backgroundColor: theme.background.danger
    }
  });
  const getStyle = () => {
    if (!props.checked && !props.disabled && !isError) {
      return stylesCheckBox.uncheckedUndisabled;
    }
    if (props.checked && !props.disabled && !isError) {
      return stylesCheckBox.checkedUndisabled;
    }
    if (!props.checked && props.disabled) {
      return stylesCheckBox.uncheckedDisabled;
    }
    if (props.checked && props.disabled) {
      return stylesCheckBox.checkedDisabled;
    }
    if (isError && !props.checked && !props.disabled) {
      return stylesCheckBox.uncheckedUndisabledError;
    }
    if (isError && props.checked && !props.disabled) {
      return stylesCheckBox.checkedUndisabledError;
    }
    return;
  };
  const currentStyle = StyleSheet.compose(stylesCheckBox.initial, [getStyle(), style]);
  return /*#__PURE__*/React.createElement(TouchableOpacity, _extends({
    style: currentStyle,
    activeOpacity: activeOpacity
  }, props), props.checked && (icon || /*#__PURE__*/React.createElement(CheckBoxIcon, null)));
};
//# sourceMappingURL=Checkbox.js.map