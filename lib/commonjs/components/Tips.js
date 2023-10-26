"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tips = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ErrorIcon = require("../icons/ErrorIcon");
var _InfoIcon = require("../icons/InfoIcon");
var _SuccessIcon = require("../icons/SuccessIcon");
var _WarningIcon = require("../icons/WarningIcon");
var _ThemeProvider = require("../theme/ThemeProvider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Tips = _ref => {
  let {
    text,
    onButtonPress,
    buttonText,
    type,
    containerStyle,
    textStyle,
    buttonStyle,
    buttonTextStyle
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const getIcon = () => {
    switch (type) {
      case 'error':
        return /*#__PURE__*/_react.default.createElement(_ErrorIcon.ErrorIcon, null);
      case 'success':
        return /*#__PURE__*/_react.default.createElement(_SuccessIcon.SuccessIcon, null);
      case 'warning':
        return /*#__PURE__*/_react.default.createElement(_WarningIcon.WarningIcon, null);
      default:
        return /*#__PURE__*/_react.default.createElement(_InfoIcon.InfoIcon, null);
    }
  };
  const styles = _reactNative.StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingTop: 12,
      backgroundColor: theme.stroke.neutralLight,
      borderRadius: 12,
      alignItems: 'flex-start',
      flexDirection: 'row',
      paddingBottom: buttonText ? 16 : 12
    },
    text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      color: theme.stroke.neutral
    },
    button: {
      marginTop: 12,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 7,
      paddingHorizontal: 16,
      borderWidth: 1.5,
      borderColor: theme.stroke.neutral,
      borderRadius: 8
    },
    buttonText: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: theme.stroke.neutral
    },
    wrapIcon: {
      marginRight: 12
    }
  });
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.container, containerStyle);
  const currentTextStyle = _reactNative.StyleSheet.compose(styles.text, textStyle);
  const currentButtonStyle = _reactNative.StyleSheet.compose(styles.button, buttonStyle);
  const currentButtonTextStyle = _reactNative.StyleSheet.compose(styles.buttonText, buttonTextStyle);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentContainerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.wrapIcon
  }, getIcon()), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, text && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentTextStyle
  }, text), buttonText && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: currentButtonStyle,
    onPress: onButtonPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentButtonTextStyle
  }, buttonText))));
};
exports.Tips = Tips;
//# sourceMappingURL=Tips.js.map