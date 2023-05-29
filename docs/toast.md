# `<Toast />`

## Использование

Необходимо обернуть приложение в данный провайдер, для доступа к компоненту Toast:

```js
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, useToast } from 'rn-ui-kit';
// ...
const toast = useToast();
return (
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
);
```

Через метод show мы вызываем toast с заданными параметрами

## Параметры

| Ключ                    | Тип                    | Обязательный | Описание                                                                                                                                |
| ----------------------- | ---------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                  | `Types`                | `true`       | Ключевой параметр, который определяет тип                                                                                               |
| `containerStyle`        | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера                                                                                                                        |
| `actionsContainerStyle` | `StyleProp<ViewStyle>` | `false`      | Стиль внутреннего контейнера двух кнопок снизу                                                                                          |
| `firstAction`           | `Action`               | `false`      | Необходимые ключи для рендеринга первой кнопки                                                                                          |
| `secondAction`          | `Action`               | `false`      | Необходимые ключи для рендеринга второй кнопки                                                                                          |
| `titleStyle`            | `StyleProp<TextStyle>` | `false`      | Стиль заголовка                                                                                                                         |
| `textStyle`             | `StyleProp<TextStyle>` | `false`      | Стиль основного текста                                                                                                                  |
| `title`                 | `string`               | `false`      | Заголовок                                                                                                                               |
| `text`                  | `string`               | `false`      | Основной текст                                                                                                                          |
| `animationDuration`     | `number`               | `false`      | Задержка в миллисекундах, после которой происходит раскрытие/скрытие контейнера после срабатывания метода show. По умолчанию 250        |
| `duration`              | `number`               | `false`      | Задержка в миллисекундах, после которой происходит скрытие контейнера. По умолчанию 2000. Если выставить 0, то контейнер не будет скрыт |
| `contentHeight`         | `number`               | `false`      | Высота контейнера, которая будет отображаться после раскрытия контейнера. По умолчанию 170                                              |
| `swipeEnabled`          | `boolean`              | `false`      | Разрешить свайп вверх для скрытия контейнера. По умолчанию true                                                                         |

## Типы

```js
type Types = 'error' | 'success' | 'warning' | 'info';

type Action = {
  text: string,
  onPress: () => void,
  style?: StyleProp<TextStyle>,
};
```

---
