import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ErrorIcon } from '../icons/ErrorIcon';
import { InfoIcon } from '../icons/InfoIcon';
import { SuccessIcon } from '../icons/SuccessIcon';
import { WarningIcon } from '../icons/WarningIcon';
import { useTheme } from '../theme/ThemeProvider';
export const Tips = _ref => {
  let {
    text,
    onButtonPress,
    buttonText,
    type,
    containerStyle,
    textStyle,
    buttonStyle,
    buttonTextStyle
  } = _ref;
  const theme = useTheme();
  const getIcon = () => {
    switch (type) {
      case 'error':
        return /*#__PURE__*/React.createElement(ErrorIcon, null);
      case 'success':
        return /*#__PURE__*/React.createElement(SuccessIcon, null);
      case 'warning':
        return /*#__PURE__*/React.createElement(WarningIcon, null);
      default:
        return /*#__PURE__*/React.createElement(InfoIcon, null);
    }
  };
  const styles = StyleSheet.create({
    container: {
      padding: buttonText ? 16 : 12,
      backgroundColor: theme.stroke.neutralLight,
      borderRadius: 12,
      alignItems: 'flex-start',
      flexDirection: 'row'
    },
    text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      color: theme.stroke.neutral
    },
    button: {
      marginTop: 12,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6.5,
      paddingHorizontal: 16,
      borderWidth: 1.5,
      borderColor: theme.text.neutral,
      borderRadius: 8
    },
    buttonText: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: theme.text.neutral,
      textAlign: 'center'
    },
    wrapIcon: {
      marginRight: 8
    },
    wrapRight: {
      flexShrink: 1,
      alignItems: 'flex-start'
    }
  });
  const currentContainerStyle = StyleSheet.compose(styles.container, containerStyle);
  const currentTextStyle = StyleSheet.compose(styles.text, textStyle);
  const currentButtonStyle = StyleSheet.compose(styles.button, buttonStyle);
  const currentButtonTextStyle = StyleSheet.compose(styles.buttonText, buttonTextStyle);
  return /*#__PURE__*/React.createElement(View, {
    style: currentContainerStyle
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.wrapIcon
  }, getIcon()), /*#__PURE__*/React.createElement(View, {
    style: styles.wrapRight
  }, text && /*#__PURE__*/React.createElement(Text, {
    style: currentTextStyle
  }, text), buttonText && /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: currentButtonStyle,
    onPress: onButtonPress
  }, /*#__PURE__*/React.createElement(Text, {
    style: currentButtonTextStyle
  }, buttonText))));
};
//# sourceMappingURL=Tips.js.map