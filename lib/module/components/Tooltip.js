import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { TriangleIcon } from '../icons/TriangleIcon';
import { TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
export const Tooltip = _ref => {
  let {
    text,
    title,
    containerStyle,
    titleStyle,
    textStyle,
    triangleIcon,
    triangleStyle,
    triangleEdge = 'top',
    triagnleAlign = 'start',
    isVisible = false,
    onClose,
    children,
    coords = {
      x: 0,
      y: 0
    }
  } = _ref;
  const theme = useTheme();
  const [measure, setMeasure] = useState({
    x: 0,
    y: 0
  });
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 16,
      position: 'relative',
      alignSelf: 'flex-start'
    },
    title: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: theme.text.contrast
    },
    text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: theme.text.contrast
    },
    modal: {
      top: measure.y - coords.y,
      left: measure.x + coords.x,
      position: 'absolute'
    }
  });
  const triangleStyles = {
    top: {
      start: {
        position: 'absolute',
        top: -8,
        left: 12
      },
      center: {
        position: 'absolute',
        top: -8,
        left: '48%'
      },
      end: {
        position: 'absolute',
        top: -8,
        right: 12
      }
    },
    left: {
      start: {
        position: 'absolute',
        top: 12,
        left: -14,
        transform: [{
          rotate: '270deg'
        }]
      },
      center: {
        position: 'absolute',
        top: '60%',
        left: -14,
        transform: [{
          rotate: '270deg'
        }]
      },
      end: {
        position: 'absolute',
        bottom: 12,
        left: -14,
        transform: [{
          rotate: '270deg'
        }]
      }
    },
    right: {
      start: {
        position: 'absolute',
        top: 12,
        right: -14,
        transform: [{
          rotate: '90deg'
        }]
      },
      center: {
        position: 'absolute',
        top: '60%',
        right: -14,
        transform: [{
          rotate: '90deg'
        }]
      },
      end: {
        position: 'absolute',
        bottom: 12,
        right: -14,
        transform: [{
          rotate: '90deg'
        }]
      }
    },
    bottom: {
      start: {
        position: 'absolute',
        bottom: -8,
        left: 12,
        transform: [{
          rotate: '180deg'
        }]
      },
      center: {
        position: 'absolute',
        bottom: -8,
        left: '48%',
        transform: [{
          rotate: '180deg'
        }]
      },
      end: {
        position: 'absolute',
        bottom: -8,
        right: 12,
        transform: [{
          rotate: '180deg'
        }]
      }
    }
  };
  const currentContainerStyle = StyleSheet.compose(styles.container, containerStyle);
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = StyleSheet.compose(styles.text, textStyle);
  const currentTriangleStyle = StyleSheet.compose(triangleStyles[triangleEdge][triagnleAlign], triangleStyle);
  const ref = useRef(null);
  useEffect(() => {
    if (isVisible) {
      var _ref$current;
      ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.measureInWindow((x, y) => {
        setMeasure({
          x,
          y
        });
      });
    }
  }, [isVisible]);
  return /*#__PURE__*/React.createElement(View, {
    ref: ref,
    collapsable: false
  }, /*#__PURE__*/React.createElement(Modal, {
    isVisible: isVisible,
    onBackdropPress: onClose,
    animationIn: "fadeIn",
    animationOut: "fadeOut",
    backdropColor: "transparent",
    backdropOpacity: 1,
    style: styles.modal
  }, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: onClose
  }, /*#__PURE__*/React.createElement(View, {
    style: currentContainerStyle
  }, /*#__PURE__*/React.createElement(View, {
    style: currentTriangleStyle
  }, triangleIcon || /*#__PURE__*/React.createElement(TriangleIcon, null)), title && /*#__PURE__*/React.createElement(Text, {
    style: currentTitleStyle
  }, title), /*#__PURE__*/React.createElement(Text, {
    style: currentTextStyle
  }, text)))), /*#__PURE__*/React.createElement(View, null, children));
};
//# sourceMappingURL=Tooltip.js.map