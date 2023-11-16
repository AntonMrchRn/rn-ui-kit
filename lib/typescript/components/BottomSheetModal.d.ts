import { BottomSheetModalProps as RNBottomSheetModalProps, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, { FC, ForwardedRef } from 'react';
import { SharedValue } from 'react-native-reanimated';
import { TextStyle, ViewStyle } from 'react-native';
import { StyleProp } from 'react-native';
export type BottomSheetModalProps = Omit<RNBottomSheetModalProps, 'snapPoints' | 'backdropComponent'> & {
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
    /**
     * Стиль иконки закрытия компонента
     */
    closeIconStyle?: StyleProp<ViewStyle>;
};
export declare const BottomSheetModal: FC<BottomSheetModalProps>;
//# sourceMappingURL=BottomSheetModal.d.ts.map