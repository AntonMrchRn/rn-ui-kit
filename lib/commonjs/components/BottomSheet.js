"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSheet = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _ThemeProvider = require("../theme/ThemeProvider");
var _ModalCloseIcon = require("../icons/ModalCloseIcon");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const BottomSheet = _ref => {
  let {
    backdropOpacity = 1,
    backdropColor,
    modalStyle,
    containerStyle,
    closeIconContainerStyle,
    closeIconPress,
    closeIcon,
    title,
    titleStyle,
    subtitle,
    subtitleStyle,
    children,
    onSwipeComplete,
    swipeDirection = 'down',
    ...props
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const styles = _reactNative.StyleSheet.create({
    container: {
      backgroundColor: theme.background.main,
      paddingTop: 12,
      paddingHorizontal: 16,
      paddingBottom: insets.bottom,
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24
    },
    closeIconContainer: {
      alignItems: 'flex-end'
    },
    headerIconContainer: {
      alignItems: 'center',
      marginBottom: 12
    },
    title: {
      fontFamily: 'Open Sans SemiBold',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center',
      color: theme.text.basic
    },
    subtitle: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      textAlign: 'center',
      color: theme.text.neutral,
      marginTop: 4
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0
    },
    line: {
      backgroundColor: theme.background.neutralDisable,
      borderRadius: 5,
      width: 36,
      height: 4,
      alignSelf: 'center'
    }
  });
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.container, containerStyle);
  const currentCloseIconContainerStyle = _reactNative.StyleSheet.compose(styles.closeIconContainer, closeIconContainerStyle);
  const currentTitleStyle = _reactNative.StyleSheet.compose(styles.title, titleStyle);
  const currentSubtitleStyle = _reactNative.StyleSheet.compose(styles.subtitle, subtitleStyle);
  const currentModalStyle = _reactNative.StyleSheet.compose(styles.modal, modalStyle);
  const getCloseIcon = () => {
    if (closeIcon) {
      if (typeof closeIcon === 'boolean') {
        return /*#__PURE__*/_react.default.createElement(_ModalCloseIcon.ModalCloseIcon, null);
      }
      return closeIcon;
    }
    return null;
  };
  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, _extends({}, props, {
    backdropOpacity: backdropOpacity,
    backdropColor: backdropColor || theme.background.modal,
    style: currentModalStyle,
    onSwipeComplete: onSwipeComplete,
    swipeDirection: swipeDirection
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentContainerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.line
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentCloseIconContainerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: closeIconPress
  }, getCloseIcon())), title && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentTitleStyle
  }, title), subtitle && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentSubtitleStyle
  }, subtitle), children));
};
exports.BottomSheet = BottomSheet;
//# sourceMappingURL=BottomSheet.js.map