import React, { FC } from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { View } from 'react-native';

export type RadioButtonProps = TouchableOpacityProps & {
  /**
   * Показывает активен ли данный компонент
   */
  checked: boolean;
};

export const RadioButton: FC<RadioButtonProps> = ({
  style,
  activeOpacity = 0.7,
  ...props
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    initial: {
      height: 26,
      width: 26,
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
      height: 13,
      width: 13,
      backgroundColor: theme.background.accent,
      borderRadius: 50,
    },
    radioDisabled: {
      backgroundColor: theme.background.neutralDisable,
    },
  });

  const getStyle = () => {
    if (!props.checked && !props.disabled) {
      return styles.uncheckedUndisabled;
    }
    if (props.checked && !props.disabled) {
      return styles.checkedUndisabled;
    }
    if (!props.checked && props.disabled) {
      return styles.uncheckedDisabled;
    }
    if (props.checked && props.disabled) {
      return styles.checkedDisabled;
    }
    return;
  };

  const currentStyle = StyleSheet.compose(styles.initial, [getStyle(), style]);

  return (
    <TouchableOpacity
      style={currentStyle}
      activeOpacity={activeOpacity}
      {...props}
    >
      {props.checked && (
        <View
          style={[styles.radioActive, props.disabled && styles.radioDisabled]}
        />
      )}
    </TouchableOpacity>
  );
};
