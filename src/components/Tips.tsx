import React, { FC } from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ErrorIcon } from '../icons/ErrorIcon';
import { InfoIcon } from '../icons/InfoIcon';
import { SuccessIcon } from '../icons/SuccessIcon';
import { WarningIcon } from '../icons/WarningIcon';
import { useTheme } from '../theme/ThemeProvider';

type Types = 'error' | 'success' | 'warning' | 'info';
export type TipsProps = {
  /**
   * Основной текст компонента
   */
  text?: string;
  /**
   * Логика нажатия на кнопку компонента
   */
  onButtonPress?: () => void;
  /**
   * Текст кнопки компонента
   */
  buttonText?: string;
  /**
   * Тип компонента
   */
  type: Types;
  /**
   * Стиль контейнера компонента
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль контейнера кнопки компонента
   */
  buttonStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль основного текста компонента
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * Стиль текста кнопки компонента
   */
  buttonTextStyle?: StyleProp<TextStyle>;
};

export const Tips: FC<TipsProps> = ({
  text,
  onButtonPress,
  buttonText,
  type,
  containerStyle,
  textStyle,
  buttonStyle,
  buttonTextStyle,
}) => {
  const theme = useTheme();

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <ErrorIcon />;
      case 'success':
        return <SuccessIcon />;
      case 'warning':
        return <WarningIcon />;
      default:
        return <InfoIcon />;
    }
  };

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingTop: 12,
      backgroundColor: theme.stroke.neutralLight,
      borderRadius: 12,
      alignItems: 'flex-start',
      flexDirection: 'row',
      paddingBottom: buttonText ? 16 : 12,
    },
    text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      color: theme.stroke.neutral,
    },
    button: {
      marginTop: 12,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 7,
      paddingHorizontal: 16,
      borderWidth: 1.5,
      borderColor: theme.stroke.neutral,
      borderRadius: 8,
    },
    buttonText: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: theme.stroke.neutral,
    },
    wrapIcon: {
      marginRight: 12,
    },
    wrapRight: {
      flex: 1,
    },
  });

  const currentContainerStyle = StyleSheet.compose(
    styles.container,
    containerStyle
  );
  const currentTextStyle = StyleSheet.compose(styles.text, textStyle);
  const currentButtonStyle = StyleSheet.compose(styles.button, buttonStyle);
  const currentButtonTextStyle = StyleSheet.compose(
    styles.buttonText,
    buttonTextStyle
  );

  return (
    <View style={currentContainerStyle}>
      <View style={styles.wrapIcon}>{getIcon()}</View>
      <View style={styles.wrapRight}>
        {text && <Text style={currentTextStyle}>{text}</Text>}
        {buttonText && (
          <TouchableOpacity style={currentButtonStyle} onPress={onButtonPress}>
            <Text style={currentButtonTextStyle}>{buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
