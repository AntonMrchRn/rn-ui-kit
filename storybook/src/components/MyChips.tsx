import React from 'react';
import { Chips } from 'rn-ui-kit';
import { ChipsProps } from '../../../lib/typescript/components/Chips';

export const MyChips = (props: ChipsProps) => {
  return <Chips {...props} />;
};
