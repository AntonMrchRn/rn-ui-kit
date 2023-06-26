# `<Swipeable />`

## Пропсы

| Пропс                  | Тип                    | Обязательный | Описание                                                      |
| ---------------------- | ---------------------- | ------------ | ------------------------------------------------------------- |
| `items`                | ` SwipeableItem[]`     | `false`      | Массив элементов для отображения в нижней части компонента    |
| `variant`              | `Variant`              | `true`       | Один из вариантов отображения компонента                      |
| `fistAction`           | `() => void`           | `true`       | Логика нажатия первой скрытой кнопки в компоненте             |
| `secondAction`         | `() => void`           | `true`       | Логика нажатия второй скрытой кнопки в компоненте             |
| `containerStyle`       | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера компонента                                   |
| `hiddenContainerStyle` | `StyleProp<ViewStyle>` | `false`      | Стиль скрытого контейнера компонента                          |
| `itemsContainerStyle`  | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера нижних элементов компонента                  |
| `itemContainerStyle`   | `StyleProp<ViewStyle>` | `false`      | Стиль каждого из нижних элементов компонента                  |
| `itemIconStyle`        | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера каждой из нижних иконок элементов компонента |
| `actionStyle`          | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера скрытых кнопкок компонента                   |
| `firstActionStyle`     | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера первой скрытой кнопки компонента             |
| `label`                | `string`               | `false`      | Лейбл компонента                                              |
| `secondActionStyle`    | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера второй скрытой кнопки компонента             |
| `labelStyle`           | `StyleProp<TextStyle>` | `false`      | Стиль лейбла компонента                                       |
| `title`                | `string`               | `true`       | Заголовок компонента                                          |
| `titleStyle`           | `StyleProp<TextStyle>` | `false`      | Стиль заголовка компонента                                    |
| `itemTextStyle`        | `StyleProp<TextStyle>` | `false`      | Стиль текста нижних элементов компонента                      |
| `previewActions`       | `boolean`              | `false`      | Показать наличине скрытых кнопок компонента                   |

## Типы

```js
type SwipeableItem = {
  text: string,
  icon?: JSX.Element,
};
type Variant = 'default' | 'user' | 'coordinator' | 'delete';
```

---
