function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { InputClearIcon } from '../../icons/InputClearIcon';
import { TouchableOpacity } from 'react-native';
import { InputEyeCloseIcon } from '../../icons/InputEyeCloseIcon';
import { InputEyeIcon } from '../../icons/InputEyeIcon';
import { useAnimatedLabel } from './useAnimatedLabel';
import Animated from 'react-native-reanimated';
export const Input = /*#__PURE__*/forwardRef((_ref, ref) => {
  var _props$value;
  let {
    variant,
    containerStyle,
    style,
    onFocus,
    onBlur,
    placeholderTextColor,
    label,
    labelStyle,
    labelIcon,
    isAnimatedLabel,
    hint,
    hintStyle,
    isError,
    secureTextEntry,
    multiline,
    onClear,
    iconLeft,
    iconLeftStyle,
    isRequired,
    keyboardType,
    onChangeText,
    onLabelIconPress,
    ...props
  } = _ref;
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const getHeight = () => {
    switch (variant) {
      case 'message':
        return 48;
      case 'textarea':
        return 100;
      default:
        return 44;
    }
  };
  const height = getHeight();
  const styles = StyleSheet.create({
    initial: {
      backgroundColor: isError ? theme.background.fieldDanger : theme.background.fieldMain,
      borderRadius: variant === 'message' ? 12 : 8,
      height: height,
      paddingVertical: variant === 'textarea' ? 8 : 10,
      paddingHorizontal: variant === 'textarea' ? 12 : 16,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: isError || isFocused ? 1 : 0,
      borderColor: isError ? theme.background.fieldDanger : theme.background.fieldMain
    },
    input: {
      flex: 1,
      height: height,
      padding: 0,
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 17,
      lineHeight: Platform.OS === 'android' ? 24 : 0,
      color: theme.text.basic
    },
    focused: {
      borderColor: isError ? theme.stroke.danger : theme.stroke.accent
    },
    label: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isError ? theme.text.danger : theme.text.neutral
    },
    labelContainer: {
      flexDirection: 'row',
      marginBottom: 4
    },
    labelIcon: {
      marginLeft: 5
    },
    hint: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isError ? theme.text.danger : theme.text.neutral,
      marginTop: 4
    },
    animatedLabel: {
      position: 'absolute'
    },
    iconLeft: {
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'center'
    },
    requiredSymbol: {
      color: theme.text.secondary
    }
  });
  const currentContainerStyle = StyleSheet.compose(styles.initial, [isFocused ? styles.focused : {}, containerStyle]);
  const currentInputStyle = StyleSheet.compose(styles.input, style);
  const currentIconLeftStyle = StyleSheet.compose(styles.iconLeft, iconLeftStyle);
  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
  const currentAnimatedLabelStyle = StyleSheet.compose([styles.label, styles.animatedLabel], labelStyle);
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
  const handleOnChangeText = text => {
    if (onChangeText) {
      if (variant === 'number' && text) {
        const regExp = new RegExp(/^\d+$/);
        const isNumber = regExp.test(text);
        isNumber && onChangeText(text);
      } else {
        onChangeText(text);
      }
    }
  };
  const {
    placeholder,
    ...inputProps
  } = props;
  const {
    animatedLabelStyle,
    animatedContainerStyle
  } = useAnimatedLabel(!!(props !== null && props !== void 0 && props.value), !!isError, isFocused, getPlaceholderColor());
  return /*#__PURE__*/React.createElement(Animated.View, {
    style: isAnimatedLabel && animatedContainerStyle
  }, label && !isAnimatedLabel && /*#__PURE__*/React.createElement(View, {
    style: styles.labelContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: currentLabelStyle
  }, label, isRequired && /*#__PURE__*/React.createElement(Text, {
    style: styles.requiredSymbol
  }, '*')), labelIcon && /*#__PURE__*/React.createElement(TouchableOpacity, {
    disabled: !onLabelIconPress,
    style: styles.labelIcon,
    onPress: onLabelIconPress
  }, labelIcon)), /*#__PURE__*/React.createElement(View, {
    style: currentContainerStyle
  }, iconLeft && /*#__PURE__*/React.createElement(View, {
    style: currentIconLeftStyle
  }, iconLeft), label && isAnimatedLabel && variant === 'text' && /*#__PURE__*/React.createElement(Animated.Text, {
    style: [currentAnimatedLabelStyle, animatedLabelStyle]
  }, label, isRequired && /*#__PURE__*/React.createElement(Animated.Text, {
    style: styles.requiredSymbol
  }, "*")), /*#__PURE__*/React.createElement(TextInput, _extends({
    placeholderTextColor: getPlaceholderColor(),
    onFocus: handleFocus,
    style: currentInputStyle,
    onBlur: handleBlur,
    ref: ref,
    secureTextEntry: !!currentSecureTextEntry,
    multiline: variant === 'textarea' || multiline,
    placeholder: isAnimatedLabel ? undefined : placeholder,
    keyboardType: variant === 'number' ? 'numeric' : keyboardType,
    onChangeText: handleOnChangeText
  }, inputProps)), ['text', 'number'].includes(variant) && isFocused && !!((_props$value = props.value) !== null && _props$value !== void 0 && _props$value.length) && /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onClear
  }, /*#__PURE__*/React.createElement(InputClearIcon, null)), variant === 'password' && /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: handleEye
  }, !isVisible ? /*#__PURE__*/React.createElement(InputEyeIcon, null) : /*#__PURE__*/React.createElement(InputEyeCloseIcon, null))), hint && /*#__PURE__*/React.createElement(Text, {
    style: currentHintStyle
  }, hint));
});
//# sourceMappingURL=index.js.map