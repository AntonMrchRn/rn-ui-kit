import React from 'react';
import { View } from 'react-native';
import { InputDateProps } from '../../../lib/typescript/components/InputDate';
import { MyInputDate } from '../../src/components/MyInputDate';

const MyInputDateMeta = {
  title: 'InputDate',
  component: MyInputDate,
  decorators: [
    (Story) => (
      <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyInputDateMeta;

const basicProps: InputDateProps = {
  placeholder: '',
  isError: false,
};
export const Basic = {
  args: basicProps,
};
