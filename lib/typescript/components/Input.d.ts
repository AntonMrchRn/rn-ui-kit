import { FC, ForwardedRef } from 'react';
import { StyleProp, TextInputProps, TextInput, ViewStyle, TextStyle } from 'react-native';
type Variant = 'text' | 'message' | 'password' | 'textarea';
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
     * Логика нажатия на иконку крестика, если variant === 'text'
     */
    onClear?: () => void;
    ref?: ForwardedRef<TextInput>;
};
export declare const Input: FC<InputProps>;
export {};
//# sourceMappingURL=Input.d.ts.map