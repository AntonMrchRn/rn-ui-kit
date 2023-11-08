/* eslint-disable react/no-unstable-nested-components */
import React, { FC, ReactElement } from 'react';
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
  /**
   * id выбранного таба
   */
  currentTabId: number;
};

export const TabControl: FC<TabControlProps> = ({
  currentTabId,
  data,
  labelStyle,
  iconContainerStyle,
  onChange,
  ...props
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.background.main,
      flexDirection: 'row',
      height: 40,
      marginBottom: 4,
    },
    label: {
      fontFamily: 'Nunito Sans',
      fontWeight: '400',
      color: theme.icons.neutral,
      fontSize: 17,
      lineHeight: 24,
    },
    activeText: {
      color: theme.background.accent,
      fontWeight: '700',
    },
    activeBorder: {
      borderBottomWidth: 2,
      borderBottomColor: theme.background.accent,
    },
    icon: {
      marginRight: 8,
      top: 2,
    },
    ml16: {
      marginLeft: 16,
    },
    labelWrapper: {
      paddingTop: 8,
      flexDirection: 'row',
    },
    badge: {
      backgroundColor: theme.background.danger,
      borderRadius: 32,
      paddingHorizontal: 5.5,
      paddingVertical: 1,
      position: 'absolute',
      right: -10,
      top: 0,
    },
    badgeLabel: {
      fontSize: 11,
      fontFamily: 'Nunito Sans',
      fontWeight: '400',
      color: theme.text.contrast,
    },
    mr10: {
      marginRight: 10,
    },
  });

  const Item: FC<TabItem & { index: number; isLast: boolean }> = (
    item,
    isLast
  ) => {
    const isActive = currentTabId === item.id;
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
              color={isActive ? theme.background.accent : theme.icons.neutral}
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
          item?.count && isLast && styles.mr10,
        ]}
        onPress={() => {
          onChange && onChange(item);
        }}
      >
        <View style={styles.labelWrapper}>
          {item.icon && (
            <View style={currentIconContainerStyle}>{getIcon()}</View>
          )}
          <Text style={[currentLabelStyle, isActive && styles.activeText]}>
            {item?.label}
          </Text>
        </View>
        {!!item?.count && (
          <View style={styles.badge}>
            <Text style={styles.badgeLabel}>{item?.count}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        {...(props as any)}
      >
        {data.map((item, index, array) => (
          <Item
            key={item.id}
            {...item}
            index={index}
            isLast={index === array?.length - 1}
          />
        ))}
      </ScrollView>
    </View>
  );
};
