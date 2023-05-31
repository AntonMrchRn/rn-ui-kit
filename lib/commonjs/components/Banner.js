"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _BannerSuccessIcon = require("../icons/BannerSuccessIcon");
var _BannerInfoIcon = require("../icons/BannerInfoIcon");
var _BannerAlertIcon = require("../icons/BannerAlertIcon");
var _BannerCloseIcon = require("../icons/BannerCloseIcon");
var _ThemeProvider = require("../theme/ThemeProvider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Banner = _ref => {
  let {
    containerStyle,
    type,
    icon,
    iconStyle,
    titleStyle,
    title,
    closeIcon,
    text,
    textStyle,
    onClosePress,
    buttonStyle,
    buttonTextStyle,
    onButtonPress,
    buttonText,
    iconColor,
    visible
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
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
      paddingVertical: 12,
      paddingHorizontal: 18,
      flexDirection: 'row',
      backgroundColor: getBackgroundColor(),
      borderWidth: 1,
      borderColor: getBorderColor(),
      borderRadius: 12
    },
    icon: {
      marginRight: 10
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    title: {
      fontFamily: 'Nunito Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: getTextColor()
    },
    body: {
      alignItems: 'flex-start'
    },
    wrapper: {
      flexShrink: 1,
      flex: 1
    },
    text: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      color: getTextColor(),
      marginTop: 8
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
      fontFamily: 'Nunito Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: getTextColor()
    }
  });
  const getIcon = () => {
    switch (icon) {
      case 'success':
        return /*#__PURE__*/_react.default.createElement(_BannerSuccessIcon.BannerSuccessIcon, {
          color: iconColor || getTextColor()
        });
      case 'info':
        return /*#__PURE__*/_react.default.createElement(_BannerInfoIcon.BannerInfoIcon, {
          color: iconColor || getTextColor()
        });
      case 'alert':
        return /*#__PURE__*/_react.default.createElement(_BannerAlertIcon.BannerAlertIcon, {
          color: iconColor || getTextColor()
        });
      default:
        return icon;
    }
  };
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.container, containerStyle);
  const currentIconStyle = _reactNative.StyleSheet.compose(styles.icon, iconStyle);
  const currentTitleStyle = _reactNative.StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = _reactNative.StyleSheet.compose(styles.text, textStyle);
  const currentButtonStyle = _reactNative.StyleSheet.compose(styles.button, buttonStyle);
  const currentButtonTextStyle = _reactNative.StyleSheet.compose(styles.buttonText, buttonTextStyle);
  if (visible) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: currentContainerStyle
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: currentIconStyle
    }, getIcon()), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.wrapper
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.header
    }, title ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: currentTitleStyle
    }, title) : /*#__PURE__*/_react.default.createElement(_reactNative.View, null), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: onClosePress
    }, closeIcon || /*#__PURE__*/_react.default.createElement(_BannerCloseIcon.BannerCloseIcon, null))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.body
    }, text && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: currentTextStyle
    }, text), buttonText && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      style: currentButtonStyle,
      onPress: onButtonPress
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: currentButtonTextStyle
    }, buttonText)))));
  }
  return null;
};
exports.Banner = Banner;
//# sourceMappingURL=Banner.js.map