import React from 'react';
import { Text } from 'rn-ui-kit';
import { TextProps } from '../../../lib/typescript/components/Text';
import { useFonts } from 'expo-font';

export const MyText = (props: TextProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Text {...props}>{props.children}</Text>;
};
