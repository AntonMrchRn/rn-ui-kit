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
  var _props$value2;
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
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const [isVisible, setIsVisible] = (0, _react.useState)(false);
  const [numOfLines, setNumOfLines] = (0, _react.useState)(0);
  const theme = (0, _ThemeProvider.useTheme)();
  const getHeight = () => {
    switch (variant) {
      case 'message':
        return 188;
      case 'textarea':
        return 100;
      default:
        return 44;
    }
  };
  const lhMessageAndroid = variant === 'message' ? undefined : 24;
  const height = getHeight();
  const styles = _reactNative.StyleSheet.create({
    initial: {
      backgroundColor: isError ? theme.background.fieldDanger : theme.background.fieldMain,
      borderRadius: variant === 'message' ? 12 : 8,
      paddingHorizontal: variant === 'textarea' ? 12 : 16,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: isError || isFocused ? 1 : 0,
      borderColor: isError ? theme.background.fieldDanger : theme.background.fieldMain
    },
    input: {
      flex: 1,
      padding: variant === 'textarea' ? undefined : 0,
      paddingBottom: variant === 'textarea' ? 8 : 0,
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 17,
      lineHeight: _reactNative.Platform.OS === 'android' ? lhMessageAndroid : 0,
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
    },
    mH: {
      minHeight: height
    },
    messageInitial: {
      paddingTop: 7,
      paddingBottom: numOfLines > 10 ? 7 : 12
    },
    defaultInitial: {
      height: height,
      paddingVertical: variant === 'textarea' ? 8 : 10
    },
    numOfLinesCompanyHeight: {
      height: height
    }
  });
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.initial, [isFocused ? styles.focused : {}, variant === 'message' ? styles.messageInitial : styles.defaultInitial, containerStyle]);
  const currentInputStyle = _reactNative.StyleSheet.compose(styles.input, [variant === 'message' ? numOfLines > 10 && styles.numOfLinesCompanyHeight : styles.mH, style]);
  const currentIconLeftStyle = _reactNative.StyleSheet.compose(styles.iconLeft, iconLeftStyle);
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
  } = (0, _useAnimatedLabel.useAnimatedLabel)(!!(props !== null && props !== void 0 && props.value), !!isError, isFocused, getPlaceholderColor());
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    style: isAnimatedLabel && animatedContainerStyle
  }, label && !isAnimatedLabel && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.labelContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentLabelStyle
  }, label, isRequired && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.requiredSymbol
  }, '*')), labelIcon && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    disabled: !onLabelIconPress,
    style: styles.labelIcon,
    onPress: onLabelIconPress
  }, labelIcon)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentContainerStyle
  }, iconLeft && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentIconLeftStyle
  }, iconLeft), label && isAnimatedLabel && variant === 'text' && /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.Text, {
    style: [currentAnimatedLabelStyle, animatedLabelStyle]
  }, label, isRequired && /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.Text, {
    style: styles.requiredSymbol
  }, "*")), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    textAlignVertical: variant === 'textarea' ? 'top' : undefined,
    placeholderTextColor: getPlaceholderColor(),
    onFocus: handleFocus,
    style: currentInputStyle,
    onBlur: handleBlur,
    ref: ref,
    secureTextEntry: !!currentSecureTextEntry,
    multiline: variant === 'textarea' || variant === 'message' || multiline,
    numberOfLines: variant === 'message' ? numOfLines : undefined,
    onContentSizeChange: e => {
      if (variant === 'message') {
        var _props$value;
        if ((props === null || props === void 0 ? void 0 : (_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.length) === 0 && e.nativeEvent.contentSize.height / 18 > 2) {
          setNumOfLines(0);
        } else {
          setNumOfLines(e.nativeEvent.contentSize.height / 18);
        }
      }
    },
    placeholder: isAnimatedLabel ? undefined : placeholder,
    keyboardType: variant === 'number' ? 'numeric' : keyboardType,
    onChangeText: handleOnChangeText
  }, inputProps)), ['text', 'number'].includes(variant) && isFocused && !!((_props$value2 = props.value) !== null && _props$value2 !== void 0 && _props$value2.length) && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onClear
  }, /*#__PURE__*/_react.default.createElement(_InputClearIcon.InputClearIcon, null)), variant === 'password' && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: handleEye
  }, !isVisible ? /*#__PURE__*/_react.default.createElement(_InputEyeIcon.InputEyeIcon, null) : /*#__PURE__*/_react.default.createElement(_InputEyeCloseIcon.InputEyeCloseIcon, null))), hint && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentHintStyle
  }, hint));
});
exports.Input = Input;
//# sourceMappingURL=index.js.map