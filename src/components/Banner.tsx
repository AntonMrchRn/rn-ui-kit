import React, { FC } from 'react';
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

export type BannerProps = {
  visible: boolean;
  type: 'error' | 'success' | 'warning' | 'info';
  icon: 'success' | 'info' | 'alert' | JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  closeIcon?: JSX.Element;
  iconStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  text?: string;
  iconColor?: string;
  onClosePress?: () => void;
  buttonTextStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  onButtonPress?: () => void;
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
  text,
  textStyle,
  onClosePress,
  buttonStyle,
  buttonTextStyle,
  onButtonPress,
  buttonText,
  iconColor,
  visible,
}) => {
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
      alignItems: 'center',
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
      flex: 1,
    },
    text: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      color: getTextColor(),
      marginTop: 8,
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
        return <BannerSuccessIcon color={iconColor || getTextColor()} />;
      case 'info':
        return <BannerInfoIcon color={iconColor || getTextColor()} />;
      case 'alert':
        return <BannerAlertIcon color={iconColor || getTextColor()} />;
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
            {title ? <Text style={currentTitleStyle}>{title}</Text> : <View />}
            <TouchableOpacity onPress={onClosePress}>
              {closeIcon || <BannerCloseIcon />}
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            {text && <Text style={currentTextStyle}>{text}</Text>}
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
