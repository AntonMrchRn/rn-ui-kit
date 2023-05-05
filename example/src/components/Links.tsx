import React from 'react';
import { Link } from 'rn-ui-kit';

export const Links = () => {
  return (
    <>
      <Link label={'link M'} url={''} size="M" />
      <Link label={'link M icon'} url={''} icon size="M" />
      <Link label={'link L'} url={''} size="L" />
      <Link label={'link L icon'} url={''} icon size="L" />
    </>
  );
};
