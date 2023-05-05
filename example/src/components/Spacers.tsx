import React from 'react';
import { View } from 'react-native';
import { Spacer, Text } from 'rn-ui-kit';

export const Spacers = () => {
  return (
    <>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Spacer size={'xs'}>
          <Text variant={'title3'}>xs</Text>
          <Text variant={'title3'}>xs</Text>
          <Text variant={'title3'}>xs</Text>
        </Spacer>
        <Spacer size={'s'}>
          <Text variant={'title3'}>s</Text>
          <Text variant={'title3'}>s</Text>
          <Text variant={'title3'}>s</Text>
        </Spacer>
        <Spacer size={'m'}>
          <Text variant={'title3'}>m</Text>
          <Text variant={'title3'}>m</Text>
          <Text variant={'title3'}>m</Text>
        </Spacer>
        <Spacer size={'l'}>
          <Text variant={'title3'}>l</Text>
          <Text variant={'title3'}>l</Text>
          <Text variant={'title3'}>l</Text>
        </Spacer>
        <Spacer size={'xl'}>
          <Text variant={'title3'}>xl</Text>
          <Text variant={'title3'}>xl</Text>
          <Text variant={'title3'}>xl</Text>
        </Spacer>
        <Spacer size={'xxl'}>
          <Text variant={'title3'}>xxl</Text>
          <Text variant={'title3'}>xxl</Text>
          <Text variant={'title3'}>xxl</Text>
        </Spacer>
        <Spacer size={'xs'} horizontal>
          <Text variant={'title3'}>xs</Text>
          <Text variant={'title3'}>xs</Text>
          <Text variant={'title3'}>xs</Text>
        </Spacer>
        <Spacer size={'s'} horizontal>
          <Text variant={'title3'}>s</Text>
          <Text variant={'title3'}>s</Text>
          <Text variant={'title3'}>s</Text>
        </Spacer>
        <Spacer size={'m'} horizontal>
          <Text variant={'title3'}>m</Text>
          <Text variant={'title3'}>m</Text>
          <Text variant={'title3'}>m</Text>
        </Spacer>
      </View>
    </>
  );
};
