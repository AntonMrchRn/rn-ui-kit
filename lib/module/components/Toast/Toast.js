function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
    contentHeight = 170,
    swipeEnabled = true
  } = _ref;
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const animation = useRef(new Animated.Value(0)).current;
  const closeTimeoutRef = useRef(null);
  const panResponderAnimRef = useRef();
  const panResponderRef = useRef();
  const handleClose = () => {
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: false,
      duration: animationDuration
    }).start(() => onDestroy());
  };
  const getPanResponderAnim = () => {
    if (panResponderAnimRef.current) return panResponderAnimRef.current;
    panResponderAnimRef.current = new Animated.ValueXY({
      x: 0,
      y: 0
    });
    return panResponderAnimRef.current;
  };
  const getPanResponder = () => {
    if (panResponderRef.current) return panResponderRef.current;
    panResponderRef.current = PanResponder.create({
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
  const styles = StyleSheet.create({
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
  const currentContainerStyle = StyleSheet.compose(styles.container, containerStyle);
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = StyleSheet.compose(styles.text, textStyle);
  const currentActionsContainerStyle = StyleSheet.compose(styles.actionsContainer, actionsContainerStyle);
  const currentFirstActionStyle = StyleSheet.compose(styles.title, firstAction === null || firstAction === void 0 ? void 0 : firstAction.style);
  const currentSecondActionStyle = StyleSheet.compose(styles.title, secondAction === null || secondAction === void 0 ? void 0 : secondAction.style);
  useEffect(() => {
    Animated.timing(animation, {
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
  return /*#__PURE__*/React.createElement(Animated.View, _extends({
    style: [currentContainerStyle, animationContainerStyle]
  }, swipeEnabled ? getPanResponder().panHandlers : null), /*#__PURE__*/React.createElement(View, {
    style: {
      marginTop: insets.top
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
  }, secondAction.text)) : /*#__PURE__*/React.createElement(View, null)));
};
//# sourceMappingURL=Toast.js.map