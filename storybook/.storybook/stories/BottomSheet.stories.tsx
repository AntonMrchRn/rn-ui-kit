import React from 'react';
import { View } from 'react-native';
import { MyBottomSheet } from '../../src/components/MyBottomSheet';
import { BottomSheetProps } from '../../../lib/typescript/components/BottomSheet';

const MyBottomSheetMeta = {
  title: 'BottomSheet',
  component: MyBottomSheet,
  decorators: [
    (Story) => (
      <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyBottomSheetMeta;

const basicProps: BottomSheetProps = {
  closeIcon: true,
  title: 'title',
  subtitle: 'subtitle',
};
export const Basic = {
  args: basicProps,
};
