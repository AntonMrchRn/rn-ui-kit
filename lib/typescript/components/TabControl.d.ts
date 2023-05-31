import { FC, ReactElement } from 'react';
import { StyleProp, TextStyle } from 'react-native';
export type TabItem = {
    id: number;
    label: string;
    count?: number;
    onPress?: () => void;
    icon?: ReactElement | boolean;
};
export type TabControlProps = {
    /**
     * Индекс изначально выбранного элемента
     */
    initialId?: number;
    /**
     * Массив элементов компонента
     */
    data: TabItem[];
    /**
     * Стиль лейбла элементов компонента
     */
    labelStyle?: StyleProp<TextStyle>;
};
export declare const TabControl: FC<TabControlProps>;
//# sourceMappingURL=TabControl.d.ts.map