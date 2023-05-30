# `<Tooltip />`

## Пропсы

| Пропс            | Тип                    | Обязательный | Описание                                                                                       |
| ---------------- | ---------------------- | ------------ | ---------------------------------------------------------------------------------------------- |
| `title`          | `string`               | `false`      | Заголовок компонента                                                                           |
| `containerStyle` | `StyleProp<ViewStyle>` | `false`      | Стиль контейнера компонента                                                                    |
| `text`           | `string`               | `true`       | Основной текст компонента                                                                      |
| `textStyle`      | `StyleProp<TextStyle>` | `false`      | Стиль основного текста компонента                                                              |
| `triangleStyle`  | `StyleProp<ViewStyle>` | `false`      | Стиль треугольника компонента                                                                  |
| `titleStyle`     | `StyleProp<TextStyle>` | `false`      | Стиль заголовка компонента                                                                     |
| `triangleIcon`   | `JSX.Element`          | `false`      | Иконка треугольника                                                                            |
| `children`       | `JSX.Element`          | `false`      | Дочерний элемент компонента                                                                    |
| `triangleEdge`   | `TriangleEdge`         | `false`      | Позиция стороны треугольника относительно компонента. По умолчанию 'top'                       |
| `triagnleAlign`  | `TriagnleAlign`        | `false`      | Позиция треугольника относительно выбранной стороны компонента. По умолчанию 'start'           |
| `isVisible`      | `boolean`              | `false`      | Отвечает за показ компонента                                                                   |
| `onClose`        | `() => void`           | `false`      | Логика отвечающая за закрытие компонента                                                       |
| `coords`         | `Coords`               | `false`      | Координаты компонента по осям x y относительно дочернего элемента. По умолчанию { x: 0, y: 0 } |

## Типы

```js
type TriangleEdge = 'top' | 'left' | 'bottom' | 'right';
type TriagnleAlign = 'start' | 'center' | 'end';
type Coords = { x: number, y: number };
```

---
