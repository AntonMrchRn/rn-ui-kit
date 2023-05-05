import React, { useState } from 'react';
import { CheckBox, Spacer } from 'rn-ui-kit';
import { LinkIcon } from '../../../src/icons/LinkIcon';

export const CheckBoxes = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <Spacer size="s">
      <CheckBox
        checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
        icon={<LinkIcon size="M" color="#fff" />}
      />
      <CheckBox
        checked={isChecked2}
        onPress={() => setIsChecked2(!isChecked2)}
        disabled={false}
      />
      <CheckBox
        checked={true}
        disabled={true}
        icon={<LinkIcon size="M" color="#fff" />}
      />
      <CheckBox
        checked={false}
        disabled={true}
        icon={<LinkIcon size="M" color="#fff" />}
      />
    </Spacer>
  );
};
