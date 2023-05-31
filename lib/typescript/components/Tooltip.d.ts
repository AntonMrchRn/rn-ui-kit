import { FC } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
type TriangleEdge = 'top' | 'left' | 'bottom' | 'right';
type TriagnleAlign = 'start' | 'center' | 'end';
type Coords = {
    x: number;
    y: number;
};
export type TooltipProps = {
    /**
     * Основной текст компонента
     */
    text: string;
    /**
     * Заголовок компонента
     */
    title?: string;
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль треугольника компонента
     */
    triangleStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль заголовка компонента
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Стиль основного текста компонента
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * Иконка треугольника
     */
    triangleIcon?: JSX.Element;
    /**
     * Дочерний элемент компонента
     */
    children?: JSX.Element;
    /**
     * Позиция стороны треугольника относительно компонента
     */
    triangleEdge?: TriangleEdge;
    /**
     * Позиция треугольника относительно выбранной стороны компонента.
     * По умолчанию 'top'
     */
    triagnleAlign?: TriagnleAlign;
    /**
     * Отвечает за показ компонента.
     * По умолчанию 'start'
     */
    isVisible?: boolean;
    /**
     * Логика отвечающая за закрытие компонента
     */
    onClose?: () => void;
    /**
     * Координаты компонента по осям x y относительно дочернего элемента.
     * По умолчанию { x: 0, y: 0 }
     */
    coords?: Coords;
};
export declare const Tooltip: FC<TooltipProps>;
export {};
//# sourceMappingURL=Tooltip.d.ts.map