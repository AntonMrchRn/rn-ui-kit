import { FC, ForwardedRef } from 'react';
import { StyleProp, TextInput, ViewStyle, TextStyle } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';
export type InputPhoneProps = MaskInputProps & {
    /**
     * Значение компонента
     */
    value: string;
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
     * Логика нажатия на иконку крестика
     */
    onClear?: () => void;
    /**
     * Отображение иконки с флагом
     */
    withRuFlagIcon?: boolean;
    ref?: ForwardedRef<TextInput>;
};
export declare const InputPhone: FC<InputPhoneProps>;
//# sourceMappingURL=InputPhone.d.ts.map