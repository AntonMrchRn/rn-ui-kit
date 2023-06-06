import { FC, ForwardedRef } from 'react';
import { StyleProp, TextInput, ViewStyle } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';
export type InputDateProps = MaskInputProps & {
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Отображение компонента в стиле ошибки
     */
    isError?: boolean;
    ref?: ForwardedRef<TextInput>;
};
export declare const InputDate: FC<InputDateProps>;
//# sourceMappingURL=InputDate.d.ts.map