import React, { FC, useState } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { BannerSuccessIcon } from '../icons/BannerSuccessIcon';
import { BannerInfoIcon } from '../icons/BannerInfoIcon';
import { BannerAlertIcon } from '../icons/BannerAlertIcon';
import { BannerCloseIcon } from '../icons/BannerCloseIcon';
import { useTheme } from '../theme/ThemeProvider';

export type Types = 'error' | 'success' | 'warning' | 'info';
export type IconTypes = 'success' | 'info' | 'alert' | JSX.Element;
export type BannerProps = {
  /**
   * Тип компонента
   */
  type: Types;
  /**
   * Тип иконки. Может быть одним из стандартных типов, кастомной, лиюо может не быть
   */
  icon: IconTypes;
  /**
   * Размер иконки
   */
  iconSize?: number;
  /**
   * Стиль контейнера компонента
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Кастомная иконка закрытия баннера
   */
  closeIcon?: JSX.Element;
  /**
   * Стиль контейнера иконки
   */
  iconStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль заголовка баннера
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Стиль основного текста баннера
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * Заголовок баннера
   */
  title?: string;
  /**
   * Основной текст баннера
   */
  text?: string;
  /**
   * Выбор кастомного цвета основной иконки баннера, если не выбрана кастомная
   */
  iconColor?: string;
  /**
   * Логика нажатия на иконку закрытия баннера
   */
  onClosePress?: () => void;
  /**
   * Стиль текста кнопки баннера
   */
  buttonTextStyle?: StyleProp<TextStyle>;
  /**
   * Стиль контейнера кнопки баннера
   */
  buttonStyle?: StyleProp<ViewStyle>;
  /**
   * Логика нажатия на кнопку баннера
   */
  onButtonPress?: () => void;
  /**
   * Текст кнопки баннера
   */
  buttonText?: string;
};

export const Banner: FC<BannerProps> = ({
  containerStyle,
  type,
  icon,
  iconStyle,
  titleStyle,
  title,
  closeIcon,
  text = '',
  textStyle,
  onClosePress,
  buttonStyle,
  buttonTextStyle,
  onButtonPress,
  buttonText,
  iconColor,
  iconSize,
}) => {
  const [visible, setVisible] = useState(true);
  const onClose = () => {
    setVisible(false);
    onClosePress && onClosePress();
  };
  const theme = useTheme();

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
      paddingVertical: 12,
      paddingHorizontal: 18,
      flexDirection: 'row',
      backgroundColor: getBackgroundColor(),
      borderWidth: 1,
      borderColor: getBorderColor(),
      borderRadius: 12,
    },
    icon: {
      marginRight: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
    },
    title: {
      fontFamily: 'Nunito Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: getTextColor(),
    },
    body: {
      alignItems: 'flex-start',
    },
    wrapper: {
      flexShrink: 1,
    },
    text: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      color: getTextColor(),
      marginTop: title ? 8 : 0,
      flexShrink: 1,
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

  const getIcon = () => {
    switch (icon) {
      case 'success':
        return (
          <BannerSuccessIcon
            color={iconColor || getTextColor()}
            size={iconSize}
          />
        );
      case 'info':
        return (
          <BannerInfoIcon color={iconColor || getTextColor()} size={iconSize} />
        );
      case 'alert':
        return (
          <BannerAlertIcon
            color={iconColor || getTextColor()}
            size={iconSize}
          />
        );
      default:
        return icon;
    }
  };

  const currentContainerStyle = StyleSheet.compose(
    styles.container,
    containerStyle
  );
  const currentIconStyle = StyleSheet.compose(styles.icon, iconStyle);
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = StyleSheet.compose(styles.text, textStyle);
  const currentButtonStyle = StyleSheet.compose(styles.button, buttonStyle);
  const currentButtonTextStyle = StyleSheet.compose(
    styles.buttonText,
    buttonTextStyle
  );

  if (visible) {
    return (
      <View style={currentContainerStyle}>
        <View style={currentIconStyle}>{getIcon()}</View>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            {title ? (
              <Text style={currentTitleStyle}>{title}</Text>
            ) : (
              <Text style={[currentTextStyle]}>{text}</Text>
            )}
            <TouchableOpacity onPress={onClose}>
              {closeIcon || <BannerCloseIcon />}
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            {text && title && <Text style={currentTextStyle}>{text}</Text>}
            {buttonText && (
              <TouchableOpacity
                style={currentButtonStyle}
                onPress={onButtonPress}
              >
                <Text style={currentButtonTextStyle}>{buttonText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
  return null;
};
