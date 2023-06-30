import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, { useRef, useState } from 'react';
import { BottomSheet, BottomSheetModal, Text } from 'rn-ui-kit';

export const BottomSheets = () => {
  const [state, setState] = useState(false);
  const ref = useRef<BottomSheetModalMethods>(null);
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
      <Text variant="title3" onPress={() => ref.current?.present()}>
        open bottom sheet modal
      </Text>
      <BottomSheetModal
        ref={ref}
        onBackdropPress={() => ref.current?.close()}
        closeIconPress={() => ref.current?.close()}
        closeIcon
        title="Modal Header"
        subtitle="Subtitle"
      >
        <Text variant="title3">children content</Text>
      </BottomSheetModal>
    </>
  );
};
