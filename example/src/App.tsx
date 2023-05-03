import { useFonts } from 'expo-font';
import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Text } from 'rn-ui-kit';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Open Sans Bold': require('../assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    'Open Sans Semibold': require('../assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
    'Nunito Sans Regular': require('../assets/fonts/NunitoSans_7pt/NunitoSans_7pt-Regular.ttf'),
    'Nunito Sans Bold': require('../assets/fonts/NunitoSans_7pt/NunitoSans_7pt-Bold.ttf'),
    'Nunito Sans Semibold': require('../assets/fonts/NunitoSans_7pt/NunitoSans_7pt-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <Text variant={'title1'}>title1</Text>
        <Text variant={'title2'}>title2</Text>
        <Text variant={'title3'}>title3</Text>
        <Text variant={'bodyMRegular'}>bodyMRegular</Text>
        <Text variant={'bodyMBold'}>bodyMBold</Text>
        <Text variant={'bodySRegular'}>bodySRegular</Text>
        <Text variant={'bodySBold'}>bodySBold</Text>
        <Text variant={'captionRegular'}>captionRegular</Text>
        <Text variant={'captionBold'}>captionBold</Text>
        <Text variant={'tabBarLabel'}>tabBarLabel</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
