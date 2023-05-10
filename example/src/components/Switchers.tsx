import React, { useState } from 'react';
import { View } from 'react-native';
import { Spacer, Switcher } from 'rn-ui-kit';

export const Switchers = () => {
  const [active, setActive] = useState(false);
  const [active2] = useState(false);
  const [active3] = useState(true);
  const [active4, setActive4] = useState(true);

  return (
    <View>
      <Spacer size="l">
        <Switcher value={active} onValueChange={() => setActive(!active)} />
        <Switcher value={active2} disabled={true} />
        <Switcher value={active3} disabled={true} />
        <Switcher value={active4} onValueChange={() => setActive4(!active4)} />
      </Spacer>
    </View>
  );
};
