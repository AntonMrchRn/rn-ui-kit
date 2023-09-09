import React from 'react';
import { Link } from 'rn-ui-kit';
import { LinkProps } from '../../../lib/typescript/components/Link';
import { useFonts } from 'expo-font';

export const MyLink = (props: LinkProps) => {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Link {...props} />;
};
