import { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { ViewStyle } from 'react-native';
export type LinkProps = {
    label: string;
    url: string;
    size: 'M' | 'L';
    style?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    icon?: boolean;
};
export declare const Link: FC<LinkProps>;
//# sourceMappingURL=Link.d.ts.map