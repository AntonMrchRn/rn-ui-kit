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

const accentProps: ButtonProps = {
  label: 'accent',
  variant: 'accent',
  icon: false,
  isPending: false,
  size: 'M',
};
export const Accent = {
  args: accentProps,
};

const dangerProps: ButtonProps = {
  label: 'danger',
  variant: 'danger',
  icon: false,
  isPending: false,
  size: 'M',
};
export const Danger = {
  args: dangerProps,
};

const outlineAccentProps: ButtonProps = {
  label: 'outlineAccent',
  variant: 'outlineAccent',
  icon: false,
  isPending: false,
  size: 'M',
};
export const OutlineAccent = {
  args: outlineAccentProps,
};

const outlineDangerProps: ButtonProps = {
  label: 'outlineDanger',
  variant: 'outlineDanger',
  icon: false,
  isPending: false,
  size: 'M',
};
export const OutlineDanger = {
  args: outlineDangerProps,
};

const ghostProps: ButtonProps = {
  label: 'ghost',
  variant: 'ghost',
  icon: false,
  isPending: false,
  size: 'M',
};
export const Ghost = {
  args: ghostProps,
};

const dangerGhostProps: ButtonProps = {
  label: 'dangerGhost',
  variant: 'dangerGhost',
  icon: false,
  isPending: false,
  size: 'M',
};
export const DangerGhost = {
  args: dangerGhostProps,
};
