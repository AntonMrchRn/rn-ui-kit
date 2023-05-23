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
        visible={true}
      />
      <Banner type="success" icon="success" visible={true} />
      <Banner type="warning" icon="alert" visible={true} />
      <Banner type="info" icon="info" visible={true} />
    </Spacer>
  );
};
