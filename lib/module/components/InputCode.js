function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CodeField, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { useTheme } from '../theme/ThemeProvider';
export const InputCode = _ref => {
  let {
    cellCount,
    value,
    onChangeText,
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = StyleSheet.create({
    cell: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 10,
      backgroundColor: theme.background.neutralDisable
    },
    text: {
      fontFamily: 'Open Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 32,
      lineHeight: 36,
      color: theme.text.basic
    }
  });
  const setValue = onChangeText || (() => {});
  const currentCellCount = cellCount || 6;
  const ref = useBlurOnFulfill({
    value,
    cellCount: currentCellCount
  });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  });
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(CodeField, _extends({}, prop, props, {
    ref: ref,
    value: value,
    onChangeText: onChangeText,
    cellCount: currentCellCount,
    keyboardType: "number-pad",
    textContentType: "oneTimeCode",
    renderCell: _ref2 => {
      let {
        index,
        symbol
      } = _ref2;
      return /*#__PURE__*/React.createElement(View, {
        style: styles.cell,
        key: index
      }, symbol ? /*#__PURE__*/React.createElement(Text, {
        key: index,
        style: styles.text,
        onLayout: getCellOnLayoutHandler(index)
      }, symbol) : /*#__PURE__*/React.createElement(View, {
        style: styles.dot
      }));
    }
  })));
};
//# sourceMappingURL=InputCode.js.map