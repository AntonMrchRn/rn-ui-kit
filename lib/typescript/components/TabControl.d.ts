import { FC, ReactElement } from 'react';
import { ScrollViewProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
export type TabItem = {
    name: string;
    count?: number;
    icon?: ReactElement | boolean;
};
export type TabControlProps = ScrollViewProps & {
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
    /**
     * Выбранный таб
     */
    currentTab: TabItem;
};
export declare const TabControl: FC<TabControlProps>;
//# sourceMappingURL=TabControl.d.ts.map