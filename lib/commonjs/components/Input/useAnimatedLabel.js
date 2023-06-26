"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimatedLabel = void 0;
var _reactNativeReanimated = require("react-native-reanimated");
var _ThemeProvider = require("../../theme/ThemeProvider");
const animationConfig = {
  duration: 400
};
const useAnimatedLabel = (isValue, isError, isFocused, placeholderColor) => {
  const theme = (0, _ThemeProvider.useTheme)();
  const isUnfocusedErrorInput = isError && !isFocused;
  const animatedLabelStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    const fontSize = (0, _reactNativeReanimated.interpolate)(Number(isUnfocusedErrorInput || isValue || isFocused), [0, 1], [17, 13]);
    const lineHeight = (0, _reactNativeReanimated.interpolate)(Number(isUnfocusedErrorInput || isValue || isFocused), [0, 1], [18, 16]);
    const color = (0, _reactNativeReanimated.interpolateColor)(Number(isUnfocusedErrorInput || isValue || isFocused), [0, 1], [placeholderColor, theme.text.neutral]);
    const translateY = (0, _reactNativeReanimated.interpolate)(Number(isValue || isUnfocusedErrorInput || !isValue && isFocused), [0, 1], [3, -34]);
    const opacity = (0, _reactNativeReanimated.interpolate)(Number(!isValue || !isUnfocusedErrorInput || isValue), [0, 1], [0, 1]);
    const left = (0, _reactNativeReanimated.interpolate)(Number(isValue || isUnfocusedErrorInput || !isValue && isFocused), [0, 1], [16, 0]);
    return {
      left: (0, _reactNativeReanimated.withTiming)(left, animationConfig),
      color: (0, _reactNativeReanimated.withTiming)(color, animationConfig),
      opacity: (0, _reactNativeReanimated.withTiming)(opacity, animationConfig),
      fontSize: (0, _reactNativeReanimated.withTiming)(fontSize, animationConfig),
      lineHeight: (0, _reactNativeReanimated.withTiming)(lineHeight, animationConfig),
      transform: [{
        translateY: (0, _reactNativeReanimated.withTiming)(translateY, animationConfig)
      }]
    };
  }, [isFocused, isValue, isError]);
  const animatedContainerStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    const marginTop = (0, _reactNativeReanimated.interpolate)(Number(isUnfocusedErrorInput || isValue || isFocused), [0, 1], [0, 18]);
    return {
      marginTop: (0, _reactNativeReanimated.withTiming)(marginTop, animationConfig)
    };
  }, [isFocused, isValue, isError]);
  return {
    animatedLabelStyle,
    animatedContainerStyle
  };
};
exports.useAnimatedLabel = useAnimatedLabel;
//# sourceMappingURL=useAnimatedLabel.js.map