import React from 'react';
import { View } from 'react-native';
import { MyLink } from '../../src/components/MyLink';
import { LinkProps } from '../../../lib/typescript/components/Link';

const MyLinkMeta = {
  title: 'Link',
  component: MyLink,
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyLinkMeta;

const basicProps: LinkProps = {
  url: 'https://www.google.ru/?hl=ru',
  label: 'Link to Google',
  size: 'M',
};
export const Basic = {
  args: basicProps,
};
