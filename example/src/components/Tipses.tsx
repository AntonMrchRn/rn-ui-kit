import React from 'react';
import { Spacer, Tips } from 'rn-ui-kit';

export const Tipses = () => {
  return (
    <Spacer size={'l'}>
      <Tips type="error" text="error" />
      <Tips type="info" text="info" />
      <Tips type="warning" text="warning" />
      <Tips type="success" text="success" />
      <Tips type="error" text="error" buttonText="error" />
      <Tips type="info" text="info" buttonText="info" />
      <Tips type="warning" text="warning" buttonText="warning" />
      <Tips type="success" text="success" buttonText="success" />
    </Spacer>
  );
};
