import React, { FC } from 'react';
import {
  PanResponderGestureState,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Modal, { Direction, OnSwipeCompleteParams } from 'react-native-modal';
import { useTheme } from '../theme/ThemeProvider';
import { ModalCloseIcon } from '../icons/ModalCloseIcon';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
export type BottomSheetProps = {
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
   * Подзаголовок компонента
   */
  subtitle?: string;
  /**
   * Стиль подзаголовка компонента
   */
  subtitleStyle?: StyleProp<TextStyle>;
  /**
   * Элемент или массив элементов, отображаемые в компоненте
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * Логика, выполняемая при завершении свайпа компонента
   */
  onSwipeComplete?: (
    params: OnSwipeCompleteParams,
    gestureState: PanResponderGestureState
  ) => void;
  /**
   * Направление свайпа компонента.
   * По умолчанию 'down'
   */
  swipeDirection?: Direction | Direction[];
};

export const BottomSheet: FC<BottomSheetProps> = ({
  backdropOpacity = 1,
  backdropColor,
  modalStyle,
  containerStyle,
  closeIconContainerStyle,
  closeIconPress,
  closeIcon,
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  children,
  onSwipeComplete,
  swipeDirection = 'down',
  ...props
}) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background.main,
      paddingTop: 12,
      paddingHorizontal: 16,
      paddingBottom: insets.bottom,
      borderRadius: 24,
    },
    closeIconContainer: {
      alignItems: 'flex-end',
    },
    headerIconContainer: {
      alignItems: 'center',
      marginBottom: 12,
    },
    title: {
      fontFamily: 'Open Sans Semibold',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center',
      color: theme.text.basic,
    },
    subtitle: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      textAlign: 'center',
      color: theme.text.neutral,
      marginTop: 4,
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    line: {
      backgroundColor: theme.background.neutralDisable,
      borderRadius: 5,
      width: 36,
      height: 4,
      alignSelf: 'center',
    },
  });

  const currentContainerStyle = StyleSheet.compose(
    styles.container,
    containerStyle
  );
  const currentCloseIconContainerStyle = StyleSheet.compose(
    styles.closeIconContainer,
    closeIconContainerStyle
  );
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentSubtitleStyle = StyleSheet.compose(
    styles.subtitle,
    subtitleStyle
  );
  const currentModalStyle = StyleSheet.compose(styles.modal, modalStyle);

  const getCloseIcon = () => {
    if (closeIcon) {
      if (typeof closeIcon === 'boolean') {
        return <ModalCloseIcon />;
      }
      return closeIcon;
    }
    return null;
  };

  return (
    <Modal
      {...props}
      backdropOpacity={backdropOpacity}
      backdropColor={backdropColor || theme.background.modal}
      style={currentModalStyle}
      onSwipeComplete={onSwipeComplete}
      swipeDirection={swipeDirection}
    >
      <View style={currentContainerStyle}>
        <View style={styles.line} />
        <View style={currentCloseIconContainerStyle}>
          <TouchableOpacity onPress={closeIconPress}>
            {getCloseIcon()}
          </TouchableOpacity>
        </View>
        {title && <Text style={currentTitleStyle}>{title}</Text>}
        {subtitle && <Text style={currentSubtitleStyle}>{subtitle}</Text>}
        {children}
      </View>
    </Modal>
  );
};
