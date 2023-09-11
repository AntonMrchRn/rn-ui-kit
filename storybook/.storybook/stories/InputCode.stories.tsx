import React from 'react';
import { View } from 'react-native';
import { MyInputCode } from '../../src/components/MyInputCode';
import { InputCodeProps } from '../../../lib/typescript/components/InputCode';

const MyInputCodeMeta = {
  title: 'InputCode',
  component: MyInputCode,
  decorators: [
    (Story) => (
      <View
        style={{ justifyContent: 'center', flex: 1, paddingHorizontal: 20 }}
      >
        <Story />
      </View>
    ),
  ],
};

export default MyInputCodeMeta;

const basicProps: InputCodeProps = {
  hint: '',
};
export const Basic = {
  args: basicProps,
};
