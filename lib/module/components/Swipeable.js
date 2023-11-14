import React, { useEffect, useRef } from 'react';
import RNSwipeable from 'react-native-gesture-handler/Swipeable';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { DeleteActionIcon } from '../icons/DeleteActionIcon';
import { EditActionIcon } from '../icons/EditActionIcon';
import { ReturnActionIcon } from '../icons/ReturnActionIcon';
export const Swipeable = _ref => {
  let {
    items = [],
    topItem,
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
    canSwipe = true,
    labelPosition = 'top'
  } = _ref;
  const theme = useTheme();
  const ref = useRef(null);
  let actionName = useRef().current;
  useEffect(() => {
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
    actionName = 'first';
  };
  const onSecondAction = () => {
    var _ref$current4;
    (_ref$current4 = ref.current) === null || _ref$current4 === void 0 ? void 0 : _ref$current4.close();
    actionName = 'second';
  };
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isDelete ? theme.text.neutralDisable : theme.text.neutral
    },
    label: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isDelete ? theme.text.neutralDisable : theme.text.neutral,
      marginBottom: labelPosition === 'top' ? 4 : 0
    },
    title: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
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
      marginTop: 8,
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',
      justifyContent: labelPosition === 'bottom' ? 'space-between' : undefined
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
  const currentContainerStyle = StyleSheet.compose(styles.container, containerStyle);
  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentItemTextStyle = StyleSheet.compose(styles.text, itemTextStyle);
  const currentItemsContainerStyle = StyleSheet.compose(styles.items, itemsContainerStyle);
  const currentItemContainerStyle = StyleSheet.compose(styles.item, itemContainerStyle);
  const currentItemIconStyle = StyleSheet.compose(styles.icon, itemIconStyle);
  const currentHiddenContainerStyle = StyleSheet.compose(styles.hidden, hiddenContainerStyle);
  const currentActionStyle = StyleSheet.compose(styles.action, actionStyle);
  const currentFirstActionStyle = StyleSheet.compose(styles.first, firstActionStyle);
  const currentSecondActionStyle = StyleSheet.compose(styles.second, secondActionStyle);
  const firstActionStyleCompose = StyleSheet.compose(currentActionStyle, currentFirstActionStyle);
  const secondActionStyleCompose = StyleSheet.compose(currentActionStyle, currentSecondActionStyle);
  const renderRightActions = () => {
    return /*#__PURE__*/React.createElement(View, {
      style: currentHiddenContainerStyle
    }, firstAction && /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: firstActionStyleCompose,
      onPress: onFirstAction
    }, /*#__PURE__*/React.createElement(EditActionIcon, null)), secondAction && /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: secondActionStyleCompose,
      onPress: onSecondAction
    }, isDelete ? /*#__PURE__*/React.createElement(ReturnActionIcon, null) : /*#__PURE__*/React.createElement(DeleteActionIcon, null)));
  };
  // eslint-disable-next-line react/no-unstable-nested-components
  const Item = () => {
    return /*#__PURE__*/React.createElement(View, {
      style: currentContainerStyle
    }, topItem && topItem, label && labelPosition === 'top' && /*#__PURE__*/React.createElement(Text, {
      style: currentLabelStyle
    }, label), title && /*#__PURE__*/React.createElement(Text, {
      style: currentTitleStyle
    }, title), /*#__PURE__*/React.createElement(View, {
      style: currentItemsContainerStyle
    }, items.map((i, index) => /*#__PURE__*/React.createElement(View, {
      key: index,
      style: currentItemContainerStyle
    }, (i === null || i === void 0 ? void 0 : i.icon) && /*#__PURE__*/React.createElement(View, {
      style: currentItemIconStyle
    }, i === null || i === void 0 ? void 0 : i.icon), /*#__PURE__*/React.createElement(Text, {
      style: currentItemTextStyle
    }, i === null || i === void 0 ? void 0 : i.text))), label && labelPosition === 'bottom' && /*#__PURE__*/React.createElement(Text, {
      style: currentLabelStyle
    }, label)));
  };
  const onSwipeableClose = () => {
    switch (actionName) {
      case 'first':
        if (firstAction) {
          return firstAction();
        }
        return () => null;
      case 'second':
        if (secondAction) {
          return secondAction();
        }
        return () => null;
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, canSwipe ? /*#__PURE__*/React.createElement(RNSwipeable, {
    ref: ref,
    renderRightActions: renderRightActions,
    friction: 1,
    overshootLeft: false,
    overshootRight: false,
    rightThreshold: 100,
    onSwipeableClose: onSwipeableClose
  }, /*#__PURE__*/React.createElement(Item, null)) : /*#__PURE__*/React.createElement(Item, null));
};
//# sourceMappingURL=Swipeable.js.map