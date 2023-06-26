import { FC } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export type Variant = 'default' | 'user' | 'coordinator' | 'delete';
export type SwipeableItem = {
    text: string;
    icon?: JSX.Element;
};
export type SwipeableProps = {
    /**
     * Массив элементов для отображения в нижней части компонента
     */
    items?: SwipeableItem[];
    /**
     * Один из вариантов отображения компонента
     */
    variant: Variant;
    /**
     * Логика нажатия первой скрытой кнопки в компоненте
     */
    fistAction: () => void;
    /**
     * Логика нажатия второй скрытой кнопки в компоненте
     */
    secondAction: () => void;
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль скрытого контейнера компонента
     */
    hiddenContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль контейнера нижних элементов компонента
     */
    itemsContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль каждого из нижних элементов компонента
     */
    itemContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль контейнера каждой из нижних иконок элементов компонента
     */
    itemIconStyle?: StyleProp<ViewStyle>;
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
     * Лейбл компонента
     */
    label?: string;
    /**
     * Стиль лейбла компонента
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * Заголовок компонента
     */
    title: string;
    /**
     * Стиль заголовка компонента
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Стиль текста нижних элементов компонента
     */
    itemTextStyle?: StyleProp<TextStyle>;
    /**
     * Показать наличине скрытых кнопок компонента
     */
    previewActions?: boolean;
};
export declare const Swipeable: FC<SwipeableProps>;
//# sourceMappingURL=Swipeable.d.ts.map