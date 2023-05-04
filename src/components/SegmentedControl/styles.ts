import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
import { CustomStyleProp } from '.';
const { width: ScreenWidth } = Dimensions.get('screen');

export const _containerStyle = (width?: number): ViewStyle => ({
  width: width || ScreenWidth - 32,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 8,
  backgroundColor: '#F3F5F6',
});

export const _selectedTabStyle = (
  tabs: any[],
  activeTabColor: string,
  translateXAnimation: any,
  width?: number
): CustomStyleProp => [
  {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    marginVertical: 2,
    marginHorizontal: 2,
    width: (width ? width - 8 : ScreenWidth - 35) / tabs?.length,
    backgroundColor: activeTabColor,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
    transform: [
      {
        translateX: translateXAnimation,
      },
    ],
  },
];

export default StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: '#ECF2FF',
    borderRadius: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 8, // iOS Default
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderWidth: 1,
    borderColor: '#3F51B5',
    borderRadius: 7,
  },
  textStyle: {
    fontFamily: 'Nunito Sans Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
  },
  activeTextStyle: {
    fontFamily: 'Nunito Sans Bold',
    fontWeight: '700',
  },
});
