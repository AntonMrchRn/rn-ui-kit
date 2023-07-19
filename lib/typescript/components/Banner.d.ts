import { FC } from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
export type Types = 'error' | 'success' | 'warning' | 'info';
export type IconTypes = 'success' | 'info' | 'alert' | JSX.Element;
export type BannerProps = {
    /**
     * Тип компонента
     */
    type: Types;
    /**
     * Тип иконки. Может быть одним из стандартных типов, кастомной, лиюо может не быть
     */
    icon: IconTypes;
    /**
     * Размер иконки
     */
    iconSize?: number;
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Кастомная иконка закрытия баннера
     */
    closeIcon?: JSX.Element;
    /**
     * Стиль контейнера иконки
     */
    iconStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль заголовка баннера
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Стиль основного текста баннера
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * Заголовок баннера
     */
    title?: string;
    /**
     * Основной текст баннера
     */
    text?: string;
    /**
     * Выбор кастомного цвета основной иконки баннера, если не выбрана кастомная
     */
    iconColor?: string;
    /**
     * Логика нажатия на иконку закрытия баннера
     */
    onClosePress?: () => void;
    /**
     * Стиль текста кнопки баннера
     */
    buttonTextStyle?: StyleProp<TextStyle>;
    /**
     * Стиль контейнера кнопки баннера
     */
    buttonStyle?: StyleProp<ViewStyle>;
    /**
     * Логика нажатия на кнопку баннера
     */
    onButtonPress?: () => void;
    /**
     * Текст кнопки баннера
     */
    buttonText?: string;
};
export declare const Banner: FC<BannerProps>;
//# sourceMappingURL=Banner.d.ts.map