import React from 'react';
import { SwipeList } from 'rn-ui-kit';

export const SwipeLists = () => {
  const swipeListData = [
    {
      id: 'item1',
      label: 'Изменено исполнителем',
      title:
        'Очень длинное название услуги / материала, возможно на 2-3 строчки',
      items: [
        {
          id: 'i1',
          text: '10000',
        },
        {
          id: 'i2',
          text: '1000',
        },
        {
          id: 'i3',
          text: '100',
        },
      ],
    },
    {
      id: 'item2',
      label: 'Изменено исполнителем',
      title:
        'Очень длинное название услуги / материала, возможно на 2-3 строчки',
      items: [
        { id: 'ii1', text: '10000' },
        { id: 'ii2', text: '1000' },
        { id: 'ii3', text: '100' },
      ],
    },
    {
      id: 'item3',
      label: 'Изменено исполнителем',
      title:
        'Очень длинное название услуги / материала, возможно на 2-3 строчки',
      items: [
        { id: 'iii1', text: '10000' },
        { id: 'iii2', text: '1000' },
        { id: 'iii3', text: '100' },
      ],
    },
  ];
  return (
    <>
      <SwipeList
        data={swipeListData}
        variant="default"
        fistAction={() => {}}
        secondAction={() => {}}
      />
      <SwipeList
        data={swipeListData}
        variant="user"
        fistAction={() => {}}
        secondAction={() => {}}
      />
      <SwipeList
        data={swipeListData}
        variant="coordinator"
        fistAction={() => {}}
        secondAction={() => {}}
      />
      <SwipeList
        data={swipeListData}
        variant="delete"
        fistAction={() => {}}
        secondAction={() => {}}
      />
    </>
  );
};
