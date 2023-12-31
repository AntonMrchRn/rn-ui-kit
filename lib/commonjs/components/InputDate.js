"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputDate = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
var _reactNativeMaskInput = _interopRequireDefault(require("react-native-mask-input"));
var _CalendarIcon = require("../icons/CalendarIcon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const InputDate = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
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
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const theme = (0, _ThemeProvider.useTheme)();
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
  const styles = _reactNative.StyleSheet.create({
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
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.initial, [isFocused ? styles.focused : {}, containerStyle]);
  const currentInputStyle = _reactNative.StyleSheet.compose(styles.input, style);
  const handleFocus = e => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };
  const handleBlur = e => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };
  const dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/];
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentContainerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.icon
  }, /*#__PURE__*/_react.default.createElement(_CalendarIcon.CalendarIcon, {
    color: getColor()
  })), /*#__PURE__*/_react.default.createElement(_reactNativeMaskInput.default, _extends({
    placeholder: placeholder || 'ДД/ММ/ГГ',
    placeholderTextColor: disabled ? theme.text.neutralDisable : placeholderTextColor || theme.text.neutral,
    editable: !disabled,
    selectTextOnFocus: !disabled,
    onFocus: handleFocus,
    style: currentInputStyle,
    onBlur: handleBlur,
    mask: mask || dateMask,
    keyboardType: 'numeric' || props.keyboardType
  }, props, {
    ref: ref
  })));
});
exports.InputDate = InputDate;
//# sourceMappingURL=InputDate.js.map