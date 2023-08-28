"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../../theme/ThemeProvider");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Toast = _ref => {
  let {
    type,
    onDestroy,
    containerStyle,
    titleStyle,
    title,
    text,
    textStyle,
    actionsContainerStyle,
    firstAction,
    secondAction,
    animationDuration = 250,
    duration = 2000,
    contentHeight = 300,
    swipeEnabled = true
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const animation = (0, _reactNativeReanimated.useSharedValue)(-contentHeight);
  const closeTimeoutRef = (0, _react.useRef)(null);
  const handleClose = () => {
    animation.value = (0, _reactNativeReanimated.withTiming)(-contentHeight, {
      duration: animationDuration
    }, finished => {
      finished && (0, _reactNativeReanimated.runOnJS)(onDestroy)();
    });
  };
  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return theme.background.dangerToast;
      case 'success':
        return theme.background.successToast;
      case 'warning':
        return theme.background.warningToast;
      default:
        return theme.background.accentToast;
    }
  };
  const styles = _reactNative.StyleSheet.create({
    container: {
      position: 'absolute',
      top: -1,
      backgroundColor: getBackgroundColor(),
      paddingHorizontal: 20,
      width: '100%',
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      padding: 12
    },
    title: {
      display: 'flex',
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 17,
      lineHeight: 20,
      color: theme.text.contrast
    },
    text: {
      display: 'flex',
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 16,
      color: theme.text.contrast,
      marginTop: 4
    },
    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 16
    },
    wrapperContent: {
      justifyContent: 'flex-end',
      marginTop: _reactNative.Platform.OS === 'android' ? 12 : 0
    }
  });
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.container, containerStyle);
  const currentTitleStyle = _reactNative.StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = _reactNative.StyleSheet.compose(styles.text, textStyle);
  const currentActionsContainerStyle = _reactNative.StyleSheet.compose(styles.actionsContainer, actionsContainerStyle);
  const currentFirstActionStyle = _reactNative.StyleSheet.compose(styles.title, firstAction === null || firstAction === void 0 ? void 0 : firstAction.style);
  const currentSecondActionStyle = _reactNative.StyleSheet.compose(styles.title, secondAction === null || secondAction === void 0 ? void 0 : secondAction.style);
  const animatedStyles = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      transform: [{
        translateY: animation.value
      }]
    };
  });
  (0, _react.useEffect)(() => {
    animation.value = (0, _reactNativeReanimated.withTiming)(0, {
      duration: animationDuration
    });
    if (duration !== 0 && typeof duration === 'number') {
      closeTimeoutRef.current = setTimeout(() => {
        handleClose();
      }, duration);
    }
    return () => {
      closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);
  const firstActionPress = () => {
    (firstAction === null || firstAction === void 0 ? void 0 : firstAction.onPress) && firstAction.onPress();
    handleClose();
  };
  const secondActionPress = () => {
    (secondAction === null || secondAction === void 0 ? void 0 : secondAction.onPress) && secondAction.onPress();
    handleClose();
  };
  const gesture = _reactNativeGestureHandler.Gesture.Pan().minDistance(15).onStart(event => {
    const requirement = _reactNative.Platform.OS === 'ios' ? event.translationY < -15 : event.velocityY <= -1000;
    if (requirement) {
      swipeEnabled && (0, _reactNativeReanimated.runOnJS)(handleClose)();
    }
  });
  return /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.GestureDetector, {
    gesture: gesture
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    style: [animatedStyles, currentContainerStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSafeAreaContext.SafeAreaView, {
    edges: ['top']
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.wrapperContent
  }, title && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentTitleStyle
  }, title), text && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentTextStyle
  }, text), firstAction || secondAction ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentActionsContainerStyle
  }, firstAction ? /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: firstActionPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentFirstActionStyle
  }, firstAction.text)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, null), secondAction ? /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: secondActionPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentSecondActionStyle
  }, secondAction.text)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, null)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)))));
};
exports.Toast = Toast;
//# sourceMappingURL=Toast.js.map