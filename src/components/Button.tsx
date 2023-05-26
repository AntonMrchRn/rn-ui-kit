import React, { FC, ReactElement } from 'react';
import {
  StyleSheet,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacityProps,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { useTheme } from '../theme/ThemeProvider';
import { PlusIcon } from '../icons/PlusIcon';

export type ButtonProps = TouchableOpacityProps & {
  icon?: ReactElement | boolean;
  size?: 'M' | 'S';
  isPending?: boolean;
  variant?:
    | 'accent'
    | 'danger'
    | 'outlineAccent'
    | 'outlineDanger'
    | 'ghost'
    | 'dangerGhost';
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
};

export const Button: FC<ButtonProps> = ({
  icon,
  variant = 'accent',
  labelStyle,
  label = '',
  size = 'M',
  isPending,
  ...props
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    label: {
      color: theme.background.main,
      marginLeft: icon || isPending ? 10 : 0,
      fontFamily: 'Nunito Sans Bold',
    },
    button: {
      height: 40,
      width: '100%',
      borderRadius: 8,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
    },
    smallButton: {
      height: 40,
      borderRadius: 8,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
    },
    accent: {
      backgroundColor: theme.background.accent,
    },
    danger: {
      backgroundColor: theme.background.danger,
    },
    ghost: {
      borderWidth: 0,
      backgroundColor: 'transparency',
    },
    dangerGhost: {
      borderWidth: 0,
      backgroundColor: 'transparency',
    },
    outlineAccent: {
      backgroundColor: 'transparency',
      borderWidth: 2,
      borderColor: theme.background.accent,
    },
    outlineDanger: {
      backgroundColor: 'transparency',
      borderWidth: 2,
      borderColor: theme.background.danger,
    },
    accentDisabled: {
      backgroundColor: theme.background.accentDisable,
      borderWidth: 0,
    },
    dangerDisabled: {
      backgroundColor: theme.background.dangerDisable,
      borderWidth: 0,
    },
    outlineAccentDisabled: {
      backgroundColor: 'transparency',
      borderColor: theme.background.neutralDisable,
    },
    outlineDangerDisabled: {
      backgroundColor: 'transparency',
      borderColor: theme.background.dangerDisable,
    },
    ghostDisabled: {
      backgroundColor: 'transparency',
    },
    dangerGhostDisabled: {
      backgroundColor: 'transparency',
    },
  });

  const stylesLabel = StyleSheet.create({
    accent: {
      color: theme.background.main,
    },
    danger: {
      color: theme.background.main,
    },
    ghost: {
      color: theme.icons.basic,
    },
    dangerGhost: {
      color: theme.background.danger,
    },
    ghostDisabled: {
      color: theme.background.neutralDisable,
    },
    dangerGhostDisabled: {
      color: theme.background.dangerDisable,
    },
    outlineAccent: {
      color: theme.background.accent,
    },
    outlineDanger: {
      color: theme.background.danger,
    },
    accentDisabled: {
      color: theme.background.main,
    },
    dangerDisabled: {
      color: theme.background.main,
    },
    outlineAccentDisabled: {
      color: theme.background.neutralDisable,
    },
    outlineDangerDisabled: {
      color: theme.background.dangerDisable,
    },
  });

  const getIcon = () => {
    if (isPending) {
      return (
        <ActivityIndicator
          color={
            props.disabled
              ? stylesLabel[`${variant}Disabled`].color
              : stylesLabel[variant].color
          }
        />
      );
    }
    if (icon) {
      if (typeof icon === 'boolean') {
        return (
          <PlusIcon
            color={
              props.disabled
                ? stylesLabel[`${variant}Disabled`].color
                : stylesLabel[variant].color
            }
          />
        );
      }
      return icon;
    }

    return null;
  };

  const currentButtonStyle = StyleSheet.compose(
    size === 'S' ? styles.smallButton : styles.button,
    [styles[variant], props.disabled && styles[`${variant}Disabled`]]
  );

  const currentLabelStyle = StyleSheet.compose(styles.label, [
    stylesLabel[variant],
    props.disabled && stylesLabel[`${variant}Disabled`],
    labelStyle,
  ]);

  return (
    <TouchableOpacity style={currentButtonStyle} {...props} activeOpacity={0.5}>
      {getIcon()}
      {label && <Text style={currentLabelStyle}>{label}</Text>}
    </TouchableOpacity>
  );
};
