import React, { Children, FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export type SpaceSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
type Separator = 'top' | 'bottom';
export type SpacerProps = {
  /**
   * Размер компонента. По умолчанию 'm'
   * @default 'm'
   */
  size?: SpaceSize | number;
  /**
   * Показывать компонент в горизонтальном виде
   */
  horizontal?: boolean;
  /**
   * Разделитель между дочерними элементами
   */
  separator?: Separator;
  /**
   * Цвет разделителя между дочерними элементами
   */
  separatorColor?: string;
  /**
   * Элемент или массив элементов, отображаемые в компоненте
   */
  children?: JSX.Element | JSX.Element[];
};

export const Spacer: FC<SpacerProps> = ({
  size = 'm',
  children,
  horizontal,
  separator,
  separatorColor,
}) => {
  const theme = useTheme();

  const getSeparator = () => {
    const borderColor = separatorColor || theme.stroke.disableDivider;
    if (separator === 'top') {
      return { borderTopWidth: 1, borderColor };
    }
    if (separator === 'bottom') {
      return { borderBottomWidth: 1, borderColor };
    }
    return {};
  };

  const getSize = () => {
    if (typeof size === 'number') {
      return size;
    }
    switch (size) {
      case 'xs':
        return 4;
      case 's':
        return 8;
      case 'm':
        return 12;
      case 'l':
        return 16;
      case 'xl':
        return 24;
      case 'xxl':
        return 32;
      case 'xxxl':
        return 36;
      default:
        return 0;
    }
  };

  const styles = StyleSheet.create({
    spacer: {
      height: horizontal ? '100%' : getSize(),
      width: horizontal ? getSize() : '100%',
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
              {index !== 0 && (
                <View style={[styles.spacer, styles.separator]} />
              )}
              <>{item}</>
            </View>
          );
        })
      ) : (
        <View
          style={[
            styles.spacer,
            styles.separator,
            horizontal && styles.horizontal,
          ]}
        />
      )}
    </View>
  );
};
