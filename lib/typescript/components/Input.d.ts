import { FC, ForwardedRef } from 'react';
import { StyleProp, TextInputProps, TextProps, TextInput, ViewProps } from 'react-native';
type Variant = 'text' | 'message' | 'password' | 'textarea';
export type InputProps = TextInputProps & {
    /**
     * Тип компонента
     */
    variant: Variant;
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewProps>;
    /**
     * Лейбл компонента
     */
    label?: string;
    /**
     * Стиль лейбла компонента
     */
    labelStyle?: StyleProp<TextProps>;
    /**
     * Подсказка компонента
     */
    hint?: string;
    /**
     * Стиль подсказки компонента
     */
    hintStyle?: StyleProp<TextProps>;
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