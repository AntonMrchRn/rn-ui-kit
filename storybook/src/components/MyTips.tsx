import React from 'react';
import { Tips } from 'rn-ui-kit';
import { TipsProps } from '../../../lib/typescript/components/Tips';
import { useFonts } from 'expo-font';

export const MyTips = (props: TipsProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Tips {...props} />;
};
