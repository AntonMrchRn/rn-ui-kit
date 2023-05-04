import React from 'react';
import { CheckBox } from 'rn-ui-kit';

export const CheckBoxes = () => {
  return (
    <>
      <CheckBox disabled={true} checked={true} />
      <CheckBox disabled={true} checked={false} />
      <CheckBox disabled={false} checked={true} />
      <CheckBox disabled={false} checked={false} />
    </>
  );
};
