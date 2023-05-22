import React from 'react';
import { Banner, Spacer } from 'rn-ui-kit';

export const Banners = () => {
  return (
    <Spacer size={'l'}>
      <Banner
        type="error"
        icon="alert"
        title="Заголовок на 1 строчку!"
        text="Координатор проверяет выполненные услуги. После успешной проверки задача будет передана на оплату"
        buttonText="Какое-то действие"
      />
      <Banner type="success" icon="success" />
      <Banner type="warning" icon="alert" />
      <Banner type="info" icon="info" />
    </Spacer>
  );
};
