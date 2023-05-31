import React, { FC, ReactElement } from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
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

export const CheckBox: FC<CheckboxProps> = ({ icon, ...props }) => {
  const theme = useTheme();

  const stylesCheckBox = StyleSheet.create({
    initial: {
      height: 32,
      width: 32,
      borderWidth: 1.5,
      borderColor: theme.background.accent,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    uncheckedUndisabled: {
      borderColor: theme.background.accent,
      backgroundColor: 'transparent',
    },
    checkedUndisabled: {
      borderColor: theme.background.accent,
      backgroundColor: theme.background.accent,
    },
    uncheckedDisabled: {
      borderColor: theme.background.neutralDisable,
      backgroundColor: 'transparent',
    },
    checkedDisabled: {
      borderColor: theme.background.neutralDisable,
      backgroundColor: theme.background.neutralDisable,
    },
  });

  const currentStyle = () => {
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

  const style = StyleSheet.compose(stylesCheckBox.initial, [
    props.style as StyleProp<ViewStyle>,
    currentStyle(),
  ]);

  return (
    <TouchableOpacity style={style} {...props} activeOpacity={0.7}>
      {props.checked && (icon || <CheckBoxIcon />)}
    </TouchableOpacity>
  );
};
