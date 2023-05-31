import { FC, ForwardedRef } from 'react';
import { StyleProp, TextInput, ViewProps } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';
export type InputTimeProps = MaskInputProps & {
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewProps>;
    /**
     * Отображение компонента в стиле ошибки
     */
    isError?: boolean;
    ref?: ForwardedRef<TextInput>;
};
export declare const InputTime: FC<InputTimeProps>;
//# sourceMappingURL=InputTime.d.ts.map