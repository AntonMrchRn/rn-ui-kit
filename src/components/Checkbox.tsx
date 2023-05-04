import React, { FC } from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  Pressable,
  PressableProps,
} from 'react-native';

export type CheckboxProps = PressableProps & { checked: boolean };

export const CheckBox: FC<CheckboxProps> = (props) => {
  const currentStyle = () => {
    if (props.checked && props.disabled) {
      return stylesCheckBox.diabled;
    }
    if (!props.checked && props.disabled) {
      return stylesCheckBox.checked;
    }
  };

  const style = StyleSheet.compose(stylesCheckBox.initial, [
    props.style as StyleProp<ViewStyle>,
    currentStyle(),
  ]);

  return (
    <Pressable style={style} {...props}>
      {props.children}
    </Pressable>
  );
};

const stylesCheckBox = StyleSheet.create({
  initial: {
    height: 40,
    width: 40,
    borderBotom: 'green',
  },
  diabled: {
    backgroundColor: 'red',
  },
  checked: {
    backgroundColor: 'green',
  },
});
