import React from 'react';
import { View } from 'react-native';
import { MySegmentedControl } from '../../src/components/MySegmentedControl';
import { SegmentedControlProps } from '../../../src/components/SegmentedControl';

const MySegmentedControlMeta = {
  title: 'SegmentedControl',
  component: MySegmentedControl,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MySegmentedControlMeta;

const basicProps: SegmentedControlProps = {
  onChange: () => {},
  tabs: ['Телефон', 'Email'],
};
export const Basic = {
  args: basicProps,
};
