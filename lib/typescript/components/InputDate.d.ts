import { FC } from 'react';
import { StyleProp, ViewProps } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';
export type InputDateProps = MaskInputProps & {
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewProps>;
    /**
     * Отображение компонента в стиле ошибки
     */
    isError?: boolean;
};
export declare const InputDate: FC<InputDateProps>;
//# sourceMappingURL=InputDate.d.ts.map