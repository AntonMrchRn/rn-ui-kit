# rn-ui-kit

# Разработка

После скачивания библиотеки, необходимо установить нод модули как в основной директории, так и в директории example

```sh
yarn
cd example
yarn
```

Компоненты библиотеки лежат в папке src основной директории, компоненты примера реализации лежат в проекте example.
Для запуска примера, необходимо перейти в директорию example и выполнить соответствующий скрипт для определенной платформы (ios/android). После применения изменений, необходимо в основной директории проекта воспользоваться командой prepare, для создания файлов в папке lib (они и используются в проектах).

```sh
yarn prepare
```

Далее изменить версию проекта в package.json и описать список изменений в README. Далее необходимо закоммитить изменения, залить через MR в основную ветку и заменить label ветки на соответствующий текущей версии библиотеки.

# История изменений

### 0.1.0

- Первая версия библиотеки

# Установка

```sh
yarn add "git+https://git@devgit.apteka-aprel.ru/mobile/rn-ui-kit"
yarn add react-native-svg
yarn add react-native-confirmation-code-field
yarn add react-native-mask-input
yarn add react-native-modal
yarn add react-native-swipe-list-view
yarn add react-native-switch
yarn add react-native-safe-area-context
```

затем

```sh
npx pod-install
```

# Провайдер

```js
import { ToastProvider, ThemeProvider } from 'rn-ui-kit';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// ...

return (
  <SafeAreaProvider>
    <ThemeProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ThemeProvider>
  </SafeAreaProvider>
);
```

# Использование

```js
import { ToastProvider, ThemeProvider } from 'rn-ui-kit';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// ...

return (
  <SafeAreaProvider>
    <ThemeProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ThemeProvider>
  </SafeAreaProvider>
);
```

# Компоненты

[`<Text />`](docs/text.md)

[`<ThemeProvider />`](docs/themeProvider.md)

[`<Toast />`](docs/toast.md)

[`<Badge />`](docs/badge.md)

[`<Banner />`](docs/banner.md)

[`<BottomSheet />`](docs/bottomSheet.md)

[`<Button />`](docs/button.md)

[`<Card />`](docs/card.md)

[`<CheckBox />`](docs/checkbox.md)

[`<Chips />`](docs/chips.md)

[`<Input />`](docs/input.md)

[`<InputCode />`](docs/inputCode.md)

[`<InputDate />`](docs/inputDate.md)

[`<InputTime />`](docs/inputTime.md)

[`<InputPhone />`](docs/inputPhone.md)

[`<Link />`](docs/link.md)

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
