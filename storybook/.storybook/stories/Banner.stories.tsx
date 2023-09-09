import React from 'react';
import { View } from 'react-native';
import { MyBanner } from '../../src/components/MyBanner';
import { BannerProps } from '../../../lib/typescript/components/Banner';

const MyBannerMeta = {
  title: 'Banner',
  component: MyBanner,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyBannerMeta;

const errorProps: BannerProps = {
  type: 'error',
  icon: 'alert',
  title: 'error',
  text: 'error',
  buttonText: 'error',
};
export const Error = {
  args: errorProps,
};

const successProps: BannerProps = {
  type: 'success',
  icon: 'success',
  title: 'success',
  text: 'success',
  buttonText: 'success',
};
export const Success = {
  args: successProps,
};

const warningProps: BannerProps = {
  type: 'warning',
  icon: 'alert',
  title: 'warning',
  text: 'warning',
  buttonText: 'warning',
};
export const Warning = {
  args: warningProps,
};

const infoProps: BannerProps = {
  type: 'info',
  icon: 'info',
  title: 'info',
  text: 'info',
  buttonText: 'info',
};
export const Info = {
  args: infoProps,
};
