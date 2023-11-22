import React, { FC, useEffect, useRef, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { TriangleIcon } from '../icons/TriangleIcon';
import { TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';

type TriangleEdge = 'top' | 'left' | 'bottom' | 'right';
type TriagnleAlign = 'start' | 'center' | 'end';
type Coords = { x: number; y: number };
export type TooltipProps = {
  /**
   * Основной текст компонента
   */
  text: string;
  /**
   * Заголовок компонента
   */
  title?: string;
  /**
   * Стиль контейнера компонента
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль треугольника компонента
   */
  triangleStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль заголовка компонента
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Стиль основного текста компонента
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * Иконка треугольника
   */
  triangleIcon?: JSX.Element;
  /**
   * Дочерний элемент компонента
   */
  children?: JSX.Element;
  /**
   * Позиция стороны треугольника относительно компонента
   */
  triangleEdge?: TriangleEdge;
  /**
   * Позиция треугольника относительно выбранной стороны компонента.
   * По умолчанию 'top'
   */
  triagnleAlign?: TriagnleAlign;
  /**
   * Отвечает за показ компонента.
   * По умолчанию 'start'
   */
  isVisible?: boolean;
  /**
   * Логика отвечающая за закрытие компонента
   */
  onClose?: () => void;
  /**
   * Координаты компонента по осям x y относительно дочернего элемента.
   * По умолчанию { x: 0, y: 0 }
   */
  coords?: Coords;
};

export const Tooltip: FC<TooltipProps> = ({
  text,
  title,
  containerStyle,
  titleStyle,
  textStyle,
  triangleIcon,
  triangleStyle,
  triangleEdge = 'top',
  triagnleAlign = 'start',
  isVisible = false,
  onClose,
  children,
  coords = { x: 0, y: 0 },
}) => {
  const theme = useTheme();
  const [measure, setMeasure] = useState({ x: 0, y: 0 });

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#373737',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 16,
      position: 'relative',
      alignSelf: 'flex-start',
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
    },
    modal: {
      top: measure.y - coords.y,
      left: measure.x + coords.x,
      position: 'absolute',
    },
  });

  const triangleStyles: any = {
    top: {
      start: {
        position: 'absolute',
        opacity: 0.65,
        top: -8,
        left: 12,
      },
      center: {
        position: 'absolute',
        opacity: 0.65,
        top: -8,
        left: '48%',
      },
      end: {
        position: 'absolute',
        opacity: 0.65,
        top: -8,
        right: 12,
      },
    },
    left: {
      start: {
        position: 'absolute',
        top: 12,
        left: -14,
        transform: [{ rotate: '270deg' }],
      },
      center: {
        position: 'absolute',
        top: '60%',
        left: -14,
        transform: [{ rotate: '270deg' }],
      },
      end: {
        position: 'absolute',
        bottom: 12,
        left: -14,
        transform: [{ rotate: '270deg' }],
      },
    },
    right: {
      start: {
        position: 'absolute',
        top: 12,
        right: -14,
        transform: [{ rotate: '90deg' }],
      },
      center: {
        position: 'absolute',
        top: '60%',
        right: -14,
        transform: [{ rotate: '90deg' }],
      },
      end: {
        position: 'absolute',
        bottom: 12,
        right: -14,
        transform: [{ rotate: '90deg' }],
      },
    },
    bottom: {
      start: {
        position: 'absolute',
        bottom: -8,
        left: 12,
        transform: [{ rotate: '180deg' }],
      },
      center: {
        position: 'absolute',
        bottom: -8,
        left: '48%',
        transform: [{ rotate: '180deg' }],
      },
      end: {
        position: 'absolute',
        bottom: -8,
        right: 12,
        transform: [{ rotate: '180deg' }],
      },
    },
  };

  const currentContainerStyle = StyleSheet.compose(
    styles.container,
    containerStyle
  );
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = StyleSheet.compose(styles.text, textStyle);
  const currentTriangleStyle = StyleSheet.compose(
    triangleStyles[triangleEdge][triagnleAlign],
    triangleStyle
  );
  const ref = useRef<View>(null);

  useEffect(() => {
    if (isVisible) {
      ref?.current?.measureInWindow((x, y) => {
        setMeasure({ x, y });
      });
    }
  }, [isVisible, measure]);

  return (
    <View ref={ref} collapsable={false}>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropColor="transparent"
        backdropOpacity={1}
        style={styles.modal}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={currentContainerStyle}>
            <View style={currentTriangleStyle}>
              {triangleIcon || <TriangleIcon />}
            </View>
            {title && <Text style={currentTitleStyle}>{title}</Text>}
            <Text style={currentTextStyle}>{text}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View>{children}</View>
    </View>
  );
};
