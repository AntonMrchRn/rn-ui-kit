function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { InputClearIcon } from '../icons/InputClearIcon';
import { TouchableOpacity } from 'react-native';
import { InputEyeCloseIcon } from '../icons/InputEyeCloseIcon';
import { InputEyeIcon } from '../icons/InputEyeIcon';
export const Input = _ref => {
  let {
    variant,
    containerStyle,
    style,
    onFocus,
    onBlur,
    placeholderTextColor,
    label,
    labelStyle,
    hint,
    hintStyle,
    isError,
    secureTextEntry,
    multiline,
    ...props
  } = _ref;
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);
  const theme = useTheme();
  const setHeight = () => {
    switch (variant) {
      case 'message':
        return 48;
      case 'textarea':
        return 100;
      default:
        return 44;
    }
  };
  const styles = StyleSheet.create({
    initial: {
      backgroundColor: isError ? theme.background.fieldDanger : theme.background.fieldMain,
      padding: 0,
      borderRadius: 8,
      height: setHeight(),
      flex: 1,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: isError ? theme.background.fieldDanger : theme.background.fieldMain
    },
    input: {
      flex: 1,
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 17,
      lineHeight: 24,
      color: isError ? theme.text.danger : theme.text.basic
    },
    focused: {
      borderColor: isError ? theme.stroke.danger : theme.stroke.accent
    },
    label: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isError ? theme.text.danger : theme.text.neutral,
      marginBottom: 4
    },
    hint: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isError ? theme.text.danger : theme.text.neutral,
      marginTop: 4
    }
  });
  const currentContainerStyle = StyleSheet.compose(styles.initial, [isFocused ? styles.focused : {}, containerStyle]);
  const currentInputStyle = StyleSheet.compose(styles.input, style);
  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
  const currentHintStyle = StyleSheet.compose(styles.hint, hintStyle);
  const currentSecureTextEntry = variant === 'password' && !isVisible || secureTextEntry;
  const handleFocus = e => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };
  const handleBlur = e => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };
  const handleClear = () => {
    var _inputRef$current;
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.clear();
  };
  const handleEye = () => {
    setIsVisible(!isVisible);
  };
  const getPlaceholderColor = () => {
    if (placeholderTextColor) {
      return placeholderTextColor;
    }
    if (typeof props.editable === 'boolean' && !props.editable) {
      return theme.text.neutralDisable;
    }
    return theme.text.neutral;
  };
  return /*#__PURE__*/React.createElement(View, null, label && /*#__PURE__*/React.createElement(Text, {
    style: currentLabelStyle
  }, label), /*#__PURE__*/React.createElement(View, {
    style: currentContainerStyle
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    placeholderTextColor: getPlaceholderColor(),
    onFocus: handleFocus,
    style: currentInputStyle,
    onBlur: handleBlur,
    ref: inputRef,
    secureTextEntry: !!currentSecureTextEntry,
    multiline: variant === 'textarea' || multiline
  }, props)), variant === 'text' && /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: handleClear
  }, /*#__PURE__*/React.createElement(InputClearIcon, null)), variant === 'password' && /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: handleEye
  }, !isVisible ? /*#__PURE__*/React.createElement(InputEyeIcon, null) : /*#__PURE__*/React.createElement(InputEyeCloseIcon, null))), hint && /*#__PURE__*/React.createElement(Text, {
    style: currentHintStyle
  }, hint));
};
//# sourceMappingURL=Input.js.map