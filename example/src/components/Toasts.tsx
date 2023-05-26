import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Spacer, Text, useToast } from 'rn-ui-kit';

export const Toasts = () => {
  const toast = useToast();
  return (
    <Spacer size={'s'}>
      <TouchableOpacity
        onPress={() => {
          toast.show({
            type: 'error',
            text: 'Какое-то описание, раскрывающее суть сообщения. Может быть в несколько строчек',
            title: 'Заголовок желательно в одну строчку',
            firstAction: {
              text: 'Отменить',
              onPress: () => {},
            },
            secondAction: {
              text: 'Подтвердить',
              onPress: () => {},
            },
          });
        }}
      >
        <Text variant={'title1'}>toast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          toast.show({
            type: 'success',
            text: 'Какое-то описание, раскрывающее суть сообщения. Может быть в несколько строчек',
            title: 'Заголовок желательно в одну строчку',
            firstAction: {
              text: 'Отменить',
              onPress: () => {},
            },
            secondAction: {
              text: 'Подтвердить',
              onPress: () => {},
            },
          });
        }}
      >
        <Text variant={'title1'}>toast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          toast.show({
            type: 'warning',
            text: 'Какое-то описание, раскрывающее суть сообщения. Может быть в несколько строчек',
            title: 'Заголовок желательно в одну строчку',
            firstAction: {
              text: 'Отменить',
              onPress: () => {},
            },
            secondAction: {
              text: 'Подтвердить',
              onPress: () => {},
            },
          });
        }}
      >
        <Text variant={'title1'}>toast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          toast.show({
            type: 'info',
            text: 'Какое-то описание, раскрывающее суть сообщения. Может быть в несколько строчек',
            title: 'Заголовок желательно в одну строчку',
            firstAction: {
              text: 'Отменить',
              onPress: () => {},
            },
            secondAction: {
              text: 'Подтвердить',
              onPress: () => {},
            },
          });
        }}
      >
        <Text variant={'title1'}>toast</Text>
      </TouchableOpacity>
    </Spacer>
  );
};
