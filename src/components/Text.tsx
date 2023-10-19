import React, { FC } from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';

export const typography = StyleSheet.create({
  title1: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 36,
  },
  title2: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28,
  },
  title3: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
  },
  bodyMRegular: {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 24,
  },
  bodyMBold: {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 24,
  },
  bodySRegular: {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
  },
  bodySBold: {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
  },
  captionRegular: {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
  },
  captionBold: {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 16,
  },
  tabBarLabel: {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
  },
});

export type Variant = keyof typeof typography;
export type TextProps = RNTextProps & {
  /**
   * Должен быть указан один из дефолтных типов, описанных в компоненте. Стили можно перебить через проп style
   */
  variant: Variant;
  /**
   * Цвет текста. По умолчанию черный. Можно перебить через проп style
   */
  color?: string;
};

export const Text: FC<TextProps> = ({ style, color = 'black', ...props }) => {
  const variant = typography[props.variant];
  const currentStyle = StyleSheet.compose(variant, [{ color }, style]);
  return (
    <RNText style={currentStyle} {...props}>
      {props.children}
    </RNText>
  );
};
