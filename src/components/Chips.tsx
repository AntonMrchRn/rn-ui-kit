import React, { FC } from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
  View,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import { useTheme } from '../theme/ThemeProvider';
import { ChipsIcon } from '../icons/ChipsIcon';
import { ChipsCloseIcon } from '../icons/ChipsCloseIcon';

export type ChipsProps = {
  /**
   * Иконка компонента слева. Может быть стандартной (геолокация), кастомной или не быть совсем
   */
  icon?: JSX.Element | boolean;
  /**
   * Иконка компонента справа. Может быть стандартной (крестик), кастомной или не быть совсем
   */
  close?: JSX.Element | boolean;
  /**
   * Лейбл компонента
   */
  label?: string;
  /**
   * Стиль лейбла компонента
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Стиль контейнера компонента
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Показывает, что данный компонент выбран
   */
  selected?: boolean;
  /**
   * Логика нажатия на иконку компонента справа
   */
  closeIconPress?: () => void;
  /**
   * Логика нажатия на компонент, не считая иконку справа (если она есть)
   */
  onPress?: () => void;
  /**
   * Показывает, что данный компонент задизейблен
   */
  disabled?: boolean;
};

export const Chips: FC<ChipsProps> = ({
  icon,
  close,
  labelStyle,
  label,
  containerStyle,
  selected,
  closeIconPress,
  onPress,
  disabled,
}) => {
  const theme = useTheme();

  const getLabelColor = () => {
    if (disabled) {
      return theme.text.neutralDisable;
    }
    if (selected) {
      return theme.text.accent;
    }
    return theme.text.neutral;
  };
  const getBorderColor = () => {
    if (disabled) {
      return theme.stroke.neutralLight;
    }
    if (selected) {
      return theme.background.accent;
    }
    return theme.stroke.neutralOptional;
  };

  const styles = StyleSheet.create({
    label: {
      color: getLabelColor(),
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 13,
      lineHeight: 17,
      fontFamily: 'Nunito Sans',
    },
    container: {
      alignSelf: 'flex-start',
      borderRadius: 16,
      minWidth: 40,
      height: 32,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: getBorderColor(),
      backgroundColor:
        selected && !disabled ? theme.background.fieldMain : 'transparent',
    },
    icon: {
      marginRight: 4,
    },
    close: {
      paddingRight: 12,
    },
    wrapper: {
      paddingRight: close ? 8 : 12,
      paddingLeft: 12,
      alignItems: 'center',
      flexDirection: 'row',
    },
  });

  const getIcon = () => {
    if (icon) {
      if (typeof icon === 'boolean') {
        return (
          <ChipsIcon
            color={
              disabled
                ? theme.icons.neutralDisable
                : selected
                ? theme.text.accent
                : theme.stroke.neutral
            }
          />
        );
      }
      return icon;
    }
    return null;
  };
  const getCloseIcon = () => {
    if (close) {
      if (typeof close === 'boolean') {
        return (
          <ChipsCloseIcon
            color={
              disabled
                ? theme.icons.neutralDisable
                : theme.stroke.neutralOptional
            }
          />
        );
      }
      return icon;
    }
    return null;
  };

  const currentContainerStyle = StyleSheet.compose(
    styles.container,
    containerStyle
  );
  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);

  return (
    <View style={currentContainerStyle}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.wrapper}
        disabled={disabled}
      >
        {icon && <View style={styles.icon}>{getIcon()}</View>}
        {label && (
          <Text numberOfLines={1} style={currentLabelStyle}>
            {label}
          </Text>
        )}
      </TouchableOpacity>
      {close && (
        <TouchableOpacity
          onPress={closeIconPress}
          style={styles.close}
          disabled={disabled}
        >
          {getCloseIcon()}
        </TouchableOpacity>
      )}
    </View>
  );
};
