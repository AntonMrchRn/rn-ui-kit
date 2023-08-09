# `<TabControl />`

## Пропсы

Принимает в себя все стандартные пропсы компонента ScrollView из React Native а также следующие:

| Пропс                | Тип                                  | Обязательный | Описание                                 |
| -------------------- | ------------------------------------ | ------------ | ---------------------------------------- |
| `currentTab`         | `TabItem`                            | `true`       | Выбранный таб                            |
| `data`               | `TabItem[]`                          | `true`       | Массив элементов компонента              |
| `labelStyle`         | `StyleProp<TextStyle>`               | `false`      | Стиль лейбла элементов компонента        |
| `iconContainerStyle` | `StyleProp<ViewStyle>`               | `false`      | Стиль контейнера иконки компонента       |
| `onChange`           | `onChange?: (item: TabItem) => void` | `false`      | Логика при изменении выбранного элемента |

## Типы

```ts
type TabItem = {
  name: string;
  count?: number;
  icon?: ReactElement | boolean;
};
```

---
