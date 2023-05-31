import { FC } from 'react';
import { PanResponderGestureState, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Direction, OnSwipeCompleteParams } from 'react-native-modal';
type Animation = 'bounce' | 'flash' | 'jello' | 'pulse' | 'rotate' | 'rubberBand' | 'shake' | 'swing' | 'tada' | 'wobble' | 'bounceIn' | 'bounceInDown' | 'bounceInUp' | 'bounceInLeft' | 'bounceInRight' | 'bounceOut' | 'bounceOutDown' | 'bounceOutUp' | 'bounceOutLeft' | 'bounceOutRight' | 'fadeIn' | 'fadeInDown' | 'fadeInDownBig' | 'fadeInUp' | 'fadeInUpBig' | 'fadeInLeft' | 'fadeInLeftBig' | 'fadeInRight' | 'fadeInRightBig' | 'fadeOut' | 'fadeOutDown' | 'fadeOutDownBig' | 'fadeOutUp' | 'fadeOutUpBig' | 'fadeOutLeft' | 'fadeOutLeftBig' | 'fadeOutRight' | 'fadeOutRightBig' | 'flipInX' | 'flipInY' | 'flipOutX' | 'flipOutY' | 'lightSpeedIn' | 'lightSpeedOut' | 'slideInDown' | 'slideInUp' | 'slideInLeft' | 'slideInRight' | 'slideOutDown' | 'slideOutUp' | 'slideOutLeft' | 'slideOutRight' | 'zoomIn' | 'zoomInDown' | 'zoomInUp' | 'zoomInLeft' | 'zoomInRight' | 'zoomOut' | 'zoomOutDown' | 'zoomOutUp' | 'zoomOutLeft' | 'zoomOutRight';
export type BottomSheetProps = {
    /**
     * Анимация появления компонента
     */
    animationIn?: Animation;
    /**
     * Задержка в милисекундах перед появлением компонента
     */
    animationInTiming?: number;
    /**
     * Задержка в милисекундах перед исчезновением компонента
     */
    animationOutTiming?: number;
    /**
     * Анимация исчезновения компонента
     */
    animationOut?: Animation;
    /**
     * Управление состоянием видимости компонента
     */
    isVisible?: boolean;
    /**
     * Учитывать появление клавиатуры устройства
     */
    avoidKeyboard?: boolean;
    /**
     * Цвет заднего фона компонента
     */
    backdropColor?: string;
    /**
     * Непрозрачность заднего фона компонента.
     * По умолчанию 1
     */
    backdropOpacity?: number;
    /**
     * Логика нажатия на задний фон компонента
     */
    onBackdropPress?: () => void;
    /**
     * Стиль модального окна компонента
     */
    modalStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль контейнера компонента
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Стиль контейнера иконки закрытия компонента
     */
    closeIconContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Логика нажатия на иконку закрытия компонента
     */
    closeIconPress?: () => void;
    /**
     * Иконка закрытия компонента.
     * Может быть стандартной, кастомной или может не быть
     */
    closeIcon?: JSX.Element | true;
    /**
     * Заголовок компонента
     */
    title?: string;
    /**
     * Стиль заголовка компонента
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Подзаголовок компонента
     */
    subtitle?: string;
    /**
     * Стиль подзаголовка компонента
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Элемент или массив элементов, отображаемые в компоненте
     */
    children?: JSX.Element | JSX.Element[];
    /**
     * Логика, выполняемая при завершении свайпа компонента
     */
    onSwipeComplete?: (params: OnSwipeCompleteParams, gestureState: PanResponderGestureState) => void;
    /**
     * Направление свайпа компонента.
     * По умолчанию 'down'
     */
    swipeDirection?: Direction | Direction[];
};
export declare const BottomSheet: FC<BottomSheetProps>;
export {};
//# sourceMappingURL=BottomSheet.d.ts.map