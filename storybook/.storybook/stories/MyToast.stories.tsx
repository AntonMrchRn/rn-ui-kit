import React from 'react';
import { View } from 'react-native';
import { MyToast } from '../../src/components/MyToast';
import { ToastOptions } from '../../../lib/typescript/components/Toast/Toast';
import { ToastProvider } from '../../../src/components/Toast/ToastProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../../../src/theme/ThemeProvider';

const MyToastMeta = {
  title: 'Toast',
  component: MyToast,
  decorators: [
    (Story) => (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <ThemeProvider>
            <ToastProvider>
              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}
              >
                <Story />
              </View>
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    ),
  ],
};

export default MyToastMeta;

const errorProps: ToastOptions = {
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
};
export const Error = {
  args: errorProps,
};

const successProps: ToastOptions = {
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
};
export const Success = {
  args: successProps,
};

const warningProps: ToastOptions = {
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
};
export const Warning = {
  args: warningProps,
};

const infoProps: ToastOptions = {
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
};
export const Info = {
  args: infoProps,
};
