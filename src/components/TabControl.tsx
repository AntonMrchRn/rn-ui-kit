/* eslint-disable react/no-unstable-nested-components */
import React, { FC, ReactElement, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native';
import { TabControlIcon } from '../icons/TabControlIcon';
import { useTheme } from '../theme/ThemeProvider';
import { ScrollView } from 'react-native';

export type TabItem = {
  id: number;
  label: string;
  count?: number;
  onPress?: () => void;
  icon?: ReactElement | boolean;
};

export type TabControlProps = {
  /**
   * Индекс изначально выбранного элемента
   */
  initialId?: number;
  /**
   * Массив элементов компонента
   */
  data: TabItem[];
  /**
   * Стиль лейбла элементов компонента
   */
  labelStyle?: StyleProp<TextStyle>;
};

export const TabControl: FC<TabControlProps> = ({
  initialId,
  data,
  labelStyle,
  ...props
}) => {
  const [selectedId, setSelectedId] = useState(initialId);
  const theme = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      padding: 5,
      borderRadius: 4,
      backgroundColor: theme.background.main,
      margin: 10,
      paddingVertical: 5,
      borderBottomWidth: 1.5,
      borderColor: theme.icons.neutral,
      flexDirection: 'row',
    },
    label: {
      marginLeft: 5,
      fontFamily: 'Nunito Sans Regular',
      color: theme.icons.neutral,
    },
    activeText: {
      color: theme.background.accent,
      fontFamily: 'Nunito Sans Bold',
      fontWeight: '700',
    },
    activeBorder: {
      borderBottomColor: theme.background.accent,
    },
  });

  const Item: FC<TabItem> = (item) => {
    const isActive = selectedId === item.id;
    const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);

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
        style={[styles.wrapper, isActive && styles.activeBorder]}
        onPress={() => {
          setSelectedId(item.id);
          item.onPress && item.onPress();
        }}
      >
        {getIcon()}
        <Text style={[currentLabelStyle, isActive && styles.activeText]}>
          {item?.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      horizontal={true}
      {...props}
      showsHorizontalScrollIndicator={false}
    >
      {data.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ScrollView>
  );
};
