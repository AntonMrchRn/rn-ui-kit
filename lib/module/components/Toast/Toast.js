import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
export const Toast = _ref => {
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
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const animation = useSharedValue(-contentHeight);
  const closeTimeoutRef = useRef(null);
  const handleClose = () => {
    animation.value = withTiming(-contentHeight, {
      duration: animationDuration
    }, finished => {
      finished && runOnJS(onDestroy)();
    });
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
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: -1,
      backgroundColor: getBackgroundColor(),
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
  const currentContainerStyle = StyleSheet.compose(styles.container, containerStyle);
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = StyleSheet.compose(styles.text, textStyle);
  const currentActionsContainerStyle = StyleSheet.compose(styles.actionsContainer, actionsContainerStyle);
  const currentFirstActionStyle = StyleSheet.compose(styles.title, firstAction === null || firstAction === void 0 ? void 0 : firstAction.style);
  const currentSecondActionStyle = StyleSheet.compose(styles.title, secondAction === null || secondAction === void 0 ? void 0 : secondAction.style);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{
        translateY: animation.value
      }]
    };
  });
  useEffect(() => {
    animation.value = withTiming(0, {
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
  const gesture = Gesture.Pan().minDistance(15).onStart(event => {
    const requirement = Platform.OS === 'ios' ? event.translationY < -15 : event.velocityY <= -1000;
    if (requirement) {
      swipeEnabled && runOnJS(handleClose)();
    }
  });
  return /*#__PURE__*/React.createElement(GestureDetector, {
    gesture: gesture
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [animatedStyles, currentContainerStyle]
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      height: insets.top
    }
  }), title && /*#__PURE__*/React.createElement(Text, {
    style: currentTitleStyle
  }, title), text && /*#__PURE__*/React.createElement(Text, {
    style: currentTextStyle
  }, text), /*#__PURE__*/React.createElement(View, {
    style: currentActionsContainerStyle
  }, firstAction ? /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: firstActionPress
  }, /*#__PURE__*/React.createElement(Text, {
    style: currentFirstActionStyle
  }, firstAction.text)) : /*#__PURE__*/React.createElement(View, null), secondAction ? /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: secondActionPress
  }, /*#__PURE__*/React.createElement(Text, {
    style: currentSecondActionStyle
  }, secondAction.text)) : /*#__PURE__*/React.createElement(View, null)), /*#__PURE__*/React.createElement(View, {
    style: {
      height: 20
    }
  })));
};
//# sourceMappingURL=Toast.js.map