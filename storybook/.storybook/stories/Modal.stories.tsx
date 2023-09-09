import React from 'react';
import { View } from 'react-native';
import { MyModal } from '../../src/components/MyModal';
import { ModalProps } from '../../../lib/typescript/components/Modal';

const MyModalMeta = {
  title: 'Modal',
  component: MyModal,
  decorators: [
    (Story) => (
      <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyModalMeta;

const basicProps: ModalProps = {
  closeIcon: true,
  title: 'title',
  description: 'description',
};
export const Basic = {
  args: basicProps,
};
