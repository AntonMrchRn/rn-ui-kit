import React from 'react';
import { Badge, Spacer } from 'rn-ui-kit';
import { LinkIcon } from '../../../src/icons/LinkIcon';

export const Badges = () => {
  return (
    <Spacer size="s">
      <Badge customIcon={<LinkIcon size="M" color="#fff" />} />
      <Badge variantColor={2} icon={true} />
      <Badge variantColor={3} />
      <Badge variantColor={4} />
      <Badge variantColor={5} />
      <Badge variantColor={6} />
      <Badge variantColor={7} />
    </Spacer>
  );
};
