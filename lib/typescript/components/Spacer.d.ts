import { FC } from 'react';
export type SpaceSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
type Separator = 'top' | 'bottom';
export type SpacerProps = {
    /**
     * Размер компонента. По умолчанию 'm'
     * @default 'm'
     */
    size?: SpaceSize | number;
    /**
     * Показывать компонент в горизонтальном виде
     */
    horizontal?: boolean;
    /**
     * Разделитель между дочерними элементами
     */
    separator?: Separator;
    /**
     * Цвет разделителя между дочерними элементами
     */
    separatorColor?: string;
    /**
     * Элемент или массив элементов, отображаемые в компоненте
     */
    children?: JSX.Element | JSX.Element[];
};
export declare const Spacer: FC<SpacerProps>;
export {};
//# sourceMappingURL=Spacer.d.ts.map