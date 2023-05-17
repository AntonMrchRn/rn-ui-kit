import React, { FC } from 'react';
import { CodeFieldProps, RenderCellOptions } from 'react-native-confirmation-code-field';
export type InputCodeProps = Omit<CodeFieldProps, 'renderCell'> & {
    renderCell?: (options: RenderCellOptions) => React.ReactNode;
};
export declare const InputCode: FC<InputCodeProps>;
//# sourceMappingURL=InputCode.d.ts.map