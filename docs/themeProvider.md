# `<ThemeProvider />`

## Использование

Необходимо обернуть приложение в данный провайдер, для доступа к цветам и корректной работы компонентов библиотеки:

```js
import { ThemeProvider } from 'rn-ui-kit';

// ...

return (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

## Пропсы

| Проп    | Тип      | Обязательный | Заметка                                                                                                      |
| ------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| `theme` | `Colors` | `false`      | Принимает в себя обьект, с помощью которого можно переназначить определенные заданные цвета в палетке своими |

## Типы

```
type Colors = {
  text: {
    basic: string;
    neutral: string;
    neutralDisable: string;
    contrast: string;
    accent: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
  };
  icons: {
    basic: string;
    neutral: string;
    neutralDisable: string;
    contrast: string;
    accent: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
  };
  background: {
    main: string;
    neutralDisable: string;
    neutralDisableSecond: string;
    accent: string;
    accentDisable: string;
    accentMessage: string;
    fieldMain: string;
    secondary: string;
    secondaryDisable: string;
    secondaryBadge: string;
    success: string;
    fieldSuccess: string;
    danger: string;
    dangerDisable: string;
    fieldDanger: string;
    fieldWarning: string;
    modal: string;
    tooltip: string;
    specialLight: string;
    special: string;
  };
  stroke: {
    accent: string;
    accentDisable: string;
    secondary: string;
    disableDivider: string;
    neutral: string;
    success: string;
    successDisable: string;
    danger: string;
    dangerDisable: string;
    warning: string;
    warningDisable: string;
  };
};
```

---
