import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Tooltip } from 'rn-ui-kit';

export const Tooltips = () => {
  const [state, setState] = useState(false);
  return (
    <View style={{ position: 'relative' }}>
      <Tooltip
        onClose={() => setState(false)}
        isVisible={state}
        triangleEdge="bottom"
        triagnleAlign="start"
        title="Заголовок"
        text="Локаничная подсказка этого тултипа,но желательно не делать ее больше3-4 строчек"
        coords={{ x: 10, y: 110 }}
      >
        <Text variant="title1" onPress={() => setState(!state)}>
          tooltip
        </Text>
      </Tooltip>
    </View>
  );
};
