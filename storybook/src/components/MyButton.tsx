import React from 'react';
import { Button } from 'rn-ui-kit';
import { ButtonProps } from '../../../lib/typescript/components/Button';
import { useFonts } from 'expo-font';

export const MyButton = (props: ButtonProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Button {...props} />;
};
