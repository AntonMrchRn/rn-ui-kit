# `<Button />`

## Пропсы

Принимает в себя все стандартные пропсы компонента TouchableOpacity из React Native а также следующие:

| Пропс        | Тип                        | Обязательный | Описание                                                                    |
| ------------ | -------------------------- | ------------ | --------------------------------------------------------------------------- |
| `icon`       | `ReactElement или boolean` | `false`      | Тип иконки компонента. Может быть стандартной, кастомной или не быть совсем |
| `size`       | `Sizes`                    | `false`      | Размер компонента. По умолчанию 'M'                                         |
| `label`      | `string`                   | `false`      | Лейбл компонента                                                            |
| `labelStyle` | `StyleProp<TextStyle>`     | `false`      | Стиль лейбла компонента                                                     |
| `isPending`  | `boolean`                  | `false`      | Показывает ActivityIndicator вместо иконки                                  |
| `variant`    | `Variant`                  | `false`      | Тип компонента. По умолчанию 'accent'                                       |

## Типы

```js
type Sizes = 'M' | 'S';

type Variant =
  | 'accent'
  | 'danger'
  | 'outlineAccent'
  | 'outlineDanger'
  | 'ghost'
  | 'dangerGhost'
  | 'secondary';
```

---
