import React from 'react';
import { View } from 'react-native';
import { MyBadge } from '../../src/components/MyBadge';
import { BadgeProps } from '../../../lib/typescript/components/Badge';

const MyBadgeMeta = {
  title: 'Badge',
  component: MyBadge,
  decorators: [
    (Story) => (
      <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyBadgeMeta;

const initProps: BadgeProps = {
  secondary: false,
  icon: false,
};

const basicProps: BadgeProps = {
  ...initProps,
  label: 'basic',
  variant: 'basic',
};
export const Basic = { args: basicProps };

const accentProps: BadgeProps = {
  ...initProps,
  label: 'accent',
  variant: 'accent',
};
export const Accent = { args: accentProps };

const dangerProps: BadgeProps = {
  ...initProps,
  label: 'danger',
  variant: 'danger',
};
export const Danger = { args: dangerProps };

const secondaryProps: BadgeProps = {
  ...initProps,
  label: 'secondary',
  variant: 'secondary',
};
export const Secondary = { args: secondaryProps };

const warningProps: BadgeProps = {
  ...initProps,
  label: 'warning',
  variant: 'warning',
};
export const Warning = { args: warningProps };

const successProps: BadgeProps = {
  ...initProps,
  label: 'success',
  variant: 'success',
};
export const Success = { args: successProps };

const specialProps: BadgeProps = {
  ...initProps,
  label: 'special',
  variant: 'special',
};
export const Special = { args: specialProps };
