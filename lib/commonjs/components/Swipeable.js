"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swipeable = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Swipeable = _interopRequireDefault(require("react-native-gesture-handler/Swipeable"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
var _DeleteActionIcon = require("../icons/DeleteActionIcon");
var _EditActionIcon = require("../icons/EditActionIcon");
var _ReturnActionIcon = require("../icons/ReturnActionIcon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Swipeable = _ref => {
  let {
    items = [],
    label,
    title,
    variant,
    firstAction,
    secondAction,
    containerStyle,
    labelStyle,
    titleStyle,
    itemTextStyle,
    itemsContainerStyle,
    hiddenContainerStyle,
    actionStyle,
    firstActionStyle,
    secondActionStyle,
    previewActions,
    itemContainerStyle,
    itemIconStyle,
    canSwipe = true
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (previewActions) {
      setTimeout(() => {
        var _ref$current;
        (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.openRight();
      }, 3000);
      setTimeout(() => {
        var _ref$current2;
        (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.close();
      }, 4000);
    }
  }, [previewActions]);
  const isDelete = variant === 'delete';
  const getContainerBackgroundColor = () => {
    switch (variant) {
      case 'user':
        return theme.background.fieldSuccess;
      case 'coordinator':
        return theme.background.fieldWarning;
      default:
        return theme.background.main;
    }
  };
  const onFirstAction = () => {
    var _ref$current3;
    (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.close();
    firstAction();
  };
  const onSecondAction = () => {
    var _ref$current4;
    (_ref$current4 = ref.current) === null || _ref$current4 === void 0 ? void 0 : _ref$current4.close();
    secondAction();
  };
  const styles = _reactNative.StyleSheet.create({
    text: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isDelete ? theme.text.neutralDisable : theme.text.neutral
    },
    label: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isDelete ? theme.text.neutralDisable : theme.text.neutral,
      marginBottom: 4
    },
    title: {
      fontFamily: 'Nunito Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 17,
      lineHeight: 24,
      color: isDelete ? theme.text.neutralDisable : theme.text.basic
    },
    container: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      backgroundColor: getContainerBackgroundColor()
    },
    items: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    hidden: {
      flexDirection: 'row'
    },
    action: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 72
    },
    first: {
      backgroundColor: theme.background.accent
    },
    second: {
      backgroundColor: isDelete ? theme.background.success : theme.background.danger
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      marginRight: 4
    }
  });
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.container, containerStyle);
  const currentLabelStyle = _reactNative.StyleSheet.compose(styles.label, labelStyle);
  const currentTitleStyle = _reactNative.StyleSheet.compose(styles.title, titleStyle);
  const currentItemTextStyle = _reactNative.StyleSheet.compose(styles.text, itemTextStyle);
  const currentItemsContainerStyle = _reactNative.StyleSheet.compose(styles.items, itemsContainerStyle);
  const currentItemContainerStyle = _reactNative.StyleSheet.compose(styles.item, itemContainerStyle);
  const currentItemIconStyle = _reactNative.StyleSheet.compose(styles.icon, itemIconStyle);
  const currentHiddenContainerStyle = _reactNative.StyleSheet.compose(styles.hidden, hiddenContainerStyle);
  const currentActionStyle = _reactNative.StyleSheet.compose(styles.action, actionStyle);
  const currentFirstActionStyle = _reactNative.StyleSheet.compose(styles.first, firstActionStyle);
  const currentSecondActionStyle = _reactNative.StyleSheet.compose(styles.second, secondActionStyle);
  const firstActionStyleCompose = _reactNative.StyleSheet.compose(currentActionStyle, currentFirstActionStyle);
  const secondActionStyleCompose = _reactNative.StyleSheet.compose(currentActionStyle, currentSecondActionStyle);
  const renderRightActions = () => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: currentHiddenContainerStyle
    }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      style: firstActionStyleCompose,
      onPress: onFirstAction
    }, /*#__PURE__*/_react.default.createElement(_EditActionIcon.EditActionIcon, null)), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      style: secondActionStyleCompose,
      onPress: onSecondAction
    }, isDelete ? /*#__PURE__*/_react.default.createElement(_ReturnActionIcon.ReturnActionIcon, null) : /*#__PURE__*/_react.default.createElement(_DeleteActionIcon.DeleteActionIcon, null)));
  };
  const Item = () => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: currentContainerStyle
    }, label && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: currentLabelStyle
    }, label), title && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: currentTitleStyle
    }, title), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: currentItemsContainerStyle
    }, items.map((i, index) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: index,
      style: currentItemContainerStyle
    }, (i === null || i === void 0 ? void 0 : i.icon) && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: currentItemIconStyle
    }, i === null || i === void 0 ? void 0 : i.icon), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: currentItemTextStyle
    }, i === null || i === void 0 ? void 0 : i.text)))));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, canSwipe ? /*#__PURE__*/_react.default.createElement(_Swipeable.default, {
    ref: ref,
    renderRightActions: renderRightActions,
    friction: 1,
    overshootLeft: false,
    overshootRight: false,
    rightThreshold: 100
  }, /*#__PURE__*/_react.default.createElement(Item, null)) : /*#__PURE__*/_react.default.createElement(Item, null));
};
exports.Swipeable = Swipeable;
//# sourceMappingURL=Swipeable.js.map