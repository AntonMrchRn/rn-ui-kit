import React, { useState } from 'react';
import { View } from 'react-native';
import { Spacer, Switch } from 'rn-ui-kit';

export const Switches = () => {
  const [active, setActive] = useState(false);
  const [active2] = useState(false);
  const [active3] = useState(true);
  const [active4, setActive4] = useState(true);

  return (
    <View>
      <Spacer size="l">
        <Switch value={active} onValueChange={() => setActive(!active)} />
        <Switch value={active2} disabled={true} />
        <Switch value={active3} disabled={true} />
        <Switch value={active4} onValueChange={() => setActive4(!active4)} />
      </Spacer>
    </View>
  );
};
