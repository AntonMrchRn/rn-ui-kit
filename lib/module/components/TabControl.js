function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { TabControlIcon } from '../icons/TabControlIcon';
import { useTheme } from '../theme/ThemeProvider';
import { ScrollView } from 'react-native';
export const TabControl = _ref => {
  let {
    initialId,
    data,
    labelStyle,
    iconContainerStyle,
    ...props
  } = _ref;
  const [selectedId, setSelectedId] = useState(initialId);
  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      paddingBottom: 8,
      backgroundColor: theme.background.main,
      margin: 10,
      flexDirection: 'row'
    },
    label: {
      fontFamily: 'Nunito Sans Regular',
      color: theme.icons.neutral
    },
    activeText: {
      color: theme.background.accent,
      fontFamily: 'Nunito Sans Bold',
      fontWeight: '700'
    },
    activeBorder: {
      borderBottomWidth: 1.5,
      borderBottomColor: theme.background.accent
    },
    icon: {
      marginRight: 5
    }
  });
  const Item = item => {
    const isActive = selectedId === item.id;
    const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
    const currentIconContainerStyle = StyleSheet.compose(styles.icon, iconContainerStyle);
    const getIcon = () => {
      if (item.icon) {
        if (typeof item.icon === 'boolean') {
          return /*#__PURE__*/React.createElement(TabControlIcon, {
            color: isActive ? theme.background.accent : theme.background.neutralDisable
          });
        }
        return item.icon;
      }
      return null;
    };
    return /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: [styles.wrapper, isActive && styles.activeBorder],
      onPress: () => {
        setSelectedId(item.id);
        item.onPress && item.onPress();
      }
    }, item.icon && /*#__PURE__*/React.createElement(View, {
      style: currentIconContainerStyle
    }, getIcon()), /*#__PURE__*/React.createElement(Text, {
      style: [currentLabelStyle, isActive && styles.activeText]
    }, item === null || item === void 0 ? void 0 : item.label));
  };
  return /*#__PURE__*/React.createElement(ScrollView, _extends({
    horizontal: true
  }, props, {
    showsHorizontalScrollIndicator: false
  }), data.map(item => /*#__PURE__*/React.createElement(Item, _extends({
    key: item.id
  }, item))));
};
//# sourceMappingURL=TabControl.js.map