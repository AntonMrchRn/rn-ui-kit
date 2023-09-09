import React, { useState } from 'react';
import { BottomSheet, Text } from 'rn-ui-kit';
import { BottomSheetProps } from '../../../lib/typescript/components/BottomSheet';
import { useFonts } from 'expo-font';

export const MyBottomSheet = (props: BottomSheetProps) => {
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
    <>
      <BottomSheet
        isVisible={state}
        onBackdropPress={onState}
        closeIconPress={onState}
        onSwipeComplete={onState}
        {...props}
      >
        <Text variant="title3">children content</Text>
      </BottomSheet>
      <Text variant="title3" onPress={onState}>
        open bottom sheet
      </Text>
    </>
  );
};
