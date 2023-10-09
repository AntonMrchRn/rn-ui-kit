import React from 'react';
import { View } from 'react-native';
import { MyTabControl } from '../../src/components/MyTabControl';
import { TabControlProps } from '../../../lib/typescript/components/TabControl';

const MyTabControlMeta = {
  title: 'TabControl',
  component: MyTabControl,
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          marginTop: '100%',
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default MyTabControlMeta;

const basicProps: TabControlProps = {
  data: [
    {
      id: 1,
      label: 'test',
      count: 3,
      icon: true,
    },
    {
      id: 2,
      label: 'ne test',
      count: 15,
      icon: false,
    },
    {
      id: 3,
      label: 'testtrtrtrt',
      count: 4,
      icon: true,
    },
    {
      id: 4,
      label: 'test',
      count: 4,
      icon: true,
    },
    {
      id: 5,
      label: 'test3',
      count: 4,
      icon: true,
    },
  ],
  currentTabId: 1,
};
export const Basic = {
  args: basicProps,
};
