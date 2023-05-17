import { FC, ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
export type CheckboxProps = TouchableOpacityProps & {
    checked: boolean;
    icon?: ReactElement;
};
export declare const CheckBox: FC<CheckboxProps>;
//# sourceMappingURL=Checkbox.d.ts.map