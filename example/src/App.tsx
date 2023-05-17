import { useFonts } from 'expo-font';
import * as React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Texts } from './components/Texts';
import { CheckBoxes } from './components/Checkboxes';
import { SegmentedControl, Spacer, SwipeList, ThemeProvider } from 'rn-ui-kit';
import { Links } from './components/Links';
import { Spacers } from './components/Spacers';
import { RadioButtons } from './components/RadioButtons';
import { Inputs } from './components/Inputs';
import { Switches } from './components/Switches';
import { Tooltips } from './components/Tooltips';
import { Badges } from './components/Badges';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Open Sans Bold': require('../assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    'Open Sans Semibold': require('../assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
    'Nunito Sans Regular': require('../assets/fonts/NunitoSans_7pt/NunitoSans_7pt-Regular.ttf'),
    'Nunito Sans Bold': require('../assets/fonts/NunitoSans_7pt/NunitoSans_7pt-Bold.ttf'),
    'Nunito Sans Semibold': require('../assets/fonts/NunitoSans_7pt/NunitoSans_7pt-SemiBold.ttf'),
  });

  const swipeListData = [
    {
      id: 'item1',
      label: 'Изменено исполнителем',
      title:
        'Очень длинное название услуги / материала, возможно на 2-3 строчки',
      items: [
        {
          id: 'i1',
          text: '10000',
        },
        {
          id: 'i2',
          text: '1000',
        },
        {
          id: 'i3',
          text: '100',
        },
      ],
    },
    {
      id: 'item2',
      label: 'Изменено исполнителем',
      title:
        'Очень длинное название услуги / материала, возможно на 2-3 строчки',
      items: [
        { id: 'ii1', text: '10000' },
        { id: 'ii2', text: '1000' },
        { id: 'ii3', text: '100' },
      ],
    },
    {
      id: 'item3',
      label: 'Изменено исполнителем',
      title:
        'Очень длинное название услуги / материала, возможно на 2-3 строчки',
      items: [
        { id: 'iii1', text: '10000' },
        { id: 'iii2', text: '1000' },
        { id: 'iii3', text: '100' },
      ],
    },
  ];

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SwipeList
        data={swipeListData}
        fistAction={() => {}}
        secondAction={() => {}}
      />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
        <ThemeProvider>
          <Spacer size={'xxl'} separator="bottom">
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
              <CheckBoxes />
              <RadioButtons />
              <Switches />
            </View>
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
          </Spacer>
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
}
