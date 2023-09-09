import React from 'react';
import { View } from 'react-native';
import { MyCheckBox } from '../../src/components/MyCheckBox';
import { CheckboxProps } from '../../../lib/typescript/components/Checkbox';

const MyCheckBoxMeta = {
  title: 'CheckBox',
  component: MyCheckBox,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyCheckBoxMeta;

const basicProps: CheckboxProps = {
  checked: false,
};
export const Basic = {
  args: basicProps,
};
