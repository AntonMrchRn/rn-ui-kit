import React from 'react';
import { View } from 'react-native';
import { RadioButtonProps } from '../../../lib/typescript/components/RadioButton';
import { MySwipeable } from '../../src/components/MySwipeable';
import { SwipeableProps } from '../../../lib/typescript/components/Swipeable';

const MySwipeableMeta = {
  title: 'Swipeable',
  component: MySwipeable,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MySwipeableMeta;

const defaultProps: SwipeableProps = {
  variant: 'default',
  previewActions: false,
  firstAction: () => {},
  secondAction: () => {},
  items: [
    {
      text: '10000 шт',
    },
    {
      text: '1000 шт',
    },
    {
      text: '100 шт',
    },
  ],
  title: 'Очень длинное название услуги / материала, возможно на 2-3 строчки',
  label: 'Изменено исполнителем',
};
export const Default = {
  args: defaultProps,
};

const userProps: SwipeableProps = {
  variant: 'user',
  previewActions: false,
  firstAction: () => {},
  secondAction: () => {},
  items: [
    {
      text: '10000 шт',
    },
    {
      text: '1000 шт',
    },
    {
      text: '100 шт',
    },
  ],
  title: 'Очень длинное название услуги / материала, возможно на 2-3 строчки',
  label: 'Изменено исполнителем',
};
export const User = {
  args: userProps,
};

const coordinatorProps: SwipeableProps = {
  variant: 'coordinator',
  previewActions: false,
  firstAction: () => {},
  secondAction: () => {},
  items: [
    {
      text: '10000 шт',
    },
    {
      text: '1000 шт',
    },
    {
      text: '100 шт',
    },
  ],
  title: 'Очень длинное название услуги / материала, возможно на 2-3 строчки',
  label: 'Изменено исполнителем',
};
export const Coordinator = {
  args: coordinatorProps,
};

const deleteProps: SwipeableProps = {
  variant: 'delete',
  previewActions: false,
  firstAction: () => {},
  secondAction: () => {},
  items: [
    {
      text: '10000 шт',
    },
    {
      text: '1000 шт',
    },
    {
      text: '100 шт',
    },
  ],
  title: 'Очень длинное название услуги / материала, возможно на 2-3 строчки',
  label: 'Изменено исполнителем',
};
export const Delete = {
  args: deleteProps,
};
