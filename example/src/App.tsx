import { useFonts } from 'expo-font';
import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Texts } from './components/Texts';
import { CheckBoxes } from './components/Checkboxes';
import { SegmentedControl, ThemeProvider } from 'rn-ui-kit';
import { Links } from './components/Links';
import { Spacers } from './components/Spacers';

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
        <ThemeProvider>
          <CheckBoxes />
          <Texts />
          <SegmentedControl
            tabs={['Label 1', 'Label 2', 'Label 3']}
            onChange={(index: number) => console.log('Index: ', index)}
          />
          <Links />
          <Spacers />
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
}
