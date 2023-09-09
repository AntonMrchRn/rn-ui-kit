import React from 'react';
import { View } from 'react-native';
import { MyInputCode } from '../../src/components/MyInputCode';
import { InputCodeProps } from '../../../lib/typescript/components/InputCode';

const MyInputCodeMeta = {
  title: 'InputCode',
  component: MyInputCode,
  decorators: [
    (Story) => (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyInputCodeMeta;

const basicProps: InputCodeProps = {
  value: '',
  hint: '',
};
export const Basic = {
  args: basicProps,
};
