/* eslint-disable react/no-unstable-nested-components */
import React, { FC, ReactElement, useState } from 'react';
import {
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Text } from 'react-native';
import { TabControlIcon } from '../icons/TabControlIcon';
import { useTheme } from '../theme/ThemeProvider';
import { ScrollView } from 'react-native';

export type TabItem = {
  id: number;
  label: string;
  count?: number;
  icon?: ReactElement | boolean;
};

export type TabControlProps = ScrollViewProps & {
  /**
   * Индекс изначально выбранного элемента
   */
  initialId?: number;
  /**
   * Логика при изменении выбранного элемента
   */
  onChange?: (item: TabItem) => void;
  /**
   * Массив элементов компонента
   */
  data: TabItem[];
  /**
   * Стиль лейбла элементов компонента
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Стиль контейнера иконки компонента
   */
  iconContainerStyle?: StyleProp<ViewStyle>;
};

export const TabControl: FC<TabControlProps> = ({
  initialId,
  data,
  labelStyle,
  iconContainerStyle,
  onChange,
  ...props
}) => {
  const [selectedId, setSelectedId] = useState(initialId);
  const theme = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      paddingBottom: 8,
      backgroundColor: theme.background.main,
      flexDirection: 'row',
    },
    label: {
      fontFamily: 'Nunito Sans Regular',
      color: theme.icons.neutral,
      fontSize: 17,
    },
    activeText: {
      color: theme.background.accent,
      fontFamily: 'Nunito Sans Bold',
      fontWeight: '700',
    },
    activeBorder: {
      borderBottomWidth: 1.5,
      borderBottomColor: theme.background.accent,
    },
    icon: {
      marginRight: 5,
    },
    ml16: {
      marginLeft: 16,
    },
  });

  const Item: FC<TabItem & { index: number }> = (item) => {
    const isActive = selectedId === item.id;
    const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
    const currentIconContainerStyle = StyleSheet.compose(
      styles.icon,
      iconContainerStyle
    );

    const getIcon = () => {
      if (item.icon) {
        if (typeof item.icon === 'boolean') {
          return (
            <TabControlIcon
              color={
                isActive
                  ? theme.background.accent
                  : theme.background.neutralDisable
              }
            />
          );
        }
        return item.icon;
      }
      return null;
    };

    return (
      <TouchableOpacity
        style={[
          styles.wrapper,
          isActive && styles.activeBorder,
          item.index !== 0 && styles.ml16,
        ]}
        onPress={() => {
          setSelectedId(item.id);
          onChange && onChange(item);
        }}
      >
        {item.icon && (
          <View style={currentIconContainerStyle}>{getIcon()}</View>
        )}
        <Text style={[currentLabelStyle, isActive && styles.activeText]}>
          {item?.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      {...props}
    >
      {data.map((item, index) => (
        <Item key={item.id} {...item} index={index} />
      ))}
    </ScrollView>
  );
};
