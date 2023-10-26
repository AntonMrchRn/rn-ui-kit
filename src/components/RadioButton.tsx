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
  /**
   * Показывает ошибку данного компонента
   */
  isError?: boolean;
};

export const RadioButton: FC<RadioButtonProps> = ({
  style,
  isError,
  activeOpacity = 0.7,
  ...props
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    initial: {
      height: 20,
      width: 20,
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
      height: 10,
      width: 10,
      backgroundColor:
        isError && props.checked && !props.disabled
          ? theme.background.danger
          : theme.background.accent,
      borderRadius: 50,
    },
    radioDisabled: {
      backgroundColor: theme.background.neutralDisable,
    },
    uncheckedUndisabledError: {
      borderColor: theme.background.danger,
      backgroundColor: theme.background.fieldDanger,
    },
    checkedUndisabledError: {
      borderColor: theme.background.danger,
      backgroundColor: 'transparent',
    },
  });

  const getStyle = () => {
    if (!props.checked && !props.disabled && !isError) {
      return styles.uncheckedUndisabled;
    }
    if (props.checked && !props.disabled && !isError) {
      return styles.checkedUndisabled;
    }
    if (!props.checked && props.disabled) {
      return styles.uncheckedDisabled;
    }
    if (props.checked && props.disabled) {
      return styles.checkedDisabled;
    }
    if (isError && !props.checked && !props.disabled) {
      return styles.uncheckedUndisabledError;
    }
    if (isError && props.checked && !props.disabled) {
      return styles.checkedUndisabledError;
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
