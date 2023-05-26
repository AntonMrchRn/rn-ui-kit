import React, { useState } from 'react';
import { BottomSheet, Text } from 'rn-ui-kit';

export const BottomSheets = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <BottomSheet
        isVisible={state}
        onBackdropPress={() => setState(false)}
        closeIconPress={() => setState(false)}
        onSwipeComplete={() => setState(false)}
        closeIcon
        title="Modal Header"
        subtitle="Subtitle"
      >
        <Text variant="title3">children content</Text>
      </BottomSheet>
      <Text variant="title3" onPress={() => setState(true)}>
        open bottom sheet
      </Text>
    </>
  );
};
