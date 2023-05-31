function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { TabControlIcon } from '../icons/TabControlIcon';
import { useTheme } from '../theme/ThemeProvider';
import { ScrollView } from 'react-native';
export const TabControl = _ref => {
  let {
    initialId,
    data,
    labelStyle,
    ...props
  } = _ref;
  const [selectedId, setSelectedId] = useState(initialId);
  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      padding: 5,
      borderRadius: 4,
      backgroundColor: theme.background.main,
      margin: 10,
      paddingVertical: 5,
      borderBottomWidth: 1.5,
      borderColor: theme.icons.neutral,
      flexDirection: 'row'
    },
    label: {
      marginLeft: 5,
      fontFamily: 'Nunito Sans Regular',
      color: theme.icons.neutral
    },
    activeText: {
      color: theme.background.accent,
      fontFamily: 'Nunito Sans Bold',
      fontWeight: '700'
    },
    activeBorder: {
      borderBottomColor: theme.background.accent
    }
  });
  const Item = item => {
    const isActive = selectedId === item.id;
    const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
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
    }, getIcon(), /*#__PURE__*/React.createElement(Text, {
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