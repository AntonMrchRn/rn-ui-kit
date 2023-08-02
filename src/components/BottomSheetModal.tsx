import {
  BottomSheetModalProps as RNBottomSheetModalProps,
  BottomSheetModal as RNBottomSheetModal,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, {
  FC,
  ForwardedRef,
  forwardRef,
  useCallback,
  useMemo,
} from 'react';
import { SharedValue } from 'react-native-reanimated';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { ModalCloseIcon } from '../icons/ModalCloseIcon';
import { StyleProp } from 'react-native';

export type BottomSheetModalProps = Omit<
  RNBottomSheetModalProps,
  'snapPoints' | 'backdropComponent'
> & {
  ref?: ForwardedRef<BottomSheetModalMethods>;
  /**
   * Массив положений высоты, которые может принимать модалка, в процентах
   */
  snapPoints?: (string | number)[] | SharedValue<(string | number)[]>;
  /**
   * Задний фон, который рендерится позади модалки
   */
  backdropComponent?: React.FC<BottomSheetBackdropProps> | null | undefined;
  /**
   * Логика нажатия на задний фон компонента
   */
  onBackdropPress?: () => void;
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
};
export const BottomSheetModal: FC<BottomSheetModalProps> = forwardRef(
  (
    {
      snapPoints,
      backdropComponent,
      style,
      backgroundStyle,
      handleStyle,
      handleIndicatorStyle,
      children,
      onBackdropPress,
      closeIconPress,
      closeIcon,
      title,
      titleStyle,
      subtitle,
      subtitleStyle,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const initSnapPoints = useMemo(() => ['80%'], []);
    const renderBackdrop = useCallback(
      (prop: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...prop}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          onPress={onBackdropPress}
        />
      ),
      [onBackdropPress]
    );
    const styles = StyleSheet.create({
      style: {
        paddingHorizontal: 20,
      },
      backgroundStyle: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      },
      handleStyle: {
        paddingBottom: 0,
      },
      handleIndicatorStyle: {
        backgroundColor: theme.background.neutralDisable,
        borderRadius: 5,
        width: 36,
        height: 4,
      },
      icon: {
        right: 0,
        top: 0,
        position: 'absolute',
      },
      indicatorBottom: {
        height: 12,
        zIndex: -1,
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
      subtitle: {
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
        color: theme.text.neutral,
        marginTop: 4,
      },
    });

    const getCloseIcon = () => {
      if (closeIcon) {
        if (typeof closeIcon === 'boolean') {
          return <ModalCloseIcon />;
        }
        return closeIcon;
      }
      return null;
    };

    const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
    const currentSubtitleStyle = StyleSheet.compose(
      styles.subtitle,
      subtitleStyle
    );

    return (
      <RNBottomSheetModal
        ref={ref}
        snapPoints={snapPoints || initSnapPoints}
        backdropComponent={backdropComponent || (renderBackdrop as any)}
        style={[styles.style, style]}
        backgroundStyle={[styles.backgroundStyle, backgroundStyle]}
        handleStyle={[styles.handleStyle, handleStyle]}
        handleIndicatorStyle={[
          styles.handleIndicatorStyle,
          handleIndicatorStyle,
        ]}
        {...props}
      >
        <TouchableOpacity style={styles.icon} onPress={closeIconPress}>
          {getCloseIcon()}
        </TouchableOpacity>
        <View style={styles.indicatorBottom} />
        {title && <Text style={currentTitleStyle}>{title}</Text>}
        {subtitle && <Text style={currentSubtitleStyle}>{subtitle}</Text>}
        {children as any}
      </RNBottomSheetModal>
    );
  }
);
