import React, { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { CodeFieldProps, RenderCellOptions } from 'react-native-confirmation-code-field';
export type InputCodeProps = Omit<CodeFieldProps, 'hint' | 'hintStyle' | 'renderCell'> & {
    /**
     * Подсказка компонента
     */
    hint?: string;
    /**
     * Стиль подсказки компонента
     */
    hintStyle?: StyleProp<TextStyle>;
    renderCell?: (options: RenderCellOptions) => React.ReactNode;
};
export declare const InputCode: FC<InputCodeProps>;
//# sourceMappingURL=InputCode.d.ts.map