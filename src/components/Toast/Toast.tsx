import React, { FC, useEffect, useRef } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

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
  contentHeight = 300,
  swipeEnabled = true,
}) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const animation = useSharedValue(-contentHeight);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClose = () => {
    animation.value = withTiming(
      -contentHeight,
      { duration: animationDuration },
      (finished) => {
        finished && runOnJS(onDestroy)();
      }
    );
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return theme.background.dangerToast;
      case 'success':
        return theme.background.successToast;
      case 'warning':
        return theme.background.warningToast;
      default:
        return theme.background.accentToast;
    }
  };

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: -1,
      backgroundColor: getBackgroundColor(),
      paddingHorizontal: 20,
      width: '100%',
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    },
    title: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: theme.text.contrast,
    },
    text: {
      fontFamily: 'Nunito Sans',
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

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: animation.value }],
    };
  });

  useEffect(() => {
    animation.value = withTiming(0, { duration: animationDuration });
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

  const gesture = Gesture.Pan()
    .minDistance(15)
    .onStart(
      (event: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {
        const requirement =
          Platform.OS === 'ios'
            ? event.translationY < -15
            : event.velocityY <= -1000;
        if (requirement) {
          swipeEnabled && runOnJS(handleClose)();
        }
      }
    );

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[animatedStyles, currentContainerStyle]}>
        <View style={{ height: insets.top + 20 }} />
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
        <View style={{ height: 20 }} />
      </Animated.View>
    </GestureDetector>
  );
};
