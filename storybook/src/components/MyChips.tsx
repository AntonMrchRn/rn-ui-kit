import React from 'react';
import { Chips } from 'rn-ui-kit';
import { ChipsProps } from '../../../lib/typescript/components/Chips';
import { useFonts } from 'expo-font';

export const MyChips = (props: ChipsProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Chips {...props} />;
};
