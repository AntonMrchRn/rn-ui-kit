function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { BottomSheetModal as RNBottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { forwardRef, useCallback, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { ModalCloseIcon } from '../icons/ModalCloseIcon';
export const BottomSheetModal = /*#__PURE__*/forwardRef((_ref, ref) => {
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
    ...props
  } = _ref;
  const theme = useTheme();
  const initSnapPoints = useMemo(() => ['80%'], []);
  const renderBackdrop = useCallback(prop => /*#__PURE__*/React.createElement(BottomSheetBackdrop, _extends({}, prop, {
    disappearsOnIndex: -1,
    appearsOnIndex: 0,
    onPress: onBackdropPress
  })), [onBackdropPress]);
  const styles = StyleSheet.create({
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
      position: 'absolute'
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
        return /*#__PURE__*/React.createElement(ModalCloseIcon, null);
      }
      return closeIcon;
    }
    return null;
  };
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentSubtitleStyle = StyleSheet.compose(styles.subtitle, subtitleStyle);
  return /*#__PURE__*/React.createElement(RNBottomSheetModal, _extends({
    ref: ref,
    snapPoints: snapPoints || initSnapPoints,
    backdropComponent: backdropComponent || renderBackdrop,
    style: [styles.style, style],
    backgroundStyle: [styles.backgroundStyle, backgroundStyle],
    handleStyle: [styles.handleStyle, handleStyle],
    handleIndicatorStyle: [styles.handleIndicatorStyle, handleIndicatorStyle]
  }, props), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.icon,
    onPress: closeIconPress
  }, getCloseIcon()), /*#__PURE__*/React.createElement(View, {
    style: styles.indicatorBottom
  }), title && /*#__PURE__*/React.createElement(Text, {
    style: currentTitleStyle
  }, title), subtitle && /*#__PURE__*/React.createElement(Text, {
    style: currentSubtitleStyle
  }, subtitle), children);
});
//# sourceMappingURL=BottomSheetModal.js.map