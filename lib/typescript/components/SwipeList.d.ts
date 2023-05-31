import { FC } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
export type SwipeListData = {
    id: string;
    label?: string;
    title: string;
    items: {
        id: string;
        icon?: JSX.Element;
        text: string;
    }[];
};
type Variant = 'default' | 'user' | 'coordinator' | 'delete';
export type SwipeListProps = {
    /**
     * Массив элементов для отображения в листе
     */
    data: SwipeListData[];
    /**
     * Один из вариантов отображения компонента
     */
    variant: Variant;
    /**
     * Логика нажатия первой скрытой кнопки в компоненте
     */
    fistAction: (item: SwipeListData) => void;
    /**
     * Логика нажатия второй скрытой кнопки в компоненте
     */
    secondAction: (item: SwipeListData) => void;
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль скрытого контейнера компонента
     */
    hiddenContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль нижних элементов компонента
     */
    itemsContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль контейнера скрытых кнопкок компонента
     */
    actionStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль контейнера первой скрытой кнопки компонента
     */
    firstActionStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль контейнера второй скрытой кнопки компонента
     */
    secondActionStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль лейбла компонента
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * Стиль заголовка компонента
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Стиль текста нижних элементов компонента
     */
    itemTextStyle?: StyleProp<TextStyle>;
};
export declare const SwipeList: FC<SwipeListProps>;
export {};
//# sourceMappingURL=SwipeList.d.ts.map