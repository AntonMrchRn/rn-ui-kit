function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { TabControlIcon } from '../icons/TabControlIcon';
import { useTheme } from '../theme/ThemeProvider';
import { ScrollView } from 'react-native';
export const TabControl = _ref => {
  let {
    currentTabId,
    data,
    labelStyle,
    iconContainerStyle,
    onChange,
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.background.main,
      flexDirection: 'row',
      height: 40,
      marginBottom: 4
    },
    label: {
      fontFamily: 'Nunito Sans',
      fontWeight: '400',
      color: theme.icons.neutral,
      fontSize: 17,
      lineHeight: 24
    },
    activeText: {
      color: theme.background.accent,
      fontWeight: '700'
    },
    activeBorder: {
      borderBottomWidth: 2,
      borderBottomColor: theme.background.accent
    },
    icon: {
      marginRight: 8,
      top: 2
    },
    ml16: {
      marginLeft: 16
    },
    labelWrapper: {
      paddingTop: 8,
      flexDirection: 'row'
    },
    badge: {
      backgroundColor: theme.background.danger,
      borderRadius: 32,
      paddingHorizontal: 5.5,
      paddingVertical: 1,
      position: 'absolute',
      right: -10,
      top: 0
    },
    badgeLabel: {
      fontSize: 11,
      fontFamily: 'Nunito Sans',
      fontWeight: '400',
      color: theme.text.contrast
    },
    mr10: {
      marginRight: 10
    }
  });
  const Item = (item, isLast) => {
    const isActive = currentTabId === item.id;
    const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
    const currentIconContainerStyle = StyleSheet.compose(styles.icon, iconContainerStyle);
    const getIcon = () => {
      if (item.icon) {
        if (typeof item.icon === 'boolean') {
          return /*#__PURE__*/React.createElement(TabControlIcon, {
            color: isActive ? theme.background.accent : theme.icons.neutral
          });
        }
        return item.icon;
      }
      return null;
    };
    return /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: [styles.wrapper, isActive && styles.activeBorder, item.index !== 0 && styles.ml16, (item === null || item === void 0 ? void 0 : item.count) && isLast && styles.mr10],
      onPress: () => {
        onChange && onChange(item);
      }
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.labelWrapper
    }, item.icon && /*#__PURE__*/React.createElement(View, {
      style: currentIconContainerStyle
    }, getIcon()), /*#__PURE__*/React.createElement(Text, {
      style: [currentLabelStyle, isActive && styles.activeText]
    }, item === null || item === void 0 ? void 0 : item.label)), !!(item !== null && item !== void 0 && item.count) && /*#__PURE__*/React.createElement(View, {
      style: styles.badge
    }, /*#__PURE__*/React.createElement(Text, {
      style: styles.badgeLabel
    }, item === null || item === void 0 ? void 0 : item.count)));
  };
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(ScrollView, _extends({
    horizontal: true,
    showsHorizontalScrollIndicator: false
  }, props), data.map((item, index, array) => /*#__PURE__*/React.createElement(Item, _extends({
    key: item.id
  }, item, {
    index: index,
    isLast: index === (array === null || array === void 0 ? void 0 : array.length) - 1
  })))));
};
//# sourceMappingURL=TabControl.js.map