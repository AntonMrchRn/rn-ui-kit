import React from 'react';
import { CheckBox } from 'rn-ui-kit';
import { CheckboxProps } from '../../../lib/typescript/components/Checkbox';

export const MyCheckBox = (props: CheckboxProps) => {
  return <CheckBox {...props} />;
};
