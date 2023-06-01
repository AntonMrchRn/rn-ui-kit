function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
export const typography = StyleSheet.create({
  title1: {
    fontFamily: 'Open Sans Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 36
  },
  title2: {
    fontFamily: 'Open Sans Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28
  },
  title3: {
    fontFamily: 'Open Sans Semibold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24
  },
  bodyMRegular: {
    fontFamily: 'Nunito Sans Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 24
  },
  bodyMBold: {
    fontFamily: 'Nunito Sans Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 24
  },
  bodySRegular: {
    fontFamily: 'Nunito Sans Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20
  },
  bodySBold: {
    fontFamily: 'Nunito Sans Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20
  },
  captionRegular: {
    fontFamily: 'Nunito Sans Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16
  },
  captionBold: {
    fontFamily: 'Nunito Sans Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 16
  },
  tabBarLabel: {
    fontFamily: 'Nunito Sans Semibold',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12
  }
});
export const Text = _ref => {
  let {
    style,
    ...props
  } = _ref;
  const variant = typography[props.variant];
  const currentStyle = StyleSheet.compose(variant, style);
  return /*#__PURE__*/React.createElement(RNText, _extends({
    style: currentStyle
  }, props), props.children);
};
//# sourceMappingURL=Text.js.map