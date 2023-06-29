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

export type Sizes = 'M' | 'S';
export type Variant =
  | 'accent'
  | 'danger'
  | 'outlineAccent'
  | 'outlineDanger'
  | 'ghost'
  | 'dangerGhost';
export type ButtonProps = TouchableOpacityProps & {
  /**
   * Тип иконки компонента.
   * Может быть стандартной, кастомной или не быть совсем
   */
  icon?: ReactElement | boolean;
  /**
   * Размер компонента.
   * По умолчанию 'M'
   */
  size?: Sizes;
  /**
   * Показывает ActivityIndicator вместо иконки
   */
  isPending?: boolean;
  /**
   * Тип компонента.
   * По умолчанию 'accent'
   */
  variant?: Variant;
  /**
   *Лейбл компонента
   */
  label?: string;
  /**
   * Стиль лейбла компонента
   */
  labelStyle?: StyleProp<TextStyle>;
};

export const Button: FC<ButtonProps> = ({
  icon,
  variant = 'accent',
  labelStyle,
  label = '',
  size = 'M',
  isPending,
  style,
  activeOpacity,
  ...props
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    label: {
      color: theme.background.main,
      marginLeft: icon || isPending ? 10 : 0,
      fontFamily: 'Nunito Sans',
      fontSize: size === 'S' ? 15 : 17,
      fontWeight: '700',
      lineHeight: size === 'S' ? 20 : 24,
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      width: '100%',
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
    },
    smallButton: {
      paddingVertical: 12,
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
      backgroundColor: 'transparent',
    },
    dangerGhost: {
      borderWidth: 0,
      backgroundColor: 'transparent',
    },
    outlineAccent: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderColor: theme.background.accent,
    },
    outlineDanger: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      paddingVertical: 10,
      paddingHorizontal: 14,
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
      backgroundColor: 'transparent',
      borderColor: theme.background.neutralDisable,
    },
    outlineDangerDisabled: {
      backgroundColor: 'transparent',
      borderColor: theme.background.dangerDisable,
    },
    ghostDisabled: {
      backgroundColor: 'transparent',
    },
    dangerGhostDisabled: {
      backgroundColor: 'transparent',
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
            size={size === 'S' ? 15 : 18}
          />
        );
      }
      return icon;
    }

    return null;
  };

  const currentButtonStyle = StyleSheet.compose(
    size === 'S' ? styles.smallButton : styles.button,
    [styles[variant], props.disabled && styles[`${variant}Disabled`], style]
  );

  const currentLabelStyle = StyleSheet.compose(styles.label, [
    stylesLabel[variant],
    props.disabled && stylesLabel[`${variant}Disabled`],
    labelStyle,
  ]);

  return (
    <TouchableOpacity
      style={currentButtonStyle}
      {...props}
      activeOpacity={activeOpacity || 0.5}
    >
      {getIcon()}
      {label && !isPending && <Text style={currentLabelStyle}>{label}</Text>}
    </TouchableOpacity>
  );
};
