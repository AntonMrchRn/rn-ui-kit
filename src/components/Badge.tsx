import React, { FC, ReactElement } from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  ViewProps,
  Text,
  View,
  TextStyle,
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
};

export const Badge: FC<BadgeProps> = ({
  icon,
  variant = 'accent',
  labelStyle,
  label = '',
  ...props
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    label: {
      color: '#fff',
      marginLeft: 5,
      fontFamily: 'Nunito Sans Regular',
    },
    badge: {
      height: 28,
      borderRadius: 8,
      paddingHorizontal: 15,
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
    secondary: {
      backgroundColor: theme.background.secondary,
    },
    warning: {
      backgroundColor: theme.icons.warning,
    },
    success: {
      backgroundColor: theme.background.success,
    },
    basic: {
      backgroundColor: theme.icons.basic,
    },
    special: {
      backgroundColor: theme.background.special,
    },
  });

  const getIcon = () => {
    if (icon) {
      if (typeof icon === 'boolean') {
        return <BadgeIcon />;
      }
      return icon;
    }
    return null;
  };

  const currentBadgeStyle = StyleSheet.compose(styles.badge, [
    styles[variant],
    props.style as StyleProp<ViewStyle>,
  ]);

  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);

  return (
    <View style={currentBadgeStyle} {...props}>
      {getIcon()}
      <Text style={currentLabelStyle}>{label}</Text>
    </View>
  );
};
