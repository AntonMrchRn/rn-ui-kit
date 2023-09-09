import React from 'react';
import { InputPhone } from 'rn-ui-kit';
import { useFonts } from 'expo-font';
import { InputPhoneProps } from '../../../lib/typescript/components/InputPhone';

export const MyInputPhone = (props: InputPhoneProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <InputPhone {...props} />;
};
