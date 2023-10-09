import React from 'react';
import { View } from 'react-native';
import { MyButton } from '../../src/components/MyButton';
import { ButtonProps } from '../../../lib/typescript/components/Button';

const MyButtonMeta = {
  title: 'Button',
  component: MyButton,
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          paddingHorizontal: 20,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

const initProps: ButtonProps = {
  icon: false,
  isPending: false,
  size: 'M',
  disabled: false,
};

const accentProps: ButtonProps = {
  ...initProps,
  label: 'accent',
  variant: 'accent',
};
export const Accent = {
  args: accentProps,
};

const dangerProps: ButtonProps = {
  ...initProps,
  label: 'danger',
  variant: 'danger',
};
export const Danger = {
  args: dangerProps,
};

const outlineAccentProps: ButtonProps = {
  ...initProps,
  label: 'outlineAccent',
  variant: 'outlineAccent',
};
export const OutlineAccent = {
  args: outlineAccentProps,
};

const outlineDangerProps: ButtonProps = {
  ...initProps,
  label: 'outlineDanger',
  variant: 'outlineDanger',
};
export const OutlineDanger = {
  args: outlineDangerProps,
};

const ghostProps: ButtonProps = {
  ...initProps,
  label: 'ghost',
  variant: 'ghost',
};
export const Ghost = {
  args: ghostProps,
};

const dangerGhostProps: ButtonProps = {
  ...initProps,
  label: 'dangerGhost',
  variant: 'dangerGhost',
};
export const DangerGhost = {
  args: dangerGhostProps,
};
