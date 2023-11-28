import React, { FC } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import RNModal from 'react-native-modal';
import { useTheme } from '../theme/ThemeProvider';
import { ModalCloseIcon } from '../icons/ModalCloseIcon';
import { TouchableOpacity } from 'react-native';
import { ModalLimitIcon } from '../icons/ModalLimitIcon';
import { ModalErrorIcon } from '../icons/ModalErrorIcon';

type HeaderIcon = 'limit' | 'error' | JSX.Element;
type Animation =
  | 'bounce'
  | 'flash'
  | 'jello'
  | 'pulse'
  | 'rotate'
  | 'rubberBand'
  | 'shake'
  | 'swing'
  | 'tada'
  | 'wobble'
  | 'bounceIn'
  | 'bounceInDown'
  | 'bounceInUp'
  | 'bounceInLeft'
  | 'bounceInRight'
  | 'bounceOut'
  | 'bounceOutDown'
  | 'bounceOutUp'
  | 'bounceOutLeft'
  | 'bounceOutRight'
  | 'fadeIn'
  | 'fadeInDown'
  | 'fadeInDownBig'
  | 'fadeInUp'
  | 'fadeInUpBig'
  | 'fadeInLeft'
  | 'fadeInLeftBig'
  | 'fadeInRight'
  | 'fadeInRightBig'
  | 'fadeOut'
  | 'fadeOutDown'
  | 'fadeOutDownBig'
  | 'fadeOutUp'
  | 'fadeOutUpBig'
  | 'fadeOutLeft'
  | 'fadeOutLeftBig'
  | 'fadeOutRight'
  | 'fadeOutRightBig'
  | 'flipInX'
  | 'flipInY'
  | 'flipOutX'
  | 'flipOutY'
  | 'lightSpeedIn'
  | 'lightSpeedOut'
  | 'slideInDown'
  | 'slideInUp'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideOutDown'
  | 'slideOutUp'
  | 'slideOutLeft'
  | 'slideOutRight'
  | 'zoomIn'
  | 'zoomInDown'
  | 'zoomInUp'
  | 'zoomInLeft'
  | 'zoomInRight'
  | 'zoomOut'
  | 'zoomOutDown'
  | 'zoomOutUp'
  | 'zoomOutLeft'
  | 'zoomOutRight';
export type ModalProps = {
  /**
   * Анимация появления компонента
   */
  animationIn?: Animation;
  /**
   * Задержка в милисекундах перед появлением компонента
   */
  animationInTiming?: number;
  /**
   * Задержка в милисекундах перед исчезновением компонента
   */
  animationOutTiming?: number;
  /**
   * Анимация исчезновения компонента
   */
  animationOut?: Animation;
  /**
   * Управление состоянием видимости компонента
   */
  isVisible?: boolean;
  /**
   * Учитывать появление клавиатуры устройства
   */
  avoidKeyboard?: boolean;
  /**
   * Цвет заднего фона компонента
   */
  backdropColor?: string;
  /**
   * Непрозрачность заднего фона компонента.
   * По умолчанию 1
   */
  backdropOpacity?: number;
  /**
   * Логика нажатия на задний фон компонента
   */
  onBackdropPress?: () => void;
  /**
   * Стиль модального окна компонента
   */
  modalStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль контейнера компонента
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль контейнера иконки закрытия компонента
   */
  closeIconContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Логика нажатия на иконку закрытия компонента
   */
  closeIconPress?: () => void;
  /**
   * Иконка закрытия компонента.
   * Может быть стандартной, кастомной или может не быть
   */
  closeIcon?: JSX.Element | true;
  /**
   * Заголовок компонента
   */
  title?: string;
  /**
   * Стиль заголовка компонента
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Текст описания компонента
   */
  description?: string;
  /**
   * Стиль текста описания компонента
   */
  descriptionStyle?: StyleProp<TextStyle>;
  /**
   * Элемент или массив элементов, отображаемые в компоненте
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * Основная иконка компонента.
   * Может быть одной из стандартных, кастомной или может не быть совсем
   */
  headerIcon?: HeaderIcon;
  /**
   * Стиль контейнера основной иконки компонента
   */
  headerIconContainerStyle?: StyleProp<ViewStyle>;
};

export const Modal: FC<ModalProps> = ({
  backdropOpacity = 1,
  backdropColor,
  modalStyle,
  containerStyle,
  closeIconContainerStyle,
  closeIconPress,
  closeIcon,
  headerIcon,
  headerIconContainerStyle,
  title,
  titleStyle,
  description,
  descriptionStyle,
  children,
  ...props
}) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background.main,
      padding: 16,
      borderRadius: 20,
    },
    closeIconContainer: {
      alignItems: 'flex-end',
      position: 'absolute',
      right: 12,
      top: 15,
      zIndex: 100,
    },
    headerIconContainer: {
      alignItems: 'center',
      marginBottom: 16,
    },
    title: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center',
      color: theme.text.basic,
    },
    description: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      textAlign: 'center',
      color: theme.text.neutral,
      marginTop: 8,
    },
    containerText: {
      paddingHorizontal: 19,
    },
  });

  const hitSlop = { top: 24, left: 24, right: 24, bottom: 24 };
  const currentContainerStyle = StyleSheet.compose(
    styles.container,
    containerStyle
  );
  const currentCloseIconContainerStyle = StyleSheet.compose(
    styles.closeIconContainer,
    closeIconContainerStyle
  );
  const currentHeaderIconContainerStyle = StyleSheet.compose(
    styles.headerIconContainer,
    headerIconContainerStyle
  );
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentDescriptionStyle = StyleSheet.compose(
    styles.description,
    descriptionStyle
  );

  const getCloseIcon = () => {
    if (closeIcon) {
      if (typeof closeIcon === 'boolean') {
        return <ModalCloseIcon />;
      }
      return closeIcon;
    }
    return null;
  };

  const getHeaderIcon = () => {
    if (headerIcon) {
      if (headerIcon === 'limit') {
        return <ModalLimitIcon />;
      }
      if (headerIcon === 'error') {
        return <ModalErrorIcon />;
      }
      return headerIcon;
    }
    return null;
  };

  const checkHeaderIcon = getHeaderIcon();

  return (
    <RNModal
      {...props}
      backdropOpacity={backdropOpacity}
      backdropColor={backdropColor || theme.background.modal}
      style={modalStyle}
    >
      <View style={currentContainerStyle}>
        <View style={currentCloseIconContainerStyle}>
          <TouchableOpacity hitSlop={hitSlop} onPress={closeIconPress}>
            {getCloseIcon()}
          </TouchableOpacity>
        </View>
        {checkHeaderIcon && (
          <View style={currentHeaderIconContainerStyle}>{getHeaderIcon()}</View>
        )}
        {title && (
          <Text
            style={[
              currentTitleStyle,
              !checkHeaderIcon && styles.containerText,
            ]}
          >
            {title}
          </Text>
        )}
        {description && (
          <Text style={currentDescriptionStyle}>{description}</Text>
        )}
        {children}
      </View>
    </RNModal>
  );
};
