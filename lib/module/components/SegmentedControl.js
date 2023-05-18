import React, { useState, useEffect } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Text, Animated, Dimensions, TouchableOpacity, I18nManager, StyleSheet } from 'react-native';
export const SegmentedControl = _ref => {
  let {
    style,
    tabs,
    width,
    onChange,
    tabStyle,
    textStyle,
    selectedTabStyle,
    initialIndex = 0,
    activeTextStyle,
    activeTabColor = '#FFFFFF',
    extraSpacing = 0
  } = _ref;
  const theme = useTheme();
  const {
    width: ScreenWidth
  } = Dimensions.get('screen');
  const styles = StyleSheet.create({
    container: {
      padding: 2,
      backgroundColor: theme.background.fieldMain,
      borderRadius: 8
    },
    tab: {
      flex: 1,
      paddingVertical: 8,
      alignItems: 'center',
      justifyContent: 'center'
    },
    activeTab: {
      borderRadius: 7
    },
    textStyle: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16
    },
    activeTextStyle: {
      fontFamily: 'Nunito Sans Bold',
      fontWeight: '700',
      color: theme.text.accent
    }
  });
  const _containerStyle = () => ({
    width: width || ScreenWidth - 32,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F3F5F6'
  });
  const _selectedTabStyle = translateXAnimation => [{
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    marginVertical: 2,
    marginHorizontal: 2,
    width: (width ? width - 8 : ScreenWidth - 35) / (tabs === null || tabs === void 0 ? void 0 : tabs.length),
    backgroundColor: activeTabColor,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 4,
    transform: [{
      translateX: translateXAnimation
    }]
  }];
  const translateValue = (width ? width + extraSpacing : ScreenWidth - 35) / tabs.length;
  const [slideAnimation, _] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const handleTabPress = React.useCallback(index => {
    setCurrentIndex(index);
    onChange && onChange(index);
  }, [onChange]);
  useEffect(() => {
    Animated.spring(slideAnimation, {
      toValue: (I18nManager.isRTL ? -1 : 1) * currentIndex * translateValue,
      stiffness: 180,
      damping: 25,
      mass: 1,
      useNativeDriver: true
    }).start();
  }, [currentIndex, slideAnimation, translateValue]);
  const renderSelectedTab = () => /*#__PURE__*/React.createElement(Animated.View, {
    style: [_selectedTabStyle(slideAnimation), styles.activeTab, selectedTabStyle]
  });
  const renderTab = (tab, index) => {
    const isActiveTab = currentIndex === index;
    const isTabText = typeof tab === 'string';
    return /*#__PURE__*/React.createElement(TouchableOpacity, {
      key: index,
      activeOpacity: 0.5,
      style: [styles.tab, tabStyle],
      onPress: () => handleTabPress(index)
    }, !isTabText ? tab : /*#__PURE__*/React.createElement(Text, {
      numberOfLines: 1,
      style: [styles.textStyle, textStyle, isActiveTab && styles.activeTextStyle, isActiveTab && activeTextStyle]
    }, tab));
  };
  return /*#__PURE__*/React.createElement(Animated.View, {
    style: [_containerStyle(), styles.container, style]
  }, renderSelectedTab(), tabs.map((tab, index) => renderTab(tab, index)));
};
//# sourceMappingURL=SegmentedControl.js.map