import React, { FC } from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
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

  const getBorderColor = () => {
    switch (type) {
      case 'error':
        return theme.stroke.dangerDisable;
      case 'success':
        return theme.stroke.successDisable;
      case 'warning':
        return theme.stroke.warningDisable;
      default:
        return theme.background.accentDisable;
    }
  };
  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return theme.background.fieldDanger;
      case 'success':
        return theme.background.fieldSuccess;
      case 'warning':
        return theme.background.fieldWarning;
      default:
        return theme.background.fieldMain;
    }
  };
  const getTextColor = () => {
    switch (type) {
      case 'error':
        return theme.text.danger;
      case 'success':
        return theme.text.success;
      case 'warning':
        return theme.text.warning;
      default:
        return theme.text.accent;
    }
  };
  const getButtonBorderColor = () => {
    switch (type) {
      case 'error':
        return theme.stroke.danger;
      case 'success':
        return theme.stroke.success;
      case 'warning':
        return theme.stroke.warning;
      default:
        return theme.stroke.accent;
    }
  };

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: getBackgroundColor(),
      borderWidth: 1,
      borderColor: getBorderColor(),
      borderRadius: 12,
      alignItems: 'flex-start',
    },
    text: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      color: getTextColor(),
    },
    button: {
      marginTop: 12,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1.5,
      borderColor: getButtonBorderColor(),
      borderRadius: 8,
    },
    buttonText: {
      fontFamily: 'Nunito Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: getTextColor(),
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
      {text && <Text style={currentTextStyle}>{text}</Text>}
      {buttonText && (
        <TouchableOpacity style={currentButtonStyle} onPress={onButtonPress}>
          <Text style={currentButtonTextStyle}>{buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
