"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputCode = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeConfirmationCodeField = require("react-native-confirmation-code-field");
var _ThemeProvider = require("../theme/ThemeProvider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const InputCode = _ref => {
  let {
    hint,
    hintStyle,
    cellCount = 6,
    value,
    onChangeText,
    ...props
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const styles = _reactNative.StyleSheet.create({
    cell: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 10,
      backgroundColor: theme.background.neutralDisable
    },
    text: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 32,
      lineHeight: 36,
      color: theme.text.basic
    },
    hint: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: hint ? theme.text.danger : theme.text.neutral,
      marginTop: 4
    }
  });
  const currentHintStyle = _reactNative.StyleSheet.compose(styles.hint, hintStyle);
  const setValue = onChangeText || (() => {});
  const ref = (0, _reactNativeConfirmationCodeField.useBlurOnFulfill)({
    value,
    cellCount
  });
  const [prop, getCellOnLayoutHandler] = (0, _reactNativeConfirmationCodeField.useClearByFocusCell)({
    value,
    setValue
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNativeConfirmationCodeField.CodeField, _extends({}, prop, props, {
    ref: ref,
    value: value,
    onChangeText: onChangeText,
    cellCount: cellCount,
    keyboardType: "number-pad",
    textContentType: "oneTimeCode",
    renderCell: _ref2 => {
      let {
        index,
        symbol
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        style: styles.cell,
        key: index
      }, symbol ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
        key: index,
        style: styles.text,
        onLayout: getCellOnLayoutHandler(index)
      }, symbol) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        style: styles.dot
      }));
    }
  })), hint && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentHintStyle
  }, hint));
};
exports.InputCode = InputCode;
//# sourceMappingURL=InputCode.js.map