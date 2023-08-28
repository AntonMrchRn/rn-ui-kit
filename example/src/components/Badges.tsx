import React from 'react';
import { Badge, Spacer } from 'rn-ui-kit';
import { LinkIcon } from '../../../src/icons/LinkIcon';

export const Badges = () => {
  return (
    <Spacer size="s">
      <Badge icon={<LinkIcon size="M" color="#fff" />} label="Badge" />
      <Badge variant="accent" icon label="Badge" />
      <Badge variant="danger" label="Badge" />
      <Badge variant="secondary" label="Badge" />

      <Badge variant="warning" label="Badge" />
      <Badge variant="success" label="Badge" />
      <Badge variant="basic" label="Badge" />
      <Badge variant="special" label="Badge" />

      <Badge variant="accent" icon label="Badge" secondary />
      <Badge variant="danger" icon label="Badge" secondary />
      <Badge variant="secondary" icon label="Badge" secondary />
      <Badge variant="warning" icon label="Badge" secondary />
      <Badge variant="success" icon label="Badge" secondary />
      <Badge variant="basic" icon label="Badge" secondary />
      <Badge variant="special" icon label="Badge" secondary />
    </Spacer>
  );
};
