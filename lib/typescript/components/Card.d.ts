import { FC, ReactElement } from 'react';
import { ViewProps } from 'react-native';
export type CardProps = ViewProps & {
    /**
     * Элемент или массив элементов, отображаемые в компоненте
     */
    children?: ReactElement | ReactElement[];
    /**
     * Отображение тени карточки
     */
    isShadow?: boolean;
};
export declare const Card: FC<CardProps>;
//# sourceMappingURL=Card.d.ts.map