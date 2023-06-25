import React from 'react';
import { Swipeable } from 'rn-ui-kit';

export const Swipeables = () => {
  return (
    <>
      <Swipeable
        variant={'user'}
        previewActions
        fistAction={() => {}}
        secondAction={() => {}}
        items={[
          {
            text: '10000 шт',
          },
          {
            text: '1000 шт',
          },
          {
            text: '100 шт',
          },
        ]}
        title={
          'Очень длинное название услуги / материала, возможно на 2-3 строчки'
        }
        label="Изменено исполнителем"
      />
      <Swipeable
        variant={'user'}
        fistAction={() => {}}
        secondAction={() => {}}
        items={[
          {
            text: '10000 шт',
          },
          {
            text: '1000 шт',
          },
          {
            text: '100 шт',
          },
        ]}
        title={
          'Очень длинное название услуги / материала, возможно на 2-3 строчки'
        }
        label="Изменено исполнителем"
      />
    </>
  );
};
