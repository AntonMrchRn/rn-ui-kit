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

const basicProps: BadgeProps = {
  label: 'basic',
  variant: 'basic',
  secondary: false,
  icon: false,
};
export const Basic = { args: basicProps };

const accentProps: BadgeProps = {
  label: 'accent',
  variant: 'accent',
  secondary: false,
  icon: false,
};
export const Accent = { args: accentProps };

const dangerProps: BadgeProps = {
  label: 'danger',
  variant: 'danger',
  secondary: false,
  icon: false,
};
export const Danger = { args: dangerProps };

const secondaryProps: BadgeProps = {
  label: 'secondary',
  variant: 'secondary',
  secondary: false,
  icon: false,
};
export const Secondary = { args: secondaryProps };

const warningProps: BadgeProps = {
  label: 'warning',
  variant: 'warning',
  secondary: false,
  icon: false,
};
export const Warning = { args: warningProps };

const successProps: BadgeProps = {
  label: 'success',
  variant: 'success',
  secondary: false,
  icon: false,
};
export const Success = { args: successProps };

const specialProps: BadgeProps = {
  label: 'special',
  variant: 'special',
  secondary: false,
  icon: false,
};
export const Special = { args: specialProps };
