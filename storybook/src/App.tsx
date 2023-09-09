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
import { Chipses } from './components/Chipses';
import { Swipeables } from './components/Swipeables';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Open Sans': require('../assets/fonts/OpenSans.ttf'),
    'Nunito Sans': require('../assets/fonts/NunitoSans.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <ThemeProvider>
            <ToastProvider>
              <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
                  <Spacer size={'xxl'}>
                    <Spacer size={'xxl'} horizontal />
                    <Spacer size={'xxl'} />
                    <Spacer size={'xxl'} />
                    <SegmentedControl
                      tabs={['Label 1', 'Label 2', 'Label 3']}
                      onChange={() => {}}
                    />
                    <TabControls />
                    <Swipeables />
                    <Cards />

                    <Badges />
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
                    <Buttons />
                    <Texts />
                    <Chipses />
                    <Links />
                    <Spacers />
                    <Inputs />
                    <Tooltips />
                    <Modals />
                    <Tipses />
                    <Banners />
                  </Spacer>
                </ScrollView>
              </SafeAreaView>
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
