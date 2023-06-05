import React from 'react';
import { TabControl } from 'rn-ui-kit';
import { LinkIcon } from '../../../src/icons/LinkIcon';

export const TabControls = () => {
  const list = [
    {
      id: 1,
      label: 'test1',
      count: 3,
      icon: true,
    },
    {
      id: 2,
      label: 'test2',
      count: 6,
      icon: false,
    },
    {
      id: 3,
      label: 'test3454545',
      count: 4,
      icon: <LinkIcon color="#000" size="M" />,
    },
    {
      id: 4,
      label: 'test',
      count: 4,
      icon: <LinkIcon color="#000" size="M" />,
    },
    {
      id: 5,
      label: 'test3',
      count: 4,
      icon: <LinkIcon color="#000" size="M" />,
    },
  ];

  const initialId = 2;

  return <TabControl data={list} initialId={initialId} />;
};
