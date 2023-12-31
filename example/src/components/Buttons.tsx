import React from 'react';
import { Button, Spacer } from 'rn-ui-kit';

export const Buttons = () => {
  return (
    <Spacer size="s">
      <Button variant="accent" label="Отправить" isPending />
      <Button variant="outlineAccent" label="Добавить" icon disabled />
      <Button variant="danger" label="Да, удалить" />
      <Button variant="outlineDanger" label="Отправка" />
      <Button variant="outlineAccent" label="Отправка" disabled isPending />
      <Button variant="ghost" label="Отправка" icon disabled />
      <Button variant="dangerGhost" label="Отправка" icon size="S" />
      <Button
        variant="accent"
        label="Для теста много текста"
        size="S"
        isPending
      />
      <Button variant="outlineDanger" label="Мало" size="S" />
      <Button variant="outlineAccent" size="M" disabled label="test" icon />
      <Spacer size="s">
        <Button variant="secondary" icon size="M" label="Label" />
      </Spacer>
    </Spacer>
  );
};
