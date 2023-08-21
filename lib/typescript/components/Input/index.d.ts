import { FC, ForwardedRef } from 'react';
import { StyleProp, TextInputProps, TextInput, ViewStyle, TextStyle } from 'react-native';
type Variant = 'text' | 'message' | 'password' | 'textarea' | 'number';
export type InputProps = TextInputProps & {
    /**
     * Тип компонента
     */
    variant: Variant;
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Лейбл компонента
     */
    label?: string;
    /**
     * Стиль лейбла компонента
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * Отображение анимированного лейбла
     */
    isAnimatedLabel?: boolean;
    /**
     * Подсказка компонента
     */
    hint?: string;
    /**
     * Стиль подсказки компонента
     */
    hintStyle?: StyleProp<TextStyle>;
    /**
     * Отображение компонента в стиле ошибки
     */
    isError?: boolean;
    /**
     * Логика нажатия на иконку крестика, если variant 'text' или 'number'
     */
    onClear?: () => void;
    /**
     * Иконка слева от инпута
     */
    iconLeft?: JSX.Element;
    /**
     * Стиль контейнера иконки слева от инпута
     */
    iconLeftStyle?: StyleProp<ViewStyle>;
    ref?: ForwardedRef<TextInput>;
};
export declare const Input: FC<InputProps>;
export {};
//# sourceMappingURL=index.d.ts.map