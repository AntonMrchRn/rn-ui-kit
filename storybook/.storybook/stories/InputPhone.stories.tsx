import React from 'react';
import { View } from 'react-native';
import { MyLink } from '../../src/components/MyLink';
import { LinkProps } from '../../../lib/typescript/components/Link';
import { MyInputPhone } from '../../src/components/MyInputPhone';
import { InputPhoneProps } from '../../../lib/typescript/components/InputPhone';

const MyInputPhoneMeta = {
  title: 'InputPhone',
  component: MyInputPhone,
  decorators: [
    (Story) => (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyInputPhoneMeta;

const basicProps: InputPhoneProps = {
  value: '',
  label: 'label',
  hint: 'hint',
  placeholder: '',
  isError: false,
};
export const Basic = {
  args: basicProps,
};
