"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../../theme/ThemeProvider");
var _InputClearIcon = require("../../icons/InputClearIcon");
var _InputEyeCloseIcon = require("../../icons/InputEyeCloseIcon");
var _InputEyeIcon = require("../../icons/InputEyeIcon");
var _useAnimatedLabel = require("./useAnimatedLabel");
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Input = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
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
    isAnimatedLabel,
    hint,
    hintStyle,
    isError,
    secureTextEntry,
    multiline,
    onClear,
    ...props
  } = _ref;
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const [isVisible, setIsVisible] = (0, _react.useState)(false);
  const theme = (0, _ThemeProvider.useTheme)();
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
  const styles = _reactNative.StyleSheet.create({
    initial: {
      backgroundColor: isError ? theme.background.fieldDanger : theme.background.fieldMain,
      borderRadius: 8,
      height: setHeight(),
      paddingLeft: 16,
      paddingRight: 10,
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: isError ? theme.background.fieldDanger : theme.background.fieldMain
    },
    input: {
      flex: 1,
      padding: 0,
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 17,
      lineHeight: _reactNative.Platform.OS === 'android' ? 24 : 0,
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
    animatedLabel: {
      position: 'absolute'
    }
  });
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.initial, [isFocused ? styles.focused : {}, containerStyle]);
  const currentInputStyle = _reactNative.StyleSheet.compose(styles.input, style);
  const currentLabelStyle = _reactNative.StyleSheet.compose(styles.label, labelStyle);
  const currentAnimatedLabelStyle = _reactNative.StyleSheet.compose([styles.label, styles.animatedLabel], labelStyle);
  const currentHintStyle = _reactNative.StyleSheet.compose(styles.hint, hintStyle);
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
  const {
    placeholder,
    ...inputProps
  } = props;
  const {
    animatedLabelStyle,
    animatedContainerStyle
  } = (0, _useAnimatedLabel.useAnimatedLabel)(!!(props !== null && props !== void 0 && props.value), !!isError, isFocused, getPlaceholderColor());
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    style: [isAnimatedLabel && animatedContainerStyle]
  }, label && !isAnimatedLabel && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentLabelStyle
  }, label), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentContainerStyle
  }, label && isAnimatedLabel && variant === 'text' && /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.Text, {
    style: [currentAnimatedLabelStyle, animatedLabelStyle]
  }, label), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    placeholderTextColor: getPlaceholderColor(),
    onFocus: handleFocus,
    style: currentInputStyle,
    onBlur: handleBlur,
    ref: ref,
    secureTextEntry: !!currentSecureTextEntry,
    multiline: variant === 'textarea' || multiline,
    placeholder: isAnimatedLabel ? undefined : placeholder
  }, inputProps)), variant === 'text' && !!((_props$value = props.value) !== null && _props$value !== void 0 && _props$value.length) && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onClear
  }, /*#__PURE__*/_react.default.createElement(_InputClearIcon.InputClearIcon, null)), variant === 'password' && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: handleEye
  }, !isVisible ? /*#__PURE__*/_react.default.createElement(_InputEyeIcon.InputEyeIcon, null) : /*#__PURE__*/_react.default.createElement(_InputEyeCloseIcon.InputEyeCloseIcon, null))), hint && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentHintStyle
  }, hint));
});
exports.Input = Input;
//# sourceMappingURL=index.js.map