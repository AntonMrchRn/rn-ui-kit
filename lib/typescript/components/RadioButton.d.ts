import { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
export type RadioButtonProps = TouchableOpacityProps & {
    /**
     * Показывает активен ли данный компонент
     */
    checked: boolean;
    /**
     * Показывает ошибку данного компонента
     */
    isError?: boolean;
};
export declare const RadioButton: FC<RadioButtonProps>;
//# sourceMappingURL=RadioButton.d.ts.map