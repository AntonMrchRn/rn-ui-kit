import React, { useState, useEffect } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import {
  Text,
  Animated,
  StyleProp,
  ViewStyle,
  Dimensions,
  TouchableOpacity,
  TextStyle,
  I18nManager,
  StyleSheet,
} from 'react-native';

export type CustomStyleProp =
  | StyleProp<ViewStyle>
  | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

type SegmentedControlProps = {
  tabs: string[];
  width?: number;
  initialIndex?: number;
  activeTextStyle?: StyleProp<TextStyle>;
  activeTabColor?: string;
  extraSpacing?: number;
  style?: CustomStyleProp;
  tabStyle?: CustomStyleProp;
  textStyle?: CustomTextStyleProp;
  selectedTabStyle?: CustomStyleProp;
  onChange: (index: number) => void;
};

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  style,
  tabs,
  width,
  onChange,
  tabStyle,
  textStyle,
  selectedTabStyle,
  initialIndex = 0,
  activeTextStyle,
  activeTabColor = '#FFFFFF',
  extraSpacing = 0,
}) => {
  const theme = useTheme();
  const { width: ScreenWidth } = Dimensions.get('screen');

  const styles = StyleSheet.create({
    container: {
      padding: 2,
      backgroundColor: theme.background.fieldMain,
      borderRadius: 8,
    },
    tab: {
      flex: 1,
      paddingVertical: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeTab: {
      borderWidth: 1,
      borderColor: theme.stroke.accent,
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

  const _containerStyle = (): ViewStyle => ({
    width: width || ScreenWidth - 32,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F3F5F6',
  });

  const _selectedTabStyle = (translateXAnimation: any): CustomStyleProp => [
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

  const translateValue =
    (width ? width + extraSpacing : ScreenWidth - 35) / tabs.length;
  const [slideAnimation, _] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  const handleTabPress = React.useCallback(
    (index) => {
      setCurrentIndex(index);
      onChange && onChange(index);
    },
    [onChange]
  );

  useEffect(() => {
    Animated.spring(slideAnimation, {
      toValue: (I18nManager.isRTL ? -1 : 1) * currentIndex * translateValue,
      stiffness: 180,
      damping: 25,
      mass: 1,
      useNativeDriver: true,
    }).start();
  }, [currentIndex, slideAnimation, translateValue]);

  const renderSelectedTab = () => (
    <Animated.View
      style={[
        _selectedTabStyle(slideAnimation),
        styles.activeTab,
        selectedTabStyle,
      ]}
    />
  );

  const renderTab = (tab: string, index: number) => {
    const isActiveTab = currentIndex === index;
    const isTabText = typeof tab === 'string';
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.5}
        style={[styles.tab, tabStyle]}
        onPress={() => handleTabPress(index)}
      >
        {!isTabText ? (
          tab
        ) : (
          <Text
            numberOfLines={1}
            style={[
              styles.textStyle,
              textStyle,
              isActiveTab && styles.activeTextStyle,
              isActiveTab && activeTextStyle,
            ]}
          >
            {tab}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View style={[_containerStyle(), styles.container, style]}>
      {renderSelectedTab()}
      {tabs.map((tab, index: number) => renderTab(tab, index))}
    </Animated.View>
  );
};
