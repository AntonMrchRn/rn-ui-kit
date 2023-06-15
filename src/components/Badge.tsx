import React, { FC, ReactElement } from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewProps,
  Text,
  View,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { useTheme } from '../theme/ThemeProvider';
import { BadgeIcon } from '../icons/BadgeIcon';

export type Variant =
  | 'accent'
  | 'danger'
  | 'secondary'
  | 'warning'
  | 'success'
  | 'basic'
  | 'special';

export type BadgeProps = ViewProps & {
  /**
   * Иконка компонента. Может быть стандартной, кастомной или не быть
   */
  icon?: ReactElement | boolean;
  /**
   * Если true, то тип сменится на второстепенный
   */
  secondary?: boolean;
  /**
   * Ключевой параметр, который определяет тип
   * По умолчанию - 'accent'
   */
  variant?: Variant;
  /**
   * Лейбл компонента
   */
  label?: string;
  /**
   * Стиль лейбла компонента
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Стиль контейнера иконки компонента
   */
  iconStyle?: StyleProp<ViewStyle>;
};

export const Badge: FC<BadgeProps> = ({
  icon,
  variant = 'accent',
  labelStyle,
  label = '',
  secondary,
  style,
  iconStyle,
  ...props
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    label: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
    },
    badge: {
      height: 28,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
    },
    accent: {
      backgroundColor: theme.background.accent,
    },
    accentSecondary: {
      backgroundColor: theme.background.fieldMain,
    },
    danger: {
      backgroundColor: theme.background.danger,
    },
    dangerSecondary: {
      backgroundColor: theme.background.fieldDanger,
    },
    secondary: {
      backgroundColor: theme.background.secondary,
    },
    secondarySecondary: {
      backgroundColor: theme.background.secondaryBadge,
    },
    warning: {
      backgroundColor: theme.icons.warning,
    },
    warningSecondary: {
      backgroundColor: theme.background.fieldWarning,
    },
    success: {
      backgroundColor: theme.background.success,
    },
    successSecondary: {
      backgroundColor: theme.background.fieldSuccess,
    },
    basic: {
      backgroundColor: theme.icons.basic,
    },
    basicSecondary: {
      backgroundColor: theme.background.neutralDisableSecond,
    },
    special: {
      backgroundColor: theme.background.special,
    },
    specialSecondary: {
      backgroundColor: theme.background.specialLight,
    },
  });

  const color = secondary
    ? styles[variant].backgroundColor
    : theme.text.contrast;

  const getIcon = () => {
    if (icon) {
      if (typeof icon === 'boolean') {
        return <BadgeIcon color={color} />;
      }
      return icon;
    }
    return null;
  };

  const currentBadgeStyle = StyleSheet.compose(styles.badge, [
    secondary ? styles[`${variant}Secondary`] : styles[variant],
    style,
  ]);
  const currentLabelStyle = StyleSheet.compose(styles.label, [
    {
      color: color,
    },
    labelStyle,
  ]);

  return (
    <View style={currentBadgeStyle} {...props}>
      <View style={iconStyle}>{getIcon()}</View>
      <Text style={currentLabelStyle}>{label}</Text>
    </View>
  );
};
