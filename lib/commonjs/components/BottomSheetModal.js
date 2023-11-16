"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSheetModal = void 0;
var _bottomSheet = require("@gorhom/bottom-sheet");
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
var _ModalCloseIcon = require("../icons/ModalCloseIcon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const BottomSheetModal = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    snapPoints,
    backdropComponent,
    style,
    backgroundStyle,
    handleStyle,
    handleIndicatorStyle,
    children,
    onBackdropPress,
    closeIconPress,
    closeIcon,
    title,
    titleStyle,
    subtitle,
    subtitleStyle,
    closeIconStyle,
    ...props
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const initSnapPoints = (0, _react.useMemo)(() => ['80%'], []);
  const renderBackdrop = (0, _react.useCallback)(prop => /*#__PURE__*/_react.default.createElement(_bottomSheet.BottomSheetBackdrop, _extends({}, prop, {
    disappearsOnIndex: -1,
    appearsOnIndex: 0,
    onPress: onBackdropPress
  })), [onBackdropPress]);
  const styles = _reactNative.StyleSheet.create({
    style: {
      paddingHorizontal: 20
    },
    backgroundStyle: {
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24
    },
    handleStyle: {
      paddingBottom: 0
    },
    handleIndicatorStyle: {
      backgroundColor: theme.background.neutralDisable,
      borderRadius: 5,
      width: 36,
      height: 4
    },
    icon: {
      right: 0,
      top: 0,
      position: 'absolute',
      zIndex: 100
    },
    indicatorBottom: {
      height: 12,
      zIndex: -1
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
    subtitle: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      textAlign: 'center',
      color: theme.text.neutral,
      marginTop: 4
    }
  });
  const getCloseIcon = () => {
    if (closeIcon) {
      if (typeof closeIcon === 'boolean') {
        return /*#__PURE__*/_react.default.createElement(_ModalCloseIcon.ModalCloseIcon, null);
      }
      return closeIcon;
    }
    return null;
  };
  const currentTitleStyle = _reactNative.StyleSheet.compose(styles.title, titleStyle);
  const currentSubtitleStyle = _reactNative.StyleSheet.compose(styles.subtitle, subtitleStyle);
  const currentIconStyle = _reactNative.StyleSheet.compose(styles.icon, closeIconStyle);
  return /*#__PURE__*/_react.default.createElement(_bottomSheet.BottomSheetModal, _extends({
    ref: ref,
    snapPoints: snapPoints || initSnapPoints,
    backdropComponent: backdropComponent || renderBackdrop,
    style: [styles.style, style],
    backgroundStyle: [styles.backgroundStyle, backgroundStyle],
    handleStyle: [styles.handleStyle, handleStyle],
    handleIndicatorStyle: [styles.handleIndicatorStyle, handleIndicatorStyle]
  }, props), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: currentIconStyle,
    onPress: closeIconPress
  }, getCloseIcon()), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.indicatorBottom
  }), title && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentTitleStyle
  }, title), subtitle && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentSubtitleStyle
  }, subtitle), children);
});
exports.BottomSheetModal = BottomSheetModal;
//# sourceMappingURL=BottomSheetModal.js.map