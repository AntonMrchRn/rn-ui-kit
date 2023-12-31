import React, { FC, ReactElement } from 'react';
import { StyleSheet, ViewProps, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export type CardProps = ViewProps & {
  /**
   * Элемент или массив элементов, отображаемые в компоненте
   */
  children?: ReactElement | ReactElement[];
  /**
   * Отображение тени карточки
   */
  isShadow?: boolean;
};
export const Card: FC<CardProps> = ({
  isShadow,
  children,
  style,
  ...props
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.background.main,
      alignSelf: 'flex-start',
      paddingVertical: 14,
      width: '100%',
    },
    shadow: {
      shadowColor: '#000000',
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
    style,
  ]);

  return (
    <View style={currentCardStyle} {...props}>
      {children}
    </View>
  );
};
