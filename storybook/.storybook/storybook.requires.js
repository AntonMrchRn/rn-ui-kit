/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./.storybook/stories",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:\\.storybook\\/stories(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./.storybook/stories/Badge.stories.tsx": require("./stories/Badge.stories.tsx"),
    "./.storybook/stories/Banner.stories.tsx": require("./stories/Banner.stories.tsx"),
    "./.storybook/stories/BottomSheet.stories.tsx": require("./stories/BottomSheet.stories.tsx"),
    "./.storybook/stories/Button.stories.tsx": require("./stories/Button.stories.tsx"),
    "./.storybook/stories/CheckBox.stories.tsx": require("./stories/CheckBox.stories.tsx"),
    "./.storybook/stories/Chips.stories.tsx": require("./stories/Chips.stories.tsx"),
    "./.storybook/stories/Input.stories.tsx": require("./stories/Input.stories.tsx"),
    "./.storybook/stories/InputCode.stories.tsx": require("./stories/InputCode.stories.tsx"),
    "./.storybook/stories/InputDate.stories.tsx": require("./stories/InputDate.stories.tsx"),
    "./.storybook/stories/InputPhone.stories.tsx": require("./stories/InputPhone.stories.tsx"),
    "./.storybook/stories/InputTime.stories.tsx": require("./stories/InputTime.stories.tsx"),
    "./.storybook/stories/Link.stories.tsx": require("./stories/Link.stories.tsx"),
    "./.storybook/stories/Modal.stories.tsx": require("./stories/Modal.stories.tsx"),
    "./.storybook/stories/RadioButton.stories.tsx": require("./stories/RadioButton.stories.tsx"),
    "./.storybook/stories/Swipeable.stories.tsx": require("./stories/Swipeable.stories.tsx"),
    "./.storybook/stories/Switch.stories.tsx": require("./stories/Switch.stories.tsx"),
    "./.storybook/stories/TabControl.stories.tsx": require("./stories/TabControl.stories.tsx"),
    "./.storybook/stories/Text.stories.tsx": require("./stories/Text.stories.tsx"),
    "./.storybook/stories/Tips.stories.tsx": require("./stories/Tips.stories.tsx"),
  };
};

configure(getStories, module, false);
