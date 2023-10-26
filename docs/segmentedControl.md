# `<SegmentedControl />`

## Пропсы

| Пропс              | Тип                       | Обязательный | Описание                                                     |
| ------------------ | ------------------------- | ------------ | ------------------------------------------------------------ |
| `tabs`             | `string[]`                | `true`       | Массив элементов в ячейках компонента                        |
| `width`            | `number`                  | `false`      | Ширина компонента                                            |
| `currentTabId`     | `number`                  | `true`       | id выбранного таба                                           |
| `activeTextStyle`  | `StyleProp<TextStyle>`    | `false`      | Стиль текста активного элемента компонента                   |
| `activeTabColor`   | `string`                  | `false`      | Цвет фона активного элемента                                 |
| `extraSpacing`     | `number`                  | `false`      | Дополнительная ширина активного элемента при его перемещении |
| `style`            | `StyleProp<ViewStyle>`    | `false`      | Стиль компонента                                             |
| `tabStyle`         | `StyleProp<ViewStyle>`    | `false`      | Стиль элемента в компоненте                                  |
| `textStyle`        | `StyleProp<TextStyle>`    | `false`      | Стиль текста элемента в компоненте                           |
| `selectedTabStyle` | `StyleProp<ViewStyle>`    | `false`      | Стиль выбранного элемента в компоненте                       |
| `onChange`         | `(index: number) => void` | `true`       | Логика нажатия на элемент компонента                         |

---
