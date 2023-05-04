import React from 'react';
import { CheckBox } from 'rn-ui-kit';

export const CheckBoxes = () => {
  const [isCheced, setIsChecked] = React.useState(false);
  return (
    <>
      <CheckBox
        disabled={false}
        checked={isCheced}
        onPress={() => setIsChecked(!isCheced)}
      />
      <CheckBox checked={false} />
      <CheckBox disabled={true} checked={true} />
      <CheckBox disabled={true} checked={false} />
    </>
  );
};
