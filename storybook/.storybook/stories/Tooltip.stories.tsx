import React from 'react';
import { View } from 'react-native';
import { MyTooltip } from '../../src/components/MyTooltip';
import { TooltipProps } from '../../../lib/typescript/components/Tooltip';

const MyTooltipMeta = {
  title: 'Tooltip',
  component: MyTooltip,
  decorators: [
    (Story) => (
      <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyTooltipMeta;

const basicProps: TooltipProps = {
  text: 'title',
  title: 'title',
};
export const Basic = {
  args: basicProps,
};
