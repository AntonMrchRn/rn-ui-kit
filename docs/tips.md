# `<Tips />`

## Пропсы

| Пропс             | Тип                    | Обязательный | Описание                            |
| ----------------- | ---------------------- | ------------ | ----------------------------------- |
| `type`            | `Types`                | `true`       | Тип компонента                      |
| `containerStyle`  | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера компонента         |
| `text`            | `string`               | `false`      | Основной текст компонента           |
| `textStyle`       | `StyleProp<TextStyle>` | `false`      | Стиль основного текста компонента   |
| `buttonText`      | `string`               | `false`      | Текст кнопки компонента             |
| `onButtonPress`   | `() => void`           | `false`      | Логика нажатия на кнопку компонента |
| `buttonStyle`     | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера кнопки компонента  |
| `buttonTextStyle` | `StyleProp<TextStyle>` | `false`      | Стиль текста кнопки компонента      |

## Типы

```js
type Types = 'error' | 'success' | 'warning' | 'info';
```

---
