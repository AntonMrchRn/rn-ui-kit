import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
type SegmentedControlProps = {
    /**
     * Массив элементов в ячейках компонента
     */
    tabs: string[];
    /**
     * Ширина компонента
     */
    width?: number;
    /**
     * Индекс выбранного элемента при инициализации.
     * По умолчанию 0
     */
    initialIndex?: number;
    /**
     * Стиль текста активного элемента компонента
     */
    activeTextStyle?: StyleProp<TextStyle>;
    /**
     * Цвет фона активного элемента
     */
    activeTabColor?: string;
    /**
     * Дополнительная ширина активного элемента при его перемещении
     */
    extraSpacing?: number;
    /**
     * Стиль компонента
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Стиль элемента в компоненте
     */
    tabStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль текста элемента в компоненте
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * Стиль выбранного элемента в компоненте
     */
    selectedTabStyle?: StyleProp<ViewStyle>;
    /**
     * Логика нажатия на элемент компонента
     */
    onChange: (index: number) => void;
};
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
export {};
//# sourceMappingURL=SegmentedControl.d.ts.map