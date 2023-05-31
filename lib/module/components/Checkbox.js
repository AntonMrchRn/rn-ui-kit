function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { CheckBoxIcon } from '../icons/CheckBoxIcon';
export const CheckBox = _ref => {
  let {
    icon,
    ...props
  } = _ref;
  const theme = useTheme();
  const stylesCheckBox = StyleSheet.create({
    initial: {
      height: 32,
      width: 32,
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
  const currentStyle = () => {
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
  const style = StyleSheet.compose(stylesCheckBox.initial, [props.style, currentStyle()]);
  return /*#__PURE__*/React.createElement(TouchableOpacity, _extends({
    style: style
  }, props, {
    activeOpacity: 0.7
  }), props.checked && (icon || /*#__PURE__*/React.createElement(CheckBoxIcon, null)));
};
//# sourceMappingURL=Checkbox.js.map