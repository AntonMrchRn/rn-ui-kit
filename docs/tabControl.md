# `<TabControl />`

## Пропсы

| Пропс        | Тип                    | Обязательный | Описание                              |
| ------------ | ---------------------- | ------------ | ------------------------------------- |
| `initialId`  | `number`               | `false`      | Индекс изначально выбранного элемента |
| `data`       | `TabItem[]`            | `true`       | Массив элементов компонента           |
| `labelStyle` | `StyleProp<TextStyle>` | `false`      | Стиль лейбла элементов компонента     |

## Типы

```js
type TabItem = {
  id: number,
  label: string,
  count?: number,
  onPress?: () => void,
  icon?: ReactElement | boolean,
};
```

---
