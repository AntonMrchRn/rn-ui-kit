"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../../theme/ThemeProvider");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
    contentHeight = 170,
    swipeEnabled = true
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const animation = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const closeTimeoutRef = (0, _react.useRef)(null);
  const panResponderAnimRef = (0, _react.useRef)();
  const panResponderRef = (0, _react.useRef)();
  const handleClose = () => {
    _reactNative.Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: false,
      duration: animationDuration
    }).start(() => onDestroy());
  };
  const getPanResponderAnim = () => {
    if (panResponderAnimRef.current) return panResponderAnimRef.current;
    panResponderAnimRef.current = new _reactNative.Animated.ValueXY({
      x: 0,
      y: 0
    });
    return panResponderAnimRef.current;
  };
  const getPanResponder = () => {
    if (panResponderRef.current) return panResponderRef.current;
    panResponderRef.current = _reactNative.PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        //return true if user is swiping, return false if it's a single click
        return !(gestureState.dx === 0 && gestureState.dy === 0);
      },
      onPanResponderMove: (_, gestureState) => {
        var _getPanResponderAnim;
        (_getPanResponderAnim = getPanResponderAnim()) === null || _getPanResponderAnim === void 0 ? void 0 : _getPanResponderAnim.setValue({
          x: gestureState.dx,
          y: gestureState.dy
        });
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -50) {
          handleClose();
        }
      }
    });
    return panResponderRef.current;
  };
  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return theme.background.danger;
      case 'success':
        return theme.background.success;
      case 'warning':
        return theme.text.warning;
      default:
        return theme.background.accent;
    }
  };
  const styles = _reactNative.StyleSheet.create({
    container: {
      position: 'absolute',
      top: -1,
      backgroundColor: getBackgroundColor(),
      paddingVertical: 12,
      paddingHorizontal: 20,
      width: '100%',
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24
    },
    title: {
      fontFamily: 'Nunito Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: theme.text.contrast
    },
    text: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: theme.text.contrast,
      marginTop: 4
    },
    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16
    }
  });
  const animationContainerStyle = {
    height: animation
  };
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.container, containerStyle);
  const currentTitleStyle = _reactNative.StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = _reactNative.StyleSheet.compose(styles.text, textStyle);
  const currentActionsContainerStyle = _reactNative.StyleSheet.compose(styles.actionsContainer, actionsContainerStyle);
  const currentFirstActionStyle = _reactNative.StyleSheet.compose(styles.title, firstAction === null || firstAction === void 0 ? void 0 : firstAction.style);
  const currentSecondActionStyle = _reactNative.StyleSheet.compose(styles.title, secondAction === null || secondAction === void 0 ? void 0 : secondAction.style);
  (0, _react.useEffect)(() => {
    _reactNative.Animated.timing(animation, {
      toValue: contentHeight,
      useNativeDriver: false,
      duration: animationDuration
    }).start();
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, _extends({
    style: [currentContainerStyle, animationContainerStyle]
  }, swipeEnabled ? getPanResponder().panHandlers : null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: insets.top
    }
  }), title && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentTitleStyle
  }, title), text && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentTextStyle
  }, text), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentActionsContainerStyle
  }, firstAction ? /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: firstActionPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentFirstActionStyle
  }, firstAction.text)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, null), secondAction ? /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: secondActionPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentSecondActionStyle
  }, secondAction.text)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, null)));
};
exports.Toast = Toast;
//# sourceMappingURL=Toast.js.map