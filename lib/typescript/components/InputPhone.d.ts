import { FC } from 'react';
import { StyleProp, TextProps, ViewProps } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';
export type InputPhoneProps = MaskInputProps & {
    containerStyle?: StyleProp<ViewProps>;
    label?: string;
    labelStyle?: StyleProp<TextProps>;
    hint?: string;
    hintStyle?: StyleProp<TextProps>;
    isError?: boolean;
};
export declare const InputPhone: FC<InputPhoneProps>;
//# sourceMappingURL=InputPhone.d.ts.map