function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { useTheme } from '../theme/ThemeProvider';
import { ModalCloseIcon } from '../icons/ModalCloseIcon';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export const BottomSheet = _ref => {
  let {
    backdropOpacity = 1,
    backdropColor,
    modalStyle,
    containerStyle,
    closeIconContainerStyle,
    closeIconPress,
    closeIcon,
    title,
    titleStyle,
    subtitle,
    subtitleStyle,
    children,
    onSwipeComplete,
    swipeDirection = 'down',
    onModalHide,
    ...props
  } = _ref;
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background.main,
      paddingTop: 12,
      paddingHorizontal: 16,
      paddingBottom: insets.bottom,
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24
    },
    closeIconContainer: {
      right: 20,
      top: 17,
      position: 'absolute',
      zIndex: 100
    },
    headerIconContainer: {
      alignItems: 'center',
      marginBottom: 12
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
      marginTop: 4,
      marginBottom: 8
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0
    },
    line: {
      backgroundColor: theme.background.neutralDisable,
      borderRadius: 5,
      width: 36,
      height: 4,
      alignSelf: 'center',
      marginBottom: 12
    }
  });
  const hitSlop = {
    top: 24,
    left: 24,
    right: 24,
    bottom: 24
  };
  const currentContainerStyle = StyleSheet.compose(styles.container, containerStyle);
  const currentCloseIconContainerStyle = StyleSheet.compose(styles.closeIconContainer, closeIconContainerStyle);
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentSubtitleStyle = StyleSheet.compose(styles.subtitle, subtitleStyle);
  const currentModalStyle = StyleSheet.compose(styles.modal, modalStyle);
  const getCloseIcon = () => {
    if (closeIcon) {
      if (typeof closeIcon === 'boolean') {
        return /*#__PURE__*/React.createElement(ModalCloseIcon, null);
      }
      return closeIcon;
    }
    return null;
  };
  return /*#__PURE__*/React.createElement(Modal, _extends({}, props, {
    backdropOpacity: backdropOpacity,
    backdropColor: backdropColor || theme.background.modal,
    style: currentModalStyle,
    onSwipeComplete: onSwipeComplete,
    swipeDirection: swipeDirection,
    onModalHide: onModalHide
  }), /*#__PURE__*/React.createElement(View, {
    style: currentContainerStyle
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.line
  }), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: currentCloseIconContainerStyle,
    hitSlop: hitSlop,
    onPress: closeIconPress
  }, getCloseIcon()), title && /*#__PURE__*/React.createElement(Text, {
    style: currentTitleStyle
  }, title), subtitle && /*#__PURE__*/React.createElement(Text, {
    style: currentSubtitleStyle
  }, subtitle), children));
};
//# sourceMappingURL=BottomSheet.js.map