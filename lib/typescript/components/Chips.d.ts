import { FC } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
export type ChipsProps = {
    /**
     * Иконка компонента слева. Может быть стандартной (геолокация), кастомной или не быть совсем
     */
    icon?: JSX.Element | boolean;
    /**
     * Иконка компонента справа. Может быть стандартной (крестик), кастомной или не быть совсем
     */
    close?: JSX.Element | boolean;
    /**
     * Лейбл компонента
     */
    label?: string;
    /**
     * Стиль лейбла компонента
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Показывает, что данный компонент выбран
     */
    selected?: boolean;
    /**
     * Логика нажатия на иконку компонента справа
     */
    closeIconPress?: () => void;
    /**
     * Логика нажатия на компонент, не считая иконку справа (если она есть)
     */
    onPress?: () => void;
    /**
     * Показывает, что данный компонент задизейблен
     */
    disabled?: boolean;
};
export declare const Chips: FC<ChipsProps>;
//# sourceMappingURL=Chips.d.ts.map