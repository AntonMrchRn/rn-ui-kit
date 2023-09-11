import React, { useState } from 'react';
import { InputPhone } from 'rn-ui-kit';
import { useFonts } from 'expo-font';
import { InputPhoneProps } from '../../../lib/typescript/components/InputPhone';

export const MyInputPhone = (props: InputPhoneProps) => {
  const [state, setState] = useState('');
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });
  const onClear = () => {
    setState('');
  };
  if (!fontsLoaded) {
    return null;
  }
  return (
    <InputPhone
      {...props}
      value={state}
      onChangeText={setState}
      onClear={onClear}
    />
  );
};
