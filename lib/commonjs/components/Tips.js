"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tips = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
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
  const getBorderColor = () => {
    switch (type) {
      case 'error':
        return theme.stroke.dangerDisable;
      case 'success':
        return theme.stroke.successDisable;
      case 'warning':
        return theme.stroke.warningDisable;
      default:
        return theme.background.accentDisable;
    }
  };
  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return theme.background.fieldDanger;
      case 'success':
        return theme.background.fieldSuccess;
      case 'warning':
        return theme.background.fieldWarning;
      default:
        return theme.background.fieldMain;
    }
  };
  const getTextColor = () => {
    switch (type) {
      case 'error':
        return theme.text.danger;
      case 'success':
        return theme.text.success;
      case 'warning':
        return theme.text.warning;
      default:
        return theme.text.accent;
    }
  };
  const getButtonBorderColor = () => {
    switch (type) {
      case 'error':
        return theme.stroke.danger;
      case 'success':
        return theme.stroke.success;
      case 'warning':
        return theme.stroke.warning;
      default:
        return theme.stroke.accent;
    }
  };
  const styles = _reactNative.StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: getBackgroundColor(),
      borderWidth: 1,
      borderColor: getBorderColor(),
      borderRadius: 12,
      alignItems: 'flex-start'
    },
    text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      color: getTextColor()
    },
    button: {
      marginTop: 12,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1.5,
      borderColor: getButtonBorderColor(),
      borderRadius: 8
    },
    buttonText: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: getTextColor()
    }
  });
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.container, containerStyle);
  const currentTextStyle = _reactNative.StyleSheet.compose(styles.text, textStyle);
  const currentButtonStyle = _reactNative.StyleSheet.compose(styles.button, buttonStyle);
  const currentButtonTextStyle = _reactNative.StyleSheet.compose(styles.buttonText, buttonTextStyle);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentContainerStyle
  }, text && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentTextStyle
  }, text), buttonText && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: currentButtonStyle,
    onPress: onButtonPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentButtonTextStyle
  }, buttonText)));
};
exports.Tips = Tips;
//# sourceMappingURL=Tips.js.map