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

export type SegmentedControlProps = {
  /**
   * Массив элементов в ячейках компонента
   */
  tabs: string[];
  /**
   * Ширина компонента
   */
  width?: number;
  /**
   * Стиль текста активного элемента компонента
   */
  activeTextStyle?: StyleProp<TextStyle>;
  /**
   * Цвет фона активного элемента
   */
  activeTabColor?: string;
  /**
   * Дополнительная ширина активного элемента при его перемещении
   */
  extraSpacing?: number;
  /**
   * Стиль компонента
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Стиль элемента в компоненте
   */
  tabStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль текста элемента в компоненте
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * Стиль выбранного элемента в компоненте
   */
  selectedTabStyle?: StyleProp<ViewStyle>;
  /**
   * Логика нажатия на элемент компонента
   */
  onChange: (index: number) => void;
  /**
   * id выбранного таба
   */
  currentTabId: number;
};

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  style,
  tabs,
  width,
  onChange,
  tabStyle,
  textStyle,
  selectedTabStyle,
  currentTabId,
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
      borderRadius: 7,
    },
    textStyle: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: theme.text.basic,
    },
    activeTextStyle: {
      fontFamily: 'Nunito Sans',
      fontWeight: '700',
      color: theme.text.accent,
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

  const _selectedTabStyle = (translateXAnimation: any) => [
    {
      ...StyleSheet.absoluteFillObject,
      borderRadius: 8,
      marginVertical: 2,
      marginHorizontal: 2,
      width: (width ? width - 8 : ScreenWidth - 35) / tabs?.length,
      backgroundColor: activeTabColor,
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

  const handleTabPress = React.useCallback(
    (index: number) => {
      onChange && onChange(index);
    },
    [onChange]
  );

  useEffect(() => {
    Animated.spring(slideAnimation, {
      toValue: (I18nManager.isRTL ? -1 : 1) * currentTabId * translateValue,
      stiffness: 180,
      damping: 25,
      mass: 1,
      useNativeDriver: true,
    }).start();
  }, [currentTabId, slideAnimation, translateValue]);

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
    const isActiveTab = currentTabId === index;
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
