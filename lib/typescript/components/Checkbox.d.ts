import { FC, ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
export type CheckboxProps = TouchableOpacityProps & {
    /**
     * Показывает активен ли данный компонент
     */
    checked: boolean;
    /**
     * Иконка компонента в активном состоянии
     */
    icon?: ReactElement;
    /**
     * Показывает ошибку данного компонента
     */
    isError?: boolean;
};
export declare const CheckBox: FC<CheckboxProps>;
//# sourceMappingURL=Checkbox.d.ts.map