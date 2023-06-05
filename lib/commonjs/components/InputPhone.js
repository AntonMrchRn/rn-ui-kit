"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputPhone = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
var _InputClearIcon = require("../icons/InputClearIcon");
var _RuFlagIcon = require("../icons/RuFlagIcon");
var _reactNativeMaskInput = _interopRequireDefault(require("react-native-mask-input"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const InputPhone = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
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
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const theme = (0, _ThemeProvider.useTheme)();
  const styles = _reactNative.StyleSheet.create({
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
      // TODO check this padding on android
      paddingTop: 2,
      paddingRight: 3
    }
  });
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.initial, [isFocused ? styles.focused : {}, containerStyle]);
  const currentInputStyle = _reactNative.StyleSheet.compose(styles.input, style);
  const currentLabelStyle = _reactNative.StyleSheet.compose(styles.label, labelStyle);
  const currentHintStyle = _reactNative.StyleSheet.compose(styles.hint, hintStyle);
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, label && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentLabelStyle
  }, label), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentContainerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.icon
  }, /*#__PURE__*/_react.default.createElement(_RuFlagIcon.RuFlagIcon, null)), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.prefix
  }, "+7"), /*#__PURE__*/_react.default.createElement(_reactNativeMaskInput.default, _extends({
    placeholder: placeholder || '900 000-00-00',
    placeholderTextColor: placeholderTextColor || theme.text.neutral,
    onFocus: handleFocus,
    style: currentInputStyle,
    onBlur: handleBlur,
    maxLength: value.length < 2 ? 15 : 13,
    ref: ref,
    value: validatePhone(value),
    mask: mask || phoneMask
  }, props)), !!value.length && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onClear
  }, /*#__PURE__*/_react.default.createElement(_InputClearIcon.InputClearIcon, null))), hint && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentHintStyle
  }, hint));
});
exports.InputPhone = InputPhone;
//# sourceMappingURL=InputPhone.js.map