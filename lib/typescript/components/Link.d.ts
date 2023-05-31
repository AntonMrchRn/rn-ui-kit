import { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { ViewStyle } from 'react-native';
type Sizes = 'M' | 'L';
export type LinkProps = {
    /**
     *  Лейбл компонента
     */
    label: string;
    /**
     *  Ссылка, по которой будет вести по нажатию на компонент
     */
    url: string;
    /**
     *  Размер компонента
     */
    size: Sizes;
    /**
     *  Стиль компонента
     */
    style?: StyleProp<ViewStyle>;
    /**
     *  Стиль лейбла компонента
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     *  Показывает стандартную иконку в компоненте
     */
    icon?: boolean;
};
export declare const Link: FC<LinkProps>;
export {};
//# sourceMappingURL=Link.d.ts.map