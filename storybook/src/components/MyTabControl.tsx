import React from 'react';
import { TabControl } from 'rn-ui-kit';

import { TabControlProps } from '../../../lib/typescript/components/TabControl';
import { useFonts } from 'expo-font';

export const MyTabControl = (props: TabControlProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <TabControl {...props} />;
};
