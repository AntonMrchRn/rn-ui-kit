function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { CheckBoxIcon } from '../icons/CheckBoxIcon';
export const CheckBox = _ref => {
  let {
    icon,
    style,
    activeOpacity = 0.7,
    ...props
  } = _ref;
  const theme = useTheme();
  const stylesCheckBox = StyleSheet.create({
    initial: {
      height: 20,
      width: 20,
      borderWidth: 1.5,
      borderColor: theme.background.accent,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    uncheckedUndisabled: {
      borderColor: theme.background.accent,
      backgroundColor: 'transparent'
    },
    checkedUndisabled: {
      borderColor: theme.background.accent,
      backgroundColor: theme.background.accent
    },
    uncheckedDisabled: {
      borderColor: theme.background.neutralDisable,
      backgroundColor: 'transparent'
    },
    checkedDisabled: {
      borderColor: theme.background.neutralDisable,
      backgroundColor: theme.background.neutralDisable
    }
  });
  const getStyle = () => {
    if (!props.checked && !props.disabled) {
      return stylesCheckBox.uncheckedUndisabled;
    }
    if (props.checked && !props.disabled) {
      return stylesCheckBox.checkedUndisabled;
    }
    if (!props.checked && props.disabled) {
      return stylesCheckBox.uncheckedDisabled;
    }
    if (props.checked && props.disabled) {
      return stylesCheckBox.checkedDisabled;
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