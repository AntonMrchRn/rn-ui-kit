function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react/no-unstable-nested-components */
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { TabControlIcon } from '../icons/TabControlIcon';
import { useTheme } from '../theme/ThemeProvider';
import { ScrollView } from 'react-native';
export const TabControl = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    initialId,
    data,
    labelStyle,
    iconContainerStyle,
    onChange,
    ...props
  } = _ref;
  const [selectedId, setSelectedId] = useState(initialId);
  useImperativeHandle(ref, () => {
    return {
      setId(id) {
        setSelectedId(id);
      }
    };
  }, []);
  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      paddingBottom: 8,
      backgroundColor: theme.background.main,
      flexDirection: 'row',
      height: 36
    },
    label: {
      fontFamily: 'Nunito Sans',
      fontWeight: '400',
      color: theme.icons.neutral,
      fontSize: 17
    },
    activeText: {
      color: theme.background.accent
    },
    activeBorder: {
      borderBottomWidth: 2,
      borderBottomColor: theme.background.accent
    },
    icon: {
      marginRight: 6,
      top: 2
    },
    ml16: {
      marginLeft: 16
    },
    badge: {
      backgroundColor: theme.background.neutralDisableSecond,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginLeft: 10,
      justifyContent: 'center',
      height: 26
    },
    activeBadge: {
      backgroundColor: theme.background.fieldMain
    },
    badgeLabel: {
      fontSize: 13,
      fontFamily: 'Nunito Sans',
      fontWeight: '400',
      color: theme.text.basic
    },
    activeBadgeLabel: {
      color: theme.background.accent
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
      style: [styles.wrapper, isActive && styles.activeBorder, item.index !== 0 && styles.ml16],
      onPress: () => {
        setSelectedId(item.id);
        onChange && onChange(item);
      }
    }, item.icon && /*#__PURE__*/React.createElement(View, {
      style: currentIconContainerStyle
    }, getIcon()), /*#__PURE__*/React.createElement(Text, {
      style: [currentLabelStyle, isActive && styles.activeText]
    }, item === null || item === void 0 ? void 0 : item.label), item.count ? /*#__PURE__*/React.createElement(View, {
      style: [styles.badge, isActive && styles.activeBadge]
    }, /*#__PURE__*/React.createElement(Text, {
      style: [styles.badgeLabel, isActive && styles.activeBadgeLabel]
    }, item === null || item === void 0 ? void 0 : item.count)) : null);
  };
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(ScrollView, _extends({
    horizontal: true,
    showsHorizontalScrollIndicator: false
  }, props), data.map((item, index) => /*#__PURE__*/React.createElement(Item, _extends({
    key: item.id
  }, item, {
    index: index
  })))));
});
//# sourceMappingURL=TabControl.js.map