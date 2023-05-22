import React from 'react';
import { Spacer, Tips } from 'rn-ui-kit';

export const Tipses = () => {
  return (
    <Spacer size={'l'}>
      <Tips type="error" text="error" />
      <Tips type="info" text="info" />
      <Tips type="warning" text="warning" />
      <Tips type="success" text="success" />
    </Spacer>
  );
};
