import React from 'react';
import { View } from 'react-native';
import { MySwitch } from '../../src/components/MySwitch';
import { SwitchProps } from 'react-native-switch';

const MySwitchMeta = {
  title: 'Switch',
  component: MySwitch,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MySwitchMeta;

const basicProps: SwitchProps = {
  value: false,
  disabled: false,
};
export const Basic = {
  args: basicProps,
};
