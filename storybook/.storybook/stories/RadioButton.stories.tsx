import React from 'react';
import { View } from 'react-native';
import { MyRadioButton } from '../../src/components/MyRadioButton';
import { RadioButtonProps } from '../../../lib/typescript/components/RadioButton';

const MyRadioButtonMeta = {
  title: 'RadioButton',
  component: MyRadioButton,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyRadioButtonMeta;

const basicProps: RadioButtonProps = {
  checked: false,
  isError: false,
};
export const Basic = {
  args: basicProps,
};
