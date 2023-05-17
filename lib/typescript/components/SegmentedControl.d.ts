import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
export type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type SegmentedControlProps = {
    tabs: string[];
    width?: number;
    initialIndex?: number;
    activeTextStyle?: StyleProp<TextStyle>;
    activeTabColor?: string;
    extraSpacing?: number;
    style?: CustomStyleProp;
    tabStyle?: CustomStyleProp;
    textStyle?: CustomTextStyleProp;
    selectedTabStyle?: CustomStyleProp;
    onChange: (index: number) => void;
};
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
export {};
//# sourceMappingURL=SegmentedControl.d.ts.map