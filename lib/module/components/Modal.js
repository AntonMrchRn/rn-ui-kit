function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNModal from 'react-native-modal';
import { useTheme } from '../theme/ThemeProvider';
import { ModalCloseIcon } from '../icons/ModalCloseIcon';
import { TouchableOpacity } from 'react-native';
import { ModalLimitIcon } from '../icons/ModalLimitIcon';
import { ModalErrorIcon } from '../icons/ModalErrorIcon';
export const Modal = _ref => {
  let {
    backdropOpacity = 1,
    backdropColor,
    modalStyle,
    containerStyle,
    closeIconContainerStyle,
    closeIconPress,
    closeIcon,
    headerIcon,
    headerIconContainerStyle,
    title,
    titleStyle,
    description,
    descriptionStyle,
    children,
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background.main,
      padding: 16,
      borderRadius: 20
    },
    closeIconContainer: {
      alignItems: 'flex-end'
    },
    headerIconContainer: {
      alignItems: 'center',
      marginBottom: 12
    },
    title: {
      fontFamily: 'Open Sans Semibold',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center',
      color: theme.text.basic,
      marginTop: 8
    },
    description: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      textAlign: 'center',
      color: theme.text.neutral,
      marginTop: 8
    }
  });
  const currentContainerStyle = StyleSheet.compose(styles.container, containerStyle);
  const currentCloseIconContainerStyle = StyleSheet.compose(styles.closeIconContainer, closeIconContainerStyle);
  const currentHeaderIconContainerStyle = StyleSheet.compose(styles.headerIconContainer, headerIconContainerStyle);
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentDescriptionStyle = StyleSheet.compose(styles.description, descriptionStyle);
  const getCloseIcon = () => {
    if (closeIcon) {
      if (typeof closeIcon === 'boolean') {
        return /*#__PURE__*/React.createElement(ModalCloseIcon, null);
      }
      return closeIcon;
    }
    return null;
  };
  const getHeaderIcon = () => {
    if (headerIcon) {
      if (headerIcon === 'limit') {
        return /*#__PURE__*/React.createElement(ModalLimitIcon, null);
      }
      if (headerIcon === 'error') {
        return /*#__PURE__*/React.createElement(ModalErrorIcon, null);
      }
      return headerIcon;
    }
    return null;
  };
  return /*#__PURE__*/React.createElement(RNModal, _extends({}, props, {
    backdropOpacity: backdropOpacity,
    backdropColor: backdropColor || theme.background.modal,
    style: modalStyle
  }), /*#__PURE__*/React.createElement(View, {
    style: currentContainerStyle
  }, /*#__PURE__*/React.createElement(View, {
    style: currentCloseIconContainerStyle
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: closeIconPress
  }, getCloseIcon())), /*#__PURE__*/React.createElement(View, {
    style: currentHeaderIconContainerStyle
  }, getHeaderIcon()), title && /*#__PURE__*/React.createElement(Text, {
    style: currentTitleStyle
  }, title), description && /*#__PURE__*/React.createElement(Text, {
    style: currentDescriptionStyle
  }, description), children));
};
//# sourceMappingURL=Modal.js.map