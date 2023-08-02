"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SegmentedControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ThemeProvider = require("../theme/ThemeProvider");
var _reactNative = require("react-native");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const SegmentedControl = _ref => {
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
  const theme = (0, _ThemeProvider.useTheme)();
  const {
    width: ScreenWidth
  } = _reactNative.Dimensions.get('screen');
  const styles = _reactNative.StyleSheet.create({
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
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: theme.text.basic
    },
    activeTextStyle: {
      fontFamily: 'Nunito Sans',
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
    ..._reactNative.StyleSheet.absoluteFillObject,
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
  const [slideAnimation, _] = (0, _react.useState)(new _reactNative.Animated.Value(0));
  const [currentIndex, setCurrentIndex] = (0, _react.useState)(initialIndex);
  const handleTabPress = _react.default.useCallback(index => {
    setCurrentIndex(index);
    onChange && onChange(index);
  }, [onChange]);
  (0, _react.useEffect)(() => {
    _reactNative.Animated.spring(slideAnimation, {
      toValue: (_reactNative.I18nManager.isRTL ? -1 : 1) * currentIndex * translateValue,
      stiffness: 180,
      damping: 25,
      mass: 1,
      useNativeDriver: true
    }).start();
  }, [currentIndex, slideAnimation, translateValue]);
  const renderSelectedTab = () => /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [_selectedTabStyle(slideAnimation), styles.activeTab, selectedTabStyle]
  });
  const renderTab = (tab, index) => {
    const isActiveTab = currentIndex === index;
    const isTabText = typeof tab === 'string';
    return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      key: index,
      activeOpacity: 0.5,
      style: [styles.tab, tabStyle],
      onPress: () => handleTabPress(index)
    }, !isTabText ? tab : /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      numberOfLines: 1,
      style: [styles.textStyle, textStyle, isActiveTab && styles.activeTextStyle, isActiveTab && activeTextStyle]
    }, tab));
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [_containerStyle(), styles.container, style]
  }, renderSelectedTab(), tabs.map((tab, index) => renderTab(tab, index)));
};
exports.SegmentedControl = SegmentedControl;
//# sourceMappingURL=SegmentedControl.js.map