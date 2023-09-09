import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import {
  Input,
  InputCode,
  InputDate,
  InputPhone,
  InputTime,
  Spacer,
} from 'rn-ui-kit';

export const Inputs = () => {
  const inputRef = useRef<TextInput>(null);
  return (
    <Spacer size="xl">
      <Input
        variant="text"
        placeholder="Сообщение..."
        label="Label"
        hint="hint"
        iconLeft={
          <View style={{ height: 24, width: 24, backgroundColor: 'red' }} />
        }
      />
      <Input
        variant="message"
        placeholder="Сообщение..."
        isError
        label="Label"
        hint="error message"
      />
      <Input variant="message" placeholder="Сообщение..." editable={false} />
      <Input
        variant="text"
        placeholder="Placeholder"
        label="Label"
        hint="error message"
        onClear={() => inputRef?.current?.clear()}
        ref={inputRef}
      />
      <Input variant="password" label="Label" />
      <Input
        variant="textarea"
        value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, optio. Laboriosam iusto doloribus autem praesentium incidunt mollitia aliquid et minus pariatur voluptates. Illo provident laborum obcaecati placeat ducimus eveniet porro!"
        label="Label"
      />
      <Input
        value="test"
        variant="text"
        hint="error"
        isError={true}
        isAnimatedLabel
        label="I am label"
      />
      <Input
        variant="text"
        hint="error"
        isError={true}
        label="I am label"
        isAnimatedLabel
      />
      <Input variant="text" label="I am LABEL" isAnimatedLabel />
      <Input variant="text" value="test" label="I am label" isAnimatedLabel />
      <InputPhone value="78732847233" />
      <InputDate />
      <InputDate value={'140497'} />
      <InputDate isError value={'140497'} />
      <InputTime />
      <InputTime value={'1337'} />
      <InputTime isError value={'1337'} />
      <InputCode />
      <InputCode value={'123456'} />
    </Spacer>
  );
};
