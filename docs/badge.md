# `<Badge />`

## Пропсы

Принимает в себя все стандартные пропсы компонента View из React Native а также следующие:

| Пропс        | Тип                        | Обязательный | Описание                                                           |
| ------------ | -------------------------- | ------------ | ------------------------------------------------------------------ |
| `variant`    | `Variant`                  | `false`      | Ключевой параметр, который определяет тип. По умолчанию - 'accent' |
| `icon`       | `ReactElement или boolean` | `false`      | Иконка компонента. Может быть стандартной, кастомной или не быть   |
| `label`      | `string`                   | `false`      | Лейбл компонента                                                   |
| `labelStyle` | `StyleProp<TextStyle>`     | `false`      | Стиль лейбла компонента                                            |
| `secondary`  | `boolean`                  | `false`      | Если true, то тип сменится на второстепенный                       |
| `iconStyle`  | `StyleProp<ViewStyle>`     | `false`      | Стиль контейнера иконки компонента                                 |

## Типы

```js
type Variant =
  | 'accent'
  | 'danger'
  | 'secondary'
  | 'warning'
  | 'success'
  | 'basic'
  | 'special';
```

---
