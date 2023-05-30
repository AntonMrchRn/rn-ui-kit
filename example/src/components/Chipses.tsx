import React from 'react';
import { Chips, Spacer } from 'rn-ui-kit';

export const Chipses = () => {
  return (
    <Spacer size={'s'}>
      <Chips selected label="chips" />
      <Chips label="chips" />
      <Chips label="chips" disabled />
      <Chips label="chips" disabled selected icon />
      <Chips label="chips" disabled selected close icon />
      <Chips label="chips" selected close />
      <Chips label="chips" close />
    </Spacer>
  );
};
