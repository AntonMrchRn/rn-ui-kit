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
      height: 36,
    },
    label: {
      fontFamily: 'Nunito Sans Regular',
      fontWeight: '400',
      color: theme.icons.neutral,
      fontSize: 17,
    },
    activeText: {
      color: theme.background.accent,
    },
    activeBorder: {
      borderBottomWidth: 2,
      borderBottomColor: theme.background.accent,
    },
    icon: {
      marginRight: 6,
      top: 2,
    },
    ml16: {
      marginLeft: 16,
    },
    badge: {
      backgroundColor: theme.background.neutralDisableSecond,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginLeft: 10,
      justifyContent: 'center',
      height: 26,
    },
    activeBadge: {
      backgroundColor: theme.background.fieldMain,
    },
    badgeLabel: {
      fontSize: 13,
      fontFamily: 'Nunito Sans Regular',
      fontWeight: '400',
      color: theme.text.basic,
    },
    activeBadgeLabel: {
      color: theme.background.accent,
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
        {item.count ? (
          <View style={[styles.badge, isActive && styles.activeBadge]}>
            <Text
              style={[styles.badgeLabel, isActive && styles.activeBadgeLabel]}
            >
              {item?.count}
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        {...props}
      >
        {data.map((item, index) => (
          <Item key={item.id} {...item} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};
