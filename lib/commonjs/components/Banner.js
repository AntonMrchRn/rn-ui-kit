"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _BannerSuccessIcon = require("../icons/BannerSuccessIcon");
var _BannerInfoIcon = require("../icons/BannerInfoIcon");
var _BannerAlertIcon = require("../icons/BannerAlertIcon");
var _BannerCloseIcon = require("../icons/BannerCloseIcon");
var _ThemeProvider = require("../theme/ThemeProvider");
var _BannerWarningIcon = require("../icons/BannerWarningIcon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Banner = _ref => {
  let {
    containerStyle,
    type,
    icon,
    iconStyle,
    titleStyle,
    title,
    closeIcon,
    text = '',
    textStyle,
    onClosePress,
    buttonStyle,
    buttonTextStyle,
    onButtonPress,
    buttonText,
    iconColor,
    iconSize
  } = _ref;
  const [visible, setVisible] = (0, _react.useState)(true);
  const onClose = () => {
    setVisible(false);
    onClosePress && onClosePress();
  };
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
        return theme.background.accentMessage;
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
  const styles = _reactNative.StyleSheet.create({
    container: {
      padding: buttonText ? 16 : 12,
      flexDirection: 'row',
      backgroundColor: getBackgroundColor(),
      borderWidth: 1,
      borderColor: getBorderColor(),
      borderRadius: 12
    },
    icon: {
      marginRight: 8
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%'
    },
    containerTxt: {
      maxWidth: '90%'
    },
    title: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: theme.text.neutral
    },
    body: {
      alignItems: 'flex-start'
    },
    wrapper: {
      flexShrink: 1
    },
    text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      color: theme.text.neutral,
      marginTop: title ? 4 : 0,
      flexShrink: 1
    },
    button: {
      marginTop: 12,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6.5,
      paddingHorizontal: 16,
      borderWidth: 1.5,
      borderColor: theme.text.neutral,
      borderRadius: 8
    },
    buttonText: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: theme.text.neutral,
      textAlign: 'center'
    }
  });
  const getIcon = () => {
    switch (icon) {
      case 'success':
        return /*#__PURE__*/_react.default.createElement(_BannerSuccessIcon.BannerSuccessIcon, {
          color: iconColor || getTextColor(),
          size: iconSize
        });
      case 'info':
        return /*#__PURE__*/_react.default.createElement(_BannerInfoIcon.BannerInfoIcon, {
          color: iconColor || getTextColor(),
          size: iconSize
        });
      case 'alert':
        return /*#__PURE__*/_react.default.createElement(_BannerAlertIcon.BannerAlertIcon, {
          color: iconColor || getTextColor(),
          size: iconSize
        });
      case 'warning':
        return /*#__PURE__*/_react.default.createElement(_BannerWarningIcon.BannerWarningIcon, {
          color: iconColor || getTextColor()
        });
      default:
        return icon;
    }
  };
  const hitSlop = {
    top: 24,
    left: 24,
    right: 24,
    bottom: 24
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
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.containerTxt
    }, title ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: currentTitleStyle
    }, title) : /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [currentTextStyle]
    }, text)), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      hitSlop: hitSlop,
      onPress: onClose
    }, closeIcon || /*#__PURE__*/_react.default.createElement(_BannerCloseIcon.BannerCloseIcon, null))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.body
    }, text && title && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
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