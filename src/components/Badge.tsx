import React, { FC, ReactElement } from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  ViewProps,
  Text,
  View,
} from 'react-native';

import { useTheme } from '../theme/ThemeProvider';
import { BadgeIcon } from '../icons/BadgeIcom';

export type BadgeProps = ViewProps & {
  customIcon?: ReactElement;
  variantColor?: number;
  icon?: boolean;
};

export const Badge: FC<BadgeProps> = ({
  customIcon,
  icon,
  variantColor = 1,
  ...props
}) => {
  const theme = useTheme();

  const stylesBadge = StyleSheet.create({
    label: {
      color: '#fff',
      marginLeft: 5,
      fontFamily: 'Nunito Sans Regular',
    },
    initial: {
      height: 28,
      borderRadius: 8,
      paddingHorizontal: 15,
      flexDirection: 'row',
      backgroundColor: theme.background.accent,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
    },
    red: {
      backgroundColor: theme.background.danger,
    },
    secondaryRed: {
      backgroundColor: theme.background.fieldDanger,
    },
    pink: {
      backgroundColor: theme.background.secondary,
    },
    orange: {
      backgroundColor: theme.icons.warning,
    },
    green: {
      backgroundColor: theme.background.success,
    },
    black: {
      backgroundColor: theme.icons.basic,
    },
    berserk: {
      backgroundColor: theme.background.special,
    },
  });

  const currentStyle = () => {
    if (variantColor === 1) {
      return stylesBadge.initial;
    }
    if (variantColor === 2) {
      return stylesBadge.pink;
    }
    if (variantColor === 3) {
      return stylesBadge.red;
    }
    if (variantColor === 4) {
      return stylesBadge.orange;
    }
    if (variantColor === 5) {
      return stylesBadge.green;
    }
    if (variantColor === 6) {
      return stylesBadge.black;
    }
    if (variantColor === 7) {
      return stylesBadge.berserk;
    }
    return;
  };

  const style = StyleSheet.compose(stylesBadge.initial, [
    props.style as StyleProp<ViewStyle>,
    currentStyle(),
  ]);

  return (
    <View style={style} {...props}>
      {customIcon ? customIcon : icon && <BadgeIcon />}
      <Text style={stylesBadge.label}>Badge</Text>
    </View>
  );
};
