import { FC } from 'react';
import { StyleProp, TextInputProps, TextProps, ViewProps } from 'react-native';
export type InputProps = TextInputProps & {
    variant: 'text' | 'message' | 'password' | 'textarea';
    containerStyle?: StyleProp<ViewProps>;
    label?: string;
    labelStyle?: StyleProp<TextProps>;
    hint?: string;
    hintStyle?: StyleProp<TextProps>;
    isError?: boolean;
};
export declare const Input: FC<InputProps>;
//# sourceMappingURL=Input.d.ts.map