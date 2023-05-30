import React, { Children, FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export type SpaceSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
type Separator = 'top' | 'bottom';
export type SpacerProps = {
  /**
   * Размер компонента
   */
  size: SpaceSize;
  /**
   * Показывать компонент в горизонтальном виде
   */
  horizontal?: boolean;
  /**
   * Разделитель между дочерними элементами
   */
  separator?: Separator;
  /**
   * Элемент или массив элементов, отображаемые в компоненте
   */
  children?: JSX.Element | JSX.Element[];
};

export const Spacer: FC<SpacerProps> = ({
  size,
  children,
  horizontal,
  separator,
}) => {
  const theme = useTheme();

  const getSeparator = () => {
    const borderColor = theme.stroke.disableDivider;
    if (separator === 'top') {
      return { borderTopWidth: 1, borderColor };
    }
    if (separator === 'bottom') {
      return { borderBottomWidth: 1, borderColor };
    }
    return {};
  };

  const styles = StyleSheet.create({
    xs: {
      marginVertical: horizontal ? 0 : 2,
      marginHorizontal: horizontal ? 2 : 0,
    },
    s: {
      marginVertical: horizontal ? 0 : 4,
      marginHorizontal: horizontal ? 4 : 0,
    },
    m: {
      marginVertical: horizontal ? 0 : 6,
      marginHorizontal: horizontal ? 6 : 0,
    },
    l: {
      marginVertical: horizontal ? 0 : 8,
      marginHorizontal: horizontal ? 8 : 0,
    },
    xl: {
      marginVertical: horizontal ? 0 : 12,
      marginHorizontal: horizontal ? 12 : 0,
    },
    xxl: {
      marginVertical: horizontal ? 0 : 18,
      marginHorizontal: horizontal ? 18 : 0,
    },
    horizontal: {
      flexDirection: 'row',
    },
    separator: getSeparator(),
  });

  return (
    <View style={horizontal && styles.horizontal}>
      {children ? (
        Children.map(children, (item, index) => {
          return (
            <View key={index} style={horizontal && styles.horizontal}>
              {index !== 0 && <View style={[styles[size], styles.separator]} />}
              <>{item}</>
            </View>
          );
        })
      ) : (
        <View
          style={[
            styles[size],
            styles.separator,
            horizontal && styles.horizontal,
          ]}
        />
      )}
    </View>
  );
};
