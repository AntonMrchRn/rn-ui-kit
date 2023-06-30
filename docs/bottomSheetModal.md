# `<BottomSheetModal />`

## Пропсы

Принимает в себя все стандартные пропсы компонента BottomSheetModal из '@gorhom/bottom-sheet' а также следующие:

| Пропс             | Тип                             | Обязательный | Описание                                                                        |
| ----------------- | ------------------------------- | ------------ | ------------------------------------------------------------------------------- |
| `onBackdropPress` | `() => void`                    | `false`      | Логика нажатия на задний фон компонента                                         |
| `closeIconPress`  | `() => void`                    | `false`      | Логика нажатия на иконку закрытия компонента                                    |
| `closeIcon`       | `JSX.Element или true`          | `false`      | Иконка закрытия компонента. Может быть стандартной, кастомной или может не быть |
| `title`           | `string`                        | `false`      | Заголовок компонента                                                            |
| `titleStyle`      | `StyleProp<TextStyle>`          | `false`      | Стиль заголовка компонента                                                      |
| `subtitle`        | `string`                        | `false`      | Подзаголовок компонента                                                         |
| `subtitleStyle`   | `StyleProp<TextStyle>`          | `false`      | Стиль подзаголовка компонента                                                   |
| `children`        | `JSX.Element или JSX.Element[]` | `false`      | Элемент или массив элементов, отображаемые в компоненте                         |

## Типы

```js
type Variant = 'text' | 'message' | 'password' | 'textarea';
```

---
