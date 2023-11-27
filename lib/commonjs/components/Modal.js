"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _ThemeProvider = require("../theme/ThemeProvider");
var _ModalCloseIcon = require("../icons/ModalCloseIcon");
var _ModalLimitIcon = require("../icons/ModalLimitIcon");
var _ModalErrorIcon = require("../icons/ModalErrorIcon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Modal = _ref => {
  let {
    backdropOpacity = 1,
    backdropColor,
    modalStyle,
    containerStyle,
    closeIconContainerStyle,
    closeIconPress,
    closeIcon,
    headerIcon,
    headerIconContainerStyle,
    title,
    titleStyle,
    description,
    descriptionStyle,
    children,
    ...props
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const styles = _reactNative.StyleSheet.create({
    container: {
      backgroundColor: theme.background.main,
      padding: 16,
      borderRadius: 20
    },
    closeIconContainer: {
      alignItems: 'flex-end'
    },
    headerIconContainer: {
      alignItems: 'center',
      marginBottom: 16
    },
    title: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center',
      color: theme.text.basic
    },
    description: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      textAlign: 'center',
      color: theme.text.neutral,
      marginTop: 8
    },
    containerCloseAbsolute: {
      position: 'absolute',
      right: 12,
      top: 14,
      zIndex: 100
    },
    containerText: {
      paddingHorizontal: 19
    }
  });
  const hitSlop = {
    top: 24,
    left: 24,
    right: 24,
    bottom: 24
  };
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.container, containerStyle);
  const currentCloseIconContainerStyle = _reactNative.StyleSheet.compose(styles.closeIconContainer, closeIconContainerStyle);
  const currentHeaderIconContainerStyle = _reactNative.StyleSheet.compose(styles.headerIconContainer, headerIconContainerStyle);
  const currentTitleStyle = _reactNative.StyleSheet.compose(styles.title, titleStyle);
  const currentDescriptionStyle = _reactNative.StyleSheet.compose(styles.description, descriptionStyle);
  const getCloseIcon = () => {
    if (closeIcon) {
      if (typeof closeIcon === 'boolean') {
        return /*#__PURE__*/_react.default.createElement(_ModalCloseIcon.ModalCloseIcon, null);
      }
      return closeIcon;
    }
    return null;
  };
  const getHeaderIcon = () => {
    if (headerIcon) {
      if (headerIcon === 'limit') {
        return /*#__PURE__*/_react.default.createElement(_ModalLimitIcon.ModalLimitIcon, null);
      }
      if (headerIcon === 'error') {
        return /*#__PURE__*/_react.default.createElement(_ModalErrorIcon.ModalErrorIcon, null);
      }
      return headerIcon;
    }
    return null;
  };
  const checkHeaderIcon = getHeaderIcon();
  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, _extends({}, props, {
    backdropOpacity: backdropOpacity,
    backdropColor: backdropColor || theme.background.modal,
    style: modalStyle
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentContainerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [currentCloseIconContainerStyle, !checkHeaderIcon && styles.containerCloseAbsolute]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    hitSlop: hitSlop,
    onPress: closeIconPress
  }, getCloseIcon())), checkHeaderIcon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentHeaderIconContainerStyle
  }, getHeaderIcon()), title && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [currentTitleStyle, !checkHeaderIcon && styles.containerText]
  }, title), description && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentDescriptionStyle
  }, description), children));
};
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map