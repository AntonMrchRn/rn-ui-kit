import React from 'react';
import { InputTime } from 'rn-ui-kit';
import { useFonts } from 'expo-font';
import { InputTimeProps } from '../../../lib/typescript/components/InputTime';

export const MyInputTime = (props: InputTimeProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <InputTime {...props} />;
};
