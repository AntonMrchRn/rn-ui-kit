import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { Modal, Text } from 'rn-ui-kit';
import { ModalProps } from '../../../lib/typescript/components/Modal';

export const MyModal = (props: ModalProps) => {
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
      <Modal
        isVisible={state}
        onBackdropPress={onState}
        closeIconPress={onState}
        {...props}
      >
        <Text variant="title3">Modal content</Text>
      </Modal>
      <Text variant="title3" onPress={onState}>
        open modal
      </Text>
    </>
  );
};
