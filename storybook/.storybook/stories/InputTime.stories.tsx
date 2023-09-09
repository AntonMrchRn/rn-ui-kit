import React from 'react';
import { View } from 'react-native';
import { InputTimeProps } from '../../../lib/typescript/components/InputTime';
import { MyInputTime } from '../../src/components/MyInputTime';

const MyInputTimeMeta = {
  title: 'InputTime',
  component: MyInputTime,
  decorators: [
    (Story) => (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyInputTimeMeta;

const basicProps: InputTimeProps = {
  value: '',
  placeholder: '',
  isError: false,
};
export const Basic = {
  args: basicProps,
};
