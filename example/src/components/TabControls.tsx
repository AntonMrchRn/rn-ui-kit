import React, { useState } from 'react';
import { TabControl } from 'rn-ui-kit';
import { LinkIcon } from '../../../src/icons/LinkIcon';
import { TabItem } from 'src/components/TabControl';

export const TabControls = () => {
  const [currentTab, setCurrentTab] = useState<TabItem>({
    name: 'test2',
    count: 3,
    icon: true,
  });
  const list: TabItem[] = [
    {
      name: 'test2',
      count: 3,
      icon: true,
    },
    {
      name: 'ne test',
      count: 15,
      icon: false,
    },
    {
      name: 'testtrtrtrt',
      count: 4,
      icon: <LinkIcon color="#000" size="M" />,
    },
    {
      name: 'test4',
      count: 4,
      icon: <LinkIcon color="#000" size="M" />,
    },
    {
      name: 'test3',
      count: 4,
      icon: <LinkIcon color="#000" size="M" />,
    },
  ];

  return (
    <>
      <TabControl
        data={list}
        currentTab={currentTab}
        onChange={(tab) => setCurrentTab(tab)}
      />
    </>
  );
};
