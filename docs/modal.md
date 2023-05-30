# `<Modal />`

## Пропсы

| Пропс                      | Тип                             | Обязательный | Описание                                                                                        |
| -------------------------- | ------------------------------- | ------------ | ----------------------------------------------------------------------------------------------- |
| `animationIn`              | `Animation`                     | `false`      | Анимация появления компонента                                                                   |
| `animationInTiming`        | `number`                        | `false`      | Задержка в милисекундах перед появлением компонента                                             |
| `animationOutTiming`       | `number`                        | `false`      | Задержка в милисекундах перед исчезновением компонента                                          |
| `animationOut`             | `Animation`                     | `false`      | Анимация исчезновения компонента                                                                |
| `isVisible`                | `boolean`                       | `false`      | Управление состоянием видимости компонента                                                      |
| `avoidKeyboard`            | `boolean`                       | `false`      | Учитывать появление клавиатуры устройства                                                       |
| `backdropColor`            | `string`                        | `false`      | Цвет заднего фона компонента                                                                    |
| `backdropOpacity`          | `number`                        | `false`      | Непрозрачность заднего фона компонента. По умолчанию 1                                          |
| `onBackdropPress`          | `() => void`                    | `false`      | Логика нажатия на задний фон компонента                                                         |
| `modalStyle`               | `StyleProp<ViewStyle>`          | `false`      | Стиль модального окна компонента                                                                |
| `containerStyle`           | `StyleProp<ViewStyle>`          | `false`      | Стиль контейнера компонента                                                                     |
| `closeIconContainerStyle`  | `StyleProp<ViewStyle>`          | `false`      | Стиль контейнера иконки закрытия компонента                                                     |
| `closeIconPress`           | `() => void`                    | `false`      | Логика нажатия на иконку закрытия компонента                                                    |
| `closeIcon`                | `JSX.Element или true`          | `false`      | Иконка закрытия компонента. Может быть стандартной, кастомной или может не быть                 |
| `title`                    | `string`                        | `false`      | Заголовок компонента                                                                            |
| `titleStyle`               | `StyleProp<TextStyle>`          | `false`      | Стиль заголовка компонента                                                                      |
| `description`              | `string`                        | `false`      | Текст описания компонента                                                                       |
| `descriptionStyle`         | `StyleProp<TextStyle>`          | `false`      | Стиль текста описания компонента                                                                |
| `children`                 | `JSX.Element или JSX.Element[]` | `false`      | Элемент или массив элементов, отображаемые в компоненте                                         |
| `headerIcon`               | `HeaderIcon`                    | `false`      | Основная иконка компонента. Может быть одной из стандартных, кастомной или может не быть совсем |
| `headerIconContainerStyle` | `StyleProp<ViewStyle>`          | `false`      | Стиль контейнера основной иконки компонента                                                     |

## Типы

```js
type HeaderIcon = 'limit' | 'error' | JSX.Element;
type Animation =
  | 'bounce'
  | 'flash'
  | 'jello'
  | 'pulse'
  | 'rotate'
  | 'rubberBand'
  | 'shake'
  | 'swing'
  | 'tada'
  | 'wobble'
  | 'bounceIn'
  | 'bounceInDown'
  | 'bounceInUp'
  | 'bounceInLeft'
  | 'bounceInRight'
  | 'bounceOut'
  | 'bounceOutDown'
  | 'bounceOutUp'
  | 'bounceOutLeft'
  | 'bounceOutRight'
  | 'fadeIn'
  | 'fadeInDown'
  | 'fadeInDownBig'
  | 'fadeInUp'
  | 'fadeInUpBig'
  | 'fadeInLeft'
  | 'fadeInLeftBig'
  | 'fadeInRight'
  | 'fadeInRightBig'
  | 'fadeOut'
  | 'fadeOutDown'
  | 'fadeOutDownBig'
  | 'fadeOutUp'
  | 'fadeOutUpBig'
  | 'fadeOutLeft'
  | 'fadeOutLeftBig'
  | 'fadeOutRight'
  | 'fadeOutRightBig'
  | 'flipInX'
  | 'flipInY'
  | 'flipOutX'
  | 'flipOutY'
  | 'lightSpeedIn'
  | 'lightSpeedOut'
  | 'slideInDown'
  | 'slideInUp'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideOutDown'
  | 'slideOutUp'
  | 'slideOutLeft'
  | 'slideOutRight'
  | 'zoomIn'
  | 'zoomInDown'
  | 'zoomInUp'
  | 'zoomInLeft'
  | 'zoomInRight'
  | 'zoomOut'
  | 'zoomOutDown'
  | 'zoomOutUp'
  | 'zoomOutLeft'
  | 'zoomOutRight';
```

---
