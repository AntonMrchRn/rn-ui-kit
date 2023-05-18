import { FC } from 'react';
import { StyleProp, ViewProps } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';
export type InputTimeProps = MaskInputProps & {
    containerStyle?: StyleProp<ViewProps>;
    isError?: boolean;
};
export declare const InputTime: FC<InputTimeProps>;
//# sourceMappingURL=InputTime.d.ts.map