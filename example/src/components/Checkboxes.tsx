import React, { useState } from 'react';
import { CheckBox } from 'rn-ui-kit';
import { LinkIcon } from '../../../src/icons/LinkIcon';
import { View } from 'react-native';

export const CheckBoxes = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <View>
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
      <CheckBox checked={true} disabled={true} />
      <CheckBox checked={false} disabled={true} />
      <CheckBox checked={true} disabled={false} />
      <CheckBox checked={false} disabled={false} />
      <CheckBox
        checked={isChecked2}
        onPress={() => setIsChecked2(!isChecked2)}
        disabled={false}
        isError={true}
      />
      <CheckBox checked={false} disabled={false} isError={true} />
    </View>
  );
};
