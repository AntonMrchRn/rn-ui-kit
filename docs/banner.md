# `<Badge />`

## Пропсы

| Пропс             | Тип                    | Обязательный | Описание                                                                         |
| ----------------- | ---------------------- | ------------ | -------------------------------------------------------------------------------- |
| `type`            | `Types`                | `true`       | Тип компонента                                                                   |
| `icon`            | `IconTypes`            | `true`       | Тип иконки. Может быть одним из стандартных типов, кастомной, лиюо может не быть |
| `iconStyle`       | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера иконки                                                          |
| `containerStyle`  | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера компонента                                                      |
| `closeIcon`       | `JSX.Element`          | `false`      | Кастомная иконка закрытия баннера                                                |
| `title`           | `string`               | `false`      | Заголовок баннера                                                                |
| `titleStyle`      | `StyleProp<TextStyle>` | `false`      | Стиль заголовка баннера                                                          |
| `text`            | `string`               | `false`      | Основной текст баннера                                                           |
| `textStyle`       | `StyleProp<TextStyle>` | `false`      | Стиль основного текста баннера                                                   |
| `iconColor`       | `string`               | `false`      | Выбор кастомного цвета основной иконки баннера, если не выбрана кастомная        |
| `onClosePress`    | `() => void`           | `false`      | Логика нажатия на иконку закрытия баннера                                        |
| `buttonText`      | `string`               | `false`      | Текст кнопки баннера                                                             |
| `onButtonPress`   | `() => void`           | `false`      | Логика нажатия на кнопку баннера                                                 |
| `buttonStyle`     | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера кнопки баннера                                                  |
| `buttonTextStyle` | `StyleProp<TextStyle>` | `false`      | Стиль текста кнопки баннера                                                      |

## Типы

```js
type Types = 'error' | 'success' | 'warning' | 'info';

type IconTypes = 'success' | 'info' | 'alert' | JSX.Element;
```

---
