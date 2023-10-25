import { FC, ForwardedRef } from 'react';
import { StyleProp, TextInput, ViewStyle } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';
export type InputTimeProps = MaskInputProps & {
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Отображение компонента в стиле ошибки
     */
    isError?: boolean;
    disabled?: boolean;
    ref?: ForwardedRef<TextInput>;
};
export declare const InputTime: FC<InputTimeProps>;
//# sourceMappingURL=InputTime.d.ts.map