import React, { useState } from 'react';
import { Text, Tooltip } from 'rn-ui-kit';
import { TooltipProps } from '../../../lib/typescript/components/Tooltip';
import { useFonts } from 'expo-font';

export const MyTooltip = (props: TooltipProps) => {
  const [state, setState] = useState(false);
  const onState = () => setState(!state);
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Tooltip onClose={onState} isVisible={state} {...props}>
      <Text variant="title1" onPress={onState}>
        show tooltip
      </Text>
    </Tooltip>
  );
};
