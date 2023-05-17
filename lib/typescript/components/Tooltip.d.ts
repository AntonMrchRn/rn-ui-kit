import { FC } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export type TooltipProps = {
    text: string;
    title?: string;
    containerStyle?: StyleProp<ViewStyle>;
    triangleStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    textStyle?: StyleProp<TextStyle>;
    triangleIcon?: JSX.Element;
    children?: JSX.Element;
    triangleEdge?: 'top' | 'left' | 'bottom' | 'right';
    triagnleAlign?: 'start' | 'center' | 'end';
    isVisible?: boolean;
    onClose?: () => void;
    coords?: {
        x: number;
        y: number;
    };
};
export declare const Tooltip: FC<TooltipProps>;
//# sourceMappingURL=Tooltip.d.ts.map