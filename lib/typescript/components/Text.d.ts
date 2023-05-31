import { FC } from 'react';
import { TextProps as RNTextProps } from 'react-native';
export declare const typography: {
    title1: {
        fontFamily: string;
        fontStyle: "normal";
        fontWeight: "700";
        fontSize: number;
        lineHeight: number;
    };
    title2: {
        fontFamily: string;
        fontStyle: "normal";
        fontWeight: "700";
        fontSize: number;
        lineHeight: number;
    };
    title3: {
        fontFamily: string;
        fontStyle: "normal";
        fontWeight: "600";
        fontSize: number;
        lineHeight: number;
    };
    bodyMRegular: {
        fontFamily: string;
        fontStyle: "normal";
        fontWeight: "400";
        fontSize: number;
        lineHeight: number;
    };
    bodyMBold: {
        fontFamily: string;
        fontStyle: "normal";
        fontWeight: "700";
        fontSize: number;
        lineHeight: number;
    };
    bodySRegular: {
        fontFamily: string;
        fontStyle: "normal";
        fontWeight: "400";
        fontSize: number;
        lineHeight: number;
    };
    bodySBold: {
        fontFamily: string;
        fontStyle: "normal";
        fontWeight: "700";
        fontSize: number;
        lineHeight: number;
    };
    captionRegular: {
        fontFamily: string;
        fontStyle: "normal";
        fontWeight: "400";
        fontSize: number;
        lineHeight: number;
    };
    captionBold: {
        fontFamily: string;
        fontStyle: "normal";
        fontWeight: "700";
        fontSize: number;
        lineHeight: number;
    };
    tabBarLabel: {
        fontFamily: string;
        fontStyle: "normal";
        fontWeight: "400";
        fontSize: number;
        lineHeight: number;
    };
};
export type Variant = 'title1' | 'title2' | 'title3' | 'bodyMRegular' | 'bodyMBold' | 'bodySRegular' | 'bodySBold' | 'captionRegular' | 'captionBold' | 'tabBarLabel';
export type TextProps = RNTextProps & {
    /**
     * Должен быть указан один из дефолтных типов, описанных в компоненте. Стили можно перебить через проп style
     *
     */
    variant: Variant;
};
export declare const Text: FC<TextProps>;
//# sourceMappingURL=Text.d.ts.map