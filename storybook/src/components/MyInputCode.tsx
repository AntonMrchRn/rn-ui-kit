import React, { useState } from 'react';
import { InputCode } from 'rn-ui-kit';
import { useFonts } from 'expo-font';
import { InputCodeProps } from '../../../lib/typescript/components/InputCode';

export const MyInputCode = (props: InputCodeProps) => {
  const [state, setState] = useState('');
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <InputCode {...props} value={state} onChangeText={setState} />;
};
