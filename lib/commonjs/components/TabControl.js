"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _TabControlIcon = require("../icons/TabControlIcon");
var _ThemeProvider = require("../theme/ThemeProvider");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react/no-unstable-nested-components */
const TabControl = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    initialId,
    data,
    labelStyle,
    iconContainerStyle,
    onChange,
    ...props
  } = _ref;
  const [selectedId, setSelectedId] = (0, _react.useState)(initialId);
  (0, _react.useImperativeHandle)(ref, () => {
    return {
      setId(id) {
        setSelectedId(id);
      }
    };
  }, []);
  const theme = (0, _ThemeProvider.useTheme)();
  const styles = _reactNative.StyleSheet.create({
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
    const currentLabelStyle = _reactNative.StyleSheet.compose(styles.label, labelStyle);
    const currentIconContainerStyle = _reactNative.StyleSheet.compose(styles.icon, iconContainerStyle);
    const getIcon = () => {
      if (item.icon) {
        if (typeof item.icon === 'boolean') {
          return /*#__PURE__*/_react.default.createElement(_TabControlIcon.TabControlIcon, {
            color: isActive ? theme.background.accent : theme.background.neutralDisable
          });
        }
        return item.icon;
      }
      return null;
    };
    return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      style: [styles.wrapper, isActive && styles.activeBorder, item.index !== 0 && styles.ml16],
      onPress: () => {
        setSelectedId(item.id);
        onChange && onChange(item);
      }
    }, item.icon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: currentIconContainerStyle
    }, getIcon()), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [currentLabelStyle, isActive && styles.activeText]
    }, item === null || item === void 0 ? void 0 : item.label), item.count ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [styles.badge, isActive && styles.activeBadge]
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [styles.badgeLabel, isActive && styles.activeBadgeLabel]
    }, item === null || item === void 0 ? void 0 : item.count)) : null);
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, _extends({
    horizontal: true,
    showsHorizontalScrollIndicator: false
  }, props), data.map((item, index) => /*#__PURE__*/_react.default.createElement(Item, _extends({
    key: item.id
  }, item, {
    index: index
  })))));
});
exports.TabControl = TabControl;
//# sourceMappingURL=TabControl.js.map