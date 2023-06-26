import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from '../../theme/ThemeProvider';
import { ColorValue } from 'react-native';

const animationConfig = {
  duration: 400,
};

export const useAnimatedLabel = (
  isValue: boolean,
  isError: boolean,
  isFocused: boolean,
  placeholderColor: ColorValue
) => {
  const theme = useTheme();
  const isUnfocusedErrorInput = isError && !isFocused;

  const animatedLabelStyle = useAnimatedStyle(() => {
    const fontSize = interpolate(
      Number(isUnfocusedErrorInput || isValue || isFocused),
      [0, 1],
      [17, 13]
    );
    const lineHeight = interpolate(
      Number(isUnfocusedErrorInput || isValue || isFocused),
      [0, 1],
      [18, 16]
    );
    const color = interpolateColor(
      Number(isUnfocusedErrorInput || isValue || isFocused),
      [0, 1],
      [placeholderColor as string, theme.text.neutral]
    );
    const translateY = interpolate(
      Number(isValue || isUnfocusedErrorInput || (!isValue && isFocused)),
      [0, 1],
      [3, -34]
    );
    const opacity = interpolate(
      Number(!isValue || !isUnfocusedErrorInput || isValue),
      [0, 1],
      [0, 1]
    );
    const left = interpolate(
      Number(isValue || isUnfocusedErrorInput || (!isValue && isFocused)),
      [0, 1],
      [16, 0]
    );

    return {
      left: withTiming(left, animationConfig),
      color: withTiming(color, animationConfig),
      opacity: withTiming(opacity, animationConfig),
      fontSize: withTiming(fontSize, animationConfig),
      lineHeight: withTiming(lineHeight, animationConfig),
      transform: [{ translateY: withTiming(translateY, animationConfig) }],
    };
  }, [isFocused, isValue, isError]);

  const animatedContainerStyle = useAnimatedStyle(() => {
    const marginTop = interpolate(
      Number(isUnfocusedErrorInput || isValue || isFocused),
      [0, 1],
      [0, 18]
    );

    return {
      marginTop: withTiming(marginTop, animationConfig),
    };
  }, [isFocused, isValue, isError]);

  return { animatedLabelStyle, animatedContainerStyle };
};
