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
yarn prepack
```

Далее изменить версию проекта в package.json. Далее необходимо закоммитить изменения, залить через MR в основную ветку и добавить Tag в GitLab на соответствующий текущей версии библиотеки описать список изменений.

# История изменений

[`Посмотреть историю изменений`](https://devgit.apteka-aprel.ru/mobile/rn-ui-kit/-/tags)

# Установка

```sh
yarn add "git+https://git@devgit.apteka-aprel.ru/mobile/rn-ui-kit#0.1.0"
yarn add react-native-svg
yarn add react-native-confirmation-code-field
yarn add react-native-mask-input
yarn add react-native-modal
yarn add react-native-swipe-list-view
yarn add react-native-switch
yarn add react-native-safe-area-context
yarn add react-native-reanimated
yarn add react-native-gesture-handler
yarn add @gorhom/bottom-sheet
```

затем нужно установить поды, например так:

```sh
npx pod-install
```

Для установки библиотек react-native-reanimated и react-native-gesture-handler необходимо будет проделать дополнительные манипуляции, описанные в документации на их сайтах

# Шрифты

Для работы с библиотекой необходимо установить следующий набор шрифтов:

'Open Sans Bold'

'Open Sans SemiBold'

'Nunito Sans Regular'

'Nunito Sans Bold'

'Nunito Sans SemiBold'

Данные шрифты присутствуют в папке example/assets/fonts

# Использование

```js
import { ToastProvider, ThemeProvider } from 'rn-ui-kit';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
// ...

return (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </BottomSheetModalProvider>
  </GestureHandlerRootView>
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

[`<Modal />`](docs/modal.md)

[`<RadioButton />`](docs/radioButton.md)

[`<SegmentedControl />`](docs/segmentedControl.md)

[`<Spacer />`](docs/spacer.md)

[`<Swipeable />`](docs/swipeable.md)

[`<Switch />`](docs/switch.md)

[`<TabControl />`](docs/tabControl.md)

[`<Tips />`](docs/tips.md)

[`<Tooltip />`](docs/tooltip.md)

[`<BottomSheetModal />`](docs/bottomSheetModal.md)

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
