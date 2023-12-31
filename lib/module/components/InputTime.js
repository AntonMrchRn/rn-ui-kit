function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import MaskInput from 'react-native-mask-input';
import { ClockIcon } from '../icons/ClockIcon';
export const InputTime = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    containerStyle,
    isError,
    disabled,
    placeholderTextColor,
    style,
    onFocus,
    onBlur,
    placeholder,
    mask,
    ...props
  } = _ref;
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();
  const getColor = () => {
    if (isError) {
      return theme.text.danger;
    }
    if (disabled) {
      return theme.text.neutralDisable;
    }
    if (props.value) {
      return theme.text.basic;
    }
    return theme.text.neutral;
  };
  const getBackgroundColor = () => {
    if (disabled) {
      return theme.background.neutralOptional;
    }
    if (isError) {
      return theme.background.fieldDanger;
    }
    return theme.background.fieldMain;
  };
  const styles = StyleSheet.create({
    initial: {
      backgroundColor: getBackgroundColor(),
      padding: 0,
      borderRadius: 8,
      height: 44,
      width: 150,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: disabled ? 0 : 1,
      borderColor: isError ? theme.background.fieldDanger : theme.background.fieldMain
    },
    input: {
      flex: 1,
      padding: 0,
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 17,
      lineHeight: 24,
      color: disabled ? theme.text.neutralDisable : theme.text.basic
    },
    focused: {
      borderColor: isError ? theme.stroke.danger : theme.stroke.accent
    },
    icon: {
      marginRight: 8
    }
  });
  const currentContainerStyle = StyleSheet.compose(styles.initial, [isFocused ? styles.focused : {}, containerStyle]);
  const currentInputStyle = StyleSheet.compose(styles.input, style);
  const handleFocus = e => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };
  const handleBlur = e => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };
  const timeMask = [/\d/, /\d/, ':', /\d/, /\d/];
  return /*#__PURE__*/React.createElement(View, {
    style: currentContainerStyle
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.icon
  }, /*#__PURE__*/React.createElement(ClockIcon, {
    color: getColor()
  })), /*#__PURE__*/React.createElement(MaskInput, _extends({
    placeholder: placeholder || '00:00',
    editable: !disabled,
    selectTextOnFocus: !disabled,
    placeholderTextColor: disabled ? theme.text.neutralDisable : placeholderTextColor || theme.text.neutral,
    onFocus: handleFocus,
    style: currentInputStyle,
    onBlur: handleBlur,
    mask: mask || timeMask,
    keyboardType: 'numeric' || props.keyboardType
  }, props, {
    ref: ref
  })));
});
//# sourceMappingURL=InputTime.js.map