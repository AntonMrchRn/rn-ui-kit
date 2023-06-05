# `<TabControl />`

## Пропсы

| Пропс                | Тип                                  | Обязательный | Описание                                 |
| -------------------- | ------------------------------------ | ------------ | ---------------------------------------- |
| `initialId`          | `number`                             | `false`      | Индекс изначально выбранного элемента    |
| `data`               | `TabItem[]`                          | `true`       | Массив элементов компонента              |
| `labelStyle`         | `StyleProp<TextStyle>`               | `false`      | Стиль лейбла элементов компонента        |
| `iconContainerStyle` | `StyleProp<ViewStyle>`               | `false`      | Стиль контейнера иконки компонента       |
| `onChange`           | `onChange?: (item: TabItem) => void` | `false`      | Логика при изменении выбранного элемента |

## Типы

```js
type TabItem = {
  id: number,
  label: string,
  count?: number,
  icon?: ReactElement | boolean,
};
```

---
