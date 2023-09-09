import React from 'react';

import { Badge } from 'rn-ui-kit';
import { BadgeProps } from '../../../lib/typescript/components/Badge';
import { useFonts } from 'expo-font';

export const MyBadge = (props: BadgeProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Badge {...props} />;
};
