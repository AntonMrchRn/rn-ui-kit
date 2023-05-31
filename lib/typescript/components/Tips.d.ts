import { FC } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
type Types = 'error' | 'success' | 'warning' | 'info';
export type TipsProps = {
    /**
     * Основной текст компонента
     */
    text?: string;
    /**
     * Логика нажатия на кнопку компонента
     */
    onButtonPress?: () => void;
    /**
     * Текст кнопки компонента
     */
    buttonText?: string;
    /**
     * Тип компонента
     */
    type: Types;
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль контейнера кнопки компонента
     */
    buttonStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль основного текста компонента
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * Стиль текста кнопки компонента
     */
    buttonTextStyle?: StyleProp<TextStyle>;
};
export declare const Tips: FC<TipsProps>;
export {};
//# sourceMappingURL=Tips.d.ts.map