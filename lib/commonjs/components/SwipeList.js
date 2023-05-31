"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwipeList = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeSwipeListView = require("react-native-swipe-list-view");
var _ThemeProvider = require("../theme/ThemeProvider");
var _EditActionIcon = require("../icons/EditActionIcon");
var _DeleteActionIcon = require("../icons/DeleteActionIcon");
var _ReturnActionIcon = require("../icons/ReturnActionIcon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SwipeList = _ref => {
  let {
    data,
    variant,
    fistAction,
    secondAction,
    containerStyle,
    labelStyle,
    titleStyle,
    itemTextStyle,
    itemsContainerStyle,
    hiddenContainerStyle,
    actionStyle,
    firstActionStyle,
    secondActionStyle
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
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
  const isDelete = variant === 'delete';
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
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end'
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
    }
  });
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.container, containerStyle);
  const currentLabelStyle = _reactNative.StyleSheet.compose(styles.label, labelStyle);
  const currentTitleStyle = _reactNative.StyleSheet.compose(styles.title, titleStyle);
  const currentItemTextStyle = _reactNative.StyleSheet.compose(styles.text, itemTextStyle);
  const currentItemsContainerStyle = _reactNative.StyleSheet.compose(styles.items, itemsContainerStyle);
  const currentHiddenContainerStyle = _reactNative.StyleSheet.compose(styles.hidden, hiddenContainerStyle);
  const currentActionStyle = _reactNative.StyleSheet.compose(styles.action, actionStyle);
  const currentFirstActionStyle = _reactNative.StyleSheet.compose(styles.first, firstActionStyle);
  const currentSecondActionStyle = _reactNative.StyleSheet.compose(styles.second, secondActionStyle);
  const firstActionStyleCompose = _reactNative.StyleSheet.compose(currentActionStyle, currentFirstActionStyle);
  const secondActionStyleCompose = _reactNative.StyleSheet.compose(currentActionStyle, currentSecondActionStyle);
  const renderItem = _ref2 => {
    let {
      item
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: currentContainerStyle
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: currentLabelStyle
    }, item.label), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: currentTitleStyle
    }, item.title), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: currentItemsContainerStyle
    }, item.items.map(i => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: i.id
    }, i === null || i === void 0 ? void 0 : i.icon, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: currentItemTextStyle
    }, i.text)))));
  };
  const renderHiddenItem = _ref3 => {
    let {
      item
    } = _ref3;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: currentHiddenContainerStyle
    }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      style: firstActionStyleCompose,
      onPress: () => fistAction(item)
    }, /*#__PURE__*/_react.default.createElement(_EditActionIcon.EditActionIcon, null)), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      style: secondActionStyleCompose,
      onPress: () => secondAction(item)
    }, isDelete ? /*#__PURE__*/_react.default.createElement(_ReturnActionIcon.ReturnActionIcon, null) : /*#__PURE__*/_react.default.createElement(_DeleteActionIcon.DeleteActionIcon, null)));
  };
  return /*#__PURE__*/_react.default.createElement(_reactNativeSwipeListView.SwipeListView, {
    data: data,
    keyExtractor: item => item.id,
    renderItem: renderItem,
    renderHiddenItem: renderHiddenItem,
    rightOpenValue: -142
  });
};
exports.SwipeList = SwipeList;
//# sourceMappingURL=SwipeList.js.map