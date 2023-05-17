import React, { useCallback } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { LinkIcon } from '../icons/LinkIcon';
import { typography } from './Text';
export const Link = _ref => {
  let {
    label,
    style,
    labelStyle,
    url,
    icon,
    size
  } = _ref;
  const theme = useTheme();
  const handlePress = useCallback(async () => {
    if (url) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log(`Don't know how to open this URL: ${url}`);
      }
    } else {
      console.log('URL must not be empty');
    }
  }, [url]);
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    label: {
      color: theme.text.accent
    },
    icon: {
      marginRight: 4
    }
  });
  const containerStyle = StyleSheet.compose(styles.container, style);
  const variant = size === 'L' ? 'bodyMRegular' : 'bodySRegular';
  const currentLabelStyle = StyleSheet.compose(styles.label, [typography[variant], labelStyle]);
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: containerStyle,
    onPress: handlePress
  }, icon && /*#__PURE__*/React.createElement(View, {
    style: styles.icon
  }, /*#__PURE__*/React.createElement(LinkIcon, {
    size: size,
    color: theme.icons.accent
  })), /*#__PURE__*/React.createElement(Text, {
    style: currentLabelStyle
  }, label));
};
//# sourceMappingURL=Link.js.map