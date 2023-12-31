import { FC } from 'react';
import { PanResponderGestureState, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Modal, { Direction, OnSwipeCompleteParams } from 'react-native-modal';
type Animation = typeof Modal.defaultProps.animationIn;
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
     * Время скрытия компонента
     * По умолчанию 300
     */
    backdropTransitionOutTiming?: number;
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
    /**
     * Логика, выполняемая после скрытия компонента
     */
    onModalHide?: () => void;
};
export declare const BottomSheet: FC<BottomSheetProps>;
export {};
//# sourceMappingURL=BottomSheet.d.ts.map