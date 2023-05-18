import { FC, ReactElement } from 'react';
import { StyleProp, ViewProps, TextStyle } from 'react-native';
export type BadgeProps = ViewProps & {
    icon?: ReactElement | true;
    variant?: 'accent' | 'danger' | 'secondary' | 'warning' | 'success' | 'basic' | 'special';
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
};
export declare const Badge: FC<BadgeProps>;
//# sourceMappingURL=Badge.d.ts.map