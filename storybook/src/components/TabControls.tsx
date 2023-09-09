import React from 'react';
import { TabControl } from 'rn-ui-kit';
import { LinkIcon } from '../../../src/icons/LinkIcon';

export const TabControls = () => {
  const list = [
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
