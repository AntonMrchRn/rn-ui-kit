import { FC, ForwardedRef } from 'react';
import { StyleProp, TextProps, TextInput, ViewProps } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';
export type InputPhoneProps = MaskInputProps & {
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
     * Логика нажатия на иконку крестика
     */
    onClear?: () => void;
    ref?: ForwardedRef<TextInput>;
};
export declare const InputPhone: FC<InputPhoneProps>;
//# sourceMappingURL=InputPhone.d.ts.map