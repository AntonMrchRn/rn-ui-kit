import { useFonts } from 'expo-font';
import * as React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Texts } from './components/Texts';
import { CheckBoxes } from './components/Checkboxes';
import {
  SegmentedControl,
  Spacer,
  ThemeProvider,
  ToastProvider,
} from 'rn-ui-kit';
import { Links } from './components/Links';
import { Spacers } from './components/Spacers';
import { RadioButtons } from './components/RadioButtons';
import { Inputs } from './components/Inputs';
import { Switches } from './components/Switches';
import { Tooltips } from './components/Tooltips';
import { Badges } from './components/Badges';
import { TabControls } from './components/TabControls';
import { Modals } from './components/Modals';
import { Tipses } from './components/Tipses';
import { Banners } from './components/Banners';
import { Cards } from './components/Cards';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Toasts } from './components/Toasts';
import { Buttons } from './components/Buttons';
import { BottomSheets } from './components/BottomSheets';

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
    <SafeAreaProvider>
      <ThemeProvider>
        <ToastProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
              <Spacer size={'xxl'} separator="bottom">
                <Toasts />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}
                >
                  <CheckBoxes />
                  <RadioButtons />
                  <Switches />
                </View>
                <BottomSheets />
                <TabControls />
                <Buttons />
                <Cards />
                <Texts />
                <SegmentedControl
                  tabs={['Label 1', 'Label 2', 'Label 3']}
                  onChange={() => {}}
                />
                <Links />
                <Spacers />
                <Inputs />
                <Tooltips />
                <Badges />
                <Modals />
                <Tipses />
                <Banners />
              </Spacer>
            </ScrollView>
            {/* <SwipeLists /> */}
          </SafeAreaView>
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
