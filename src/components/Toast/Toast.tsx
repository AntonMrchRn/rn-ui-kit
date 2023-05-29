import React, { FC, useEffect, useRef } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
  Animated,
  PanResponder,
  PanResponderInstance,
} from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type Types = 'error' | 'success' | 'warning' | 'info';
export type Action = {
  text: string;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
};
export type ToastOptions = {
  /**
   * Ключевой параметр, который определяет тип
   */
  type: Types;
  /**
   * Стиль контейнера
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль внутреннего контейнера двух кнопок снизу
   */
  actionsContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Необходимые ключи для рендеринга первой кнопки
   */
  firstAction?: Action;
  /**
   * Необходимые ключи для рендеринга второй кнопки
   */
  secondAction?: Action;
  /**
   * Стиль заголовка
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Стиль основного текста
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * Заголовок
   */
  title?: string;
  /**
   * Основной текст
   */
  text?: string;
  /**
   * Задержка в миллисекундах, после которой происходит раскрытие/скрытие контейнера после срабатывания метода show.
   * По умолчанию 250
   */
  animationDuration?: number;
  /**
   * Задержка в миллисекундах, после которой происходит скрытие контейнера
   * По умолчанию 2000
   * Если выставить 0, то контейнер не будет скрыт
   */
  duration?: number;
  /**
   * Высота контейнера, которая будет отображаться после раскрытия контейнера
   * По умолчанию 170
   */
  contentHeight?: number;
  /**
   * Разрешить свайп вверх для скрытия контейнера
   * По умолчанию true
   */
  swipeEnabled?: boolean;
};
type ToastProps = ToastOptions & {
  onDestroy: () => void;
};
export const Toast: FC<ToastProps> = ({
  type,
  onDestroy,
  containerStyle,
  titleStyle,
  title,
  text,
  textStyle,
  actionsContainerStyle,
  firstAction,
  secondAction,
  animationDuration = 250,
  duration = 2000,
  contentHeight = 170,
  swipeEnabled = true,
}) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const animation = useRef(new Animated.Value(0)).current;
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const panResponderAnimRef = useRef<Animated.ValueXY>();
  const panResponderRef = useRef<PanResponderInstance>();

  const handleClose = () => {
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: false,
      duration: animationDuration,
    }).start(() => onDestroy());
  };
  const getPanResponderAnim = () => {
    if (panResponderAnimRef.current) return panResponderAnimRef.current;
    panResponderAnimRef.current = new Animated.ValueXY({ x: 0, y: 0 });
    return panResponderAnimRef.current;
  };
  const getPanResponder = () => {
    if (panResponderRef.current) return panResponderRef.current;
    panResponderRef.current = PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        //return true if user is swiping, return false if it's a single click
        return !(gestureState.dx === 0 && gestureState.dy === 0);
      },
      onPanResponderMove: (_, gestureState) => {
        getPanResponderAnim()?.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -50) {
          handleClose();
        }
      },
    });
    return panResponderRef.current;
  };
  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return theme.background.danger;
      case 'success':
        return theme.background.success;
      case 'warning':
        return theme.text.warning;
      default:
        return theme.background.accent;
    }
  };

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: -1,
      backgroundColor: getBackgroundColor(),
      paddingVertical: 12,
      paddingHorizontal: 20,
      width: '100%',
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    },
    title: {
      fontFamily: 'Nunito Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: theme.text.contrast,
    },
    text: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: theme.text.contrast,
      marginTop: 4,
    },
    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
    },
  });
  const animationContainerStyle: Animated.WithAnimatedObject<ViewStyle> = {
    height: animation,
  };

  const currentContainerStyle = StyleSheet.compose(
    styles.container,
    containerStyle
  );
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = StyleSheet.compose(styles.text, textStyle);
  const currentActionsContainerStyle = StyleSheet.compose(
    styles.actionsContainer,
    actionsContainerStyle
  );
  const currentFirstActionStyle = StyleSheet.compose(
    styles.title,
    firstAction?.style
  );
  const currentSecondActionStyle = StyleSheet.compose(
    styles.title,
    secondAction?.style
  );

  useEffect(() => {
    Animated.timing(animation, {
      toValue: contentHeight,
      useNativeDriver: false,
      duration: animationDuration,
    }).start();
    if (duration !== 0 && typeof duration === 'number') {
      closeTimeoutRef.current = setTimeout(() => {
        handleClose();
      }, duration);
    }
    return () => {
      closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  const firstActionPress = () => {
    firstAction?.onPress && firstAction.onPress();
    handleClose();
  };

  const secondActionPress = () => {
    secondAction?.onPress && secondAction.onPress();
    handleClose();
  };
  return (
    <Animated.View
      style={[currentContainerStyle, animationContainerStyle]}
      {...(swipeEnabled ? getPanResponder().panHandlers : null)}
    >
      <View style={{ marginTop: insets.top }} />
      {title && <Text style={currentTitleStyle}>{title}</Text>}
      {text && <Text style={currentTextStyle}>{text}</Text>}
      <View style={currentActionsContainerStyle}>
        {firstAction ? (
          <TouchableOpacity onPress={firstActionPress}>
            <Text style={currentFirstActionStyle}>{firstAction.text}</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {secondAction ? (
          <TouchableOpacity onPress={secondActionPress}>
            <Text style={currentSecondActionStyle}>{secondAction.text}</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </Animated.View>
  );
};
