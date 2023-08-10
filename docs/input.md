# `<Input />`

## Пропсы

Принимает в себя все стандартные пропсы компонента TextInput из React Native а также следующие:

| Пропс            | Тип                    | Обязательный | Описание                                                   |
| ---------------- | ---------------------- | ------------ | ---------------------------------------------------------- |
| `isError`        | `boolean`              | `false`      | Отображение компонента в стиле ошибки                      |
| `label`          | `string`               | `false`      | Лейбл компонента                                           |
| `labelStyle`     | `StyleProp<TextStyle>` | `false`      | Стиль лейбла компонента                                    |
| `hint`           | `string`               | `false`      | Подсказка компонента                                       |
| `hintStyle`      | `StyleProp<TextStyle>` | `false`      | Стиль подсказки компонента                                 |
| `containerStyle` | `StyleProp<ViewProps>` | `false`      | Стиль контейнера компонента                                |
| `variant`        | `Variant`              | `true`       | Тип компонента                                             |
| `onClear`        | `() => void`           | `false`      | Логика нажатия на иконку крестика, если variant === 'text' |
| `iconLeft`       | `JSX.Element`          | `false`      | Иконка слева от инпута                                     |
| `iconLeftStyle`  | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера иконки слева от инпута                    |

## Типы

```ts
type Variant = 'text' | 'message' | 'password' | 'textarea' | 'number';
```

---
