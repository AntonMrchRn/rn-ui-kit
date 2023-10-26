import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
export type SegmentedControlProps = {
    /**
     * Массив элементов в ячейках компонента
     */
    tabs: string[];
    /**
     * Ширина компонента
     */
    width?: number;
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
    /**
     * id выбранного таба
     */
    currentTabId: number;
};
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
//# sourceMappingURL=SegmentedControl.d.ts.map