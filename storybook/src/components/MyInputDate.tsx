import React, { useState } from 'react';
import { InputDate } from 'rn-ui-kit';
import { useFonts } from 'expo-font';
import { InputDateProps } from '../../../lib/typescript/components/InputDate';

export const MyInputDate = (props: InputDateProps) => {
  const [state, setState] = useState('');
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <InputDate {...props} value={state} onChangeText={setState} />;
};
