import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, useToast } from 'rn-ui-kit';
import { ToastOptions } from '../../../lib/typescript/components/Toast/Toast';
import { useFonts } from 'expo-font';

export const MyToast = (props: ToastOptions) => {
  const toast = useToast();
  const onPress = () => {
    toast.show(props);
  };
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Text variant={'title1'}>show toast</Text>
      </TouchableOpacity>
    </>
  );
};
