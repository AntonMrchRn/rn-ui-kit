import React, { FC, ReactElement } from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { CheckBoxIcon } from '../icons/CheckBoxIcon';

export type CheckboxProps = TouchableOpacityProps & {
  /**
   * Показывает активен ли данный компонент
   */
  checked: boolean;
  /**
   * Иконка компонента в активном состоянии
   */
  icon?: ReactElement;
};

export const CheckBox: FC<CheckboxProps> = ({
  icon,
  style,
  activeOpacity = 0.7,
  ...props
}) => {
  const theme = useTheme();

  const stylesCheckBox = StyleSheet.create({
    initial: {
      height: 20,
      width: 20,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'tranpsarent',
    },
    uncheckedUndisabled: {
      borderWidth: 1.5,
      borderColor: theme.background.accent,
      backgroundColor: 'transparent',
    },
    checkedUndisabled: {
      borderWidth: 0,
      backgroundColor: theme.background.accent,
    },
    uncheckedDisabled: {
      borderWidth: 1.5,
      borderColor: theme.background.neutralDisable,
      backgroundColor: 'transparent',
    },
    checkedDisabled: {
      borderWidth: 0,
      borderColor: theme.background.neutralDisable,
      backgroundColor: theme.background.neutralDisable,
    },
  });

  const getStyle = () => {
    if (!props.checked && !props.disabled) {
      return stylesCheckBox.uncheckedUndisabled;
    }
    if (props.checked && !props.disabled) {
      return stylesCheckBox.checkedUndisabled;
    }
    if (!props.checked && props.disabled) {
      return stylesCheckBox.uncheckedDisabled;
    }
    if (props.checked && props.disabled) {
      return stylesCheckBox.checkedDisabled;
    }
    return;
  };

  const currentStyle = StyleSheet.compose(stylesCheckBox.initial, [
    getStyle(),
    style,
  ]);

  return (
    <TouchableOpacity
      style={currentStyle}
      activeOpacity={activeOpacity}
      {...props}
    >
      {props.checked && (icon || <CheckBoxIcon />)}
    </TouchableOpacity>
  );
};
