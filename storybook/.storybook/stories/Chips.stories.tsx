import React from 'react';
import { View } from 'react-native';
import { MyChips } from '../../src/components/MyChips';
import { ChipsProps } from '../../../lib/typescript/components/Chips';

const MyChipsMeta = {
  title: 'Chips',
  component: MyChips,
  decorators: [
    (Story) => (
      <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyChipsMeta;

const basicProps: ChipsProps = {
  icon: false,
  close: false,
  selected: false,
  disabled: false,
  label: 'Chips',
};
export const Basic = {
  args: basicProps,
};
