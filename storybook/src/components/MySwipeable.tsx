import React from 'react';
import { Swipeable } from 'rn-ui-kit';
import { SwipeableProps } from '../../../lib/typescript/components/Swipeable';
import { useFonts } from 'expo-font';

export const MySwipeable = (props: SwipeableProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Swipeable {...props} />;
};
