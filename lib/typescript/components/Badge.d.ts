import { FC, ReactElement } from 'react';
import { StyleProp, ViewProps, TextStyle, ViewStyle } from 'react-native';
export type Variant = 'accent' | 'danger' | 'secondary' | 'warning' | 'success' | 'basic' | 'special';
export type BadgeProps = ViewProps & {
    /**
     * Иконка компонента. Может быть стандартной, кастомной или не быть
     */
    icon?: ReactElement | boolean;
    /**
     * Если true, то тип сменится на второстепенный
     */
    secondary?: boolean;
    /**
     * Ключевой параметр, который определяет тип
     * По умолчанию - 'accent'
     */
    variant?: Variant;
    /**
     * Лейбл компонента
     */
    label?: string;
    /**
     * Стиль лейбла компонента
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * Стиль контейнера иконки компонента
     */
    iconStyle?: StyleProp<ViewStyle>;
};
export declare const Badge: FC<BadgeProps>;
//# sourceMappingURL=Badge.d.ts.map