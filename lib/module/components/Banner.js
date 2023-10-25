import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { BannerSuccessIcon } from '../icons/BannerSuccessIcon';
import { BannerInfoIcon } from '../icons/BannerInfoIcon';
import { BannerAlertIcon } from '../icons/BannerAlertIcon';
import { BannerCloseIcon } from '../icons/BannerCloseIcon';
import { useTheme } from '../theme/ThemeProvider';
export const Banner = _ref => {
  let {
    containerStyle,
    type,
    icon,
    iconStyle,
    titleStyle,
    title,
    closeIcon,
    text = '',
    textStyle,
    onClosePress,
    buttonStyle,
    buttonTextStyle,
    onButtonPress,
    buttonText,
    iconColor,
    iconSize
  } = _ref;
  const [visible, setVisible] = useState(true);
  const onClose = () => {
    setVisible(false);
    onClosePress && onClosePress();
  };
  const theme = useTheme();
  const getTextColor = () => {
    switch (type) {
      case 'error':
        return theme.text.danger;
      case 'success':
        return theme.text.success;
      case 'warning':
        return theme.text.warning;
      default:
        return theme.text.accent;
    }
  };
  const getBorderColor = () => {
    switch (type) {
      case 'error':
        return theme.stroke.dangerDisable;
      case 'success':
        return theme.stroke.successDisable;
      case 'warning':
        return theme.stroke.warningDisable;
      default:
        return theme.background.accentMessage;
    }
  };
  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return theme.background.fieldDanger;
      case 'success':
        return theme.background.fieldSuccess;
      case 'warning':
        return theme.background.fieldWarning;
      default:
        return theme.background.fieldMain;
    }
  };
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      flexDirection: 'row',
      backgroundColor: getBackgroundColor(),
      borderWidth: 1,
      borderColor: getBorderColor(),
      borderRadius: 12
    },
    icon: {
      marginRight: 8
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%'
    },
    containerTxt: {
      maxWidth: '90%'
    },
    title: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: '#707070'
    },
    body: {
      alignItems: 'flex-start'
    },
    wrapper: {
      flexShrink: 1
    },
    text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      color: '#707070',
      marginTop: title ? 8 : 0,
      flexShrink: 1
    },
    button: {
      marginTop: 12,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 7,
      paddingHorizontal: 16,
      borderWidth: 1.5,
      borderColor: '#707070',
      borderRadius: 8
    },
    buttonText: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: '#707070'
    }
  });
  const getIcon = () => {
    switch (icon) {
      case 'success':
        return /*#__PURE__*/React.createElement(BannerSuccessIcon, {
          color: iconColor || getTextColor(),
          size: iconSize
        });
      case 'info':
        return /*#__PURE__*/React.createElement(BannerInfoIcon, {
          color: iconColor || getTextColor(),
          size: iconSize
        });
      case 'alert':
        return /*#__PURE__*/React.createElement(BannerAlertIcon, {
          color: iconColor || getTextColor(),
          size: iconSize
        });
      default:
        return icon;
    }
  };
  const hitSlop = {
    top: 24,
    left: 24,
    right: 24,
    bottom: 24
  };
  const currentContainerStyle = StyleSheet.compose(styles.container, containerStyle);
  const currentIconStyle = StyleSheet.compose(styles.icon, iconStyle);
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = StyleSheet.compose(styles.text, textStyle);
  const currentButtonStyle = StyleSheet.compose(styles.button, buttonStyle);
  const currentButtonTextStyle = StyleSheet.compose(styles.buttonText, buttonTextStyle);
  if (visible) {
    return /*#__PURE__*/React.createElement(View, {
      style: currentContainerStyle
    }, /*#__PURE__*/React.createElement(View, {
      style: currentIconStyle
    }, getIcon()), /*#__PURE__*/React.createElement(View, {
      style: styles.wrapper
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.header
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.containerTxt
    }, title ? /*#__PURE__*/React.createElement(Text, {
      style: currentTitleStyle
    }, title) : /*#__PURE__*/React.createElement(Text, {
      style: [currentTextStyle]
    }, text)), /*#__PURE__*/React.createElement(TouchableOpacity, {
      hitSlop: hitSlop,
      onPress: onClose
    }, closeIcon || /*#__PURE__*/React.createElement(BannerCloseIcon, null))), /*#__PURE__*/React.createElement(View, {
      style: styles.body
    }, text && title && /*#__PURE__*/React.createElement(Text, {
      style: currentTextStyle
    }, text), buttonText && /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: currentButtonStyle,
      onPress: onButtonPress
    }, /*#__PURE__*/React.createElement(Text, {
      style: currentButtonTextStyle
    }, buttonText)))));
  }
  return null;
};
//# sourceMappingURL=Banner.js.map