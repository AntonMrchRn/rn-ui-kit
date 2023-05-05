import React, { FC } from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { View } from 'react-native';

export type RadioButtonProps = TouchableOpacityProps & {
  checked: boolean;
};

export const RadioButton: FC<RadioButtonProps> = (props) => {
  const theme = useTheme();

  const stylesRadioButton = StyleSheet.create({
    initial: {
      height: 32,
      width: 32,
      borderWidth: 1.5,
      borderColor: theme.background.accent,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    uncheckedUndisabled: {
      borderColor: theme.background.accent,
      backgroundColor: 'transparent',
    },
    checkedUndisabled: {
      borderColor: theme.background.accent,
      backgroundColor: '#fff',
    },
    uncheckedDisabled: {
      borderColor: theme.background.neutralDisable,
      backgroundColor: 'transparent',
    },
    checkedDisabled: {
      borderColor: theme.background.neutralDisable,
      backgroundColor: 'transparent',
    },
    radioActive: {
      height: 16,
      width: 16,
      backgroundColor: theme.background.accent,
      borderRadius: 50,
    },
    radioDisabled: {
      backgroundColor: theme.background.neutralDisable,
    },
  });

  const currentStyle = () => {
    if (!props.checked && !props.disabled) {
      return stylesRadioButton.uncheckedUndisabled;
    }
    if (props.checked && !props.disabled) {
      return stylesRadioButton.checkedUndisabled;
    }
    if (!props.checked && props.disabled) {
      return stylesRadioButton.uncheckedDisabled;
    }
    if (props.checked && props.disabled) {
      return stylesRadioButton.checkedDisabled;
    }
    return;
  };

  const style = StyleSheet.compose(stylesRadioButton.initial, [
    props.style as StyleProp<ViewStyle>,
    currentStyle(),
  ]);

  return (
    <TouchableOpacity style={style} {...props} activeOpacity={0.7}>
      {props.checked && (
        <View
          style={[
            stylesRadioButton.radioActive,
            props.disabled && stylesRadioButton.radioDisabled,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};
