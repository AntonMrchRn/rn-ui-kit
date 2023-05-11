import React from 'react';
import { Input, InputDate, InputPhone, InputTime } from 'rn-ui-kit';

export const Inputs = () => {
  return (
    <>
      <Input
        variant="message"
        placeholder="Сообщение..."
        label="Label"
        hint="hint"
      />
      <Input
        variant="message"
        placeholder="Сообщение..."
        isError
        label="Label"
        hint="error message"
      />
      <Input
        variant="text"
        placeholder="Placeholder"
        label="Label"
        hint="error message"
      />
      <Input variant="password" label="Label" />
      <Input
        variant="textarea"
        value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, optio. Laboriosam iusto doloribus autem praesentium incidunt mollitia aliquid et minus pariatur voluptates. Illo provident laborum obcaecati placeat ducimus eveniet porro!"
        label="Label"
      />
      <InputPhone />
      <InputDate />
      <InputDate value={'140497'} />
      <InputDate isError value={'140497'} />
      <InputTime />
      <InputTime value={'1337'} />
      <InputTime isError value={'1337'} />
    </>
  );
};
