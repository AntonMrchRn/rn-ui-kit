import React from 'react';
import { View } from 'react-native';
import { MyTips } from '../../src/components/MyTips';
import { TipsProps } from '../../../lib/typescript/components/Tips';

const MyTipsMeta = {
  title: 'Tips',
  component: MyTips,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyTipsMeta;

const errorProps: TipsProps = {
  type: 'error',
  text: 'error',
  buttonText: 'error',
};
export const Error = {
  args: errorProps,
};

const successProps: TipsProps = {
  type: 'success',
  text: 'success',
  buttonText: 'success',
};
export const Success = {
  args: successProps,
};

const warningProps: TipsProps = {
  type: 'warning',
  text: 'warning',
  buttonText: 'warning',
};
export const Warning = {
  args: warningProps,
};

const infoProps: TipsProps = {
  type: 'info',
  text: 'info',
  buttonText: 'info',
};
export const Info = {
  args: infoProps,
};
