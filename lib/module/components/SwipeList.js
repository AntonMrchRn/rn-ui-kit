import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useTheme } from '../theme/ThemeProvider';
import { EditActionIcon } from '../icons/EditActionIcon';
import { DeleteActionIcon } from '../icons/DeleteActionIcon';
import { ReturnActionIcon } from '../icons/ReturnActionIcon';
export const SwipeList = _ref => {
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
  const theme = useTheme();
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
  const styles = StyleSheet.create({
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
  const currentContainerStyle = StyleSheet.compose(styles.container, containerStyle);
  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentItemTextStyle = StyleSheet.compose(styles.text, itemTextStyle);
  const currentItemsContainerStyle = StyleSheet.compose(styles.items, itemsContainerStyle);
  const currentHiddenContainerStyle = StyleSheet.compose(styles.hidden, hiddenContainerStyle);
  const currentActionStyle = StyleSheet.compose(styles.action, actionStyle);
  const currentFirstActionStyle = StyleSheet.compose(styles.first, firstActionStyle);
  const currentSecondActionStyle = StyleSheet.compose(styles.second, secondActionStyle);
  const firstActionStyleCompose = StyleSheet.compose(currentActionStyle, currentFirstActionStyle);
  const secondActionStyleCompose = StyleSheet.compose(currentActionStyle, currentSecondActionStyle);
  const renderItem = _ref2 => {
    let {
      item
    } = _ref2;
    return /*#__PURE__*/React.createElement(View, {
      style: currentContainerStyle
    }, /*#__PURE__*/React.createElement(Text, {
      style: currentLabelStyle
    }, item.label), /*#__PURE__*/React.createElement(Text, {
      style: currentTitleStyle
    }, item.title), /*#__PURE__*/React.createElement(View, {
      style: currentItemsContainerStyle
    }, item.items.map(i => /*#__PURE__*/React.createElement(View, {
      key: i.id
    }, i === null || i === void 0 ? void 0 : i.icon, /*#__PURE__*/React.createElement(Text, {
      style: currentItemTextStyle
    }, i.text)))));
  };
  const renderHiddenItem = _ref3 => {
    let {
      item
    } = _ref3;
    return /*#__PURE__*/React.createElement(View, {
      style: currentHiddenContainerStyle
    }, /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: firstActionStyleCompose,
      onPress: () => fistAction(item)
    }, /*#__PURE__*/React.createElement(EditActionIcon, null)), /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: secondActionStyleCompose,
      onPress: () => secondAction(item)
    }, isDelete ? /*#__PURE__*/React.createElement(ReturnActionIcon, null) : /*#__PURE__*/React.createElement(DeleteActionIcon, null)));
  };
  return /*#__PURE__*/React.createElement(SwipeListView, {
    data: data,
    keyExtractor: item => item.id,
    renderItem: renderItem,
    renderHiddenItem: renderHiddenItem,
    rightOpenValue: -142
  });
};
//# sourceMappingURL=SwipeList.js.map