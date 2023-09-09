import React from 'react';
import { Banner } from 'rn-ui-kit';
import { BannerProps } from '../../../lib/typescript/components/Banner';
import { useFonts } from 'expo-font';

export const MyBanner = (props: BannerProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Banner {...props} />;
};
