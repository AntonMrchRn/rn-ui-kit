import { FC, ReactElement } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export type TabItem = {
    id: number;
    label: string;
    count?: number;
    icon?: ReactElement | boolean;
};
export type TabControlProps = {
    /**
     * Индекс изначально выбранного элемента
     */
    initialId?: number;
    /**
     * Логика при изменении выбранного элемента
     */
    onChange?: (item: TabItem) => void;
    /**
     * Массив элементов компонента
     */
    data: TabItem[];
    /**
     * Стиль лейбла элементов компонента
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * Стиль контейнера иконки компонента
     */
    iconContainerStyle?: StyleProp<ViewStyle>;
};
export declare const TabControl: FC<TabControlProps>;
//# sourceMappingURL=TabControl.d.ts.map