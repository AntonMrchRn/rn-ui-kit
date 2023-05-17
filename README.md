# rn-ui-kit

rn-ui-kit

## Installation

```sh
npm install "git+https://git@devgit.apteka-aprel.ru/mobile/rn-ui-kit"
npm install react-native-svg
```

or

```sh
yarn add "git+https://git@devgit.apteka-aprel.ru/mobile/rn-ui-kit"
yarn add react-native-svg
```

then

```sh
cd ios && pod install && cd ..
```

or

```sh
npx pod-install
```

## Usage

```js
import { SegmentedControl, ThemeProvider } from 'rn-ui-kit';

// ...

return (
  <ThemeProvider>
    <SegmentedControl
      tabs={['Label 1', 'Label 2', 'Label 3']}
      onChange={(index: number) => console.log('Index: ', index)}
    />
  </ThemeProvider>
);
```

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
