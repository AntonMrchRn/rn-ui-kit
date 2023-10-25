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
        return theme.background.accentMessage;
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

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      flexDirection: 'row',
      backgroundColor: getBackgroundColor(),
      borderWidth: 1,
      borderColor: getBorderColor(),
      borderRadius: 12,
    },
    icon: {
      marginRight: 8,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
    },
    containerTxt: {
      maxWidth: '90%',
    },
    title: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: '#707070',
    },
    body: {
      alignItems: 'flex-start',
    },
    wrapper: {
      flexShrink: 1,
    },
    text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      color: '#707070',
      marginTop: title ? 8 : 0,
      flexShrink: 1,
    },
    button: {
      marginTop: 12,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 7,
      paddingHorizontal: 16,
      borderWidth: 1.5,
      borderColor: '#707070',
      borderRadius: 8,
    },
    buttonText: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: '#707070',
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

  const hitSlop = { top: 24, left: 24, right: 24, bottom: 24 };
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
            <View style={styles.containerTxt}>
              {title ? (
                <Text style={currentTitleStyle}>{title}</Text>
              ) : (
                <Text style={[currentTextStyle]}>{text}</Text>
              )}
            </View>
            <TouchableOpacity hitSlop={hitSlop} onPress={onClose}>
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
