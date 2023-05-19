import React, { useState } from 'react';
import { Modal, Text } from 'rn-ui-kit';

export const Modals = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <Modal
        isVisible={state}
        onBackdropPress={() => setState(false)}
        closeIconPress={() => setState(false)}
        closeIcon
        headerIcon="error"
        title="Превышен лимит загрузки"
        description="Общий размер загружаемых файловне должен превышать 50 МВ"
      />
      <Text variant="title3" onPress={() => setState(true)}>
        open modal
      </Text>
    </>
  );
};
