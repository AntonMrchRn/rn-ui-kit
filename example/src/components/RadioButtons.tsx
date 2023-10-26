import React, { useState } from 'react';
import { RadioButton, Spacer } from 'rn-ui-kit';

export const RadioButtons = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <Spacer size="s">
      <RadioButton
        checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      />
      <RadioButton
        checked={isChecked2}
        onPress={() => setIsChecked2(!isChecked2)}
      />
      <RadioButton checked={true} disabled={true} />
      <RadioButton checked={false} disabled={true} />
      <RadioButton
        checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
        isError={true}
      />
      <RadioButton
        checked={isChecked2}
        onPress={() => setIsChecked2(!isChecked2)}
        isError={true}
      />
    </Spacer>
  );
};
