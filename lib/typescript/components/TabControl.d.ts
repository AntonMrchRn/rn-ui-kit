import React, { FC, ReactElement } from 'react';
import { ScrollViewProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
export type TabItem = {
    id: number;
    label: string;
    count?: number;
    icon?: ReactElement | boolean;
};
export type TabControlProps = Omit<ScrollViewProps, 'ref'> & {
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
    ref?: React.ForwardedRef<{
        setId(id: number): void;
    }>;
};
export declare const TabControl: FC<TabControlProps>;
//# sourceMappingURL=TabControl.d.ts.map