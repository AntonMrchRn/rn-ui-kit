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
    onChange,
    ...props
  } = _ref;
  const [selectedId, setSelectedId] = useState(initialId);
  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      paddingBottom: 8,
      backgroundColor: theme.background.main,
      flexDirection: 'row'
    },
    label: {
      fontFamily: 'Nunito Sans Regular',
      color: theme.icons.neutral,
      fontSize: 17
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
    },
    ml16: {
      marginLeft: 16
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
    return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: [styles.wrapper, isActive && styles.activeBorder, item.index !== 0 && styles.ml16],
      onPress: () => {
        setSelectedId(item.id);
        onChange && onChange(item);
      }
    }, item.icon && /*#__PURE__*/React.createElement(View, {
      style: currentIconContainerStyle
    }, getIcon()), /*#__PURE__*/React.createElement(Text, {
      style: [currentLabelStyle, isActive && styles.activeText]
    }, item === null || item === void 0 ? void 0 : item.label)));
  };
  return /*#__PURE__*/React.createElement(ScrollView, _extends({
    horizontal: true,
    showsHorizontalScrollIndicator: false
  }, props), data.map((item, index) => /*#__PURE__*/React.createElement(Item, _extends({
    key: item.id
  }, item, {
    index: index
  }))));
};
//# sourceMappingURL=TabControl.js.map