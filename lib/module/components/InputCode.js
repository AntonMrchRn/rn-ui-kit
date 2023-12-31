function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CodeField, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { useTheme } from '../theme/ThemeProvider';
export const InputCode = _ref => {
  let {
    hint,
    hintStyle,
    cellCount = 6,
    value,
    onChangeText,
    ...props
  } = _ref;
  const theme = useTheme();
  const styles = StyleSheet.create({
    cell: {
      width: 40,
      height: 52,
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
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 32,
      lineHeight: 36,
      color: theme.text.basic
    },
    hint: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: hint ? theme.text.danger : theme.text.neutral,
      marginTop: 4
    }
  });
  const currentHintStyle = StyleSheet.compose(styles.hint, hintStyle);
  const setValue = onChangeText || (() => {});
  const ref = useBlurOnFulfill({
    value,
    cellCount
  });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CodeField, _extends({}, prop, props, {
    ref: ref,
    value: value,
    onChangeText: onChangeText,
    cellCount: cellCount,
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
  })), hint && /*#__PURE__*/React.createElement(Text, {
    style: currentHintStyle
  }, hint));
};
//# sourceMappingURL=InputCode.js.map