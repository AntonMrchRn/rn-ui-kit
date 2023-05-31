import { FC } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export type Types = 'error' | 'success' | 'warning' | 'info';
export type Action = {
    text: string;
    onPress: () => void;
    style?: StyleProp<TextStyle>;
};
export type ToastOptions = {
    /**
     * Ключевой параметр, который определяет тип
     */
    type: Types;
    /**
     * Стиль контейнера
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль внутреннего контейнера двух кнопок снизу
     */
    actionsContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Необходимые ключи для рендеринга первой кнопки
     */
    firstAction?: Action;
    /**
     * Необходимые ключи для рендеринга второй кнопки
     */
    secondAction?: Action;
    /**
     * Стиль заголовка
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Стиль основного текста
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * Заголовок
     */
    title?: string;
    /**
     * Основной текст
     */
    text?: string;
    /**
     * Задержка в миллисекундах, после которой происходит раскрытие/скрытие контейнера после срабатывания метода show.
     * По умолчанию 250
     */
    animationDuration?: number;
    /**
     * Задержка в миллисекундах, после которой происходит скрытие контейнера
     * По умолчанию 2000
     * Если выставить 0, то контейнер не будет скрыт
     */
    duration?: number;
    /**
     * Высота контейнера, которая будет отображаться после раскрытия контейнера
     * По умолчанию 170
     */
    contentHeight?: number;
    /**
     * Разрешить свайп вверх для скрытия контейнера
     * По умолчанию true
     */
    swipeEnabled?: boolean;
};
type ToastProps = ToastOptions & {
    onDestroy: () => void;
};
export declare const Toast: FC<ToastProps>;
export {};
//# sourceMappingURL=Toast.d.ts.map