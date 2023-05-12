import React, { Children, FC } from 'react';
import { StyleSheet, View } from 'react-native';

export type SpaceSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export type SpacerProps = {
  size: SpaceSize;
  horizontal?: boolean;
  children?: JSX.Element | JSX.Element[];
};

export const Spacer: FC<SpacerProps> = ({ size, children, horizontal }) => {
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
  });

  return (
    <View style={horizontal && styles.horizontal}>
      {children ? (
        Children.map(children, (item, index) => {
          return (
            <View key={index} style={horizontal && styles.horizontal}>
              {index !== 0 && <View style={styles[size]} />}
              <>{item}</>
            </View>
          );
        })
      ) : (
        <View style={[styles[size], horizontal && styles.horizontal]} />
      )}
    </View>
  );
};
