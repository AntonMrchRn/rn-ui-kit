import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { SegmentedControl } from 'rn-ui-kit';

type SegmentedControlsProps = {};
export const SegmentedControls: FC<SegmentedControlsProps> = () => {
  const [selectedSegment, setSelectedSegment] = useState(0);

  return (
    <View>
      <SegmentedControl
        currentTabId={selectedSegment}
        tabs={['Label 1', 'Label 2', 'Label 3']}
        onChange={setSelectedSegment}
      />
      <Text onPress={() => setSelectedSegment(0)}>on tab 1</Text>
      <Text onPress={() => setSelectedSegment(1)}>on tab 2</Text>
      <Text onPress={() => setSelectedSegment(2)}>on tab 3</Text>
    </View>
  );
};
