# `<SwipeList />`

## Пропсы

| Пропс                  | Тип                             | Обязательный | Описание                                          |
| ---------------------- | ------------------------------- | ------------ | ------------------------------------------------- |
| `data`                 | ` SwipeListData[]`              | `true`       | Массив элементов для отображения в листе          |
| `variant`              | `Variant`                       | `true`       | Один из вариантов отображения компонента          |
| `fistAction`           | `(item: SwipeListData) => void` | `true`       | Логика нажатия первой скрытой кнопки в компоненте |
| `secondAction`         | `(item: SwipeListData) => void` | `true`       | Логика нажатия второй скрытой кнопки в компоненте |
| `containerStyle`       | `StyleProp<ViewStyle>`          | `false`      | Стиль контейнера компонента                       |
| `hiddenContainerStyle` | `StyleProp<ViewStyle>`          | `false`      | Стиль скрытого контейнера компонента              |
| `itemsContainerStyle`  | `StyleProp<ViewStyle>`          | `false`      | Стиль нижних элементов компонента                 |
| `actionStyle`          | `StyleProp<ViewStyle>`          | `false`      | Стиль контейнера скрытых кнопкок компонента       |
| `firstActionStyle`     | `StyleProp<ViewStyle>`          | `false`      | Стиль контейнера первой скрытой кнопки компонента |
| `secondActionStyle`    | `StyleProp<ViewStyle>`          | `false`      | Стиль контейнера второй скрытой кнопки компонента |
| `labelStyle`           | `StyleProp<TextStyle>`          | `false`      | Стиль лейбла компонента                           |
| `titleStyle`           | `StyleProp<TextStyle>`          | `false`      | Стиль заголовка компонента                        |
| `itemTextStyle`        | `StyleProp<TextStyle>`          | `false`      | Стиль текста нижних элементов компонента          |

## Типы

```js
type SwipeListData = {
  id: string,
  label?: string,
  title: string,
  items: {
    id: string,
    icon?: JSX.Element,
    text: string,
  }[],
};
type Variant = 'default' | 'user' | 'coordinator' | 'delete';
```

---
