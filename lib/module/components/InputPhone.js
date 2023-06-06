function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { InputClearIcon } from '../icons/InputClearIcon';
import { RuFlagIcon } from '../icons/RuFlagIcon';
import MaskInput from 'react-native-mask-input';
export const InputPhone = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    value,
    containerStyle,
    label,
    labelStyle,
    hint,
    hintStyle,
    isError,
    placeholderTextColor,
    style,
    onFocus,
    onBlur,
    placeholder,
    mask,
    onClear,
    ...props
  } = _ref;
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();
  const styles = StyleSheet.create({
    initial: {
      backgroundColor: isError ? theme.background.fieldDanger : theme.background.fieldMain,
      padding: 0,
      borderRadius: 8,
      height: 44,
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
    },
    icon: {
      marginRight: 8
    },
    prefix: {
      color: isError ? theme.text.danger : isFocused || value.length ? theme.text.basic : placeholderTextColor || theme.text.neutral,
      fontSize: 17,
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      paddingTop: Platform.OS === 'ios' ? 2 : 0,
      paddingRight: 3
    }
  });
  const currentContainerStyle = StyleSheet.compose(styles.initial, [isFocused ? styles.focused : {}, containerStyle]);
  const currentInputStyle = StyleSheet.compose(styles.input, style);
  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
  const currentHintStyle = StyleSheet.compose(styles.hint, hintStyle);
  const handleFocus = e => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };
  const handleBlur = e => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };
  const phoneMask = [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  const validatePhone = phone => {
    phone = phone.replace(/[^\d\s\(\)-]/g, '');
    phone = phone.replace(/(^[0-8])/, '(9$1');
    if (phone.length > 1) {
      phone = phone.replace(/(^[7 | 8])/, '');
    }
    return phone.replace(/[\D]+/g, '');
  };
  return /*#__PURE__*/React.createElement(View, null, label && /*#__PURE__*/React.createElement(Text, {
    style: currentLabelStyle
  }, label), /*#__PURE__*/React.createElement(View, {
    style: currentContainerStyle
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.icon
  }, /*#__PURE__*/React.createElement(RuFlagIcon, null)), /*#__PURE__*/React.createElement(Text, {
    style: styles.prefix
  }, "+7"), /*#__PURE__*/React.createElement(MaskInput, _extends({
    placeholder: placeholder || '900 000-00-00',
    placeholderTextColor: placeholderTextColor || theme.text.neutral,
    onFocus: handleFocus,
    style: currentInputStyle,
    onBlur: handleBlur,
    maxLength: value.length < 2 ? 15 : 13,
    ref: ref,
    value: validatePhone(value),
    mask: mask || phoneMask,
    keyboardType: 'numeric' || props.keyboardType
  }, props)), !!value.length && /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onClear
  }, /*#__PURE__*/React.createElement(InputClearIcon, null))), hint && /*#__PURE__*/React.createElement(Text, {
    style: currentHintStyle
  }, hint));
});
//# sourceMappingURL=InputPhone.js.map