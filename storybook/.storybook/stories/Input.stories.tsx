import React from 'react';
import { View } from 'react-native';
import { MyInput } from '../../src/components/MyInput';
import { InputProps } from '../../../lib/typescript/components/Input';

const MyInputMeta = {
  title: 'Input',
  component: MyInput,
  decorators: [
    (Story) => (
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 20,
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default MyInputMeta;

const textProps: InputProps = {
  variant: 'text',
  label: 'text',
  hint: 'text',
  placeholder: 'text',
  isAnimatedLabel: false,
  isError: false,
  isRequired: false,
};
export const Text = {
  args: textProps,
};

const messageProps: InputProps = {
  variant: 'message',
  label: 'message',
  hint: 'message',
  placeholder: 'message',
  isAnimatedLabel: false,
  isError: false,
  isRequired: false,
};
export const Message = {
  args: messageProps,
};

const passwordProps: InputProps = {
  variant: 'password',
  label: 'password',
  hint: 'password',
  placeholder: 'password',
  isAnimatedLabel: false,
  isError: false,
  isRequired: false,
};
export const Password = {
  args: passwordProps,
};

const textareaProps: InputProps = {
  variant: 'textarea',
  label: 'textarea',
  hint: 'textarea',
  placeholder: 'textarea',
  isAnimatedLabel: false,
  isError: false,
  isRequired: false,
};
export const TextArea = {
  args: textareaProps,
};

const numberProps: InputProps = {
  variant: 'number',
  label: 'number',
  hint: 'number',
  placeholder: 'number',
  isAnimatedLabel: false,
  isError: false,
  isRequired: false,
};
export const Number = {
  args: numberProps,
};
