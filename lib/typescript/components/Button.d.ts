import { FC, ReactElement } from 'react';
import { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';
export type Sizes = 'M' | 'S';
export type Variant = 'accent' | 'danger' | 'outlineAccent' | 'outlineDanger' | 'ghost' | 'dangerGhost' | 'secondary';
export type ButtonProps = TouchableOpacityProps & {
    /**
     * Тип иконки компонента.
     * Может быть стандартной, кастомной или не быть совсем
     */
    icon?: ReactElement | boolean;
    /**
     * Размер компонента.
     * По умолчанию 'M'
     */
    size?: Sizes;
    /**
     * Показывает ActivityIndicator вместо иконки
     */
    isPending?: boolean;
    /**
     * Тип компонента.
     * По умолчанию 'accent'
     */
    variant?: Variant;
    /**
     *Лейбл компонента
     */
    label?: string;
    /**
     * Стиль лейбла компонента
     */
    labelStyle?: StyleProp<TextStyle>;
};
export declare const Button: FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map