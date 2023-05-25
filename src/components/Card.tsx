import React, { FC, ReactElement } from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  ViewProps,
  View,
  TextStyle,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export type CardProps = ViewProps & {
  labelStyle?: StyleProp<TextStyle>;
  children: ReactElement | ReactElement[];
  isShadow?: boolean;
};

export const Card: FC<CardProps> = ({
  isShadow = false,
  children,
  ...props
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.background.main,
      alignSelf: 'flex-start',
      paddingVertical: 14,
      paddingHorizontal: 20,
      width: '100%',
    },
    shadow: {
      shadowColor: '#0f0f0',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
  });

  const currentCardStyle = StyleSheet.compose(styles.card, [
    isShadow && styles.shadow,
    props.style as StyleProp<ViewStyle>,
  ]);

  return (
    <View style={currentCardStyle} {...props}>
      {children}
    </View>
  );
};