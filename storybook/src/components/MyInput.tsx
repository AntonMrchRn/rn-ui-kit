import React from 'react';
import { InputProps } from '../../../lib/typescript/components/Input/index';
import { Input } from 'rn-ui-kit';
import { useFonts } from 'expo-font';

export const MyInput = (props: InputProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Input {...props} />;
};
