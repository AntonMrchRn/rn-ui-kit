import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { ChipsIcon } from '../icons/ChipsIcon';
import { ChipsCloseIcon } from '../icons/ChipsCloseIcon';
export const Chips = _ref => {
  let {
    icon,
    close,
    labelStyle,
    label,
    containerStyle,
    selected,
    closeIconPress,
    onPress,
    disabled
  } = _ref;
  const theme = useTheme();
  const getLabelColor = () => {
    if (disabled) {
      return theme.text.neutralDisable;
    }
    if (selected) {
      return theme.text.contrast;
    }
    return theme.text.basic;
  };
  const getBorderColor = () => {
    if (disabled) {
      return theme.stroke.disableDivider;
    }
    if (selected) {
      return theme.background.accent;
    }
    return theme.stroke.neutral;
  };
  const styles = StyleSheet.create({
    label: {
      color: getLabelColor(),
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 20,
      fontFamily: 'Nunito Sans'
    },
    container: {
      alignSelf: 'flex-start',
      borderRadius: 12,
      minWidth: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: getBorderColor(),
      backgroundColor: selected && !disabled ? theme.background.accent : 'transparent'
    },
    icon: {
      marginRight: 4
    },
    close: {
      paddingRight: 8
    },
    wrapper: {
      padding: 8,
      alignItems: 'center',
      flexDirection: 'row'
    }
  });
  const getIcon = () => {
    if (icon) {
      if (typeof icon === 'boolean') {
        return /*#__PURE__*/React.createElement(ChipsIcon, {
          color: disabled ? theme.text.neutralDisable : undefined
        });
      }
      return icon;
    }
    return null;
  };
  const getCloseIcon = () => {
    if (close) {
      if (typeof close === 'boolean') {
        return /*#__PURE__*/React.createElement(ChipsCloseIcon, {
          color: disabled ? theme.text.neutralDisable : undefined
        });
      }
      return icon;
    }
    return null;
  };
  const currentContainerStyle = StyleSheet.compose(styles.container, containerStyle);
  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
  return /*#__PURE__*/React.createElement(View, {
    style: currentContainerStyle
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPress,
    style: styles.wrapper,
    disabled: disabled
  }, icon && /*#__PURE__*/React.createElement(View, {
    style: styles.icon
  }, getIcon()), label && /*#__PURE__*/React.createElement(Text, {
    style: currentLabelStyle
  }, label)), close && /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: closeIconPress,
    style: styles.close,
    disabled: disabled
  }, getCloseIcon()));
};
//# sourceMappingURL=Chips.js.map