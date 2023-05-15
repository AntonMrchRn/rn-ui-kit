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

export type TooltipProps = {
  text: string;
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  triangleStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  triangleIcon?: JSX.Element;
  children?: JSX.Element;
  triangleEdge?: 'top' | 'left' | 'bottom' | 'right';
  triagnleAlign?: 'start' | 'center' | 'end';
  isVisible?: boolean;
  onClose?: () => void;
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
}) => {
  const theme = useTheme();
  const [state, setState] = useState({ x: 0, y: 0 });
  console.log('🚀 ~ file: Tooltip.tsx:46 ~ state:', state);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 16,
      position: 'relative',
      alignSelf: 'flex-start',
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
    },
  });

  const triangleStyles: any = {
    top: {
      start: {
        position: 'absolute',
        top: -8,
        left: 12,
      },
      center: {
        position: 'absolute',
        top: -8,
        left: '48%',
      },
      end: {
        position: 'absolute',
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
    ref?.current?.measureInWindow((x, y) => {
      setState({ x, y });
    });
  }, [isVisible]);

  return (
    <View ref={ref}>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropColor="transparent"
        backdropOpacity={1}
        style={{ top: state.y, left: state.x, position: 'absolute' }}
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
